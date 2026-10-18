# 제07절 partial13 독립 full-source 검토 r13

UTC 2026-10-18T19:36:03.686201+00:00 · manifest SHA `14b2287a6b63dbb7cfcc6c35e60c9f19afed354184d60657bdd5910722d08540`
현재candidate SHA `48c5d96b9d2c280eabe9ecfedf11cb6674a2ec25ea35c3da1326b2de60d11656`

approve [] / revise [22]. 정식KR-FIT·통합·전체절·출판승인아님.

## 제22항 — revise
초기7-22근로자/개인사업주·등록유무/직접가사·동거친족만제외·인증기관별도법과민사소송/집행비용·보수제한/자산회수유보를충실히보강했다.44의2건설요건·상위최하위건설사업자도정확하다.그러나직상수급인을바로위단계수급인으로만정의해44①의도급한차례이면도급인으로본다는특례가누락됐다.독자가단일도급을책임범위밖으로오독하지않게수정해야한다.
- proposal SHA `7dd96cf07d758765e3c7a9ae0e1470385e2987706aca81ae3b527f073bf13bc6`
- changes SHA `daecc1884514fee7a4dbc9fb567c71c21b866e61e718a27a339bf482b7fd7c39`
- strict SHA `05e3dcda40d39767a25bd533d535f3d1fa868394f7a3415e3596a9a1612dc724`
- 초기warn: 초기7-22전warn/절차비용·회수한계보강완료.새44①예외복원대기.
- 실제범위: 5실XML지정전조항/시행부칙직접읽음.현재20261008/미래20270101·민소20280301구분.개별근로자성/귀책판례·요금전수미확정이며본문상담으로한정.중국원청자동전액책임/무료/민사전형6개월을이식하지않음.
- 참조: 2항임금체불/3항법률구조실제제목내용일치.22제목실제고용관계보존하여intro/2항incoming일치.
- literal {"title_characters": 30, "easy_characters": 89, "easy_sentences": 3, "ordinary_over_50": [], "counting_rule": "공백괄호포함literal/출처서지만제외/진짜immutable인용만별도심사·법명괄호임의면제없음"}
- 수정요건 {"field": "이득", "issue": "44①단일도급직상수급인정의예외누락", "requirement": "도급이한차례이면도급인을직상수급인으로보고수급인을하수급인으로본다는조건을짧게추가.44귀책조항과44의2건설2차례이상별도요건을혼동하지않을것.기존비용/예외/refs보존."}
- 수정요건 {"field": "changes.이득.before", "issue": "legacystrict개행·들여쓰기를공백으로합쳐literalbefore불일치", "requirement": "실제strict필드의개행·들여쓰기를포함한before_raw또는정확before를기록하고정규화된before와구분.원strict는수정하지않음.실제문자열불일치는reportstructure.before_mismatches참조."}

## 원자료 직접 열람 기록
캐시 원취득UTC와이번열람UTC를분리한다.원자료/tmp파일은원시bytes그대로외부전용캐시에보존했다.

- {"url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=285279&type=XML&efYd=20261008", "entries": [22], "actual_read_scope": "근기법2·11·44·44의2전항/21533·21472부칙실재독.사용자개인포함/직접가사·동거친족만제외/44단일도급시하수급인=수급인·직상수급인=도급인예외·귀책상위연대/44의2건설2차례이상·건설사업자아닌하수급의해당공사임금·직상비건설시상위최하위건설사업자.미래44의4임금분리지급20270101현재와구분.", "id": "raw:0", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285279.xml", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285279.xml", "sha256": "222fd311aa29570bf0045061e332c9b6696b49427a4ae8f17540763866b36c2e", "byte_length": 248381, "actual_fetch_url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285279&type=XML", "source_collected_at_utc": "2026-10-18T12:37:57.424991+00:00", "http_status": 200, "reviewed_at_utc": "2026-10-18T19:36:03.686201+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}
- {"url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=232959&type=XML&efYd=20220616", "entries": [22], "actual_read_scope": "가사근로자법2·3·5전항/제정시행부칙실재독.인증제공기관근로계약·이용자계약과직접가정고용구별/근로관계적용.사업자등록으로근로자성자동판정없음.", "id": "raw:1", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/2c5998100ed8e3def674.raw", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/2c5998100ed8e3def674.raw", "sha256": "39bdbcb902d381d8abcb846432a2a8fb99bf8e5be58c338f8de7ad7cfc4fc834", "byte_length": 63557, "actual_fetch_url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=232959&type=XML", "source_collected_at_utc": "2026-10-18T12:55:35.680779+00:00", "http_status": 200, "reviewed_at_utc": "2026-10-18T19:36:03.686201+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}
- {"url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=290113&type=XML&efYd=20261002", "entries": [22], "actual_read_scope": "민소98/109전항/21455·21993부칙재독.패소원칙비용부담·보수규칙인정액/한변호사기준.20261002현재와해사관할20280301미래구분.", "id": "raw:2", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290113.xml", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290113.xml", "sha256": "dd6228b88d970e33b979d0d9e59c5b74f6f45958c01dcab79e034334365fbc92", "byte_length": 538397, "actual_fetch_url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290113&type=XML", "source_collected_at_utc": "2026-10-18T12:38:24.090334+00:00", "http_status": 200, "reviewed_at_utc": "2026-10-18T19:36:03.686201+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}
- {"url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=225413&type=XML&efYd=20201228", "entries": [22], "actual_read_scope": "변호사보수비용산입규칙3/6전항·부칙실재독.실제지급보수액내심급별소가/별표기준·현저부당감액또는신청증액재량.전액회수보장없음.구체사건소가수가미확정.", "id": "raw:3", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/205b7388dcdd447deada.raw", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/205b7388dcdd447deada.raw", "sha256": "b6fed84c2a5a5ce636850c5ef3b85eb0795e92cf4390f54e6a89c2aaec6fd051", "byte_length": 22061, "actual_fetch_url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=225413&type=XML&efYd=20201228", "source_collected_at_utc": "2026-10-18T12:54:03.039855+00:00", "http_status": 200, "reviewed_at_utc": "2026-10-18T19:36:03.686201+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}
- {"url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=268837&type=XML&efYd=20260201", "entries": [22], "actual_read_scope": "민사집행18/53전항·최근부칙재독.신청시법원정한집행비용예납/불납각하취소가능·필요집행비용채무자부담/우선변상·판결파기시반환.승소해도상대자산없으면실회수보장없음.", "id": "raw:4", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/c48226fbd549eccbc620.raw", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/c48226fbd549eccbc620.raw", "sha256": "e85b1c66c027d60c73cef3a7067b0593f6612eb47a27f532e477d0d3c77900c7", "byte_length": 403897, "actual_fetch_url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=268837&type=XML", "source_collected_at_utc": "2026-10-18T12:54:51.026633+00:00", "http_status": 200, "reviewed_at_utc": "2026-10-18T19:36:03.686201+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}

## 이번 새 HTTPS


## 이전 검토와 제한

[]
- 고정partial의정확proposal/changesSHA만검토.初기감사/다른항승인/길이통과로전체내용승인대체안함.
- 원시본문/표실열람·검색/메타·실패와기존캐시/신규HTTP구분.취득시각모르면null이며read_at으로바꾸지않음.
- public/제안/strict/candidate/원문/초기canonical/정식formal/pure/gates/Git불변.검토JSON/MD와외부cache만작성.
