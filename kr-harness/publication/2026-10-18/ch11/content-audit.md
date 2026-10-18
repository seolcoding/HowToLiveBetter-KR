# 제11절 출판 전 원자료 감사

- 검토일:2026-10-18 · 상태:pending_candidate_review · source.md SHA256 `190f1bfb76853df9cee7f4a460f7f8a96d8eae39482fcbe352c65c6e8045c1fe`.
- source.md/manifest.json/19개 entry_snapshot.md를 읽고 스냅샷의 본문 포함 및 manifest source 해시 일치를 확인했습니다. 아직 후보가 없어 후보해시·현재before·필드별 approve/revise/reject를 확정하지 않습니다. 편집감사와 정식 KR-FIT는 다르며 이 문서로 게이트 통과를 주장하지 않습니다.
- 의학연구·DOI·대상집단 효과추정은 이 절에 없습니다. 분모는 법정5만명·기간·이득액 등의 적용범위로 검증했습니다. 중국 VPN금지 대체는 omit/add 주석과 현행 한국 위치정보법을 대조했고 중국법의 금액·범죄기준을 이식하지 않았습니다.
- 전19항의 범위는 아래와 같습니다. 기존 법령XML 캐시를 읽은 경우 retrieval_mode=existing_cache_read이며 새 HTTP확인으로 세지 않았습니다. 신규요청은 TLS인증을 유지했고 raw는 저장소 밖 ch11-audit/에 보존했습니다. 최초실패와 재시도성공을 sources.json/sources-retry.json/additional.json에 구분했습니다.

## 항목별 대조

### 제1항 — verified_scope
- 확인범위: 30 / 200의2⑤ / 201의2⑦⑧ / 202 / 203 / 203의2 / 205 / 214의2 / 243의2.
변호인선임·신문참여, 체포48시간, 경찰10일/검사 인치후10일/1차10일 연장, 기산일과 영장심사 불산입, 국선 범위를 본문과 대조했습니다. 기소후 구속기간 합계로 확대하지 않습니다. 선임비·대응시간을 유지합니다.
- 짧은인용: “정당한 사유가 없는 한”.
- law 290189: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290189&type=XML · UTC 2026-10-18T12:38:26.047262+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290189.xml` · SHA256 `f917fd5794540a55cc19ef2b94e5142ee97cdaafc9215827fa653b6c275ab9fa`.

### 제2항 — verified_scope
- 확인범위: 32①8~10 / 44①2 / 46제3의2호 / 판시사항·판결요지·이유.
미승인 도구/정상운영 방해 목적 및 배포목적제작1년/1천만원, 사설게임 제공/목적제작5년/5천만원 확인. 2019도2862는 게임이미지 인식 자동조준·데이터변경없음·장애증거없음의 악성프로그램 판단 파기환송입니다. 게임산업법까지 무죄확정이라는 확대를 금지합니다.
- 짧은인용: “정상적인 운영을 방해할 목적으로”.
- law 265811: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=265811&type=XML · UTC 2026-10-18T13:16:52.714090+00:00 · HTTP 200 · new_https_retry · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/law-265811-retry.xml` · SHA256 `6e41f58c5b0a9b4dca3fc1a474e8ad4d600878703f40b13eade5201456752c61`.
- prec 214311: https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=214311&type=XML · UTC 2026-10-18T13:15:46.602047+00:00 · HTTP 200 · new_https · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/prec-214311.xml` · SHA256 `cc32c0534be2e4fd99f8e14acb30c82dab1aeb196e3d0dbbe7aafd259556779d`.

### 제3항 — verified_scope
- 확인범위: 공연4의2·4의4·41 / 체육6의2·6의4·49의2 / 형법314 / 판시사항·요지·이유.
부정구매는 정보통신망에서 최초판매자의 공정구입과정을 우회방해해 재판매목적으로 구입, 부정판매는 동의없이 상습/영업·구입가 초과판매/알선입니다. 1년/1천만원 및50배이하 과징금 확인. 2017도16520은 자동광고/댓글 프로그램의 악성프로그램성에 대한 형사무죄이며 순위조작 일반 면책이 아닙니다.
- 짧은인용: “판매금액의 50배 이하”.
- law 283673: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283673&type=XML · UTC 2026-10-18T12:37:49.110921+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283673.xml` · SHA256 `369ccce122c47edb4481dce1820f1487d5eeea257bb91c16884ed1250f0f9528`.
- law 286627: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=286627&type=XML · UTC 2026-10-18T12:38:06.233574+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/286627.xml` · SHA256 `69f0b792ad02d2ab9a30801ebea453145a59713501005cf69f20847e6b23c1c6`.
- law 290185: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290185&type=XML · UTC 2026-10-18T12:38:25.603245+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290185.xml` · SHA256 `391f3c2bb7173fff4040eda9ae2259674b616e58aeadf4371206b63c70f1c89b`.
- prec 225803: https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=225803&type=XML · UTC 2026-10-18T13:15:52.311119+00:00 · HTTP 200 · new_https · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/prec-225803.xml` · SHA256 `f9fc1f5205d763f10b680b86b9def5c5e97be58bc14814da1079f81c8ae5bcf8`.

### 제4항 — verified_scope
- 확인범위: 망48①·71①11 / 저작권93·136 / 개인정보15·17·59제1호·72제2호 / 판시사항·요지·이유.
접근침입5년/5천만원, 부정수단 개인정보취득3년/3천만원 확인. 2021도1533의 API URL은 적극공개는 아니지만 쉽게 식별·보호조치없이 회원/비회원 접근 가능했습니다. 공개API라는 요약을 누구나 모든API 이용허락으로 확대하지 않습니다. 데이터베이스 양적/질적 상당부분·체계반복복제와 민사별개 유보 유지.
- 짧은인용: “상당한 부분”.
- law 290001: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290001&type=XML · UTC 2026-10-18T12:38:22.876633+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290001.xml` · SHA256 `9a5b1491c704ab556b864385d0374ce13f283ccc19d8f9a43389c501a9e6578b`.
- law 283335: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283335&type=XML · UTC 2026-10-18T12:37:44.576976+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283335.xml` · SHA256 `6a429f0550556154dcad808d032185e92b6ffdf3f40d791439b14129e1ee929d`.
- law 283839: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283839&type=XML · UTC 2026-10-18T12:37:49.895011+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283839.xml` · SHA256 `6d1f5a3a40b177bef82c56d4aeb0d37524c46b550a7997128fb9435555ce748f`.
- prec 221765: https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=221765&type=XML · UTC 2026-10-18T13:15:48.947370+00:00 · HTTP 200 · new_https · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/prec-221765.xml` · SHA256 `086c515fc99e75d3adbd636c79ce93ed572924fa8572356e3236279f83075869`.

### 제5항 — verified_scope
- 확인범위: 체육26②1·48제4호 / 형법32·247 / 전자6③·49④.
유사 스포츠투표 발행시스템 설계제작유통공중제공5년/5천만원 확인. 일반 개발외주 전체를 금지하지 않고 범죄인식·도움과 접근매체 양도/대가 또는 범죄인식 대여5년/3천만원을 구분합니다. 계정해제 대행판례는 미조사입니다.
- 짧은인용: “설계ㆍ제작ㆍ유통”.
- law 286627: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=286627&type=XML · UTC 2026-10-18T12:38:06.233574+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/286627.xml` · SHA256 `69f0b792ad02d2ab9a30801ebea453145a59713501005cf69f20847e6b23c1c6`.
- law 290185: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290185&type=XML · UTC 2026-10-18T12:38:25.603245+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290185.xml` · SHA256 `391f3c2bb7173fff4040eda9ae2259674b616e58aeadf4371206b63c70f1c89b`.
- law 290247: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290247&type=XML · UTC 2026-10-18T12:38:28.240394+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290247.xml` · SHA256 `440b67551a3f1f6119dba38469ca843ac06c55619e8aa59f3b7819c05368a621`.

### 제6항 — revision_recommended
- 확인범위: 망48①③④·49·71 / 형법314·366 / 근로36 / 판시사항·요지·이유.
망침입/인증우회장치/타인정보훼손5년/5천만원과 업무방해5년/1천500만원, 퇴직금품14일 확인. 지급기일 연장은 합의 외에 근로36의 특별한 사정 조건도 보강하세요. 2005도870은 군 상관계정으로 협박성 이메일 전송 사건이며 퇴사계정판례로 소개하지 않습니다.
- 짧은인용: “특별한 사정이 있을 경우”.
- law 290001: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290001&type=XML · UTC 2026-10-18T12:38:22.876633+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290001.xml` · SHA256 `9a5b1491c704ab556b864385d0374ce13f283ccc19d8f9a43389c501a9e6578b`.
- law 290185: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290185&type=XML · UTC 2026-10-18T12:38:25.603245+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290185.xml` · SHA256 `391f3c2bb7173fff4040eda9ae2259674b616e58aeadf4371206b63c70f1c89b`.
- law 285279: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285279&type=XML · UTC 2026-10-18T12:37:57.424991+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285279.xml` · SHA256 `222fd311aa29570bf0045061e332c9b6696b49427a4ae8f17540763866b36c2e`.
- prec 216531: https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=216531&type=XML · UTC 2026-10-18T13:15:48.283054+00:00 · HTTP 200 · new_https · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/prec-216531.xml` · SHA256 `9ddf466e277c11fe4184d8fee61435aecbfa742a87527f8a21c62dccce992467`.

### 제7항 — revision_required
- 확인범위: 부정경쟁2제2호·18①② / 산업14·36① / 판시사항·요지·이유.
필수: 국내침해도18② 단서상 이득액10배가5억원을 초과하면 이득액2~10배 벌금이므로 국내5억원이 고정상한이라는 문장을 수정하세요. 해외15년/15억원 및 이득액예외, 국가핵심기술 외국사용인식3년이상+65억원이하 벌금 병과 확인. 2017도3808은 재직반출/퇴사시 반환거부의 배임과 퇴사후 이용의 별도배임 불성립을 구분합니다. 이득줄 continuation도 최종6필드 구조에서 확인해야 합니다.
- 짧은인용: “재산상 이득액의 2배 이상 10배 이하”.
- law 277201: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=277201&type=XML · UTC 2026-10-18T12:37:24.007461+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/277201.xml` · SHA256 `025c1b30ee981d96772245f66b7577cda416da8363e1e1ca0c7afbc731494d04`.
- law 280043: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280043&type=XML · UTC 2026-10-18T12:37:31.948768+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/280043.xml` · SHA256 `f70aacd3873c6a3a66d463c0a929eed0184e01f06d6998627d3d14ca7c5f30d6`.
- prec 185254: https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=185254&type=XML · UTC 2026-10-18T13:15:46.599248+00:00 · HTTP 200 · new_https · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/prec-185254.xml` · SHA256 `0e2e3ec66b4b5c891373a82da3315be3d3be26a1308ee5c8e1faf5e87a8bce9c`.

### 제8항 — verified_scope
- 확인범위: 망48①②③·70의2·71 / 형법314.
무단침입·운영방해목적 장애5년/5천만원, 정당사유없는 악성프로그램 전달유포7년/7천만원 확인. 채굴기기수로 일괄 면책하지 않으며 단순회사자원 사용과 침입 구성요건을 구분합니다. 무단채굴 확정판례는 미조사입니다.
- 짧은인용: “7년 이하의 징역 또는 7천만원”.
- law 290001: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290001&type=XML · UTC 2026-10-18T12:38:22.876633+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290001.xml` · SHA256 `9a5b1491c704ab556b864385d0374ce13f283ccc19d8f9a43389c501a9e6578b`.
- law 290185: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290185&type=XML · UTC 2026-10-18T12:38:25.603245+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290185.xml` · SHA256 `391f3c2bb7173fff4040eda9ae2259674b616e58aeadf4371206b63c70f1c89b`.

### 제9항 — verified_scope
- 확인범위: 망48①·71② / 판시사항·요지·이유.
침입미수 처벌 확인. 2005도870의 서비스제공자 기준과 이용자의 사자/이익을 위한 사실행위대행·제공자의 승낙권한/추인가능 등 예외를 대조했습니다. 해당판례를 선의취약점신고 사건으로 오인시키지 않는 비고 유지. 서면승인은 실무상 증거확보 권고이지 법조문상 모든 점검의 단일형식요건이라는 설명을 덧붙이지 않습니다.
- 짧은인용: “제1항제11호의 미수범은 처벌한다”.
- law 290001: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290001&type=XML · UTC 2026-10-18T12:38:22.876633+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290001.xml` · SHA256 `9a5b1491c704ab556b864385d0374ce13f283ccc19d8f9a43389c501a9e6578b`.
- prec 216531: https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=216531&type=XML · UTC 2026-10-18T13:15:48.283054+00:00 · HTTP 200 · new_https · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/prec-216531.xml` · SHA256 `9ddf466e277c11fe4184d8fee61435aecbfa742a87527f8a21c62dccce992467`.

### 제10항 — verified_scope_with_open_detail
- 확인범위: 47의6 / 48②·70의2 / 판시사항·요지·이유.
포상은 지급가능 근거이며 확정수급권이 아닙니다. 악성프로그램 판단은 용도/구성/작동/영향/운용자동의를 종합하며 실제장애결과가 항상 필요한 것은 아닙니다. KISA포상 참여약정·공개조건 및 해외제출 일반금지는 독립확인하지 않았습니다. 미조사를 접근실패라고 새로 주장하지 않습니다.
- 짧은인용: “예산의 범위에서 포상금을 지급할 수 있다”.
- law 290001: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290001&type=XML · UTC 2026-10-18T12:38:22.876633+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290001.xml` · SHA256 `9a5b1491c704ab556b864385d0374ce13f283ccc19d8f9a43389c501a9e6578b`.
- prec 214311: https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=214311&type=XML · UTC 2026-10-18T13:15:46.602047+00:00 · HTTP 200 · new_https · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/prec-214311.xml` · SHA256 `cc32c0534be2e4fd99f8e14acb30c82dab1aeb196e3d0dbbe7aafd259556779d`.

### 제11항 — verified_scope
- 확인범위: 9① / 9의2① / 15① / 40제2·4호.
개인위치정보 대상 위치기반서비스 신고·방송미디어통신위원회 명칭, 소상공인/1인창조기업1개월조건·계속영업 신고기한 확인. 비개인위치정보 제외와 긴급구조등15① 예외 유지. 독립수집/다른사업자제공 등록과 서비스신고를 구분합니다.
- 짧은인용: “사업을 개시한 날부터 1개월 이내”.
- law 277359: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=277359&type=XML · UTC 2026-10-18T12:37:28.478537+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/277359.xml` · SHA256 `8245a47aae7d002386769c2ffb51edba6b2849568b14032ec375a317d6594b58`.

### 제12항 — verified_scope
- 확인범위: 판시사항·판결요지·이유.
2009다82244 경업금지의 이익·직위·기간지역직종·대가·퇴직경위·공익 종합요소와 해당사건 회사청구 배척 확인. 모든약정무효/무보상자동해제라는 확대가 없습니다. 민사 시간·상담소송비·가처분 부담 유지.
- 짧은인용: “보호할 가치 있는 사용자의 이익”.
- prec 215665: https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=215665&type=XML · UTC 2026-10-18T13:15:46.602339+00:00 · HTTP 200 · new_https · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/prec-215665.xml` · SHA256 `d4a0eea94b2a6aefd2935de9fbfd378f16465b590509976affc1b856bf9fdfb2`.

### 제13항 — verified_scope
- 확인범위: 저작권2제31호·9 / 발명12·13·15.
업무상프로그램의 공표불요 및 계약/근무규칙예외 확인. 일반저작물은 법인명의공표 조건이므로 프로그램 밖으로 회사저작자 자동귀속을 확대하지 않도록 보강 권장. 직무발명 서면통지·사전승계약정/예외통지·정당보상권 확인. 실제 보상분쟁 비용 유보 유지.
- 짧은인용: “발명을 완성한 때부터 사용자등에게 승계”.
- law 283335: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283335&type=XML · UTC 2026-10-18T12:37:44.576976+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283335.xml` · SHA256 `6a429f0550556154dcad808d032185e92b6ffdf3f40d791439b14129e1ee929d`.
- law 277197: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=277197&type=XML · UTC 2026-10-18T13:16:52.714837+00:00 · HTTP 200 · new_https_retry · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/law-277197-retry.xml` · SHA256 `81b5eef91d4a3e7bb3414e4d969a8090286d34dded265213204684a4b1322237`.

### 제14항 — revision_required
- 확인범위: 125①②④ / 부칙21336 제1·2조 / 판시사항·요지·이유.
필수: 5배배상은 고의 및 법원재량·인정손해액 상한이며2026-08-11 이후 발생 침해부터 적용된다는 부칙 조건을 보강하세요. 2006도8369는 GPL공개의무위반 회사의 파생소스도 비공개/경제가치/비밀관리 충족시 영업비밀이라는 형사사건이며 GPL권리자승소 집행판례가 아닙니다. 실제 라이선스버전과 결합배포는 미조사입니다.
- 짧은인용: “5배를 넘지 아니하는 범위”.
- law 283335: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283335&type=XML · UTC 2026-10-18T12:37:44.576976+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283335.xml` · SHA256 `6a429f0550556154dcad808d032185e92b6ffdf3f40d791439b14129e1ee929d`.
- prec 129612: https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=129612&type=XML · UTC 2026-10-18T13:15:46.594544+00:00 · HTTP 200 · new_https · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/prec-129612.xml` · SHA256 `516aeea295bda6576f00ad700e13104ce197328bc668435f19accd118fc716e5`.

### 제15항 — verified_scope
- 확인범위: 개인정보16·22의2·30·71제3호 / 망22의2.
최소수집·입증책임·법정동의가 필요한14세미만 처리/대리인동의확인·최소연락정보 예외·5년/5천만원·선택접근권한 거부시 서비스거부금지·처리방침 공개 확인. 동의 이외 법정처리근거를 삭제하지 않습니다. 시행령상 최소연락정보 항목 자체는 이번 대조범위 밖입니다.
- 짧은인용: “만 14세 미만”.
- law 283839: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283839&type=XML · UTC 2026-10-18T12:37:49.895011+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283839.xml` · SHA256 `6d1f5a3a40b177bef82c56d4aeb0d37524c46b550a7997128fb9435555ce748f`.
- law 290001: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290001&type=XML · UTC 2026-10-18T12:38:22.876633+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290001.xml` · SHA256 `9a5b1491c704ab556b864385d0374ce13f283ccc19d8f9a43389c501a9e6578b`.

### 제16항 — verified_scope_with_open_detail
- 확인범위: 전자상거래12 / 통신22 / 개인정보29 / 고시2023-6 제8① / 2025-9·2026-9부칙 / 통신비밀령41②.
개인정보취급자의 시스템접속1년·5만명은 시스템별분모/민감고유식별/기간통신2년 확인. 2025-9부칙상8①② 발령1년후2026-10-31 시행이므로 현행2023-6 문구 적용이 맞습니다.2026-9부칙도 확인. 전기통신사업자 통신사실확인자료 중법2제11호마·사3개월이며 모든사이트 방문로그가 아닙니다. 통신판매신고·부가통신소규모 예외 법률근거 확인, 구체고시/시행령면제금액·지방세·ISMS세부대상은 미조사.
- 짧은인용: “5만명 이상의 정보주체”.
- law 282793: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=282793&type=XML · UTC 2026-10-18T13:15:46.590544+00:00 · HTTP 200 · new_https · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/law-282793.xml` · SHA256 `f970ec9e84bae3c139fe8e190c9dda527662a64b9353daa0ee5dd3e7934250f7`.
- law 285185: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285185&type=XML · UTC 2026-10-18T12:37:57.053030+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285185.xml` · SHA256 `19211caf018039f7b50c1aea31f4cd54fe9a99cc509afee0797cc462d3ff30ad`.
- law 283839: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283839&type=XML · UTC 2026-10-18T12:37:49.895011+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283839.xml` · SHA256 `6d1f5a3a40b177bef82c56d4aeb0d37524c46b550a7997128fb9435555ce748f`.
- admrul 2100000229672: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000229672&type=XML · UTC 2026-10-18T13:15:52.403365+00:00 · HTTP 200 · new_https · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/admrul-2100000229672.xml` · SHA256 `49ce1fc5fd1cbbd7b63082a40ec948fab4c8cb8d13e9daeb736888b362ade653`.
- admrul 2100000281400: https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000281400&type=XML · UTC 2026-10-18T13:16:52.719070+00:00 · HTTP 200 · new_https_retry · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/admrul-2100000281400-retry.xml` · SHA256 `c7964a1ae22ea82b438c066f1c2224c9b2f2a7744dbf35861bf14e836e579d6c`.
- law 290505: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290505&type=XML · UTC 2026-10-18T12:38:30.378215+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290505.xml` · SHA256 `3faea7131225ed526a651b51827105cd753c3e5bc38230a17d006c9a5e5983a8`.

### 제17항 — revision_required
- 확인범위: 법31①②③④·43① / 령23①②③④.
필수: 현행령23④ AI활용명백/내부업무전용 등 전부일부 적용예외를 비고·출처에 보강하세요.23② 표시는 사람인지방법 또는 기계판독+1회이상안내가 가능하여 모든결과물의 시각워터마크만 의무처럼 쓰면 안 됩니다. 법31③ 창의적표현 향유저해않는표시 단서도 확인.3천만원 과태료는 사전고지위반/시정명령불이행 등43①과 연결되며 결과물미표시 자체와 구분한 본문은 맞습니다. 과태료계도기간은 MSIT공식문서 미대조로 남깁니다.
- 짧은인용: “내부 업무 용도로만 사용되는 경우”.
- law 282791: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=282791&type=XML · UTC 2026-10-18T12:37:43.108598+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/282791.xml` · SHA256 `29c74f00f805b53552d3a6209041f0e44d3b725cc0033a7547899ff33b9470d7`.
- law 288781: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=288781&type=XML · UTC 2026-10-18T13:17:41.909528+00:00 · HTTP 200 · new_https · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/ai-reg.xml` · SHA256 `6f87164a02363cb54b4240d7c6213dd074db121d6806750481c1015bc835cbbe`.

### 제18항 — verified_scope
- 확인범위: 판시사항·판결요지·이유 / 부정경쟁2①파·4·5.
2008마1541 원문을 세번째HTTPS시도에 확보했습니다. 네이버광고를 대체/여백삽입/키워드삽입한 영업행위 가처분이며 민법상성과무단이용·이익형량을 적용했습니다. 프로그램 제조사용 일반금지·순수광고차단 일괄불법 판결이 아니라는 비고 일치. 현행부정경쟁법파목과의 대응은 별도법률요건으로 다뤘습니다.
- 짧은인용: “프로그램의 제조, 사용 등의 금지까지는 필요하지”.
- prec 146181: https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=146181&type=XML · UTC 2026-10-18T13:17:41.910269+00:00 · HTTP 200 · new_https_third_attempt · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/prec146181-third.xml` · SHA256 `25a8ced270c6bedd327a55155b334d363b759210d95aeb2848f53cbbcd6f38f0`.
- law 277201: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=277201&type=XML · UTC 2026-10-18T12:37:24.007461+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/277201.xml` · SHA256 `025c1b30ee981d96772245f66b7577cda416da8363e1e1ca0c7afbc731494d04`.

### 제19항 — verified_scope_with_open_detail
- 확인범위: 망48①·71 / 2005도870 판시사항·요지·이유 / 개인정보28의8①~⑤·64의2①7.
개인정보 국외이전 별도동의·법률조약·계약이행 위탁보관+고지공개 등 법정근거 확인, 위법국외이전 과징금 확인. 2005도870 군계정 사건을 AI중개사이트 직접판례로 소개하지 않는 유보 유지. 개별계정공유·재판매 최신약관은 미조사, 원문에 기록된 이전403과 이번감사 실제요청을 혼동하지 않습니다.
- 짧은인용: “계약의 체결 및 이행”.
- law 290001: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290001&type=XML · UTC 2026-10-18T12:38:22.876633+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290001.xml` · SHA256 `9a5b1491c704ab556b864385d0374ce13f283ccc19d8f9a43389c501a9e6578b`.
- prec 216531: https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=216531&type=XML · UTC 2026-10-18T13:15:48.283054+00:00 · HTTP 200 · new_https · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/prec-216531.xml` · SHA256 `9ddf466e277c11fe4184d8fee61435aecbfa742a87527f8a21c62dccce992467`.
- law 283839: https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283839&type=XML · UTC 2026-10-18T12:37:49.895011+00:00 · HTTP 200 · existing_cache_read · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283839.xml` · SHA256 `6d1f5a3a40b177bef82c56d4aeb0d37524c46b550a7997128fb9435555ce748f`.

## 남은 범위와 최종검토 요건
- 필수 수정은7·14·17항입니다. 6항 특별한사정 조건 보강을 권장합니다. 13항은 프로그램 외 업무상저작물의 공표조건을 넓히지 않아야 합니다. 출처/이득 추가는 순수윤문과 분리한 승인통합 단계에서만 반영합니다.
- 제2·3·4·7·9·10·12·14·18·19항의 인용 판례 원문을 열었습니다. 과거 판례의 사실관계와 현행 조문의 법정형은 별개로 기록했습니다. 사후 신고·앱개조·채굴·순수광고차단 등의 다른 사실관계로 일반화하지 않습니다.
- KISA공개약정, AI계도기간 공식자료, 실제 GPL버전, 모델최신약관, 지자체등록면허세·신고세부면제·ISMS세부대상 등은 이번 범위에서 별도원문 미조사입니다. 확인하지 않은 사항은 사실대로 남기며 전체를 완료했다고 하지 않습니다.
- 최종후보에서는7항 다중행이득/6필드구조,50자초과·쉽게120자·주어/번역투/전보체를 다시 읽어야 합니다. 이 초기감사에서는 후보 문체승인을 하지 않았습니다.
- 법률이 지원하는 결과와 수사/민사절차 비용은 별개입니다.1·4·12·13·18·19항의 대응시간·선임료·협의/소송부담은 삭제하지 않습니다.

## 현행 버전 검색

- 부정경쟁방지 및 영업비밀보호에 관한 법률: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EB%B6%80%EC%A0%95%EA%B2%BD%EC%9F%81%EB%B0%A9%EC%A7%80%20%EB%B0%8F%20%EC%98%81%EC%97%85%EB%B9%84%EB%B0%80%EB%B3%B4%ED%98%B8%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0&display=100&nw=1 · UTC 2026-10-18T13:17:03.793707+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-277201.xml` · SHA256 `facff42790753353bb50fdeedf0ee568bfd0670a42caff43cf892a53198f68c5` · [{"법령명한글": "부정경쟁방지 및 영업비밀보호에 관한 법률", "법령일련번호": "289721", "시행일자": "20270316", "현행연혁코드": "시행예정"}, {"법령명한글": "부정경쟁방지 및 영업비밀보호에 관한 법률", "법령일련번호": "277201", "시행일자": "20260528", "현행연혁코드": "현행"}].
- 위치정보의 보호 및 이용 등에 관한 법률: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%9C%84%EC%B9%98%EC%A0%95%EB%B3%B4%EC%9D%98%20%EB%B3%B4%ED%98%B8%20%EB%B0%8F%20%EC%9D%B4%EC%9A%A9%20%EB%93%B1%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0&display=100&nw=1 · UTC 2026-10-18T13:17:03.794404+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-277359.xml` · SHA256 `66a026f6b0a8447992c476324d6291329c0dc3e1ffcd9f796b81074b252d74c8` · [{"법령명한글": "위치정보의 보호 및 이용 등에 관한 법률", "법령일련번호": "277359", "시행일자": "20251001", "현행연혁코드": "현행"}].
- 산업기술의 유출방지 및 보호에 관한 법률: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%82%B0%EC%97%85%EA%B8%B0%EC%88%A0%EC%9D%98%20%EC%9C%A0%EC%B6%9C%EB%B0%A9%EC%A7%80%20%EB%B0%8F%20%EB%B3%B4%ED%98%B8%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0&display=100&nw=1 · UTC 2026-10-18T13:17:03.795170+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-280043.xml` · SHA256 `3750438367bee063de4d6217aeeb2e438389f13ed5b785b7406946666d7786bf` · [{"법령명한글": "산업기술의 유출방지 및 보호에 관한 법률", "법령일련번호": "280043", "시행일자": "20260603", "현행연혁코드": "현행"}].
- 인공지능 발전과 신뢰 기반 조성 등에 관한 기본법: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EB%B0%9C%EC%A0%84%EA%B3%BC%20%EC%8B%A0%EB%A2%B0%20%EA%B8%B0%EB%B0%98%20%EC%A1%B0%EC%84%B1%20%EB%93%B1%EC%97%90%20%EA%B4%80%ED%95%9C%20%EA%B8%B0%EB%B3%B8%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:17:03.795847+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-282791.xml` · SHA256 `aa22c9042372984d837fcc6c918b78dc6dd31383a65ef6e82690975a55697507` · [{"법령명한글": "인공지능 발전과 신뢰 기반 조성 등에 관한 기본법", "법령일련번호": "282791", "시행일자": "20260721", "현행연혁코드": "현행"}].
- 전자상거래 등에서의 소비자보호에 관한 법률: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%A0%84%EC%9E%90%EC%83%81%EA%B1%B0%EB%9E%98%20%EB%93%B1%EC%97%90%EC%84%9C%EC%9D%98%20%EC%86%8C%EB%B9%84%EC%9E%90%EB%B3%B4%ED%98%B8%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0&display=100&nw=1 · UTC 2026-10-18T13:17:03.796550+00:00 · 상태 access_failed · HTTP None · raw `None` · SHA256 `None` · "HTTP Error 403: Forbidden".
- 저작권법: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%A0%80%EC%9E%91%EA%B6%8C%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:17:03.797013+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-283335.xml` · SHA256 `b6735803d8d5ada057c68a2793fe631d59a0ea908b58d7f7bcebadaaf5352bea` · [{"법령명한글": "저작권법", "법령일련번호": "285693", "시행일자": "20261029", "현행연혁코드": "시행예정"}, {"법령명한글": "저작권법", "법령일련번호": "283335", "시행일자": "20260811", "현행연혁코드": "현행"}].
- 공연법: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B3%B5%EC%97%B0%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:17:03.797485+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-283673.xml` · SHA256 `88ddc0c45ee19a8bf0e2267353d095ffc16965c74b09c45581b4798d911ff7b8` · [{"법령명한글": "공연법", "법령일련번호": "285649", "시행일자": "20261029", "현행연혁코드": "시행예정"}, {"법령명한글": "공연법", "법령일련번호": "283673", "시행일자": "20260828", "현행연혁코드": "현행"}].
- 개인정보 보호법: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%20%EB%B3%B4%ED%98%B8%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:17:03.798122+00:00 · 상태 access_failed · HTTP None · raw `None` · SHA256 `None` · "<urlopen error Tunnel connection failed: 502 Bad Gateway>".
- 전기통신사업법: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%A0%84%EA%B8%B0%ED%86%B5%EC%8B%A0%EC%82%AC%EC%97%85%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:17:04.176365+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-285185.xml` · SHA256 `7a1a40c537a8afd2b7ac930ca5ed79d29274007cb88801d51f24663d921ced08` · [{"법령명한글": "전기통신사업법", "법령일련번호": "286079", "시행일자": "20261120", "현행연혁코드": "시행예정"}, {"법령명한글": "전기통신사업법", "법령일련번호": "285185", "시행일자": "20261001", "현행연혁코드": "현행"}].
- 근로기준법: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B7%BC%EB%A1%9C%EA%B8%B0%EC%A4%80%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:17:04.336830+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-285279.xml` · SHA256 `b8a20072e5cff7651c2732cda90541bf6cb63a7bfddbe0e6a368643d207917f8` · [{"법령명한글": "근로기준법", "법령일련번호": "286771", "시행일자": "20270610", "현행연혁코드": "시행예정"}, {"법령명한글": "근로기준법", "법령일련번호": "285279", "시행일자": "20261008", "현행연혁코드": "현행"}].
- 국민체육진흥법: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B5%AD%EB%AF%BC%EC%B2%B4%EC%9C%A1%EC%A7%84%ED%9D%A5%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:17:04.516487+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-286627.xml` · SHA256 `a5c525026f7d338384825ceab4acc578e273c2f5caa075cab2d1b00a5c2d9078` · [{"법령명한글": "국민체육진흥법", "법령일련번호": "286627", "시행일자": "20260903", "현행연혁코드": "현행"}].
- 정보통신망 이용촉진 및 정보보호 등에 관한 법률: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EB%A7%9D%20%EC%9D%B4%EC%9A%A9%EC%B4%89%EC%A7%84%20%EB%B0%8F%20%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%20%EB%93%B1%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0&display=100&nw=1 · UTC 2026-10-18T13:17:04.827342+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-290001.xml` · SHA256 `1e25eb9b08c0c04df60a19fc8821b5fbaa8c66f2e50304956677beeeaef50323` · [{"법령명한글": "정보통신망 이용촉진 및 정보보호 등에 관한 법률", "법령일련번호": "290001", "시행일자": "20261002", "현행연혁코드": "현행"}].
- 형법: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%ED%98%95%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:17:07.917649+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-290185.xml` · SHA256 `20d931ae62b218c093521913e128bbab7685bd7e13b4b5c1fe4d346b18274bed` · [{"법령명한글": "형법", "법령일련번호": "290185", "시행일자": "20261002", "현행연혁코드": "현행"}].
- 형사소송법: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%ED%98%95%EC%82%AC%EC%86%8C%EC%86%A1%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:17:09.032843+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-290189.xml` · SHA256 `7b190c4f47e86ffa6eb18bb413ff58cb8e0ac46ddf08818d95a5c034ec54cdf9` · [{"법령명한글": "형사소송법", "법령일련번호": "290189", "시행일자": "20261002", "현행연혁코드": "현행"}, {"법령명한글": "형사소송법", "법령일련번호": "281865", "시행일자": "20271231", "현행연혁코드": "시행예정"}].
- 전자금융거래법: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%A0%84%EC%9E%90%EA%B8%88%EC%9C%B5%EA%B1%B0%EB%9E%98%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:17:09.324893+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-290247.xml` · SHA256 `0dd3569bc0c1ee473ef10099bb1c5c88df3d8f6da589b2fb68ac750c8e9f2e38` · [{"법령명한글": "전자금융거래법", "법령일련번호": "290247", "시행일자": "20261002", "현행연혁코드": "현행"}, {"법령명한글": "전자금융거래법", "법령일련번호": "280277", "시행일자": "20261217", "현행연혁코드": "시행예정"}].
- 통신비밀보호법 시행령: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%ED%86%B5%EC%8B%A0%EB%B9%84%EB%B0%80%EB%B3%B4%ED%98%B8%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9&display=100&nw=1 · UTC 2026-10-18T13:17:09.325468+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-290505.xml` · SHA256 `88f34fef5344233ecaa5d85e9cf9db2f4adfbf1e6dedef9c643e67dde9a53b78` · [{"법령명한글": "통신비밀보호법 시행령", "법령일련번호": "290505", "시행일자": "20261002", "현행연혁코드": "현행"}].
- 인공지능 발전과 신뢰 기반 조성 등에 관한 기본법 시행령: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EB%B0%9C%EC%A0%84%EA%B3%BC%20%EC%8B%A0%EB%A2%B0%20%EA%B8%B0%EB%B0%98%20%EC%A1%B0%EC%84%B1%20%EB%93%B1%EC%97%90%20%EA%B4%80%ED%95%9C%20%EA%B8%B0%EB%B3%B8%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9&display=100&nw=1 · UTC 2026-10-18T13:17:09.482129+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-ai-reg.xml` · SHA256 `64cbca2741d2a29ae67079ba78dc65a530c8113c4c2c9ddd183df79c29ff65ba` · [{"법령명한글": "인공지능 발전과 신뢰 기반 조성 등에 관한 기본법 시행령", "법령일련번호": "288781", "시행일자": "20260820", "현행연혁코드": "현행"}].

## 현행검색 재시도 결과

- 전자상거래 등에서의 소비자보호에 관한 법률: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%A0%84%EC%9E%90%EC%83%81%EA%B1%B0%EB%9E%98%20%EB%93%B1%EC%97%90%EC%84%9C%EC%9D%98%20%EC%86%8C%EB%B9%84%EC%9E%90%EB%B3%B4%ED%98%B8%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0&display=100&nw=1 · UTC 2026-10-18T13:18:35.794829+00:00 · 상태 access_failed · HTTP None · raw `None` · SHA256 `None` · "HTTP Error 502: Bad Gateway".
- 개인정보 보호법: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%20%EB%B3%B4%ED%98%B8%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:18:35.795605+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-retry-7.xml` · SHA256 `50881bd2554f6fa1305dc6ed85d55cbdb8d255db32d874b91690caf40375e16f` · [{"법령명한글": "개인정보 보호법", "법령일련번호": "289415", "시행일자": "20270309", "현행연혁코드": "시행예정"}, {"법령명한글": "개인정보 보호법", "법령일련번호": "283839", "시행일자": "20260911", "현행연혁코드": "현행"}].
- 게임산업진흥에 관한 법률: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B2%8C%EC%9E%84%EC%82%B0%EC%97%85%EC%A7%84%ED%9D%A5%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0&display=100&nw=1 · UTC 2026-10-18T13:18:35.796266+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-retry-17.xml` · SHA256 `18ebdbd8753626c77f322dd0cb6f97bdeed718b6c68592a1021733536c5708a2` · [{"법령명한글": "게임산업진흥에 관한 법률", "법령일련번호": "265811", "시행일자": "20251023", "현행연혁코드": "현행"}].
- 발명진흥법: https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EB%B0%9C%EB%AA%85%EC%A7%84%ED%9D%A5%EB%B2%95&display=100&nw=1 · UTC 2026-10-18T13:18:35.796786+00:00 · 상태 search_body_checked · HTTP 200 · raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch11-audit/current-retry-18.xml` · SHA256 `76ad225197f9079b54f929e73ec456b5389efb8ef14a1a2900c6f1c7aaf88195` · [{"법령명한글": "발명진흥법", "법령일련번호": "277197", "시행일자": "20251001", "현행연혁코드": "현행"}].

전자상거래법의 기준일 현행검색은 재시도에도 접근실패입니다. 인용버전282793의 본문12조는 확보·대조했습니다. 현행검색 독립확인과 인용판 본문확인은 구분합니다. 다른 시행예정판을 현재법으로 혼입하지 않았습니다.
