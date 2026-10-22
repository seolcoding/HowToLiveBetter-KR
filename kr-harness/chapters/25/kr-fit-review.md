# 제25절 한국 실정 적합성 검토
검토일: 2026-10-23 · 검토 대상: book-kr/25-돌아가신-후-할-일.md (항목 11개)

직전 kr-fit-review.md(해시 82676292…, pass, warn 1)의 제4항 warn(임상 부검 정의)을 수정한 뒤의 재검토다. 이번에는 제4항 비고의 그 네 문장만 직전 검토의 원문 인용(Park 2019 PMC6900410 전문의 정의 문장)과 대조했다. 웹은 새로 열지 않았다. 나머지 항목은 직전 판정을 따르고, 미확인 목록도 이어받는다. 기계 검사 `kr-fit.mjs 25`는 block 0 · warn 0. 검토 시작과 끝의 `kr-fit.mjs 25 --hash` 값이 같다.

## 직전 검토에서 이어받은 1차 출처

| 출처 | URL | 확인한 내용(직전 검토 기록) |
|---|---|---|
| Park JP 외, J Korean Med Sci 2019;34(47):e301 | https://www.ebi.ac.uk/europepmc/webservices/rest/PMC6900410/fullTextXML | 「clinical autopsy rates decreased from 0.17% in 2001 to 0.03% in 2015, while legal autopsy rates increased from 1.99% to 2.57%」 「A clinical autopsy is performed when it is necessary to identify the cause of death for medical purposes, mainly for patients who were undergoing treatment at a hospital」 「legal autopsies are performed at the National Forensic Service (NFS) … upon the request of investigative agencies such as the police.」 rate 1 분모는 전체 사망자 수. |
| 보건복지부고시 제2026-38호 | https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000274952&type=XML | [별표 1] 비급여 보고항목에 「부검」「해부」 없음. |
| 가사소송법·가사소송규칙 DRF XML | https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=265309&type=XML · https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283111&type=XML | 「처리기간」 0건. |

## 항목별 판정

### 25-1. 사고·원인 불명 죽음은 112 신고, 현장 보존
- 판정: 적합(직전 판정 따름).

### 25-2. 사망진단서·시체검안서
- 판정: 적합(직전 판정 따름).

### 25-3. 화장 24시간·화장시설·화장신고
- 판정: 적합(직전 판정 따름).

### 25-4. 부검 요청·진료기록·의료분쟁
- 판정: 적합.
- 확인: 비고의 네 문장 「병원이 사인을 의학적으로 밝히려고 하는 임상 부검은 드뭅니다. 유족이 원할 때도 이 부검에 해당합니다. 2015년 국내 전체 사망자 중 임상 부검을 받은 비율은 0.03%였습니다. 같은 해 경찰 등 수사기관 의뢰로 하는 사법 부검은 2.57%였습니다(Park 2019).」가 직전 수정안과 글자 그대로 같다. 첫 문장은 원문 정의 「to identify the cause of death for medical purposes」와 맞고, 0.03%가 더는 유족 요청 부검만의 비율로 읽히지 않는다. 「전체 사망자」는 rate 1 분모와 맞는다. 「경찰 등 수사기관 의뢰」는 「upon the request of investigative agencies such as the police」와 맞는다. 둘째 문장(유족 요청도 임상 부검에 해당)은 원문이 직접 쓴 문장은 아니지만, 원문의 구분이 임상(의학적 목적, 병원)과 사법(수사기관 의뢰) 둘뿐이라 유족 요청 병원 부검은 임상 쪽에 든다. 단정의 폭이 넓어지지 않아 통과로 둔다.
- 비용 칸(고시 제2026-38호, 68만원 뇌기증 부검 검사비)과 해부 법령, 의료분쟁 절차는 직전 판정을 따른다.

### 25-5. 사망신고 1개월
- 판정: 적합(직전 판정 따름).

### 25-6. 장례식장·화장시설 가격표
- 판정: 적합(직전 판정 따름).

### 25-7. 게시 가격 외 금품·강요·명세서 미발급 신고
- 판정: 적합(직전 판정 따름).

### 25-8. 상조 등록·선수금 보전·고인 상조 조회
- 판정: 적합(직전 판정 따름).

### 25-9. 안심상속·국민연금·산재·장제급여
- 판정: 적합(직전 판정 따름). 장제급여 「영수증 등」은 미확인(아래).

### 25-10. 고인 계정·개인정보
- 판정: 적합(직전 판정 따름).

### 25-11. 한정승인·상속포기 3개월
- 판정: 적합(직전 판정 따름).

## 참조·TODO

- 이번 수정으로 새로 생기거나 바뀐 절·항 참조는 없다. 「준비 중」 같은 공개 여부 표시는 없다.
- TODO 2건은 직전과 같다. 본문이 기간이나 금액을 단정하지 않는다.

## 미확인

- 제11항 한정승인·상속포기 신고의 실제 법원 처리 기간 수치: 본문이 단정하지 않음(TODO). 대법원 사법통계·사법연감은 열지 않았다. 비송사건절차법에 처리 기간 조항이 있는지도 열지 않았다(본문이 그 법을 말하지 않음).
- 제4항 일반 임상 부검(전신 병리해부) 비용: 본문이 단정하지 않음(TODO). 병원 공식 가격 안내를 열지 못했다.
- 제9항 장제급여 「신청할 때 장례를 치른 영수증 등을 냅니다」: 복지로 원문을 열지 못했다. 법 제14조 제2항, 시행규칙 제18조와 어긋나지 않아 warn으로 세지 않았다.

## 요약
- block 0건, warn 0건, 삭제 권고 0건.
- 시작·종료 `kr-fit.mjs 25 --hash` 값 동일.
KR-FIT: pass blockers=0 sha256=95ef52a7907762cd4db9b0ba2178080c172ec937335da90286641a40998c47a5
