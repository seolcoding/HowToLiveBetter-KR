---
name: kr-verify
description: 한국 현지화 파이프라인 S5 검증과 비교 보고서 생성. 실행(R18a 같은 실행 ID)의 최신 산출물을 원문과 대조해 통과/조건부 통과/반려를 판정한다. kr-harness/report.html은 main에서만 다시 만든다. "검증", "verify", "보고서 갱신", "S5" 요청에 사용. LLM을 쓰지 않는다.
---

# S5 검증 + 보고서 (결정론)

```bash
node .claude/skills/kr-verify/scripts/verify.mjs            # runs/ 전체 검증, 결과가 바뀐 실행만 5-verify.md·meta.json 갱신
node .claude/skills/kr-verify/scripts/verify.mjs R18a       # 한 실행만(옛 ID R01~R14, 새 ID R18a, 폴더 이름 전체 모두 됨)
node .claude/skills/kr-verify/scripts/verify.mjs --check    # 파일을 쓰지 않음, 반려가 있으면 종료코드 1 (CI)
node .claude/skills/kr-verify/scripts/report.mjs            # main에서만 kr-harness/report.html 재생성(다른 브랜치는 안내만)
```

- 실행 ID는 정확히 맞아야 한다. `R13`은 옛 제4절 실행 하나만, `R13a`는 새 제13절 실행 하나만 고른다. 앞부분만 맞는 `R1` 같은 인자는 「실행 폴더 없음」으로 종료코드 1이다. 형식은 [kr-pipeline/scripts/run-id.mjs](../kr-pipeline/scripts/run-id.mjs) 머리말.
- 검증 결과가 지난번과 같으면(머리줄 날짜만 다르면) `5-verify.md`를, 내용이 같으면 `meta.json`을 다시 쓰지 않는다. 그래서 인자 없이 돌려도 남의 실행 파일이 PR에 끼지 않는다.

검증 대상 파일은 실행 폴더에서 `7-refined.md > 6-polished.md > 4-styled.md` 순으로 가장 앞선 것이다.

## 검사 항목

1. 항목 수가 원문 `book/NN-*.md`와 같은지(원문 항목 수 − 도입부 `kr-omit` 수 + `kr-add` 수와 비교)
2. 필드 6종(비용/쉽게/이득/근거등급/출처/비고)과 비용태그 줄이 모든 항목에 있는지
3. DOI 집합이 원문과 같은지(누락·추가 모두 반려, 도입부 표시로 면제한 것은 빼고 셈). 원문과 번역에 같은 추출 함수를 쓴다. 주소 끝에 붙은 문장부호(`. , ; : 」 · 》 ' "`)는 떼고, 공백 없이 이어 붙은 다음 주소 앞에서 끊는다
4. 중국 잔재: 필드 줄의 한자(「」 인용·링크·`.md` 경로 제외), 중국 전용 전화번호
5. 50자 초과 문장(조건부 통과 사유)
6. `## TODO` 건수 집계

판정: 이슈 1~4가 있거나 무효인 표시가 있으면 **반려**, 50자 초과만 있으면 **조건부 통과**, 없으면 **통과**.

## 문서화된 의도적 차이 (도입부 표시)

KR-GUIDE 원칙 1(대응 제도가 없으면 항목을 뺀다)과 원칙 2(한국 지침 DOI 보강) 때문에 항목 수·DOI가 원문과 일부러 달라질 수 있다. 한국에만 있는 위험·제도가 원문 절의 주제 안에 있으면 새 항목을 더하기도 한다. 그때는 절 도입부(첫 `### ` 줄 앞)에 한 줄에 하나씩 표시를 단다.

```markdown
<!-- kr-omit: 3 — 한국에 대응 제도 없음(KR-GUIDE 원칙 1) -->
<!-- kr-add: 11 — 한국에만 있는 제도(병역의무자 국외여행허가), 원문 절 주제 안 -->
<!-- kr-doi-add: 10.3904/kjim.2023.206 — 대한류마티스학회 한국 통풍 진료지침(KR-GUIDE 원칙 2, 한국 지침 보강) -->
<!-- kr-doi-drop: 10.xxxx/yyyy — 사유 -->
```

- `kr-omit: N`의 N은 원문 `### N.`의 번호다. 뺀 항목에만 딸린 DOI는 누락에서 자동으로 면제된다.
- `kr-add: N`의 N은 한국어판 `### N.`의 번호다(원문에 대응 항목이 없는 새 항목). 그 항목에만 있는 DOI는 추가에서 자동으로 면제된다. 번역의 다른 항목에도 있는 DOI는 면제되지 않는다.
- 기대 항목 수 = 원문 항목 수 − 유효한 kr-omit 수 + 유효한 kr-add 수. 같은 번호를 두 번 적으면 한 번만 센다.
- `kr-doi-add`는 추가에서, `kr-doi-drop`은 누락에서 그 DOI를 뺀다. DOI는 `https://doi.org/` 주소로 써도 되고 대소문자는 가리지 않는다.
- 구분자는 「—」「-」「:」 어느 것이든 된다.
- 면제한 것은 `5-verify.md` 「참고」에 「의도적 차이 …」로 사유와 함께 남는다.
- 무효(이슈, 반려): 사유가 빈 표시, 도입부 밖(항목 블록 안, `## TODO` 절 안)의 표시, 원문에 없는 번호의 kr-omit, 한국어판에 없는 번호의 kr-add, 값이 번호·DOI 꼴이 아닌 표시. 무효인 표시는 면제도 하지 않는다.
- 실제 차이와 맞지 않는 표시(번역에 없는 DOI의 kr-doi-add 등)와 알 수 없는 `kr-` 표시(오타)는 「참고」에 알리기만 한다.
- `entries.mjs`(S7)는 도입부를 항목 에이전트에게 보내지 않고 조립 때 그대로 붙인다. kr-fit은 주석을 가리고 검사하므로 이 표시로 block·warn이 나지 않는다. `--hash`에는 들어가므로 표시를 고치면 리뷰를 다시 받는다. 전자책 빌드는 주석을 지운다.

## 한국 실정 적합성 기계 검사 `kr-fit.mjs` (게이트 1/2)

```bash
node .claude/skills/kr-verify/scripts/kr-fit.mjs 14                # 제14절 book-kr 본문
node .claude/skills/kr-verify/scripts/kr-fit.mjs kr-harness/runs/R18a-18-styleB/7-refined.md   # 조립 전 산출물(실행 폴더 경로)
node .claude/skills/kr-verify/scripts/kr-fit.mjs --all-done --check   # README ✅ 절 전부, block 있으면 종료코드 1 (CI)
node .claude/skills/kr-verify/scripts/kr-fit.mjs 14 --json | --save   # JSON 출력 / kr-harness/chapters/14/kr-fit-lint.txt 저장(같으면 안 씀)
node .claude/skills/kr-verify/scripts/kr-fit.mjs 14 --hash   # 본문 sha256(LF 정규화, 상태 배너 제외) — kr-fit-review.md 마지막 줄 sha256= 값
```

규칙은 [references/kr-fit-rules.json](references/kr-fit-rules.json)에 데이터로 있다. 규칙 ID:

- `KF-CUR` 중국 화폐(숫자+위안, 위안화, 인민폐, 元) · `KF-ADM` 중국 행정·사법 기관(공안국, 인민법원, 성(省), 호구 등록 …) · `KF-PROV` 중국 성 이름(warn) · `KF-SOC` 중국 사회보장(공적금, 최저생활보장, 노동중재 …) · `KF-SOC-AMB` 애매한 제도 용어(warn) · `KF-SVC` 중국 앱·서비스·행사·학제(위챗, 타오바오, 솽스이, 가오카오 …) · `KF-LAW` 중국 법령명 직역(민법전, 노동계약법 …) · `KF-UNIT` 중국식 단위(숫자+근 등, warn) · `KF-CN-STD` 중국 기준·지침을 본문에서 사용(warn)
- `KF-PHONE-CN` 중국 번호 · `KF-PHONE-MEANING` 한국에서 뜻이 다른 번호(110 정부민원/112 경찰, 120 다산콜/119 구급 — 경찰·구급 문맥이면 block, 애매하면 warn) · `KF-PHONE-RETIRED` 통합된 번호(1393→109) · `KF-PHONE-UNKNOWN` 허용 목록 밖 번호(warn)
- `KF-HAN` 본문 한자(출처 줄 제외) · `KF-HAN-GLOSS` 한글 뒤 괄호 한자(warn) · `KF-SRC-CNGOV` 법·제도 항목인데 출처의 정부 도메인이 중국뿐(block), 한국 출처와 섞이면 warn. 의학 DOI는 대상이 아니다.
- `KF-OK-EMPTY` 사유 없는 예외 표시

block은 TODO 절, 출처 줄(용어), 같은 문장에 비교 문맥(중국·원문·「한국에는 없다」)이 있으면 warn으로 내려간다. 의도된 예외는 같은 줄이나 바로 윗줄에 `<!-- kr-fit-ok: 사유 -->`. 한국 번호 허용 목록은 번호마다 1차 출처 URL과 확인일이 있다. 새 번호는 공식 사이트에서 확인한 뒤에만 넣는다.

게이트 2/2(내용 검토)는 [kr-fit-review](../kr-fit-review/SKILL.md), 둘을 합친 판정은 `pipeline.mjs gate N`. 게이트는 리뷰 마지막 줄의 sha256이 지금 본문의 `--hash` 값과 같아야 통과한다(리뷰 뒤 본문이 바뀌면 재검토).

## 기계 검사가 못 잡는 것

전화번호 치환의 정확성, 법령 조문 원문 열람 여부, 번역테·AI腔은 사람이나 서브에이전트가 본다. KR-GUIDE.md 체크리스트를 따른다. 오탐 사례(걸음 수 10000, `.md` 경로의 한자)는 이미 제외돼 있다([LESSONS.md](../../../kr-harness/LESSONS.md) L5).

## 보고서

사용자 컨펌은 대화가 아니라 `kr-harness/report.html`에서 받는다(L9). 다만 2026-10-10부터 **보고서는 main에서만 다시 만든다.** report.html은 모든 실행을 한 파일에 모으므로, 절 세션마다 다시 만들면 병렬 PR끼리 반드시 충돌한다.

- `report.mjs`는 main(또는 git 밖)에서만 `kr-harness/report.html`을 쓴다. 다른 브랜치에서는 쓰지 않고 안내만 한다.
- 절 세션에서 미리 보려면 `report.mjs --out <저장소 밖 경로>`.
- 갱신은 main을 받은 뒤 사용자가 하거나, 보고서만 바꾸는 별도 PR에서 `report.mjs --force`로 한다.
