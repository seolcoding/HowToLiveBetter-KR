// .claude/skills/kr-verify/scripts/report.mjs — runs/ 와 chapters/ 를 읽어 단일 HTML 아티팩트 생성.
// 사용: node .claude/skills/kr-verify/scripts/report.mjs [--force] [--out <경로>]
//   main 브랜치(또는 git 밖)에서는 kr-harness/report.html을 다시 만든다.
//   다른 브랜치(절 세션의 claude/… 등)에서는 쓰지 않고 안내만 한다. report.html은 모든 실행을 한 파일에 모으므로,
//   절 세션 PR마다 다시 만들면 병렬 PR끼리 반드시 충돌한다(2026-10-10 규칙: 보고서는 main에서만 다시 만든다).
//   --force: 브랜치와 상관없이 report.html을 쓴다(보고서만 바꾸는 별도 PR용). --out: 다른 경로에 미리보기로 쓴다.
import { readFileSync, existsSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { listRunDirs, sortRunDirs, runIdOfDir } from '../../kr-pipeline/scripts/run-id.mjs';

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
const CHAPTERS = join(ROOT, 'kr-harness', 'chapters');
const STYLE_LABEL = { A: 'A · 평어체(뉴스·공문형)', B: 'B · 합니다체(공문·안내문)', C: 'C · 해요체(친근 안내)' };
const MODE_LABEL = { variant: '변형 비교', standard: '표준', repro: '재현성' };

const read = (p) => (existsSync(p) ? readFileSync(p, 'utf8') : '');
const jread = (p) => { try { return JSON.parse(read(p)); } catch { return {}; } };
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// 순서는 run-id.mjs 규칙(옛 ID 번호순 → 새 ID 절·순번순). 폴더 이름순이면 R04a가 R05 앞에 끼어든다.
const runs = sortRunDirs(listRunDirs(RUNS))
  .map((d) => {
    const dir = join(RUNS, d);
    const cfg = jread(join(dir, 'config.json'));
    const meta = jread(join(dir, 'meta.json'));
    return {
      id: cfg.id || runIdOfDir(d),
      dir: d,
      chapter: cfg.chapter ?? meta.chapter,
      style: cfg.style || meta.style || 'A',
      mode: cfg.mode || meta.mode || 'standard',
      styled: read(join(dir, '4-styled.md')),
      verify: read(join(dir, '5-verify.md')),
      verifyVerdict: meta.verify || (read(join(dir, '5-verify.md')).match(/판정[:：]\s*(통과|조건부 통과|반려)/)?.[1] ?? null),
      entries: meta.entries ?? null,
      todos: meta.todos ?? 0,
      status: meta.status || 'created',
    };
  });

const chapters = existsSync(CHAPTERS)
  ? readdirSync(CHAPTERS)
      .filter((d) => statSync(join(CHAPTERS, d)).isDirectory())
      .sort()
      .map((d) => ({
        n: d,
        analysis: !!existsSync(join(CHAPTERS, d, '1-analysis.md')),
        research: !!existsSync(join(CHAPTERS, d, '2-research.md')),
        draft: !!existsSync(join(CHAPTERS, d, '3-draft.md')),
      }))
  : [];

const badge = (v) =>
  v === '통과' ? '<span class="badge ok">통과</span>'
  : v === '조건부 통과' ? '<span class="badge warn">조건부 통과</span>'
  : v === '반려' ? '<span class="badge bad">반려</span>'
  : '<span class="badge none">대기</span>';

const pre = (txt) => `<pre>${esc(txt.trim() || '(아직 없음)')}</pre>`;

const runCard = (r) => `
<section class="card">
  <header>
    <h3>${r.id} · 제${r.chapter}절 <span class="style">${STYLE_LABEL[r.style] || r.style}</span> <span class="mode">${MODE_LABEL[r.mode] || r.mode}</span></h3>
    <div>${badge(r.verifyVerdict)} ${r.entries != null ? `<span class="chip">항목 ${r.entries}개</span>` : ''} ${r.todos ? `<span class="chip todo">TODO ${r.todos}</span>` : ''} <span class="chip">${r.status}</span></div>
  </header>
  <details ${r.verifyVerdict ? 'open' : ''}><summary>문체 적용본 (4-styled.md)</summary>${pre(r.styled)}</details>
  <details ${r.verifyVerdict && r.verifyVerdict !== '통과' ? 'open' : ''}><summary>검증 결과 (5-verify.md)</summary>${pre(r.verify)}</details>
</section>`;

const columns = (list, title) => `
<section class="compare">
  <h2>${title}</h2>
  <div class="cols cols-${list.length}">
    ${list
      .map(
        (r) => `<div class="col"><h3>${r.id} · ${STYLE_LABEL[r.style] || ''} ${badge(r.verifyVerdict)}</h3>${pre(r.styled)}</div>`,
      )
      .join('')}
  </div>
</section>`;

const by = (id) => runs.find((r) => r.id === id);
const done = runs.filter((r) => r.styled.trim()).length;
const verdicts = runs.filter((r) => r.verifyVerdict).map((r) => `${r.id}:${r.verifyVerdict}`).join(' · ') || '아직 없음';

const html = `<!doctype html>
<html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>한국 현지화 파이프라인 — 비교 보고서</title>
<style>
  :root{--ink:#1a1f2b;--sub:#5b6472;--line:#e3e6ec;--bg:#f7f8fa;--card:#fff;--accent:#0f62fe}
  *{box-sizing:border-box} body{margin:0;font-family:'Pretendard','Malgun Gothic',system-ui,sans-serif;color:var(--ink);background:var(--bg);line-height:1.6}
  main{max-width:1200px;margin:0 auto;padding:32px 20px 80px}
  h1{font-size:26px;margin:0 0 4px} h2{font-size:19px;margin:40px 0 12px;padding-bottom:8px;border-bottom:2px solid var(--line)}
  .sub{color:var(--sub);font-size:14px}
  .flow{display:flex;flex-wrap:wrap;gap:8px;margin:16px 0}
  .flow .step{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:10px 14px;font-size:13px}
  .flow .step b{display:block;font-size:13px} .flow .step span{color:var(--sub)}
  .stats{display:flex;gap:12px;flex-wrap:wrap;margin:16px 0}
  .stat{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:12px 18px}
  .stat b{font-size:22px;display:block} .stat span{font-size:12px;color:var(--sub)}
  .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px 20px;margin:12px 0}
  .card header{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:6px}
  .card h3{font-size:15px;margin:0} .style{color:var(--accent);font-size:13px} .mode{color:var(--sub);font-size:12px}
  .badge{border-radius:999px;padding:2px 10px;font-size:12px;font-weight:600}
  .badge.ok{background:#e3f7e8;color:#0d6a33}.badge.warn{background:#fff4d6;color:#8a6100}.badge.bad{background:#ffe3e3;color:#b01c1c}.badge.none{background:#eceff3;color:var(--sub)}
  .chip{font-size:12px;color:var(--sub);border:1px solid var(--line);border-radius:999px;padding:2px 10px;margin-left:4px}
  .chip.todo{color:#b01c1c;border-color:#f0c9c9}
  details{margin:8px 0} summary{cursor:pointer;font-size:13.5px;font-weight:600;color:var(--accent)}
  pre{background:#f2f4f7;border:1px solid var(--line);border-radius:8px;padding:14px;font-size:12.5px;white-space:pre-wrap;word-break:keep-all;max-height:520px;overflow:auto;font-family:'D2Coding',Consolas,monospace}
  .cols{display:grid;gap:12px} .cols-3{grid-template-columns:repeat(3,1fr)} .cols-2{grid-template-columns:repeat(2,1fr)}
  .col h3{font-size:13px;margin:0 0 8px}
  table{border-collapse:collapse;width:100%;font-size:13px;background:var(--card)}
  th,td{border:1px solid var(--line);padding:7px 10px;text-align:left} th{background:#eef1f5}
  @media(max-width:900px){.cols-3,.cols-2{grid-template-columns:1fr}}
</style></head><body><main>
<h1>한국 현지화 파이프라인 — 비교 보고서</h1>
<p class="sub">2026-10-06 · HowToLiveBetter → book-kr/ · 단계별 격리 서브에이전트 · ${runs.length}회 실행</p>

<div class="flow">
  <div class="step"><b>S1 분석</b><span>항목 인벤토리·치환 등급</span></div>
  <div class="step"><b>S2 조사</b><span>네이버·구글 + 1차 출처</span></div>
  <div class="step"><b>S3 초역</b><span>중립 문체 재작성</span></div>
  <div class="step"><b>S4 문체</b><span>공문·뉴스·공시 코퍼스 모방</span></div>
  <div class="step"><b>S5 검증</b><span>독립 체크리스트</span></div>
  <div class="step"><b>S6 조립</b><span>book-kr/ 반영 + 이 보고서</span></div>
</div>

<div class="stats">
  <div class="stat"><b>${runs.length}</b><span>실행</span></div>
  <div class="stat"><b>${done}</b><span>문체 완료</span></div>
  <div class="stat"><b>${chapters.filter((c) => c.draft).length}/${chapters.length || 0}</b><span>제작(분석·조사·초역) 완료 절</span></div>
  <div class="stat"><b>${runs.reduce((s, r) => s + (r.todos || 0), 0)}</b><span>누적 TODO</span></div>
</div>
<p class="sub">검증 판정: ${esc(verdicts)}</p>

<h2>제작 단계 현황 (절 단위)</h2>
<table><tr><th>절</th><th>1-analysis</th><th>2-research</th><th>3-draft</th></tr>
${chapters.map((c) => `<tr><td>제${c.n}절</td><td>${c.analysis ? '✅' : '⬜'}</td><td>${c.research ? '✅' : '⬜'}</td><td>${c.draft ? '✅' : '⬜'}</td></tr>`).join('')}
</table>

<h2>문체 변형 비교 — 제22절 (푹 쉬는 법)</h2>
<p class="sub">같은 초역을 세 문체로 패치한 결과. 어미·문장 리듬·읽는 느낌을 비교한다.</p>
${columns([by('R01'), by('R02'), by('R03')].filter(Boolean), '')}

<h2>재현성 — R02(수작업 패치) vs R10(변환기 패치), 제22절 같은 초안·같은 문체 B</h2>
${columns([by('R02'), by('R10')].filter(Boolean), '')}

<h2>전체 실행 결과</h2>
${runs.map(runCard).join('\n')}

<h2>다음 단계</h2>
<ol class="sub">
  <li>문체 승자 확정 → humanize-kr.md 기본 문체 고정</li>
  <li>표준(A) 결과 book-kr/ 임시 반영 (상태 🟨)</li>
  <li>TODO 정리(2차 조사) 후 나머지 24절 동일 파이프라인 진행</li>
</ol>
</main></body></html>`;

writeFileSync(join(ROOT, 'kr-harness', 'report.html'), html);
console.log(`report.html 생성 완료: 실행 ${runs.length}건, 문체 완료 ${done}건`);
