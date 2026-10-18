# SPEC-R3 독립 재검토 — PASS, 구현 후보 작성에만 한정

검토한 정확한 파일: `/workspace/.cache/howtolivebetter/publication/quote-attribution-design/SPEC-R3.md`.

실제 SHA256: `ede7ecf4a7f7f2c35a3065a9ee90263df03d799146a1b89eeb6bed0edbfe2496`.

**판정: 이 SHA의 명세는 fail-closed 구현 후보를 작성하기에 충분하다. candidate implementation 작성만 승인하며, 코드 채택·운영·registry 등록·실제 출처/번역 승인·e24/e38 hold 해제·final 채택·공개는 승인하지 않는다.** 이전 REVIEW A–D의 차단 수준 명세 공백은 해소되었다. 새로운 치명적 자기모순이나 임계값 면제 경로를 발견하지 못했다. 실제 코드나 테스트가 존재한다고 판단한 것은 아니며 실행 검증은 하지 않았다.

## 이전 요구와 직접 대조

| 이전 항목 | R3 대응 | 판정 |
|---|---|---|
| A: review와 annotation의 순환 SHA | §2 payload에 review/registry identity를 두지 않고 review→payload, registry→payload/review, root호출→registry로 exact bytes를 결합 | 해소. 원본·source·final body가 바뀌면 새 payload/review/root SHA가 필요하다 |
| B: concrete schema/type/UTF-8/parser | §3–4 exact keys·타입·enum·수량/크기/깊이·중복key 거부, §7 byte mapping과 complete occurrence/ordinal/manual nonnested 범위, §10 literal source excerpt | 구현 가능한 구체성. 임의span·분절·새 wrapper·unknown exemption key는 error3 |
| C: multiplicity·field·anchor·final 결속 | §6 raw final body SHA, §7 같은 field의 unique literal source anchor, §8 complete-occurrence multiplicity와 cap | 해소. 내용 한 번만 남겨 중복손실을 숨기거나 다른 field로 대체할 수 없다 |
| D: 동일 context/TOCTOU/route | §5 retained descriptor bytes, §9 in-memory gate와 명시 registry/SHA/manifest, fresh finalizer/assembly context, derived route와 기존 manifest 불일치 error3 | 해소. 원래 route를 고치거나 역할요건을 낮추지 않는다 |

P3 membership→multiplicity 강화가 **registry 없는 호출에도 의도적으로 영향을 준다**는 점을 §1/8/10에서 명시했다. 따라서 이전의 “기존동작 동일” 모순도 해소됐다. 자동 eligibility grammar 유지와 P3 fidelity 강화는 별개이며, threshold·baseline·sample guard·P0/P5 및 수치/각주/URL 검사를 완화하지 않는다.

## 신뢰와 승인 경계

R3는 기존 reviewed integration과 같은 절차적 trust 모델을 정확히 유지한다. root만 promotion/선택하고, 별도 reviewer가 payload와 실제 원문/번역/원본·최종귀속을 심사하며, SHA는 그 심사대상 bytes를 고정한다. role string이나 status만으로 독립성·진실성을 증명하지 않는다는 한계도 명시한다. 전권 code-writing actor의 pipeline 교체를 방지하지 못한다는 사실은 기존 CONTRACT에도 해당하며, 이 기능만의 설계 결함은 아니다.

악의적 원문·summary·final·미승인 proposal에서 config를 찾아 실행하는 통로는 없다. explicit root invocation token이 없으면 미승인 sidecar는 효과가 없다. 유효한 승인 registry라도 다른 run/body/manifest에 재사용할 수 없다. 코드가 실제로 이 경계를 유지하는지는 별도 독립 코드리뷰 대상이다.

root가 registry 사용을 선택한 후 flags를 임의로 생략하는 행위는 절차 위반이라는 설명도 적절하다. CLI 자체가 root 신원을 인증한다고 과장하지 않는다. assembly는 선택된 configuration과 fresh finalizer context를 대조하고 실제 current bytes로 regate한다. 이 절차와 root 선택을 CONTRACT에 문서화하는 것이 운영 선행조건이다.

## 범위 축소의 타당성

late-classification v1에서 route 변경을 양방향 모두 error3로 막은 것은 기존 manifest no-override와 양립하는 보수적 선택이다. 새로운 route upgrade/downgrade 구현까지 이 후보에 넣을 필요가 없다. 기존 00_metrics를 고치지 않고 별도 증거를 남기는 점도 타당하다.

manual nonnested/standalone 인용, 네 field 물리행, exact raw source substring, PDF/HTML-rendering 추출 제외, final body 변경 시 재심사는 의도적인 v1 제한이다. 실제 인용을 모두 처리하지 못할 수 있으나, 처리할 수 없는 case를 예외로 통과시키지 않으므로 안전성을 약화하지 않는다. 해당 기능이 필요하면 별도 설계를 해야 하며 unsupported case를 native/verbatim으로 거짓 표기하면 안 된다.

일반 CLI의 P3 multiplicity 강화와 assembly의 in-memory core는 registry 기능 외의 코드에도 영향을 주지만, 각각 명시된 기존 보존 취약점과 검증 후 재읽기 문제를 해결하기 위한 직접적인 의존 변경이다. 이 범위를 넘어 metric 개편·임의 wrapper 허용·source 추론·웹 fetch를 추가할 근거는 없다.

## 구현 후보에서 반드시 확인할 정확한 해석

다음은 새 기능 요구가 아니라 명세의 일관된 구현을 확인하기 위한 사항이다. 다른 해석을 채택하면 구현 승인을 보류해야 한다.

1. **Context와 함수 인수 결속:** `evaluate_gate`나 metrics API에 전달한 before/after가 context에 보관된 원본/검토 final bytes와 다르면 error3여야 한다. manifest의 genre/route 입력도 고정돼야 한다. valid context 객체를 다른 텍스트에 적용하는 경로를 남기면 안 된다. no-registry generic CLI에는 별도의 기존 동작이 적용된다.
2. **중복 선언과 artifact 재사용 구별:** registry의 duplicate record/payload/review/원본 선언 및 다른 evidence role로의 inode alias는 거부한다. 반면 같은 source artifact를 여러 quotation이 **동일 role로 참조**하는 것은 distinct-artifact 한도와 immutable cache의 취지에 맞게 처리해야 한다. §4의 일반 “duplicate paths” 문구를 모든 source 참조의 전역 금지로 확장하거나, 반대로 payload/review alias를 허용하는 것으로 해석하지 않는다. 재사용 허용 여부는 구현 docstring/회귀에서 명시한다.
3. **두 실패축 분리:** 승인 이후 final body를 변조하면 loader에서 body-hash error3가 먼저 나는 것이 맞다. 이 케이스로 P3 multiplicity가 작동했다고 주장하면 안 된다. P3 단독 회귀는 no-registry에서 손실을 직접 검증하고, registry에서는 정확히 결합된 fixture body에 대해서도 gate가 원본 multiplicity를 독립 검사함을 확인해야 한다. 잘못된 semantic approval fixture를 의도적으로 만들어 검사할 수 있으나 실제 registry 승인이어서는 안 된다.
4. **자동 parser 호환성:** shared parser 도입으로 모든 자동 quote span을 몰래 strict manual 문법에 제한하면 안 된다. nested automatic canonicalization, short quotes, mixed styles와 ambiguous cases의 기존 eligibility/새 complete fidelity 차이를 각각 기록한다. 667 route 동일성만으로 span/fidelity 동일성까지 입증했다고 주장하지 않는다.
5. **Anchor는 의미 인증 아님:** 같은 unique anchor를 남긴 채 반대 의미의 문장을 끼워 넣을 수 있다. exact body에 대한 independent review가 이 반례를 실제 심사해야 하며, anchor validation 결과로 final_attribution을 자동 승인하면 안 된다.
6. **Snapshot 종료 후 파일 변경:** 현재 호출은 retained bytes만 사용해야 한다. 최종 assembly 출력도 검증한 bytes에서 생성하고, 나중의 publish/다른 호출은 최신 파일과 context를 새로 검증해야 한다. `stat` 검사만 하고 subprocess가 다시 파일을 읽으면 명세 위반이다.
7. **실패증거/성공증거 구분:** invalid requested registry에서 자동분류 fallback, 부분 성공 context, stale cached gate0, warning 승인, error3를 통과로 취급하는 일이 없어야 한다. invocation directory 일부만 만들어진 경우도 성공증거로 승격하면 안 된다.

## 구현 승인 전 필요한 증거

§11 matrix와 기존 quote/footnote/golden/metrics 회귀를 실제 구현 대상으로 실행해야 한다. unknown/duplicate keys, coercion, stale SHA, 원본/최종 body whitespace 변조, path/symlink/alias, 반쪽 인용/중첩 manual, source excerpt 불일치, 다른 run/context, duplicate loss, wrapper 확대·신규·추가 occurrence를 축별로 확인한다. P0가 먼저 실패해서 quote fidelity 버그를 숨긴 결과를 quote 보존 증거로 제시하면 안 된다.

기존 자동 protection span과 no-registry 강화로 달라지는 결과를 설명하고, 667 route 비교 및 모든 영향받은 실제 final gate의 missing/error/warning/pass를 분리해 기록해야 한다. historical gates/metrics/manifests는 그대로 보존한다. derived route가 하나라도 원본과 다르면 v1으로 사용 불가이며 새 route정책을 즉석 도입하지 않는다.

마지막으로 실제 source/translation review는 아직 존재하지 않는다. 독립 reviewer가 원문 artifact 취득 provenance, 정확한 raw excerpt, Korean translation의 수치·조건·부정·범위, 원본·최종 source ownership을 확인하고 root가 exact payload를 승인하기 전에는 실제 registry를 만들 수 없다. 이 설계 재검토는 그 절차나 실제 gate0를 대신하지 않는다.

**결론: SPEC-R3의 위 SHA로 격리된 구현 후보 작성을 진행해도 된다. 운영 적용 및 e24/e38 승인은 계속 별도 보류다.**
