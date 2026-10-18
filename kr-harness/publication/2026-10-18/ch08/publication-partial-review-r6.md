# 제08절 partial6 독립 full-source 검토 r6

UTC 2026-10-18T19:31:34.359528+00:00 · manifest SHA `bd0ba867dbac7ece0dfeb7c5741bd3389e70f698cfce0d26504722fd8e607a90`
현재candidate SHA `df979c3d91ba44157603401a4894cff6d0d9eb9d01a7778e43c11cf49de4e017`

approve [] / revise [9]. 정식KR-FIT·통합·전체절·출판승인아님.

## 제9항 — revise
금융주체·정당사유·지체없는제공이용중단후조사·사실다름/미확인삭제정정·처리결과7일통지를실조문과정확히대조했다.크레딧포유무료대출/연체/보증도실기관본문으로확인.그러나비고첫문장의중국연2회무료·20일답변은한국독자에게필요없는원문변환메모와외국수치를남겨한국출판문체기준에맞지않는다.한국7일처리결과/비보장설명이이득에이미있어삭제로의미손실이없다.
- proposal SHA `783042df23d8715de242c6ff5e328f4c3d3118319bd025bee53ef80be40186d4`
- changes SHA `0fc78b7f7bac8af064b34cba681bb961479052cb2362829366acd0dea7c43fad`
- strict SHA `0fafbebae141a45375a014a0b91574032b468d011a3a2a533bc14e5a821348ee`
- 초기warn: 초기8-9법적7일/정정비보장warn및공식무료본문검증은해소.새필수편집중국변환잔재삭제만남음.
- 실제범위: 법38/20의2및21445부칙·기관실HTML2raw직접읽음.새HTTP0/개인로그인내역·모든보관기간/최신개별고시전수미확정.중국수치의현행성을검증한것아님.
- 참조: 9제목불변/원문45참조는strict에서이미삭제된상태를유지하며새출처DOI변동없음.명시outgoing없음.
- literal {"title_characters": 27, "easy_characters": 77, "easy_sentences": 3, "ordinary_over_50": [], "counting_rule": "공백괄호포함literal/출처서지만제외/진짜immutable인용만별도심사·법명괄호임의면제없음"}
- 수정요건 {"field": "비고", "issue": "불필요한중국제도·수치대비메모", "requirement": "첫문장중국연2회무료·20일답변규칙비적용을삭제.이득의한국기관/7일통지와한계·모르는거래확인/명의도용신고권고는보존.새금액이나제도추가불필요."}

## 원자료 직접 열람 기록
캐시 원취득UTC와이번열람UTC를분리한다.원자료/tmp파일은원시bytes그대로외부전용캐시에보존했다.

- {"url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283841&type=XML", "entries": [9], "actual_read_scope": "신용정보법38①~⑧/20의2전항및21445부칙직접읽음.본인확인열람·사실다른정정청구·정당사유인정시지체없이제공이용중단/조사·삭제정정/처리결과7일통지.7일내모든조사정정완료보장아님.20의2상거래종료후최장5년및목적달성3개월/법률의무·재산보호·가명정보등예외·위임구분.20260911현행.", "id": "raw:0", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283841.xml", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283841.xml", "sha256": "3ba19a1070fd85bd04b03b7d7031997464613b09e59096ccc000a8d5cfd1b058", "byte_length": 371436, "actual_fetch_url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283841&type=XML", "source_collected_at_utc": "2026-10-18T12:37:50.267371+00:00", "http_status": 200, "reviewed_at_utc": "2026-10-18T19:31:34.359528+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}
- {"url": "https://www.credit4u.or.kr/", "entries": [9], "actual_read_scope": "한국신용정보원credit4u실제HTML전체직접읽음.본문무료조회/대출·연체·보증·보험·개인인증로그인메뉴안내확인.개별로그인거래/실제정정신청결과를열람한것아님.검색shell이아닌공식기관실본문.", "id": "raw:1", "original_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch08-audit/credit4u.raw", "retained_raw_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch08-audit/credit4u.raw", "sha256": "975a68101a3060e2faf20726d481604d188a6282cb7780ee93ba3bbce37765c6", "byte_length": 54779, "actual_fetch_url": "https://www.credit4u.or.kr/", "source_collected_at_utc": null, "http_status": null, "reviewed_at_utc": "2026-10-18T19:31:34.359528+00:00", "reviewer_method": "cached_primary_artifact_independently_read_not_new_HTTP_this_batch"}

## 이번 새 HTTPS


## 이전 검토와 제한

[]
- 고정partial의정확proposal/changesSHA만검토.初기감사/다른항승인/길이통과로전체내용승인대체안함.
- 원시본문/표실열람·검색/메타·실패와기존캐시/신규HTTP구분.취득시각모르면null이며read_at으로바꾸지않음.
- public/제안/strict/candidate/원문/초기canonical/정식formal/pure/gates/Git불변.검토JSON/MD와외부cache만작성.
