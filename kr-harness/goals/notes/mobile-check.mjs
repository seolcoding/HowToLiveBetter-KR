// 390×844에서 가로 넘침 측정 + 스크린숏. 인자: dist-kr 경로, 스크린숏 폴더
import { createRequire } from 'node:module';
const require = createRequire('/opt/node22/lib/node_modules/');
const { chromium } = require('playwright');
const [dist, out] = process.argv.slice(2);

const pages = [
  ['site-index', `file://${dist}/site/index.html`, { openPending: true }],
  ['site-ch06', `file://${dist}/site/ch06.html`, { scrollTo: '.ref-pending' }],
  ['site-ch03', `file://${dist}/site/ch03.html`, { scrollTo: 'a.ref' }],
  ['offline', `file://${dist}/HowToLiveBetter-KR.html`, { openPending: true }],
];
const browser = await chromium.launch();
for (const fs of [0, 3]) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  for (const [name, url, opt] of pages) {
    const page = await ctx.newPage();
    await page.addInitScript(v => { try { localStorage.setItem('kr-reader-fs', String(v)); } catch (e) {} }, fs);
    await page.goto(url);
    if (opt.openPending) await page.evaluate(() => { const d = document.querySelector('details.pending-group'); if (d) d.open = true; });
    const m = await page.evaluate(() => {
      const de = document.documentElement;
      // 넘치는 요소 찾기
      const wide = [...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > 390.5).slice(0, 5).map(e => `${e.tagName.toLowerCase()}.${e.className}`);
      return { scrollWidth: de.scrollWidth, clientWidth: de.clientWidth, wide,
        bars: document.querySelectorAll('.progress .bar').length,
        pendingSummary: document.querySelector('details.pending-group summary')?.textContent ?? null,
        refLinks: document.querySelectorAll('a.ref').length, refPending: document.querySelectorAll('.ref-pending').length };
    });
    console.log(`fs-${fs} ${name}: scrollWidth=${m.scrollWidth} clientWidth=${m.clientWidth} ${m.scrollWidth <= 390 ? 'OK' : 'OVERFLOW'} bars=${m.bars} summary=${JSON.stringify(m.pendingSummary)} a.ref=${m.refLinks} .ref-pending=${m.refPending}${m.wide.length ? ' wide=' + m.wide.join(',') : ''}`);
    if (opt.scrollTo) await page.evaluate(sel => document.querySelector(sel)?.scrollIntoView({ block: 'center' }), opt.scrollTo);
    if (fs === 0 || name === 'site-index') {
      await page.screenshot({ path: `${out}/${name}-fs${fs}.png` });
      if (opt.openPending) {
        await page.evaluate(() => document.querySelector('#contents')?.scrollIntoView());
        await page.screenshot({ path: `${out}/${name}-contents-fs${fs}.png` });
      }
    }
    await page.close();
  }
  await ctx.close();
}
await browser.close();
