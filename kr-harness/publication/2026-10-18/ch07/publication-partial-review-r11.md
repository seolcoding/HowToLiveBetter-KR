# 제07절 partial11 독립 full-source 검토 r11

UTC 2026-10-18T19:32:59.892250+00:00 · manifest SHA `fc0ed6c82199127987c852d7652f2bbe03c946a9260f66dd625df023f752b807`
현재candidate SHA `48c5d96b9d2c280eabe9ecfedf11cb6674a2ec25ea35c3da1326b2de60d11656`

approve [18] / revise [19]. 정식KR-FIT·통합·전체절·출판승인아님.

## 제18항 — approve
실61/91/92와8541부칙8에따라가입10년과출생연도별수급나이·납부예외신청/미산입·추납자격/10년미만을정확히구분한다.분할이자·반환일시금기간배제/반납금예외도보존했다.개별추납보험료와건보자격은따로계산·신청하며중국15년/퇴직건보연한면제를이식하지않았다.2027청년지원/2026년보험료연도별특례를과거수치로새단정하지않는다.
- proposal SHA `4827db1ebb16a6df75ee7b6ed0c5daff6f472ce8f72aa0ff38a34fadee0af02a`
- changes SHA `c8f83aa1c05f298ec1932fde7ac9bb5a41d5ff32df70b7896502f125c3dace03`
- strict SHA `58148882d902543cb34bfd765b123834766e8db5084f1fc9a942c6693620d955`
- 초기warn: 초기7-18가입기간/추납/분할이자·반환예외/건보분리warn보존·신청시가입자와출생연도부칙명료화로해소.
- 실제범위: 국민연금61/91/92·8541/최근각부칙및건보5/110실원문2raw직접읽음.구체추납분할이율·개인납부액·신청절차령전수미검증으로금액추가없음.
- 참조: 9항건강보험자격실제제목/내용일치.18제목불변/incoming보존.
- literal {"title_characters": 36, "easy_characters": 76, "easy_sentences": 3, "ordinary_over_50": [], "counting_rule": "공백괄호포함literal/출처서지만제외/진짜immutable인용만별도심사·법명괄호임의면제없음"}

## 제19항 — revise
초기warn인회생수입만으로자격충족오독은파산원인/염려와신청시15/10억한도보강으로해소했다.법무보호필요성심사·법원비/대리인비·개별소요기간/면책확정·비면책채무도보존했다.다만특별사정5년이하기간을정합니다는611⑤의정할수있다재량을자동설정으로읽힐수있어수정이필요하다.
- proposal SHA `948df400b6e456e0a2228e7c6d3fcd0d00be3be333e198a72d9ef679b413e079`
- changes SHA `077d2defa7842758e98074b8716c96afcefb28042a7e34517767af3fb1b41eba`
- strict SHA `3c5c1c937255dfc324fdde40a7c1a6479d03da31a2230eda30ae33fe86c33f95`
- 초기warn: 초기7-19자격·부채한도·과정기간/비용warn보강완료.새발견611⑤재량표현수정대기.
- 실제범위: 보호관찰법3/65~67·회생파산564/566/579/611/625및신청시점부칙2raw직접읽음.개별법원수가·변호사견적/시설용량·범죄신용기록세부는미확정으로독자상담유보.
- 참조: 19제목불변/명시outgoing없음.형사기록삭제보장없음/특정도시제한을한국에이식하지않음.
- literal {"title_characters": 32, "easy_characters": 80, "easy_sentences": 3, "ordinary_over_50": [], "counting_rule": "공백괄호포함literal/출처서지만제외/진짜immutable인용만별도심사·법명괄호임의면제없음"}
- 수정요건 {"field": "이득", "issue": "611⑤단서의변제기간재량표현손실", "requirement": "특별사정있으면변제개시일부터5년이하로정합니다를정할수있습니다와같은허용/재량표현으로바꿀것.원칙3년이하·5년상한/기산점및나머지필드보존."}

## 원자료 직접 열람 기록
캐시 원취득UTC와이번열람UTC를분리한다.원자료/tmp파일은원시bytes그대로외부전용캐시에보존했다.

- {"url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=280269&type=XML&efYd=20260617", "entries": [18], "actual_read_scope": "국민연금법61/91/92전항·8541부칙8및20903/21146/21203/21689부칙직접읽음.가입10년·출생연도별+1~5세/특수·조기구분,사업장/지역실직휴직사업중단납부예외·미산입/추납가입자10년미만·납부일산입·분할이자·반환일시금/반납금예외.20260617현재와청년지원20270101미래구분/추납금액12월특례임의추가없음.", "id": "raw:0", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/8fb1ccbb92dd941dccef.raw", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/8fb1ccbb92dd941dccef.raw", "sha256": "8f38ebee8e80617ae1430b07c0df1a9abc8d63a8034ec41f7c9081546cd6a5f8", "byte_length": 410108, "actual_fetch_url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=280269&type=XML&efYd=20260617", "source_collected_at_utc": "2026-10-18T12:54:21.629567+00:00", "http_status": 200, "reviewed_at_utc": "2026-10-18T19:32:59.892250+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}
- {"url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=285273&type=XML&efYd=20261008", "entries": [18], "actual_read_scope": "건보법5·110전항/21522부칙직접재독.가입자·피부양자/임의계속별도신청자격/보험료부담이며연금처럼납부연수충족퇴직자동면제아님.이미r4직접검증18개월·1년/2개월·36개월과비고9참조재대조.", "id": "raw:1", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285273.xml", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285273.xml", "sha256": "61d71f01d2824e7332c868f26d4cc9c6ca73ad09b9a3945375ec9ea8972d0bf7", "byte_length": 353154, "actual_fetch_url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285273&type=XML", "source_collected_at_utc": "2026-10-18T12:37:57.198257+00:00", "http_status": 200, "reviewed_at_utc": "2026-10-18T19:32:59.892250+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}
- {"url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=290705&type=XML&efYd=20261002", "entries": [19], "actual_read_scope": "보호관찰법3·65·66·67전항/20751·21490부칙직접읽음.갱생보호형사/보호처분·필요성인정/숙식주거직업가족심리/신청후필요결정.20261002현행과개별지원필요·시설유보.", "id": "raw:2", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/d0cb8cb1c66fcce2f11d.raw", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/d0cb8cb1c66fcce2f11d.raw", "sha256": "a551371c0b4b9a2636a8ec576716af36931737080a41d8d0a09e33419010fc09", "byte_length": 191592, "actual_fetch_url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=290705&type=XML&efYd=20261002", "source_collected_at_utc": "2026-10-18T12:54:22.513791+00:00", "http_status": 200, "reviewed_at_utc": "2026-10-18T19:32:59.892250+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}
- {"url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290631&type=XML", "entries": [19], "actual_read_scope": "회생파산법564/566/579/611/625전항·15158/18084/21490부칙직접읽음.파산원인또는염려·급여정기확실/영업반복소득가능성·신청시담보15억/그밖10억/기본3·특별5상한정할수있다/면책확정·비면책세금벌금양육고의손배등/과거사건신청일적용례.문장정합니다의재량오독발견.", "id": "raw:3", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/e2db437dcf6766c31db7.raw", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch07-audit/e2db437dcf6766c31db7.raw", "sha256": "0f25c76b847f02c2753e0099d9e2102902fd00567a94c5ceb1e09627be3e3bce", "byte_length": 1063768, "actual_fetch_url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290631&type=XML", "source_collected_at_utc": "2026-10-18T12:54:52.276958+00:00", "http_status": 200, "reviewed_at_utc": "2026-10-18T19:32:59.892250+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}

## 이번 새 HTTPS


## 이전 검토와 제한

[]
- 고정partial의정확proposal/changesSHA만검토.初기감사/다른항승인/길이통과로전체내용승인대체안함.
- 원시본문/표실열람·검색/메타·실패와기존캐시/신규HTTP구분.취득시각모르면null이며read_at으로바꾸지않음.
- public/제안/strict/candidate/원문/초기canonical/정식formal/pure/gates/Git불변.검토JSON/MD와외부cache만작성.
