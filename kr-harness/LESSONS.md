# 레슨런 (2026-10-06, 1-2차 라운드)

한국 현지화 하네스를 돌리면서 배운 것. 다음 라운드와 나머지 28절 작업 전에 읽는다.

## 파이프라인 최종 형태

```
S1 분석 → S2 조사 → S3 초역 → S4 문체(convert-b.mjs) → S5 검증(verify.mjs) → S6 윤문(astra·orca+codex) → S7 항목별 개선(entry-pass.mjs) → S8 조립+보고

2026-10-07부터 S6·S7은 Claude Code 에이전트(kr-polisher, kr-entry-refiner)가 맡는다. 아래 L10–L12의 codex·orca 경로는 기록으로만 남긴다(L15).
```

- **L13 — 개별 항목 = 개별 서브에이전트** (2026-10-06 사용자 규칙). 절 단위 일괄 가공 금지. `entry-pass.mjs`가 항목마다 codex exec를 따로 띄운다(워커 터미널 K개가 stride로 분담, 항목당 격리 컨텍스트 보장).
- **L14 — 항목 에이전트 실패 유형**: ① 블록을 두 번 쓰고 필드 중복 ② 필드 누락(근거등급) ③ TODO 섹션 유실(마지막 항목 청크에 포함돼 사라짐). 대응: 프롬프트에 "정확히 한 번, 필드 6종 한 번씩, 순서 유지" 명시 + 워커 구조 검증(재시도 1회 후 원문 유지) + 재조립 시 tail(## TODO) 별도 부착. verify.mjs가 최종 방어선.
- S1-S3: 격리 서브에이전트(절당 1개 컨텍스트). 병렬 7개까지 확인 안전.
- S4: 결정론적 변환기가 1차. S6에서 astra(codex)가 2차 윤문, S7에서 항목별 개별 에이전트가 3차.
- S5: 스크립트 검증. S7 뒤에 재실행(7-refined.md 우선 읽음).
- S8: book-kr/ 조립은 **7-refined.md > 6-polished.md > 4-styled.md** 순.

## 문체

- **L1 — B(합니다체) 승리**. R01(A 평어체)/R02(B)/R03(C 해요체) 3변형 비교에서 사용자가 B 확정. 공문·안내문 앵커(정책브리핑 보도자료)와 가장 잘 맞음. C는 폐기, A는 비교 변형 유지.
- **L2 — 앵커는 실제 샘플로**. 문체 규칙은 추상 명세가 아니라 수집 코퍼스(`skills/kr-localizer/references/style-corpus/`)의 실측(문장 길이, 어미 분포)에서 뽑아야 유효. KBS·삼성·LG 뉴스룸은 수집 실패 — 연합뉴스·정책브리핑·포스코 뉴스룸으로 대체 성공.

## 장애와 폴백

- **L10 — astra(codex) 실행은 orca CLI 경유로 확정** (2026-10-06, 사용자 지시 "오픈코드말고 orca cli로 코덱스"). 래퍼: `kr-harness/polish-codex.mjs`. 첫 실전에서 6실행 전량 윤문 성공(총 ~1,270문장, 긴 문장 ~557개 분할), 반려 0. codex는 AGENTS.md를 자동 로드해 규칙 파일을 잘 찾는다.
- **L11 — orca CLI 삼각지대**:
  1. `terminal create --command`·`--title`이 이 버전에선 무시된다 → **create(기본 셸) → `terminal send --text ... --enter` → 파일 폴링** 패턴으로 실행할 것.
  2. 영구 pwsh 터미널은 `terminal wait --for exit`로 기다릴 수 없다(셸이 안 끝남) → `polish-exit.txt` 마커 폴링(10초 간격)으로 완료 판정.
  3. Windows spawnSync `shell:true`에서 공백 인자는 직접 `"..."` 인용해야 CLI가 쪼개지 않는다.
- **L12 — codex-cli 0.160 exec 플래그**: `--full-auto` 없음. `-s workspace-write -C <root> --output-last-message <file> -`(프롬프트는 stdin)이 정답.
- **L3 — 세션 DB 동시성**: 태스크 7개 동시 실행까지 성공, 이후 `insert into session` 실패 지속(재시작 전 불가). 폴백 순서: ① 오케스트레이터가 직접 수행(소량) ② 결정론적 변환기(대량). opencode 재시작 후에는 태스크 재시도할 것.
- **L4 — 결정론적 변환기 오류 3유형**(`convert-b.mjs` 후처리 FIXES로 교정):
  1. 명사+이다 축약: `두 가지다`→`두 가집니다` ❌ → `두 가지입니다`
  2. 숫자·기호+다: `1%다`, `0.85다`, `114다` → `입니다` 처리 필요
  3. 명령형 평어: `보라`, `두자`, `지켜라` → `보세요` 등으로
  새 유형 발견 시 FIXES 배열에 추가하고 재생성할 것. `집니다`(책임이 집니다=동사)처럼 정상형도 있으니 전역 치환 전에 문맥 확인.
- **L5 — 검증기 오탐 2종**(verify.mjs에서 제외 처리됨):
  1. `10000` = 걸음수 vs 중국통신사 번호 → 중국 전용 번호 목록에서 10000 제거
  2. `.md` 링크 경로의 한자(`docs/生物钟和夜班.md`) → 링크·괄호 경로 스트립 후 검사

## 클라우드 전환 (2026-10-07)

- **L15 — codex·orca·opencode 의존 제거, 하니스를 `.claude/`로**. 사용자 지시 「코덱스 의존성 제거하고, 대부분 스킬 형식으로 변환」. 이유는 클라우드 세션과 routines에서는 로컬 CLI가 없기 때문이다. 단계는 스킬(kr-pipeline·kr-localize·kr-style·kr-verify·kr-polish·kr-refine)로, 격리 작업은 에이전트(kr-localizer·kr-polisher·kr-entry-refiner)로 바꿨다. 결정론 부분은 Node 스크립트로 남겼다. 스크립트는 `KR-GUIDE.md`를 찾아 저장소 루트를 정하므로 어디서 실행해도 된다.
- **L16 — 팬아웃은 Agent 도구로**. `entry-pass.mjs`의 워커 분산은 오케스트레이터가 kr-entry-refiner를 한 번에 최대 8개씩 병렬로 띄우는 방식으로 바뀌었다. 분할·구조검사·조립은 LLM 없이 `entries.mjs`가 한다. 그래서 「항목 하나 = 서브에이전트 하나」(L13)가 로컬과 클라우드에서 똑같이 지켜진다.
- **L17 — 구조검사에 숫자·URL 다중집합 비교를 넣자 사실 추가가 잡혔다**. R11-02의 e-41에서 codex가 「식물성 오메가-3는 아마씨유·들깨유의 주성분입니다」를 덧붙였다. 입력에 없던 숫자 「3」이 늘어서 걸렸다. 지금 book-kr 02절에는 이 문장이 그대로 있다. CI(kr-check)는 이것을 경고로만 띄운다. 다음 02절 S7 재실행 때 고친다.
- **L18 — VM은 회수될 수 있다**. 클라우드 VM은 쉬다가 회수되고, 커밋하지 않은 파일은 사라진다. 그래서 단계마다 커밋하고, S7은 묶음마다 `entries/`를 커밋한다. `entries.mjs split`은 통과한 출력을 지우지 않아서 중간부터 다시 시작할 수 있다.
- **L19 — 클라우드 기본 네트워크(Trusted)에서는 조사가 막힌다**. law.go.kr, KOSIS, doi.org는 기본 허용 목록에 없다. 세션 시작 훅이 접속 여부를 점검해서 S1-S3를 할지 말지 알려 준다. 조사용 환경 `kr-research`(Full 또는 Custom)는 CLOUD.md에 있다.
- **L20 — 절 병렬은 세션 병렬로**. `pipeline.mjs launch`가 절마다 claude.ai/code 미리 채우기 링크를 만든다. 세션 하나가 절 하나, 브랜치 하나다. 그래서 워크트리를 손으로 관리할 필요가 없다.

- **L21 — API 키 의존 제거**. 사용자 지시 「API KEY에 의존하는 의존성은 좀 없애고 싶은데」. 그래서 claude-code-action 워크플로 두 개(@claude, 수동 파이프라인)를 지웠다. 둘 다 장기 토큰(`CLAUDE_CODE_OAUTH_TOKEN`)을 저장소 비밀값으로 넣어야 했다. 그 기능은 이렇게 대신한다. 수동 실행은 `pipeline.mjs launch` 링크와 routine의 Run now로, 예약은 routine 일정으로, PR 점검은 routine의 GitHub 트리거(GitHub App만 필요)로 한다. Actions에는 LLM 없는 kr-check만 남았다. routine 프롬프트 본문은 `kr-harness/routines/`에 커밋해서 저장소가 단일 원천이 되게 했다. 세션 시작 훅은 `ANTHROPIC_API_KEY` 같은 키가 셸에 있으면 경고한다(구독 로그인보다 우선하기 때문).

## 품질과 경제성

- **L6 — S3 에이전트가 이미 문체 뼈대를 갖춘다**. 제작 프롬프트에 평어체 지시를 넣어두니 S4 변환 델타가 작다. 그래서 변환기 1차 → astra 윤문 2차가 비용 대비 최적.
- **L7 — 수작업 vs 변환기(R02 vs R10)**: 같은 초안, 같은 B 문체로 두 방식 비교. 내용·어미 분포 거의 동일. 수작업은 리듬이 약간 자연스럽지만 시간이 10배 — 변환기가 디폴트.
- **L8 — TODO 레지스트리**: 절 끝 `## TODO 확인 필요` + verify.mjs 자동 집계. 조사 누락이 조용히 사라지지 않는 구조. 현재 누적 36건.
- **L9 — 보고서가 컨펌 루프의 중심**: 매 라운드 `node kr-harness/report/build.mjs`로 재생성, 사용자는 report.html에서 비교·확정. 대화로만 컨펌받지 말 것.

## 남은 일

- 28절 제작(S1-S3) — 🟡 작은 절부터(18·17·16·28·32·34·20·29·27·21), 🔴 법제도 절(7·8·9·11·12·15·19·24·25·26·31·33)은 조사 시간 감안
- 다음 절 실행: `node .claude/skills/kr-pipeline/scripts/pipeline.mjs launch`로 링크를 받거나, `/kr-pipeline N`을 실행한다
- 02절 e-41 사실 추가 되돌리기(L17)
- TODO 36건 2차 조사(law.go.kr JS 렌더링 이슈는 브라우저 확인 필요)
