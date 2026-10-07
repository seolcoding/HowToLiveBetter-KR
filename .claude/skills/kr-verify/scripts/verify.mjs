// .claude/skills/kr-verify/scripts/verify.mjs — S5 독립 검증: 각 실행의 4-styled.md를 원본과 대조.
// 사용: node .claude/skills/kr-verify/scripts/verify.mjs [R01] [--check]
//   인자 없음 = runs/ 전체, R01 = 단일 실행. --check = 파일을 쓰지 않고 반려가 있으면 종료코드 1(CI용).
// 판정: 통과 / 조건부 통과(경미) / 반려(구조적) — 결과는 각 runs/*/5-verify.md와 meta.json에 기록.
import { readdirSync, readFileSync, existsSync, writeFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

// 저장소 루트: 이 스크립트 위치에서 KR-GUIDE.md가 있는 디렉토리까지 올라간다(로컬·클라우드 공통).
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
const RUNS = join(ROOT, 'kr-harness', 'runs');
const FIELDS = ['- 비용:', '- 쉽게:', '- 이득:', '- 근거등급:', '- 출처:', '- 비고:'];
const CN_PHONE = /\b(12356|12315|12378|96110|12333|12320|12345|10086|10010)\b/g;
const HAN = /[\u4e00-\u9fff]/;

const read = (p) => (existsSync(p) ? readFileSync(p, 'utf8') : '');
const jread = (p) => { try { return JSON.parse(read(p)); } catch { return {}; } };
const jwrite = (p, o) => writeFileSync(p, JSON.stringify(o, null, 2), 'utf8');
const origFile = (n) => {
  const nn = String(n).padStart(2, '0');
  const f = readdirSync(join(ROOT, 'book')).find((x) => x.startsWith(`${nn}-`) && x.endsWith('.md'));
  return f ? join(ROOT, 'book', f) : null;
};

function parseEntries(md) {
  const todoIdx = md.search(/^## TODO/m);
  const body = todoIdx === -1 ? md : md.slice(0, todoIdx);
  return body.split(/^### /m).slice(1).map((b) => b.trim());
}

function doiris(md) {
  return [...new Set((md.match(/https:\/\/doi\.org\/[^\s>，)）]+/g) || []).map((s) => s.replace(/[.,]$/, '')))].sort();
}

function longSentences(md) {
  const out = [];
  for (const line of md.split(/\r?\n/)) {
    if (!/^- (비용|쉽게|이득|비고):/.test(line)) continue;
    const clean = line.replace(/https?:\/\/\S+/g, '').replace(/- [^:]+: ?/, '');
    for (const s of clean.split(/(?<=[.!?])\s+/)) {
      if ([...s].length > 50) out.push(`${[...s].length}자: ${s.slice(0, 60)}…`);
    }
  }
  return out;
}

function verifyRun(dir) {
  const cfg = jread(join(dir, 'config.json'));
  // 7-refined.md(항목별 개선본) > 6-polished.md(astra 윤문본) > 4-styled.md 순으로 검증 대상 선택.
  const styledPath = ['7-refined.md', '6-polished.md', '4-styled.md'].map((f) => join(dir, f)).find((p) => existsSync(p)) ?? join(dir, '4-styled.md');
  const styled = read(styledPath);
  const res = { run: cfg.id || dir, chapter: cfg.chapter, issues: [], notes: [] };

  if (!styled.trim()) {
    res.verdict = '보류';
    res.notes.push('4-styled.md/6-polished.md 없음 — S4/S6 미실행(세션 DB 장애 등)');
    return res;
  }
  res.polished = styledPath.endsWith('6-polished.md') || styledPath.endsWith('7-refined.md');
  if (styledPath.endsWith('7-refined.md')) res.notes.push('항목별 개선본(7-refined.md) 기준 검증');
  else if (res.polished) res.notes.push('astra 윤문본(6-polished.md) 기준 검증');
  const orig = origFile(cfg.chapter);
  if (!orig) { res.verdict = '반려'; res.issues.push('원본 파일을 찾을 수 없음'); return res; }
  const omd = read(orig);

  // 1) 항목 수·필드·비용태그
  const entries = parseEntries(styled);
  const oEntries = parseEntries(omd);
  res.entries = entries.length;
  if (entries.length !== oEntries.length)
    res.issues.push(`항목 수 불일치: 원본 ${oEntries.length} vs 번역 ${entries.length}`);
  const missing = [];
  entries.forEach((b, i) => {
    for (const f of FIELDS) if (!b.includes(f)) missing.push(`항목 ${i + 1}: ${f}`);
    if (!b.includes('成本标签:')) missing.push(`항목 ${i + 1}: 비용태그 줄`);
  });
  if (missing.length) res.issues.push(`필드 누락 ${missing.length}건 — ${missing.slice(0, 5).join(', ')}`);

  // 2) DOI 집합 대조 (의료 근거는 바뀌면 안 됨)
  const oDoi = doiris(omd), sDoi = doiris(styled);
  const missDoi = oDoi.filter((d) => !sDoi.includes(d));
  const extraDoi = sDoi.filter((d) => !oDoi.includes(d));
  if (missDoi.length || extraDoi.length)
    res.issues.push(`DOI 불일치 — 누락 ${missDoi.length}(${missDoi.slice(0, 3).join(' ')}), 추가 ${extraDoi.length}`);

  // 3) 중국 잔재 (필드 라인 한자 + 중국 전용 번호)
  const residuals = [];
  styled.split(/\r?\n/).forEach((line, idx) => {
    if (!/^- (비용|쉽게|이득|비고):/.test(line)) return;
    const phones = line.match(CN_PHONE) || [];
    if (phones.length) residuals.push(`L${idx + 1} 중국번호 ${phones.join(',')}`);
    const clean = line.replace(/「[^」]*」/g, '').replace(/\[[^\]]*\]\([^)]*\)/g, '').replace(/https?:\/\/\S+/g, '').replace(/\([^)]*\.md\)/g, '');
    if (HAN.test(clean)) residuals.push(`L${idx + 1} 한자 잔재: ${line.slice(0, 40)}…`);
  });
  if (residuals.length) res.issues.push(`중국 잔재 ${residuals.length}건 — ${residuals.slice(0, 3).join(' | ')}`);

  // 4) 50자 초과 문장
  const long = longSentences(styled);
  if (long.length) res.notes.push(`50자 초과 문장 ${long.length}건`); 

  // 5) TODO 집계
  const todoIdx = styled.search(/^## TODO/m);
  res.todos = todoIdx === -1 ? 0 : (styled.slice(todoIdx).match(/^(?:\d+\.|-) /gm) || []).length;

  res.verdict = res.issues.length ? '반려' : long.length ? '조건부 통과' : '통과';
  res.long = long.slice(0, 5);
  return res;
}

function writeReport(dir, res) {
  const cfg = jread(join(dir, 'config.json'));
  const lines = [
    `# ${res.run} 검증 결과 (${new Date().toISOString().slice(0, 10)})`,
    '',
    `- 판정: ${res.verdict}`,
    `- 항목 수: ${res.entries ?? '—'} / TODO: ${res.todos ?? 0}`,
    '',
    '## 이슈',
    ...(res.issues?.length ? res.issues.map((i) => `- [ ] ${i}`) : ['- 없음']),
    '',
    '## 참고',
    ...(res.notes?.length ? res.notes.map((i) => `- ${i}`) : ['- 없음']),
    ...(res.long?.length ? ['', '### 50자 초과 문장(최대 5건)', ...res.long.map((s) => `- ${s}`)] : []),
    '',
  ];
  writeFileSync(join(dir, '5-verify.md'), lines.join('\n'), 'utf8');
  const meta = jread(join(dir, 'meta.json'));
  jwrite(join(dir, 'meta.json'), { ...meta, ...cfg, status: meta.status === 'styled' ? 'verified' : meta.status, entries: res.entries ?? meta.entries, todos: res.todos ?? meta.todos, verify: res.verdict });
}

const args = process.argv.slice(2);
const CHECK = args.includes('--check');
const only = args.find((a) => !a.startsWith('--'));
const dirs = readdirSync(RUNS)
  .filter((d) => statSync(join(RUNS, d)).isDirectory())
  .filter((d) => !only || d.startsWith(only))
  .sort();
const results = [];
for (const d of dirs) {
  const dir = join(RUNS, d);
  const res = verifyRun(dir);
  if (!CHECK) writeReport(dir, res);
  results.push(res);
  console.log(`${res.run.padEnd(4)} 제${String(res.chapter).padStart(2, '0')}절  ${res.verdict.padEnd(6)} 항목 ${res.entries ?? '—'}  TODO ${res.todos ?? 0}  이슈 ${res.issues?.length ?? 0}`);
}
const bad = results.filter((r) => r.verdict === '반려').length;
console.log(`\n검증 완료: ${results.length}건 중 통과 ${results.filter((r) => r.verdict === '통과').length}, 조건부 ${results.filter((r) => r.verdict === '조건부 통과').length}, 반려 ${bad}, 보류 ${results.filter((r) => r.verdict === '보류').length}`);
process.exitCode = CHECK && bad ? 1 : 0;
