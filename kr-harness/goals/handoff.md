# 인계 문서: 2026-10-next-publish

첫 세션을 2026-10-10에 사용자 요청으로 멈추고 정리한 상태다. 다음 세션은 이 문서부터 읽는다.

- 지시문: [2026-10-next-publish.md](2026-10-next-publish.md)
- 진행 기록: [2026-10-next-publish.progress.md](2026-10-next-publish.progress.md). 절 단계마다 한 줄씩 있고, 묶음 1-A·1-B 요약도 있다.
- 서브에이전트 추가 지시문: [notes/](notes/). 프롬프트에 「시작 전에 kr-harness/goals/notes/○○.md를 읽고 따른다」로 넣는다.
- 세션 브랜치: `claude/inspiring-ramanujan-lool68`. 이어서 작업하는 세션도 같은 브랜치에 커밋하고 푸시한다. main에는 푸시하지 않는다.

## Codex 재개 현황 (2026-10-10)

아래 1~8절의 표는 첫 세션 종료 시점의 기록이다. 다음 재개 때는 [진행 기록](2026-10-next-publish.progress.md)과 `pipeline.mjs status`를 함께 읽고 현재 단계를 따른다.

- 사용자 확정: Codex에서는 Opus 지시를 `gpt-6.1-sol`로, Claude에서는 그 반대로 적용한다. 하위 에이전트도 같다. 우선 규칙은 저장소 루트 `AGENTS.md`에 있다. 현재 Codex 슬롯은 오케스트레이터 포함 7개다.
- 현재 공개는 **26/34절·449/665항목**이다. 제13·19절은 수정과 3회차 재검토 뒤, 제24절은 2회차 재검토 뒤 추가로 공개했다. 제19절에는 본문에서 미확인을 밝힌 판례 링크·비용 관련 warn 5건이 남았으며 내용 block은 0이다.
- 제5·31·33절 S7도 완료(45·16·20항목, 원문 유지 0)하고 독립 첫 리뷰 중이다. 제13절 S4 공식 인용 오타도 복원하고 독립 검토를 통과했다.
- 제7·8·9·11·12절은 모두 S6까지 끝났다. 현재 S7 제7절 진행, 다음 순서는 제8→9→11→12절이다. 항목마다 독립 에이전트로 수행하며 현재 검토 대기열 때문에 항목 child quota는 2개다. 실행 ID는 각 RNN a 형식이다.
- 공개 후 보완: 제27절 한국 공공자료 부재 단정·제20절 TODO 수거검사 용어·제30절 유일한 근시 예방법 단정을 정정하고 각각 독립 재검토 pass(block 0·warn 0), 현재 해시 게이트 및 ✅ 복원을 확인했다. 제16·17·2·4·6절 보완은 남았다. 제16·17절은 참조뿐 아니라 기존 리뷰의 본인부담 범위·약값 비교·금융서비스 안내 경고도 함께 고친다.
- 2-A 네 절을 모두 공개한 25절·431항목 상태에서 4종 빌드, gate 25/25, EPUBCheck 오류·경고 0, 390px 8화면 넘침 없음과 네 절 HTTP200을 확인했다. 23절 상태의 내부 참조 링크 153곳(항목 앵커 63곳)도 유효했다. 제19절 공개 뒤의 최종 전체 검사와 CI·문서 마무리는 남았다.
- 도구 활성화는 `source /workspace/.cache/howtolivebetter/activate.sh`다. 현재 Chromium은 `/usr/bin/chromium`이다. 브라우저는 file:// 대신 loopback HTTP로 검사한다. 설정에 저장한 설치·시작 지침은 별도 환경 게시 뒤 다음 세션에 적용된다.

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
