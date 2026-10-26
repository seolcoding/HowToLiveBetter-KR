# 제32절 한국 실정 적합성 검토
검토일: 2026-10-26 · 검토 대상: book-kr/32-유학.md (항목 11개) · 48차 재검토(TODO 줄만 바뀜). 직전 기록은 18회차(pass, warn 0, 해시 2a31772a…)였다.

시작과 끝의 `--hash` 값이 같다(검토 중 본문 변경 없음). 기계 검사 `kr-fit.mjs 32`: block 0 · warn 0.

`git diff book-kr/32-*.md`로 보니 바뀐 곳은 절 끝 TODO 줄 하나뿐이다. 항목 본문은 바뀌지 않았으므로 나머지 판정은 18회차를 그대로 이어받는다.

## 항목별 판정

### 32-1 ~ 32-11
- 판정: 적합(18회차 판정 인용, 본문 변경 없음)

### 절 끝 TODO 줄(미국 F-1 소송 재확인 기록)
- 판정: 적합
- 바뀐 내용: 확인 날짜를 10-26으로, 확인 경로에 「검색 API」를 넣고, 「규칙 도크넷(ICEB-2025-0001)에서 7-17 이후 새 문서는 찾지 못했다.」를 더했다.
- 대조 결과:
  - 도크넷: regulations.gov API를 postedDate 내림차순으로 조회했다. 맨 위 두 건이 ICEB-2025-0001-21963(「ICE Duration of Status RIA - Final Rule 2026」, 2026-07-17)과 ICEB-2025-0001-21962(「Rule Establishing a Fixed Time Period of Admission and an Extension of Stay Procedure for Nonim…」, 2026-07-17)이다. 그다음은 2025-09-30 Notice다. 7-17보다 늦은 문서는 없으므로 추가된 문장과 맞는다.
  - 소송 피드: CourtListener 피드의 최신 항목은 여전히 #65, 2026-10-23 minute entry, #64, #63이다. 18회차 이후 새 항목이 없으므로 「남은 것은 예정 일정이다」라는 문장이 그대로 맞다.
  - 남은 일정(10-30, 11-02, 11-09)은 #64 문구(18회차 확인)와 같고, 「예정」이라고 적어 단정하지 않았다.
- 근거: https://api.regulations.gov/v4/documents?filter%5BdocketId%5D=ICEB-2025-0001&sort=-postedDate&api_key=DEMO_KEY (2026-10-26 조회), https://www.courtlistener.com/docket/74661796/feed/ (2026-10-26 조회)

## 미확인
- 32-2: PACER에만 있고 RECAP 피드에는 없는 항목이 있는지(PACER 미열람).
- 32-2: #64 전자명령 원문 PDF(CourtListener에 사본이 없어 피드 요약문으로만 확인).
- 32-2: TODO에 남은 앞으로의 일정(10-30 약식판결 신청, 11-02 재답변서, 11-09 정부 항소 서면, 구두변론 날짜 지정).
- 32-1: 미국 교육부 인정기관 검색 화면(ope.ed.gov, 비고) 미열람.

## 요약
- block 0건, warn 0건, 삭제 권고 0건
KR-FIT: pass blockers=0 sha256=5842ce1c97136a8c908f46d348ab7798eb6d6f86638e603df2aba7c14b8cbbf0
