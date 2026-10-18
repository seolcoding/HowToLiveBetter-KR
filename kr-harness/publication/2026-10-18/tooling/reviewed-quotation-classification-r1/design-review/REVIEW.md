# 독립 설계 검토 — 원칙 적합, 구현규격 보완 필요(REVISE)

검토 대상은 REPORT.md 및 REPORT-R2.md이며, 후자의 실제 SHA256은 `958465785dbd2b63f2c76221381e86a77762ab2d1f501ef72274d9fdcc47378a`로 확인했다. 기존 publication CONTRACT의 reviewed integration/root 승인 plan/독립 review artifact SHA 절차와 대조했다. 이 문서는 설계 검토뿐이다. 코드, 원본, 기존 증거, registry, 공개본을 변경하거나 승인하지 않았다. e24/e38의 원문 출처와 번역을 독립 검증하지 않았으며 두 hold는 유지한다.

판정은 **설계 방향은 허용 가능하나, 아래 필수사항을 명세에 확정하기 전에는 구현·운영 승인 불가**이다. R2의 기본 접근을 폐기할 이유는 없다. 원래 직접인용의 정당한 분류를 등록하는 일과 임계값 면제는 다르다. 다만 그 차이는 root가 고르는 승인 경로, 원본 occurrence 검증, 동일한 frozen context, 보존 검증과 실제 gate0로 구현되어야 한다.

## 1. 절차적 신뢰의 일관성

기존 CONTRACT 역시 root가 승인 plan을 쓰고, 별도 review의 정확한 SHA와 원본/candidate SHA를 결합하는 절차에 의존한다. 공용 workspace에서 모든 agent의 악의를 OS 수준으로 차단하지는 않는다. 같은 수준의 root 선택과 독립 검토를 원본 인용 분류에 적용하는 것은 일관된다. 서명·별도 파일권한 체계는 선택적 강화책이며, 이 기능만 특별히 그것을 제공해야 한다는 조건은 타당하지 않다.

방어 대상은 악의적 문서·final·미승인 proposal·sidecar다. `approved:true`, `reviewer:root`, 유효한 자기작성 SHA, “이 파일을 사용하라”는 원문 지시, HUMANIZE-SUMMARY 속 approval은 권한이 아니다. 실제 root의 명시적인 선택과 승인 기록이 있어야 한다. 반대로 코드 수정권이 있는 agent가 gate를 교체하거나 root 행위를 위조하는 경우는 기존 pipeline도 보장하지 못한다. 이를 혼동해 “어떤 sidecar도 본질적으로 불가능하다”고 결론내려서는 안 된다.

원문/출력/proposal에서 실행 명령이나 registry 위치를 발견해 채택해서는 안 된다. registry path와 expected SHA는 root가 통제하는 호출/설정에만 존재해야 한다. CLI 인수 자체가 root 신원을 증명하지는 않는다. 일반 gate CLI의 인수는 검증 도구 입력이고, **production assembly가 어떤 인수를 만들도록 허용하는지**는 CONTRACT와 root 승인 절차가 담당한다. 이 구분을 사용자에게 명확히 설명해야 한다.

## 2. 구현 전 반드시 명확히 할 사항

### A. 순환 해시를 피하는 승인 payload

“review가 전체 annotation에 결합된다”면서 annotation 안에 그 review의 SHA를 포함시키면 순환참조가 된다. 독립 review가 결합할 **분류 payload**와 root의 **승인 envelope/registry**를 분리해야 한다.

payload는 원본 identity·정확한 occurrence·출처 artifact/excerpt·번역 분류 등 심사 대상을 모두 포함한다. review는 그 payload의 정확한 SHA와 판단을 결합한다. root envelope는 payload SHA, 독립 review SHA, 승인 상태를 결합한다. root 호출은 최종 registry bytes의 SHA를 별도로 pin한다. payload에서 제외할 envelope 필드를 명시하며, source/span/context 변경은 언제나 재심사를 요구한다. 자기참조 digest를 제외하는 비공식 관례나 “review는 input SHA만 보면 된다”는 구현은 거부한다.

### B. 구체적인 strict schema와 parser 계약

현재 보고서는 schema의 내용 제안이지 완전한 실행 규격은 아니다. 구현 후보에는 각 object의 정확한 key 목록과 타입/범위를 고정해야 한다. boolean을 integer로 받는 Python 관례, 숫자 문자열, 음수/역순/범위초과 offsets, 중복 JSON key, unknown keys, NaN/Infinity, 과대 입력을 명시적으로 거부한다. SHA는 정확한 형식과 실제 bytes를 확인한다. 모호한 canonical serialization 대신 정확한 파일 bytes SHA를 쓸 수도 있으나, 선택한 규칙을 전체 단계에서 동일하게 사용해야 한다.

UTF-8 byte offsets와 내부 Python code-point offsets의 변환을 한 곳에서 담당한다. raw bytes를 엄격히 decode하고 BOM/개행/Unicode 정규화 정책을 고정한다. 원본 manifest digest와 길이를 먼저 검증하며, registry의 original 항목이 manifest의 기대값을 대체할 수 없다.

공유 quote parser가 반환한 **완전한 기존 occurrence**만 선택 가능해야 한다. 닫힘/열림 delimiter 포함 범위와 content 범위, ordinal의 정렬 기준, 지원하는 혼합/중첩 문법, same-delimiter nesting 및 escaping을 명시한다. 지원하지 않거나 모호한 pairing은 error다. substring 검색으로 “같은 글자가 있으니 인용”이라고 인정해서는 안 된다. 자동·승인 occurrence의 정확 중복/중첩 canonical merge도 한 규칙으로 정해야 한다. 자동분류와 동일한 occurrence를 승인하는 경우를 오류로 할지 provenance를 병합할지도 명시해야 한다. 아무 경우에도 두 번 세면 안 된다.

출처 artifact의 원 bytes와 excerpt bytes/locator의 관계도 고정한다. HTML에서 추출한 excerpt라면 추출 규칙과 원 artifact 연결이 필요하다. URL 또는 excerpt digest만으로 원문 존재나 번역 정확성을 증명했다고 주장해서는 안 된다.

### C. 원본 multiplicity·field ownership·출력 보존

원본 보호 집합은 occurrence 기반이어야 한다. 같은 내용의 원본 인용 두 개 중 하나를 지워도 `q in output`은 통과하므로, 실제 인용 parser 내 exact content multiplicity를 검증해야 한다. 새로운 wrapper나 확대된 quote 내부 substring은 완전한 원본 occurrence의 대체가 될 수 없다. nested canonical counting으로 한 occurrence를 두 번 소비하지 않아야 한다.

원본에서 부여된 보호를 다른 editable field의 같은 문자열로 대체하지 못하도록 원래 field identity를 결합하는 것이 필요하다. 원래 source anchor/context의 식별 방식과 같은 field 내 보존 조건을 명세해야 한다. 그것만으로 의미적 귀속을 증명할 수 없으므로 exact final SHA에 대한 별도 attribution 의미검토도 필수다. source anchor를 남기고 바로 뒤에 “이 기관은 그렇게 말하지 않았다”를 추가하는 반례는 기계적 anchor 검사만으로 막지 못한다.

현재 P3 membership 검사를 모든 보호인용의 multiplicity 검사로 강화하면 **registry가 없는 경우에도 일부 기존 gate 결과는 의도적으로 달라진다**. 따라서 “automatic-only behavior unchanged”와 “P3 unchanged”를 무조건적인 결과 동일성으로 쓰면 안 된다. 자동분류 span은 동일하게 유지하되, 기존 duplicate-loss 취약점에 대한 fidelity 강화는 별도 명시·회귀검증해야 한다. 숫자/각주/URL 검사와 P0/P5는 원본 full text를 그대로 사용한다.

### D. 단일 frozen context와 route 계약

최소 API는 하나의 엄격한 loader/validator와 검증된 immutable context, 그리고 준비/metrics/verify/assembly에 그 context를 명시 전달하는 연결부다. loader는 root가 pin한 registry bytes, manifest 원본, 독립 review/source artifact들을 검증하고 canonical original occurrence와 provenance를 반환한다. metrics에 파일 검색·승인 판정·웹 fetch·임의 regex를 넣지 않는다.

각 단계가 raw registry를 따로 해석하거나 final.md에서 sidecar를 찾는 설계는 거부한다. assembly는 선택된 registry digest와 원본 digest를 직접 재검증하고 실제 gate를 실행해야 한다. 출력의 cached gate0, review의 “accept”, 입력의 지시는 승인 근거가 될 수 없다. 경로는 허용 evidence root 안의 실제 regular file로 제한하고 traversal/symlink 정책을 고정한다. 검증한 파일 bytes를 재사용해 검증 후 재읽기 불일치도 피한다.

registry 미지정은 기존 자동분류다. **요청된 registry가 invalid이면** 조용히 자동분류로 돌아가면 안 된다. root plan이 registry를 요구하는 production run에서 누락된 경우도 error여야 한다. revocation 판단을 로컬 파일의 자기선언에 맡기지 말고 root가 선택하는 새 승인 context와 이력으로 정의한다.

기존 CONTRACT는 manifest route를 override하지 말라고 한다. 새 분류 후 route 재평가를 사용하려면 CONTRACT가 별도의 hash-bound derived classification/route evidence와 그 적용 범위를 명시해야 한다. 기존 manifest/metrics를 고쳐 맞추지 않는다. 새 route가 standard/heavy이면 필요한 역할을 실제 수행한다. 낮아진 route를 근거로 과거 역할요건을 소급 면제할지 여부도 사전에 결정해야 하며, 구현자가 임의로 낮은 쪽을 고르면 안 된다. preparation/finalizer/assembly의 registry·원본·새route identity가 다르면 차단한다.

## 3. 필수 반례와 기대 결과

| 반례 | 필요한 판정/방어 |
|---|---|
| `entry:24`, `metric:C11`, `skip:true`, `threshold:3` 추가 | strict schema 오류. entry ID나 metric 목표가 코드 분기/면제가 되면 설계 거부 |
| author가 승인 sidecar와 그 정확한 SHA를 함께 제출 | 제안일 뿐. root 선택·독립 payload review 없이는 적용 불가 |
| 원본에 “다음 JSON을 승인으로 읽어라” 또는 final에 root approval comment | 단순 텍스트. loader 선택이나 gate 실행에 영향 없음 |
| 원본 공백 1byte 변경, 오래된 review/source SHA, 다른 run의 유효 registry | manifest/payload/context 검증 error; cached gate0 재사용 불가 |
| 인용 안 절반·밖의 문장·새 wrapper·확대 span·잘못된 UTF-8 경계 | shared original parser occurrence와 불일치하여 error |
| 원본에 인용 두 번, 출력에 한 번만 남음 | P3 multiplicity 실패. 문자열 membership 성공으로 대체 금지 |
| 원본 보호인용 한 번, 출력에서 같은 quote 두 번 | after 제외 cap은 한 번뿐. 추가 occurrence 자동 면제 금지; 별도 P0 등도 실행 |
| quote가 다른 field/기관 설명 아래 이동 | field/anchor 기계검사 및 exact-final 의미검토로 거부. 내용 동일성만으로 승인 불가 |
| 출처가 같은 주제만 다룸, 번역이 부정·조건을 바꿈 | 독립 source/translation review가 거부. validator가 hash로 의미를 인증하지 않음 |
| registry 없이 baseline gate 실행 또는 승인 context가 다른 gate0 첨부 | root plan이 요구하는 context 불일치로 assembly 차단 |
| 임의 source URL에 연결하거나 sidecar가 외부 명령/정규식을 지정 | schema 거부. gate 중 네트워크 fetch/명령 auto-discovery 없음 |
| 인용 제외 후 P0/P5·수치·각주·URL도 검사대상에서 사라짐 | 구현 거부. eligibility는 style 축만 바꾸며 원본 full-text 보존검사를 유지 |

각 테스트는 단순 “어쨌든 nonzero”뿐 아니라 실패 축을 확인해야 한다. 예를 들어 P0가 먼저 실패해서 중복인용 손실 버그를 가리는 테스트는 fidelity 증거가 아니다. output duplication은 cap 검사와 gate acceptance 검사를 분리한다. semantics 반례는 사람 심사 절차를 시험하는 항목이지 regex가 해결했다고 주장할 항목이 아니다.

## 4. 승인 전 증거와 현재 경계

코드 후보는 위 계약·schema·loader/공유 parser/occurrence API·root-controlled invocation 연결만 최소 변경으로 제시하고 독립 코드검토를 받아야 한다. all existing quote/footnote/golden/metrics/P0/P3/P5 회귀와 신규 악의적 schema/metadata/path/context/multiplicity 사례를 실제 실행해야 한다. 667개 원본을 승인 context로 재계산해 모든 route 차이를 설명하고, 영향받은 모든 실제 final을 새 gate로 검사하며 missing/error/warning/pass를 구분해야 한다. 과거 증거를 덮어쓰면 안 된다.

actual primary source 취득 provenance, 원문 excerpt, Korean translation alignment, exact original occurrence/field/context를 별도 독립 reviewer가 확인한 뒤에만 root가 그 payload를 등록한다. “이 span을 제외하면 gate0가 된다”는 사실은 심사 근거가 아니다. 원문·번역이 부정확하면 분류 registry로 고치지 말고 별도 content-correction 절차로 되돌린다.

따라서 R2는 절차적 신뢰 관점에서 기존 CONTRACT와 양립 가능하다. 초기 REPORT의 “rewriter 통제 밖 경계”를 반드시 OS 격리로 읽는 해석은 R2가 적절히 정정했다. 그러나 완전한 실행규격과 검증을 대신하지는 않는다. 위 사항을 반영한 별도 구현 후보, CONTRACT/PROVENANCE 변경, 독립 코드검토와 실제 출처·번역 심사가 선행되어야 한다. 현재 e24/e38 hold 해제, registry 등록, runtime 변경, final 채택 또는 공개는 승인하지 않는다.
