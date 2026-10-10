// book-kr/의 공개(✅) 절을 EPUB 3 한 권으로 묶는다.
// 용법: node kr-harness/ebook/epub.mjs [출력 경로]   기본 dist-kr/HowToLiveBetter-KR.epub
// marked만 쓴다. zip은 tools/epub/build.mjs처럼 직접 묶는다(EPUB은 mimetype이 첫 항목이고 무압축이어야 한다).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { deflateRawSync } from 'node:zlib';
import {
  DIST, ROOT, HERE, REPO, SITE, UPSTREAM, UPSTREAM_TITLE, DOWNLOADS, NOTICE, BASENAME,
  esc, readKrBook, renderChapter, toXhtml, logSummary, frontFacts, fileSize, kb,
} from './lib.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? resolve(DIST, `${BASENAME}.epub`));
const BOOK_ID = 'urn:uuid:3f6b2c1e-8d4a-4c7e-9a52-6e1b0d7c4f28'; // 한국어판 고정 식별자(원본 EPUB과 다름)
const NOW = new Date();
const book = readKrBook();
const f = frontFacts(book);

const fileOf = ch => `${ch.id}.xhtml`;
const chapterHref = (ch, hash) => `${fileOf(ch)}${hash ? '#' + hash : ''}`;
for (const ch of book.ready) ch.rendered = renderChapter(ch, book, { xhtml: true, chapterHref, contentsHref: 'contents.xhtml' });

function wrap(title, body, type = 'chapter') {
  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="ko" lang="ko">
<head>
<meta charset="utf-8"/>
<title>${esc(title)}</title>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
${type ? `<section epub:type="${type}">\n${body}</section>` : body}
</body>
</html>
`;
}

const a = (href, text = href) => `<a href="${esc(href)}">${esc(text)}</a>`;

// ---------- 쪽 ----------
const titlePage = wrap(book.title, `<div class="cover">
<h1>${esc(book.title)}</h1>
<p>《${esc(UPSTREAM_TITLE)}》 비공식 한국어 현지화판</p>
<p>${esc(f.progress)}</p>
<p>${esc(f.stamp)}</p>
</div>
`, 'titlepage');

const frontPage = wrap('머리말', toXhtml(`<h1 id="front">머리말</h1>
<p><strong>비공식 현지화판입니다.</strong> ${esc(NOTICE)}</p>
<p>${esc(f.localized)}</p>
<ul class="progress-lines">
<li>${esc(f.chapterLine)}</li>
<li>${esc(f.entryLine)}</li>
${f.pendingLine ? `<li>${esc(f.pendingLine)}. 본문에서 이 절들을 가리키는 곳에는 「공개 예정」이라고 표시해 두었습니다.</li>\n` : ''}</ul>
<ul>
<li>웹에서 읽기: ${a(SITE)}</li>
<li>내려받기: EPUB ${a(DOWNLOADS.epub)} · PDF ${a(DOWNLOADS.pdf)} · HTML ${a(DOWNLOADS.html)}</li>
<li>원본 저장소: ${a(UPSTREAM)}</li>
<li>한국어판 저장소: ${a(REPO)}</li>
<li>만든 시각: ${esc(f.stamp)}</li>
</ul>
<p>${esc(f.license)}</p>
`), 'preface');

// 차례 쪽: 공개 절을 절 번호 순으로 위에, 공개 예정 절은 맨 아래 한 덩어리로. EPUB 읽기 프로그램은 접기(details)를
// 제대로 못 그리는 경우가 많아 접지 않고 한 문단으로 줄인다.
const contentsPage = wrap('차례', `<h1 id="contents">차례</h1>
<p>${esc(f.progress)}.</p>
<ol class="contents">
${book.ready.map(c => `<li value="${c.num}">${a(fileOf(c), c.title)} <span class="count">(항목 ${c.entries.length}개)</span></li>`).join('\n')}
</ol>
${book.pending.length ? `<section class="pending" id="pending">
<h2>공개 예정 ${book.pending.length}절</h2>
<p>현지화와 검증이 끝나면 다음 판에 들어갑니다.</p>
<p class="pending-list">${book.pending.map(c => `${c.num}. ${esc(c.title)}`).join(' · ')}</p>
</section>
` : ''}`, 'toc');

const chapterPages = book.ready.map(ch => ({
  file: fileOf(ch), id: ch.id, title: `${ch.num}. ${ch.title}`,
  xhtml: wrap(`${ch.num}. ${ch.title}`, `${ch.rendered.html}<p class="orig">중국어 원문: ${a(ch.original)}</p>\n`),
  headings: ch.rendered.headings,
}));

// ---------- 목차(nav: 절 → 항목, NCX도 같은 구조) ----------
// 공개 예정 절은 하나씩 넣지 않는다. 차례 쪽의 「공개 예정」 덩어리로 가는 항목 하나를 「차례」 아래에 둔다.
// 맨 끝에 두면 차례 쪽(본문보다 앞)으로 되돌아가는 링크가 되어 epubcheck가 읽기 순서 경고(NAV-011)를 낸다.
const navTree = [
  { href: 'front.xhtml', text: '머리말', subs: [] },
  { href: 'contents.xhtml', text: '차례', subs: book.pending.length ? [{ href: 'contents.xhtml#pending', text: `공개 예정 ${book.pending.length}절` }] : [] },
  ...chapterPages.map(p => ({
    href: p.file, text: p.title,
    subs: p.headings.filter(h => h.depth >= 2).map(h => ({ href: `${p.file}#${h.id}`, text: h.text })),
  })),
];
const navXhtml = wrap('목차', `<nav epub:type="toc" id="toc">
<h1>목차</h1>
<ol>
${navTree.map(n => `<li><a href="${n.href}">${esc(n.text)}</a>${n.subs.length ? `\n<ol>\n${n.subs.map(s => `<li><a href="${s.href}">${esc(s.text)}</a></li>`).join('\n')}\n</ol>\n` : ''}</li>`).join('\n')}
</ol>
</nav>
<nav epub:type="landmarks" hidden="hidden">
<h2>길잡이</h2>
<ol>
<li><a epub:type="titlepage" href="title.xhtml">표제지</a></li>
<li><a epub:type="toc" href="contents.xhtml">차례</a></li>
<li><a epub:type="bodymatter" href="${chapterPages[0].file}">본문</a></li>
</ol>
</nav>
`, null);

let play = 0;
const navPoint = n => `<navPoint id="np${++play}" playOrder="${play}"><navLabel><text>${esc(n.text)}</text></navLabel><content src="${n.href}"/>${(n.subs ?? []).map(navPoint).join('')}</navPoint>`;
const ncx = `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1" xml:lang="ko">
<head>
<meta name="dtb:uid" content="${BOOK_ID}"/>
<meta name="dtb:depth" content="2"/>
<meta name="dtb:totalPageCount" content="0"/>
<meta name="dtb:maxPageNumber" content="0"/>
</head>
<docTitle><text>${esc(book.title)}</text></docTitle>
<navMap>
${navTree.map(navPoint).join('\n')}
</navMap>
</ncx>
`;

// ---------- OPF ----------
const pages = [
  { file: 'title.xhtml', id: 'titlepage', xhtml: titlePage },
  { file: 'front.xhtml', id: 'front', xhtml: frontPage },
  { file: 'contents.xhtml', id: 'contents', xhtml: contentsPage },
  ...chapterPages,
];
const modified = NOW.toISOString().replace(/\.\d{3}Z$/, 'Z');
const opf = `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="pub-id" xml:lang="ko">
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
<dc:identifier id="pub-id">${BOOK_ID}</dc:identifier>
<dc:title>${esc(book.title)}</dc:title>
<dc:language>ko</dc:language>
<dc:creator>eternity4719</dc:creator>
<dc:contributor>HowToLiveBetter-KR 기여자</dc:contributor>
<dc:description>${esc(`${NOTICE} ${f.progress}.`)}</dc:description>
<dc:source>${UPSTREAM}</dc:source>
<dc:publisher>${REPO}</dc:publisher>
<dc:rights>CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)</dc:rights>
<dc:date>${NOW.toISOString().slice(0, 10)}</dc:date>
<meta property="dcterms:modified">${modified}</meta>
</metadata>
<manifest>
<item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
<item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
<item id="css" href="style.css" media-type="text/css"/>
${pages.map(p => `<item id="${p.id}" href="${p.file}" media-type="application/xhtml+xml"/>`).join('\n')}
</manifest>
<spine toc="ncx">
${pages.map(p => `<itemref idref="${p.id}"/>`).join('\n')}
</spine>
</package>
`;
const container = `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
<rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles>
</container>
`;

// ---------- 묶기 ----------
const entries = [
  { name: 'mimetype', data: Buffer.from('application/epub+zip'), store: true },
  { name: 'META-INF/container.xml', data: Buffer.from(container) },
  { name: 'OEBPS/content.opf', data: Buffer.from(opf) },
  { name: 'OEBPS/nav.xhtml', data: Buffer.from(navXhtml) },
  { name: 'OEBPS/toc.ncx', data: Buffer.from(ncx) },
  { name: 'OEBPS/style.css', data: readFileSync(resolve(HERE, 'epub.css')) },
  ...pages.map(p => ({ name: `OEBPS/${p.file}`, data: Buffer.from(p.xhtml) })),
];
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, zip(entries));
logSummary('epub', book);
console.log(`[epub] 생성: ${OUT} — ${kb(fileSize(OUT))} (쪽 ${pages.length}개, 목차 항목 ${navTree.reduce((n, x) => n + 1 + x.subs.length, 0)}개)`);

function zip(files) {
  const crcTable = new Int32Array(256).map((_, n) => {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    return c;
  });
  const crc32 = buf => {
    let c = -1;
    for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
    return (c ^ -1) >>> 0;
  };
  const dosTime = (NOW.getHours() << 11) | (NOW.getMinutes() << 5) | (NOW.getSeconds() >> 1);
  const dosDate = ((NOW.getFullYear() - 1980) << 9) | ((NOW.getMonth() + 1) << 5) | NOW.getDate();
  const locals = [];
  const centrals = [];
  let offset = 0;
  for (const f of files) {
    const name = Buffer.from(f.name);
    const data = f.store ? f.data : deflateRawSync(f.data, { level: 9 });
    const method = f.store ? 0 : 8;
    const crc = crc32(f.data);
    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0x0800, 6);
    local.writeUInt16LE(method, 8);
    local.writeUInt16LE(dosTime, 10);
    local.writeUInt16LE(dosDate, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(data.length, 18);
    local.writeUInt32LE(f.data.length, 22);
    local.writeUInt16LE(name.length, 26);
    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(method, 10);
    central.writeUInt16LE(dosTime, 12);
    central.writeUInt16LE(dosDate, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(data.length, 20);
    central.writeUInt32LE(f.data.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt32LE(offset, 42);
    locals.push(local, name, data);
    centrals.push(central, name);
    offset += local.length + name.length + data.length;
  }
  const cd = Buffer.concat(centrals);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(files.length, 8);
  end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(cd.length, 12);
  end.writeUInt32LE(offset, 16);
  return Buffer.concat([...locals, cd, end]);
}
