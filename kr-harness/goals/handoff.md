# 인계 문서: 2026-10-next-publish

## 2026-10-18 출판 품질 개선 — 진행 중

**현재 목표는 아래 2026-10-10 제작 완료 이후의 후속 작업이다.** 사용자 지시: 대한민국의 출판물 수준으로 34절 전체의 문체·실정·근거를 다시 검토하고 간결하게 개선한다. 먼저 [출판 품질 진행 기록](2026-10-publication-quality.progress.md)을 읽는다.

- 사용자 제공 [im-not-ai](https://github.com/epoko77-ai/im-not-ai) 스킬 부재는 해결했다. 고정 커밋 `b37e0206d31fffd9149bf57168d4d62eb2086bee`의 Codex 번들을 `.claude/skills/humanize-korean/`에 설치했다.
- 이번 출판 재검토 초안은 [PR #7](https://github.com/seolcoding/HowToLiveBetter-KR/pull/7)이다. 현재 작업은 계속 진행 중이며 아직 병합·배포하지 않았다.
- 이전 작업은 PR #6으로 main `225ec78`에 병합·배포됐다. 같은 세션 브랜치에 main을 fast-forward했다. 준비 체크포인트는 `c412d4c`, 제18절 개선 체크포인트는 `ea4de8c`다. 새 작업은 아직 웹사이트에 배포하지 않았다.
- `kr-harness/publication/2026-10-18/chNN/manifest.json`에 34절·667항목 스냅샷/별도 실행을 준비했다. 실제 라우트는 light644·standard23. 항목마다 격리 작업자이며 순수 윤문 게이트와 별도 내용/요약 편집 제안을 구분한다.
- 전역 조정자 `/root/humanize_a`가 큐를 이어받았다. 항목 작업자 최대 3명(순수 윤문 1·근거 수정 2)과 독립 절 검토자 2명으로 진행한다(루트·조정자 포함 총 7명). B/C 인계 파일과 전역 큐가 publication 날짜 폴더에 있다. 에이전트 이름은 현재 세션용이며 새 세션에서는 파일 증거를 기준으로 재개한다.
- 출판 진단: 쉽게 요약389개가120자 초과, 제목55개가70자 초과, 본문46개 필드에TODO. 각 항목의 `editorial-proposal.json`은 미채택 제안이다. 간결하더라도 법·의료의 필수 조건을 지우지 않는다.
- 제18절 6항목은 윤문·근거 수정·독립 재검토·승인 해시 통합을 완료했다. 현재 본문 해시 `1c6471db9bb0225575e290301523c854d89943c032fa8c657f03caddda1393d2`, 새 KR-FIT block 0·warn 4, gate 18 통과다. 제1–12절은 모든 항목의 엄격한 윤문 후보 합성을 완료했다. 제1절은 41개 전체안·8개 문체 필드·국내 지침 DOI 추가와 후속 최소 수정을 통합해 새 독립 정식 KR-FIT를 완료했다(README ✅, block0/warn16, CLI 해시 `a380eb05cae69ed33e903826b7076bee415dccb5a4708706c026c965ff908a11`). 적용·승인·후속 수정은 `publication/2026-10-18/ch01/publication-state.json`에 있다. 초기 사실 감사는 제17절까지 완료했다. 제2절은41개 전체안·쉽게3개·비고1개·도입11span을 exactSHA로 통합해 새 독립 정식 검토 중이다(README 🟨, 시작 CLI 해시 e0db99cf8dc3918b22ced785fdf056f8272f5996ff80e2ce725e86fde38160bd). 도입 제35항·DOI사유 최소안을 승인 적용해 첫 새 정식 KR-FIT pass(block0/warn20, CLI d86b65f72379b541ebb4e039162b2c88ced964a481efa917dcd611dd56b429f9)를 r8에 보존했다. 현재2는 아직 promote하지 않고 약효/급여/비유의성/비용 단정 등을 sameauthor 최소안으로 보강한다. 제18절도1/2/3/5항 문장길이 후속 큐를 남겼다. 확정 지적은 같은 원작성자의 후속 수정 큐에서 처리한다. 이 진행 수는 최종 승인·배포 수가 아니며 최신 전역 큐와 실제 파일을 확인한다.
- 엄격한 원문 보존 후보 합성은 `humanize_publication.py assemble`, 승인·해시가 묶인 별도 편집 합성은 `integrate`다. [계약](../publication/CONTRACT.md)을 읽는다. 옛 S7 산출물을 재조립해 새 수정사항을 덮어쓰지 않는다.
- 원문 캐시: `/workspace/.cache/howtolivebetter/source-check/2026-10-18/`. 캐시·자동 메타데이터 수집은 사실 검토 완료가 아니다. 열람한 URL·확인일·실제 인용과 적용 범위를 기록한다. 원본 스킬의 prepare가 입력 후행 공백을 바꾸므로 명령 뒤 원본 바이트 복원을 지킨다.
- 최종 공개 후보마다 새 독립 KR-FIT 검토와 현재 본문 해시 게이트, 전자책4종/EPUBCheck/390px/참조/검색/CI를 완료해야 한다. 중간 체크포인트를 최종 출판 완료라고 보고하지 않는다.

## 최신 체크포인트 — 2026-10-19 KST

- 제2절은14항+tail후속교정까지새독립정식리뷰를마쳤다. CLI `a50962dab3c05ee831dfcdd499dbc69c191153d9efee0d7683af8bd66b6fb01a`, block0/warn14, gate2 promote/README✅다. 제1·2·18절에baseline assemble/integrate를재실행하지않는다. 제18절은별도style후속1/2/3/5가아직남았다.
- 제3절마지막12항원저자초록/논문연결과9/20style의독립closure를기다린다. 위이전2절🟨·첫리뷰후보해시는이력이다. 정확한현재state는각chNN/publication-state.json을읽는다.
- 보존시점gate0 402/667,입력667SHA불일치0,라우트644/23. 현재13절24/38원거리직접인용의기계귀속hold는면제하지않았다. 30항은출처분류수정후freshfinalizer중이다. 새도구독립후보/R2증거는publication/2026-10-18/tooling/에있고production회귀33건통과다.
- A최대3작성자와독립2슬롯을예약한다. live큐는A소유,root체크포인트는별도스냅샷이다.19절초기source감사를시작했다. 새작업은PR#7초안이며병합·배포전이다.

## 최신 체크포인트 — 제3·18절 새 정식 마감

- 현재새정식마감은1·2·3·18절이다. 3은block0/warn0(CLIc27b1c95…b004af6),18은block0/warn3(CLIc8675e5d…0391de)로promote했다. 18style4후속도완료됐고근로감독관→노동감독관제안은12/8미래시행이어서미채택했다. 이전최신란의18style대기표현은이력이다. 1·2·3·18의baselineassemble/integrate는재실행하지않는다.
- root-checkpoint.json 보존시437/667 actualgate0, 입력667SHA불일치0. 제13절24/38은원거리전거인용hold이며,별도원자료심사는충실한공식USFA/CDC번역임을확인했다. 일반lateclassification도구는격리후보구현중이고아직운영승인/registry등록/채택없음. source-findings-r2와외부SPEC-R3/독립설계리뷰를이어읽는다.
- 초기source감사는1–17·19–21절,18새정식완료. 다음초기22절. 04최신18full/intro-tail독립closure중,05source진행. Amax3/pure1-source2와독립2슬롯원칙,추가독립심사시Amax2로drain.
- workingtree3/18본문의4종빌드·EPUBCheck·390px·34쪽/667검색/366참조검사는root-03-18-validation.json에있다. 최종전34절완료후재검사·CI확인·PR#7병합·실제Pages배포검증까지계속한다. 새개선본은아직배포전이다.

---


첫 세션을 2026-10-10에 사용자 요청으로 멈추고 정리한 상태다. 다음 세션은 이 문서부터 읽는다.

- 지시문: [2026-10-next-publish.md](2026-10-next-publish.md)
- 진행 기록: [2026-10-next-publish.progress.md](2026-10-next-publish.progress.md). 절 단계마다 한 줄씩 있고, 묶음 1-A·1-B 요약도 있다.
- 서브에이전트 추가 지시문: [notes/](notes/). 프롬프트에 「시작 전에 kr-harness/goals/notes/○○.md를 읽고 따른다」로 넣는다.
- 세션 브랜치: `claude/inspiring-ramanujan-lool68`. 이어서 작업하는 세션도 같은 브랜치에 커밋하고 푸시한다. main에는 푸시하지 않는다.

## Codex 완료 현황 (2026-10-10)

아래 1~8절은 첫 세션 종료 시점의 역사 기록이다. 현재 상태는 [진행 기록](2026-10-next-publish.progress.md)과 `pipeline.mjs status`를 따른다.

- 사용자 확정: Codex의 Opus 지시는 `gpt-6.1-sol`, Claude의 `gpt-6.1-sol` 지시는 Opus로 양방향 대응하며 하위 에이전트도 같다. 루트 `AGENTS.md`가 우선이고 Codex 현재 슬롯은 오케스트레이터 포함 7개다.
- **34/34절·667항목(원문 665) 모두 ✅**, 🟨 0이다. 추가 4·제외 2이며 각 절 마커와 묶음 요약에 근거가 있다. 위치정보 서비스 추가는 제11절 제11항이다.
- 모든 S1-S8과 독립 적합성 검토를 완료했다. 공개 후 보완 제27·20·30·16·17·2·4·6절도 새 검토·현재 해시 게이트를 통과했다. 제2절 의학 범위와 단위 오류는 원논문 직접 확인 후 수정했다. 제4절 완료된 참조 TODO는 조사 기록으로 옮겼다.
- 현재 gate 34/34, kr-fit 전체 block 0·warn 13(제5절의 명시적 중국 비교), 실행 42건 반려/보류 0, ID 42건 정상, 문체 회귀 9건 통과다. 전체 S7 출력 667개 중 역사 R11-02 e-41의 중복 숫자 3 경고만 보존한다. 그 기름 예시는 원문·입력에 이미 있었고 공개본은 의미를 보존해 고쳤다.
- TODO 목록은 **268건**이다. 다음 실질 후속 작업은 절별 2차 조사다. 원본 동기화는 별도 작업으로 두며 이 목표 세션에서 실행하지 않았다. 남은 경고를 없애려고 가격·판례·조문을 지어내지 않는다.
- 최신 전체 빌드·EPUBCheck·390px·CI 근거는 진행 기록의 최종 검사 기록과 GitHub Actions 최신 브랜치 커밋 실행을 확인한다. 세션 브랜치의 조립과 실제 Pages/Release 배포는 다르며, 사용자가 PR을 생성·병합하면 main 워크플로가 배포한다.
- 도구 활성화: `source /workspace/.cache/howtolivebetter/activate.sh`. Chromium `/usr/bin/chromium`, 브라우저 검사는 file:// 대신 loopback HTTP다. 재사용 설치·시작 설정은 클라우드 환경 설정 초안에 저장되어 별도 게시 뒤 다음 세션에 적용된다.

## 1. 지금 상태

- **공개: 17/34절, 항목 259/665개.** 공개된 절은 2, 3, 4, 6, 14, 16, 17, 18, 20, 21, 22, 27, 28, 29, 30, 32, 34절이다.
- **검사**: `pipeline.mjs gate --all-done`이 17/17절 통과다. 묶음 1-B 마무리 때 로컬 빌드 4종(EPUB·PDF·오프라인 HTML·웹 리더)도 확인했다.
  - epubcheck 오류 0·경고 0.
  - 390px에서 가로 넘침 없음(8개 화면).
  - 웹 리더의 다른 절 링크 앵커 38곳이 모두 실제 항목으로 이어진다.
- **묶음 완료**: 1-A(16·17·18·28·32·34), 1-B(20·21·27·29·30). 둘 다 🟨 절 없음.
- **멈춘 방식**: 대화가 중단되면서 돌던 서브에이전트가 모두 함께 끝났다. 그래서 몇 절은 단계 중간에 멈춰 있다. 끝나지 않은 산출물은 아래 표대로 처리한다.
  - R24a의 미완성 6-polished.md는 지웠다. meta.json에 `polished` 표시가 없어서 미완성으로 판단했다. 다음 세션이 완성본으로 오인하지 않게 하려는 것이다.

## 2. 절별 남은 일 (다음 할 일 순서대로)

`node .claude/skills/kr-pipeline/scripts/pipeline.mjs status`도 같은 안내를 낸다. 아래 표는 그 출력에 없는 메모를 더한 것이다.

| 절 | 멈춘 단계 | 다음 할 일 | 메모 |
|---|---|---|---|
| 10 | S7 끝(R10a 7-refined.md) | 적합성 검토 1회차 → pass면 `gate 10 --save` → `assemble R10a` | 공개된 제17절 제1·2항을 참조함 |
| 23 | S7 끝(R23a 7-refined.md) | 적합성 검토 1회차 → assemble | 평어체 제목 10개는 S6 뒤에 따로 고쳤음 |
| 15 | S7 끝(R15a 7-refined.md) | 적합성 검토 1회차 → assemble | 제4항 비용태그 「钱=0」은 규칙상 원문 그대로(아래 결정 3) |
| 1 | S7 24/42 | `entries.mjs split`(--force 없이) → `pending`으로 남은 18개 → 항목마다 kr-entry-refiner → assemble → verify → 검토 | 윤문 에이전트 보고: 제3항 쉽게 칸의 「냄새로는 깨지 못합니다」, 제32항 쉽게 칸의 「말하지 않았습니다」는 이득 칸에 근거가 없음. 검토 때 확인. 도입부 `kr-doi-drop` Lu J 2017 표시가 verify에서 「효력 없음」으로 뜨는 것은 예상된 일(괄호 잘린 DOI 꼴이 제39항과 같음) |
| 25 | S7 6/11 | 위와 같이 남은 5개 | |
| 26 | S7 2/11 | 위와 같이 남은 9개 | e-03이 중단됨. pending이 알아서 다시 잡는다 |
| 13 | S5 끝(R13a) | kr-polisher로 S6 | 4-styled.md에 평어체 종결 5줄(L114·L271·L291·L399·L426) |
| 19 | S5 끝(R19a) | kr-polisher로 S6 | 4-styled.md L70 평어체 1줄 |
| 24 | S5 끝(R24a) | kr-polisher로 S6 | 미완성 6-polished.md는 지웠음 |
| 5 | S3 초역이 있으나 에이전트 보고 전에 끊김 | S3 점검 → `new-run 5` | 항목 45/45, `## TODO` 절 있음, kr-fit block 0·warn 12. warn은 「중국 기준·규정」 비교 문맥 10건과 「주택공적금」 2건. 도입부 kr- 표시 1개가 실제 차이와 맞는지 확인 |
| 31 | 위와 같음 | S3 점검 → `new-run 31` | 항목 16/16, kr-fit 0/0 |
| 33 | 위와 같음 | S3 점검 → `new-run 33` | 항목 20/20, kr-fit 0/0 |
| 11 | S1-S2만 있음(1-analysis·2-research) | kr-localizer 다시 실행. 「기존 2-research.md를 이어 쓰고 3-draft.md를 만든다」고 지시 | |
| 7, 8, 9, 12 | 시작 안 됨(파일 없음) | kr-localizer로 S1-S3 | 제8절은 원문 46항목이라 오래 걸림 |

**S3 점검**은 이렇게 한다.

- `grep -c '^### '`가 원문 항목 수와 같은지 본다. 다르면 도입부에 kr-omit·kr-add 표시가 있어야 한다.
- `kr-fit.mjs <3-draft.md> --check`가 block 0이어야 한다.
- 1-analysis.md 끝에 뺀 것·바꾼 것 목록이 있는지 본다.
- 셋 다 괜찮으면 `new-run`으로 넘어간다. 이상하면 kr-localizer에게 「기존 파일을 검토해 마무리하라」고 맡긴다.

## 3. 이번 세션의 결정 (다음 세션도 따른다)

1. **warn도 조립 전에 고친다.** 공개된 절의 본문을 고치면 리뷰 해시가 깨져 게이트가 떨어진다. 독자를 잘못 행동하게 할 수 있는 warn은 「수정 → 재검토」를 돌린 뒤 조립했다. 재검토는 3회차까지다. 3회차가 pass면 남은 warn은 기록만 하고 조립한다.
2. **수정 에이전트와 재검토 에이전트 지시문**은 notes/에 있다. 수정은 [fix-notes.md](notes/fix-notes.md), 2회차 이상 재검토는 [rereview-notes.md](notes/rereview-notes.md)다. 재검토는 직전 리뷰를 `kr-fit-review.rN.md`로 보관하고, 「직전 판정 대비」 표를 맨 앞에 둔다.
3. **비용태그는 원문 글자 그대로 둔다.** 「钱=0」인데 한국판에서 돈이 드는 항목(15-4 반환보증료, 25-2 진단서 수수료)도 태그는 그대로다. entries.mjs 구조검사가 태그 변경을 막는다. 비용 칸에 실제 금액을 적었다.
4. **전화번호 허용 목록**(kr-fit-rules.json `phones.allow`)에는 공식 누리집을 직접 열어 확인한 번호만 넣었다. 이번 세션에 1308·117·123·1670-2545·1336·126을 더했다. JSON 들여쓰기는 2칸이다. 다른 들여쓰기로 다시 쓰면 파일 전체가 diff에 잡힌다.
5. **S6 윤문 규칙에 「평어체 제목 정리」를 더했다**(kr-polish SKILL.md). R23a 윤문이 제목 10개를 평어체로 남겼기 때문이다. 임시 파일은 `<ID>-polisher/` 하위 폴더에 둔다.
6. **다른 절 참조**는 KR-GUIDE 「참조 표기」대로 쓴다. 공개 안 된 절은 번호 없이 `제N절(주제)`만 쓴다.

## 4. 공개된 절에 남은 손볼 곳

본문을 고치면 그 절도 재검토를 받아야 한다(결정 1). 마지막 정리 때 절마다 한 번에 모아서 고치고 재검토한다.

- 제27절 27-8: 「한국 공공 자료에 없고」를 「한국 공공 자료에서 찾지 못해」로(3회차 리뷰 warn).
- 제20절: 절 끝 TODO의 「정부 추출검사 공표」를 식약처 용어 「수거검사」로.
- 제30절 30-4: 제목의 「무작위 시험으로 효과가 확인된 유일한 근시 예방법」. 아트로핀 점안 무작위 시험(LAMP2, JAMA 2023, doi:10.1001/jama.2022.24162)이 있다. 원문의 의학 판단이라 적합성 건수 밖으로 뒀다. 생활습관 가운데 유일하다는 뜻으로 좁힐지 결정이 필요하다.
- 제16절 warn 3건, 제17절 warn 4건: 대부분 같은 절 참조를 `제M항(앵커어)` 형식으로 바꾸는 일.
- 제2·4·6절: 0단계 때 남은 같은 절 참조 형식 warn(제2절 7곳, 제4절 3곳, 제6절 「제N조」 표기 등).

## 5. 지시문의 마지막 작업 (아직 안 함)

1. 🟨 절 재시도. 지금은 🟨 절이 없다.
2. 전체 검사: `gate --all-done`, `verify.mjs --check`, `kr-fit.mjs --all-done --check`, 전자책 빌드, epubcheck, 390px.
3. 문서 갱신:
   - book-kr/README.md 표와 읽기 안내. 표의 ✅는 assemble이 자동으로 바꾼다.
   - .github/README.md(숫자를 하드코딩하지 않는 원칙 유지).
   - ROADMAP.md 완료 표시.
   - LESSONS.md 교훈.
4. 진행 기록 끝에 절별 TODO 표.
5. 푸시 후 CI 「한국어판 검사」 녹색 확인. 이 워크플로(kr-check.yml)는 main 푸시, PR, 수동 실행(workflow_dispatch)에서만 돈다. 그래서 세션 브랜치에 푸시만 해서는 실행 기록이 생기지 않는다. PR을 열거나 수동 실행으로 확인한다. 2026-10-10 종료 시점에는 같은 검사를 로컬에서 돌려 모두 통과했다. 돌린 검사는 스크립트 문법 검사, 세션 시작 훅, `verify.mjs --check`(34건 반려 0), `run-id.mjs --self-test --check`, `kr-fit.mjs --all-done --check`(17개 block 0), `gate --all-done`(17/17)이다.
6. 최종 보고(지시문의 형식대로). 묶음 2-A·2-B·2-C와 1-C의 「묶음 요약」도 진행 기록에 써야 한다.

## 6. 운영 요령 (이번 세션에서 잰 것)

- **동시 실행 한도는 서브에이전트 20개다.** 넘기면 오류가 나고 재시도하지 말라고 한다. 자리가 날 때마다 하나씩 띄운다.
- **걸리는 시간**:
  - kr-localizer(S1-S3): 35~75분.
  - kr-polisher(S6): 10~25분.
  - kr-fit-reviewer: 7~25분.
  - kr-entry-refiner(항목 1개): 1~2분.
- **멈춤 판별**:
  - S6이 끝났는지는 `meta.json`의 `polished` 키로 판단한다.
  - S7 진행은 `entries.mjs pending <6-polished.md>`로 확인한다. split은 통과한 출력을 지우지 않는다.
  - S1-S3은 보고가 없으면 위 「S3 점검」으로 확인한다.
- **stop 훅의 WIP 커밋**은 에이전트가 쓰는 도중의 파일도 담는다. 최종본은 에이전트가 끝난 뒤 다시 커밋된다.
- **네트워크**:
  - law.go.kr은 DRF API(`https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=<lsiSeq>&type=XML`, 행정규칙은 `target=admrul&ID=`, 판례는 `target=prec&ID=`)가 가장 안정적이다.
  - 고용보험법처럼 시행 예정본이 기본으로 오는 법은 `target=eflaw&efYd=<날짜>`로 현행본을 받는다.
  - kcgp.or.kr은 503이 들쭉날쭉하다.
  - 근로복지공단(kcomwel.or.kr)은 400·503으로 안 열렸다.
  - glaw.scourt.go.kr은 접속이 안 된다. 판례 링크는 국가법령정보센터 `precInfoP.do`로 단다.
  - 질병관리청 예방접종 지침 PDF(nip.kdca.go.kr)는 TLS 재협상 때문에 curl이 끊긴다. `OPENSSL_CONF=kr-harness/goals/notes/openssl-legacy.cnf`로 레거시 재협상만 허용하고 인증서 검증은 그대로 둔다.
- **scratchpad는 세션마다 새로 생긴다.** 지시문은 notes/에 옮겨 두었다.

## 7. 로컬 빌드 도구 다시 설치 (VM이 새로 만들어졌을 때)

버전은 `.github/workflows/kr-book.yml`과 같다(pandoc 3.11, typst 0.15.1, epubcheck 5.4.0).

```bash
T=<scratchpad>/tools; mkdir -p $T && cd $T
sudo apt-get install -y --no-install-recommends fonts-noto-cjk
curl -sSL https://github.com/jgm/pandoc/releases/download/3.11/pandoc-3.11-linux-amd64.tar.gz | tar xz
curl -sSL https://github.com/typst/typst/releases/download/v0.15.1/typst-x86_64-unknown-linux-musl.tar.xz | tar xJ
curl -sSL -o epubcheck.zip https://github.com/w3c/epubcheck/releases/download/v5.4.0/epubcheck-5.4.0.zip && unzip -q epubcheck.zip
cd /home/user/HowToLiveBetter-KR
export PANDOC=$T/pandoc-3.11/bin/pandoc TYPST=$T/typst-x86_64-unknown-linux-musl/typst
node kr-harness/ebook/epub.mjs && node kr-harness/ebook/offline.mjs && node kr-harness/ebook/site.mjs && node kr-harness/ebook/pdf.mjs
java -jar $T/epubcheck-5.4.0/epubcheck.jar dist-kr/HowToLiveBetter-KR.epub
node kr-harness/goals/notes/mobile-check.mjs $PWD/dist-kr <스크린숏 폴더>   # 390px 가로 넘침 측정(Playwright)
```

## 8. 다음 세션을 여는 말 (예시)

> kr-harness/goals/handoff.md와 2026-10-next-publish.md를 읽고, 인계 문서 2절 표의 남은 일부터 지시문의 마지막 완료 작업까지 이어서 수행하라. 브랜치는 claude/inspiring-ramanujan-lool68.

## 2026-10-18 UTC 추가 인계: 제4절 완료·458개 검사 기록

- 브랜치와 PR은 그대로다: `claude/inspiring-ramanujan-lool68`, draft PR #7. 이 기록 직전 커밋은 `32dcd40`이고 해당 CI check/build는 통과했다. main·공개 사이트는 아직 PR #6 배포 상태다. 사용자 지시 “병합하고 반영”은 유효하며 전체 작업 완료 후 추가 허락 없이 정상 병합·배포를 확인한다.
- root 체크포인트는 **458개 gate0**의 정확 final/gate SHA 쌍을 보존한다. 실시간 작성자는 이후에도 진행하므로 현재 수는 live queue/실제 파일을 본다. 667개 원입력·스냅샷 일치, route644 light/23 standard 불변. 제17절 전9항과 제19절 전18항 순수 조립도 끝났다(제19절 완료는 체크포인트 뒤 진행).
- **제4절 완료**: 전18항 full 제안+도입1/TODO3 exact 승인·기계 통합 후, 새 formal이 교차참조 block1을 발견했다. 같은 원작성자의 6/8/10/14/15항 최소 후속5안을 별도 승인·적용했다. 최신 묶음 `ch04/post-formal-batch-2-r2.json`, 독립 승인 `final-review-evidence/post-formal-review-r3.json` SHA `9d646efb5a2254c2c6343045f749a9a1a03bb14587bc6c5690a96b702534b72b`. 제15항은 기존365를 한 번 반복해 계산값과 실측값을 구분했으며 이를 명시 승인했다. 나머지13항/도입/TODO 불변. 이전 formal은 r6/r7로 보존했다.
- 새 제4절 실제 CLI 해시 `da6789a0c204cc4599abcd0e940cd21ea9be3c3358bed9a0b639420735c830a4`, formal pass block0/warn10. warn은 원문·한국어 프로그램·참여자평균/인터넷 통계 미확인이고 독자 제한은 유지했다. 최장 문장46자/쉽게118자/제목37자. `gate 4 --save --promote`로✅ 복구했다. 현재 public rawSHA `1c7813e9f107ce79def53adf806cabdfe50a41fc845c659e855627bd64b774d4`. **03/04/18과 앞서 완료한01/02의 baseline assemble/integrate를 다시 돌리지 않는다.**
- 제4절 포함 네 형식 빌드·EPUBCheck0/0·실제 Chromium 34페이지/667항/검색667·참조366/366 정상·390px 기본/큰글자8검사 넘침0 통과. `root-04-validation.json`과 로그·`root-doi-audit-ch04.json`에 실제 소스/산출물 SHA를 보존했다. 전체 새 작업 완료 검증을 대신하는 기록은 아니다.
- 초기 원자료 감사는 **1~17·19~22 완료**, 18은 새 formal 완료. 제22절10항/91증적은 초기감사일 뿐 후보/출판 승인이 아니다. 1/2/3/6/9/10항 확정 수정과 모든 문체/warn을 A 큐에 넣었다. 초기 제23절은 `/root/publication_review_09`가 진행한다. 23/24 prefetch는 외부 cache에 actual HTTP 원응답만 모았으며 semantic 승인으로 세지 않는다. 교육사망 논문은 quoted DOI 쿼리로 PMC10901745를 찾아 실제 원문XML도 받았다.
- **인용 도구는 아직 운영 미반영**. 설계 R3 승인과 별도로 두 인용 exact payload에 독립 source reviewer의 번역/원본/정확finalbody 승인을 받았다. 제24항 전거는 실제 USFA 공식 본문이고 ready.gov403은 미확인 그대로다. `ch13/quote-attribution/root-registry-r1.json` SHA `fcaea69ba82f916d15ea8f96d26b58c53af2407dcb82f2d0e5100de78102c89c`는 source 분류 승인만 뜻한다. 기존24/38 gate1 hold를 아직 해제하지 않는다.
- 첫 코드 후보 patch `4674ed5c…77e24`는 독립 검토 **REVISE**: rejected finalizer의 설명 속accept 문자열을 승인으로 읽음, 실패 뒤 성공형 context/candidate가 남음(직접 fsync 실패 포함), URL DEL/C1 누락. 실제 반례·전체 재현은 `/workspace/.cache/howtolivebetter/publication/quote-attribution-code-review/REVIEW.md`에 있다. 원 r1은 불변이다. `/root/quote_prefix_fix`가 **별도 quote-attribution-implementation-r2/** 에서 명시 enum·원자적 새 산출물·실패 정리·제어문자/회귀/CI 연결을 수정 중이다. 다음은 독립 재검토→PASS exact코드만 root 반영→새24/38 finalizer+동일 registry actual gate0→classified strict 조립 순서다. 기존9-script upstream installer로는 새10번째 module이 누락되는 실패를 숨기지 않는다. 새 번들 단독복사 검증과 의존성 포트가 필요하다.
- 현재 root 외 A(max3 workers), codeauthor r2, 초기23 감사가 병행한다. 새 formal/code독립 검토 슬롯이 추가되면 A를 max2로 잠시 줄인다. 모델은 모두 사용자 대응 규칙 Opus↔gpt-6.1-sol, 임계 완화·원입력/00/manifest 덮어쓰기·root 본문 저작 금지. 05의 전45항 출처/요약/길이 closure와 pure20~34를 계속하고, 나머지 전34절 새 formal·최종 전체 검증·PR ready/정상병합·Pages/Release 확인까지 마친다.

## 2026-10-18 UTC 추가 인계: 인용 분류 r2 운영 채택

- 현재 브랜치 최신 기존 커밋은 `23d3cd4`이며 check/build CI 둘 다 통과했다. 제4절·458개 기록은 `367b113`, 인용 전거·반려된r1 증거는 `23d3cd4`에 보존됐다. root 증거 선별 스니펫의 경로 변수 재사용으로 미추적38항09기록을 덮어쓴 일은 독립 검토의 사고 전 사본에서 SHA `7b0155b300008a48346feacdaaa602dedb1749a07a7e6f8215091e01d21aa189`로 정확 복구했다. 원입력·본문·gateJSON은 불변이며 해당 기록과 원인/복구 검증도 커밋했다.
- **코드r2 독립PASS 후 운영 적용 완료**. PatchSHA `facfa1f6a468c71b11ede2431af3ad47c8fd13e36a0c0aa45a52ee3ee5eb6854`, independent REVIEW SHA `ef64a8aa082238caa84540f97325f9dd5b210188b7ecd9df58a600bd889708fa`. 10개 적용파일의 exactSHA 검증 후 문서2개에만 운영 채택 설명을 덧붙였다. 운영에서 정확CI35 entrypoint와 전체local68 모두 통과했다. 필수 enum·실패시 새산출물 전체 staging/rollback·DEL/C1 제어문자·CI 연결을 고쳤다. 새 모듈 포함10개 standalone 배포 의존성과 기존9개 installer의 실패 이력은 유지한다.
- `tooling/reviewed-quotation-classification-r2/ROOT-ADOPTION.json`과 author/independent/current-corpus-comparison에 실제 증거를 보존했다. R2독립35·local33·upstream395pass/기존2skip/원frozen667 일치와 별도로, root가 더 최신 **485개 final(483gate0+2hold/182missing)**을 고정해 기존운영/R2 전체결과·원입력/finalSHA·자동인용범위·route644/23까지 0차이를 확인했다. 다른 작성자는 이후에도 진행한다.
- 제13절24/38 **새finalizer 진행 중**. A에 원래 route와 정확 bodyprefix·원input/00/manifest 보존, 필요summary변경→명시rootregistry 실제gate→stdout report의 classification_context를 새09 top-level에 그대로 기록하는 명령을 전달했다. 이전final/09/gate는 별도backup으로 보존한다. 동일registrySHA `fcaea69ba82f916d15ea8f96d26b58c53af2407dcb82f2d0e5100de78102c89c`, 새derived폴더는 run별 classification-finalize-r1, coordinator확인은 classification-coordinator-r1이다. source선택 `root-selection-r1.json`은 역사적 승인, `root-selection-r2.json`은 코드채택/새finalizer대기 상태다. 이 기록 시점에 hold해제·strict13조립·본문공개는 아직 하지 않았다. 모두성공 후 root가 동일flags로 classified assembly를 새 chapter직속폴더에 실행한다. classified `--publish`는 계속 불가다.
- 초기 원자료감사는 **1~17·19~24 완료**,18새formal 완료, `/root/publication_review_09`는25 진행. source23·24 canonical pending_candidate_review는 승인으로 세지 않는다. source24에서 실제2026 상한표·예외 등 확인한 새내용도 A 큐에 있다.
- 제5절 부분25 manifest SHA `f48c939747aa4044b7af8264ed5da8476f00934994b070492d26649fb3902899`는 고정. 부분r1 승인1/2/19/23/28, 나머지20은 길이·실제조건 수정 또는 독립 추가열람 필요. sameauthor 새r2/r3는 author-revision-batch로만 보존하며 옛제안·partialmanifest를 덮어쓰지 않는다. 3/4/9/11/13/34는 아직읽지않음과실패를구분하려고 같은 독립reviewer가 source supplement를 진행한다. 독립읽기가끝나지않았다는 이유만으로 이미검증한 사실을 삭제하지 않는다. 모든 새full은 inherited 괄호포함 ordinary문장도 literal_check.py로 진단하고 실제 완결문장을 정독한다(날짜/약어 '. ' 분리한계 주의). 전체45 canonical승인/새formal은 아직없다.
- 현재배분은 A(max3), source25 초기감사, source05 독립보완이다. source기존불일치·plain50을 같은저자가닫는작업과 pure22~34를 계속한다. 마지막전체검증에는 링크 존재뿐아니라 **변경완료된 실제 모든 교차참조의 대상본문·근거범위** 대조도 포함한다(LESSONS의 제4절 사례). 전체667/34 새작업과 최종CI 완료 후 정상PR병합·실제Pages/Release를 확인한다. 공개 사이트는 아직 main의 기존PR6 버전이다.

## 2026-10-18 UTC 추가 인계: 제13절 인용 보류 해제·원진단 복구

- `0a9d833`의 검사·전자책 CI 둘 다 통과했다(check39148158704/build39148158815). PR#7은 초안이며 main·Pages는 아직 PR#6이다. 병합·반영 지시는 계속 유효하다.
- 제13절24/38은 새 독립 finalizer와 coordinator의 명시 registry 실제 gate0, 정확 body/input 보존, 새09와 실제 gate의 classification_context 일치를 확인했다. `root-selection-r3.json` SHA `88ca7fe790e20e727795283c07289c334ac370f9094faeadf39f5fda704c0fcb`가 이전 선택 기록을 잇는다. 첫 실패·재시도·이전 gate1/final/09는 모두 남겼다.
- ROOT가 같은 registry SHA로 `classified-assembly-r1`을 만들었고, 아래 원진단 복구 후 `classified-assembly-r2`에서 전44항을 다시 통과시켰다. 두 후보 SHA는 `84575a80224a341671f5b9bbeca113fdf523b14b5be108fb42c283b5efc858bc`로 같다. r2의 candidate/assembly를 표준 경로에 정확히 복사했다. **13의 일반 assemble은 금지**하고 이후에도 명시 registry/고정 SHA/새 증거 폴더를 쓴다. 이는 순수 문체 후보이며 사실 교정·새 formal·공개 승인은 별도다.
- 작업자가 기존 standard run에 prepare를 다시 실행해 원진단/결합 입력을 갱신한 일을 발견했다. 최초 스냅샷 `c412d4c63b64859bbe6a555ee9316ffc3c277c41`과 전667항의00/combined **1,334파일을 대조해 달라진26파일을 정확히 복구**했다(기존 진단 결합 입력도 포함). 덮어쓴 사본과 전후 SHA는 `tooling/original-diagnostics-restoration-r1/`에 보존했다. 원input·항목snapshot667개는 전부 일치했다. 앞으로 원run의00/01/combined/snapshot/source/manifest를 덮어쓰지 않으며 추가 prepare는 별도 derived 폴더만 쓴다.
- 복구 뒤 read-only 실제 게이트는 **502pass/165missing**, route644 light/23 standard·라우트 차이0·읽는 동안 변경0이다. `ROOT-REGATE.json`과 `ROOT-CLOSURE.json`이 기준이며 이후 live 작업은 계속된다. 13 r2 조립도 복구 후의 기록이다. 보호 자료 복구로 공개 본문·최종 body·사실 제안은 바뀌지 않았다.
- 초기 source 감사는1–17·19–25 완료,18은 새 formal 완료. 25는 전11항/99증적·도입/tail을 살폈으며 후보 승인이 아니다. 26→27 초기 감사가 이어진다. pure22 전10항 조립 완료,23 진행. 05는 최신12 재검토11승인/41수정 뒤41r3와34r2를 별도 승인했고,22r2에는 실제 체육시설 환급표 적용 범위 수정이 남았다. 다음 원저자 후속안을 독립 검토 중이며 전체45 승인·통합·새 formal은 아직이다.


## 2026-10-18 UTC 추가 인계: 제23절 pure 완료·519개 보존

- 기존 최신 `fcb8576`은 check39149174711/build39149174714 둘 다 성공했다. PR#7 초안은 OPEN, 원격 main은 `225ec788fb4f8f41d687c8fae62d01f2335c5b5e`로 이번 개선본 미배포다. 전체 작업 후 정상병합·배포 확인까지 이어간다.
- 이번 root 체크포인트는519개 gate0/final SHA 쌍, hold0을 보존한다. 제23절 전22항 strict 조립 완료, pure24부터 이어간다. 새 formal 완료는1/2/3/4/18 그대로이며 pure 통과를 내용 승인으로 세지 않는다.
- 최초 진단1,334파일도 다시 대조해 불일치0이다. 23의 standard 제10항은 새 derived-diagnosis-r1에서만 prepare를 실행했고 보호6종 before/after SHA가 같다. 이 폴더와 보호 기록을 별도 선별해 보존한다. 앞으로 완료된 standard의 derived 증거도 같은 방식으로 포함한다.
- 초기 원자료감사는1–17·19–27 완료(18 새formal 완료), source28→29 진행. 제26절11항/76증적과 제27절16항/110증적은 pending_candidate_review이며 전체warn·도입/tail도 A에 전달됐다. 임신 응급상황은 '즉시'를 '그날'로 지연시키지 않고 양막파수와 제대탈출 상황을 구분해야 한다.
- `root-source-cache-integrity.json`은 감사JSON의 cache_file+sha256 1,156건을 실제 파일과 대조해 모두 일치함을 기록한다. 이는 보관 바이트 검사이며 내용/출판 승인이 아니다. raw 전체는 별도 선별된 증거를 제외하면 외부 cache에 있다는 한계도 명시했다.
- source05의 frozen 목록r2는349파일이며 이전286목록은 불변이다. 최초부분25+다음5+21/25의32항이 최신 exact승인됐고,24r2/26r2·27/30 부분4는 별도 검토 중이다. 24는 >=20일 경계 해결 뒤 실제 가격비교 적용범위를 추가 보완하며,25r2는 새보험규정 실제열람 범위만 갱신한 별도안이다. 나머지full에는14 누락 방지를 명시했다. 전45와intro/tail의새독립closure 전에는 public 통합하지 않는다.
- 최종 의미 참조 검토용 기계목록은 `/workspace/.cache/howtolivebetter/publication/cross-reference-inventory.mjs`로 만든다. 현재366개 대상 누락0이며 JSON에 실제 target본문/SHA가 있다. 전34절 목표수정 뒤 반드시 재생성하고 독립적으로 주장·근거범위를 대조한다. 존재하는 링크만으로 의미 검토를 통과시키지 않는다.


## 2026-10-18 UTC 추가 인계: 제5절 완료·585개 검사·전34절 초기감사

- 직전 원격 커밋 `f784afe355af729e050828e6fdbca08605c43988`의 check39153861664/build39153861756이 모두 통과했다. PR#7은 초안이며 main·사이트는 PR#6 상태다. 전체 작업 뒤 정상 병합·실제 Pages/Release 확인 지시는 계속 유효하다.
- 이번 root 체크포인트는 **585개 gate0/final SHA 쌍·hold0**을 보존한다. 원입력/항목snapshot667쌍과 최초진단1,334파일이 일치하고 route644 light/23 standard 불변이다. 순수 작업은 제28절까지 완료, 제29절을 진행한다. source 교정과 새 formal은 별개이며 현재 새 formal 완료는 **1/2/3/4/5/18**이다.
- **제5절 완료**:45full+intro9/tail1을 exact 승인·생산 helper로 합성했다. 41항 continuation은 같은저자r4에서 공백만 접었고, 장말은 helper가 인식하는 `## TODO 확인 필요`를 보존했다. 세 번의 중단/실패 사본과 canonical r1~r4 이력을 모두 남겼다. actual full helper와 승인 simulation의 경계 공백 차이도 effective SHA로 검토했다. 최초새formal은 해외 카드 인출 범위와 미확인 중국법 단정 두 block을 찾았다. 같은 원저자의38r2/45r1을 별도 exact 승인·현재whole/entry hash 보호로 적용했다. 나머지43항/intro/tail/DOI 불변,45항 바깥 LF2 보존이다.
- 제5절 최종 CLI `3876d4f07cdbc4acdad15dc27d913a5bffcfef574d66f536098801c7bf644142`, formal SHA `339a382b1073aa7891514e4631b8eb5e0a33762bab240f87511df60826b57615`, block0/warn7/삭제0으로 gate5 promote완료. current public raw `71074014560ada2d12df9a6a1232d8f5c3837cd8d375808f97615bf558ad7e32`. 이전fail은r4, 이전oldformal은r3에 보존했다. **01/02/03/04/05/18에 baseline assemble/integrate를 다시 실행하지 않는다.** 수정은 현재본문 exact 후속안·독립승인·새formal만 허용한다.
- `root-05-validation.json` SHA `22fe0580159c785fe990b5f3ed40a7ad09c792740ad1f0ca35ee8fbaa11f2cf9`:네형식빌드/EPUBCheck0·0/실제34쪽667항·검색667/웹·오프라인 참조365개 전부유효/390px 기본·큰글자10검사 넘침0. 제38항의 잘못된21절 참조 삭제로 이전366에서365로 줄었다. 제5절 큰글자 화면도 직접 읽었다. 전체 목표 완료 뒤에는 최신 참조목록을 재생성해 실제 대상본문·근거범위를 독립 의미 검토한다.
- 각주 repair는 **exact5-file patch** `a3515c1133123ace3ae96743ea3357addcea7a561e6e7a337e966e225b966543`의 독립PASS 후 운영 채택했다. current checks SHA `5f83f68e4acbc103ecde11e9a5c19d1015e0b514a36e9933ca10284489fa0bcc`. 법령번호와 진짜각주 구분·반복각주의 occurrence/수치anchor pair를 고쳤다. 운영16+35+33검사PASS, 독립 upstream395PASS/기존2skip, frozen444차이0, fresh551은26e6만1→0이다. metric/threshold/baseline/route 변경이나 identity 조기성공이 아니다. 증거 `tooling/footnote-identity-r1/ROOT-ADOPTION.json` SHA `23b8499d5725b626374bb1c4e61bf9a1959dd6dc5eb1e76d02ce837bf338bf60`. 26e6/27e2/27e11 모두 새독립finalizer·실제gate0 뒤 정리했다.
- runtime 변경으로 제13절24/38도 새 독립finalizer·실제contextgate0·strict44를 다시 실행했다. `classified-assembly-r3` candidate는 이전과같은 `84575a80224a341671f5b9bbeca113fdf523b14b5be108fb42c283b5efc858bc`, assembly SHA `09b020853010cf9df7ca651a077a0115987b86e923fdd84c200e5525c2ccb286`; root-selection-r4 SHA `c12adbbe9a774ed3de4cf4ed38bd0def4cda38f30bf3d30f921f5daca048abd2`. source registryr1 SHA `fcaea69ba82f916d15ea8f96d26b58c53af2407dcb82f2d0e5100de78102c89c`는 동일하다. 표준candidate/assembly를 exact복사하고 이전표준을 별도 보존했다. **13일반assemble금지**, 명시 registry/SHA/새증거폴더만 사용한다.
- 제27절4항의 진짜 CDC 인용은 새공식 raw/독립 번역·귀속검토로 분류했다. 첫 legacy CDC raw는 BOM 때문에 실제exit3, 원자료를 고치지 않고 그 이력도 보존했다. 새현대CDC raw SHA `084e000589352db2ad44671dcaeeec8e479daedb89af8a51ff0ee17aac145f84`, payloadr2 SHA `190800f1813b26d36e49aee2b3153feea57d88e550aa86f1d3711cc74fa889b5`, source review SHA `cebc95799af2698ae3bd58d9587e0f7005b5c14553a93e25e937a4003ecc52bd`. **27 registryr2 SHA `b4f694b512038d0156d9508e57dd8723100396c4d2d378b60da24842b8705f19`**. 새독립finalizer→A/root actualcontextgate0→strict16 성공. classified-assembly-r1 candidateSHA `7a23906f7b4d5c7fa03914a3e76b878968f9ad8c5a39960904af600c3c3dac28`, assemblySHA `b95a9a4b95b7c8cd0bb1622952dbbf57583a726087913785c2179d1e684a5dcf`, root-selection-r3 SHA `5a2bcce7df618f7cbdda8f318af713cc66277c6d98a23f5c1c473fe3639be872`. **27도 일반assemble금지**. 원input/body1961bytes dfc485...불변, 사실 교정·새formal·공개는 아직이다.
- 초기 원자료 감사는 **1~17·19~34 전부 완료**,18은 새formal 완료다. 모두 actual evidence·도입/tail·전warn을 A 큐로 넘겼으며 pending은 승인으로 세지 않는다. `root-source-cache-integrity-r3.json`은35감사파일(05최초archived포함)의 cache_file+SHA **1,820건** 실파일 일치0오류를 기록한다. 이는 외부raw 보관 바이트 검사이며 semantic 승인이 아니다.
- 현재 A **max4**(pure1+source06/07/08 각1), 독립04는06부분10(22~24) 검토,09는34초기감사완료로idle다. 새07partial/06formal 독립 슬롯이 필요하면 A를3/2로 드레인한다. **새 작업은 idle agent에 send_message만 보내지 말고 followup_task로 깨운다.** 모델은 Opus↔gpt-6.1-sol, 전체7슬롯과같은원저자·root본문저작금지 규칙을 유지한다.
- 06부분7~9의10r2/15r2/17r2/18r2/20r2는 독립 exact승인됐다. Forer 원논문 사본 두개를 추가확보해 인쇄118~123/표1을 직접읽었고, EASL 도자기담낭의 may/매우낮은근거/균일벽석회화예외/CT확인·타수술 routine불권고를 원저자가 복원했다. 일부단순초록으로예외를누락한 후보는 반려이력을남겼다. 22/23새요청·27~29full·intro/tail을 계속닫고 전체29canonical closure→root통합→freshformal로 이어간다. source05/06 frozeninventoryr3은539파일(절대경로이므로stage시repo상대경로변환), 이후새부분은 별도 exact manifest로 선별한다.

## 2026-10-18 UTC 추가 인계: 제6절 완료·제2절 범위 교정·640개 검사 기록

- 직전 원격 체크포인트는 `44c9740`이며 검사·전자책 CI가 모두 통과했다. draft PR #7과 `claude/inspiring-ramanujan-lool68`을 유지한다. main은 기존 `225ec78` 배포다. 사용자 “병합하고 반영” 지시는 유효하며, 전체 작업과 마지막 검증 후 추가 허락 없이 정상 병합·실제 Pages/Release 반영까지 확인한다.
- **640/667개 실제 pure gate0**의 정확 final/gate SHA 쌍을 보존했다. 실시간 작업자는 계속하므로 최신 수는 실제 파일을 센다. pure 제32절까지 strict 조립 완료, 제33절 진행이다. hold0, 원입력·항목snapshot667쌍 일치, route644 light/23 standard 및 최초 진단1,334파일 불변을 재확인했다. 이 수를 전체 사실 검증 완료로 세지 않는다.
- **제6절 완료**: 최신 전29항 map-r3 SHA `90077e0ebe1a04373a026cd0da81992d46a45724597a79d48860eec981b99a21`, 독립 canonical decisions SHA `9b040a7a725657bd8c279e905aaf5e01ca00e81a9e0f1455523611052101eb4e`. 실제 helper의 entry-only `5ec5274a…`와 지역 반영 최종 `d78af367…`가 독립 예상값과 일치했다. 최초 감사/field 메타는 `canonical-before-final-r1/`에 보존했다.
- 새 cold formal에서16항의 목적지에 없는 실외2시간,26항의 사망 연관성을 감량 근거로 소개한 참조를 block으로 찾았다. 5/22항의 참조 형식 warn도 같은 원작성자의 별도 제안과 exact 독립 승인으로 함께 고쳤다. 16/26 승인 SHA `a6c0850d39a37599bab2a12d6907414fbd31cd20435f0ac00395b071af0d7659`, 5/22 승인 SHA `93a9405ba3b77f6b9941e0ef738147e164a1b3d6d182cac89d7edb6239372998`. root는 네 고유 span만 적용하고25항·intro/tail·DOI·다른 bytes를 보존했다. 숫자는 잘못된 참조시간2 한 번 제거/명시적 절번호5 한 번 추가뿐이다. `post-formal-integration-r1.json` SHA `38aeca0472a6fadb2e71650a747c4a60c12d5e4de93d1e8b79fe912b9bf7dc1f`. 이전 formal은 r6/r7에 그대로 남겼다.
- **제6절 최종 CLI** `2801696240c04548e25d17448ce1b65e03000f40ad2cc4c29be3c4ff5d62874e`, formal SHA `60ea8eab7023ad8ec7232583746c7c60cad191dbc27f066ebc7fbd339d955c18`, block0/warn0/delete0·기계0/0. 전체29항 재독·실제 캐시96건 SHA와 열람 범위 확인 뒤 실제 promote로✅ 복구했다. 현재 public raw `6746d07a3b0158c91141dc949b70892117f6fdfc3c9d62a1fc5572fdc51fdc85`. **완료한01/02/03/04/05/06/18에는 baseline assemble/integrate를 다시 돌리지 않는다.**
- **제2절32항 최소 범위 교정도 완료**: 아침 식사·16:8의 추가 감량이 모두 없다는 옛 표현을 실제 제6절의 혼합 결과와 맞췄다. 원 수치·DOI·다른41항은 불변이며 같은 원저자와 cold exact 승인을 거쳤다. manifest SHA `d94005b29515e71751a8150ed9fd83d6aba71ec883d44e564a9d44b7a7599dd5`, source 승인 SHA `863520d1fd715f88ab9f55f6d1efbfe21b91205e2158d399040444e6b0da5931`, integration proof SHA `04f2fd7e1f562f5a34aeedb682630e2d88260abc857631299df828dc879a39df`. 새 CLI `1397188cb818c9acfa6741f2b7dca929ab166ac198000db70bcde5a4b605ea30`, formal SHA `76aa941b587272eb54123e46604f7807c3367f14182d9f6f6baa195cf1339a50`, block0/warn14, 실제 promote 완료. public raw `773251e22e2964d827ea1ca997dc73810887e42bd3297a6fd352837528c79f8c`, 이전 formal r9 보존.
- 새 public02/06으로 **네 형식 빌드·EPUBCheck0/0·현재34절 gate·balanced DOI/항목 회계·실제 Chromium34쪽/667항·검색667·웹/오프라인 참조367곳·390px 기본/큰글자12검사**를 통과했다. 큰글자02/06 스크린숏도 직접 읽었다. `root-06-validation.json` SHA `bb30221ec542e9cb04efe3f123c5749bd1875dfb3a7e459a176fb637ee8cbb29`와 로그·`root-doi-audit-ch06.json`에 소스/산출물 SHA를 보존했다. 다음 공개본 변경 후 마지막 검증은 다시 필요하다.
- **제7절**은 전22 full 작성과 각 exact 후속이 준비됐다. 최신 map-r4 SHA `c241a50b351a304be2f88d7f4df30187908c32abe282ca26a7d744edc5bd2433`, intro/tail-r4 SHA `2a1df29436b0f74efa88cbd7a5156db8e2d638a821822c181631e11b2d5ba6c4`. 19항 재량·22항 단일도급 예외/legacy rawbefore·17번TODO 60자 문장까지 별도 수정했다. `/root/publication_review_09`가 최종 지역/전22map·모든 finding/field supersession·생산 AST whole SHA를 대조해 canonical closure를 진행한다. 전체 승인이 고정된 뒤에만 root 실제 통합→cold formal로 이어간다. public07은 아직 baseline이다.
- **제8절**은 1~12항 full과9r2 등 완료 파일을 보존했다. 원자료·각 actual 승인 범위를 유지한다. `/root/publication_review_04`가9r2를 새 고유 `publication-followup-review-04-r1`으로 승인했고10/11 묶음 manifest8 SHA `370dcde1ff8fc2ffc5cd31e3867247b1921d6a154f823aede51de28a8fa0ab88` 검토를 재개했다. 이전09의 r1~r6와 교정 승인은 불변이다. 이후 완료 묶음은 A와04가 직접 조율한다. idle 재개에는 반드시 `followup_task`를 쓴다.
- 완료 source07/08 author inventory-r2는122파일, SHA `af9a8a80beddb66ff85f3e3179b3d43f21e948aa9a96a1091cf9c6ed8ddc2d27`. 이전 r1도 보존하며 진행 중 리뷰/작업은 제외했다. root는 정확한 완료 partial manifest·리뷰만 추가 선별한다. source06의 추가 전체 PDF/논문 원응답은 외부 캐시에 유지하며 repo의 `retained-primary-supplements-r1/`에는 취득 메타·SHA·인코딩 기록만 남겼다. `ROOT-RETENTION.json` SHA `09132d8d330629a77dcc7bee994db17bfc71c759783b7fd4880bf166c19f8af3`. 원래 source 리뷰의 cache paths/bytes와 실패 기록은 불변이다.
- 현재 A max3(남은 pure + source08 등), 독립09는07 closure, 독립04는08 후속이다. root 포함 총7 슬롯 안에서 유지한다. 다음 cold formal과 다른 독립 검토가 겹칠 때는 A를2로 줄이거나 완료 슬롯을 사용한다. 모델 Opus↔gpt-6.1-sol, 같은 원작성자·root 본문 저작 금지, 원진단/입력 불변,13/27의 명시 root registry/SHA/새 증거 폴더 규칙은 계속 적용한다.
- **남은 전체 목표를 계속 수행한다**: pure667→원래 입력 기준 전체 실제 gate,07 closure/통합/formal·08 이후 전34절의 full-source/길이/도입·꼬리/독립 current-hash formal, 최신 실제 대상의 교차참조 의미 전수검토, 최종 네 형식·브라우저·DOI·CI, PR#7 ready/정상 병합·Pages/Release 실제 배포 확인. `/workspace/.cache/howtolivebetter/publication/regate-all-667.py`는 준비만 했고 아직 실행하지 않았다. 640개나 새 formal7절 체크포인트만으로 작업을 끝내지 않는다.
