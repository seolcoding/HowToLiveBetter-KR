// kr-harness/entry-pass.mjs — 항목별 개선 패스: 개별 항목마다 개별 codex exec(격리 컨텍스트)가 작업한다.
// 사용:
//   node kr-harness/entry-pass.mjs kr-harness/runs/R02-22-styleB/6-polished.md [--jobs 4]
//   node kr-harness/entry-pass.mjs __worker <작업폴더> <start> <stride>   (내부 모드, 터미널 안에서 실행됨)
// 출력: <입력과 같은 폴더>/7-refined.md (입력 파일은 불변), 항목별 산출물은 entries/<폴더명>/e-NN.md
import { readdirSync, readFileSync, writeFileSync, existsSync, statSync, mkdirSync, rmSync } from 'node:fs';
import { join, resolve, dirname, basename } from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT = resolve(import.meta.dirname, '..');

const run = (cmd, args, opts = {}) => {
  const quoted = process.platform === 'win32' ? args.map((a) => (/\s/.test(a) ? `"${a}"` : a)) : args;
  const r = spawnSync(cmd, quoted, { encoding: 'utf8', shell: process.platform === 'win32', maxBuffer: 64 * 1024 * 1024, ...opts });
  return { code: r.status, out: (r.stdout || '') + (r.stderr || '') };
};

const splitEntries = (md) => {
  const todoIdx = md.search(/^## TODO/m);
  const body = todoIdx === -1 ? md : md.slice(0, todoIdx);
  const tail = todoIdx === -1 ? '' : md.slice(todoIdx);
  const m = body.split(/^(?=### )/m);
  return { intro: m[0], entries: m.slice(1), tail };
};

const PROMPT = (inFile, outFile) => `너는 한국 현지화 파이프라인의 항목별 개선 에이전트다. 이번 실행에서는 딱 한 항목만 다룬다. 다른 파일을 고치지 않는다.

절차:
1. 입력 파일을 읽는다: ${inFile}
2. 그 한 항목(### 하나 블록 전체)을 아래 규칙으로 개선한다.
3. 결과를 출력 파일에 저장한다: ${outFile}

문체 규칙(기본 B·합니다체):
- 서술 ~합니다/~입니다, 권고 ~하세요. '~입니다' 세 문장 연속 종결 금지.
- 한 문장 한 정보, 50자 상한. 법조문·지침 원문 인용은 그대로 둔다.
- 번역테(~에 있어서, 명사 화법, '것' 남발)·AI腔(메타서술, 끝 감상, 공회전 강조)·관료 표현(~하시기 바랍니다, ~하였음) 금지.

절대 불변:
- 항목 번호·제목(### N. ...) 그대로
- 비용태그 주석 줄 그대로
- 비용/쉽게/이득/근거등급/출처/비고 필드 구조와 순서
- 모든 숫자·HR/RR/OR/CI/P값·DOI·URL·법령명과 조문 번호·근거등급
- '쉽게:' 칸의 방향·크기 숫자

개선 포인트: 문장 리듬, 연결어 다양화, 50자 초과 쪼개기, 어색한 조사·어순, 사실 오독 교정(뜻은 원문 유지).

출력 파일에는 개선된 항목 블록 전체만 쓴다(해설·요약 금지). 마지막 메시지는 한 줄: "개선 완료, 변경 문장 N개".

출력 형식(엄격):
- 항목 블록을 정확히 한 번만 쓴다. 어떤 필드도 두 번 쓰지 않는다.
- 필드 6종(- 비용: - 쉽게: - 이득: - 근거등급: - 출처: - 비고:)을 모두 정확히 한 번씩, 이 순서로.
- 첫 줄은 원문과 같은 '### N. ...' 제목, 둘째 줄은 비용태그 주석.`;

const FIELDS6 = ['- 비용:', '- 쉽게:', '- 이득:', '- 근거등급:', '- 출처:', '- 비고:'];
const structOk = (txt) =>
  /^### /.test(txt) && txt.includes('成本标签:') && FIELDS6.every((f) => txt.split('\n').filter((l) => l.startsWith(f)).length === 1);

const codexOne = (inFile, outFile) => {
  for (let attempt = 0; attempt < 2; attempt++) {
    const r = run('codex', ['exec', '-s', 'workspace-write', '-C', ROOT, '-'], { input: PROMPT(inFile, outFile), shell: false });
    if (r.code === 0 && existsSync(outFile) && structOk(readFileSync(outFile, 'utf8'))) return true;
  }
  writeFileSync(outFile, readFileSync(inFile, 'utf8'), 'utf8');
  writeFileSync(outFile + '.err', '구조 검증 실패 — 원문 유지', 'utf8');
  return false;
};

const [, , ...argv] = process.argv;
if (argv[0] === '__worker') {
  const [, folder, start, stride] = argv;
  const jobs = JSON.parse(readFileSync(join(folder, 'jobs.json'), 'utf8'));
  for (let i = Number(start); i < jobs.length; i += Number(stride)) {
    const [inFile, outFile] = jobs[i];
    if (existsSync(outFile)) continue;
    try { codexOne(inFile, outFile); } catch (e) { writeFileSync(outFile + '.err', String(e), 'utf8'); }
  }
  writeFileSync(join(folder, `done-${start}.txt`), 'ok', 'utf8');
} else {
  const input = argv.find((a) => !a.startsWith('--') && a !== '__worker');
  const jobs = Number(argv.find((a) => a.startsWith('--jobs'))?.split('=')[1] ?? 4);
  const src = resolve(input);
  const folder = join(dirname(src), 'entries');
  rmSync(folder, { recursive: true, force: true });
  mkdirSync(folder, { recursive: true });
  const { intro, entries, tail } = splitEntries(readFileSync(src, 'utf8'));
  const jobList = entries.map((_, i) => {
    const nn = String(i + 1).padStart(2, '0');
    const inFile = join(folder, `e-${nn}-in.md`);
    const outFile = join(folder, `e-${nn}.md`);
    writeFileSync(inFile, entries[i], 'utf8');
    return [inFile, outFile];
  });
  writeFileSync(join(folder, 'jobs.json'), JSON.stringify(jobList.map(([a, b]) => [a.replaceAll('\\', '/'), b.replaceAll('\\', '/')]), null, 1), 'utf8');
  console.log(`항목 ${entries.length}개, 워커 ${jobs}개로 항목별 개선 시작…`);
  const folderFwd = folder.replaceAll('\\', '/');
  const handles = [];
  for (let w = 0; w < jobs; w++) {
    const created = run('orca', ['terminal', 'create', '--worktree', 'active', '--title', `entrypass-w${w}`, '--json']);
    let handle = null;
    try { const j = JSON.parse(created.out); handle = j.result?.terminal?.handle ?? null; } catch {}
    if (!handle) { console.log(`워커 ${w} 터미널 생성 실패`); continue; }
    run('orca', ['terminal', 'send', '--terminal', handle, '--text', `node kr-harness/entry-pass.mjs __worker "${folderFwd}" ${w} ${jobs}`, '--enter']);
    handles.push(handle);
    console.log(`워커 ${w}: 터미널 ${handle}`);
  }
  const outFiles = jobList.map(([, b]) => b);
  const deadline = Date.now() + 90 * 60 * 1000;
  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, 10000));
    const done = outFiles.filter((f) => existsSync(f) || existsSync(f + '.err')).length;
    if (done % 5 === 0 || done === outFiles.length) process.stdout.write(`\r진행: ${done}/${outFiles.length}`);
    if (done === outFiles.length) break;
  }
  console.log('');
  const failed = outFiles.filter((f) => !existsSync(f));
  const refined = intro + outFiles.map((f, i) => (existsSync(f) ? readFileSync(f, 'utf8') : jobList[i] && readFileSync(jobList[i][0], 'utf8'))).join('') + tail;
  const outPath = join(dirname(src), '7-refined.md');
  writeFileSync(outPath, refined, 'utf8');
  console.log(`완료: ${outFiles.length - failed.length}/${outFiles.length} 항목 개선 → ${outPath}${failed.length ? ` (실패 ${failed.length}건은 원문 유지)` : ''}`);
  for (const h of handles) run('orca', ['terminal', 'close', '--terminal', h]);
}
