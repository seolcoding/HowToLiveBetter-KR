# 독립 코드 리뷰 r1 — PASS

검토 대상은 저자의 frozen r1 후보이며 운영 적용·출판·source registry 승인을 뜻하지 않습니다. blocker는 없습니다. 저장소 AGENTS.md, KR-GUIDE.md, CLAUDE.md의 관련 작업 경계와 publication CONTRACT/QUOTE-CLASSIFICATION-SPEC을 확인했습니다. 운영 코드/책/원본 run/기존 증거/후보/Git은 수정하지 않았습니다. 리뷰 결과와 실행 사본은 이 리뷰 디렉터리에만 작성했습니다.

## 바이트 및 실행 격리

저자 REPORT/candidate.patch/candidate-files/artifact-sha256의 전달 SHA를 독립 확인했습니다. baseline을 새 리뷰 사본으로 복사하고 `git apply --check` 후 exact patch를 적용했습니다(운영 checkout에 대한 Git 명령 없음). 5개 파일의 SHA/길이가 후보 목록과 일치합니다. checks SHA는 운영 `69a435b3a6549fded25a9796f5cdf01572951fba9feeb85db3bdcc0dd12599ef`에서 후보 `5f83f68e4acbc103ecde11e9a5c19d1015e0b514a36e9933ca10284489fa0bcc`로 바뀝니다. `patch-and-sha.json` 참조.

테스트는 새 프로세스와 별도 복사본에서 실행했고 `PYTHONDONTWRITEBYTECODE=1`, 리뷰 전용 TMPDIR을 사용했습니다. adversarial 결과는 실제 로드한 checks/verify_gates 경로도 기록합니다. snapshot은 저자 고정 사본을 읽기 전용으로 참조했고 전체 1112/1219/11/8개 파일의 SHA와 길이를 독립 확인했습니다(`snapshot-verification.json`). 운영 실행 중 자료를 corpus에 섞지 않았습니다.

## 독립 재현

|검증|결과|
|---|---|
|CI와 같은 test_footnote_identity.py|16 pass|
|기존 test_reviewed_quote_classification.py|35 pass|
|기존 local 6 suite|33 pass|
|ported upstream 전체|397 실행, 395 pass, 기존 2 skip|
|P3-only frozen667 원문 identity|baseline 5항목/7 failure → 후보 0|
|ch26e6 및 ch27e2 원문 identity와 실제 final|4개 비교 각각 baseline exit1 → 후보 exit0|
|frozen667/가용444 final|전체 record 차이0, 442 exit0/2 exit1/223 missing|
|fresh667/가용551 final|548→549 exit0, 3→2 exit1, 116 missing; ch26e6만 변경|
|두 corpus route|644 light/23 standard, manifest 차이0|

실행 명령은 리뷰 디렉터리에서 `python3 candidate/kr-harness/publication/scripts/tests/test_footnote_identity.py`, 같은 위치의 `test_reviewed_quote_classification.py`, `python3 -m unittest discover -s tests/local`, upstream-harness에서 `python3 -m unittest discover -s tests`입니다. corpus는 `python3 tests/audit_frozen.py {baseline,candidate} {actual-snapshot,fresh-snapshot}`, P3는 `python3 tests/audit_footnote_identity.py {baseline,candidate}`로 각각 새 프로세스에서 실행했습니다. 로그와 JSON을 보존했습니다.

upstream은 기존 tenth-module port를 유지한 별도 harness이며 후보 scripts/references를 독립 복사했습니다. 저자 최초 materialized-role 실패는 재현 성공으로 숨기지 않았습니다. 본 리뷰는 복구된 상대 symlink 3개가 실제 원래 역할 파일에 해석됨을 확인한 상태에서 실행했고 assertion/skip을 변경하지 않았습니다. 원격 GitHub workflow 전체나 live LLM 실행을 했다는 주장은 없습니다.

## 코드 판단과 추가 반례

변경된 기존 함수는 extract_inline_markers/check_footnotes 둘뿐입니다. check_numbers, quote/모달리티 검사, metrics/baselines/prepare/verify/quote_context/publication helper는 동일 바이트입니다. 법령 꼬리는 명시적인 `제…조/항/호` 완전 토큰에만 제외를 적용합니다. 숫자 삭제/주입 검사를 건너뛰지 않으며 파일/run/hash별 예외, identity 조기 성공, route/sample/metric/threshold 변경도 없습니다.

추가 adversarial은 번호 반복 identity, 동일 pair 반복 소실/재분배, 번호별 추가·삭제, 다른 번호의 앵커 교환, 앵커 변경, pair를 유지한 문장 재배치, 수치 없는 각주 삭제/반복 감소, 서지 정의 삭제/내용 변조, 법령 뒤 진짜 각주 삭제를 확인했습니다. 과제/X제 같은 단어 내부 토큰은 각주로 남고 법령 뒤의 실제 1)도 남습니다. 통계 소수/구간/연도는 각주로 오분류되지 않습니다. `adversarial.py`, baseline/candidate-adversarial.json 참조.

번호 Counter는 기존 집합 검사를 유지하면서 추가/삭제/재분배를 검출하고, (번호, 수치앵커) Counter는 동일 번호를 출력 첫 occurrence에만 비교하던 오류를 바로잡습니다. 같은 pair의 문장 재배치는 허용됩니다. 정의 추출/내용 보호는 그대로입니다. 원래 수치 없는 각주나 동일 숫자를 공유하는 문장 사이의 의미적 귀속은 50자 nearest-number proxy만으로 보장되지 않습니다. 원문에 각주·정의가 모두 없을 때의 조기 return과 중복 정의 label의 dict 처리도 기존 한계이며 본 패치가 새로 도입한 것이 아닙니다. 이 PASS를 완전한 의미 보존 증명으로 읽으면 안 됩니다.

35-suite의 clean10-module `-I` CLI 배포, 반복 quote 보존, source rendering enum, 경로 보호, 실패 원자성 검사가 실제 실행됐습니다. 새16-suite는 실제 assemble에 수치 중복 추가/삭제를 넣어 numbers conservation failure 및 성공 산출물 부재를 확인하고, stale runtime SHA의 accept09를 fresh finalizer context required로 거부합니다. 기존 check_numbers는 set 정책 그대로이며 전체 수치 반복 보호는 기존 publication helper Counter에서 수행됩니다.

CI는 경로 필터에 두 runtime/test 변경 경로가 포함되고, setup-python 다음의 조건 없는 필수 step으로 새 테스트를 호출합니다. continue-on-error/skip 조건이 없으며 실제 같은 CLI가16개를 실행했습니다.

## 도입 이후 경계

P3-only667 identity 결과는 full P1 identity 승인과 다릅니다. fresh corpus의 나머지550 final 및 frozen444 전체 보고서는 정확 동일합니다. ch13e24/e38은 no-registry에서 여전히 P1 미달이고 golden은 []입니다. 기존 승인/09 context는 새 checks SHA와 달라 재사용할 수 없습니다. 본 리뷰는 registry를 선택하거나 기존13 승인을 재사용하지 않습니다. ROOT 채택 후 별도 fresh finalizer, 실제 명시 context gate0, strict classified assembly를 수행해야 합니다. ch26e6/ch27e2의 honest hold09도 이 코드 리뷰나 후보 gate0만으로 승인되지 않습니다.
