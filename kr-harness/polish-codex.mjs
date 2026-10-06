// kr-harness/polish-codex.mjs — S6 윤문(astra)을 orca CLI + codex exec로 실행.
// 사용:
//   node kr-harness/polish-codex.mjs R09 R13 [--force]   — orca 터미널에서 codex 실행(기본)
//   node kr-harness/polish-codex.mjs R09 --direct        — codex exec 직접 실행(런타임 없을 때)
//   node kr-harness/polish-codex.mjs __codex <run-dir>   — 내부 모드(터미널 안에서 호출됨)
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT = resolve(import.meta.dirname, '..');
const RUNS = join(ROOT, 'kr-harness', 'runs');

const promptFor = (dir) => `너는 한국 현지화 파이프라인의 마지막 단계(S6) 윤문 에이전트(astra 자리, codex가 실행)다. 변환기가 합니다체로 바꾼 1차 산출물을 사람이 쓴 것처럼 다듬는다. 내용을 바꾸는 단계가 아니다.

먼저 읽을 것:
1. kr-harness/LESSONS.md
2. skills/kr-localizer/references/humanize-kr.md — 문체 규칙, B(합니다체) 기본
3. skills/kr-localizer/references/style-corpus/STYLE-PROFILES.md — B 프로파일과 앵커 특징

경로:
- 입력 파일: kr-harness/runs/${dir}/4-styled.md
- 출력 파일: kr-harness/runs/${dir}/6-polished.md (전체 파일, 구조 유지)

다듬을 것 (문장 차원만):
- 같은 어미 3회 이상 연속 종결 깨기 — 짧은 명사 종결이나 다른 서술로 리듬 확보
- 50자 초과 문장 쪼개기 — 한 문장 한 정보
- 연결어 다양화: 이에 따라/다만/한편/특히를 하나만 반복하지 않기
- 번역테 제거: ~에 있어서, 명사 화법(~이 가능합니다→~할 수 있습니다), '것' 남발
- AI腔 제거: 메타서술, 문단 끝 감상, 공회전 강조, 끝 요약
- 관료 표현 금지: ~하시기 바랍니다, ~하였음, 금번, 상기

절대 불변 (하나라도 바꾸면 실패):
- 비용/쉽게/이득/근거등급/출처/비고 필드의 사실·숫자·통계치(HR/RR/OR/CI/P값)
- DOI·URL·법령명·조문 번호와 그 원문 인용
- 항목 구조(### N.), 비용태그 주석 줄, 항목 순서, 항목 수
- ## TODO 확인 필요 목록 전체
- 쉽게: 칸의 방향·크기 숫자

완료 후:
1. 자체 확인: 항목 수 불변, 필드 6종 전 항목 존재, 숫자·URL이 입력과 동일
2. kr-harness/runs/${dir}/meta.json 에 "polished": "codex-astra" 와 "polished_at": "2026-10-06" 추가(다른 키 보존)
3. 마지막 메시지로 3~5줄 요약: 다듬은 문장 수, 쪼갠 긴 문장 수, 남긴 이슈

금지: git commit, book/·chapters/ 수정, 항목 추가·삭제, 근거등급 변경.`;

const run = (cmd, args, opts = {}) => {
  const quoted = process.platform === 'win32' ? args.map((a) => (/\s/.test(a) ? `"${a}"` : a)) : args;
  const r = spawnSync(cmd, quoted, { encoding: 'utf8', shell: process.platform === 'win32', maxBuffer: 64 * 1024 * 1024, ...opts });
  return { code: r.status, out: (r.stdout || '') + (r.stderr || '') };
};

const codexExec = (dir) => {
  const promptPath = join(RUNS, dir, 'polish-prompt.md');
  const prompt = readFileSync(promptPath, 'utf8');
  const lastMsg = join(RUNS, dir, 'polish-last.txt');
  const r = run('codex', ['exec', '--full-auto', '-C', ROOT, '--output-last-message', lastMsg, '-'], { input: prompt, shell: false });
  writeFileSync(join(RUNS, dir, 'polish-out.txt'), r.out, 'utf8');
  return r.code;
};

const [, , ...argv] = process.argv;
if (argv[0] === '__codex') {
  process.exitCode = codexExec(argv[1]);
} else {
  const force = argv.includes('--force');
  const direct = argv.includes('--direct');
  const ids = argv.filter((a) => !a.startsWith('--'));
  for (const id of ids) {
    const dir = readdirSync(RUNS).find((d) => statSync(join(RUNS, d)).isDirectory() && d.startsWith(id + '-'));
    if (!dir) { console.log(`${id}: 실행 폴더 없음`); continue; }
    const inPath = join(RUNS, dir, '4-styled.md');
    const outPath = join(RUNS, dir, '6-polished.md');
    if (!existsSync(inPath)) { console.log(`${id}: 4-styled.md 없음`); continue; }
    if (existsSync(outPath) && !force) { console.log(`${id}: 6-polished.md 이미 있음 (--force로 재실행)`); continue; }
    writeFileSync(join(RUNS, dir, 'polish-prompt.md'), promptFor(dir), 'utf8');
    if (direct) {
      console.log(`${id}: codex 직접 실행…`);
      const code = codexExec(dir);
      console.log(`${id}: codex 종료(${code}) — ${existsSync(outPath) ? '6-polished.md 생성됨' : '출력 없음(실패)'}`);
      continue;
    }
    const created = run('orca', ['terminal', 'create', '--worktree', 'active', '--title', `astra-${dir}`, '--command', `node kr-harness/polish-codex.mjs __codex ${dir}`, '--json']);
    let handle = null;
    try { const j = JSON.parse(created.out); handle = j.result?.terminal?.handle ?? j.handle ?? j.terminal?.handle ?? null; } catch {}
    if (!handle) { console.log(`${id}: orca 터미널 생성 실패 — ${created.out.slice(0, 200)}\n(--direct으로 codex 직접 실행 가능)`); continue; }
    console.log(`${id}: orca 터미널 ${handle}에서 codex 실행…`);
    const waited = run('orca', ['terminal', 'wait', '--terminal', handle, '--for', 'exit', '--timeout-ms', '3600000', '--json']);
    const ok = existsSync(outPath);
    console.log(`${id}: 종료 — ${ok ? '6-polished.md 생성됨' : '출력 없음(실패)'} / 마지막 메시지: ${(readFileSync(join(RUNS, dir, 'polish-last.txt'), 'utf8') || '').slice(0, 300)}`);
  }
}
