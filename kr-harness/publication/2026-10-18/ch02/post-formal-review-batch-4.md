# 제2절 post-formal batch4 독립 최소안 검토

검토일 2026-10-19 Asia/Seoul (2026-10-18T15:10:43.959170+00:00 UTC). **approve3 / revise0**. 정확최소안만 승인하며 적용·새정식KR-FIT가 아닙니다.

현재 public raw `b580b637d34819b9de1169d80093a9d953a5298ca1e7d84a34a70a63b270949a`, manifest SHA `a6f863b793d600d62bc0253f3fb14d5e83acc718a818eb65e4c6ef198972f481`를 직접계산했습니다. 각현재항 전체·제안전체·변경목록을 읽고 실제 SHA를 대조했습니다.

## 제11항: approve

실제 KDCA첨부 PDF34/38쪽에서 성인19~64·노인65+의 중강도유산소150~300분/고강도75~150분·혼합가능 및 노인기능예외를 다시읽었습니다. 제안은 걷기/활동시간 맥락의 유산소 권고 보강이며 걸음시간 정확환산이나 한국지침 전체의 걷기충족을 주장하지 않습니다. 기존 모든 연구분모·HR·관찰한계는 불변입니다.

- 현재entry `732c9758957cda416b9d39f7592113351ac6145ab86c468bcbce6a4f51dc214d`
- 제안 `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-011-ed84/publication-formal-correction-r2.md` / `4df4e76f0118266d717a1f9e528633e18073c1914bd5e60a23f32b5bdbd4355b`
- changes `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-011-ed84/publication-formal-correction-changes-r2.json` / `a6a123c2bfcd16a46ed27849725a79dadfd1625ac88d5bf0d883477e38d46041`
- 명시before/after만 적용하면 제안전체와 바이트일치. 제목·태그·등급·출처·구분공백·비변경정량/조건/경고 보존. 쉽게115자, 신규문장최대39자.

## 제20항: approve

정신건강진료 일괄급여·며칠입원 단정을 삭제하고 개별 환자·치료·급여기준·의료진 판단으로 제한합니다. 새 국내급여/입원자료 확인이 아닙니다. 쉽게의 중증금단 즉시응급진료·본인의존평가·자가금주주의·의학수치는 보존합니다. 비용확인문장을 응급진료보다 우선시키는 뜻으로 승인하지 않습니다.

- 현재entry `50ca8ca70d49ff8f8dfd0472a5f253c81d9511a34695e41729b993e0d2c82a42`
- 제안 `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-020-e74f/publication-formal-correction-r2.md` / `07d015c3eded18155198500b95c87d86498a67db28cff8bc487e6bbfb6a3fcc9`
- changes `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-020-e74f/publication-formal-correction-changes-r2.json` / `d558ff93d06dc24d1e4dfa05a92e7f7393a44cee7fa060dcbc6fde14e34e3590`
- 명시before/after만 적용하면 제안전체와 바이트일치. 제목·태그·등급·출처·구분공백·비변경정량/조건/경고 보존. 쉽게112자, 신규문장최대35자.

## 제34항: approve

일일몇천원 단정을 국내가격 미확인·제품가격과섭취량 비교로 바꿉니다. 국내 유제품권장량·가격 확인성공이 아니고 PURE연구의 회분/총유제품/관찰한계와 유당불내증주의를 보존합니다.

- 현재entry `39ecad1caee8a72af982c7e297156cc3f305b16ecea24da39e27260ee2488598`
- 제안 `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-034-cb01/publication-formal-correction-r2.md` / `4cbe1400d316474133a69ea437d72f0672141a1708f20307129e21b87b89fb0c`
- changes `/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch02/_workspace/2026-10-18-034-cb01/publication-formal-correction-changes-r2.json` / `7861e1306d1a474aacb20e9f653c8caa16d244ff254f458acfaa0dd4bf5740ef`
- 명시before/after만 적용하면 제안전체와 바이트일치. 제목·태그·등급·출처·구분공백·비변경정량/조건/경고 보존. 쉽게81자, 신규문장최대27자.

## 실제열람과한계

검토자의 신규HTTP 없음. 원저자의 신규수집 KDCA HTML/PDF/TXT를 기존raw로 열람했습니다. pdftotext -f34 -l34 및 -f38 -l38 stdout를 실제 읽었습니다. PDF SHA dbae305ba931cb6ad8a5ca124a340a3994c572fa44ebb7975f49440aaa476785, TXT SHA9999fe05bfd40de67125ddf516e9b9618b8643988354e0c173b3e76a31c5dcac, HTML SHA6486731c28d39c8a73938607edd1d24ac79dc28c0fdc8bc7f99af88eaac76cc8 일치. 법·기관출처가 없는 #20/#34는 새급여/가격검증으로 세지 않습니다.

실제첨부 [KDCA PDF](https://is.kdca.go.kr/cscdnhfile/health/healthNewDown/fileDown.do?SEQ=18c06bd6d605), 로컬 `/tmp/ch02-entry11/kdca-guideline.pdf` 34/38쪽의 “중강도 유산소…150-300분 또는 고강도…75-150분”, 혼합수행 문장과 노인 “체력 및 신체기능에 맞게 가능한 만큼”을 읽었습니다. 이 두 쪽에는 근력/평형운동 등 다른 권고도 있어 걷기만으로 지침전체를 충족한다는 승인으로 확대하지 않습니다. 시간비용환산·Banach정정문은 여전히 미확인입니다.

공개본문 b580…는 검토전후 불변입니다. 기존 정식리뷰·감사·결정·후보·제안·public·git을 바꾸지 않았습니다. ROOT가 현재해시 guard로 적용한 뒤 바뀐현재내용 재열람과 새CLI해시 정식판정이 필요합니다.
