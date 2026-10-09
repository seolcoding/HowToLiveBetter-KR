// .claude/skills/kr-refine/scripts/entries.mjs — S7 항목별 개선의 결정론 부분(분할·구조검사·재조립).
// 항목 하나를 고치는 일은 kr-entry-refiner 서브에이전트가 한다. 이 스크립트는 LLM을 부르지 않는다.
//
// 사용:
//   node .claude/skills/kr-refine/scripts/entries.mjs split    <입력.md> [--force]  항목을 entries/e-NN-in.md로 쪼갠다
//   node .claude/skills/kr-refine/scripts/entries.mjs pending  <입력.md>            아직 통과한 출력이 없는 항목 목록(JSON)
//   node .claude/skills/kr-refine/scripts/entries.mjs check    <e-NN.md>            출력 한 개의 구조 검사(실패 시 종료코드 1)
//   node .claude/skills/kr-refine/scripts/entries.mjs assemble <입력.md>            7-refined.md 조립(실패 항목은 원문 유지)
//
// 입력은 보통 runs/RNN-*/6-polished.md. 작업 폴더는 같은 실행 폴더의 entries/.
// 클라우드 세션은 중간에 VM이 쉬었다 깨어날 수 있으므로 split은 이미 있는 출력을 지우지 않는다(--force일 때만 초기화).
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync, readdirSync } from 'node:fs';
import { join, resolve, dirname, relative } from 'node:path';
// 칸 정의·분할·구조 검사는 kr-fit.mjs(KF-STRUCT)와 공유한다.
import { splitEntries, structureIssues } from './entry-format.mjs';

// 숫자·URL은 항목 개선 전후로 같아야 한다(쉽게: 칸 포함). 순서는 바뀔 수 있으니 다중집합으로 비교.
const facts = (txt) => {
  const urls = txt.match(/https?:\/\/[^\s)>）」]+/g) || [];
  const noUrl = txt.replace(/https?:\/\/[^\s)>）」]+/g, '');
  const nums = noUrl.match(/\d+(?:[.,]\d+)*/g) || [];
  return [...urls, ...nums].sort();
};
const diffMulti = (a, b) => {
  const left = [...a];
  const extra = [];
  for (const x of b) {
    const i = left.indexOf(x);
    if (i === -1) extra.push(x); else left.splice(i, 1);
  }
  return { missing: left, extra };
};

export const checkEntry = (out, inp) => {
  const errs = [];
  const lines = out.split(/\r?\n/);
  for (const x of structureIssues(lines)) if (x.severity === 'block') errs.push(x.msg);
  if ((out.match(/^### /gm) || []).length !== 1) errs.push('### 제목이 1개가 아님(블록 중복)');
  if (inp) {
    const t0 = inp.split(/\r?\n/)[0].trim(), t1 = lines[0].trim();
    if (t0.match(/^### (\d+)\./)?.[1] !== t1.match(/^### (\d+)\./)?.[1]) errs.push('항목 번호가 바뀜');
    const tagIn = inp.match(/<!--\s*成本标签:[^>]*-->/)?.[0], tagOut = out.match(/<!--\s*成本标签:[^>]*-->/)?.[0];
    if (tagIn && tagIn !== tagOut) errs.push('비용태그 줄이 바뀜');
    const gIn = inp.match(/^- 근거등급:\s*(.*)$/m)?.[1].trim(), gOut = out.match(/^- 근거등급:\s*(.*)$/m)?.[1].trim();
    if (gIn !== gOut) errs.push(`근거등급이 바뀜(${gIn} → ${gOut})`);
    const srcIn = inp.match(/^- 출처:.*$/m)?.[0], srcOut = out.match(/^- 출처:.*$/m)?.[0];
    if (srcIn !== srcOut) errs.push('출처 줄이 바뀜');
    const { missing, extra } = diffMulti(facts(inp), facts(out));
    if (missing.length) errs.push(`원문 숫자·URL 누락: ${missing.slice(0, 6).join(', ')}`);
    if (extra.length) errs.push(`원문에 없는 숫자·URL 추가: ${extra.slice(0, 6).join(', ')}`);
  }
  return errs;
};

const folderOf = (src) => join(dirname(src), 'entries');
const jobsOf = (src) => {
  const folder = folderOf(src);
  const p = join(folder, 'jobs.json');
  if (!existsSync(p)) throw new Error(`jobs.json 없음 — 먼저 split을 실행하세요: ${p}`);
  return JSON.parse(readFileSync(p, 'utf8')).map(([a, b]) => [resolve(a), resolve(b)]);
};
const rel = (p) => relative(process.cwd(), p).replaceAll('\\', '/');
const ok = (inF, outF) => existsSync(outF) && checkEntry(readFileSync(outF, 'utf8'), readFileSync(inF, 'utf8')).length === 0;

const [cmd, target, ...rest] = process.argv.slice(2);
if (!cmd || !target) {
  console.error('사용: entries.mjs split|pending|check|assemble <파일>');
  process.exit(2);
}
const src = resolve(target);

if (cmd === 'split') {
  const folder = folderOf(src);
  if (rest.includes('--force')) rmSync(folder, { recursive: true, force: true });
  mkdirSync(folder, { recursive: true });
  const { entries } = splitEntries(readFileSync(src, 'utf8'));
  const jobs = entries.map((e, i) => {
    const nn = String(i + 1).padStart(2, '0');
    const inF = join(folder, `e-${nn}-in.md`);
    const outF = join(folder, `e-${nn}.md`);
    writeFileSync(inF, e, 'utf8');
    return [rel(inF), rel(outF)];
  });
  writeFileSync(join(folder, 'jobs.json'), JSON.stringify(jobs, null, 1), 'utf8');
  const done = jobs.filter(([a, b]) => ok(resolve(a), resolve(b))).length;
  console.log(`항목 ${jobs.length}개 분할 → ${rel(folder)} (이미 통과한 출력 ${done}개)`);
} else if (cmd === 'pending') {
  const pend = jobsOf(src).filter(([a, b]) => !ok(a, b)).map(([a, b]) => ({ in: rel(a), out: rel(b) }));
  console.log(JSON.stringify(pend, null, 1));
} else if (cmd === 'check') {
  const outF = src;
  const inF = outF.replace(/\.md$/, '-in.md');
  const errs = checkEntry(readFileSync(outF, 'utf8'), existsSync(inF) ? readFileSync(inF, 'utf8') : null);
  if (errs.length) {
    console.log(`구조 검사 실패 (${rel(outF)}):\n- ${errs.join('\n- ')}`);
    process.exit(1);
  }
  console.log(`구조 검사 통과 (${rel(outF)})`);
} else if (cmd === 'assemble') {
  const { intro, tail } = splitEntries(readFileSync(src, 'utf8'));
  const jobs = jobsOf(src);
  const kept = [];
  const body = jobs.map(([a, b], i) => {
    if (ok(a, b)) return readFileSync(b, 'utf8').replace(/\s*$/, '\n\n');
    kept.push(i + 1);
    if (existsSync(b)) writeFileSync(b + '.err', checkEntry(readFileSync(b, 'utf8'), readFileSync(a, 'utf8')).join('\n'), 'utf8');
    return readFileSync(a, 'utf8');
  });
  const out = join(dirname(src), '7-refined.md');
  writeFileSync(out, intro + body.join('') + tail, 'utf8');
  const n = readdirSync(folderOf(src)).filter((f) => f.endsWith('.err')).length;
  console.log(`조립 완료 → ${rel(out)}: 개선 ${jobs.length - kept.length}/${jobs.length}` + (kept.length ? `, 원문 유지 ${kept.join(',')}번 (.err ${n}개)` : ''));
} else {
  console.error(`알 수 없는 명령: ${cmd}`);
  process.exit(2);
}
