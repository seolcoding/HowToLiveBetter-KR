# 제14절 초기 원자료 감사

상태: pending_candidate_review. 검토 UTC: 2026-10-18T14:26:24.384056+00:00. 원자료 SHA256: `c561a39adc1eed2feea3288fb464837ae39b230f7b4ee79c5a055de11580374a`.
후보가 없어 편집 승인·정식 KR-FIT를 수행하지 않았습니다. source·manifest·10개 entry_snapshot 전체를 읽고 항목 대응을 확인했습니다. 기존 캐시 열람과 새 HTTPS를 분리했습니다. 연구의 OR/RR/HR을 확률로 환산하지 않았으며 이 절의 Google 공격 차단률과 AI 실험 사건수도 분모와 조건을 한정합니다.

## 필수 수정

1항: 위험 기반 로그인 챌린지 연구를 2단계 인증 전체/푸시 단독 효과로 일반화하지 말고 본인 요청만 승인한다는 조건을 추가합니다. 8항: 철회·삭제 예외와 수수료 가능성을 복원합니다. 9항: 생체인식정보 민감정보 범위와 법령상 처리 예외를 복원합니다. 10항: 연구자 설계 타이포스쿼팅 예시와 실제 관찰 업체를 구별합니다. 확정 지적은 A와 ROOT에 통지했습니다.

## 항목별 확인 범위

### 1. revision_required

Google 원논문 전문은 risk-aware login/account recovery challenge 평가이며 “This layered authentication approach is distinct from two-factor authentication”이라고 구분합니다. 35만 공격, 기기 기반 >94% 피싱/100% 자동화, 지식 기반 최저10%/73%, 정상 사용자 첫 실패52%·최종97%는 각 실험대상·조건에 묶어야 합니다. 이를 2단계 인증 전체 또는 푸시 단독 효과로 단정하지 마세요. Google 실제 알림 도움말의 본인 요청이 아니면 No를 누르라는 안전조건을 쉽게에 넣어야 합니다. 저자명 순서도 논문 서지와 대조 권장.

근거: `sources:23`, `extra:0`, `extra:3`.

### 2. partial_source_access

CISA 비밀번호 원문은 원주소·대체 주소·재시도 모두403으로 16자 권고 본문을 이번에 확인하지 못했습니다. 고유 비밀번호·관리자 권고는 출처 접근 실패와 구분해 보류합니다. “가장 값싼” 공격이라는 최상급은 C등급 작성자 판단이며 비교 실증으로 승인하지 않습니다.

근거: `sources:7`, `extra:1`, `follow:3`.

### 3. revision_recommended

Samsung 2026-02-26 실제 본문에서 PIN3회/PUK10회 및 통신사별 PUK 조회, Apple 실제 도움말에서 SIM/eSIM 잠금·재시작/물리SIM 이동 때 요구 및 PIN/PUK 추측 금지를 확인했습니다. PUK/기본PIN을 먼저 확보하고 모르면 통신사에 문의한다는 주의 권장. SIM PIN은 물리 SIM 재사용 방어 범위이며 명의도용 SIM 재발급 전체 방어가 아닙니다. “가장 빠른 공격”은 실증되지 않은 비교 표현입니다.

근거: `sources:22`, `follow:4`.

### 4. revision_recommended

SKT 실제 FAQ114/1599-0011·24시간, LG 실제 분실/ARS1544-0010·080-019-7000/24시간, KT 실제 분실페이지·고객센터1588-0010(타사폰·일반전화 유료)/24시간, 경찰민원24 실제 유실물 메뉴를 확인했습니다. FCC 본문403으로 동일 순서라는 뒷받침은 미확인입니다. 엄격한 순서 우선·타인 컴퓨터 로그인은 상황별 제약을 보존하고 신뢰할 수 있는 기기 조건 권장. 원격삭제 전 잠금·추적/복구 고려는 기기별 공식 절차가 달라 일률 보장하지 마세요.

근거: `sources:2`, `sources:4`, `sources:5`, `sources:8`, `sources:18`, `sources:19`, `follow-retry:2`.

### 5. qualified_supported

여전법16①②신고 후/신고 전 기간 책임,③약정·회원고의과실 예외와 입증조건,⑤⑥위변조/해킹 정보 책임·고의중과실 입증 예외,⑦서면약정,⑩서면 이의신청 조사 전 청구금지를 확인했습니다. 실제 시행령6의9 링크본문에서60일과 책임 전가 요건을 확인했습니다. 전자금융9·10은 별도 책임체계이며 일률60일이 아닙니다. 일부 선불전자수단/전자화폐10단서 등 법정 예외를 전체 결제수단 보장으로 확대하지 않아야 합니다. 민소98·109의 비용범위가 실제 소송 전액회수를 보장하지 않습니다.

근거: `law:277267`, `sources:3`, `law:290247`, `law:290113`.

### 6. revision_recommended

세션·연결 앱 확인은 제품별 기능에 의존합니다. “침입 대부분 바로 보이지 않는다”는 C등급 작성자 판단에 해당하며 빈도 실증으로 확인하지 않았습니다. 비밀번호 변경만으로 모든 토큰/기기 세션이 종료된다고 단정하지 말고 별도 로그아웃·권한 회수 권고 유지. 로그인 챌린지 연구는 해당 빈도 근거가 아닙니다.

근거: `extra:0`.

### 7. qualified_supported

개인정보22 선택동의 거절로 서비스 거부 금지·16 최소수집, 정보통신망22의2 선택 접근권한 거절로 거부 금지 확인. 필수 기능별 필요한 접근권한과 선택권한을 구분해야 합니다. 지도 위치는 현재위치 기능에 필요한 사례이며 모든 지도 이용에 위치권한이 필수라는 단정은 축소 권장. 시행령18은 프레임/검색까지, 실제 조문은502로 확인 못한 범위를 명시합니다.

근거: `law:283839`, `law:290001`, `sources:13`, `current:3`, `follow:0`, `follow-retry:0`.

### 8. revision_required

개인정보35~38 실제 XML에서 열람·정정삭제·정지·철회 및 예외 확인.37③단서/②의 법정의무·타인생명재산·공공업무·명백한 계약해지 의사 없는 계약이행 예외 때문에 철회 즉시 언제나 파기 단정은 오류.36①의 다른법령 수집의무 예외 유지.21의 목적달성 후 지체없는 파기는 사업자의 의무이며 별도 삭제요청이 있어야만 발생하지 않음; 법정보존은 분리보관.38③은 수수료·우송료 청구가 가능하므로 “무료” 무조건 단정 수정. 실제 KOPICO1833-6972 및 생체안내서118 확인. 소송비용 민소98·109 범위/부분부담을 보장처럼 쓰지 않아야 합니다.

근거: `law:283839`, `law:290113`, `follow:2`, `sources:21`.

### 9. revision_required

PIPC 실제 생체정보 안내서73쪽 중 정의·처리단계·의무/권고·대체수단을 확인. 모든 얼굴사진/생체정보가 곧 민감정보는 아니며 개인 식별·인증 목적으로 기술처리한 생체인식정보 범위를 써야 합니다. 법23①2의 법령상 요구·허용 예외가 있으므로 항상 별도동의라는 단정 수정. 원본/특징정보 암호화 및 목적달성 후 파기·예외별도보관을 구분. 안내서 자체 비구속과 법령상 의무를 혼동하지 말고 대체수단은 안내서 권고 범위로 서술.

근거: `law:283839`, `sources:21`.

### 10. revision_required

arXiv abs의v1(2026-04-09) 및 실제 HTML/PDF 전문 확인; 정정/추가버전 표시는 없음.28유료/400무료·1유료8무료 활성인젝션·2적응형·17AWS canary 접근·1ETH/당시50달러미만 확인. 사건/실험수이며 일반 서비스 전체 확률이나 실제500만원 피해로 확대 금지. §4.2.1 requests→reqeusts는 연구자가 설계한 AC-1.a 예시(“We design ... specifically to demonstrate”)이며 야생9개 업체에서 관찰한 동일사례로 쓰면 오류. §8.3 표본한계 유지. 2026 PIPC 실제 안내서/배포공지에서 개인정보 입력 주의·학습거부·기록삭제 설정 권고 확인. 한국 공식경고가 전혀 없다는 부재명제·정상 서비스가 더 비싸다는 가격비교는 이번 근거로 입증하지 못했습니다.

근거: `sources:0`, `sources:24`, `sources:25`, `sources:6`, `sources:20`.

## 도입·요약·TODO

사칭의 대상은 계정 주인이며 지인에게 계정 주인을 사칭해 연락한다는 뜻으로 문장 교정 권장. 전체 항목과의 범위 불일치는 발견하지 못함.
KT 타전화1588-0010·24시간은 공식 실제본문 확인으로 미확인 TODO 해소 가능. 카드 집단손실 수치·SIM보호 서비스·신용기록 정정·한국 AI중계 경고 추가 조사는 별도 실제근거 없으므로 완료로 처리하지 않음. 주제 요약은 독립 수치 근거가 아니며 각 항목 유보를 따라야 함.

## 원문 열람 기록

아래 SHA는 수신 raw 또는 기존 XML입니다. PDF는 같은 이름의 .txt를 pdftotext로 추출해 함께 읽었습니다. URL 수신 성공만으로 본문 확인으로 세지 않았습니다. 법령 프레임과 KOPICO 이동 셸은 별도 표시했습니다. 현재검색에서 전자금융법2026-12-17 시행예정판을 10월18일 현행판과 구분했습니다. 개인정보 시행령은 현행검색 확인만 가능했고 전문 재시도502로 세부조문 미확인입니다. CISA/FCC403을 원문확인으로 세지 않았습니다.

- **sources:0** https://arxiv.org/abs/2604.08407
  - UTC 2026-10-18T14:18:44.225296+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/aff92e5a2fd5f64cbb56.raw`; SHA256 `a74ffdb71f56e1843492e139789c12011c72aae5b6d5c98552257ff42c6ea172`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **sources:1** https://doi.org/10.1145/3308558.3313481
  - UTC 2026-10-18T14:18:44.228390+00:00; 방식 new_https; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / HTTP Error 403: Forbidden
- **sources:2** https://help.kt.com/lostphone/LostReportOrCancel.do
  - UTC 2026-10-18T14:18:44.228896+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/a52160cb25cc78effa53.raw`; SHA256 `9aab4b70d945a56014133799f93a16b18bafc5c31f931b246341ff530c353589`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **sources:3** https://law.go.kr/lsLinkCommonInfo.do?lspttninfSeq=60963
  - UTC 2026-10-18T14:18:44.229485+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/d522ab67660f5e2170ea.raw`; SHA256 `728a861fa90390e9ce296d8f86cf98a6363b5cfe797d9003b5ec4b8205edc83f`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **sources:4** https://m.tworld.co.kr/customer/faq/do-like-this?id=B00038
  - UTC 2026-10-18T14:18:44.230892+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/ac9d3c6ac955b2bf7c90.raw`; SHA256 `84bae2bc49666312087a20d637d8d4313adb3bc17f1f726f6bdeeed6de756379`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **sources:5** https://minwon24.police.go.kr/main.do
  - UTC 2026-10-18T14:18:44.231758+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/899a81c44b538487c8df.raw`; SHA256 `2a5ac56a07f58edb96faac4623b6930b0e6015bae9a33ab1e76a97808a77cdfe`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **sources:6** https://pipc.go.kr/np/cmm/fms/FileDown.do?atchFileId=FILE_000000000560841&fileSn=2
  - UTC 2026-10-18T14:18:44.232660+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/53a76ffb687e6514284e.raw`; SHA256 `9dfe5ea4815b0a412d4c8a2f627e4b1e193769e66141c394ec9d1ef5c747cbb1`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **sources:7** https://www.cisa.gov/secure-our-world/use-strong-passwords
  - UTC 2026-10-18T14:18:44.240284+00:00; 방식 new_https; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / HTTP Error 403: Forbidden
- **sources:8** https://www.fcc.gov/consumers/guides/protect-your-mobile-device
  - UTC 2026-10-18T14:18:44.750236+00:00; 방식 new_https; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / HTTP Error 403: Forbidden
- **sources:9** https://www.kopico.go.kr
  - UTC 2026-10-18T14:18:44.753678+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/76f96a5ba2d2c7bcb570.raw`; SHA256 `431e4b46b15c9c4b2cf90d3d58ef910c0bb5906bf929f5ec31c302c8e9a710aa`.
  - 범위: JS 이동 셸; follow:2의 실제 페이지로 재확인
- **sources:10** https://www.law.go.kr/법령/개인정보보호법/제22조
  - UTC 2026-10-18T14:18:44.948072+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/387ee2ead65ed5804aa6.raw`; SHA256 `305652ff02869cafa5625e5f685d6633f0e24f2bdc085e3d6633a22a10e3cd49`.
  - 범위: iframe 법령 프레임만 수신; 조문 근거로 사용하지 않음
- **sources:11** https://www.law.go.kr/법령/개인정보보호법/제23조
  - UTC 2026-10-18T14:18:45.092273+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/4c23ddac6b518f2a287e.raw`; SHA256 `cd8bf1ec93e5354b0b001869151ee4d994a561ca6d61387c9363e12d11c74e7e`.
  - 범위: iframe 법령 프레임만 수신; 조문 근거로 사용하지 않음
- **sources:12** https://www.law.go.kr/법령/개인정보보호법/제35조
  - UTC 2026-10-18T14:18:46.020674+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/7dfdd29e11320d198edf.raw`; SHA256 `2b8e385081ce27aa4d1b8b22feaeaff042deeab8970c61410d150843f7651c1e`.
  - 범위: iframe 법령 프레임만 수신; 조문 근거로 사용하지 않음
- **sources:13** https://www.law.go.kr/법령/개인정보보호법시행령/제18조
  - UTC 2026-10-18T14:18:46.790337+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/345bda274f5d34794456.raw`; SHA256 `8bc957d61b4fad23e75c45bcd859c1e2273bdfbebc9988c773c6aa42517f39a2`.
  - 범위: iframe 법령 프레임만 수신; 조문 근거로 사용하지 않음
- **sources:14** https://www.law.go.kr/법령/민사소송법/제109조
  - UTC 2026-10-18T14:18:46.804112+00:00; 방식 new_https; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / HTTP Error 502: Bad Gateway
- **sources:15** https://www.law.go.kr/법령/여신전문금융업법/제16조
  - UTC 2026-10-18T14:18:47.099360+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/413d64e73bdc71e86a96.raw`; SHA256 `b23e70ce51b098ed71abf28a78f754ccdb9fb7a10de6884a2a2a84ea7284cde0`.
  - 범위: iframe 법령 프레임만 수신; 조문 근거로 사용하지 않음
- **sources:16** https://www.law.go.kr/법령/전자금융거래법/제9조
  - UTC 2026-10-18T14:18:47.446671+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/589255f4c16203f6ac7d.raw`; SHA256 `215a9b171cd6e03287cb158622fc7ab68c470491e1bbfe174cdba2d4c337b044`.
  - 범위: iframe 법령 프레임만 수신; 조문 근거로 사용하지 않음
- **sources:17** https://www.law.go.kr/법령/정보통신망이용촉진및정보보호등에관한법률/제22조의2
  - UTC 2026-10-18T14:18:47.679829+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/e2ce8042e39cf8dfe039.raw`; SHA256 `8960c925f888d4f9de94bded3e1a20a121ca4a199d145e0960c776bfcd62874a`.
  - 범위: iframe 법령 프레임만 수신; 조문 근거로 사용하지 않음
- **sources:18** https://www.lguplus.com/support/lost-device
  - UTC 2026-10-18T14:18:48.317724+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/4f375474c0f305c7124b.raw`; SHA256 `6822412fa4913064f5ab9687ab4fcdd43d3cb4b840f11870a7aeb18fc27520b0`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **sources:19** https://www.lguplus.com/support/service/ars
  - UTC 2026-10-18T14:18:48.487657+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/ca985ad24d3beb536d33.raw`; SHA256 `acecfa058fc8d7a8cb346a675717a3041a4527b9ff63f21c832582719bca7f71`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **sources:20** https://www.pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS074&mCode=C020010000&nttId=12084
  - UTC 2026-10-18T14:18:48.817440+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/d7b16b6b53216c4e6ef2.raw`; SHA256 `3086f8ee0b4cc2fc9fa4326c6b73d772933c6f265eaa1f474ab1b89b31c3623a`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **sources:21** https://www.privacy.go.kr/cmm/fms/FileDown.do?atchFileId=ATCH_000000000900657&fileSn=1
  - UTC 2026-10-18T14:18:49.398658+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/3e2f2bc25553f5e84e73.raw`; SHA256 `6ea3d3d4672b00e1b5de1e52c6ae720953c17b37fef2a5274d7fb9bd94967fd9`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **sources:22** https://www.samsungsvc.co.kr/solution/23806
  - UTC 2026-10-18T14:18:49.402603+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/90fdaacdb8739154e3d1.raw`; SHA256 `f69edf807510128d0265d92b41d6d0ea8480de39d91310b453b2d9c98f65fa94`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **sources:23** https://research.google/pubs/evaluating-login-challenges-as-a-defense-against-account-takeover/
  - UTC 2026-10-18T14:18:49.741541+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/bb97c587462a47e143e4.raw`; SHA256 `a150b6c820bdc45f4f9c305a2830c349f4034dd3fcfcc0847e9f426ade6d0738`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **sources:24** https://arxiv.org/html/2604.08407
  - UTC 2026-10-18T14:18:49.954472+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/df6b24c6f405826cf99f.raw`; SHA256 `6e5b9dbc83eb743776c6aeb03329d06123d20d92383983c8b7a9cfa70e6cec50`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **sources:25** https://arxiv.org/pdf/2604.08407
  - UTC 2026-10-18T14:18:50.052347+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/506972008ed1666f9763.raw`; SHA256 `7fe53795cd72321ec1ac9130e5fc81335e6b71d831ceb29afbf53570b4fc843f`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **extra:0** https://storage.googleapis.com/gweb-research2023-media/pubtools/5021.pdf
  - UTC 2026-10-18T14:19:50.049147+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/c35a200e7b5bb061e1cd-extra.raw`; SHA256 `db4ad7b3f7eb387ecdaccd5a343b5de4303485e407f2adc647574e05a361a5c6`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **extra:1** https://www.cisa.gov/secure-our-world/use-strong-passwords
  - UTC 2026-10-18T14:19:50.050188+00:00; 방식 new_https; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / HTTP Error 403: Forbidden
- **extra:2** https://www.cisa.gov/secure-our-world/turn-mfa
  - UTC 2026-10-18T14:19:50.050840+00:00; 방식 new_https; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / HTTP Error 403: Forbidden
- **extra:3** https://support.google.com/accounts/answer/7026266
  - UTC 2026-10-18T14:19:50.051772+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/ee25fce3a7a33d443c9f-extra.raw`; SHA256 `11cb40546a68fe220352abb034cfedc6e58920f1f0976ac5d66308a092b0ad36`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **extra:4** https://www.fcc.gov/consumers/guides/protect-your-mobile-device
  - UTC 2026-10-18T14:19:50.053740+00:00; 방식 new_https; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / HTTP Error 403: Forbidden
- **follow:0** https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=289537&type=XML
  - UTC 2026-10-18T14:22:19.109704+00:00; 방식 new_https; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / <urlopen error Tunnel connection failed: 502 Bad Gateway>
- **follow:1** https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285799&type=XML
  - UTC 2026-10-18T14:22:19.112093+00:00; 방식 new_https; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / <urlopen error Tunnel connection failed: 502 Bad Gateway>
- **follow:2** https://www.kopico.go.kr/main/main.do
  - UTC 2026-10-18T14:22:19.112654+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/46c1248a92212c97ad5e-follow.raw`; SHA256 `27a9c573391a0a22df357d20249d01b9ac88d9cd28c6ebb5298cd9073b6e1c44`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **follow:3** https://www.cisa.gov/news-events/news/choosing-and-protecting-passwords
  - UTC 2026-10-18T14:22:19.113360+00:00; 방식 new_https; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / HTTP Error 403: Forbidden
- **follow:4** https://support.apple.com/en-us/118228
  - UTC 2026-10-18T14:22:19.117415+00:00; 방식 new_https; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/875e911ee039aada7d1e-follow.raw`; SHA256 `268248c5416268d76ac0eb930a3f8a1f6689abd900c8620caedca1aa83a0f623`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **follow-retry:0** https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=289537&type=XML
  - UTC 2026-10-18T14:22:45.997615+00:00; 방식 new_https_follow_retry; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / <urlopen error Tunnel connection failed: 502 Bad Gateway>
- **follow-retry:1** https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285799&type=XML
  - UTC 2026-10-18T14:22:45.998543+00:00; 방식 new_https_follow_retry; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / <urlopen error Tunnel connection failed: 502 Bad Gateway>
- **follow-retry:2** https://help.kt.com/store/KtCustCenter.do
  - UTC 2026-10-18T14:22:45.999130+00:00; 방식 new_https_follow_retry; 상태 body_received; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/efc005a6d6c689598ae1-follow-retry.raw`; SHA256 `d2f6bcade924d66d23b473b6cd606c16e75dbe94bcaeeb8401df3d22b6b26d03`.
  - 범위: 실제 수신 raw 확인; 아래 항목별 범위 참조
- **current:0** https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%97%AC%EC%8B%A0%EC%A0%84%EB%AC%B8%EA%B8%88%EC%9C%B5%EC%97%85%EB%B2%95&display=100&nw=1
  - UTC 2026-10-18T14:23:03.315981+00:00; 방식 new_https; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / <urlopen error Tunnel connection failed: 502 Bad Gateway>
- **current:1** https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%97%AC%EC%8B%A0%EC%A0%84%EB%AC%B8%EA%B8%88%EC%9C%B5%EC%97%85%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9&display=100&nw=1
  - UTC 2026-10-18T14:23:03.316611+00:00; 방식 new_https; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / <urlopen error Tunnel connection failed: 502 Bad Gateway>
- **current:2** https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%20%EB%B3%B4%ED%98%B8%EB%B2%95&display=100&nw=1
  - UTC 2026-10-18T14:23:03.317243+00:00; 방식 new_https; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / <urlopen error Tunnel connection failed: 502 Bad Gateway>
- **current:3** https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4%20%EB%B3%B4%ED%98%B8%EB%B2%95%20%EC%8B%9C%ED%96%89%EB%A0%B9&display=100&nw=1
  - UTC 2026-10-18T14:23:03.317927+00:00; 방식 new_https; 상태 search_body_checked; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/d06a67aa75de5d481e00-current.xml`; SHA256 `667623495921e008a48851d5d94d8df9ea1550938ef05306f9ad7b45186b3b57`.
  - 범위: 법령 검색 결과 XML의 일련번호·시행일·현행/시행예정만 확인; 조문 아님
- **current:4** https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%A0%95%EB%B3%B4%ED%86%B5%EC%8B%A0%EB%A7%9D%20%EC%9D%B4%EC%9A%A9%EC%B4%89%EC%A7%84%20%EB%B0%8F%20%EC%A0%95%EB%B3%B4%EB%B3%B4%ED%98%B8%20%EB%93%B1%EC%97%90%20%EA%B4%80%ED%95%9C%20%EB%B2%95%EB%A5%A0&display=100&nw=1
  - UTC 2026-10-18T14:23:03.318483+00:00; 방식 new_https; 상태 search_body_checked; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/0b5b214ffefede9c1558-current.xml`; SHA256 `1e25eb9b08c0c04df60a19fc8821b5fbaa8c66f2e50304956677beeeaef50323`.
  - 범위: 법령 검색 결과 XML의 일련번호·시행일·현행/시행예정만 확인; 조문 아님
- **current:5** https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EC%A0%84%EC%9E%90%EA%B8%88%EC%9C%B5%EA%B1%B0%EB%9E%98%EB%B2%95&display=100&nw=1
  - UTC 2026-10-18T14:23:03.318979+00:00; 방식 new_https; 상태 search_body_checked; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch14-audit/9fd900a77edc1bb414b9-current.xml`; SHA256 `0dd3569bc0c1ee473ef10099bb1c5c88df3d8f6da589b2fb68ac750c8e9f2e38`.
  - 범위: 법령 검색 결과 XML의 일련번호·시행일·현행/시행예정만 확인; 조문 아님
- **current:6** https://www.law.go.kr/DRF/lawSearch.do?OC=test&target=law&type=XML&query=%EB%AF%BC%EC%82%AC%EC%86%8C%EC%86%A1%EB%B2%95&display=100&nw=1
  - UTC 2026-10-18T14:23:03.319665+00:00; 방식 new_https; 상태 access_failed; HTTP 미수신.
  - raw `없음`; SHA256 `없음`.
  - 범위: 접근 실패: 본문 확인 안 됨 / HTTP Error 502: Bad Gateway
- **law:277267** https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=277267&type=XML
  - UTC 2026-10-18T12:48:24.629359+00:00; 방식 existing_cache_read; 상태 None; HTTP 미수신.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/277267.xml`; SHA256 `126728affb7ee472d0f0821e77cc6e8face1355ae0cb34ffb838f0fd2b5b6a64`.
  - 범위: 여신전문금융업법16 전체 및 부칙·시행일
- **law:283839** https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283839&type=XML
  - UTC 2026-10-18T12:37:49.895011+00:00; 방식 existing_cache_read; 상태 statutory_xml_cached; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283839.xml`; SHA256 `6d1f5a3a40b177bef82c56d4aeb0d37524c46b550a7997128fb9435555ce748f`.
  - 범위: 개인정보 보호법21·22·23·35·36·37·38·40 및 부칙·시행일
- **law:290001** https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290001&type=XML
  - UTC 2026-10-18T12:38:22.876633+00:00; 방식 existing_cache_read; 상태 statutory_xml_cached; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290001.xml`; SHA256 `9a5b1491c704ab556b864385d0374ce13f283ccc19d8f9a43389c501a9e6578b`.
  - 범위: 정보통신망법22의2 및 부칙·시행일
- **law:290247** https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290247&type=XML
  - UTC 2026-10-18T12:38:28.240394+00:00; 방식 existing_cache_read; 상태 statutory_xml_cached; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290247.xml`; SHA256 `440b67551a3f1f6119dba38469ca843ac06c55619e8aa59f3b7819c05368a621`.
  - 범위: 전자금융거래법9·10 및 부칙·시행일
- **law:290113** https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290113&type=XML
  - UTC 2026-10-18T12:38:24.090334+00:00; 방식 existing_cache_read; 상태 statutory_xml_cached; HTTP 200.
  - raw `/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290113.xml`; SHA256 `dd6228b88d970e33b979d0d9e59c5b74f6f45958c01dcab79e034334365fbc92`.
  - 범위: 민사소송법98·109 및 부칙·시행일

짧은 원문 대조: Google “distinct from two-factor authentication”; Google 도움말 “If you didn’t try to sign in ... tap No”; 개인정보37③ “다만, 제2항 각 호의 어느 하나에 해당하는 경우”; AI논문§4.2.1 “We design AC-1.a specifically to demonstrate”; KT “일반전화, 비가입 휴대폰 이용 시 1588-0010 (유료)”. 전체 raw/base64는 이 문서에 넣지 않았습니다.
