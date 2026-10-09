// 공개(✅) 절을 PDF 한 권으로 짠다. pandoc이 Markdown을 typst로 바꾸고 typst가 조판한다.
// 용법: node kr-harness/ebook/pdf.mjs [출력 경로]   기본 dist-kr/HowToLiveBetter-KR.pdf
// pandoc(≥3.1)과 typst(≥0.13)가 PATH에 있거나 환경변수 PANDOC·TYPST로 지정돼 있을 때만 돈다.
// 둘 중 하나라도 없으면 로컬에서는 건너뛰고(종료코드 0), CI(환경변수 CI)에서는 실패한다.
// 글꼴은 Noto Serif/Sans CJK KR(CI는 fonts-noto-cjk). 판면은 template.typ에서만 고친다.
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import {
  DIST, ROOT, HERE, REPO, SITE, UPSTREAM, UPSTREAM_TITLE, DOWNLOADS, NOTICE, BASENAME,
  readKrBook, rewriteHref, logSummary, frontFacts, fileSize, kb,
} from './lib.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? resolve(DIST, `${BASENAME}.pdf`));
const WORK = resolve(DIST, 'pdf-build');
const PANDOC = process.env.PANDOC || 'pandoc';
const TYPST = process.env.TYPST || 'typst';

const has = cmd => {
  const r = spawnSync(cmd, ['--version'], { encoding: 'utf8' });
  return !r.error && r.status === 0;
};
const missing = [[PANDOC, 'PANDOC'], [TYPST, 'TYPST']].filter(([c]) => !has(c));
if (missing.length) {
  const msg = `[pdf] ${missing.map(([c, v]) => `${c}(환경변수 ${v})`).join(', ')}을 찾지 못했습니다.`;
  if (process.env.CI) { console.error(`${msg} CI에서는 PDF가 필수입니다.`); process.exit(1); }
  console.log(`${msg} 로컬이므로 PDF는 건너뜁니다. CI에서 만듭니다.`);
  process.exit(0);
}

const book = readKrBook();
const f = frontFacts(book);

// ---------- 링크: 공개 절은 책 안 앵커, 미공개 절은 글자만, 그 밖은 GitHub 주소 ----------
function rewriteLinks(md, src) {
  return md.replace(/(!?)\[([^\]]*)\]\(([^)\s]+)(\s+"[^"]*")?\)/g, (all, bang, text, href, title) => {
    if (bang) return text;
    const to = rewriteHref(href, src, book, { chapterHref: ch => `#${ch.id}`, contentsHref: '#contents' });
    return to == null ? text : `[${text}](${to}${title ?? ''})`;
  });
}

const front = `# 머리말 {#front}

**비공식 현지화판입니다.** ${NOTICE}

${f.localized}

- 진행 상황: ${f.progress}
- 웹에서 읽기: <${SITE}>
- 내려받기: EPUB <${DOWNLOADS.epub}>, PDF <${DOWNLOADS.pdf}>, HTML <${DOWNLOADS.html}>
- 원본 《${UPSTREAM_TITLE}》 저장소: <${UPSTREAM}>
- 한국어판 저장소: <${REPO}>
- 만든 시각: ${f.stamp}

${f.license}
`;

const contents = `# 공개 현황 {#contents}

전체 ${book.chapters.length}절 중 ${book.ready.length}절을 실었습니다. 「준비 중」인 절은 현지화와 검증이 끝나면 다음 판에 들어갑니다.

${book.chapters.map(c => c.ready ? `- ${c.num}. [${c.title}](#${c.id}) (항목 ${c.entries.length}개)` : `- ${c.num}. ${c.title} (준비 중)`).join('\n')}
`;

// pandoc의 맨 URL 자동 링크는 공백까지 삼킨다(「…1479607；보건복지상담센터」). 웹·EPUB과 같은 규칙으로 잘라 <…>로 감싼다.
const wrapBareUrls = md => md.replace(/(^|[^<(\[\w/])(https?:\/\/[\x21-\x3b\x3d\x3f-\x7eㄱ-ㆎ가-힣]+)/g, (all, pre, url) => {
  const m = url.match(url.includes('(') ? /^(.*?)([.,;:!?]*)$/ : /^(.*?)([.,;:!?)]*)$/);
  return `${pre}<${m[1]}>${m[2]}`;
});

const chapters = book.ready.map(ch => {
  const md = wrapBareUrls(rewriteLinks(ch.md, ch.src)).replace(/^(# .+?)\s*$/m, `$1 {#${ch.id}}`);
  if (!md.includes(`{#${ch.id}}`)) throw new Error(`${ch.src}에서 1단계 제목을 찾지 못해 앵커를 달지 못했습니다`);
  return `${md.trim()}\n\n중국어 원문: <${ch.original}>`;
});

const body = [front, contents, ...chapters].join('\n\n');
mkdirSync(WORK, { recursive: true });
mkdirSync(dirname(OUT), { recursive: true });
const mdFile = join(WORK, 'book.md');
const typFile = join(WORK, 'book.typ');
writeFileSync(mdFile, body);

const run = (cmd, args) => {
  try {
    return execFileSync(cmd, args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (err) {
    throw new Error(`${cmd} 실패:\n${err.stderr || err.stdout || err.message}`);
  }
};

run(PANDOC, [
  '--from=gfm+attributes', '--to=typst', '--wrap=none',
  `--template=${resolve(HERE, 'template.typ')}`,
  '-V', `booktitle=${book.title}`,
  '-V', `subtitle=${UPSTREAM_TITLE} 비공식 한국어 현지화판`,
  '-V', `progress=${f.progress}`,
  '-V', `builddate=${book.stamp}`,
  '-V', `commit=${book.commit.slice(0, 7) || '알 수 없음'}`,
  '-V', `site=${SITE}`, '-V', `repo=${REPO}`, '-V', `upstream=${UPSTREAM}`,
  '-o', typFile, mdFile,
]);
const log = run(TYPST, ['compile', typFile, OUT, '--root', ROOT]);
if (log.trim()) console.log(log.trim());

logSummary('pdf', book);
console.log(`[pdf] 생성: ${OUT} — ${kb(fileSize(OUT))}`);
