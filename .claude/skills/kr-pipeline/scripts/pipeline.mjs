// .claude/skills/kr-pipeline/scripts/pipeline.mjs — 한국 현지화 파이프라인의 상태 판정·실행 생성·조립(결정론, LLM 호출 없음).
//
// 사용:
//   node .claude/skills/kr-pipeline/scripts/pipeline.mjs status [N] [--json]   절별 단계와 다음 할 일
//   node .claude/skills/kr-pipeline/scripts/pipeline.mjs new-run N [--style B] [--mode standard]
//        → kr-harness/runs/<ID>-절-styleS/ 생성 + S4(문체 변환) 실행 → 4-styled.md
//          ID는 R + 절 번호 두 자리 + 절 안 순번(제18절이면 R18a, R18b…). 규칙과 옛 ID(R01~R14)와의 공존은 run-id.mjs 머리말.
//   node .claude/skills/kr-pipeline/scripts/pipeline.mjs assemble <ID> [--allow-conditional]
//        → 7-refined > 6-polished > 4-styled 중 최상위를 book-kr/에 조립하고 README 표를 ✅로
//   node .claude/skills/kr-pipeline/scripts/pipeline.mjs launch [N...] [--until S8] [--env kr-research]
//        → 절마다 claude.ai/code 세션 미리 채우기 URL(N 생략 시 다음 후보 5개). 절 하나 = 세션 하나 = 브랜치 하나로 병렬 실행
//   node .claude/skills/kr-pipeline/scripts/pipeline.mjs gate [N...|--all-done] [--demote|--promote] [--save]
//        → 한국 적합성 게이트: ① kr-fit --check 통과 ② kr-harness/chapters/NN/kr-fit-review.md 마지막 줄 KR-FIT: pass blockers=0
//          ③ 그 줄의 sha256=이 지금 검사 대상 본문의 해시(kr-fit.mjs <대상> --hash)와 같음. 셋 다 필요하다.
//          해시가 없거나 다르면 「리뷰가 본문보다 오래됨 → 재검토 필요」로 실패. 하나라도 실패하면 종료코드 1.
//          --demote: 실패한 ✅ 절을 🟨로 내림. --promote: 통과한 🟨 절을 ✅로 올림.
//          --save: kr-harness/chapters/NN/kr-fit-lint.txt 저장(내용이 같으면 안 씀). 없으면 파일을 쓰지 않는다(CI용).
//
// ✅의 조건(2026-10-10): S5 검증 + 적합성 게이트. assemble은 게이트를 통과하지 못하면 조립하지 않는다(우회 플래그 없음).
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { lintFile, saveLint, fileHash } from '../../kr-verify/scripts/kr-fit.mjs';
import { runIdOfDir, sortRunDirs, findRunDir, reserveRunDir } from './run-id.mjs';

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

// ---- 한국 적합성 게이트 ----
// 검사 대상: README가 ✅·🟨(이미 book-kr/에 들어간 절)이면 book-kr/NN-*.md — 독자가 보는 본문이고 1-C 수정도 여기서 한다.
// 그 밖에 조립 전인 주력 실행이 있으면 그 실행의 최상위 산출물(7>6>4). main=null이면 book-kr.
const bookKrFile = (n) => {
  const f = existsSync(BOOKKR) ? readdirSync(BOOKKR).find((x) => x.startsWith(`${nn(n)}-`) && x.endsWith('.md')) : null;
  return f ? join(BOOKKR, f) : null;
};
// 리뷰 판정은 kr-fit-review.md의 마지막 비어 있지 않은 줄만 읽는다. 형식: KR-FIT: pass|fail blockers=N sha256=<64자>
// sha256은 검토 시점 대상 본문의 해시(kr-fit.mjs <대상> --hash, 정규화 규칙은 kr-fit.mjs의 normalizeForHash).
// 지금 본문의 해시와 다르거나 없으면 review='stale'(리뷰가 본문보다 오래됨 → 재검토 필요). 우회 수단은 없다.
const reviewOf = (n, targetPath) => {
  const p = join(CHAPTERS, nn(n), 'kr-fit-review.md');
  if (!existsSync(p)) return { review: '없음', blockers: null, verdict: null, hash: null };
  const last = read(p).split(/\r?\n/).map((l) => l.trim()).filter(Boolean).at(-1) ?? '';
  const m = last.match(/^KR-FIT:\s*(pass|fail)\s+blockers=(\d+)(?:\s+sha256=(\S+))?$/);
  if (!m) return { review: '형식 오류', blockers: null, verdict: null, hash: null };
  const blockers = Number(m[2]);
  const verdict = m[1] === 'pass' && blockers === 0 ? 'pass' : 'fail';
  if (!m[3]) return { review: 'stale', stale: '해시 없음', verdict, blockers, hash: null };
  if (!/^[0-9a-f]{64}$/.test(m[3])) return { review: '형식 오류', verdict, blockers, hash: null };
  if (!targetPath || m[3] !== fileHash(targetPath)) return { review: 'stale', stale: '해시 불일치', verdict, blockers, hash: m[3] };
  return { review: verdict, verdict, blockers, hash: m[3] };
};
const gateOf = (n, main) => {
  const runFile = main && main.status !== 'assembled'
    ? ['7-refined.md', '6-polished.md', '4-styled.md'].map((f) => join(RUNS, main.dir, f)).find((p) => existsSync(p))
    : null;
  const target = runFile ?? bookKrFile(n);
  if (!target || !/^### /m.test(read(target))) return null; // 본문이 없는 자리표시 파일
  const lint = lintFile(target);
  const rv = reviewOf(n, target);
  const ok = lint.block === 0 && rv.review === 'pass';
  return { target: lint.file, targetPath: target, lint: lint.block ? 'fail' : 'pass', lintBlock: lint.block, lintWarn: lint.warn, review: rv.review, stale: rv.stale ?? null, verdict: rv.verdict, blockers: rv.blockers, ok };
};
const gateText = (g) => {
  if (!g) return '게이트 - (검사할 본문 없음)';
  const lint = g.lint === 'pass' ? '✓' : `✗ block ${g.lintBlock}`;
  const review = g.review === 'stale' ? `오래됨(${g.stale}, 기록 판정 ${g.verdict}) → 재검토 필요` : g.review;
  return `게이트 ${g.ok ? '통과' : '미통과'}: kr-fit ${lint}${g.lintWarn ? ` warn ${g.lintWarn}` : ''} · 리뷰 ${review}${g.blockers ? ` blockers=${g.blockers}` : ''} (${g.target})`;
};
const gateAction = (n, g) => [
  g.lint === 'fail' ? `kr-fit.mjs ${n}의 block 처리` : null,
  g.review === 'pass' ? null
    : g.review === 'fail' ? `kr-fit-review.md의 block·삭제 권고 ${g.blockers}건 수정 후 kr-fit-reviewer로 재검토`
    : g.review === 'stale' ? `리뷰가 본문보다 오래됨(${g.stale}) → kr-fit-reviewer로 제${n}절 재검토 필요(마지막 줄 sha256=은 kr-fit.mjs ${g.target} --hash)`
    : `kr-fit-reviewer 서브에이전트로 제${n}절 검토(리뷰 ${g.review})`,
].filter(Boolean).join(' → ');

const STAGE_FILES = [['7-refined.md', 'S7'], ['6-polished.md', 'S6'], ['5-verify.md', 'S5'], ['4-styled.md', 'S4']];

const readmeRows = () => {
  const rows = {};
  for (const line of read(join(BOOKKR, 'README.md')).split(/\r?\n/)) {
    const m = line.match(/^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|[^|]*\|\s*(\S+)\s*\|\s*(\S+)\s*\|$/);
    if (m) rows[Number(m[1])] = { title: m[2], grade: m[3], status: m[4] };
  }
  return rows;
};

// 실행 목록은 run-id.mjs 순서(옛 ID 번호순 → 새 ID 절·순번순)로 정렬한다. 폴더 이름순으로 두면 R04a(새, 제4절)가 R13(옛, 제4절)보다 앞에 온다.
const runsOf = (n) =>
  sortRunDirs(dirs(RUNS))
    .map((d) => ({ d, cfg: jread(join(RUNS, d, 'config.json')), meta: jread(join(RUNS, d, 'meta.json')) }))
    .filter((r) => Number(r.cfg.chapter) === n)
    .map((r) => {
      const best = STAGE_FILES.find(([f]) => existsSync(join(RUNS, r.d, f)));
      return { id: r.cfg.id || runIdOfDir(r.d), dir: r.d, style: r.cfg.style, mode: r.cfg.mode, stage: best?.[1] ?? 'S0', verify: r.meta.verify ?? null, status: r.meta.status ?? null };
    });

const chapterStatus = (n, rows) => {
  const ch = join(CHAPTERS, nn(n));
  const made = ['1-analysis.md', '2-research.md', '3-draft.md'].map((f) => existsSync(join(ch, f)));
  const runs = runsOf(n);
  // 주력 실행: 문체 B, 재현성 실험 제외, 가장 최근 실행(위 정렬의 마지막 — 옛 ID보다 새 ID, 새 ID끼리는 절 안 순번이 큰 것)
  const main = runs.filter((r) => r.style === 'B' && r.mode !== 'repro').at(-1) ?? null;
  const row = rows[n] ?? {};
  let next;
  if (!made[2]) next = { stage: 'S1-S3', action: `kr-localize 스킬로 제${n}절 분석·조사·초역 (kr-localizer 서브에이전트)` };
  else if (!main) next = { stage: 'S4', action: `pipeline.mjs new-run ${n}` };
  else if (main.stage === 'S4' || main.stage === 'S5') next = main.stage === 'S4' ? { stage: 'S5', action: `verify.mjs ${main.id}` } : { stage: 'S6', action: `kr-polish 스킬로 ${main.id} 윤문 (kr-polisher 서브에이전트)` };
  else if (main.stage === 'S6') next = { stage: 'S7', action: `kr-refine 스킬로 ${main.id} 항목별 개선 (항목마다 kr-entry-refiner)` };
  else if (row.status !== '✅') next = { stage: 'S8', action: `verify.mjs ${main.id} → pipeline.mjs assemble ${main.id}` };
  else next = { stage: '완료', action: 'TODO 2차 조사만 남음' };
  const inBook = row.status === '✅' || row.status === '🟨';
  const gate = inBook || next.stage === 'S8' ? gateOf(n, inBook ? null : main) : null;
  if (next.stage === 'S8' || row.status === '✅') {
    if (!gate) next = { stage: '게이트', action: '검사할 본문이 없음 — 조립·상태를 확인' };
    else if (!gate.ok) next = { stage: '게이트', action: gateAction(n, gate) + (row.status === '✅' ? ' (✅인데 게이트 미통과: 고치거나 pipeline.mjs gate N --demote)' : ' → 통과하면 assemble') };
  } else if (row.status === '🟨' && gate?.ok) next = { stage: '게이트', action: `게이트 통과 — pipeline.mjs gate ${n} --promote` };
  if (main?.verify === '반려') next = { stage: '수정', action: `${main.id} 반려 — 5-verify.md 이슈부터 해결` };
  return { n, title: row.title ?? '?', grade: row.grade ?? '?', readme: row.status ?? '?', made, runs, main: main?.id ?? null, gate, next };
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
    console.log(`제${nn(s.n)}절 ${s.readme} ${s.grade} ${s.title.padEnd(14, ' ')} 제작${s.made.map(mark).join('')}  ${runs || '-'}${s.gate || s.readme === '✅' ? `\n        ${gateText(s.gate)}` : ''}\n        → [${s.next.stage}] ${s.next.action}`);
  }
  const done = st.filter((s) => s.readme === '✅').length;
  const bad = st.filter((s) => s.readme === '✅' && !s.gate?.ok).map((s) => s.n);
  console.log(`\n완료 ${done}/${st.length}절(그중 적합성 게이트 미통과 ${bad.length}개${bad.length ? ': ' + bad.join(', ') : ''}). 다음 후보(🟢·🟡 우선): ${nextCandidates(st).join(', ')}`);
} else if (cmd === 'new-run') {
  const n = Number(pos[0]);
  const style = String(flag('style', 'B'));
  const mode = String(flag('mode', 'standard'));
  const draft = join(CHAPTERS, nn(n), '3-draft.md');
  if (!existsSync(draft)) { console.error(`초역 없음: ${draft} — S1-S3(kr-localize)부터`); process.exit(1); }
  // ID = R + 절 번호 + 절 안 순번(R18a, R18b…). 절 번호가 들어가서 다른 절을 도는 세션끼리는 겹치지 않고,
  // 같은 작업 트리에서 같은 절을 동시에 돌려도 reserveRunDir가 폴더를 하나씩 나눠 준다(run-id.mjs).
  const { id, dir } = reserveRunDir(RUNS, n, style, mode);
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
  let d;
  // ID(R13, R18a) 또는 폴더 이름 전체로 찾는다. 같은 ID 폴더가 둘 이상이면(브랜치 병합으로 겹침) 조립하지 않는다.
  try { d = id ? findRunDir(RUNS, id) : null; } catch (e) { console.error(e.message); process.exit(1); }
  if (!d) { console.error(`실행 폴더 없음: ${id}`); process.exit(1); }
  const dir = join(RUNS, d);
  const cfg = jread(join(dir, 'config.json'));
  const meta = jread(join(dir, 'meta.json'));
  if (!meta.verify) { console.error(`${id}: 검증 기록 없음 — verify.mjs ${id} 먼저`); process.exit(1); }
  if (meta.verify === '반려') { console.error(`${id}: 반려 판정 — 조립 불가`); process.exit(1); }
  const [srcName] = STAGE_FILES.find(([f]) => f !== '5-verify.md' && existsSync(join(dir, f))) ?? [];
  // 적합성 게이트: 조립할 산출물의 kr-fit --check 통과 + 리뷰 KR-FIT: pass + 리뷰 sha256 = 이 산출물의 해시. 우회 플래그는 두지 않는다.
  const g = gateOf(Number(cfg.chapter), { dir: d, status: 'unassembled' });
  if (!g?.ok) {
    console.error(`${id}: 적합성 게이트 미통과 — 조립 불가. ${gateText(g)}\n  할 일: ${g ? gateAction(cfg.chapter, g) : '산출물 없음'}`);
    process.exit(1);
  }
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
} else if (cmd === 'gate') {
  const rows = readmeRows();
  const ns = argv.includes('--all-done')
    ? Object.entries(rows).filter(([, r]) => r.status === '✅').map(([n]) => Number(n))
    : pos.map(Number);
  if (!ns.length) { console.error('사용: pipeline.mjs gate N... | --all-done [--demote|--promote] [--save]'); process.exit(2); }
  const readme = join(BOOKKR, 'README.md');
  const setStatus = (n, mark, label) => {
    const re = new RegExp(`^(\\|\\s*${n}\\s*\\|(?:[^|]*\\|){3}\\s*)\\S+(\\s*\\|)$`, 'm');
    writeFileSync(readme, read(readme).replace(re, `$1${mark}$2`), 'utf8');
    const f = bookKrFile(n);
    if (f) writeFileSync(f, read(f).replace(/^> \*\*상태: [^*]*\*\*/m, `> **상태: ${label}**`), 'utf8');
  };
  let fail = 0;
  for (const n of ns) {
    const s = chapterStatus(n, rows);
    const g = s.gate ?? gateOf(n, null);
    console.log(`제${nn(n)}절 ${s.readme} ${gateText(g)}${g && !g.ok ? `\n        → ${gateAction(n, g)}` : ''}`);
    // kr-harness/chapters/NN/kr-fit-lint.txt는 --save일 때만, 내용이 바뀌었을 때만 쓴다(CI에서는 부작용 없음).
    if (g && argv.includes('--save') && saveLint(n, lintFile(g.targetPath))) console.log(`        kr-harness/chapters/${nn(n)}/kr-fit-lint.txt 갱신`);
    if (!g?.ok) fail++;
    if (argv.includes('--demote') && s.readme === '✅' && !g?.ok) {
      setStatus(n, '🟨', `🟨 적합성 게이트 미통과(${today()}) — ${g ? gateAction(n, g) : '본문 없음'}`);
      console.log(`        README 제${n}절 ✅ → 🟨`);
    }
    if (argv.includes('--promote') && s.readme === '🟨' && g?.ok) {
      setStatus(n, '✅', `✅ 현지화·검증·적합성 게이트 통과(${today()})`);
      console.log(`        README 제${n}절 🟨 → ✅`);
    }
  }
  console.log(`\n게이트 ${fail ? `미통과 ${fail}/${ns.length}절` : `통과 ${ns.length}/${ns.length}절`}`);
  if (fail) process.exit(1);
} else {
  console.error('사용: pipeline.mjs status|new-run|assemble|launch|gate ...');
  process.exit(2);
}
