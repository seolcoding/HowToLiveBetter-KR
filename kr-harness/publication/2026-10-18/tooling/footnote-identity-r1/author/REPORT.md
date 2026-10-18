# 반복 각주 identity / 한국 법령 꼬리 분류 수정 후보 r1

상태: **독립 코드 리뷰 대기. 운영 미적용.** 운영 코드·테스트·CI·book·publication 원본·Git index/commit/push를 변경하지 않았습니다. 아래 결과는 별도 `candidate/`에서만 실행했습니다. ROOT의 명시적 도입 전에는 어떤 hold도 해제되지 않습니다.

- 전체 패치 SHA256: `a3515c1133123ace3ae96743ea3357addcea7a561e6e7a337e966e225b966543`
- 후보 checks.py SHA256: `5f83f68e4acbc103ecde11e9a5c19d1015e0b514a36e9933ca10284489fa0bcc`
- 운영 기준 checks.py SHA256: `69a435b3a6549fded25a9796f5cdf01572951fba9feeb85db3bdcc0dd12599ef`
- 변경 파일 5개: checks.py, 별도 CI 단계, 새 16-test 파일, 실제 원문 fixture 2개. `candidate-files.json`에 정확 SHA/길이/기준 SHA가 있습니다.
- `candidate.patch`를 별도 `patch-check/` 기준 사본에 git apply --check 및 apply하여 5파일 모두 후보 바이트를 재현했습니다. `patch-check.json` 참조.

## 재현과 정확한 원인

실제 ch26 e6 원문 SHA는 `8ff3752b5c1ae22f40fc5b021b36613299e38648f45048e408824d94562a9345`입니다. 기존 finalizer는 본문 byte identity를 확인한 뒤 정직하게 hold했습니다. 원문→원문 baseline CLI도 exit1이며 수치 앵커 30→22, 2→1 두 경고를 재현합니다. `hold-snapshot/`은 원문/00/combined/manifest/entry_snapshot/final/09/actual gate의 외부 사본이며 `hold-snapshot-sha256.json`에 고정했습니다. 원본 파일은 쓰지 않았습니다.

첫 원인은 marker 추출입니다. 기존 정규식은 끝에 붙는 숫자와 닫는 괄호를 각주로 잡아 한국 법령 인용도 잘못 분류했습니다. `baseline-hold-markers.json`의 전수 목록은 다음과 같습니다.

| 원문 위치 | 잘못 추출한 번호 | 원문 끝부분 | 인접 수치 |
|---|---|---|---|
|847|2|제95조의2 제1호의2)|1|
|954|6|제22조의6)|22|
|998|6|제30조의6)|30|
|1594|3|제35조의3)|35|
|2139|14|제44조의12·제44조의14)|44|
|2226|2|제2조의2)|2|

후보는 이 여섯 항목을 각주가 아닌 명시적 법령 번호로 분류합니다. 후보 marker 목록은 []입니다. 이것은 원문에 각주가 없다는 특수 사례 분기나 파일/해시/경로 예외가 아닙니다. 모든 추출 후보에 동일한 좁은 문법 `(?<!\w)제\d+(?:조(?:의\d+)?|항|호(?:의\d+)?)$`를 적용합니다. 단어 내부의 `과제22조의6)`은 제외하지 않습니다. 기존 소수점/구간 꼬리 제외와 진짜 `...였습니다.1)` 분류는 유지됩니다. 법조문의 수치는 각주 분류와 별개로 원래 전체 본문 수치 검사 및 publication Counter에서 계속 보호됩니다.

두 번째 원인은 반복 번호의 앵커 대조입니다. 기존 코드는 출력의 번호별 첫 위치만 저장하고 입력의 모든 같은 번호를 그 첫 위치와 비교했습니다. 따라서 실제 각주가 `10이었다.1) ...20이었다.1)`처럼 정상 반복돼도 identity가 실패했습니다. 후보는 입력과 출력의 **(각주 번호, 인접 수치 앵커) Counter**를 대조하여 원래 anchored occurrence가 하나라도 없어지면 footnote_anchor를 냅니다. 같은 앵커의 반복도 합치지 않습니다. 동일 쌍을 유지하는 문장 재배치는 허용합니다. 인접 수치가 없는 원래 각주는 기존처럼 앵커 대조에서 제외하되 번호별 occurrence Counter와 정의 보존으로 보호합니다. 번호별 반복 횟수 변경도 footnote_count로 거부하여 추가/삭제/동일 집합 안 재분배를 빠뜨리지 않습니다. 기존 번호 집합 검사와 서지 정의 검사는 남아 있습니다.

최소 반례, 반복 앵커 손실/변조, 같은 번호 추가, 수치 없는 반복의 재분배, 진짜 각주 삭제, 법령 바로 뒤 진짜 각주, 통계 소수/구간, 완전한 법령 토큰 경계는 새 테스트에서 검증합니다. 전체 텍스트 identity 조기 return을 추가하지 않았습니다.

## 실행 결과

| 검증 | 실제 결과 |
|---|---|
| 새 CI 진입점 test_footnote_identity.py | **16 pass** |
| 기존 reviewed-quote CI 진입점 | **35 pass** |
| 기존 local 여섯 suite | **33 pass** |
| upstream 전체 | **397 실행: 395 pass / 기존 2 skip** |
| frozen 667개 P3-only identity | baseline 5항목/7failure → candidate **0failure** |
| ch26e6 원문→원문 전체 gate | baseline1 → candidate **0** |
| ch26e6 실제 final 전체 gate | baseline1 → candidate **0** |
| 추가 ch27e2 원문→원문 전체 gate | baseline1 → candidate **0** |
| 추가 ch27e2 실제 final 전체 gate | baseline1 → candidate **0** |
| 패치 적용 재현 | **5개 변경 파일 exact SHA 일치** |

새 테스트는 실제 publication assemble을 synthetic TEST-ONLY chapter에 호출하여 같은 수치 한 번 삭제/반복 한 번 삭제/반복 추가가 conservation failure numbers로 막히고 candidate/assembly가 생기지 않는 것을 확인합니다. 법령 수치 변경도 number_injected와 publication Counter가 계속 검출합니다. 기존 CI35는 quote occurrence·수치·양태·원입력 경로 보호·enum·실패 원자성·10모듈 독립 배포의 기존 음성 검사를 포함합니다. 원래 checks.check_numbers의 값 집합 규칙은 그대로이며 **P3 수치 자체를 새 multiset 정책으로 바꿨다고 주장하지 않습니다.** 반복 수치의 전체 정확 보존은 기존 publication helper의 Counter가 담당합니다. `preservation-audit.json`에서 helper 및 수치/인용/양태 등 다른 checks 함수가 byte-identical임을 확인했습니다.

upstream 실행은 이전 r2의 명시적인 tenth-module installer/runtime-boundary/Codex fixture port를 외부 harness로 복사해 사용합니다. `upstream-runtime-port.patch` 참조. 복사된 아카이브에서 Codex role 3개가 일반 파일로 물질화되어 최초 실행이 symlink resolve 계약 1건에 실패했습니다. 원래 역할 파일과 바이트가 같음을 확인하고 외부 harness의 세 링크만 원래 기대 토폴로지로 복원한 뒤 동일 assertion으로 재실행했습니다. 최초 실패 로그와 `upstream-fixture-repairs.json`을 보존했습니다. 테스트 assertion을 고치거나 skip을 추가하지 않았습니다. 기존 두 skip은 live Claude CLI 부재와 실측 live workspace 부재입니다. GitHub 원격 워크플로 전체를 실행했다고 주장하지 않습니다.

## 667개 전체 실제 corpus 비교

두 데이터셋 모두 **원문 667개의 입력 SHA와 가용 final 파일 SHA를 고정하고 동일 바이트로 baseline/candidate를 비교**했습니다. 각 데이터셋에서 route는 **644 light / 23 standard**, manifest 대비 route 차이0입니다. 입력, 기존 00 지표, manifest, 원문 라우트를 변경하거나 override하지 않았습니다.

1. `actual-snapshot/`: 이전 r2의 immutable frozen667 사본. 가용444 final 중 baseline/candidate 모두442 exit0,2 exit1,223 missing입니다. 모든 667 record의 route/automatic spans/full gate report가 완전히 동일합니다. `actual-snapshot-comparison.json` 참조.
2. `fresh-snapshot/`: 이 작업의 새 read-only 시점 고정667. 가용551 final 중 baseline548 exit0,3 exit1,116 missing → candidate549 exit0,2 exit1,116 missing입니다. **변경 record는 ch26e6 하나뿐**이며 golden의 false footnote_anchor 2개와 최종 verdict/status가 해소됩니다. 나머지666 record(다른 가용550 final)의 전체 보고서는 동일합니다. `fresh-snapshot-comparison.json` 참조.

fresh551 시점 이후 들어온 ch27e2는 별도 `ch27-e2-snapshot/`으로 증거를 보존했습니다. 당시 작성 중일 수 있는 09는 복사/승인하지 않았습니다. 기존551 corpus를 소급 갱신하지 않았으며 별도 재현 결과를 corpus counts에 더하지 않았습니다.

전체 frozen 원문에 대한 `check_footnotes(text,text)`는 full gate identity와 별개입니다. full gate는 P1 문체 목표 때문에 identity도 정상 경고일 수 있습니다. P3 identity에서 baseline 실패는 ch26e6(2), ch27e2(1), ch27e11(1), ch28e2(2), ch33e10(1)입니다. 후보는667개 모두0입니다. 이 목록은 아직 final이 없는 항목도 포함하며 그 final의 승인/전체 gate0을 주장하지 않습니다.

## ch13 기존 context와 운영 경계

no-registry full corpus의 기존 두 경고는 ch13e24와e38입니다. baseline/candidate가 동일한 P1 ending_comma_rate 미달(e24 z4.56→2.02, e38 z5.84→2.66)이며 golden은 둘 다 []입니다. 이 작업은 특별 registry로 이를 면제하지 않았고 새 source provenance나 번역 승인을 발급하지 않았습니다. 원래 별도 source quote context가 필요한 두 사례라는 사실과 현재 no-registry 결과를 그대로 기록합니다.

현재 old09의 classification_context는 이전 운영 checks SHA를 핀합니다. 두 old context 모두 baseline과 일치하지만 후보 checks SHA와 불일치합니다. `old-runtime-contexts.json`에 실제 old09/전체 context/파일 SHA를 기록했습니다. 새 16-test suite는 다른 모든 값이 같은 synthetic context에서 runtime SHA만 오래된 accepting09도 classified assemble이 fresh finalizer context required로 거부하며 성공 출력을 만들지 않음을 확인합니다.

따라서 독립 코드 리뷰 PASS 및 ROOT 도입 후에도 기존09의 단순 hash 치환·자동승인·이전 gate 재사용은 허용되지 않습니다. ROOT/A가 source registry 선택을 유지하더라도 새 runtime에서 두 항목을 독립 fresh-finalize하고, 실제 명시-context gate0과 새 classified assembly를 받아야 합니다. ch26e6/ch27e2의 기존 honest hold09도 이 후보의 gate0만으로 승인되지 않습니다.

## 보존 및 한계

- 런타임 10모듈 중 checks.py만 변경했습니다. metrics/baseline/prepare/verify/quote_context/helper는 기준과 동일하며 metric 정의·표본 조건·임계값·출판 수치 Counter를 바꾸지 않았습니다.
- `preservation-audit.json`은 운영 runtime/test/CI 기준 바이트와 보관 baseline 일치, 두 실제 snapshot 원본 파일 불변을 확인합니다. 운영에 새 파일을 쓰지 않았습니다.
- 별도 CI 단계는 후보 workflow에서만 추가했으며 기존 단계는 삭제/변경하지 않았습니다.
- 인접 수치 50자 proxy 자체의 한계는 기존과 같습니다. 수치 없는 진짜 각주의 문장 의미/인용 소유권은 자동 앵커만으로 입증하지 않습니다. 정확 final-body 의미 검토가 계속 필요합니다.
- 숫자 제거, run 예외, quote registry 우회, 임계값 변경, 실패 무시는 사용하지 않았습니다.
- independent review는 이 작성자가 하지 않았습니다. 본 보고서는 운영 적용이나 출판 승인이 아닙니다.
