// .claude/skills/kr-verify/scripts/verify.mjs — S5 독립 검증: 각 실행의 4-styled.md를 원본과 대조.
// 사용: node .claude/skills/kr-verify/scripts/verify.mjs [<ID>] [--check]
//   인자 없음 = runs/ 전체, <ID> = 단일 실행(옛 R01~R14, 새 R18a 형식, 또는 폴더 이름 전체). 앞부분만 맞는 ID(R1)는 받지 않는다.
//   --check = 파일을 쓰지 않고 반려가 있으면 종료코드 1(CI용).
// 판정: 통과 / 조건부 통과(경미) / 반려(구조적) — 결과는 각 runs/*/5-verify.md와 meta.json에 기록.
// 결과가 지난번과 같으면(머리줄 날짜만 다르면) 파일을 다시 쓰지 않는다. 여러 세션이 인자 없이 돌려도
// R01~R14 같은 남의 실행 파일이 날짜 한 줄 때문에 PR마다 바뀌어 충돌하는 일을 막는다.
//
// 문서화된 의도적 차이(2026-10-10). KR-GUIDE 원칙 1(한국에 대응 제도가 없으면 항목을 뺀다)과
// 원칙 2(한국 지침이 있으면 출처에 보강한다) 때문에 항목 수·DOI 집합이 원문과 일부러 달라질 수 있다.
// 그때는 절 도입부(첫 `### ` 줄 앞)에 HTML 주석으로 표시를 단다. 전자책 빌드는 주석을 지우므로 독자에게 안 보인다.
//   <!-- kr-omit: N — 사유 -->         원문 `### N.` 항목을 뺐다. 여러 개면 여러 줄.
//   <!-- kr-doi-add: <DOI> — 사유 -->  원문에 없는 DOI를 일부러 더했다(예: 한국 진료지침).
//   <!-- kr-doi-drop: <DOI> — 사유 --> 원문 DOI를 일부러 뺐다. kr-omit한 항목에만 딸린 DOI는 자동 면제라 적지 않아도 된다.
// 구분자는 「—」「-」「:」 무엇이든 된다. DOI는 https://doi.org/ 주소로 써도 된다.
// 판정: 기대 항목 수 = 원문 항목 수 − kr-omit 수. DOI 누락은 (kr-omit 항목에만 딸린 DOI) ∪ kr-doi-drop을,
// 추가는 kr-doi-add를 빼고 센다. 면제한 것은 5-verify.md 「참고」에 사유와 함께 남는다.
// 다음 표시는 무효이고 이슈(반려)다: 사유가 빈 것(kr-fit-ok와 같은 원칙), 도입부 밖에 있는 것(항목 블록 안은
// S7 항목 에이전트가 건드릴 수 있다), kr-omit 번호가 원문에 없는 것, 값이 숫자·DOI 꼴이 아닌 것.
// 실제 차이와 맞지 않는 표시(번역에 없는 DOI의 kr-doi-add 등)는 「참고」에 「효력 없음」으로만 알린다.
import { readdirSync, readFileSync, existsSync, writeFileSync } from 'node:fs';
import { join, basename, resolve } from 'node:path';

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { listRunDirs, sortRunDirs, matchRunDir, runIdOfDir } from '../../kr-pipeline/scripts/run-id.mjs';

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
const HAN = /[一-鿿]/;

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

// ---- 문서화된 의도적 차이 표시(머리말 참고) ----
const MARK_RE = /<!--\s*kr-(omit|doi-add|doi-drop)\b\s*:?([\s\S]*?)-->/g;
const ANY_KR_MARK = /<!--\s*(kr-[A-Za-z][\w-]*)/g;
const KNOWN_KR_MARK = /^kr-(?:omit|doi-add|doi-drop|fit-ok)$/;
const DOI_PREFIX = /^(?:https?:\/\/(?:dx\.)?doi\.org\/|doi:\s*)/i;
// 표시의 DOI를 doiris()와 같은 모양(https://doi.org/…, 괄호 앞에서 끊김)으로 맞춘다. 대소문자는 비교할 때 무시한다.
const normDoi = (d) => doiris(`https://doi.org/${d.replace(DOI_PREFIX, '')}`)[0] ?? null;
const lc = (s) => s.toLowerCase();
// 도입부 끝 = 첫 `### ` 줄(없으면 `## TODO`, 그것도 없으면 파일 끝).
const introEnd = (md) => {
  const at = [md.search(/^### /m), md.search(/^## TODO/m)].filter((i) => i >= 0);
  return at.length ? Math.min(...at) : md.length;
};
const lineAt = (md, i) => md.slice(0, i).split('\n').length;
const oneLine = (s) => s.replace(/\s+/g, ' ').trim();

// 표시를 읽는다. 반환: { marks: [{ kind, line, reason, n? , doi?, shown? }], issues: [무효 표시], notes: [알 수 없는 kr- 표시] }
export function parseMarks(md) {
  const end = introEnd(md);
  const marks = [], issues = [], notes = [];
  for (const m of md.matchAll(MARK_RE)) {
    const kind = m[1], line = lineAt(md, m.index), raw = oneLine(m[0]);
    if (m.index >= end) { issues.push(`도입부 밖 kr-${kind} 표시(L${line}) — 무효. 첫 ### 줄 앞 도입부로 옮기세요: ${raw}`); continue; }
    const body = m[2].trim();
    // 값 = 첫 낱말. 번호는 구분자 앞에서, DOI는 공백·「—」 앞에서 끊는다(DOI 안에는 「-」「:」가 들어갈 수 있다).
    const val = (kind === 'omit' ? body.match(/^\S+?(?=$|\s|[—–:-])/) : body.match(/^[^\s—–]+/))?.[0] ?? '';
    const reason = body.slice(val.length).replace(/^\s*[—–:-]+/, '').trim();
    if (!reason) { issues.push(`사유 없는 kr-${kind} 표시(L${line}) — 무효. <!-- kr-${kind}: 값 — 사유 --> 형식으로 왜 다른지 쓰세요: ${raw}`); continue; }
    if (kind === 'omit') {
      if (!/^[1-9]\d*$/.test(val)) { issues.push(`kr-omit 값이 원문 항목 번호가 아님(L${line}) — 무효: ${raw}`); continue; }
      marks.push({ kind, line, reason, n: Number(val) });
    } else {
      const shown = val.replace(/^<|>$/g, '').replace(/[:\-–,;.]+$/, '').replace(DOI_PREFIX, '');
      const doi = /^10\.\d{4,9}\/\S+$/.test(shown) ? normDoi(shown) : null;
      if (!doi) { issues.push(`kr-${kind} 값이 DOI 꼴(10.xxxx/…)이 아님(L${line}) — 무효: ${raw}`); continue; }
      marks.push({ kind, line, reason, doi, shown });
    }
  }
  for (const m of md.matchAll(ANY_KR_MARK)) {
    if (!KNOWN_KR_MARK.test(m[1])) notes.push(`알 수 없는 표시 <!-- ${m[1]} …>(L${lineAt(md, m.index)}) — 검증은 무시함. 오타라면 kr-omit·kr-doi-add·kr-doi-drop 중 하나로 고치세요`);
  }
  return { marks, issues, notes };
}

// 원문을 항목 블록(번호 포함)과 나머지(도입부·TODO 절)로 나눈다. kr-omit 항목에만 딸린 DOI를 가리는 데 쓴다.
function origParts(md) {
  const todoIdx = md.search(/^## TODO/m);
  const body = todoIdx === -1 ? md : md.slice(0, todoIdx);
  const tail = todoIdx === -1 ? '' : md.slice(todoIdx);
  const parts = body.split(/^(?=### )/m);
  return { rest: parts[0] + '\n' + tail, blocks: parts.slice(1).map((text) => ({ n: Number(text.match(/^### (\d+)\./)?.[1]) || null, text })) };
}

// 검증 본체(파일 입출력 없음). styled = 번역 산출물, omd = 원문.
export function verifyText(styled, omd) {
  const res = { issues: [], notes: [] };
  const mk = parseMarks(styled);
  res.issues.push(...mk.issues);
  res.notes.push(...mk.notes);

  // 1) 항목 수·필드·비용태그
  const entries = parseEntries(styled);
  const oEntries = parseEntries(omd);
  res.entries = entries.length;
  const op = origParts(omd);
  const omitted = new Map(); // 원문 번호 → { reason, line, title, text }
  for (const k of mk.marks.filter((x) => x.kind === 'omit')) {
    const blk = op.blocks.find((b) => b.n === k.n);
    if (!blk) { res.issues.push(`kr-omit ${k.n}: 원문에 ### ${k.n}. 항목이 없음(L${k.line}) — 무효`); continue; }
    if (omitted.has(k.n)) { res.notes.push(`kr-omit ${k.n} 표시가 두 번 있음(L${k.line}) — 한 번만 셈`); continue; }
    omitted.set(k.n, { ...k, title: oneLine(blk.text.split('\n')[0].replace(/^### \d+\.\s*/, '')), text: blk.text });
  }
  const expected = oEntries.length - omitted.size;
  if (entries.length !== expected)
    res.issues.push(omitted.size
      ? `항목 수 불일치: 원본 ${oEntries.length} − kr-omit ${omitted.size} = ${expected} vs 번역 ${entries.length}`
      : `항목 수 불일치: 원본 ${oEntries.length} vs 번역 ${entries.length}`);
  const missing = [];
  entries.forEach((b, i) => {
    for (const f of FIELDS) if (!b.includes(f)) missing.push(`항목 ${i + 1}: ${f}`);
    if (!b.includes('成本标签:')) missing.push(`항목 ${i + 1}: 비용태그 줄`);
  });
  if (missing.length) res.issues.push(`필드 누락 ${missing.length}건 — ${missing.slice(0, 5).join(', ')}`);

  // 2) DOI 집합 대조 (의료 근거는 바뀌면 안 됨). 표시 주석 안의 DOI 주소는 번역 본문으로 치지 않는다.
  const oDoi = doiris(omd), sDoi = doiris(styled.replace(MARK_RE, ''));
  const missAll = oDoi.filter((d) => !sDoi.includes(d));
  const extraAll = sDoi.filter((d) => !oDoi.includes(d));
  // kr-omit 항목에만 딸린 DOI(남은 원문 항목·도입부에는 없는 것)
  const keptDoi = new Set(doiris([op.rest, ...op.blocks.filter((b) => !omitted.has(b.n)).map((b) => b.text)].join('\n')));
  const autoDrop = new Map(); // DOI → 원문 번호
  for (const [n, o] of omitted) for (const d of doiris(o.text)) if (!keptDoi.has(d) && missAll.includes(d)) autoDrop.set(d, n);
  const drops = mk.marks.filter((x) => x.kind === 'doi-drop'), adds = mk.marks.filter((x) => x.kind === 'doi-add');
  const dropSet = new Set(drops.map((x) => lc(x.doi))), addSet = new Set(adds.map((x) => lc(x.doi)));
  const missDoi = missAll.filter((d) => !autoDrop.has(d) && !dropSet.has(lc(d)));
  const extraDoi = extraAll.filter((d) => !addSet.has(lc(d)));
  if (missDoi.length || extraDoi.length)
    res.issues.push(`DOI 불일치 — 누락 ${missDoi.length}(${missDoi.slice(0, 3).join(' ')}), 추가 ${extraDoi.length}${extraDoi.length ? `(${extraDoi.slice(0, 3).join(' ')})` : ''}`);

  // 면제 목록(「참고」). 무엇을 왜 뺐고 더했는지 남긴다.
  for (const [n, o] of omitted) {
    const ds = [...autoDrop].filter(([, k]) => k === n).map(([d]) => d);
    res.notes.push(`의도적 차이 kr-omit: 원문 제${n}항 「${o.title.slice(0, 40)}」 뺌 — ${o.reason}${ds.length ? ` (딸린 DOI ${ds.length}건 자동 면제: ${ds.join(' ')})` : ''}`);
  }
  for (const x of drops) {
    const used = missAll.some((d) => lc(d) === lc(x.doi));
    const auto = [...autoDrop.keys()].some((d) => lc(d) === lc(x.doi));
    res.notes.push(used
      ? `의도적 차이 kr-doi-drop: ${x.shown} 뺌 — ${x.reason}${auto ? ' (kr-omit으로도 면제됨)' : ''}`
      : `kr-doi-drop ${x.shown}(L${x.line}): 효력 없음 — 원문에 없거나 번역에 그대로 있음. 표시를 고치거나 지우세요`);
  }
  for (const x of adds) {
    const used = extraAll.some((d) => lc(d) === lc(x.doi));
    res.notes.push(used
      ? `의도적 차이 kr-doi-add: ${x.shown} 더함 — ${x.reason}`
      : `kr-doi-add ${x.shown}(L${x.line}): 효력 없음 — 번역에 없거나 원문에도 있음. 표시를 고치거나 지우세요`);
  }

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

function verifyRun(dir) {
  const cfg = jread(join(dir, 'config.json'));
  // 7-refined.md(항목별 개선본) > 6-polished.md(astra 윤문본) > 4-styled.md 순으로 검증 대상 선택.
  const styledPath = ['7-refined.md', '6-polished.md', '4-styled.md'].map((f) => join(dir, f)).find((p) => existsSync(p)) ?? join(dir, '4-styled.md');
  const styled = read(styledPath);
  const res = { run: cfg.id || runIdOfDir(basename(dir)), chapter: cfg.chapter, issues: [], notes: [] };

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
  const v = verifyText(styled, read(orig));
  return { ...res, ...v, issues: [...res.issues, ...v.issues], notes: [...res.notes, ...v.notes] };
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
  const body = lines.join('\n');
  const reportPath = join(dir, '5-verify.md');
  const undated = (s) => s.replace(/\r\n/g, '\n').replace(/^(# .*? 검증 결과) \(\d{4}-\d{2}-\d{2}\)/, '$1');
  if (!existsSync(reportPath) || undated(read(reportPath)) !== undated(body)) writeFileSync(reportPath, body, 'utf8');
  const meta = jread(join(dir, 'meta.json'));
  const next = { ...meta, ...cfg, status: meta.status === 'styled' ? 'verified' : meta.status, entries: res.entries ?? meta.entries, todos: res.todos ?? meta.todos, verify: res.verdict };
  if (JSON.stringify(next) !== JSON.stringify(meta)) jwrite(join(dir, 'meta.json'), next);
}

// CLI. 다른 스크립트(시험 등)가 verifyText·parseMarks를 가져갈 때는 돌지 않는다.
const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const args = process.argv.slice(2);
  const CHECK = args.includes('--check');
  const only = args.find((a) => !a.startsWith('--'));
  // 순서는 run-id.mjs 규칙(옛 ID 번호순 → 새 ID 절·순번순). 하나만 고를 때는 ID 또는 폴더 이름과 정확히 같아야 한다.
  const dirs = sortRunDirs(listRunDirs(RUNS)).filter((d) => !only || matchRunDir(d, only));
  if (only && !dirs.length) {
    console.error(`실행 폴더 없음: ${only} (ID는 R13, R18a처럼 정확히, 또는 폴더 이름 전체로)`);
    process.exit(1);
  }
  if (only && dirs.length > 1) {
    console.error(`실행 ID ${only}가 폴더 ${dirs.length}개에 겹칩니다: ${dirs.join(', ')} — run-id.mjs --check로 확인`);
    process.exit(1);
  }
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
}
