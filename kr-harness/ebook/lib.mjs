// 한국어판 전자책 공용 파서·렌더러. EPUB·PDF·오프라인 HTML·웹 리더가 모두 이 모듈 하나만 본다.
// 목차는 book-kr/README.md 표에서 읽는다. 파일 이름을 하드코딩하지 않는다.
// 표의 상태가 ✅인 절만 본문에 싣고, 나머지는 목차에 「준비 중」으로만 둔다.
// ✅ 절은 빌드할 때마다 적합성 게이트(pipeline.mjs gate --all-done)를 다시 통과해야 한다. 못 넘으면 빌드 실패.
// upstream 파일(tools/lib/book.mjs 등)은 고치지 않는다. 필요한 것은 여기 따로 둔다.
import { readFileSync, readdirSync, statSync } from 'node:fs';
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
    const origPath = orig ? posix.normalize(posix.join('book-kr', decodeURI(orig))) : null;
    const ch = {
      num, title, grade, status, ready,
      id: `ch${pad2(num)}`,
      src: file ? `book-kr/${file}` : null,
      original: origPath ? repoUrl(origPath) : UPSTREAM,
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
    }
    chapters.push(ch);
  }
  if (!chapters.length) throw new Error('book-kr/README.md에서 절 표를 찾지 못했습니다');
  chapters.sort((a, b) => a.num - b.num);
  const ready = chapters.filter(c => c.ready);
  if (!ready.length) throw new Error('✅인 절이 하나도 없습니다. 실을 본문이 없습니다');
  const gateLine = gate ? assertGate(ready) : '적합성 게이트: 건너뜀';

  // 책 제목: README에 「책 제목: …」 줄이 있으면 그것을 쓴다.
  const title = readme.match(/^\**책 제목\**\s*[:：]\s*\**(.+?)\**\s*$/m)?.[1]?.trim() || DEFAULT_TITLE;
  const todo = ready.reduce((a, c) => Object.fromEntries(Object.keys(a).map(k => [k, a[k] + c.todos[k]])), { body: 0, inList: 0, marks: 0, listed: 0 });
  const entryCount = ready.reduce((n, c) => n + c.entries.length, 0);
  return { title, chapters, ready, todo, entryCount, gateLine, stamp: buildStamp(), commit: gitCommit() };
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
  console.log(`[${label}] ${book.gateLine}`);
  console.log(`[${label}] 공개 ${book.ready.length}/${book.chapters.length}절(${book.ready.map(c => c.num).join(', ')}), 항목 ${book.entryCount}개${extra}`);
  console.log(`[${label}] TODO 집계: 「TODO」 표시 ${t.marks}개(항목 본문 ${t.body}, 「TODO 확인 필요」 절 ${t.inList}), 「TODO 확인 필요」 목록 ${t.listed}건 — 절별 표시 ${book.ready.map(c => `${c.num}절 ${c.todos.marks}`).join(', ')}`);
}

// 머리말 문단들(HTML 출력물 공용). 각 출력물이 자기 링크로 감싸 쓴다.
export function frontFacts(book) {
  return {
    progress: `전체 ${book.chapters.length}절 중 ${book.ready.length}절 공개, 항목 ${book.entryCount}개`,
    stamp: `${book.stamp} (한국 시간)${book.commit ? ` · 커밋 ${book.commit.slice(0, 7)}` : ''}`,
    localized: '중국의 법·제도·전화번호는 한국 것으로 바꿨습니다. 의학 근거(논문 DOI, 위험비 같은 수치)는 원문 그대로 옮겼습니다. 아직 확인하지 못한 부분은 본문에 「TODO 확인 필요」로 표시해 두었습니다.',
    license: `본문은 원본과 같은 ${LICENSE} 조건을 따릅니다. 출처(《${UPSTREAM_TITLE}》과 원본 저장소)를 밝히고 고친 부분을 고쳤다고 적으면 자유롭게 옮겨 실을 수 있습니다.`,
  };
}

export const readAsset = name => readFileSync(resolve(HERE, name), 'utf8').replace(/\r\n?/g, '\n');
