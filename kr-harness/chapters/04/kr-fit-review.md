# 제4절 한국 실정 적합성 검토
11차 검토(38차 조사 반영 뒤 재검토) · 직전 판정: 10차(2026-10-22, pass, warn 0)
검토일: 2026-10-25 · 검토 대상: book-kr/04-시간-낭비-줄이기.md (18항목)

## 검토 범위와 근거

- 10차 리뷰 이후 바뀐 곳(`git diff`로 대조): 제7항 출처(Hadjichristidis 등 2014 추가), 제7항 비고, 절 끝 `## TODO 확인 필요`의 제7항 줄. 이 세 곳만 원문을 직접 열어 대조했다. 나머지 문장은 10차 판정을 따른다(「직전 리뷰에서 확인, 문장 변경 없음」).
- 제7항 「쉽게」 칸과 「이득」 칸은 바뀌지 않았다. 「쉽게」 칸에 이득 칸에 없는 숫자가 새로 들어가지 않았다(숫자 없음).
- 기계 검사 `kr-fit.mjs 04`: block 0 · warn 0.
- 시작 해시와 종료 해시 모두 5c760c435ae2eb96a1710a9c7fe4a9b56431ab190b25a11b6e1b5ca2db4384e5.

## 항목별 판정

### 4-1. 「하기로 했다」를 「몇 시에, 어디서, 무엇을 할지」로 적으세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-2. 시작하기 전에 그만두는 조건을 적어 두세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-3. 계속할지 말지는 앞으로 들어갈 몫과 돌아올 몫으로만 정하세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-4. 기한을 잡을 땐 지난번 비슷한 일의 실제 소요시간을 보세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-5. 회의 전에 안건을 돌리세요. 안건 없는 회의는 열지 마세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-6. 회의 수를 줄이고, 글로 끝나는 일은 회의하지 마세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-7. 큰 일은 잘게 쪼개서 시간을 잡고 시작하세요
- 판정: 적합.
- 확인한 것(바뀐 문장):
  - 서지: Crossref `https://api.crossref.org/works/10.1016/j.jesp.2013.10.009` → 제목 「Unpacking estimates of task duration: The role of typicality and temporality」, Journal of Experimental Social Psychology 51권 45-50쪽, 2014년 3월, 저자 Hadjichristidis·Summers·Thomas. 본문 출처와 같다. 랜딩 https://eprints.bournemouth.ac.uk/21338/ 은 HTTP 200.
  - 사전인쇄본 https://eprints.bournemouth.ac.uk/21338/4/Unpacking_estimates_of_task_duration_(JESP_paper)_-pre-print_version.pdf 를 내려받아 텍스트로 대조했다.
  - 「이 실험을 이어받은 연구」: Study 1 「We tested H1 using a modified version of Kruger and Evans's (2004) document formatting task」. 맞다.
  - 「문서 서식을 바꾸는 데 걸릴 시간을 상상해 예상하게 했습니다」: 「its unformatted equivalent, that they had to imagine opened as an MS Word document. Their task was to estimate the time (minutes) it would take them to do all formatting changes」. 맞다.
  - 숫자: Table 1(Study 1) 「Unpacked Short 51 6.24 (4.57) … Packed 50 8.48 (6.26) … Unpacked Long 51 12.73 (8.65)」. 본문의 8.48분(50명), 12.73분(51명), 6.24분(51명)과 모두 같다. 「그냥 물으면」은 packed 조건 「asked to estimate the time … to make the unformatted text look identical」과 맞다.
  - 「통계로 뚜렷한 차이는 짧은 단계 조건과 나머지 두 조건 사이였습니다」: p.7 「Multiple comparisons (Bonferroni corrected) revealed significant differences between the unpacked-short and packed conditions (p = .019) and between the unpacked-short and unpacked-long conditions (p < .001).」 packed와 unpacked-long 사이는 유의로 보고되지 않았다. 본문 서술과 맞고, 12.73분 증가를 뚜렷한 효과로 단정하지 않는다.
  - 「누구나 떠올릴 단계를 적어 준 실험에서는 예상이 달라지지 않았습니다」: 초록 「Unpacking typical early or late components leaves estimates unaffected (Study 3).」, Study 3 본문 「no significant difference between conditions (n.s.) … typical unpackings do not affect task duration estimates.」 Study 3은 데이트 준비 과제이고 본문도 같은 과제라고 하지 않으므로 맞다.
  - 「이 연구는 실제 걸린 시간은 재지 않았습니다」: Study 1 절차는 추정만 받고 실제 서식 작업을 시키지 않는다. 맞다.
  - 「Kruger와 Evans 원 논문의 백분율은 확인하지 못했습니다(TODO 확인 필요)」: 단정하지 않는 표시이고 절 끝 TODO 목록과 맞는다.
- 참고(판정에 영향 없음): Study 1에서 적어 준 단계는 논문상 「atypical」(사람들이 스스로 잘 떠올리지 않는) 단계다. 본문은 Study 3의 「누구나 떠올릴 단계」와 대비만 하고 Study 1 쪽 성격은 적지 않았다. 다듬을 때 「잘 떠올리지 않는 단계 가운데 오래 걸리는 것」처럼 한 마디 붙일 수 있다.
- 한국 제도·기관·번호와 무관한 심리학 근거라 한국 적합성 문제는 없다.

### 4-8. 남이 정한 마감이 없는 일에는 스스로 날짜를 정하세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-9. 미루기를 게으름이 아니라 불편함을 피하는 것으로 보세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-10. 쓸 물건은 가까이 두고, 만지고 싶은 것은 멀리 두세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-11. 해내고 싶으면 돈을 걸어 보세요. 단, 걸 수 있는지부터 물으세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-12. 새 습관은 개월로 세세요. 「21일」은 버리세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-13. 미루기가 삶을 무너뜨리면 무작위시험 근거가 있는 자조 교재를 쓰세요. 상담사를 꼭 찾을 필요는 없습니다
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-14. 제 시급을 기준으로 어느 집안일을 맡길지 정하세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-15. 짧은 영상과 목적 없는 스크롤에 상한을 두세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-16. TV와 실시간 뉴스는 끊고, 필요한 정보는 정해 놓고 모아 보세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-17. 자주 쓰는 프로그램의 단축키와 자동화에 한 번 투자하세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 4-18. 집을 고를 때는 출퇴근 시간부터 보세요. 편도 통근을 줄이세요
- 판정: 적합 — 직전 리뷰에서 확인, 문장 변경 없음.

### 절 끝 TODO 목록
- 판정: 적합 — 제7항 한 줄(Kruger·Evans 실험별 증가 폭, 공개 사본 미발견, 재현 연구로 대신 채움)이 본문 비고의 인라인 TODO와 맞고, 배너 「TODO 1건」과도 맞는다.

## 요약
- block 0건, warn 0건, 삭제 권고 0건.
- 미확인으로 남긴 판정: 제7항 Kruger·Evans(2004) 원 논문의 실험별 증가 폭 — 본문은 「확인하지 못했습니다(TODO 확인 필요)」로 단정하지 않으며 절 끝 TODO 목록에 올라 있다.
- 종료 해시는 시작 해시와 같다.
KR-FIT: pass blockers=0 sha256=5c760c435ae2eb96a1710a9c7fe4a9b56431ab190b25a11b6e1b5ca2db4384e5
