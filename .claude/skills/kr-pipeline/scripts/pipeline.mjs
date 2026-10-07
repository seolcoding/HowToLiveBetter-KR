// .claude/skills/kr-pipeline/scripts/pipeline.mjs — 한국 현지화 파이프라인의 상태 판정·실행 생성·조립(결정론, LLM 호출 없음).
//
// 사용:
//   node .claude/skills/kr-pipeline/scripts/pipeline.mjs status [N] [--json]   절별 단계와 다음 할 일
//   node .claude/skills/kr-pipeline/scripts/pipeline.mjs new-run N [--style B] [--mode standard]
//        → kr-harness/runs/RNN-절-styleS/ 생성 + S4(문체 변환) 실행 → 4-styled.md
//   node .claude/skills/kr-pipeline/scripts/pipeline.mjs assemble RNN [--allow-conditional]
//        → 7-refined > 6-polished > 4-styled 중 최상위를 book-kr/에 조립하고 README 표를 ✅로
//   node .claude/skills/kr-pipeline/scripts/pipeline.mjs launch [N...] [--until S8] [--env kr-research]
//        → 절마다 claude.ai/code 세션 미리 채우기 URL(N 생략 시 다음 후보 5개). 절 하나 = 세션 하나 = 브랜치 하나로 병렬 실행
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const findRoot = () => {
  let d = dirname(fileURLToPath(import.meta.url));
  while (!existsSync(join(d, 'KR-GUIDE.md'))) {
    const up = dirname(d);
    if (up === d) throw new Error('저장소 루트(KR-GUIDE.md)를 찾지 못했습니다');
    d = up;
  }
  return d;
};
const ROOT = findRoot();
const H = join(ROOT, 'kr-harness');
const RUNS = join(H, 'runs');
const CHAPTERS = join(H, 'chapters');
const BOOKKR = join(ROOT, 'book-kr');
const SKILLS = join(ROOT, '.claude', 'skills');

const read = (p) => (existsSync(p) ? readFileSync(p, 'utf8') : '');
const jread = (p) => { try { return JSON.parse(read(p)); } catch { return {}; } };
const jwrite = (p, o) => writeFileSync(p, JSON.stringify(o, null, 2) + '\n', 'utf8');
const today = () => new Date().toISOString().slice(0, 10);
const nn = (n) => String(n).padStart(2, '0');
const dirs = (p) => (existsSync(p) ? readdirSync(p).filter((d) => statSync(join(p, d)).isDirectory()).sort() : []);

const STAGE_FILES = [['7-refined.md', 'S7'], ['6-polished.md', 'S6'], ['5-verify.md', 'S5'], ['4-styled.md', 'S4']];

const readmeRows = () => {
  const rows = {};
  for (const line of read(join(BOOKKR, 'README.md')).split(/\r?\n/)) {
    const m = line.match(/^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|[^|]*\|\s*(\S+)\s*\|\s*(\S+)\s*\|$/);
    if (m) rows[Number(m[1])] = { title: m[2], grade: m[3], status: m[4] };
  }
  return rows;
};

const runsOf = (n) =>
  dirs(RUNS)
    .map((d) => ({ d, cfg: jread(join(RUNS, d, 'config.json')), meta: jread(join(RUNS, d, 'meta.json')) }))
    .filter((r) => Number(r.cfg.chapter) === n)
    .map((r) => {
      const best = STAGE_FILES.find(([f]) => existsSync(join(RUNS, r.d, f)));
      return { id: r.cfg.id || r.d.slice(0, 3), dir: r.d, style: r.cfg.style, mode: r.cfg.mode, stage: best?.[1] ?? 'S0', verify: r.meta.verify ?? null, status: r.meta.status ?? null };
    });

const chapterStatus = (n, rows) => {
  const ch = join(CHAPTERS, nn(n));
  const made = ['1-analysis.md', '2-research.md', '3-draft.md'].map((f) => existsSync(join(ch, f)));
  const runs = runsOf(n);
  // 주력 실행: 문체 B, 재현성 실험 제외, 가장 최근 번호
  const main = runs.filter((r) => r.style === 'B' && r.mode !== 'repro').at(-1) ?? null;
  const row = rows[n] ?? {};
  let next;
  if (!made[2]) next = { stage: 'S1-S3', action: `kr-localize 스킬로 제${n}절 분석·조사·초역 (kr-localizer 서브에이전트)` };
  else if (!main) next = { stage: 'S4', action: `pipeline.mjs new-run ${n}` };
  else if (main.stage === 'S4' || main.stage === 'S5') next = main.stage === 'S4' ? { stage: 'S5', action: `verify.mjs ${main.id}` } : { stage: 'S6', action: `kr-polish 스킬로 ${main.id} 윤문 (kr-polisher 서브에이전트)` };
  else if (main.stage === 'S6') next = { stage: 'S7', action: `kr-refine 스킬로 ${main.id} 항목별 개선 (항목마다 kr-entry-refiner)` };
  else if (row.status !== '✅') next = { stage: 'S8', action: `verify.mjs ${main.id} → pipeline.mjs assemble ${main.id}` };
  else next = { stage: '완료', action: 'TODO 2차 조사만 남음' };
  if (main?.verify === '반려') next = { stage: '수정', action: `${main.id} 반려 — 5-verify.md 이슈부터 해결` };
  return { n, title: row.title ?? '?', grade: row.grade ?? '?', readme: row.status ?? '?', made, runs, main: main?.id ?? null, next };
};

const [cmd, ...argv] = process.argv.slice(2);
const flag = (k, d) => { const a = argv.find((x) => x.startsWith(`--${k}`)); if (!a) return d; const v = a.split('=')[1] ?? argv[argv.indexOf(a) + 1]; return v ?? true; };
const pos = argv.filter((a, i) => !a.startsWith('--') && !(i > 0 && argv[i - 1].startsWith('--') && !argv[i - 1].includes('=')));

const nextCandidates = (st) => st.filter((s) => s.next.stage !== '완료').sort((a, b) => '🟢🟡🔴'.indexOf(a.grade) - '🟢🟡🔴'.indexOf(b.grade)).slice(0, 5).map((s) => s.n);
const chapterList = () => { const rows = readmeRows(); return nextCandidates(Array.from({ length: 34 }, (_, i) => chapterStatus(i + 1, rows))); };

if (cmd === 'status' || !cmd) {
  const rows = readmeRows();
  const only = pos[0] ? [Number(pos[0])] : Array.from({ length: 34 }, (_, i) => i + 1);
  const st = only.map((n) => chapterStatus(n, rows));
  if (argv.includes('--json')) { console.log(JSON.stringify(st, null, 1)); process.exit(0); }
  const mark = (b) => (b ? '■' : '□');
  for (const s of st) {
    const runs = s.runs.map((r) => `${r.id}${r.style}:${r.stage}${r.verify ? '/' + r.verify : ''}`).join(' ');
    console.log(`제${nn(s.n)}절 ${s.readme} ${s.grade} ${s.title.padEnd(14, ' ')} 제작${s.made.map(mark).join('')}  ${runs || '-'}\n        → [${s.next.stage}] ${s.next.action}`);
  }
  const done = st.filter((s) => s.readme === '✅').length;
  console.log(`\n완료 ${done}/${st.length}절. 다음 후보(🟢·🟡 우선): ${nextCandidates(st).join(', ')}`);
} else if (cmd === 'new-run') {
  const n = Number(pos[0]);
  const style = String(flag('style', 'B'));
  const mode = String(flag('mode', 'standard'));
  const draft = join(CHAPTERS, nn(n), '3-draft.md');
  if (!existsSync(draft)) { console.error(`초역 없음: ${draft} — S1-S3(kr-localize)부터`); process.exit(1); }
  const max = Math.max(0, ...dirs(RUNS).map((d) => Number(d.match(/^R(\d+)/)?.[1] ?? 0)));
  const id = `R${nn(max + 1)}`;
  const dir = join(RUNS, `${id}-${nn(n)}-style${style}${mode === 'repro' ? '-repro' : ''}`);
  mkdirSync(dir, { recursive: true });
  const cfg = { id, chapter: n, style, mode, date: today() };
  jwrite(join(dir, 'config.json'), cfg);
  const out = join(dir, '4-styled.md');
  if (style === 'B') {
    const r = spawnSync(process.execPath, [join(SKILLS, 'kr-style', 'scripts', 'convert-b.mjs'), draft, out], { encoding: 'utf8' });
    process.stdout.write(r.stdout + r.stderr);
    if (r.status !== 0) process.exit(r.status ?? 1);
  } else copyFileSync(draft, out); // 초역은 A(평어체)로 쓰여 있다
  jwrite(join(dir, 'meta.json'), { ...cfg, status: 'styled', style_notes: style === 'B' ? 'convert-b.mjs 결정론 변환' : '초역 그대로' });
  console.log(`실행 생성: kr-harness/runs/${dir.split(/[\\/]/).pop()} (S4 완료 → 다음: verify.mjs ${id})`);
} else if (cmd === 'assemble') {
  const id = pos[0];
  const d = dirs(RUNS).find((x) => x.startsWith(id + '-'));
  if (!d) { console.error(`실행 폴더 없음: ${id}`); process.exit(1); }
  const dir = join(RUNS, d);
  const cfg = jread(join(dir, 'config.json'));
  const meta = jread(join(dir, 'meta.json'));
  if (!meta.verify) { console.error(`${id}: 검증 기록 없음 — verify.mjs ${id} 먼저`); process.exit(1); }
  if (meta.verify === '반려') { console.error(`${id}: 반려 판정 — 조립 불가`); process.exit(1); }
  const [srcName] = STAGE_FILES.find(([f]) => f !== '5-verify.md' && existsSync(join(dir, f))) ?? [];
  const body = read(join(dir, srcName));
  const target = readdirSync(BOOKKR).find((f) => f.startsWith(`${nn(cfg.chapter)}-`) && f.endsWith('.md'));
  if (!target) { console.error(`book-kr/${nn(cfg.chapter)}-*.md 없음`); process.exit(1); }
  const old = read(join(BOOKKR, target));
  const banner = old.split(/\r?\n/).find((l) => l.startsWith('> **상태:')) ?? '';
  const tail = banner.replace(/^> \*\*상태:[^*]*\*\*/, '');
  const todos = (body.slice(Math.max(0, body.search(/^## TODO/m))).match(/^(?:\d+\.|-) /gm) || []).length;
  const stageLabel = { '7-refined.md': '항목별 개선본', '6-polished.md': '윤문본', '4-styled.md': '문체 변환본' }[srcName];
  const newBanner = `> **상태: ✅ 현지화·검증 완료 (${id} ${stageLabel}, 검증 ${meta.verify}) — TODO ${todos}건**${tail}`;
  writeFileSync(join(BOOKKR, target), `${newBanner}\n\n${body.replace(/^﻿/, '')}`, 'utf8');
  const readme = join(BOOKKR, 'README.md');
  const re = new RegExp(`^(\\|\\s*${cfg.chapter}\\s*\\|(?:[^|]*\\|){3}\\s*)\\S+(\\s*\\|)$`, 'm');
  writeFileSync(readme, read(readme).replace(re, '$1✅$2'), 'utf8');
  jwrite(join(dir, 'meta.json'), { ...meta, status: 'assembled', assembled_from: srcName, assembled_at: today() });
  console.log(`조립: ${srcName} → book-kr/${target} (README 제${cfg.chapter}절 ✅, TODO ${todos}건)`);
} else if (cmd === 'launch') {
  // claude.ai/code 세션 미리 채우기 URL(prompt·repositories·environment 쿼리 매개변수). 누르면 바로 클라우드 세션이 열린다.
  const origin = spawnSync('git', ['remote', 'get-url', 'origin'], { cwd: ROOT, encoding: 'utf8' }).stdout.trim();
  const repo = String(flag('repo', origin.match(/github\.com[:/]([^/]+\/[^/.]+?)(?:\.git)?$/)?.[1] ?? ''));
  const until = String(flag('until', 'S8'));
  const env = String(flag('env', 'kr-research'));
  const ns = pos.length ? pos : chapterList();
  for (const n of ns) {
    const q = new URLSearchParams({ prompt: `/kr-pipeline ${n} --until ${until}`, repositories: repo, environment: env });
    console.log(`제${nn(Number(n))}절  https://claude.ai/code?${q.toString().replace(/\+/g, '%20')}`);
  }
} else {
  console.error('사용: pipeline.mjs status|new-run|assemble|launch ...');
  process.exit(2);
}
