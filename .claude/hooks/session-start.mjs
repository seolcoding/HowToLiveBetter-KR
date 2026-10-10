// .claude/hooks/session-start.mjs — SessionStart 훅. stdout은 세션 컨텍스트로 들어간다.
// 로컬과 클라우드(CLAUDE_CODE_REMOTE=true) 모두에서 돈다. 20초 안에 끝난다(settings.json 제한은 30초).
// 하는 일: ① 런타임 점검(Node 버전, git 브랜치) ② 파이프라인 다음 할 일 요약 ③ 클라우드면 조사용 도메인 접속 점검.
// ②와 ③은 동시에 돈다. 출력 순서는 ①②③ 그대로다.
import { spawn, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const REMOTE = process.env.CLAUDE_CODE_REMOTE === 'true';
const out = [];

const major = Number(process.versions.node.split('.')[0]);
const branch = spawnSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'], { cwd: ROOT, encoding: 'utf8' }).stdout?.trim();
out.push(`[kr-harness] 런타임: ${REMOTE ? '클라우드' : '로컬'} · Node ${process.versions.node}${major < 20 ? ' (20 이상 필요)' : ''} · 브랜치 ${branch || '?'}`);
if (REMOTE && process.env.CLAUDE_CODE_REMOTE_SESSION_ID) {
  out.push(`[kr-harness] 세션 링크: https://claude.ai/code/${process.env.CLAUDE_CODE_REMOTE_SESSION_ID.replace(/^cse_/, 'session_')}`);
}

// 이 하니스는 구독 로그인만 쓴다. API 키가 셸에 있으면 claude.ai 로그인보다 우선해서 API 과금으로 돈다(값은 출력하지 않는다).
const keys = ["ANTHROPIC_API_KEY", "ANTHROPIC_AUTH_TOKEN", "CLAUDE_CODE_OAUTH_TOKEN"].filter((k) => process.env[k]);
if (keys.length) out.push(`[kr-harness] 경고: ${keys.join(", ")} 환경변수가 설정돼 있음. 이 하니스는 API 키 없이 구독 로그인(/login)으로만 돈다. 해제하고 /status의 Login method를 확인하라.`);

// 클라우드: S1-S3 조사에 필요한 1차 출처 도메인이 열려 있는지 본다. curl은 세션 프록시 환경변수를 따른다.
// 판정(2026-10-10 고침): 5초 한 번 실패로 「접속 불가」라고 하지 않는다. 이날 이 VM에서 law.go.kr은 끊김이 잦았을 뿐
// curl 8번 중 5번 열렸고, nhis.or.kr·moel.go.kr은 curl이 실패해도 WebFetch로 열렸다.
//   - 도메인마다 최대 3번(시도당 5초, 사이 0.7초) 시도한다. 한 번이라도 서버가 답하면 정상이다.
//   - 프록시가 CONNECT를 403·407로 거절하면 조직 네트워크 정책 차단이다. 다시 시도하지 않는다(/root/.ccr/README.md).
//   - 실패는 둘로 나눈다. 시간 초과·연결 끊김이 섞여 있으면 「끊김」, 매번 프록시나 서버가 거절했으면(403 등) 「차단」.
//   - europepmc.org 화면은 curl에 403을 주지만 REST API는 200이다. 그래서 REST API 주소로 본다.
//   - 도메인 6개를 동시에 보고, 전체 점검은 시작부터 18초 안에 끝낸다.
const T0 = Date.now();
const PROBE_DEADLINE = T0 + 18000;
const PROBES = [
  ['www.law.go.kr', 'https://www.law.go.kr/'],
  ['kosis.kr', 'https://kosis.kr/'],
  ['doi.org', 'https://doi.org/'],
  ['europepmc(REST API)', 'https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=test&format=json'],
  ['pubmed.ncbi.nlm.nih.gov', 'https://pubmed.ncbi.nlm.nih.gov/'],
  ['web.archive.org', 'https://web.archive.org/'],
];
const CURL_ERR = { 6: 'DNS 실패', 7: '연결 실패', 28: '시간 초과', 35: 'TLS 실패', 52: '빈 응답', 56: '연결 끊김' };
const classify = (exit, code, connect) => {
  if (connect === 403 || connect === 407) return { kind: 'blocked', why: `프록시 정책 거절(CONNECT ${connect})`, final: true };
  if (code >= 200 && code < 400) return { kind: 'ok' };
  if (code >= 400 && code < 500 && ![403, 407, 429, 451].includes(code)) return { kind: 'ok' }; // 404·405도 서버가 답한 것이다
  if (code === 403 || code === 451) return { kind: 'blocked', why: `서버 거절(HTTP ${code})` };
  if (code) return { kind: 'flaky', why: `서버 응답 ${code}` };
  if (connect >= 500) return { kind: 'flaky', why: `프록시가 대상에 못 붙음(CONNECT ${connect})` };
  return { kind: 'flaky', why: CURL_ERR[exit] ?? `curl 오류 ${exit}` };
};
const curlOnce = (url, sec) =>
  new Promise((res) => {
    const p = spawn('curl', ['-sS', '-o', '/dev/null', '-m', sec.toFixed(1), '-w', '%{http_code} %{http_connect}', url], { stdio: ['ignore', 'pipe', 'ignore'] });
    let w = '';
    p.stdout.on('data', (d) => (w += d));
    p.on('error', () => res({ kind: 'nocurl', why: 'curl 없음', final: true }));
    p.on('close', (exit) => {
      const [code, connect] = w.trim().split(/\s+/).map((x) => Number(x) || 0);
      res(classify(exit ?? -1, code ?? 0, connect ?? 0));
    });
  });
const pause = (ms) => new Promise((r) => setTimeout(r, ms));
const probe = async ([label, url]) => {
  const tries = [];
  for (let i = 0; i < 3; i++) {
    const left = (PROBE_DEADLINE - Date.now()) / 1000;
    if (left < 1) break;
    const r = await curlOnce(url, Math.min(5, left));
    tries.push(r);
    if (r.kind === 'ok' || r.final) break;
    if (i < 2) await pause(700);
  }
  const okAt = tries.findIndex((t) => t.kind === 'ok') + 1; // 0이면 실패
  const fails = tries.filter((t) => t.kind !== 'ok');
  const state = okAt ? 'ok' : fails.length && fails.every((t) => t.kind === 'blocked' || t.kind === 'nocurl') ? 'blocked' : 'flaky';
  const count = {};
  for (const t of fails) count[t.why] = (count[t.why] ?? 0) + 1;
  const why = Object.entries(count).map(([w, k]) => (k > 1 ? `${w}×${k}` : w)).join(', ') || '점검 시간 부족';
  return { label, state, okAt, tries: tries.length, why };
};
const probing = REMOTE ? Promise.all(PROBES.map(probe)) : null;

const runNode = (args, ms) =>
  new Promise((res) => {
    const p = spawn(process.execPath, args, { cwd: ROOT, timeout: ms, stdio: ['ignore', 'pipe', 'ignore'] });
    let s = '';
    p.stdout.on('data', (d) => (s += d));
    p.on('error', () => res(''));
    p.on('close', () => res(s));
  });

const pipeline = join(ROOT, '.claude', 'skills', 'kr-pipeline', 'scripts', 'pipeline.mjs');
if (existsSync(pipeline)) {
  const stdout = await runNode([pipeline, 'status', '--json'], 10000);
  try {
    const st = JSON.parse(stdout);
    const done = st.filter((s) => s.readme === '✅').length;
    const active = st.filter((s) => s.next.stage !== '완료' && s.next.stage !== 'S1-S3');
    const gateBad = st.filter((s) => s.readme === '✅' && !s.gate?.ok).map((s) => s.n);
    out.push(`[kr-harness] 한국어판 ${done}/34절 완료. 진행 중인 절 ${active.length}개.`);
    if (gateBad.length) out.push(`[kr-harness] 경고: ✅인데 한국 적합성 게이트 미통과 ${gateBad.length}절(${gateBad.join(', ')}). CI가 실패한다. pipeline.mjs gate --all-done 참고.`);
    // 리뷰 마지막 줄의 sha256=이 지금 본문과 다르거나 없는 절: 본문이 리뷰 뒤에 바뀌었으니 kr-fit-reviewer로 다시 검토해야 한다.
    const stale = st.filter((s) => s.gate?.review === 'stale').map((s) => `${s.n}(${s.gate.stale})`);
    if (stale.length) out.push(`[kr-harness] 리뷰가 본문보다 오래됨 → 재검토 필요 ${stale.length}절: ${stale.join(', ')}. 마지막 줄 해시는 kr-fit.mjs <대상> --hash.`);
    for (const s of active.slice(0, 5)) out.push(`  - 제${s.n}절 → [${s.next.stage}] ${s.next.action}`);
    const fresh = st.filter((s) => s.next.stage === 'S1-S3').sort((a, b) => '🟢🟡🔴'.indexOf(a.grade) - '🟢🟡🔴'.indexOf(b.grade));
    if (fresh.length) out.push(`[kr-harness] 새로 시작할 후보(🟢·🟡 우선): ${fresh.slice(0, 6).map((s) => `${s.n}${s.grade}`).join(' ')}`);
    out.push('[kr-harness] 현지화 작업은 /kr-pipeline [절] 로 시작한다. 전체 표: node .claude/skills/kr-pipeline/scripts/pipeline.mjs status');
  } catch {
    out.push('[kr-harness] 상태 판정 실패: pipeline.mjs status를 직접 돌려 보세요.');
  }
}

if (probing) {
  const results = await probing;
  const flaky = results.filter((r) => r.state === 'flaky');
  const blocked = results.filter((r) => r.state === 'blocked');
  const retried = results.filter((r) => r.okAt > 1);
  const list = (rs) => rs.map((r) => `${r.label}: ${r.why}`).join('; ');
  if (!flaky.length && !blocked.length) {
    out.push('[kr-harness] 조사용 도메인 접속 정상(S1-S3 가능).');
    if (retried.length) out.push(`[kr-harness] 다만 ${retried.map((r) => `${r.label}(${r.okAt}번째 시도에 응답)`).join(', ')}는 끊김이 잦다. curl은 --retry 3 --retry-all-errors로 쓰거나 WebFetch로 연다.`);
  } else {
    out.push(`[kr-harness] 조사용 도메인 점검(도메인마다 최대 3번 시도): 정상 ${results.length - flaky.length - blocked.length}/${results.length}.`);
    if (flaky.length) out.push(`[kr-harness] 끊김 ${flaky.length}개(${list(flaky)}). 막힌 것이 아니라 응답이 들쭉날쭉한 것일 수 있다. curl은 --retry 3 --retry-all-errors로 다시 하고, 안 되면 WebFetch로 연다.`);
    if (blocked.length) out.push(`[kr-harness] 차단 ${blocked.length}개(${list(blocked)}). 프록시 정책 거절(CONNECT 403·407)은 다시 시도하지 말고 kr-research 환경의 허용 도메인을 고친다(kr-harness/CLOUD.md).`);
    out.push('[kr-harness] curl로 안 열린 곳도 WebFetch로는 열릴 수 있다(2026-10-10 nhis.or.kr·moel.go.kr 사례). 조사(S1-S3) 전에 WebFetch로 직접 열어 본다.');
    out.push(blocked.length
      ? '[kr-harness] WebFetch로도 안 열리는 1차 출처(law.go.kr 등)가 있으면 S1-S3를 하지 말고 S4 이후만 진행하라. 허용 도메인 설정은 kr-harness/CLOUD.md.'
      : '[kr-harness] 끊김뿐이면 S1-S3를 진행해도 된다. 끝내 못 연 원문은 지어내지 말고 TODO 확인 필요로 남긴다.');
  }
}

console.log(out.join('\n'));
