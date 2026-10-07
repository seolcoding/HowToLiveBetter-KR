// .claude/hooks/session-start.mjs — SessionStart 훅. stdout은 세션 컨텍스트로 들어간다.
// 로컬과 클라우드(CLAUDE_CODE_REMOTE=true) 모두에서 돈다. 몇 초 안에 끝나야 한다.
// 하는 일: ① 런타임 점검(Node 버전, git 브랜치) ② 파이프라인 다음 할 일 요약 ③ 클라우드면 조사용 도메인 접속 점검.
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

const pipeline = join(ROOT, '.claude', 'skills', 'kr-pipeline', 'scripts', 'pipeline.mjs');
if (existsSync(pipeline)) {
  const r = spawnSync(process.execPath, [pipeline, 'status', '--json'], { cwd: ROOT, encoding: 'utf8', timeout: 10000 });
  try {
    const st = JSON.parse(r.stdout);
    const done = st.filter((s) => s.readme === '✅').length;
    const active = st.filter((s) => s.next.stage !== '완료' && s.next.stage !== 'S1-S3');
    out.push(`[kr-harness] 한국어판 ${done}/34절 완료. 진행 중인 절 ${active.length}개.`);
    for (const s of active.slice(0, 5)) out.push(`  - 제${s.n}절 → [${s.next.stage}] ${s.next.action}`);
    const fresh = st.filter((s) => s.next.stage === 'S1-S3').sort((a, b) => '🟢🟡🔴'.indexOf(a.grade) - '🟢🟡🔴'.indexOf(b.grade));
    if (fresh.length) out.push(`[kr-harness] 새로 시작할 후보(🟢·🟡 우선): ${fresh.slice(0, 6).map((s) => `${s.n}${s.grade}`).join(' ')}`);
    out.push('[kr-harness] 현지화 작업은 /kr-pipeline [절] 로 시작한다. 전체 표: node .claude/skills/kr-pipeline/scripts/pipeline.mjs status');
  } catch {
    out.push('[kr-harness] 상태 판정 실패: pipeline.mjs status를 직접 돌려 보세요.');
  }
}

// 클라우드: S1-S3 조사에 필요한 1차 출처 도메인이 열려 있는지 본다. curl은 세션 프록시 환경변수를 따른다.
const PROBES = ['https://www.law.go.kr/', 'https://kosis.kr/', 'https://doi.org/', 'https://europepmc.org/', 'https://pubmed.ncbi.nlm.nih.gov/', 'https://web.archive.org/'];
const probe = (url) =>
  new Promise((res) => {
    const p = spawn('curl', ['-sS', '-o', '/dev/null', '-m', '5', '-w', '%{http_code}', '-I', url]);
    let code = '';
    p.stdout.on('data', (d) => (code += d));
    p.on('error', () => res([url, 'curl 없음']));
    p.on('close', () => res([url, code.trim() || '000']));
  });

if (REMOTE) {
  const results = await Promise.all(PROBES.map(probe));
  const blocked = results.filter(([, c]) => c === '000' || c === '403' || c === 'curl 없음');
  if (blocked.length) {
    out.push(`[kr-harness] 경고: 조사용 도메인 ${blocked.length}/${PROBES.length}개 접속 불가(${blocked.map(([u]) => new URL(u).host).join(', ')}).`);
    out.push('[kr-harness] 이 환경에서는 S1-S3(조사)을 하지 말고 S4 이후만 진행하라. 허용 도메인 설정은 kr-harness/CLOUD.md.');
  } else out.push('[kr-harness] 조사용 도메인 접속 정상(S1-S3 가능).');
}

console.log(out.join('\n'));
