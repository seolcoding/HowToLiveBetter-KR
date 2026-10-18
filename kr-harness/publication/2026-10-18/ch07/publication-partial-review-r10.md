# 제07절 partial10 독립 full-source 검토 r10

UTC 2026-10-18T19:30:14.612937+00:00 · manifest SHA `067cf66eafda385b78cda41790cde98e5b428d31bdfc7148149ed8a60e42166f`
현재candidate SHA `48c5d96b9d2c280eabe9ecfedf11cb6674a2ec25ea35c3da1326b2de60d11656`

approve [11, 17] / revise []. 정식KR-FIT·통합·전체절·출판승인아님.

## 제11항 — approve
r6유일수정요청인changes의장래시행일10/28을실검색10/29로정정했다.메타추적키추가외나머지changes객체동일·proposalSHA완전불변을검증했다.이미실조문과대조한본문전필드는그대로이며현재291005/20261002와미래285757/20261029를혼동하지않는다.
- proposal SHA `6e00547d58df1ce6dd888679f726b392a58aaece823ba46091aa6c34cbd7ed06`
- changes SHA `b0ee88acdc2e8c3be00e7674e813d34f9fbf2cf626c4517b9e72b7c924539375`
- strict SHA `7938ba9f5306f69b83e06bd84ee39c42ae776c9fd06ed81e76a7817c71b0b003`
- 초기warn: r6메타날짜revise종결/초기수수료·사진·예외warn전부해소.옛리뷰/원changes보존.
- 실제범위: 앞r6주민령40~42/규칙11·17·18/부칙실본문·실검색4raw와이번메타diff직접대조.새HTTP0/기관별확인서수용·사진실비미확정유지.
- 참조: 11제목/태그·6필드본문전체불변.명시outgoing없음.
- literal {"title_characters": 28, "easy_characters": 76, "easy_sentences": 3, "ordinary_over_50": [], "counting_rule": "공백괄호포함literal/출처서지만제외/진짜immutable인용만별도심사·법명괄호임의면제없음"}

## 제17항 — approve
초기7-17B등급경험조언warn를비고에비용비교/직접요리는경험이며실증근거아님이라고명확히했다.월세관리비/보증금·공과금/이동비·배달비/폐기재료와조리보관조건을비교하며직접요리가무조건싸거나숙식직장이비용전부제거한다고보장하지않는다.주거급여대상임차비감경만제도근거에한정하고한국절감통계미확인을유지했다.
- proposal SHA `2738902dd8f75887956333b5c8468babd3a36b1372721bf98861632d14a7b11f`
- changes SHA `5ec964cc3ff4e6aa02d907f05125c4d893a2f0403a58eda34c6f76a81c2514b0`
- strict SHA `57eb913794ffe57cb71c5fa4094814db6e39cff443a2e0f19a58853a4354c9a4`
- 초기warn: 초기7-17경험과법령근거구분/보호등급오독warn는쉽게와비고명료화로해소.일반절약률국내실증은미확인이라독자명시유지.
- 실제범위: 주거급여실고시본문/부칙직접읽음.중국소비비율29.3/21.7·가격·임금/식당보편개방을이식하지않음.가격절감률/개별임대계약/무료급식자격전수미검증이며비용비교·지역확인권고로제한.
- 참조: 제15절월세와내집마련실제절제목일치/17제목불변.
- literal {"title_characters": 22, "easy_characters": 84, "easy_sentences": 4, "ordinary_over_50": [], "counting_rule": "공백괄호포함literal/출처서지만제외/진짜immutable인용만별도심사·법명괄호임의면제없음"}

## 원자료 직접 열람 기록
캐시 원취득UTC와이번열람UTC를분리한다.원자료/tmp파일은원시bytes그대로외부전용캐시에보존했다.

- {"url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=285733&type=XML&efYd=20260428", "requested_at": "2026-10-18T12:54:15.731250+00:00", "http_status": 200, "entries": [11], "actual_read_scope": "주민령40~42전항및36281·36282부칙직접읽음.전국재발급·전자신청·사진본인확인/확인서원칙사진1장·정보시스템발급예외·본인확인곤란사진단서/분실신고자범위.20260428현행과20261029장래구분. 이번메타r2에서20261029정정·본문불변과재대조.", "id": "raw:0", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/0096e1411929edfcfa3d.raw", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/0096e1411929edfcfa3d.raw", "sha256": "c982515ac3410d8b2f3bcdc61d6eeda3cbac2ae8db8052be59961e5d6a8bda41", "byte_length": 1008580, "actual_fetch_url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=285733&type=XML&efYd=20260428", "source_collected_at_utc": "2026-10-18T12:54:15.731250+00:00", "reviewed_at_utc": "2026-10-18T19:30:14.612937+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}
- {"url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=291005&type=XML", "requested_at": "2026-10-18T12:55:35.680215+00:00", "http_status": 200, "entries": [11], "actual_read_scope": "주민규칙11·17·18전항및621·648부칙직접읽음.일반5000/IC10000·수급자일반면제/IC절반.법27자체결함등별도면제도있어분실상황원칙요금과구분.18②장래개정시행20261029를20261028로기재한changes오류발견. 이번메타r2에서20261029정정·본문불변과재대조.", "id": "raw:1", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/d1a0c93bb7a594b8a163.raw", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/d1a0c93bb7a594b8a163.raw", "sha256": "7c8ad212a248bf64626e2c4c0d9e3e2864832cbcc90d9a58342b0020d5ed8b9d", "byte_length": 806850, "actual_fetch_url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=291005&type=XML", "source_collected_at_utc": "2026-10-18T12:55:35.680215+00:00", "reviewed_at_utc": "2026-10-18T19:30:14.612937+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}
- {"url": "https://law.go.kr/DRF/lawSearch.do?OC=test&target=eflaw&type=XML&query=%EC%A3%BC%EB%AF%BC%EB%93%B1%EB%A1%9D%EB%B2%95%20%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99", "requested_at": "2026-10-18T19:23:02.158607+00:00", "http_status": 200, "entries": [11], "actual_read_scope": "실제검색XML직접읽음.현행주민규칙291005/20261002와시행예정285757/20261029구분. 이번메타r2에서20261029정정·본문불변과재대조.", "id": "raw:2", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-partial-review-r6/8392ac75a06a1ea51b5a.raw", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-partial-review-r6/8392ac75a06a1ea51b5a.raw", "sha256": "6e93de94a1bb455543032aa8fd415befe8de22b483e1c858c4341b39c2f51920", "byte_length": 16297, "actual_fetch_url": "https://law.go.kr/DRF/lawSearch.do?OC=test&target=eflaw&type=XML&query=%EC%A3%BC%EB%AF%BC%EB%93%B1%EB%A1%9D%EB%B2%95%20%EC%8B%9C%ED%96%89%EA%B7%9C%EC%B9%99", "source_collected_at_utc": "2026-10-18T19:23:02.158607+00:00", "reviewed_at_utc": "2026-10-18T19:30:14.612937+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}
- {"url": "https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=eflaw&type=XML&query=%EC%A3%BC%EB%AF%BC%EB%93%B1%EB%A1%9D%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9", "requested_at": "2026-10-18T19:23:42.272698+00:00", "http_status": 200, "entries": [11], "actual_read_scope": "실제검색XML직접읽음.현행주민령285733/20260428과동일MST시행예정20261029구분. 이번메타r2에서20261029정정·본문불변과재대조.", "id": "raw:3", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-partial-review-r6/f1e832df0d86b390e2bb.raw", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-partial-review-r6/f1e832df0d86b390e2bb.raw", "sha256": "b67e2bca0f9c26684f12bc992523d4e992fc3880e0b721db81fc99bec1f807b6", "byte_length": 16221, "actual_fetch_url": "https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=eflaw&type=XML&query=%EC%A3%BC%EB%AF%BC%EB%93%B1%EB%A1%9D%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9", "source_collected_at_utc": "2026-10-18T19:23:42.272698+00:00", "reviewed_at_utc": "2026-10-18T19:30:14.612937+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}
- {"url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000264366&type=XML", "entries": [17], "actual_read_scope": "주거급여2025-506실XML선정기준·임차/수선본문·부칙20260101재독.주거급여대상임차료조건일반지원취지확인.이미지수치/개별선정액·직접요리합가절약률의실증근거아님.이번제안은해당수치추가없이경험권고로한정.앞16HWPX직접표대조와분리.", "id": "raw:4", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/42face5a7417e999cefd.raw", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/42face5a7417e999cefd.raw", "sha256": "530d813b468c954acef60db07dad6786ff3097c784bac26814bce35f31757316", "byte_length": 3431, "actual_fetch_url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000264366&type=XML", "source_collected_at_utc": "2026-10-18T12:54:11.266688+00:00", "http_status": 200, "reviewed_at_utc": "2026-10-18T19:30:14.612937+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}

## 이번 새 HTTPS


## 이전 검토와 제한

[{"path": "/workspace/HowToLiveBetter-KR/kr-harness/publication/2026-10-18/ch07/publication-partial-review-r6.json", "sha256": "e0fb0f2da6ddceb1eac2a390703808ecdfa4925cbce54b92e675f023e31f0ed0", "scope": "11full본문승인·changes날짜만수정대기였던고정리뷰.이번내용불변·메타정정종결."}]
- 고정partial의정확proposal/changesSHA만검토.初기감사/다른항승인/길이통과로전체내용승인대체안함.
- 원시본문/표실열람·검색/메타·실패와기존캐시/신규HTTP구분.취득시각모르면null이며read_at으로바꾸지않음.
- public/제안/strict/candidate/원문/초기canonical/정식formal/pure/gates/Git불변.검토JSON/MD와외부cache만작성.
