// 웹 리더(site.mjs)와 오프라인 단일 HTML(offline.mjs)이 같이 쓰는 HTML 조각.
import { esc, NOTICE, UPSTREAM, UPSTREAM_TITLE, REPO, SITE, DOWNLOADS, frontFacts } from './lib.mjs';

const FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#2f6f3e"/><text x="32" y="45" font-size="36" text-anchor="middle" fill="#ffffff" font-family="sans-serif">가</text></svg>`;
export const FAVICON = `data:image/svg+xml,${encodeURIComponent(FAVICON_SVG)}`;

// 글자 크기 단계는 첫 그림 전에 적용해야 깜박이지 않는다. 그래서 head 안에 짧게 넣는다.
const FS_BOOT = `<script>try{var v=Number(localStorage.getItem('kr-reader-fs'))||0;if(v>0&&v<4)document.documentElement.classList.add('fs-'+v)}catch(e){}</script>`;

export function shell({ title, description, url, css, cssHref, body, script, scriptHref, ogType = 'website', bookTitle }) {
  const og = url ? `
<link rel="canonical" href="${esc(url)}">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${esc(bookTitle)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(url)}">
<meta property="og:locale" content="ko_KR">
<meta name="twitter:card" content="summary">` : '';
  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">${og}
<meta name="color-scheme" content="light dark">
<link rel="icon" href="${FAVICON}" type="image/svg+xml">
${cssHref ? `<link rel="stylesheet" href="${cssHref}">` : `<style>\n${css}</style>`}
${FS_BOOT}
</head>
<body>
<a class="skip" href="#main">본문으로 건너뛰기</a>
${body}
${scriptHref ? `<script src="${scriptHref}" defer></script>` : script ? `<script>\n${script}</script>` : ''}
</body>
</html>
`;
}

// 머리 띠: 책 이름, 차례·검색·내려받기, 글자 크기.
export function header(book, { home, nav }) {
  return `<header class="site-header">
<div class="wrap">
<a class="brand" href="${home}">${esc(book.title)}</a>
<nav class="site-nav" aria-label="사이트">
<ul>
${nav.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join('\n')}
<li class="fs-tools" role="group" aria-label="글자 크기"><button type="button" data-fs="-1" aria-label="글자 작게">가−</button><button type="button" data-fs="1" aria-label="글자 크게">가+</button><span class="sr-only" id="fs-now" aria-live="polite"></span></li>
</ul>
</nav>
</div>
</header>`;
}

export function footer(book, { offline = false } = {}) {
  const f = frontFacts(book);
  return `<footer class="site-footer">
<div class="wrap">
<p>${esc(NOTICE)}</p>
<p>원본: <a href="${UPSTREAM}">《${UPSTREAM_TITLE}》 ${UPSTREAM}</a> · 한국어판 저장소: <a href="${REPO}">${REPO}</a></p>
<p>${offline ? `오프라인 사본입니다. 최신판은 <a href="${SITE}">${SITE}</a>에 있습니다. ` : ''}만든 시각: ${esc(f.stamp)}</p>
<p>${esc(f.license)}</p>
</div>
</footer>`;
}

// 진행 막대 두 줄: 공개 절 수/전체 절 수, 공개 항목 수/원문 항목 수.
export function progressBars(book) {
  const { chapters: pc, entries: pe } = book.progress;
  const row = (name, p, unit, aria) => `<div class="prog-row">
<p class="prog-label"><span class="prog-name">${name}</span> <strong>${p.now}/${p.total}${unit}</strong> <span class="prog-pct">${p.pct}%</span></p>
<div class="bar" role="img" aria-label="${esc(aria)}"><span style="width:${p.pct}%"></span></div>
</div>`;
  return `<section class="progress" aria-labelledby="progress-h">
<h2 id="progress-h" class="sr-only">진행 상황</h2>
${row('공개한 절', pc, '절', `전체 ${pc.total}절 중 ${pc.now}절 공개(${pc.pct}%)`)}
${row('공개한 항목', pe, '항목', `원문 ${pe.total}항목 중 ${pe.now}항목 공개(${pe.pct}%)`)}
</section>`;
}

// 차례: 공개 절을 절 번호 순으로 위에, 공개 예정 절은 접힌 묶음 하나로.
export function chapterList(book, chapterHref) {
  const ready = book.ready.map(c => `<li><span class="num">${c.num}.</span> <a class="title" href="${chapterHref(c)}">${esc(c.title)}</a> <span class="count">항목 ${c.entries.length}개</span></li>`);
  const pending = book.pending.map(c => `<li class="pending"><span class="num">${c.num}.</span> <span class="title">${esc(c.title)}</span></li>`);
  return `<ol class="chapters">
${ready.join('\n')}
</ol>${pending.length ? `
<details class="pending-group" id="pending">
<summary>공개 예정 ${pending.length}절</summary>
<p class="meta">현지화와 검증이 끝나는 대로 차례로 공개합니다. 본문에서 이 절들을 가리키는 곳에는 「공개 예정」이라고 표시해 두었습니다.</p>
<ol class="chapters">
${pending.join('\n')}
</ol>
</details>` : ''}`;
}

// 첫 화면 본문: 제목, 비공식판 안내, 진행 막대, 검색, 차례(공개 절 + 공개 예정 묶음), 내려받기.
export function homeMain(book, { chapterHref, indexUrl, downloads = true }) {
  const f = frontFacts(book);
  return `<main id="main" class="wrap" tabindex="-1">
<h1>${esc(book.title)}</h1>
<div class="notice" role="note">
<p><strong>비공식 현지화판입니다.</strong> ${esc(NOTICE)}</p>
<p>원본: <a href="${UPSTREAM}">《${UPSTREAM_TITLE}》 (${UPSTREAM})</a></p>
<p>${esc(f.localized)}</p>
</div>
${progressBars(book)}
<section class="search" id="search" aria-labelledby="search-h">
<h2 id="search-h">항목 찾기</h2>
<form role="search" action="" onsubmit="return false">
<label for="q">항목 제목에 들어 있는 낱말을 입력하세요</label>
<input id="q" name="q" type="search" autocomplete="off" placeholder="예: 금연, 술, 비밀번호"${indexUrl ? ` data-index="${indexUrl}"` : ''}>
</form>
<p class="search-status" id="search-status" role="status" aria-live="polite"></p>
<ul class="results" id="results"></ul>
</section>
<section id="contents" aria-labelledby="contents-h">
<h2 id="contents-h">차례</h2>
${chapterList(book, chapterHref)}
</section>
${downloads ? `<section id="download" aria-labelledby="download-h">
<h2 id="download-h">내려받기</h2>
<p>인터넷 없이 읽을 수 있는 파일입니다. 공개한 절만 들어 있습니다.</p>
<ul class="downloads">
<li><a href="${DOWNLOADS.epub}">EPUB(전자책)</a></li>
<li><a href="${DOWNLOADS.pdf}">PDF(인쇄용)</a></li>
<li><a href="${DOWNLOADS.html}">HTML(파일 하나)</a></li>
</ul>
<p>원본 저장소: <a href="${UPSTREAM}">${UPSTREAM}</a><br>한국어판 저장소: <a href="${REPO}">${REPO}</a></p>
</section>` : ''}
<p class="meta">만든 시각: ${esc(f.stamp)}</p>
</main>`;
}

// 절 안 항목 목차(접힘).
export function entryToc(ch, hrefOf) {
  const items = ch.rendered.headings.filter(h => h.depth === 3);
  const extra = ch.rendered.headings.filter(h => h.depth === 2);
  return `<details class="entry-toc">
<summary>이 절의 항목 ${ch.entries.length}개 보기</summary>
<nav aria-label="제${ch.num}절 항목 목차">
<ol>
${items.map(h => `<li${h.n ? ` value="${h.n}"` : ''}><a href="${hrefOf(h.id)}">${esc(h.n ? h.text.replace(/^\d+\.\s*/, '') : h.text)}</a></li>`).join('\n')}
</ol>
${extra.map(h => `<p><a href="${hrefOf(h.id)}">${esc(h.text)}</a></p>`).join('\n')}
</nav>
</details>`;
}
