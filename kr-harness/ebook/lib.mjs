// 한국어판 전자책 공용 파서·렌더러. EPUB·PDF·오프라인 HTML·웹 리더가 모두 이 모듈 하나만 본다.
// 목차는 book-kr/README.md 표에서 읽는다. 파일 이름을 하드코딩하지 않는다.
// 표의 상태가 ✅인 절만 본문에 싣는다. 목차에서는 공개 절을 절 번호 순으로 위에 두고,
// 나머지는 「공개 예정 N절」 묶음 하나로 접어 둔다.
// 진행 막대의 분모(원문 항목 수)는 README 표의 원문 링크(book/NN-*.md)에서 「### 」 줄을 세어 얻는다.
// 본문의 다른 절 참조(제N절(주제), 제N절 제M항(앵커어))는 빌드가 바꾼다. 공개 절이면 링크, 아니면 흐린 「공개 예정」 표시.
// ✅ 절은 빌드할 때마다 적합성 게이트(pipeline.mjs gate --all-done)를 다시 통과해야 한다. 못 넘으면 빌드 실패.
// upstream 파일(tools/lib/book.mjs 등)은 고치지 않는다. 필요한 것은 여기 따로 둔다.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { resolve, dirname, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync, spawnSync } from 'node:child_process';
import { Marked, Tokenizer } from 'marked';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
export const HERE = dirname(fileURLToPath(import.meta.url));
export const DIST = resolve(ROOT, 'dist-kr');
export const REPO = 'https://github.com/seolcoding/HowToLiveBetter-KR';
export const UPSTREAM = 'https://github.com/eternity4719/HowToLiveBetter';
export const UPSTREAM_TITLE = '高性价比人生指南';
export const SITE = 'https://seolcoding.github.io/HowToLiveBetter-KR/';
export const RELEASE_TAG = 'kr-ebook-latest';
export const BASENAME = 'HowToLiveBetter-KR';
export const DOWNLOADS = {
  epub: `${REPO}/releases/download/${RELEASE_TAG}/${BASENAME}.epub`,
  pdf: `${REPO}/releases/download/${RELEASE_TAG}/${BASENAME}.pdf`,
  html: `${REPO}/releases/download/${RELEASE_TAG}/${BASENAME}.html`,
};
export const DEFAULT_TITLE = '가성비 인생 가이드 (한국어판)';
export const LICENSE = 'CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)';
export const NOTICE = `이 책은 《${UPSTREAM_TITLE}》을 한국 사정에 맞게 고쳐 쓴 비공식 현지화판입니다. 원저자가 만든 공식 번역이 아닙니다. 내용이 서로 다를 때는 중국어 원문이 우선합니다.`;

// Windows에서 core.autocrlf=true로 받으면 CRLF다. 파싱은 전부 LF 기준.
export const read = p => readFileSync(resolve(ROOT, p), 'utf8').replace(/\r\n?/g, '\n');
export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const plain = html => html.replace(/<[^>]+>/g, '');
export const unesc = s => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
export const pad2 = n => String(n).padStart(2, '0');
export const kb = n => `${(n / 1024).toFixed(0)} KB`;
export const fileSize = p => statSync(p).size;

export function gitCommit() {
  try {
    return execSync('git rev-parse HEAD', { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return process.env.GITHUB_SHA ?? '';
  }
}

// CI는 UTC에서 돈다. 독자가 보는 시각은 한국 시간, 분 단위로 통일한다. 예: 2026-10-10 14:05
export function buildStamp(d = new Date()) {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).format(d);
}

// GFM은 「7000~8000보 … 150~300분」처럼 물결표 두 개 사이를 취소선으로 읽는다(marked·pandoc 모두).
// 한국어 범위 표기의 물결표는 전부 글자로 남긴다. 코드 구간과 <URL> 안은 건드리지 않는다.
export function escapeTildes(md) {
  return md.split(/(`[^`\n]*`|<https?:[^>\s]*>)/).map((part, i) => i % 2 ? part : part.replace(/(?<![\\~])~(?!~)/g, '\\~')).join('');
}

// 내부 작업 표시 제거: 절 첫머리의 상태 인용줄, [← 총목차] 줄, <!-- --> 주석(비용태그·kr-fit-ok 포함).
export function cleanChapter(md) {
  return escapeTildes(md
    .replace(/<!--[\s\S]*?-->/g, '')
    .split('\n')
    .filter(l => !/^>\s*\*\*상태:/.test(l) && !/^\[← 총목차\]\([^)]*\)\s*$/.test(l))
    .map(l => l.replace(/[ \t]{2,}/g, ' ').replace(/[ \t]+$/, ''))
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()) + '\n';
}

// TODO 집계. 표시는 본문에 그대로 남긴다.
//   marks: 「TODO」 표시 개수(본문 + 「## TODO 확인 필요」 절), listed: 「## TODO 확인 필요」 절의 목록 항목 수
export function countTodos(md) {
  const lines = md.split('\n');
  const at = lines.findIndex(l => /^##\s+TODO/.test(l));
  const count = ls => ls.join('\n').match(/TODO/g)?.length ?? 0;
  const body = count(at < 0 ? lines : lines.slice(0, at));
  const inList = at < 0 ? 0 : count(lines.slice(at + 1));
  const listed = at < 0 ? 0 : lines.slice(at + 1).filter(l => /^\s*(\d+\.|[-*])\s+/.test(l)).length;
  return { body, inList, marks: body + inList, listed };
}

// 적합성 게이트. ✅ 절이 전부 「게이트 통과」로 나와야 한다. --save 없이 돌리므로 작업 트리에 아무것도 쓰지 않는다.
let gateChecked = null;
export function assertGate(ready) {
  if (gateChecked) return gateChecked;
  const r = spawnSync(process.execPath, ['.claude/skills/kr-pipeline/scripts/pipeline.mjs', 'gate', '--all-done'], { cwd: ROOT, encoding: 'utf8' });
  const out = `${r.stdout ?? ''}${r.stderr ?? ''}`.trim();
  if (r.status !== 0) throw new Error(`적합성 게이트를 통과하지 못했습니다(pipeline.mjs gate --all-done, 종료코드 ${r.status}). 전자책을 만들지 않습니다.\n${out}`);
  const passed = new Set([...out.matchAll(/^제0*(\d+)절 .*게이트 통과/gm)].map(m => Number(m[1])));
  const missing = ready.filter(c => !passed.has(c.num)).map(c => c.num);
  if (missing.length) throw new Error(`README 표에서 ✅인데 게이트 출력에 「게이트 통과」가 없는 절: ${missing.join(', ')}\n${out}`);
  gateChecked = `적합성 게이트: ✅ ${ready.length}절 모두 통과`;
  return gateChecked;
}

// 원문(중국어) 절 파일의 항목 수. README 표의 원문 링크를 따르고, 링크가 없거나 깨졌으면 book/NN-*.md를 찾는다.
// 못 찾으면 실패한다. 진행 막대의 분모를 어림값으로 채우지 않는다.
function originalPath(num, linked) {
  if (linked && existsSync(resolve(ROOT, linked))) return linked;
  const hit = existsSync(resolve(ROOT, 'book')) && readdirSync(resolve(ROOT, 'book')).find(f => /^\d+-.+\.md$/.test(f) && Number(f.match(/^(\d+)-/)[1]) === num);
  if (hit) return `book/${hit}`;
  throw new Error(`제${num}절의 원문 파일을 찾지 못했습니다(README 표 링크: ${linked ?? '없음'}). 원문 항목 수를 셀 수 없습니다`);
}
const countEntries = md => md.match(/^### /gm)?.length ?? 0;
const pct = (now, total) => total ? Math.round(now / total * 100) : 0;

// book-kr/README.md 표 → 절 목록.
export function readKrBook({ gate = true } = {}) {
  const readme = read('book-kr/README.md');
  const files = readdirSync(resolve(ROOT, 'book-kr')).filter(f => /^\d+-.+\.md$/.test(f));
  const chapters = [];
  for (const line of readme.split('\n')) {
    const cells = line.split('|').slice(1, -1).map(c => c.trim());
    if (cells.length < 5 || !/^\d+$/.test(cells[0])) continue;
    const [numStr, title, origCell, grade, status] = cells;
    const num = Number(numStr);
    const file = files.find(f => Number(f.match(/^(\d+)-/)[1]) === num);
    const ready = status.includes('✅');
    const orig = origCell.match(/\]\(([^)]+)\)/)?.[1];
    const origPath = originalPath(num, orig ? posix.normalize(posix.join('book-kr', decodeURI(orig))) : null);
    const ch = {
      num, title, grade, status, ready,
      id: `ch${pad2(num)}`,
      src: file ? `book-kr/${file}` : null,
      original: repoUrl(origPath),
      origEntries: countEntries(read(origPath)),
    };
    if (ready) {
      if (!file) throw new Error(`book-kr/README.md 표에서 제${num}절이 ✅인데 book-kr/${pad2(num)}-*.md 파일이 없습니다`);
      const raw = read(ch.src);
      ch.md = cleanChapter(raw);
      ch.todos = countTodos(ch.md);
      const h1 = ch.md.match(/^# (.+)$/m);
      if (!h1) throw new Error(`${ch.src}에 1단계 제목(# …)이 없습니다`);
      ch.heading = h1[1].trim();
      ch.entries = ch.md.split('\n').filter(l => /^###\s+/.test(l)).map(l => l.replace(/^###\s+/, '').trim());
      // 「제N절 제M항」 참조가 갈 수 있는 항목 번호(### M. …). 렌더러가 붙이는 앵커 eM과 같은 번호다.
      ch.entryNums = new Set(ch.entries.map(t => t.match(/^(\d+)\./)?.[1]).filter(Boolean).map(Number));
    }
    chapters.push(ch);
  }
  if (!chapters.length) throw new Error('book-kr/README.md에서 절 표를 찾지 못했습니다');
  chapters.sort((a, b) => a.num - b.num);
  const ready = chapters.filter(c => c.ready);
  const pending = chapters.filter(c => !c.ready);
  if (!ready.length) throw new Error('✅인 절이 하나도 없습니다. 실을 본문이 없습니다');
  const gateLine = gate ? assertGate(ready) : '적합성 게이트: 건너뜀';

  // 책 제목: README에 「책 제목: …」 줄이 있으면 그것을 쓴다.
  const title = readme.match(/^\**책 제목\**\s*[:：]\s*\**(.+?)\**\s*$/m)?.[1]?.trim() || DEFAULT_TITLE;
  const todo = ready.reduce((a, c) => Object.fromEntries(Object.keys(a).map(k => [k, a[k] + c.todos[k]])), { body: 0, inList: 0, marks: 0, listed: 0 });
  const entryCount = ready.reduce((n, c) => n + c.entries.length, 0);
  const origTotal = chapters.reduce((n, c) => n + c.origEntries, 0);
  const progress = {
    chapters: { now: ready.length, total: chapters.length, pct: pct(ready.length, chapters.length) },
    entries: { now: entryCount, total: origTotal, pct: pct(entryCount, origTotal) },
  };
  return { title, chapters, ready, pending, todo, entryCount, origTotal, progress, gateLine, stamp: buildStamp(), commit: gitCommit() };
}

// 저장소 안 파일의 GitHub 주소(중국어 원문 ../book/… 포함). 한국어판 저장소의 main을 가리킨다.
export function repoUrl(path, hash) {
  const kind = path.endsWith('/') ? 'tree' : 'blob';
  return `${REPO}/${kind}/main/${encodeURI(path)}${hash ? '#' + hash : ''}`;
}

// 본문 상대 링크 재작성. 돌려주는 값이 null이면 링크를 빼고 글자만 남긴다(미공개 절).
// ctx.chapterHref(ch, hash): 출력물별 절 링크, ctx.contentsHref: 차례.
export function rewriteHref(href, src, book, ctx) {
  if (/^(https?:|mailto:)/.test(href)) return href;
  if (href.startsWith('#')) return href;
  const [pathPart, hash] = href.split('#');
  const target = posix.normalize(posix.join(posix.dirname(src), decodeURI(pathPart)));
  if (target === 'book-kr/README.md' || target === 'book-kr/') return ctx.contentsHref;
  const ch = book.chapters.find(c => c.src === target);
  if (ch) return ch.ready ? ctx.chapterHref(ch, hash) : null;
  if (/^book-kr\/\d+-/.test(target)) return null; // 표에 없는 절 파일
  return repoUrl(target, hash);
}

// GFM 맨 URL 자동 링크는 공백에서만 끊긴다. 「https://…；보건복지상담센터」처럼 전각 문장부호가
// 붙으면 그 뒤까지 링크로 삼킨다. 다만 law.go.kr 주소는 경로에 한글이 들어간다(https://www.law.go.kr/법령/형법/제347조).
// 그래서 ASCII와 한글(음절·호환 자모, 「ㆍ」 포함)까지만 URL로 보고, 그 밖의 문자에서 자른다. 끝의 「;」도 뗀다.
const URL_CHARS = /^[\x21-\x7eㄱ-ㆎ가-힣]*/;
const safeUrlTokenizer = {
  url(src) {
    const tok = Tokenizer.prototype.url.call(this, src);
    if (!tok) return tok;
    const cut = tok.raw.match(URL_CHARS)[0].replace(/;+$/, '');
    if (cut === tok.raw) return tok;
    return Tokenizer.prototype.url.call(this, cut);
  },
};
// href 안의 비ASCII(한글 경로)는 퍼센트 인코딩한다. 보이는 글자는 그대로 둔다. epubcheck RSC-020 방지.
export const asciiHref = href => href.replace(/[^\x00-\x7f]+/g, s => encodeURIComponent(s));

// ---------- 다른 절 참조 ----------
// 본문 표준 형식: 「제N절(주제)」, 「제N절 제M항(앵커어)」. N은 0을 붙이지 않은 절 번호다.
// 괄호 안 글자와 상관없이 잡고, 괄호 없는 「제N절」도 잡는다. 표에 없는 번호(1~34 밖)는 그대로 둔다.
//   - 항 번호가 「제15·16항」처럼 여럿이면 첫 번호로 간다. 옛 원고의 「제27조」도 항으로 받는다.
//   - 바로 앞이 「제K장」「제K편」이면 법령의 장·절 구조로 보고 건너뛴다(예: 「제4장 제2절」).
//   - 괄호 끝의 옛 표시 「, 준비 중」과 괄호 전체가 「(준비 중)」인 것은 보이는 글자에서 뺀다. 원고는 고치지 않는다.
export const REF_RE = /(?<!제\s?\d{1,3}\s?[장편]\s?)제(\d{1,2})절(?:\s?제(\d{1,3})(?:\s?[·,]\s?\d{1,3})*\s?[항조])?(?:\(([^()\n]*)\))?/g;
export const refStats = { link: 0, pending: 0 };
const refDisplay = raw => raw.replace(/\s*[,，·]\s*준비\s?중\s*\)$/, ')').replace(/\(\s*준비\s?중\s*\)$/, '');

// text 안의 참조를 fmt(r)의 결과로 바꾼다. r: { raw, display, target, item, hash }
//   hash: 대상이 공개 절이고 그 항목(### M.)이 있으면 'eM', 아니면 null(절 첫머리로)
export function replaceRefs(text, book, fmt) {
  return text.replace(REF_RE, (raw, n, item) => {
    const target = book.chapters.find(c => c.num === Number(n));
    if (!target) return raw;
    const itemNum = item ? Number(item) : null;
    const hash = target.ready && itemNum && target.entryNums?.has(itemNum) ? `e${itemNum}` : null;
    refStats[target.ready ? 'link' : 'pending']++;
    return fmt({ raw, display: refDisplay(raw), target, item: itemNum, hash });
  });
}

// HTML(XHTML) 본문용. 태그 밖 글자만 바꾼다. <a>·<code>·<pre>·제목(<h1>~<h6>) 안은 건드리지 않는다.
// 글자는 이미 이스케이프돼 있으므로 다시 이스케이프하지 않는다.
const SKIP_TAG = /^(a|code|pre|h[1-6]|script|style)$/i;
export function linkRefsHtml(html, book, chapterHref) {
  let skip = 0;
  return html.split(/(<[^>]*>)/).map((part, i) => {
    if (i % 2) {
      const m = part.match(/^<(\/?)([a-zA-Z][a-zA-Z0-9]*)/);
      if (m && SKIP_TAG.test(m[2]) && !part.endsWith('/>')) skip = Math.max(0, skip + (m[1] ? -1 : 1));
      return part;
    }
    if (skip || !part.includes('절')) return part;
    return replaceRefs(part, book, r => r.target.ready
      ? `<a class="ref" href="${esc(asciiHref(chapterHref(r.target, r.hash ?? undefined)))}">${r.display}</a>`
      : `<span class="ref-pending">${r.display} <span class="ref-badge">공개 예정</span></span>`);
  }).join('');
}

// Markdown 원고용(PDF). 제목 줄, 펜스 코드, `코드`, [링크](…), <URL>, 맨 URL은 건드리지 않는다.
const MD_PROTECT = /(`+[^`]*`+|!?\[[^\]]*\]\([^)]*\)|<https?:[^>]*>|https?:\/\/[\x21-\x7eㄱ-ㆎ가-힣]+)/;
export function linkRefsMd(md, book, fmt) {
  let fence = null;
  return md.split('\n').map(line => {
    const f = line.match(/^\s*(`{3,}|~{3,})/);
    if (fence) {
      if (f && f[1][0] === fence[0] && f[1].length >= fence.length) fence = null;
      return line;
    }
    if (f) { fence = f[1]; return line; }
    if (/^#{1,6}\s/.test(line) || !line.includes('절')) return line;
    return line.split(MD_PROTECT).map((part, i) => i % 2 ? part : replaceRefs(part, book, fmt)).join('');
  }).join('\n');
}

// 항목 필드 라벨. 렌더링에서 라벨을 굵게, 「쉽게」는 눈에 띄게 꾸민다.
export const FIELDS = { 비용: 'cost', 쉽게: 'plain', 이득: 'gain', 근거등급: 'grade', 출처: 'src', 비고: 'note' };

// 절 하나를 HTML(또는 XHTML)로. 제목마다 id를 붙이고 목록을 돌려준다.
//   prefix: 한 파일에 여러 절이 들어가는 출력물(오프라인 HTML)에서 id 충돌을 막는 접두어
//   ### N. … → `${prefix}eN`, ## TODO … → `${prefix}todo`, 그 밖 → `${prefix}sK`, # … → `${prefix}top`
export function renderChapter(ch, book, { prefix = '', xhtml = false, chapterHref, contentsHref, h1Html } = {}) {
  const headings = [];
  const used = new Set();
  let seq = 0;
  const uniq = id => { let u = id, k = 2; while (used.has(u)) u = `${id}-${k++}`; used.add(u); return u; };
  const marked = new Marked({ gfm: true });
  marked.use({
    tokenizer: safeUrlTokenizer,
    renderer: {
      heading({ tokens, depth }) {
        const html = this.parser.parseInline(tokens);
        const text = unesc(plain(html)).trim();
        const n = depth === 3 ? text.match(/^(\d+)\./)?.[1] : null;
        const base = depth === 1 ? 'top' : n ? `e${n}` : depth === 2 && /^TODO/.test(text) ? 'todo' : `s${++seq}`;
        const id = uniq(prefix + base);
        headings.push({ id, depth, text, n: n ? Number(n) : null });
        if (depth === 1 && h1Html) return h1Html(id, html);
        return `<h${depth} id="${id}">${html}</h${depth}>\n`;
      },
      link({ href, title, tokens }) {
        const text = this.parser.parseInline(tokens);
        const to = rewriteHref(href, ch.src, book, { chapterHref, contentsHref });
        if (to == null) return text;
        const t = title ? ` title="${esc(title)}"` : '';
        return `<a href="${esc(asciiHref(to))}"${t}>${text}</a>`;
      },
      image: ({ text }) => esc(text ?? ''),
      html: () => '',
    },
  });
  let html = marked.parse(ch.md);
  // 다른 절 참조 → 공개 절은 링크, 공개 예정 절은 흐린 표시. 미공개 절로 가던 [링크]는 위 link()에서 글자만 남았으므로 여기서 같이 바뀐다.
  html = linkRefsHtml(html, book, chapterHref);
  // 항목 필드: <li>비용: … → <li class="f-cost"><strong class="label">비용</strong>: …
  html = html.replace(/<li>(비용|쉽게|이득|근거등급|출처|비고):/g, (_, k) => `<li class="f-${FIELDS[k]}"><strong class="label">${k}</strong>:`);
  if (xhtml) html = toXhtml(html);
  return { html, headings };
}

export function toXhtml(body) {
  return body
    .replace(/<(br|hr)>/g, '<$1/>')
    .replace(/<(img|input)\b([^>]*?)\s*\/?>/g, '<$1$2/>')
    .replace(/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;');
}

// 검색 색인: 항목 제목 하나당 한 줄. href는 출력물별로 만든다.
export function searchIndex(book, hrefOf) {
  const out = [];
  for (const ch of book.ready) {
    const { headings } = ch.rendered;
    for (const h of headings.filter(h => h.depth === 3)) out.push({ c: ch.num, ct: ch.title, t: h.text, h: hrefOf(ch, h.id) });
  }
  return out;
}

// 빌드 로그 요약.
export function logSummary(label, book, extra = '') {
  const t = book.todo;
  const { chapters: pc, entries: pe } = book.progress;
  console.log(`[${label}] ${book.gateLine}`);
  console.log(`[${label}] 공개 ${pc.now}/${pc.total}절(${book.ready.map(c => c.num).join(', ')}), 항목 ${pe.now}/${pe.total}개(${pe.pct}%), 공개 예정 ${book.pending.length}절${extra}`);
  console.log(`[${label}] 다른 절 참조: 링크 ${refStats.link}곳, 공개 예정 표시 ${refStats.pending}곳`);
  console.log(`[${label}] TODO 집계: 「TODO」 표시 ${t.marks}개(항목 본문 ${t.body}, 「TODO 확인 필요」 절 ${t.inList}), 「TODO 확인 필요」 목록 ${t.listed}건 — 절별 표시 ${book.ready.map(c => `${c.num}절 ${c.todos.marks}`).join(', ')}`);
}

// 머리말 문단들(HTML 출력물 공용). 각 출력물이 자기 링크로 감싸 쓴다.
export function frontFacts(book) {
  const { chapters: pc, entries: pe } = book.progress;
  return {
    progress: `${pc.total}절 중 ${pc.now}절 공개(${pc.pct}%), 원문 ${pe.total}항목 중 ${pe.now}항목 공개(${pe.pct}%)`,
    chapterLine: `공개한 절: ${pc.now}/${pc.total}절(${pc.pct}%)`,
    entryLine: `공개한 항목: ${pe.now}/${pe.total}항목(${pe.pct}%)`,
    pendingLine: book.pending.length ? `공개 예정 ${book.pending.length}절: ${book.pending.map(c => c.num).join(', ')}` : '',
    stamp: `${book.stamp} (한국 시간)${book.commit ? ` · 커밋 ${book.commit.slice(0, 7)}` : ''}`,
    localized: '중국의 법·제도·전화번호는 한국 것으로 바꿨습니다. 의학 근거(논문 DOI, 위험비 같은 수치)는 원문 그대로 옮겼습니다. 아직 확인하지 못한 부분은 본문에 「TODO 확인 필요」로 표시해 두었습니다.',
    license: `본문은 원본과 같은 ${LICENSE} 조건을 따릅니다. 출처(《${UPSTREAM_TITLE}》과 원본 저장소)를 밝히고 고친 부분을 고쳤다고 적으면 자유롭게 옮겨 실을 수 있습니다.`,
  };
}

export const readAsset = name => readFileSync(resolve(HERE, name), 'utf8').replace(/\r\n?/g, '\n');
