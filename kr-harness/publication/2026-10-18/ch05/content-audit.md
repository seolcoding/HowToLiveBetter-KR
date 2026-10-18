# 제5절 출판 원자료 독립 감사

검토일: 2026-10-18 UTC. 상태: **pending_candidate_review**. 후보가 없어 최종 승인하지 않았습니다. 이 기록은 정식 KR-FIT 승인이 아닙니다.

검토 대상: source.md 및 manifest의 45개 entry_snapshot.md. source SHA256: 6f34f5dbe2095e729683aad99ee62cb9bac6f3ca15c2ad205befcbcb2fa1d44a

AGENTS.md, CLAUDE.md, KR-GUIDE.md, 출판 CONTRACT, kr-fit-review, humanize-kr, humanize-korean 규칙과 기존 조사기록을 읽었습니다. 기존 조사기록의 2026-10-10 확인 주장은 이번 직접 열람으로 간주하지 않았습니다.

## 직접 HTTPS 열람 원시자료

```json
[
  {
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=282793&type=XML",
    "checked_at": "2026-10-18T12:36:08.073438+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "f970ec9e84bae3c139fe8e190c9dda527662a64b9353daa0ee5dd3e7934250f7",
    "bytes": 191964,
    "cache_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/282793.xml"
  },
  {
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=288143&type=XML",
    "checked_at": "2026-10-18T12:36:52.026513+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "754355c0b0ab2b7a5b5d9662afa9c3ed681d9557ce9ea179daef883b1c84fd67",
    "bytes": 218170,
    "cache_path": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/288143.xml"
  }
]
```

두 응답은 화면 wrapper가 아니라 실제 조문 XML입니다. 기본 시행일 20260721을 확인했습니다. 전자상거래법 제20조의5는 기본정보에 20270121 별도 시행으로 표시되므로 현재 조언 근거로 사용하지 않았습니다. 아래 검토한 제13·17·18·20·20조의2·21조의2 및 시행령 제20조의2·21·21조의2를 직접 읽었습니다.

## 실제 열람한 논문 캐시

새 HTTP가 아닙니다. Crossref의 서지·초록만으로 원문 세부표가 검증됐다고 판단하지 않았습니다. Europe PMC 무검색 결과는 논문 내용 오류가 아닙니다.

```json
[
  {
    "doi": "10.1086/605298",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1086%2F605298%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:33.238550+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "addc3c400fc0ee997560145db2904d905e61e434ec495464e83689a17897e334",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/8fea7a93be8c7b6e624c.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "addc3c400fc0ee997560145db2904d905e61e434ec495464e83689a17897e334",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1001/jama.2008.758",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1001%2Fjama.2008.758%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:33.431204+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "2beb441c3da9f2e438804e0071fd739f0ce17cab811e9043d553618f207c7445",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/03708d6fbb728c000a08.json",
    "hit_count": 1,
    "abstract_present": true,
    "actual_sha256": "2beb441c3da9f2e438804e0071fd739f0ce17cab811e9043d553618f207c7445",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/0022-1082.00226",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2F0022-1082.00226%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:33.603010+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "a5f928b0c5ae2668ff50bac7bbd5df430d9ea65f3762c99192fc43cb1101c6d5",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/e9245621627a6c47e93a.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "a5f928b0c5ae2668ff50bac7bbd5df430d9ea65f3762c99192fc43cb1101c6d5",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1016/j.jmoneco.2022.01.001",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1016%2Fj.jmoneco.2022.01.001%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:33.776718+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "33b0427cd65993395e278699663475f8ed657fb198e50cf7fb674edc2bbc328a",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/72bc57c7e64443ceb097.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "33b0427cd65993395e278699663475f8ed657fb198e50cf7fb674edc2bbc328a",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/j.1540-6261.2010.01598.x",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2Fj.1540-6261.2010.01598.x%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:33.944387+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "9cf420c4023763ef3f0d8687b19d6cf5535550a101015982a625f26cbcd1b414",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/89d1d2bf43e3d7525279.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "9cf420c4023763ef3f0d8687b19d6cf5535550a101015982a625f26cbcd1b414",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/jofi.13123",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2Fjofi.13123%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:34.116807+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "33eb9360ae7c5f0b6f783dd667bb3006ed7ad6521331f7817d0a719932e306e3",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/c74e417ec3df3bf06482.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "33eb9360ae7c5f0b6f783dd667bb3006ed7ad6521331f7817d0a719932e306e3",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1126/science.185.4157.1124",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1126%2Fscience.185.4157.1124%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:36.568113+09:00",
    "http_status": 200,
    "status": "exact_doi_metadata_cached",
    "sha256": "4f7b159653b480c6f31bb689a0e5aee3940d09724c8ceb41267c4b601a2db4d6",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/7b6ce6858cf5196e5c2b.json",
    "hit_count": 1,
    "abstract_present": true,
    "actual_sha256": "4f7b159653b480c6f31bb689a0e5aee3940d09724c8ceb41267c4b601a2db4d6",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/0022-1082.00072",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2F0022-1082.00072%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:36.906223+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "1bd437864ac4b8c923b59ea96ae079caff8c6f4e892787a6c902dfc04f87d0e3",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/ffe728acb2e556b8ae51.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "1bd437864ac4b8c923b59ea96ae079caff8c6f4e892787a6c902dfc04f87d0e3",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/j.1540-6261.1952.tb01525.x",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1111%2Fj.1540-6261.1952.tb01525.x%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:34.275094+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "807329e0a537135ffac0dea6fad970153ecf2e12508ed93a5ffb74fac35c661c",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/494ab1d4ec1600edd8e8.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "807329e0a537135ffac0dea6fad970153ecf2e12508ed93a5ffb74fac35c661c",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1257/aer.96.3.694",
    "chapters": [
      5
    ],
    "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=DOI%3A%2210.1257%2Faer.96.3.694%22&format=json&resultType=core&pageSize=10",
    "fetched_at": "2026-10-18T20:50:34.913440+09:00",
    "http_status": 200,
    "status": "no_exact_doi_match",
    "sha256": "1b6da8953e4270a5d5e9eb2c5e38e6ed18eae7199d84c1726d23030861cf513f",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/europe-pmc/c9aa7405844b418a36c5.json",
    "hit_count": 0,
    "abstract_present": false,
    "actual_sha256": "1b6da8953e4270a5d5e9eb2c5e38e6ed18eae7199d84c1726d23030861cf513f",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1086/605298",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1086%2F605298",
    "fetched_at": "2026-10-18T20:52:29.868543+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "fc1e03d54eeb298417d28bb93a2888287ed30bc9041e173fa3a272be47432baa",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/8fea7a93be8c7b6e624c.json",
    "actual_sha256": "fc1e03d54eeb298417d28bb93a2888287ed30bc9041e173fa3a272be47432baa",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/0022-1082.00226",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1111%2F0022-1082.00226",
    "fetched_at": "2026-10-18T20:52:30.094395+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "0431658cbcc4a4a0dc6902d4249f517130cc07c1b7e6d3e9c211795ada3d8efd",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/e9245621627a6c47e93a.json",
    "actual_sha256": "0431658cbcc4a4a0dc6902d4249f517130cc07c1b7e6d3e9c211795ada3d8efd",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1016/j.jmoneco.2022.01.001",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1016%2Fj.jmoneco.2022.01.001",
    "fetched_at": "2026-10-18T20:52:30.251697+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "310604266d958d7b40c7ffeb948808641253f57a7f6030ba83746933090759d1",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/72bc57c7e64443ceb097.json",
    "actual_sha256": "310604266d958d7b40c7ffeb948808641253f57a7f6030ba83746933090759d1",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/j.1540-6261.2010.01598.x",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1111%2Fj.1540-6261.2010.01598.x",
    "fetched_at": "2026-10-18T20:52:30.275829+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "f92a91db382af317b9f4dca21f8a3d21db263d11d9f529f342501d964432e84b",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/89d1d2bf43e3d7525279.json",
    "actual_sha256": "f92a91db382af317b9f4dca21f8a3d21db263d11d9f529f342501d964432e84b",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/jofi.13123",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1111%2Fjofi.13123",
    "fetched_at": "2026-10-18T20:52:30.382708+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "ea3f6abbc94d06f947fd17e1c8714471c927a217857be4d50b5900d9e665cab9",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/c74e417ec3df3bf06482.json",
    "actual_sha256": "ea3f6abbc94d06f947fd17e1c8714471c927a217857be4d50b5900d9e665cab9",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/0022-1082.00072",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1111%2F0022-1082.00072",
    "fetched_at": "2026-10-18T20:52:30.637411+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "3dfcbc1029692e4bfa0ed4f418f728f253981705e8790e5ef1a7128b6540a93e",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/ffe728acb2e556b8ae51.json",
    "actual_sha256": "3dfcbc1029692e4bfa0ed4f418f728f253981705e8790e5ef1a7128b6540a93e",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1111/j.1540-6261.1952.tb01525.x",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1111%2Fj.1540-6261.1952.tb01525.x",
    "fetched_at": "2026-10-18T20:52:30.725328+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "55a79b78e8da1c6313b31c329e81af75d59c5cf231892c94932400cc4c07797e",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/494ab1d4ec1600edd8e8.json",
    "actual_sha256": "55a79b78e8da1c6313b31c329e81af75d59c5cf231892c94932400cc4c07797e",
    "review_mode": "cached_response_opened_2026-10-18"
  },
  {
    "doi": "10.1257/aer.96.3.694",
    "chapters": [
      5
    ],
    "url": "https://api.crossref.org/works/10.1257%2Faer.96.3.694",
    "fetched_at": "2026-10-18T20:52:30.789353+09:00",
    "http_status": 200,
    "status": "exact_doi_bibliography_cached",
    "sha256": "0ea04e18ee5379bbe86f56595a1da0a2371606ba0fa2fc2f3e547bd387b43e08",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/crossref/c9aa7405844b418a36c5.json",
    "actual_sha256": "0ea04e18ee5379bbe86f56595a1da0a2371606ba0fa2fc2f3e547bd387b43e08",
    "review_mode": "cached_response_opened_2026-10-18"
  }
]
```

## 항목별 실제 확인 범위

후보 부재와 미확인 근거 때문에 적합/pass로 처리한 항목은 없습니다.

### 5-1
- 상태: pending_candidate_review
- 확인 범위: 수정 필요: 해지절차 금지의 "정당한 사유 없이"가 쉽게·이득에서 빠짐. 법21조의2제1항4호 직접 확인. 30일은 시행령20조의2와 일치. 방문판매 계속계약 통지·예외는 아직 원문 미확인.

### 5-2
- 상태: pending_candidate_review
- 확인 범위: 법137·73·70·45조의2 및 의료비 가족요건 원문 미확인. 5년 기산점·2개월 답변·합산 신고를 후속 확인.

### 5-3
- 상태: pending_candidate_review
- 확인 범위: 총급여8천/종합소득7천, 15/17%, 1천만원 한도와 주택요건 법령 직접 미확인. 쉽게에는 소득·주택·세액한도 조건 축약 위험. 주택공적금은 한국에 없음을 명시한 비교이므로 기계 경고 자체를 오류로 보지 않음.

### 5-4
- 상태: pending_candidate_review
- 확인 범위: 전기통신사업법·시행령·기관명·스마트초이스 직접 미확인. 할인반환금 경고 보존 필요.

### 5-5
- 상태: pending_candidate_review
- 확인 범위: 판매액 절반의 기대값 계산은 1000×0.5=500으로 확인. 확률·세율·동행복권 현재 1차 원문은 미확인. 비고 "반드시"는 개인 실현손실 보장으로 오독될 수 있어 기대값 표현 권장.

### 5-6
- 상태: pending_candidate_review
- 확인 범위: 유사수신·손실보전·부당권유 조문 원문 미확인. 합법 예금과 투자 구분은 보존.

### 5-7
- 상태: pending_candidate_review
- 확인 범위: 20%·60% 계약무효·미등록 원금/이자·비용 예외 적용범위 및 시행일 원문 미확인. 쉽게의 "모두20%"와 이득의 미등록0% 관계 후속 검토.

### 5-8
- 상태: pending_candidate_review
- 확인 범위: 전자상거래법17조2항5호 직접 확인. 가분적 콘텐츠 미제공 부분 예외가 존재. 미성년 예외는 민법 원문 미확인.

### 5-9
- 상태: pending_candidate_review
- 확인 범위: 전자상거래법13조3항 취소가능 고지 직접 확인. 민법 나이·처분허락·속임수·최고·시효는 원문 미확인. 쉽게의 1개월 이상·속임수 예외 보존 검토.

### 5-10
- 상태: pending_candidate_review
- 확인 범위: 112·1394·지급정지 요건·양도처벌 조문 직접 미확인. "신고와 지급정지로만"은 민사 구제 배제처럼 읽힐 수 있어 단정 완화 검토.

### 5-11
- 상태: pending_candidate_review
- 확인 범위: Crossref 제목·DOI 확인만 완료, 본문 없음. 10~50%·18배·BestBuy 이익 수치는 논문 실측 아닌 업계 인용으로 구분됨. 법정 보증기간 직접 미확인.

### 5-12
- 상태: pending_candidate_review
- 확인 범위: JAMA 초록 직접 캐시 열람. 47편·9계열·38RCT·효과크기−0.03/CI−0.15~0.08·사설23/43=53% 일치. 837명 통합분모를 필요시 명시 가능. 한국 대체조제·90%CI/80~125% 조문 미확인. 쉽게에는 의사 대체불가 임상사유 예외 누락 위험.

### 5-13
- 상태: pending_candidate_review
- 확인 범위: 연2000만원·사업소득·재산5.4/9억·형제1.8억·90일 및 상실일 직접 미확인. 중국 개인계좌는 한국 부재 명시한 비교.

### 5-14
- 상태: pending_candidate_review
- 확인 범위: 620원/1000L=0.62원, 500/0.62≈806 계산 확인. 인천 요금·수질기준 직접 미확인. 끓여도 화학오염 제거 안 된다는 경고 보존.

### 5-15
- 상태: pending_candidate_review
- 확인 범위: Barber/Odean Crossref 저자 초록 직접 캐시: 66465가구(계좌수와 구분), 1991~1996, 11.4/17.9/16.4%, 회전율75% 일치. 중국 4천만·28/31%·18개월 원문 미확인. 관찰자료를 인과로 단정하지 않도록 검토.

### 5-16
- 상태: pending_candidate_review
- 확인 범위: 140%·추가담보·다음영업일 반대매매·즉시처분 약정 예외 감독규정 직접 미확인.

### 5-17
- 상태: pending_candidate_review
- 확인 범위: Fama/French와 Harvey/Liu DOI·서지 확인. Harvey/Liu 초록의 undersampling 반론 일치. SPIVA65/64%·15년 범주·중국60.5/69.6/50.8% 원문표 미확인.

### 5-18
- 상태: pending_candidate_review
- 확인 범위: 0.99^20=81.79%, 0.99^30=73.97% 직접 계산과 일치. 0%/−1% 가정과 수수료 별도 조건 보존 필요. 투자 수익 보장으로 바꾸면 안 됨.

### 5-19
- 상태: pending_candidate_review
- 확인 범위: 수정 검토 필요: "나눠 두어도 기대수익은 그대로"는 임의의 분산에 대한 일반 명제로 성립하지 않음. 동일 기대수익 포트폴리오 비교 등 조건 필요. Markowitz 캐시는 서지뿐, 원문 미확인으로 근거판정 보류.

### 5-20
- 상태: pending_candidate_review
- 확인 범위: 600/900만원·12/15%·연금55세/5년·연1500·지방세·과세제외 원금·이연퇴직소득 예외 법령 미확인. 산식900만×12/15%=108/135만원 일치.

### 5-21
- 상태: pending_candidate_review
- 확인 범위: 저자 Crossref 초록: 미국3곳·7752명·3년·70달러 초과·4.3회·17달러 초과·10달러·600달러·17% 일치. 17%는 상대적 잔류확률 차이로 %포인트 전환 금지. 한국 환급기준·항변권 원문 미확인.

### 5-22
- 상태: pending_candidate_review
- 확인 범위: 계속거래10만원/3개월·언제든 해지의 법정/별도약정 예외·할부20만원/2개월3회·철회7일 직접 미확인. 쉽게 항변권에 결제횟수·기간 조건 누락 위험.

### 5-23
- 상태: pending_candidate_review
- 확인 범위: 수정 필요 확정: 주문제작 철회제한은 개별생산+회복불가 중대한 피해 예상+사전 별도고지+서면동의 조건 모두 필요(시행령21조). 쉽게·이득의 주문제작 일반 금지는 과도. 법17조1항의 주소 미고지/방해 후 기산 특례·가분적 미제공 부분·더 긴 약정 보존 검토. 반품비/위약금/3개월30일 원문 확인.

### 5-24
- 상태: pending_candidate_review
- 확인 범위: Tversky/Kahneman 초록의 anchoring 일반 개념 확인, 특정 할인표시와 손실액 실증 아님. 한국20일 고시 직접 미확인.

### 5-25
- 상태: pending_candidate_review
- 확인 범위: 최저보증이율·사업비·변액 보호 예외 감독규정 직접 미확인. 제목 환급 전부 비보장으로 읽히지 않게 보증/비보증 구분 필요.

### 5-26
- 상태: pending_candidate_review
- 확인 범위: 사망1.5억·부상3천·대물2천·과태료·형량 원문 미확인. 한도/피해자별/사고별 단위 유지.

### 5-27
- 상태: pending_candidate_review
- 확인 범위: 3~6개월은 경험칙 표시됨. 보호예금1억원·소정이자·금융회사별 한도 시행일 원문 미확인.

### 5-28
- 상태: pending_candidate_review
- 확인 범위: 대출금리만큼 확정이득은 수수료·세금공제·유동성 고려 전 비교임을 분명히 할 필요. 3년/법정예외·비용범위 감독규정 직접 미확인.

### 5-29
- 상태: pending_candidate_review
- 확인 범위: 전자상거래법20조·20조의2 원문으로 사업자 신원정보·고지없음 연대책임·신원정보 상당주의 면책 범위 확인. 표시광고·추천보증·계약금·위약금감액은 원문 미확인.

### 5-30
- 상태: pending_candidate_review
- 확인 범위: 전자상거래법20조2항 사업자 신원정보 및20조의2제2항 면책 확인. 개인판매자 정보는20조의4 별도절차이므로 "사업자 판매자" 제한 보존 필요.

### 5-31
- 상태: pending_candidate_review
- 확인 범위: 교환환급은 합의·권고 기준임을 이득에서 구분. 치료비 인과관계·제조물3배 조건 및1372 조정 권한 원문 미확인.

### 5-32
- 상태: pending_candidate_review
- 확인 범위: 대상제품 제한·중개예외·효율등급 법령 및 SafetyKorea 실제 기능 직접 미확인. 모든 상품 KC 의무로 확대 금지.

### 5-33
- 상태: pending_candidate_review
- 확인 범위: 개소세는 소매표시가격 전체가 아닌 법정과세가격 초과분이라고 비고 구분됨. 500/200만원·20% 및 대부이자 원문 미확인.

### 5-34
- 상태: pending_candidate_review
- 확인 범위: 보증서와 감정서 구분·환급기준의 권고성·배상 인과관계 및1개월/1년 직접 미확인. 한국 법정 감정자격 미확인을 존재부정으로 바꾸면 안 됨.

### 5-35
- 상태: pending_candidate_review
- 확인 범위: 수정 필요 확정: 법17조6항 단서는 디지털콘텐츠 철회불가 "표시와 함께" 시험사용 제공 등 요구. "표시하거나 맛보기"는 조건 오류. 시행령21조의2는 미리보기/기간체험/기능제한/곤란시 정보제공 중 하나 이상. 3배배상 게임법 및 소규모 적용예외는 원문 미확인.

### 5-36
- 상태: pending_candidate_review
- 확인 범위: 즉석판매 게시 대체·선식/택배예외·얼음제외중량 고시 직접 미확인. 2026시행판 근거인지 후속 확인.

### 5-37
- 상태: pending_candidate_review
- 확인 범위: Odean 캐시는 DOI/서지만 확인. PGR/PLR·0.135/0.094·3.4%p·세후4.4% 본문표 미확인. 미국세제와 한국세제를 분리한 경고 보존.

### 5-38
- 상태: pending_candidate_review
- 확인 범위: 국외주식 신고·5만달러·20억원 처벌·월말5억·6월·250만22% 조문 원문 미확인. 해외계좌신고 면제대상·월말 합산을 쉽게에 보존 검토.

### 5-39
- 상태: pending_candidate_review
- 확인 범위: 보험료 구조·보험지수 정의·공시 원문 미확인. 개인별 보장 우선순위는 C 경험칙으로 유지.

### 5-40
- 상태: pending_candidate_review
- 확인 범위: 15세미만 사망보험 무효 조문 및 예외 직접 미확인. "아이가 아파도 소득 줄지 않음"은 돌봄 휴직/실직 가능성을 배제하여 단정 완화 검토.

### 5-41
- 상태: pending_candidate_review
- 확인 범위: 15일/30일·더긴약정·발송효력·3영업일·사고발생인지 예외·90일·건강진단·저축/변액 적용범위·3개월취소·1년/5년 해지 법령 직접 미확인. 반드시 원문 후속 대조.

### 5-42
- 상태: pending_candidate_review
- 확인 범위: 방카슈랑스 고지·분리창구·대출끼움·변액 예금보호 예외 원문 미확인. 중국65세 규칙 미적용이 명시됨.

### 5-43
- 상태: pending_candidate_review
- 확인 범위: 부당승환1개월/6개월·자필예외·비교고지·부활6개월·조정30/60일·해지3개월 등 원문 미확인. "보험 깨면 즉시" 보장종료는 철회/해지/승환 구분 유지.

### 5-44
- 상태: pending_candidate_review
- 확인 범위: 수익자 미지정/사망별 귀속·판례 고유재산·상속세 별개·3년 시효 원문 미확인. 쉽게의 단일 귀속 문장이 세부경우를 혼동하지 않는지 후속 확인.

### 5-45
- 상태: pending_candidate_review
- 확인 범위: 가상자산 분리보관·유사수신·미신고처벌·FBI권한 사기 경보 원문 미확인. 신고사업자 거래 가능과 시세손실 미보장 구분은 보존; 불공정거래 손해배상 가능성까지 부정 금지.

## 기계 경고와 후속 검토

기계 검사 block0·warn13 재확인. 중국 기준·주택공적금 등은 중국 비교 또는 한국에 없다는 명시 문맥입니다. 단어만으로 오류로 판단하지 않았습니다. 실증 중국 자료의 수치는 원자료 검증이 별도로 필요합니다.

후속: candidate.md와 모든 editorial-proposal.json 생성 후 현재 SHA와 before를 필드별 대조하고 approve/revise/reject를 결정합니다. 현재는 최종 편집 승인 및 KR-FIT pass 없음.

## 2차 핵심 한국 법·제도 검증 (후보 전, 2026-10-18)

아래는 초기의 미확인 기록을 대체하는 실제 원문 검토입니다. 공식 원문 캐시를 직접 열었으며, 루트 수집을 새 실시간 요청으로 표현하지 않습니다. 신규 요청한 국세기본법·행정규칙·판례는 요청 메타데이터를 별도 표시합니다. 후보가 없어 편집 승인 상태는 계속 pending_candidate_review입니다.

```json
[
  {
    "mst": "284389",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=284389&type=XML",
    "requested_at": "2026-10-18T12:37:54.994541+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "조세특례제한법",
    "effective_date": "20260918",
    "law_id": "001584",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/284389.xml",
    "sha256": "c4d88fcbc2ad79526866b2614a30b2c610079a672d2105c429ce497670dc5569",
    "bytes": 2499475,
    "article_count": 493,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "c4d88fcbc2ad79526866b2614a30b2c610079a672d2105c429ce497670dc5569",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "288915",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=288915&type=XML",
    "requested_at": "2026-10-18T12:38:15.765851+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "조세특례제한법 시행령",
    "effective_date": "20260918",
    "law_id": "004920",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/288915.xml",
    "sha256": "b96a47d5b7a0de512c2e92b1be6d46fa346940a34089220b39e8838061345e8b",
    "bytes": 3459081,
    "article_count": 484,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "b96a47d5b7a0de512c2e92b1be6d46fa346940a34089220b39e8838061345e8b",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "284415",
    "chapters": [
      5,
      8,
      13,
      27,
      30
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=284415&type=XML",
    "requested_at": "2026-10-18T12:37:55.111996+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "민법",
    "effective_date": "20260317",
    "law_id": "001706",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/284415.xml",
    "sha256": "cd2997176df62de7b1e4bb018287987654f6054cbd0eeced9e882d5c4daf53df",
    "bytes": 1098134,
    "article_count": 1337,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "cd2997176df62de7b1e4bb018287987654f6054cbd0eeced9e882d5c4daf53df",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "285273",
    "chapters": [
      5,
      13,
      16,
      24,
      27
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285273&type=XML",
    "requested_at": "2026-10-18T12:37:57.198257+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "국민건강보험법",
    "effective_date": "20261008",
    "law_id": "001971",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285273.xml",
    "sha256": "61d71f01d2824e7332c868f26d4cc9c6ca73ad09b9a3945375ec9ea8972d0bf7",
    "bytes": 353154,
    "article_count": 159,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "61d71f01d2824e7332c868f26d4cc9c6ca73ad09b9a3945375ec9ea8972d0bf7",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "290599",
    "chapters": [
      5,
      24,
      27
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290599&type=XML",
    "requested_at": "2026-10-18T12:38:31.753739+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "국민건강보험법 시행규칙",
    "effective_date": "20260928",
    "law_id": "006696",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290599.xml",
    "sha256": "dcea033f138d9ece7311e9ee3aa216c8edd0b36674038c8081d60a11a3ab0982",
    "bytes": 1743459,
    "article_count": 77,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "dcea033f138d9ece7311e9ee3aa216c8edd0b36674038c8081d60a11a3ab0982",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "280405",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280405&type=XML",
    "requested_at": "2026-10-18T12:37:33.260388+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "소득세법",
    "effective_date": "20260101",
    "law_id": "001565",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/280405.xml",
    "sha256": "c430c1daf89379c4213ebbfbaa8f5ae76ad210bf2154d258686828d02a126e87",
    "bytes": 1209440,
    "article_count": 393,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "c430c1daf89379c4213ebbfbaa8f5ae76ad210bf2154d258686828d02a126e87",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "290841",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290841&type=XML",
    "requested_at": "2026-10-18T12:38:41.683888+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "소득세법 시행령",
    "effective_date": "20261001",
    "law_id": "003956",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290841.xml",
    "sha256": "402597aa7e96fb8486e32088133f02e36277bebbe20588426c81490eb6b3fd71",
    "bytes": 2964601,
    "article_count": 507,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "402597aa7e96fb8486e32088133f02e36277bebbe20588426c81490eb6b3fd71",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "289683",
    "chapters": [
      5,
      24
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=289683&type=XML",
    "requested_at": "2026-10-18T12:38:20.200347+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "자동차손해배상 보장법 시행령",
    "effective_date": "20260915",
    "law_id": "004594",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/289683.xml",
    "sha256": "7f3d9d16dc237b41a5c0bcb099d6710ad1514c537d0ce120522f3e0f00b91c0e",
    "bytes": 379438,
    "article_count": 92,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "7f3d9d16dc237b41a5c0bcb099d6710ad1514c537d0ce120522f3e0f00b91c0e",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "290659",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=290659&type=XML",
    "requested_at": "2026-10-18T12:38:38.241396+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "자동차손해배상 보장법",
    "effective_date": "20261002",
    "law_id": "001746",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/290659.xml",
    "sha256": "ee654142ff8b01f80acb71ae0cace8e68fc734d3c3a97d91ccbe8923fa42387e",
    "bytes": 193352,
    "article_count": 98,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "ee654142ff8b01f80acb71ae0cace8e68fc734d3c3a97d91ccbe8923fa42387e",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "277247",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=277247&type=XML",
    "requested_at": "2026-10-18T12:37:24.892526+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "금융소비자 보호에 관한 법률",
    "effective_date": "20260102",
    "law_id": "013704",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/277247.xml",
    "sha256": "df88739da5899708ec4c7cb5a254e4794b9cef8f9680b97c7ce376200d21e8bf",
    "bytes": 234457,
    "article_count": 87,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "df88739da5899708ec4c7cb5a254e4794b9cef8f9680b97c7ce376200d21e8bf",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "273629",
    "chapters": [
      5,
      8
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=273629&type=XML",
    "requested_at": "2026-10-18T12:37:16.807462+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "상법",
    "effective_date": "20260910",
    "law_id": "001702",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/273629.xml",
    "sha256": "48b6b00f5625f842d6005eeab12e41dc93c5d8596e5db4163266c53e4a21ab22",
    "bytes": 1408341,
    "article_count": 1304,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "48b6b00f5625f842d6005eeab12e41dc93c5d8596e5db4163266c53e4a21ab22",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "285715",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285715&type=XML",
    "requested_at": "2026-10-18T12:38:04.757104+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "금융소비자 보호에 관한 법률 시행령",
    "effective_date": "20260428",
    "law_id": "014044",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285715.xml",
    "sha256": "f4cc2ef36e09e278b9bb1b55e121b9a1520a8a68f292bab94e267f07eefb7ab1",
    "bytes": 266248,
    "article_count": 53,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "f4cc2ef36e09e278b9bb1b55e121b9a1520a8a68f292bab94e267f07eefb7ab1",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "280389",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=280389&type=XML",
    "requested_at": "2026-10-18T12:37:32.710780+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "국제조세조정에 관한 법률",
    "effective_date": "20260101",
    "law_id": "000603",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/280389.xml",
    "sha256": "0a598740eeba1fe889df5afd3396a517810a72545b07b212c0e34fc1c59a8770",
    "bytes": 367030,
    "article_count": 128,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "0a598740eeba1fe889df5afd3396a517810a72545b07b212c0e34fc1c59a8770",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "283629",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=283629&type=XML",
    "requested_at": "2026-10-18T12:37:48.665826+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "국제조세조정에 관한 법률 시행령",
    "effective_date": "20260227",
    "law_id": "002942",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/283629.xml",
    "sha256": "1b715ee17c00ac659c9a729aeeac644fb05e9dbd37fd36b526087ce741f6f90a",
    "bytes": 648841,
    "article_count": 194,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "1b715ee17c00ac659c9a729aeeac644fb05e9dbd37fd36b526087ce741f6f90a",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "276137",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=276137&type=XML",
    "requested_at": "2026-10-18T12:37:18.097008+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "외국환거래법",
    "effective_date": "20260102",
    "law_id": "001525",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/276137.xml",
    "sha256": "c264929821722c913d423fb7c57c7ff80ac4b7ab2364e1dfeb7bce5adf199c9c",
    "bytes": 134246,
    "article_count": 43,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "c264929821722c913d423fb7c57c7ff80ac4b7ab2364e1dfeb7bce5adf199c9c",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "mst": "285607",
    "chapters": [
      5
    ],
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=285607&type=XML",
    "requested_at": "2026-10-18T12:38:04.297042+00:00",
    "scope": "Exact cited statutory version only; article-specific commencement and claims require independent review.",
    "http_status": 200,
    "status": "statutory_xml_cached",
    "title": "외국환거래법 시행령",
    "effective_date": "20260428",
    "law_id": "004273",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/law-versions/285607.xml",
    "sha256": "b8b5d36ac0b1d2073ebb28dc3a6b73ab2393bbbe9f89badc41be5a92ab93338e",
    "bytes": 291351,
    "article_count": 71,
    "review_mode": "cached_xml_opened_2026-10-18",
    "actual_sha256": "b8b5d36ac0b1d2073ebb28dc3a6b73ab2393bbbe9f89badc41be5a92ab93338e",
    "commencement_scope": "Relevant article text and amendment supplementary provisions reviewed; not a claim of checking every amendment in existence."
  },
  {
    "id": "289999",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=289999&type=XML",
    "requested_at": "2026-10-18T12:40:35.998305+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "7bef4053b5934f73d35d857f594ff58e8eaf94214d7b622289f983c9dd1eb603",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/289999.xml",
    "bytes": 549231
  },
  {
    "id": "2100000285140",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000285140&type=XML",
    "requested_at": "2026-10-18T12:40:35.999182+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "1ca8fc0af06bd5fcf36fbac9f07e5f23c76c8cbe44cb3a0aa6e5c1ad612b5688",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/2100000285140.xml",
    "bytes": 764297
  },
  {
    "id": "2100000285608",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=admrul&ID=2100000285608&type=XML",
    "requested_at": "2026-10-18T12:40:35.999638+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "61db1d0e49a62348ea47b2d8516133c6b94e71905f38c84815a68836fa67fd08",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/2100000285608.xml",
    "bytes": 265754
  },
  {
    "id": "83347",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=83347&type=XML",
    "requested_at": "2026-10-18T12:41:42.388361+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "780d3977383ce2832b03e4e8e1dca6d69ab8c3861fae2d49d693bf05a44caa66",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/prec-83347.xml",
    "bytes": 11985
  },
  {
    "id": "191837",
    "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=prec&ID=191837&type=XML",
    "requested_at": "2026-10-18T12:41:42.389171+00:00",
    "tls_verification": true,
    "http_status": 200,
    "sha256": "c8ddb723f0a114ebd4fcee7620c2b85f6517128d3dd1f62a2613e9dec5aef285",
    "cache_file": "/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch05-audit/prec-191837.xml",
    "bytes": 2755
  }
]
```

### 5-2 핵심 검증 보강
- 내용 상태: verified_core_with_conditions
- 실제 대조: 소득세법137조(2월정산, 미신고 본인·표준공제),70조(다음해5/1~31),73조(복수근로소득 합산예외),59조의4②(의료비 나이·소득제한 제외)를 조문 확인했습니다. 국세기본법45조의2①·③·⑤는 연말정산/원천징수 세액 납부기한이 지난 뒤5년, 청구후2개월 통지를 명시합니다.⑤에는 원천징수의무자의 지급명세서 기한내 제출 등의 전제도 있어 단순히 모든 미신고자에게 동일 권리로 확대하지 않습니다.③·④상2개월 내 결정을 못 하면 진행상황 및 불복가능 통지도 규정하므로 2개월 안 환급 보장이라는 뜻이 아닙니다.289999법률21987 부칙2026.10.2시행 확인; 280405의 2026.7.1별도시행은 외국납부세액공제 관련으로 이 검토 조문과 구분했습니다.

### 5-3 핵심 검증 보강
- 내용 상태: revision_required
- 실제 대조: 조특법95조의2①: 총급여8000만원이하/종합소득7000만원초과 제외,15%; 총급여5500만원이하/종합소득4500만원초과 제외17%; 월세연1000만원 한도·신청주의 일치. 소득세법61조① 산출세액 초과분 소멸도 일치. 수정필요: 세대원은 세대주가 월세공제뿐 아니라 법87조②·소득세법52조④⑤ 주택공제도 받지 않아야 합니다. 시행령95조②는 기본공제 대상 자녀·손자녀3명이상일 때100㎡이하 특례(또는 기준시가4억원)를 규정하는데 본문에 빠졌습니다. 임대차계약 본인/기본공제대상자 명의·주소일치·부속토지배율 요건도 확인했습니다. 법95조의2②와령95조⑤는 다른 시군구 거주 배우자 추가공제를 부부 월세합계1000만원내 허용합니다. 법21223부칙1·17조는2026.1.1이후 월세지급 적용, 령36127은2026.2.27공포시행(95조 유예목록 아님)으로 현재 적용범위 확인. 쉽게에도 소득·주택요건을 생략해 모든 무주택근로자 공제로 단정하지 않도록 수정 요청.

### 5-9 핵심 검증 보강
- 내용 상태: verified_core_with_conditions
- 실제 대조: 민법4조19세,5조동의없는행위취소,6조범위를정해처분허락한재산,15조①②최고기간1개월이상·법정대리인이기간내확답을발송하지않으면추인간주,17조속임수예외,140조취소권자,141조현존이익,146조추인할수있는날3년/행위날10년 원문 일치. 법15조③ 특별절차가 필요한 행위는 미회신 취소간주여서 모든 경우의 침묵을 추인으로 일반화하지 않아야 합니다. 민법21454부칙 공포시행, 해당 기본조문은 표기된 이전개정이며 미래시행 없음. 부모는 법정대리인 자격으로 취소하는 것이므로 부모라는 사실만으로 자동권한이 있다는 뜻으로 확대하지 않습니다.

### 5-13 핵심 검증 보강
- 내용 상태: revision_required
- 실제 대조: 국민건강보험법5조②가 배우자/직계존속·배우자직계존속/직계비속·배우자직계비속과그배우자/형제자매를 열거하며 주로생계의존 요건을 둠. 규칙2조·별표1·1의2 직접 확인: 연2000만원·사업소득없음/미등록500만원예외와주택임대제외·장애인/상이자예외·기혼부부둘다충족·재산세과표5.4억/5.4초과9억이하+연소득1000만원·형제1.8억 일치. 별표1형제30세미만/65세이상/장애인·상이자 및 동거별부양요건 확인. 수정필요: 90일후신고는일반적으로신고일부터이나천재지변·질병사고등본인무책임부득이사유는소급가능(2조②3단서). 비고 자격상실일도 일반적확인다음날 외 소득조정·정산대상사업소득등특례③10·11호(발생월다음월말/발생월말)가 있어 예외를남겨야함. 거짓취득은취득일상실③12호일치.법21522시행2026.10.8/규칙1202공포2026.9.28시행·최근개정은서식1 확인.

### 5-20 핵심 검증 보강
- 내용 상태: revision_required
- 실제 대조: 소득세법59조의3① 600/900만원·12/15%·종합소득4500/근로5500만원기준,61조②③산출세액한도·초과분미공제취급,129조①5의2호70세미만5/80세미만4/80세이상3%·종신계약3%,기타소득15% 확인. 령40조의2③55세·가입5년·수령한도,40조의3②4호미공제납입액확인후과세제외,118조의3미공제금액해당연도전환신청 원문일치. 보강필요: 5년가입요건은이연퇴직소득있는계좌에예외. 부득이인출은사유확인6개월내증빙제출이필요하고요양·재난인출은한도존재(령20조의2). 납입공제는근로소득뿐인경우5500만원기준임을쉽게에도보존. ISA만기전환시전환금액10%/300만원중작은액추가공제한도 특례가있으므로900만원은일반한도로표현. 사적연금1500만원은법14조③9호해당소득한정이며퇴직연금전체수령액기준아님. 법21221부칙2026.1.1원칙·7.1외국납부세액공제조문별시행 구분, 령36737부칙2026.10.1시행 확인.

### 5-26 핵심 검증 보강
- 내용 상태: verified_core_with_conditions
- 실제 대조: 자동차손배법3·5·8·46③2·48③1 및령3조·별표1/2 직접확인. 사망피해자1명1.5억원한도/손해2000만원미만이면2000만원; 부상1급3000/2급1500/7급500만원; 후유1급1.5억원; 대물사고1건2000만원 일치. 령3②는부상후사망·후유장애시합산등을규정하므로 전체한도하나로읽지않게유지. 무보험운행1년이하/1000만원이하·미가입300만원이하과태료 일치. 법5조④특정자동차·비도로전용차량예외/5조의2승인된운행중지가입면제도있어모든차를무조건동일의무로확대금지. 법21490시행2026.10.2·령36689공포2026.9.15시행확인.

### 5-38 핵심 검증 보강
- 내용 상태: revision_required
- 실제 대조: 외국환거래규정(2026-103)7-33①대상외화증권제한없음·④일반투자자중개위탁·⑤인정취득해외증권해외매도예외,7-34①전용외화계정,7-31①신고예외열거/②그외한국은행신고,7-11①해외예금예외/②지정은행/③동일자동일인건당5만달러초과은행신고대상확인. 외국환법18·32①4의1억과태료와령40①2의자본거래20억원형사기준확인. 수정필요: 법29①단서는목적물가액3배가1억원을넘으면벌금상한을3배이하로규정하므로본문1억원이하벌금일률단정오류. 국제조세법53·54/령92③으로월말해외계좌합산5억원초과·다음해6/1~30·재외국민182일등면제확인. 쉽게에월말/합산/면제조건보강필요. 직접계좌개설자체가곧신고대상이라는제목은거래별신고예외확인으로수정권장. 외국환규정기본2026.9.16시행/2026-88부칙은제1-2조7호만2027.1.1유예로검토조문과구분. 세율20%/지방2%·연공제250만원은소득세법기본조문확인,지방세원문재시도중.

### 5-41 핵심 검증 보강
- 내용 상태: verified_core_with_conditions
- 실제 대조: 금소법46①1일반금융소비자·대상상품은증권수령15일/청약30일중먼저기한·더긴약정우선,②발송효력,③접수3영업일반환,④위약금불가,⑤보험사고이미발생시원칙철회무효/사실알고철회면예외 원문일치. 령37①보증보험제3자동의필요/자동차책임보험(동종타보험있으면예외)/감독규정30의90일이내·법률상가입의무/건강진단지원제외 확인. 령37④발송사실지체없이통지. 법47/령38②는위반인지1년·계약5년내위법해지확인. 상법638의3약관교부·중요설명의무위반3개월취소·649사고전해지·736적립금반환확인. 타인을위한보험계약해지는상법649①단서동의/증권소지조건이있어무조건언제든은대상제한필요. 법21065시행2026.1.2/령36287공포2026.4.28/감독고시2026-40부칙2026.10.2시행확인. 제목기한은더긴약정예외를본문에서보존할것.

### 5-44 핵심 검증 보강
- 내용 상태: revision_required
- 실제 대조: 상법662조보험금청구권3년·보험료반환/적립금반환3년(보험료청구2년과구분),733①지정변경권/②미지정계약자사망피보험자/③수익자선사망후계약자미재지정사망수익자상속인/④미지정전보험사고피보험자또는수익자상속인,734①보험자통지 원문확인. 보강필요:734②는731①의타인의사망보험피보험자서면동의를수익자지정변경에도준용하므로회사통지만이면충분하다고읽히지않게하기. 비고한국은항상상속인이수익자라는단정은733세부상황에맞춰범위를제한해야함. 두판례2003다29463·2000다31502의공식판시사항/판결요지를신규HTTPSXML에서읽어상속인고유재산일치확인(상속세면제판결아님). 상법21044부칙2026.9.10시행은주주총회집중투표관련,검토보험조문미래시행없음.

### 확인된 수정 요청의 조문 인용

- 3항: 시행령95조②1가 "기본공제대상자에 해당하는 자녀 ... 및 손자녀가 3명 이상 ... 주거전용면적이 100제곱미터 이하 ... 기준시가 4억원 이하". 법95조의2② "그 배우자도 ... 공제를 추가로 적용 ... 월세액의 합계액이 1천만원을 초과하면".
- 13항: 규칙2조②3단서 "천재지변, 질병ㆍ사고 등 ... 본인의 책임이 없는 부득이한 사유".③10·11호는 소득발생월 기준의 상실일 특례.
- 20항: 시행령40조의2③2 "이연퇴직소득 ... 이 연금계좌에 있는 경우에는 그러하지 아니한다".20조의2①1 "해당 사유가 확인된 날부터 6개월 이내 ... 서류".
- 38항: 외국환거래법29①단서 "목적물 가액의 3배가 1억원을 초과하는 경우에는 ... 가액의 3배 이하". 법53① "매월 말일 중 어느 하루 ... 각 해외금융계좌 잔액을 합산".
- 44항: 상법734② "제731조제1항의 규정은 제1항의 지정 또는 변경에 준용한다". 731① "계약체결시에 그 타인의 서면 ... 동의".

의견은 humanize_a에 항목별로 전달했습니다. 미확인 세부사항을 적합 판정으로 바꾸지 않았으며, 후보에 반영된 정확한 필드와 before/SHA는 아직 승인하지 않았습니다.

### 지방세 원문 접근 기록 및 현재 제안

```json
{
  "local_tax_access_records": [
    {
      "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=282559&type=XML",
      "requested_at": "2026-10-18T12:42:25.431135+00:00",
      "tls_verification": true,
      "status": "access_failed",
      "error": "<urlopen error Tunnel connection failed: 502 Bad Gateway>"
    },
    {
      "url": "https://www.law.go.kr/DRF/lawService.do?OC=test&target=eflaw&MST=282559&efYd=20260701&type=XML",
      "requested_at": "2026-10-18T12:44:08.447295+00:00",
      "tls_verification": true,
      "retry_reason": "Cited MST request failed with transient proxy tunnel 502; request dated effective-law endpoint.",
      "status": "access_failed",
      "error": "<urlopen error Tunnel connection failed: 502 Bad Gateway>"
    }
  ],
  "current_proposals": [
    {
      "path": "_workspace/2026-10-18-004-aad2/editorial-proposal.json",
      "sha256": "ec868f02b9ec5c7919e3e9d037b3a844570d463bcd1d8aca371fffa1f90bbd34",
      "entry": 4,
      "status": "pending_candidate_review",
      "field_decisions": [
        {
          "field": "쉽게",
          "decision": "pending_candidate_review",
          "before_matches_snapshot": true,
          "reason": "Candidate absent; before matched source snapshot. Claim verification scope is recorded separately per entry; no final field approval."
        }
      ]
    },
    {
      "path": "_workspace/2026-10-18-002-5644/editorial-proposal.json",
      "sha256": "325b590d03203eab7d20633addc7afaa6f325935c8b3deab7dca2c98eff25b8a",
      "entry": 2,
      "status": "pending_candidate_review",
      "field_decisions": [
        {
          "field": "쉽게",
          "decision": "pending_candidate_review",
          "before_matches_snapshot": true,
          "reason": "Candidate absent; before matched source snapshot. Claim verification scope is recorded separately per entry; no final field approval."
        }
      ]
    }
  ]
}
```

제2항 쉽게 제안은 현재 source snapshot의 before와 일치합니다. 새 후보가 없어 최종 approve/revise/reject는 아직 부여하지 않았습니다. 지방세 원문 접근 실패는 내용 오류로 판정하지 않습니다.
