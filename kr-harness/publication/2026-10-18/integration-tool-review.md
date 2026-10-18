# 승인 통합 도구 독립 검토 — 2026-10-18

현재 판정: **pass (block 0, warn 0)**. 최초 검토의 DOI 괄호 문제 IT-B01은 아래 수정 후 재검토에서 해소했다. 아래 최초 fail 기록은 재현 이력이다. 코드/본문/README/원감사/git는 수정하지 않았으며 검토용 변형 fixture는 /tmp에만 만들었다.

## IT-B01 — 실제 DOI를 잘라 비교하고 잘못된 주석을 승인함

위치: `kr-harness/publication/scripts/humanize_publication.py` integrate()의 지역 dois() 정규식.

닫는 괄호 `)`를 모든 위치에서 제외하므로 실제 Lancet DOI `https://doi.org/10.1016/S0140-6736(15)00340-2`가 `10.1016/s0140-6736(15`로 잘린다. DOI 내부의 괄호와 URL 바깥 Markdown/한국어 구두점을 구별하지 못한다.

- `/tmp/test_doi_lancet_review.py`: 원본 test_doi_annotations.py의 새 DOI만 실제 Lancet DOI로 바꾼 동일 CLI fixture. 전체 DOI와 적법한 review/hash 승인 주석을 제공했는데 integrate가 exit1 `duplicate or unnecessary DOI annotation`으로 거부했다.
- `/tmp/test_doi_truncated_review.py`: 실제 출처 URL은 위 전체 DOI로 그대로 두고 승인 주석 doi만 `10.1016/S0140-6736(15`로 잘랐다. integrate가 exit0으로 잘못 승인하며 전체 fixture도 통과한다. 즉 단순 지원 부족을 넘어 실제 strict→integrated DOI 집합과 다른 주석을 채택한다.
- `/tmp/test_doi_parentheses_review.py`: old/new DOI 각각 `(1)`을 포함한 경우에도 적법한 전체 DOI plan 거부를 재현했다.

수정 방향: DOI 내부 균형 괄호를 보존하고 URL 바깥 구두점/Markdown 닫힘만 구분하는 파서를 사용한다. 실제 책의 괄호 포함 DOI와 일반 `10.1093/ije/dyad019` 및 URL 바깥 괄호·마침표, 완전 DOI 승인/잘린 DOI 거부를 회귀 fixture에 추가해야 한다. 임계값을 완화하거나 잘린 DOI를 plan에 적어 우회하면 안 된다.

## 충족된 보호와 검증

- 원본 `python3 kr-harness/publication/scripts/tests/test_doi_annotations.py`는 1개 테스트(내부 여러 거부 subTest) 통과. prepare→strict assemble→approved integrate 실제 CLI를 격리 저장소에서 실행하므로 단순 구현 복제 검사가 아니다. 성공 시 원래 intro 접두부와 마커의 첫###앞 위치, 공개 source/final/strict candidate 보존을 확인한다.
- 추가 `/tmp/test_doi_negative_review.py`는 중복 주석, 챕터 밖 review 경로, 줄바꿈 reason, comment injection, intro hash 누락 거부를 실제 CLI로 확인했고 통과했다. 원 fixture의 무승인·stale intro/review hash·누락·불필요·잘못된 DOI·빈 reason 거부도 통과한다.
- 코드상 plan/source/candidate/개별 operation/review hash를 확인하고 evidence 경로를 챕터 내부로 제한한다. 기존 intro는 baseline과 같아야 하며 허용 주석은 기존 intro를 바꾸지 않고 append한다. 본문 태그·근거등급·필드·항목 구조·TODO tail을 유지한다. 입력/final/순수 candidate/public source에는 쓰지 않고 reviewed-candidate.md/integration.json만 쓴다. 새 해시 독립 KR-FIT가 필요하다는 기록을 남긴다.
- 기존 관련 DOI marker가 intro에 있으면 거부하는 경로가 있다. 다만 이 regex는 DOI token 경계를 명시하지 않아 더 긴 DOI의 부분 문자열에도 보수적으로 거부할 수 있다. 우회 승인 문제는 아니며 별도 blocker로 세지 않았다.
- CONTRACT의 승인·hash·actual DOI delta 일치 요구는 적절하나 현재 추출기가 위 실제 DOI에서 계약을 충족하지 못한다. 보호 장치의 승인 review는 파일/hash 연결을 뜻하며 도구 자체가 인간 검토 내용의 진실성을 판정하는 것은 아니다.

## 검토 파일 SHA-256

아래 코드 해시에 대한 판정이다. 수정 후 재검토가 필요하다.

| 파일 | SHA-256 |
|---|---|
| `kr-harness/publication/scripts/humanize_publication.py` | `73ad92f435afaac6f5c6a8d55c99f324ff3a6cf0b77b2ef478e340e9661b057c` |
| `kr-harness/publication/scripts/tests/test_doi_annotations.py` | `8168c6762d4ce01cddf5f234a025b39463c69071f61c7a52816196741ec31f75` |
| `kr-harness/publication/CONTRACT.md` | `6875dfe1594766e3d2a33231c89e2d0ad6bcbd0a1187fc459f0057e3a333738a` |

## IT-B01 수정 후 독립 재검토

균형 괄호를 추적하는 현재 DOI 스캐너와 확대 fixture를 직접 검토했다. 내부의 `(...)`·중첩 괄호는 보존하고 URL 외부 닫는 괄호·각괄호/인용부호·전각 구두점 및 다음 URL을 경계로 삼는다. 비균형 DOI는 잘린 접두부로 승인하지 않고 거부한다. **IT-B01 해소: pass/block0/warn0.**

직접 실행한 증거:

- 현재 `python3 kr-harness/publication/scripts/tests/test_doi_annotations.py` 통과. 실제 CLI로 전체 Lancet DOI 승인, 잘린 marker 거부, 일반 DOI, Markdown·angle 링크, 전각 구두점, 공백 없는 다중 URL, 중첩 괄호, 비균형 URL 거부 및 승인/hash·불필요주석 검사를 실행한다. intro prefix/입력/final/strict candidate/public source 보존도 확인한다.
- 최초 독립 재현 `/tmp/test_doi_lancet_review.py` 및 `/tmp/test_doi_parentheses_review.py`는 현재 모두 통과한다. 전체 DOI를 적법하게 승인한다.
- 최초 잘못된 성공 재현 `/tmp/test_doi_truncated_review.py`는 이제 exit1 `duplicate or unnecessary DOI annotation`으로 거부되어 fixture의 과거 ‘성공’ 기대만 실패한다. 이는 이전 취약 동작이 사라졌다는 기대된 재현 결과다.
- 추가 독립 거부 fixture `/tmp/test_doi_negative_review.py`도 통과: 중복/챕터 밖 review/줄바꿈·comment reason/intro hash 누락 거부를 유지한다.
- 이번 수정은 DOI 집합 추출을 바로잡았으며 승인/검토 hash, intro 보호, strict candidate 보존, 실제 delta 일치 및 새 KR-FIT 필요 조건을 완화하지 않는다.
- CI는 setup-python 이후 DOI stdlib 회귀 검사를 실행한다. 전자책 `marked` 의존성이 필요한 frontmatter test 앞에는 lock 기반 `npm ci --prefix kr-harness/ebook --ignore-scripts`가 있다. 명령·순서는 타당하다. 원격 CI 실행 자체는 이 재검토에서 새로 확인하지 않았다.

### 재검토 current SHA-256

이 SHA가 최초 파일 SHA를 대체한다.

| 파일 | SHA-256 |
|---|---|
| `kr-harness/publication/scripts/humanize_publication.py` | `d1bc0958be0ef79e1f0bfa8331f38e9b979befa38c41d5237f9b317e63270638` |
| `kr-harness/publication/scripts/tests/test_doi_annotations.py` | `3db83d6342bfa7d64a6d3cd1f19ee0ad08c245b7cf183651ffaac18ff96bbdbf` |
| `kr-harness/publication/CONTRACT.md` | `39aac668b25caf13788f4e7ea1cfc53a7e9187b7146e3a6a54267e746368b8e2` |
| `.github/workflows/kr-check.yml` | `a14a49c010db93d2b34fb83001bc748f48dc42486ee270a8de2713c3cfa92358` |
