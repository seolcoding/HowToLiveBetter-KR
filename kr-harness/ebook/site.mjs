// 웹 리더(GitHub Pages)를 dist-kr/site/에 만든다. 외부 스크립트·글꼴·CDN 없이 정적 파일만.
// 용법: node kr-harness/ebook/site.mjs [출력 폴더]   기본 dist-kr/site
//   index.html      첫 화면: 비공식판 안내, 진행 막대(공개 절 N/34, 공개 항목/원문 항목), 항목 검색,
//                   차례(공개 절을 위에, 나머지는 접힌 「공개 예정 N절」 묶음), 내려받기
//   chNN.html       공개 절마다 한 페이지(항목 앵커 #eN, 절 안 항목 목차, 앞뒤 절 이동).
//                   본문의 「제N절(주제)」 참조는 공개 절이면 chNN.html(#eM) 링크, 아니면 「공개 예정」 표시
//   search-index.json  항목 제목 색인(빌드 때 생성, 브라우저에서 검색)
//   404.html, assets/reader.css, assets/reader.js, .nojekyll
import { writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { DIST, SITE, ROOT, esc, readKrBook, renderChapter, searchIndex, logSummary, readAsset, fileSize, kb } from './lib.mjs';
import { shell, header, footer, homeMain, entryToc } from './html.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? resolve(DIST, 'site'));
const book = readKrBook();

const pageOf = ch => `${ch.id}.html`;
const chapterHref = (ch, hash) => `${pageOf(ch)}${hash ? '#' + hash : ''}`;
for (const ch of book.ready) ch.rendered = renderChapter(ch, book, { chapterHref, contentsHref: 'index.html#contents' });

const description = `${book.title}: 중국어 원서 《高性价比人生指南》을 한국 사정에 맞게 고쳐 쓴 비공식 현지화판. 공개 ${book.ready.length}/${book.chapters.length}절, 항목 ${book.entryCount}개.`;
const nav = [['index.html#contents', '차례'], ['index.html#search', '검색'], ['index.html#download', '내려받기']];
const common = { cssHref: 'assets/reader.css', scriptHref: 'assets/reader.js', bookTitle: book.title };

rmSync(OUT, { recursive: true, force: true });
mkdirSync(resolve(OUT, 'assets'), { recursive: true });
const files = new Map();
const put = (name, data) => { files.set(name, data); writeFileSync(join(OUT, name), data); };

put('assets/reader.css', readAsset('reader.css'));
put('assets/reader.js', readAsset('reader.js'));
put('.nojekyll', '');

// 첫 화면
put('index.html', shell({
  ...common, title: book.title, description, url: SITE,
  body: `${header(book, { home: 'index.html', nav })}
${homeMain(book, { chapterHref: ch => pageOf(ch), indexUrl: 'search-index.json' })}
${footer(book)}`,
}));

// 절 페이지
book.ready.forEach((ch, i) => {
  const prev = book.ready[i - 1], next = book.ready[i + 1];
  const pager = `<nav class="pager" aria-label="앞뒤 절">
${prev ? `<a href="${pageOf(prev)}" rel="prev">← 제${prev.num}절 ${esc(prev.title)}</a>` : '<span></span>'}
${next ? `<a href="${pageOf(next)}" rel="next">제${next.num}절 ${esc(next.title)} →</a>` : '<a href="index.html#contents">차례로 돌아가기</a>'}
</nav>`;
  const { html } = ch.rendered;
  // h1 바로 뒤에 원문 정보와 항목 목차를 넣는다.
  const at = html.indexOf('</h1>') + '</h1>'.length;
  const meta = `\n<p class="meta">항목 ${ch.entries.length}개 · <a href="${esc(ch.original)}">중국어 원문 보기(GitHub)</a></p>\n${entryToc(ch, id => '#' + id)}\n`;
  put(pageOf(ch), shell({
    ...common,
    title: `${ch.num}. ${ch.title} — ${book.title}`,
    description: `${book.title} 제${ch.num}절 「${ch.title}」. 항목 ${ch.entries.length}개.`,
    url: `${SITE}${pageOf(ch)}`, ogType: 'article',
    body: `${header(book, { home: 'index.html', nav })}
<main id="main" class="wrap" tabindex="-1">
<nav class="breadcrumb" aria-label="현재 위치"><ol><li><a href="index.html#contents">차례</a></li><li aria-current="page">제${ch.num}절</li></ol></nav>
<article>
${html.slice(0, at)}${meta}${html.slice(at)}</article>
${pager}
</main>
${footer(book)}`,
  }));
});

// 검색 색인
const idx = searchIndex(book, (ch, id) => `${pageOf(ch)}#${id}`);
put('search-index.json', JSON.stringify(idx));

// 404. 어느 경로에서 열려도 깨지지 않게 스타일·스크립트를 인라인으로 넣고 링크는 절대 주소로 쓴다.
put('404.html', shell({
  bookTitle: book.title, css: readAsset('reader.css'), script: readAsset('reader.js'), title: `찾는 페이지가 없습니다 — ${book.title}`, description,
  body: `${header(book, { home: SITE, nav: nav.map(([h, l]) => [h.replace(/^index\.html/, SITE), l]) })}
<main id="main" class="wrap" tabindex="-1">
<h1>찾는 페이지가 없습니다</h1>
<p>주소가 바뀌었거나 아직 공개하지 않은 절일 수 있습니다.</p>
<p><a href="${SITE}">첫 화면으로 가기</a> · <a href="${SITE}#contents">차례 보기</a> · <a href="${SITE}#search">항목 찾기</a></p>
</main>
${footer(book)}`,
}));

logSummary('site', book);
const total = [...files.keys()].reduce((n, f) => n + fileSize(join(OUT, f)), 0);
console.log(`[site] 생성: ${OUT} — 파일 ${files.size}개, ${kb(total)}, 검색 색인 ${idx.length}항목`);
