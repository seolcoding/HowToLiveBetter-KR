// .claude/skills/kr-pipeline/scripts/run-id.mjs — 실행 ID 규칙(생성·해석·정렬·폴더 찾기)을 한곳에 둔다. LLM 호출 없음.
// pipeline.mjs(new-run·status·assemble), verify.mjs, report.mjs가 이 파일을 같이 쓴다.
//
// 새 형식(2026-10-10부터): R + 절 번호 두 자리 + 절 안 순번(소문자). 예: 제18절 첫 실행 R18a, 두 번째 R18b, 제13절 첫 실행 R13a.
//   폴더: kr-harness/runs/<ID>-<절 두 자리>-style<S>[-repro]   예: R18a-18-styleB
//   - 절 번호가 ID에 들어 있다. 그래서 서로 다른 절을 도는 세션(브랜치)끼리는 아무 조정 없이도 ID가 겹치지 않는다.
//   - 같은 절은 작업 트리 안에서 순번으로 나눈다. 폴더를 만든 뒤 같은 ID 폴더가 또 보이면 물러나서 다음 순번으로 다시 한다.
//     그래서 같은 절 new-run을 동시에 두 번 돌려도 겹치지 않는다. 잠금 파일은 쓰지 않는다.
//   - 같은 절을 서로 다른 세션에서 동시에 돌리는 것은 지원하지 않는다(절 하나 = 세션 하나 = 브랜치 하나).
//     합친 뒤 ID가 겹치면 `run-id.mjs --check`(CI)가 잡는다.
//   - 순번 글자는 a…y(25개), 그다음 za…zy, zza… 순이다. z는 「이어짐」 표시라 끝에 오지 않는다.
//     그래서 어떤 ID도 다른 ID의 접두어가 되지 않는다.
//   - ID 안에 '-'가 없다. 폴더 이름의 첫 '-' 앞이 곧 ID이고, 「<ID>-로 시작하는 폴더」는 늘 하나로 정해진다.
// 옛 형식: R01~R14(R + 전역 일련번호, 2026-10-06). 폴더와 config는 그대로 두고 읽기만 한다.
//   옛 ID는 숫자 바로 뒤가 '-'이고 새 ID는 숫자 뒤에 글자가 온다. 그래서 R13(옛, 제4절)과 R13a(새, 제13절)는 섞이지 않는다.
// 정렬: 옛 ID 전부가 새 ID보다 앞이다(새 형식은 옛 실행이 다 끝난 뒤 생겼다). 옛 ID끼리는 번호순, 새 ID끼리는 절 → 순번 순.
//   「주력 실행」(문체 B, 재현성 제외, 가장 최근)은 절 안에서 이 순서의 마지막이다. 절 사이에 번호 크기를 비교하지 않는다.
//
// 사용:
//   node .claude/skills/kr-pipeline/scripts/run-id.mjs --check       runs/ 폴더 이름·config.id·ID 중복 검사(문제 있으면 종료코드 1, CI)
//   node .claude/skills/kr-pipeline/scripts/run-id.mjs --self-test   규칙 단위 시험(접두어 없음, 정렬, 순번)
import { readdirSync, statSync, existsSync, mkdirSync, rmdirSync, readFileSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const SEQ = 'abcdefghijklmnopqrstuvwxy'; // z는 이어짐 표시로만 쓴다
const nn = (n) => String(n).padStart(2, '0');

// 순번 k(1부터) ↔ 글자. 1→a, 25→y, 26→za, 50→zy, 51→zza
export const seqCode = (k) => {
  if (!Number.isInteger(k) || k < 1) throw new Error(`순번은 1 이상의 정수여야 합니다: ${k}`);
  return 'z'.repeat(Math.floor((k - 1) / SEQ.length)) + SEQ[(k - 1) % SEQ.length];
};
export const seqIndex = (code) => {
  const m = /^(z*)([a-y])$/.exec(code);
  return m ? m[1].length * SEQ.length + SEQ.indexOf(m[2]) + 1 : null;
};

// ID 해석. 옛 형식 → { legacy: true, num }, 새 형식 → { legacy: false, chapter, seq }, 둘 다 아니면 null.
export const parseRunId = (id) => {
  let m = /^R(\d{2,})$/.exec(id ?? '');
  if (m) return { id, legacy: true, num: Number(m[1]) };
  m = /^R(\d{2})(z*[a-y])$/.exec(id ?? '');
  if (m) return { id, legacy: false, chapter: Number(m[1]), seq: seqIndex(m[2]) };
  return null;
};

export const makeRunId = (chapter, seq) => {
  if (!Number.isInteger(chapter) || chapter < 1 || chapter > 99) throw new Error(`절 번호는 1~99여야 합니다: ${chapter}`);
  return `R${nn(chapter)}${seqCode(seq)}`;
};
export const runIdOfDir = (dirName) => dirName.split('-')[0];
export const runDirName = (id, chapter, style, mode) => `${id}-${nn(chapter)}-style${style}${mode === 'repro' ? '-repro' : ''}`;

// 폴더가 쿼리에 맞는가. 쿼리는 ID(R13, R18a) 또는 폴더 이름 전체(R13-04-styleB). 앞부분만 맞는 것(R1 → R10…)은 맞지 않는다.
export const matchRunDir = (dirName, q) => dirName === q || runIdOfDir(dirName) === q;

// 목록을 읽는 사이에 다른 new-run이 물러나며 지운 폴더가 있을 수 있다. stat 실패는 「없음」으로 친다.
const isDir = (p) => { try { return statSync(p).isDirectory(); } catch { return false; } };
export const listRunDirs = (runsDir) =>
  existsSync(runsDir) ? readdirSync(runsDir).filter((d) => !d.startsWith('.') && isDir(join(runsDir, d))) : [];

// 정렬: 옛 ID(번호순) → 새 ID(절 → 순번) → 형식 밖 이름(이름순). 같은 ID면 폴더 이름순.
const sortKey = (id) => {
  const p = parseRunId(id);
  if (!p) return [2, 0, 0];
  return p.legacy ? [0, p.num, 0] : [1, p.chapter, p.seq];
};
const byName = (a, b) => (a < b ? -1 : a > b ? 1 : 0);
export const compareRunIds = (a, b) => {
  const x = sortKey(a), y = sortKey(b);
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] - y[i];
  return byName(a, b);
};
export const compareRunDirs = (a, b) => compareRunIds(runIdOfDir(a), runIdOfDir(b)) || byName(a, b);
export const sortRunDirs = (names) => [...names].sort(compareRunDirs);

// 쿼리에 맞는 폴더 이름. 없으면 null, 둘 이상이면 오류(브랜치를 합치다 ID가 겹친 경우).
export const findRunDir = (runsDir, q) => {
  const hits = listRunDirs(runsDir).filter((d) => matchRunDir(d, q));
  if (hits.length > 1) throw new Error(`실행 ID ${q}가 폴더 ${hits.length}개에 겹칩니다: ${hits.join(', ')} — run-id.mjs --check로 확인`);
  return hits[0] ?? null;
};

// 다음 ID: 그 절의 새 형식 순번 최댓값 + 1. 옛 ID는 세지 않는다(옛 R18이 있어도 새 ID는 R18a부터).
export const nextRunId = (chapter, ids) => {
  const used = ids.map(parseRunId).filter((p) => p && !p.legacy && p.chapter === chapter).map((p) => p.seq);
  return makeRunId(chapter, Math.max(0, ...used) + 1);
};

const sleep = (ms) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);

// 새 실행 폴더를 만들고 { id, name, dir }를 돌려준다. 잠금 없이 「만들고 → 확인하고 → 겹치면 물러나기」로 나눈다.
// ① mkdir은 recursive 없이 부른다. 같은 이름이 이미 있으면 EEXIST로 실패하고 다음 순번으로 다시 한다.
// ② 만든 뒤 같은 ID의 폴더(문체나 모드가 다른 것)가 또 있으면 자기 폴더를 지우고 다시 한다.
//    두 프로세스 중 나중에 폴더를 만든 쪽의 확인은 반드시 앞쪽 폴더를 본다. 그래서 둘 다 남는 일은 없다. 둘 다 물러나면 무작위로 쉬었다가 다시 한다.
export function reserveRunDir(runsDir, chapter, style, mode) {
  mkdirSync(runsDir, { recursive: true });
  for (let attempt = 0; attempt < 50; attempt++) {
    const id = nextRunId(chapter, listRunDirs(runsDir).map(runIdOfDir));
    const name = runDirName(id, chapter, style, mode);
    const dir = join(runsDir, name);
    try {
      mkdirSync(dir);
    } catch (e) {
      if (e.code !== 'EEXIST') throw e;
      sleep(5 + Math.random() * 45);
      continue;
    }
    if (listRunDirs(runsDir).filter((d) => runIdOfDir(d) === id).length === 1) return { id, name, dir };
    rmdirSync(dir);
    sleep(5 + Math.random() * 45);
  }
  throw new Error(`제${chapter}절 실행 ID를 정하지 못했습니다(50번 연속 충돌)`);
}

// runs/ 전체 점검: 형식, config.id·chapter와 폴더 이름의 일치, ID 중복.
export function checkRuns(runsDir) {
  const problems = [];
  const names = sortRunDirs(listRunDirs(runsDir));
  const seen = new Map();
  for (const d of names) {
    const id = runIdOfDir(d);
    const p = parseRunId(id);
    let cfg = {};
    try { cfg = JSON.parse(readFileSync(join(runsDir, d, 'config.json'), 'utf8')); } catch { problems.push(`${d}: config.json 없음 또는 JSON 오류`); }
    if (!p) problems.push(`${d}: 실행 ID 형식이 아님(새 형식 R<절 두 자리><순번 글자>, 예 R18a)`);
    if (cfg.id && cfg.id !== id) problems.push(`${d}: config.id(${cfg.id})가 폴더 이름의 ID(${id})와 다름`);
    if (cfg.chapter != null && d.split('-')[1] !== nn(cfg.chapter)) problems.push(`${d}: 폴더 이름의 절 번호가 config.chapter(${cfg.chapter})와 다름`);
    if (p && !p.legacy && cfg.chapter != null && p.chapter !== Number(cfg.chapter)) problems.push(`${d}: ID의 절 번호(${p.chapter})가 config.chapter(${cfg.chapter})와 다름`);
    seen.set(id, [...(seen.get(id) ?? []), d]);
  }
  for (const [id, ds] of seen) if (ds.length > 1) problems.push(`실행 ID ${id} 중복: ${ds.join(', ')} — 나중에 생긴 쪽을 다음 순번으로 옮기고 config.json·meta.json의 id도 고친다`);
  return { count: names.length, problems };
}

function selfTest() {
  const fail = [];
  const ok = (cond, msg) => { if (!cond) fail.push(msg); };
  for (let k = 1; k <= 200; k++) ok(seqIndex(seqCode(k)) === k, `순번 왕복 실패: ${k}`);
  ok(seqCode(1) === 'a' && seqCode(25) === 'y' && seqCode(26) === 'za' && seqCode(51) === 'zza', '순번 글자 표');
  const legacy = Array.from({ length: 14 }, (_, i) => `R${nn(i + 1)}`);
  const fresh = [];
  for (let c = 1; c <= 34; c++) for (let k = 1; k <= 60; k++) fresh.push(makeRunId(c, k));
  ok(new Set(fresh).size === fresh.length, '새 ID 중복');
  // 새 ID는 다른 어떤 ID(옛 ID 포함)의 접두어도 아니다. 폴더 찾기(<ID>-로 시작)도 자기 폴더 하나만 맞는다.
  const all = [...legacy, ...fresh];
  const sorted = [...all].sort();
  for (let i = 0; i + 1 < sorted.length; i++) {
    const [a, b] = [sorted[i], sorted[i + 1]];
    if (b.startsWith(a) && parseRunId(a) && !parseRunId(a).legacy) fail.push(`새 ID ${a}가 ${b}의 접두어`);
  }
  const dirsAll = all.map((id) => runDirName(id, parseRunId(id).legacy ? 4 : parseRunId(id).chapter, 'B', 'standard'));
  for (const id of ['R13', 'R13a', 'R04', 'R04a', 'R01a', 'R18za']) {
    ok(dirsAll.filter((d) => d.startsWith(`${id}-`)).length === 1, `「${id}-로 시작하는 폴더」가 하나가 아님`);
    ok(dirsAll.filter((d) => matchRunDir(d, id)).length === 1, `matchRunDir(${id})가 하나가 아님`);
  }
  ok(!matchRunDir('R10-22-styleB-repro', 'R1') && matchRunDir('R13-04-styleB', 'R13-04-styleB'), '쿼리 정확 일치');
  ok(parseRunId('R13').legacy && parseRunId('R13a').chapter === 13 && parseRunId('R13-2') === null && parseRunId('R13z') === null, 'ID 해석');
  // 정렬: 옛 ID 전부 → 새 ID(절 → 순번). 제4절의 R13(옛)보다 R04a(새)가 나중이어야 주력 실행으로 뽑힌다.
  const order = sortRunDirs(['R13-04-styleB', 'R04a-04-styleB', 'R04-04-styleA', 'R04b-04-styleA', 'R04za-04-styleB', 'R02a-02-styleB']);
  ok(order.join(' ') === 'R04-04-styleA R13-04-styleB R02a-02-styleB R04a-04-styleB R04b-04-styleA R04za-04-styleB', `정렬: ${order.join(' ')}`);
  ok(nextRunId(4, ['R04', 'R13', 'R04a', 'R04b']) === 'R04c' && nextRunId(18, ['R01', 'R14']) === 'R18a' && nextRunId(18, ['R18y']) === 'R18za', '다음 ID');
  return fail;
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const argv = process.argv.slice(2);
  let rc = 0;
  if (argv.includes('--self-test')) {
    const fail = selfTest();
    console.log(fail.length ? `실행 ID 규칙 시험 실패 ${fail.length}건:\n- ${fail.join('\n- ')}` : '실행 ID 규칙 시험 통과');
    if (fail.length) rc = 1;
  }
  if (argv.includes('--check')) {
    let d = dirname(fileURLToPath(import.meta.url));
    while (!existsSync(join(d, 'KR-GUIDE.md'))) {
      const up = dirname(d);
      if (up === d) throw new Error('저장소 루트(KR-GUIDE.md)를 찾지 못했습니다');
      d = up;
    }
    const { count, problems } = checkRuns(join(d, 'kr-harness', 'runs'));
    console.log(problems.length ? `실행 폴더 ${count}개 중 문제 ${problems.length}건:\n- ${problems.join('\n- ')}` : `실행 폴더 ${count}개: ID 형식·중복 문제 없음`);
    if (problems.length) rc = 1;
  }
  if (!argv.includes('--self-test') && !argv.includes('--check')) {
    console.error('사용: run-id.mjs --check | --self-test');
    rc = 2;
  }
  process.exit(rc);
}
