// .claude/skills/kr-verify/scripts/kr-fit.mjs — 한국 실정 적합성 기계 검사(결정론, LLM·외부 의존 없음).
// book-kr/ 본문에 남은 중국 고유 기관·제도·서비스·단위·전화번호·한자, 그리고 법·제도 항목의 중국 정부 출처를 잡는다.
// 규칙 데이터: ../references/kr-fit-rules.json
//
// 사용:
//   node .claude/skills/kr-verify/scripts/kr-fit.mjs 14                 제14절(book-kr/14-*.md)
//   node .claude/skills/kr-verify/scripts/kr-fit.mjs book-kr/14-….md    파일 경로(실행 산출물 7-refined.md 등도 가능)
//   node .claude/skills/kr-verify/scripts/kr-fit.mjs --all-done         book-kr/README.md 표에서 ✅인 절 전부
//   --check  block이 하나라도 있으면 종료코드 1
//   --json   JSON 출력
//   --save   절 파일마다 결과를 kr-harness/chapters/NN/kr-fit-lint.txt에 저장(내용이 같으면 다시 쓰지 않음)
//   --hash   검사 대신 본문 해시(sha256)만 출력. kr-fit-review.md 마지막 줄의 sha256= 값으로 쓴다.
//            대상이 하나면 64자 해시만, 여럿이면 「해시  파일」 줄. 정규화 규칙은 normalizeForHash() 주석.
//
// 항목 구조(KF-STRUCT): ### 항목마다 KR-GUIDE 표준 여섯 칸이 각 1회 줄 머리에서 표준 순서로 나오는지, 한 줄에 다른 칸 머리가
// 붙어 있지 않은지, 비용태그 주석이 있는지 본다. 판정 코드는 S7 entries.mjs와 공유(kr-refine/scripts/entry-format.mjs).
// 구조 결함은 kr-fit-ok로 통과시킬 수 없다.
// 예외: 같은 줄 또는 바로 윗줄에 <!-- kr-fit-ok: 사유 --> 를 두면 그 줄의 지적을 통과시킨다. 사유가 비면 block(KF-OK-EMPTY).
// 내려가는 경우: TODO 절, 출처 줄(용어 규칙), 같은 문장에 비교 문맥(중국·원문·「한국에는 없다」)이 있으면 block → warn.
import { readFileSync, existsSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname, resolve, relative, basename } from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

import { structureIssues } from '../../kr-refine/scripts/entry-format.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const findRoot = () => {
  let d = HERE;
  while (!existsSync(join(d, 'KR-GUIDE.md'))) {
    const up = dirname(d);
    if (up === d) throw new Error('저장소 루트(KR-GUIDE.md)를 찾지 못했습니다');
    d = up;
  }
  return d;
};
export const ROOT = findRoot();
const BOOKKR = join(ROOT, 'book-kr');
const CHAPTERS = join(ROOT, 'kr-harness', 'chapters');
export const RULES = JSON.parse(readFileSync(join(HERE, '..', 'references', 'kr-fit-rules.json'), 'utf8'));

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const nn = (n) => String(n).padStart(2, '0');
const JOSA = RULES.context.josa;
const COMPARE = new RegExp(RULES.context.comparison);

// ---- 규칙 컴파일 ----
const compiled = [];
for (const t of RULES.terms) {
  const add = (re, kind) => compiled.push({ id: t.id, label: t.label, severity: t.severity, advice: t.advice, re, kind, skipSource: !!t.skipSource });
  for (const w of t.ko ?? []) add(new RegExp(`(?<![가-힣A-Za-z])${esc(w)}(?=${JOSA}(?![가-힣]))`, 'g'), 'ko');
  for (const r of t.regex ?? []) add(new RegExp(r, 'g'), 'regex');
  for (const w of t.ascii ?? []) add(new RegExp(`(?<![A-Za-z0-9])${esc(w)}(?![A-Za-z0-9])`, 'g'), 'ascii');
  for (const w of t.cjk ?? []) add(new RegExp(esc(w), 'g'), 'cjk');
}
const P = RULES.phones;
const PHONE_CTX = new RegExp(P.context);
const UNIT_AFTER = new RegExp(P.unitAfter);
const CN_EXACT = new Set(P.cnExact);
const CN_PATTERN = new RegExp(P.cnPattern);
const ALLOW = new Map(P.allow.map((a) => [a.number, a]));
const CONFLICT = new Map(P.conflict.map((c) => [c.number, { ...c, okRe: new RegExp(c.ok), badRe: new RegExp(c.bad) }]));
const RETIRED = new Map(P.retired.map((r) => [r.number, { ...r, histRe: new RegExp(r.history) }]));
// 앞뒤가 숫자·소수점·범위·경로가 아닌 3~5자리 수, 또는 하이픈 번호
const PHONE_RE = /(?<![\w.,\-–~/:#=+·])(0\d{1,2}-\d{3,4}-\d{4}|1\d{3}-\d{4}|\d{3,5})(?!\d|[.,]\d|[A-Za-z%\-–~/])/g;
const HAN_RE = /[㐀-鿿豈-﫿]+/g;
const C = RULES.cnGov;
const CN_DOM = new RegExp(C.cnDomains);
const KR_DOM = new RegExp(C.krDomains);
const LEGAL = new RegExp(C.legalHints);
const OK_RE = /<!--\s*kr-fit-ok\b\s*:?([\s\S]*?)-->/;
// book-kr/README.md 표 한 줄: | 절 | 한국어 제목 | 원문 | 등급 | 상태 |
const TABLE_ROW = /^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|[^|]*\|\s*(\S+)\s*\|\s*(\S+)\s*\|$/;

// 다른 절 참조(KF-REF-*). 규칙 데이터는 json의 refs, 절 제목은 README 표.
const R = RULES.refs;
const REF_LEGAL = new RegExp(R.legalBefore);
const PEND_PAREN = new RegExp(R.pending.paren, 'g');
const PEND_ALWAYS = new RegExp(R.pending.always, 'g');
const PEND_WITHREF = new RegExp(R.pending.withRef, 'g');
const REF_IN_SENT = new RegExp(R.pending.refInSentence);
const PEND_SUFFIX = /\s*[,·]\s*(?:준비\s?중|공개\s?예정|미공개)\s*$/;
// 제N절. 앞이 한글·숫자면 다른 낱말이고, 뒤가 「차」면 「절차」다. 「제2·3절」처럼 묶은 것도 잡는다(m[2]).
const REF_RE = /(?<![가-힣\d])제\s?(\d+)((?:\s?[·,~∼\-–]\s?\d+)*)\s?절(?!차)/g;
const ITEM_AFTER = /^\s?제\s?\d+\s?항[(（]([^()（）\n]+)[)）]/;
// 조사는 괄호 앞 낱말(절=ㄹ받침, 항=ㅇ받침)에 맞춘다.
const JOSA_BAD_JEOL = /^(?:를|가|는|와|으로)/;
const JOSA_BAD_HANG = /^(?:를|가|는|와|로)/;
const normTitle = (s) => s.replace(/\s+/g, ' ').trim();
let titleCache = null;
export function chapterTitles() {
  if (titleCache) return titleCache;
  titleCache = new Map();
  const p = join(BOOKKR, 'README.md');
  if (existsSync(p)) for (const line of readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(TABLE_ROW);
    if (m) titleCache.set(Number(m[1]), normTitle(m[2]));
  }
  return titleCache;
}

// 같은 길이의 공백으로 가려서 열 위치를 유지한다.
const blank = (s) => s.replace(/[^\n]/g, ' ');
function mask(line) {
  return line
    .replace(/<!--[\s\S]*?-->/g, blank)
    .replace(/\]\([^)]*\)/g, blank)
    .replace(/<https?:\/\/[^>]*>/g, blank)
    .replace(/https?:\/\/[^\s>)\]，；）]+/g, blank)
    .replace(/(?:\.\.\/)?(?:book|docs|book-kr)\/[^\s)\]]*?\.md/g, blank)
    .replace(/doi:\s?\S+/gi, blank);
}
const sentenceAt = (s, i) => {
  const before = s.slice(0, i);
  const m = before.match(/.*(?:[.!?。]\s|다\.\s?|;\s|；)/s);
  const start = m ? m[0].length : 0;
  const rest = s.slice(i);
  const e = rest.search(/[.!?。](?:\s|$)|;\s|；/);
  return s.slice(start, e === -1 ? s.length : i + e + 1);
};

// ---- 본 검사 ----
export function lintText(text, { file = '(입력)' } = {}) {
  const lines = text.replace(/^﻿/, '').split(/\r?\n/);
  const findings = [];
  const todoStart = lines.findIndex((l) => /^## TODO/.test(l));
  const inTodo = (i) => todoStart !== -1 && i >= todoStart;
  const okReason = (i) => {
    for (const j of [i, i - 1]) {
      if (j < 0) continue;
      const m = lines[j].match(OK_RE);
      if (m) return m[1].trim();
    }
    return null;
  };
  const push = (i, rule, severity, match, advice, extra = {}) => {
    const reason = okReason(i);
    const f = { file, line: i + 1, rule, severity, match, advice, ...extra };
    if (reason) { f.suppressed = reason; f.severity = 'ok'; }
    findings.push(f);
  };

  // 빈 예외 표시
  lines.forEach((l, i) => {
    const m = l.match(OK_RE);
    if (m && !m[1].trim()) findings.push({ file, line: i + 1, rule: 'KF-OK-EMPTY', severity: 'block', match: m[0], advice: '예외 표시에 사유가 없습니다. <!-- kr-fit-ok: 사유 --> 형식으로 왜 통과인지 쓰세요.' });
  });

  lines.forEach((raw, i) => {
    if (/^<!--\s*成本标签/.test(raw.trim())) return;
    const isSource = /^- 출처:/.test(raw);
    const s = mask(raw);
    if (!s.trim()) return;
    const todo = inTodo(i);
    const spans = [];
    const lower = (sev, idx, kind) => {
      if (sev !== 'block') return [sev, null];
      if (todo) return ['warn', 'TODO 절'];
      if (isSource && kind !== 'cjk') return ['warn', '출처 줄'];
      if (COMPARE.test(sentenceAt(s, idx))) return ['warn', '비교 문맥'];
      return [sev, null];
    };

    // 1) 용어
    for (const r of compiled) {
      if (isSource && (r.kind === 'cjk' || r.skipSource)) continue;
      r.re.lastIndex = 0;
      let m;
      while ((m = r.re.exec(s))) {
        const a = m.index, b = a + m[0].length;
        // 앞선(더 구체적인) 규칙이 이미 잡은 자리와 겹치면 건너뜀. 규칙 순서는 json의 terms 순서.
        if (spans.some(([x, y]) => a < y && b > x)) continue;
        // 한자로 된 용어는 본문 한자 규칙(block)보다 약해지면 안 된다.
        const base = r.kind === 'cjk' ? 'block' : r.severity;
        const [sev, why] = lower(base, a, r.kind);
        spans.push([a, b]);
        push(i, r.id, sev, m[0], r.advice, why ? { note: why } : {});
      }
    }

    // 2) 한자(출처 줄 제외, 용어 규칙에 이미 걸린 자리는 건너뜀)
    if (!isSource) {
      HAN_RE.lastIndex = 0;
      let m;
      while ((m = HAN_RE.exec(s))) {
        const a = m.index, b = a + m[0].length;
        if (spans.some(([x, y]) => a < y && b > x)) continue;
        const gloss = /[가-힣]\s?[(（]$/.test(s.slice(0, a)) && /^[)）]/.test(s.slice(b)) && m[0].length <= 4;
        const base = gloss ? RULES.han.glossSeverity : RULES.han.severity;
        const [sev, why] = lower(base, a, 'han');
        push(i, gloss ? 'KF-HAN-GLOSS' : RULES.han.id, sev, m[0], gloss ? '한글 뒤 괄호 한자(독음 병기)입니다. 꼭 필요한지 보세요.' : RULES.han.advice, why ? { note: why } : {});
      }
    }

    // 3) 전화번호(출처 줄 제외)
    if (!isSource) {
      PHONE_RE.lastIndex = 0;
      let m;
      while ((m = PHONE_RE.exec(s))) {
        const num = m[1];
        const a = m.index, b = a + m[0].length;
        if (UNIT_AFTER.test(s.slice(b)) || /^\s?(?:조|항|호|절|번째|차례)/.test(s.slice(b))) continue;
        if (/제\s?$/.test(s.slice(0, a))) continue;
        const near = s.slice(Math.max(0, a - 14), Math.min(s.length, b + 10));
        const ctx = PHONE_CTX.test(near) || /^\s?(?:에|으로|로|번)\s?(?:전화|걸|연락|신고|문의)/.test(s.slice(b)) || /^\s?\)/.test(s.slice(b)) && /\(\s?$/.test(s.slice(0, a)) && PHONE_CTX.test(s.slice(Math.max(0, a - 25), a));
        const sent = sentenceAt(s, a);
        if (CONFLICT.has(num)) {
          const c = CONFLICT.get(num);
          const bad = c.badRe.test(sent), ok = c.okRe.test(sent);
          if (bad && !ok) push(i, 'KF-PHONE-MEANING', todo ? 'warn' : 'block', num, `${c.cn} / ${c.kr}. ${c.advice}`, { source: c.source });
          else if (bad && ok) push(i, 'KF-PHONE-MEANING', 'warn', num, `문맥이 애매합니다. ${c.cn} / ${c.kr}. ${c.advice}`, { source: c.source });
          else if (!ok && ctx) push(i, 'KF-PHONE-MEANING', 'warn', num, `용도를 판정하지 못했습니다. ${c.kr}. ${c.advice}`, { source: c.source });
          continue;
        }
        if (RETIRED.has(num)) {
          const r = RETIRED.get(num);
          if (!r.histRe.test(sent)) push(i, 'KF-PHONE-RETIRED', todo ? 'warn' : 'block', num, r.advice, { source: r.source });
          continue;
        }
        if (ALLOW.has(num)) continue;
        if (CN_EXACT.has(num) || (ctx && CN_PATTERN.test(num))) {
          const [sev, why] = lower('block', a, 'phone');
          push(i, 'KF-PHONE-CN', sev, num, P.cnAdvice, why ? { note: why } : {});
          continue;
        }
        const phoneShape = /-/.test(num) || /^1\d{2,3}$/.test(num);
        if (ctx && phoneShape) push(i, 'KF-PHONE-UNKNOWN', 'warn', num, P.unknownAdvice);
      }
    }
  });

  // 4) 법·제도 항목의 출처가 중국 정부 도메인뿐인 경우(항목 단위)
  const heads = lines.map((l, i) => (/^### /.test(l) ? i : -1)).filter((i) => i >= 0);
  heads.forEach((h, k) => {
    const end = Math.min(k + 1 < heads.length ? heads[k + 1] : lines.length, todoStart === -1 ? lines.length : todoStart);
    if (h >= end) return;
    const block = lines.slice(h, end);
    const tag = block.find((l) => /成本标签/.test(l)) ?? '';
    const srcIdx = block.map((l, j) => (/^- 출처:/.test(l) ? h + j : -1)).filter((x) => x >= 0);
    if (!srcIdx.length) return;
    const body = block.filter((l) => !/^- 출처:/.test(l) && !/成本标签/.test(l)).map(mask).join('\n');
    const legal = tag.includes(C.legalTag) || LEGAL.test(body);
    if (!legal) return;
    const hosts = [];
    for (const j of srcIdx) for (const u of lines[j].match(/https?:\/\/[^\s<>)\]，；）]+/g) ?? []) {
      try { hosts.push(new URL(u).hostname.toLowerCase()); } catch { /* 잘못된 URL은 건너뜀 */ }
    }
    const cn = hosts.filter((x) => CN_DOM.test(x));
    const kr = hosts.filter((x) => KR_DOM.test(x));
    if (!cn.length) return;
    const title = lines[h].replace(/^### /, '').slice(0, 40);
    if (!kr.length) push(srcIdx[0], C.id, inTodo(srcIdx[0]) ? 'warn' : 'block', [...new Set(cn)].join(', '), C.advice, { entry: title });
    else push(srcIdx[0], C.id, 'warn', [...new Set(cn)].join(', '), C.adviceMixed, { entry: title });
  });

  // 5) 항목 구조(항목 단위). TODO 절은 항목이 아니므로 제외.
  const S = RULES.struct;
  heads.forEach((h, k) => {
    const end = Math.min(k + 1 < heads.length ? heads[k + 1] : lines.length, todoStart === -1 ? lines.length : todoStart);
    if (h >= end) return;
    const title = lines[h].replace(/^### /, '').slice(0, 40);
    for (const x of structureIssues(lines.slice(h, end))) {
      findings.push({ file, line: h + x.i + 1, rule: S.id, severity: x.severity, match: x.match ?? x.msg, advice: `${x.msg}. ${S.advice}`, entry: title });
    }
  });

  // 6) 다른 절 참조. 공개 여부 표시(PENDING)는 출처 줄까지 보고 TODO 절에서는 warn.
  //    형식·제목·번호·조사(FORM·TITLE·RANGE·JOSA)는 출처 줄과 TODO 절을 보지 않는다. 법령·조약의 「제N절」은 건너뛴다.
  const titles = chapterTitles();
  lines.forEach((raw, i) => {
    if (/^>\s*\*\*상태:/.test(raw)) return;
    const s = mask(raw);
    if (!s.trim()) return;
    const todo = inTodo(i);
    const pend = [];
    const addPend = (a, b) => { if (!pend.some(([x, y]) => a < y && b > x)) pend.push([a, b]); };
    let m;
    for (const re of [PEND_PAREN, PEND_ALWAYS]) {
      re.lastIndex = 0;
      while ((m = re.exec(s))) addPend(m.index, m.index + m[0].length);
    }
    PEND_WITHREF.lastIndex = 0;
    while ((m = PEND_WITHREF.exec(s))) if (REF_IN_SENT.test(sentenceAt(s, m.index))) addPend(m.index, m.index + m[0].length);
    for (const [a, b] of pend.sort((x, y) => x[0] - y[0])) {
      push(i, R.pending.id, todo ? 'warn' : R.pending.severity, s.slice(a, b), R.pending.advice, todo ? { note: 'TODO 절' } : {});
    }

    if (todo || /^- 출처:/.test(raw)) return;
    REF_RE.lastIndex = 0;
    while ((m = REF_RE.exec(s))) {
      const a = m.index, b = a + m[0].length;
      if (REF_LEGAL.test(s.slice(Math.max(0, a - 40), a))) continue;
      const n = Number(m[1]);
      const shownRef = (s.slice(a).match(/^\S+(?:\s제\s?\d\S*)?/) ?? [m[0]])[0];
      if (m[2]) { push(i, R.form.id, R.form.severity, shownRef, `여러 절을 한 번에 묶었습니다. ${R.form.advice}`); continue; }
      if (titles.size ? !titles.has(n) : n < 1 || n > R.maxChapter) { push(i, R.range.id, R.range.severity, m[0], R.range.advice); continue; }
      const after = s.slice(b);
      const paren = after.match(/^[(（]([^()（）\n]*)[)）]/);
      const item = paren ? null : after.match(ITEM_AFTER);
      if (paren) {
        const want = titles.get(n);
        const got = normTitle(paren[1].replace(PEND_SUFFIX, ''));
        if (want && got !== want) push(i, R.title.id, R.title.severity, `${m[0]}${paren[0]}`, `README 표 제목은 「${want}」입니다. 제${n}절(${want})로 쓰세요. ${R.title.advice}`);
        const j = after.slice(paren[0].length).match(JOSA_BAD_JEOL);
        if (j) push(i, R.josa.id, R.josa.severity, `${m[0]}(…)${j[0]}`, R.josa.advice);
      } else if (item) {
        const j = after.slice(item[0].length).match(JOSA_BAD_HANG);
        if (j) push(i, R.josa.id, R.josa.severity, `${m[0]}${item[0].replace(/[(（].*$/, '')}(…)${j[0]}`, R.josa.advice);
      } else {
        const why = /^\s+[(（]/.test(after) ? '괄호를 「절」에 붙여 쓰세요. '
          : /^\s?제\s?\d+\s?조/.test(after) ? '항목 번호는 「제M조」가 아니라 「제M항」입니다. '
          : /^\s?제\s?[\d·,~∼\-–\s]+항/.test(after) ? '항목 번호 뒤에 앵커어 괄호가 없습니다. 항목마다 제M항(앵커어)로 쓰세요. '
          : '';
        push(i, R.form.id, R.form.severity, shownRef, `${why}${R.form.advice}`);
      }
    }
  });

  findings.sort((x, y) => x.line - y.line);
  return findings;
}

export const summarize = (fs) => ({
  block: fs.filter((f) => f.severity === 'block').length,
  warn: fs.filter((f) => f.severity === 'warn').length,
  ok: fs.filter((f) => f.severity === 'ok').length,
});

export function chapterFile(n) {
  const f = existsSync(BOOKKR) ? readdirSync(BOOKKR).find((x) => x.startsWith(`${nn(n)}-`) && x.endsWith('.md')) : null;
  return f ? join(BOOKKR, f) : null;
}

export function doneChapters() {
  const p = join(BOOKKR, 'README.md');
  if (!existsSync(p)) return [];
  const out = [];
  for (const line of readFileSync(p, 'utf8').split(/\r?\n/)) {
    const m = line.match(TABLE_ROW);
    if (m && m[4] === '✅') out.push(Number(m[1]));
  }
  return out;
}

const shown = (path) => { const r = relative(ROOT, path).replace(/\\/g, '/'); return r.startsWith('..') ? basename(path) : r; };
export function lintFile(path) {
  const file = shown(path);
  const findings = lintText(readFileSync(path, 'utf8'), { file });
  return { file, findings, ...summarize(findings) };
}

export function lintChapter(n) {
  const p = chapterFile(n);
  if (!p) return null;
  return { chapter: n, ...lintFile(p) };
}

export function formatResult(r) {
  const out = [];
  for (const f of r.findings) {
    if (f.severity === 'ok') continue;
    const note = f.note ? ` (${f.note})` : '';
    const entry = f.entry ? ` [${f.entry}]` : '';
    out.push(`${f.file}:${f.line}  ${f.rule}  ${f.severity}  「${f.match}」${entry}${note}  → ${f.advice}`);
  }
  out.push(`요약: ${r.file} — block ${r.block} · warn ${r.warn} · 예외 통과 ${r.ok}`);
  return out.join('\n');
}

// 절 결과를 kr-harness/chapters/NN/kr-fit-lint.txt에 저장(kr-fit --save, pipeline.mjs gate --save가 쓴다).
// 내용이 같으면 파일을 건드리지 않는다(줄바꿈 차이는 무시). 다시 썼으면 true.
export function saveLint(n, r) {
  const dir = join(CHAPTERS, nn(n));
  const p = join(dir, 'kr-fit-lint.txt');
  const stamp = `# kr-fit 결과 — ${r.file} (규칙 v${RULES.version}, ${RULES.updated})\n# 다시 만들기: node .claude/skills/kr-pipeline/scripts/pipeline.mjs gate ${n} --save  (book-kr 본문이면 kr-fit.mjs ${n} --save 도 같음)\n`;
  const body = `${stamp}${formatResult(r)}\nKR-FIT-LINT: ${r.block ? 'fail' : 'pass'} block=${r.block} warn=${r.warn}\n`;
  if (existsSync(p) && readFileSync(p, 'utf8').replace(/\r\n?/g, '\n') === body) return false;
  mkdirSync(dir, { recursive: true });
  writeFileSync(p, body, 'utf8');
  return true;
}

// ---- 본문 해시(리뷰를 본문 내용에 묶는다) ----
// kr-fit-review.md 마지막 줄의 sha256=는 검토 시점 본문의 이 해시다. pipeline.mjs gate가 현재 본문과 비교한다.
// 정규화: BOM 제거, CRLF·CR → LF(Windows autocrlf 체크아웃에서도 같은 값), `> **상태:` 배너 줄 제거,
// 앞쪽 빈 줄 제거, 끝의 공백·줄바꿈을 줄바꿈 하나로. 배너를 빼는 이유: assemble은 실행 산출물(7-refined.md) 앞에
// 배너만 붙여 book-kr/에 넣고, gate --demote/--promote는 배너만 바꾼다. 이 둘 때문에 리뷰가 무효가 되면 안 된다.
// 그 밖에는 한 글자만 바뀌어도 해시가 달라진다.
export function normalizeForHash(text) {
  return text
    .replace(/^﻿/, '')
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .filter((l) => !/^> \*\*상태:/.test(l))
    .join('\n')
    .replace(/^(?:[ \t]*\n)+/, '')
    .replace(/\s+$/, '') + '\n';
}
export const contentHash = (text) => createHash('sha256').update(normalizeForHash(text), 'utf8').digest('hex');
export const fileHash = (path) => contentHash(readFileSync(path, 'utf8'));

// ---- CLI ----
const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const argv = process.argv.slice(2);
  const has = (k) => argv.includes(k);
  const pos = argv.filter((a) => !a.startsWith('--'));
  const targets = [];
  if (has('--all-done')) for (const n of doneChapters()) targets.push({ n, path: chapterFile(n) });
  for (const a of pos) {
    if (/^\d{1,2}$/.test(a)) targets.push({ n: Number(a), path: chapterFile(Number(a)) });
    else targets.push({ n: Number(basename(a).match(/^(\d{2})-/)?.[1]) || null, path: resolve(a) });
  }
  if (!targets.length) {
    console.error('사용: kr-fit.mjs <절 번호|파일 경로>... | --all-done  [--check] [--json] [--save] | --hash');
    process.exit(2);
  }
  if (has('--hash')) {
    let bad = 0;
    for (const t of targets) {
      if (!t.path || !existsSync(t.path)) { console.error(`파일 없음: 제${t.n}절 ${t.path ?? ''}`); bad++; continue; }
      const h = fileHash(t.path);
      console.log(targets.length === 1 ? h : `${h}  ${shown(t.path)}`);
    }
    process.exit(bad ? 1 : 0);
  }
  const results = [];
  let missing = 0;
  for (const t of targets) {
    if (!t.path || !existsSync(t.path)) { console.error(`파일 없음: 제${t.n}절 ${t.path ?? ''}`); missing++; continue; }
    const r = { chapter: t.n, ...lintFile(t.path) };
    results.push(r);
    if (has('--save') && t.n && r.file.startsWith('book-kr/')) saveLint(t.n, r);
  }
  if (has('--json')) console.log(JSON.stringify(results, null, 1));
  else {
    for (const r of results) console.log(formatResult(r) + '\n');
    const tb = results.reduce((s, r) => s + r.block, 0), tw = results.reduce((s, r) => s + r.warn, 0);
    console.log(`전체: ${results.length}개 파일 — block ${tb} · warn ${tw}${has('--check') ? (tb || missing ? ' → 실패' : ' → 통과') : ''}`);
  }
  if (has('--check') && (results.some((r) => r.block) || missing)) process.exit(1);
}
