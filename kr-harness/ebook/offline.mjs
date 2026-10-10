// 공개(✅) 절 전부를 파일 하나짜리 HTML로 묶는다. 두 번 눌러 열면 인터넷 없이 읽히고, 외부 요청을 하나도 하지 않는다.
// 용법: node kr-harness/ebook/offline.mjs [출력 경로]   기본 dist-kr/HowToLiveBetter-KR.html
// 스타일·스크립트·검색 색인을 모두 인라인으로 넣는다. 웹 리더와 같은 reader.css·reader.js를 쓴다.
// 다른 절 참조는 같은 문서 안 앵커(#chNN-eM, 항목이 없으면 #chNN-top)로 바뀐다.
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { DIST, ROOT, SITE, BASENAME, esc, readKrBook, renderChapter, searchIndex, logSummary, readAsset, fileSize, kb } from './lib.mjs';
import { shell, header, footer, homeMain, entryToc } from './html.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? resolve(DIST, `${BASENAME}.html`));
const book = readKrBook();

const chapterHref = (ch, hash) => `#${ch.id}-${hash || 'top'}`;
for (const ch of book.ready) ch.rendered = renderChapter(ch, book, { prefix: `${ch.id}-`, chapterHref, contentsHref: '#contents' });

const nav = [['#contents', '차례'], ['#search', '검색'], ['#download', '내려받기']];
const idx = searchIndex(book, (ch, id) => `#${id}`);

// 첫 화면(main) 뒤에 절들을 이어 붙인다. main 랜드마크는 하나만 둔다.
const home = homeMain(book, { chapterHref: ch => chapterHref(ch) });
const chapters = book.ready.map(ch => {
  const { html } = ch.rendered;
  const at = html.indexOf('</h1>') + '</h1>'.length;
  const meta = `\n<p class="meta">항목 ${ch.entries.length}개 · <a href="${esc(ch.original)}">중국어 원문 보기(GitHub)</a></p>\n${entryToc(ch, id => '#' + id)}\n`;
  return `<article class="chapter" id="${ch.id}">
${html.slice(0, at)}${meta}${html.slice(at)}<p class="to-top"><a href="#contents">차례로 돌아가기</a></p>
</article>`;
}).join('\n');
const main = home.replace(/<\/main>$/, `${chapters}\n</main>`);
if (main === home) throw new Error('첫 화면 main 끝을 찾지 못했습니다');

// </script 가 본문 색인에 섞이면 스크립트가 일찍 끝난다. \/ 는 JS 문자열에서 / 와 같다.
const indexJs = `window.__KR_INDEX__=${JSON.stringify(idx).replace(/<\/script/gi, '<\\/script')};\n`;
const html = shell({
  title: book.title,
  description: `${book.title} 오프라인 단일 파일. 공개 ${book.ready.length}/${book.chapters.length}절, 항목 ${book.entryCount}개.`,
  bookTitle: book.title,
  css: readAsset('reader.css'),
  script: indexJs + readAsset('reader.js'),
  body: `${header(book, { home: '#main', nav })}
${main}
${footer(book, { offline: true })}`,
});
if (/<(script|link|img)[^>]+(src|href)="https?:/i.test(html.replace(/<a [^>]*>/g, ''))) throw new Error('외부 자원(script/link/img)을 부르는 태그가 있습니다');

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, html);
logSummary('offline', book);
console.log(`[offline] 생성: ${OUT} — ${kb(fileSize(OUT))} (최신판: ${SITE})`);
