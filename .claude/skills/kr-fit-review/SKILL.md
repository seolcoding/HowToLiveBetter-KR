---
name: kr-fit-review
description: 한국어판 적합성 게이트의 내용 검토. 절 하나(book-kr/NN-*.md)의 모든 항목을 한국 1차 출처와 대조해 적합/수정 필요/수정 권장/삭제 권고로 판정하고 kr-harness/chapters/NN/kr-fit-review.md를 쓴다. 마지막 줄은 KR-FIT: pass|fail blockers=N sha256=<본문 해시>(kr-fit.mjs --hash). "적합성 검토", "kr-fit 리뷰", "한국 실정 검토", "/kr-fit-review 14" 요청에 사용. 보통 kr-fit-reviewer 서브에이전트 안에서 실행. 본문은 고치지 않는다.
argument-hint: "절 번호"
---

# 한국 실정 적합성 검토 (게이트의 내용 검토)

대상 절: `$ARGUMENTS`. 오케스트레이터는 이 스킬을 직접 돌리지 않는다. 절마다 `kr-fit-reviewer` 서브에이전트(Opus)를 Agent 도구로 하나씩 띄우고 프롬프트에 절 번호만 준다. 절이 여럿이면 한 메시지에서 병렬로 띄운다. 서로 다른 파일만 쓰므로 충돌하지 않는다.

적합성 게이트는 두 부분이다. 둘 다 통과해야 절이 ✅가 된다(`pipeline.mjs gate`).
1. 기계 검사 `kr-fit.mjs --check` — 중국 용어·번호·한자·중국 정부 출처를 결정론으로 잡는다.
2. 이 스킬의 내용 검토 — 기계가 못 보는 제도 전제, 담당 기관, 숫자, 생활 맥락을 사람처럼 읽는다.

## 먼저 읽을 것

- [KR-GUIDE.md](../../../KR-GUIDE.md) 전체
- [kr-harness/goals/2026-10-10-gate-ebook.md](../../../kr-harness/goals/2026-10-10-gate-ebook.md)의 「설계 원칙」과 「금지」
- [kr-sources.md](../kr-localize/references/kr-sources.md) — 한국 1차 출처 목록과 치환표
- 맡은 절의 `book-kr/NN-*.md`와 중국어 원문 `book/NN-*.md`
- `kr-harness/chapters/NN/`의 기존 기록(`1-analysis.md`, `2-research.md`)
- 기계 검사 결과: `node .claude/skills/kr-verify/scripts/kr-fit.mjs NN` (warn도 읽고, 항목 판정에 반영한다)
- 전화번호 허용 목록과 출처: [kr-fit-rules.json](../kr-verify/references/kr-fit-rules.json)의 `phones.allow`

## 할 일

검토 대상 파일은 `node .claude/skills/kr-pipeline/scripts/pipeline.mjs status NN`의 게이트 줄 괄호 안 파일이다. 이미 book-kr/에 들어간 절(README ✅·🟨)이면 `book-kr/NN-*.md`, 조립 전이면 실행 산출물(`kr-harness/runs/RNN-…/7-refined.md`)이다. 검토 기록 첫머리 「검토 대상」에 그 경로를 적는다.

대상 파일의 모든 항목(`### ` 블록)을 하나씩 읽고, 한국 독자에게 맞는지 판정한다. **본문은 고치지 않는다.** 검토 기록만 쓴다.

판정할 것:
1. 한국에 없는 기관, 제도, 서비스, 단어가 남아 있는가. 음역, 한자, 직역 모두 본다. 예: 위안, 호구, 사보, 공적금, 최저생활보장(低保), 노동중재, 위챗, 알리페이, 공안국, 인민법원, 성(省).
2. 한국에 없는 제도를 전제로 한 조언인가. 한국에서는 다른 기관이 맡는 일인가(예: 노동중재 → 노동위원회, 고용노동부 진정).
3. 숫자(기한, 금액, 연령, 비율)가 한국 법이나 제도와 맞는가. 한국 출처로 바꿔 쓴 숫자라면 그 출처에서 정말 그 숫자가 나오는가. **원화 금액은 원문(book/)의 위안 금액과 대조한다.** 위안을 환율로 옮긴 것으로 보이는데 한국 출처가 없으면 block이다(KR-GUIDE 「중국 수치를 한국어로만 옮기는 일은 절대 금지」). `TODO 확인 필요`로 정직하게 표시하고 본문이 금액을 단정하지 않으면 warn이다.
4. 전화번호와 기관 연락처가 한국에서 맞는가. 110은 한국에서 정부민원안내콜센터이고 경찰은 112다. 120은 서울시 다산콜센터이고 구급은 119다. 자살예방 상담은 2024년부터 109다(1393은 통합됨).
5. 예시와 생활 맥락이 한국적인가(위챗 송금, 중국식 직장 문화, 중국 앱 같은 것).
6. 한국 독자에게 어색한 번역투 용어나 기관명이 있는가.
7. 의학 연구 근거(DOI, HR/RR/OR)는 국적과 상관없이 그대로 두는 것이 원칙이다. 중국 인구 연구를 인용한 것 자체는 문제가 아니다. 다만 그 숫자를 한국 상황처럼 말하면 지적한다. 중국 기준치·지침 수치를 한국 기준처럼 쓴 경우도 지적한다.
8. 참조 형식: 다른 절은 `제N절(주제)`, 그 절의 항목은 `제N절 제M항(앵커어)`인가(KR-GUIDE 「참조 표기」). 「준비 중」「다룰 예정」 같은 공개 여부 표시는 block이다. 형식·주제 어긋남은 kr-fit warn(KF-REF-*)을 보고 판정한다. 앵커어가 대상 항목 제목과 맞는지는 기계가 안 보므로 직접 확인한다.

## 근거 규칙

- 「한국에도 있다」, 「한국 법은 이렇다」는 판정마다 한국 1차 출처(law.go.kr, 각 부처, 공단, KOSIS, 공공기관 공식 사이트)를 **직접 열어** 확인하고 URL과 확인한 문장을 적는다. 열지 못했으면 「미확인」이라고 쓴다. 추측으로 통과시키지 않는다.
- WebSearch는 다른 검토자와 함께 쓰는 자원이니 아낀다. 공식 사이트를 WebFetch나 curl로 직접 연다(로컬에서 프록시가 필요하면 `HTTPS_PROXY=http://127.0.0.1:7890`).
- 웹 확인 요령(2026-10-10 클라우드 VM 실측):
  - law.go.kr은 연결이 자주 끊긴다(curl 8번 중 5번 성공). `curl -sS --retry 5 --retry-all-errors --retry-delay 2 -m 30 <URL>`로 다시 시도한다.
  - `https://www.law.go.kr/법령/…` 한글 주소는 자바스크립트 화면이라 본문이 없다. `LSW/lsInfoP.do?lsiSeq=…`, `LSW/lsInfoR.do?…`, `LSW/lsBdyPrint.do?…`, 조문 단위 `LSW/lsSideInfoP.do?…&joNo=…`를 쓴다. lsiSeq는 WebSearch나 law.go.kr 검색 결과에서 얻는다.
  - nhis.or.kr, moel.go.kr 같은 기관 사이트는 curl이 거의 실패하고 WebFetch로는 열린다. 기관 사이트는 WebFetch를 먼저 쓴다.
  - europepmc.org 화면은 403이다. REST API `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI:<doi>&format=json&resultType=core`를 쓴다. doi.org, pubmed.ncbi.nlm.nih.gov는 정상이다.
  - web.archive.org는 막혀 있다. 한국어판은 보관 링크를 요구하지 않는다.
  - 이렇게 해도 못 열면 「미확인」이다.
- 숫자나 URL을 지어내지 않는다.

## 출력: `kr-harness/chapters/NN/kr-fit-review.md`

```
# 제N절 한국 실정 적합성 검토
검토일: YYYY-MM-DD · 검토 대상: book-kr/NN-….md (항목 M개)

## 항목별 판정
### N-1. (항목 제목)
- 판정: 적합 | 수정 필요(block) | 수정 권장(warn) | 삭제 권고
- 문제: (해당 문장을 그대로 인용 → 무엇이 왜 문제인지)
- 수정안: (구체적으로. 한국 제도명, 기관, 번호, 숫자)
- 근거: (URL, 확인한 문장)
...

## 요약
- block N건, warn N건, 삭제 권고 N건
KR-FIT: pass|fail blockers=N sha256=<검토 대상 본문 해시 64자>
```

- 적합 판정 항목은 한 줄로 짧게 써도 된다.
- block은 독자에게 틀렸거나 한국에서 쓸 수 없는 정보를 줄 때다. warn은 어색하지만 틀리지는 않을 때다.
- **마지막 줄은 반드시** `KR-FIT: pass blockers=0 sha256=<64자>` 또는 `KR-FIT: fail blockers=N sha256=<64자>` 형식이다. block 또는 삭제 권고가 1건이라도 있으면 fail이고, N은 block과 삭제 권고를 합친 수다. 이 줄 뒤에는 아무것도 쓰지 않는다. `pipeline.mjs`와 CI가 파일의 마지막 비어 있지 않은 줄만 읽는다.
- **sha256은 반드시 명령으로 넣는다.** 손으로 쓰거나 다른 도구로 계산하지 않는다. 마지막 줄을 쓰기 직전에 검토 대상 파일로 아래 명령을 돌리고, 출력된 64자를 그대로 붙인다.
  ```bash
  node .claude/skills/kr-verify/scripts/kr-fit.mjs <검토 대상 경로> --hash   # book-kr 본문이면 kr-fit.mjs NN --hash 와 같다
  ```
  이 해시는 줄바꿈을 LF로 맞추고 BOM과 `> **상태:` 배너 줄을 뺀 본문의 sha256이다(Windows CRLF 체크아웃에서도 같은 값). 검토를 시작할 때도 한 번 돌려 두고, 끝날 때 값이 달라졌으면(다른 담당이 그사이 본문을 고침) 바뀐 부분을 다시 읽고 판정을 고친 뒤 새 값을 쓴다.
- 게이트(`pipeline.mjs gate`)는 이 sha256이 지금 본문 해시와 같을 때만 리뷰를 인정한다. 리뷰 뒤에 본문이 바뀌면, 또는 해시가 없으면 「리뷰가 본문보다 오래됨 → 재검토 필요」로 실패한다. 본문을 고친 뒤에는 반드시 다시 검토받는다.
- 본문을 고친 뒤 다시 검토할 때는 파일을 통째로 새로 쓴다. 이전 판정을 덧붙이지 않는다.

## 금지

- `book-kr/`, `book/`, `README.md`, 다른 절의 파일 수정. 출력 파일 하나만 쓴다.
- git 상태를 바꾸는 명령(add, commit, switch, stash 등). `tools/sync-stats.mjs` 실행.
- 외부 서비스에 무엇을 게시하거나 보내는 것.

## 회신

마지막 응답으로 다음을 짧게 보고한다.
- block, warn, 삭제 권고 건수와 대표 사례 세 개(인용 → 수정안 → URL)
- 「미확인」으로 남긴 판정 목록
