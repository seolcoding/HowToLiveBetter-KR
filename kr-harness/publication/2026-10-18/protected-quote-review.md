# 보호 직접인용 문체 적격성 독립 검토 — 2026-10-18

판정: **pass (block 0, warn 0)**. 실제 원문에서 출처가 명시된 직접인용만 문체 지표에서 제외하고 인용 원문 자체는 golden 검사로 보호한다. 이번 수정으로 새로운 게이트 우회나 라우트 불일치를 재현하지 못했다. 이전 hold를 지우거나 자동 승인으로 바꾸지 않았으며, 이 코드 검토와 별개로 새 finalizer 결정이 필요하다.

## 규칙·코드 일관성

- quick-rules Do-NOT은 ‘발화자가 있는 직접 인용’을 탐지·윤문에서 제외하고, 필자의 자문·강조 따옴표는 대상으로 남긴다. actual ch05e5는 원래 입력의 `총 당첨금은 … 50%이며, 40% … 활용` 뒤에 `(동행복권 로또6/45 소개)`가 붙는다. 새 괄호 출처를 출력에서 발명한 사례가 아니다. 해당 입력의 기관명+문서명은 출처 귀속으로 읽을 수 있어 저자 문체에서 제외하는 해석이 타당하다. 이 검토는 동행복권 문서의 경제적·법률적 사실을 새로 감사한 것은 아니다.
- checks의 shared protected_quote_spans는 인용 위치를 전달하므로 같은 문자열의 첫 등장만 보던 모호함을 줄인다. 겹치는 nested 범위를 합치며, golden과 metrics가 같은 귀속 분류를 쓴다. 기관명 접미사와 문서표지 및 제한된 한국어 bridge를 요구하고, 일반 `(내 생각)`은 출처로 분류하지 않는다.
- verify_gates는 before에서 확보한 인용 내용과 발생 횟수를 Counter 허용량으로 고정한다. after의 분류가 새 보호인용을 찾더라도 before 내용과 정확히 일치하지 않거나 허용 횟수를 초과하면 style 제외를 얻지 못한다. 원문 인용을 확대해 저자 문장을 흡수하는 wrapper도 내용이 달라져 제외되지 않는다. golden은 원문 보호 문구 자체가 after 전체에 그대로 있는지 계속 검사한다.
- 보호인용 본문만 style 대상에서 빼며 원래 char_count metadata는 유지한다. primitive v1 함수, baseline, sample guard 구현과 gate 임계값은 변경되지 않았다. 적격 텍스트를 대상으로 같은 guard/분모를 계산하는 것은 명시한 Do-NOT 범위 조정이다. P0 문자율, P2 전멸, P3 숫자·인용 보존, P5 서법은 전체 원문/출력을 계속 받는다. 이번 diff에서 해당 정책 완화는 없다.
- PROVENANCE는 바뀐 세 파일과 quote eligibility·fidelity 공유 및 원문 고정 허용량을 명시한다. 기록과 실제 코드 범위가 맞는다. 기존 분류기의 자연어 귀속 판단은 정규식이므로 모든 언어 문맥을 의미적으로 증명하는 기능은 아니다.

## 실제 실행한 검증

1. `python3 kr-harness/publication/scripts/tests/test_protected_quote_metrics.py`: **7/7 통과**. 실제 e5 입력을 읽고 temporary before/after 파일로 production verify_gates CLI를 호출한다. 보호 원문 identity 수렴, 인용 변경 golden거부, rhetorical/저자문장 C11 잔존 target, 인용밖 C11 target, 신규 wrapper 우회불가, 기존 quote 확장 우회불가, speech/nested 귀속을 확인한다. 테스트가 예상 z값을 하드코딩해 통과시키거나 runtime 검사를 대체하지 않는다.
2. 실제 `ch05/_workspace/2026-10-18-005-7f82`에서 원래 01_input.txt→identity 및 01_input.txt→final.md를 같은 upstream verify_gates CLI로 각각 실행했다. 둘 다 **exit0**, P1 s1_targets=[], P3 golden=[], 문자율0%. 기존 09_finalize/hold·게이트 파일을 덮어쓰지 않았다. 직접인용의 `50%이며, 40%`를 `50%입니다. 40%`로 바꾸는 회귀는 **quote_altered**로 거부된다.
3. 실제 quote 뒤 귀속을 `(내 생각)`으로 바꾸거나 따옴표를 없앤 identity는 exit1이며 ending_comma_rate z_before>2 target이다. 원문 보호인용 외부에 같은 C11을 더한 경우도 exit1 target이다. before에 없던 출처 wrapper 및 원문 quote 확대는 after z>2가 유지되어 경고된다.
4. 기존 `test_footnote_decimal.py` **6/6 통과**, 기존 실제 CLI `test_doi_annotations.py` 통과. 이번 shared quote 도입이 앞서 승인한 통계/각주·DOI 회귀를 깨지 않았다.
5. **667항목 전체 read-only 라우팅 비교**: 각 원래 01_input.txt를 현재 compute_all_v2와 prepare_monolith_input.compute_route_hint에 직접 넣고 보존된 00_metrics.route_hint와 비교했다. 현재 light644/standard23/heavy0, **불일치0**. 보호 quote가 탐지된 입력은 ch02e39(11자), ch05e5(42자), ch05e10(19자), ch13e15(17자), ch27e4(15자)의5개다. 원래 입력/00_metrics는 수정하지 않았다.
6. CI의 새 명령은 setup-python 이후에 있으며 Python stdlib만 필요한다. 기존 각주·DOI·전자책 검사 순서와 의미는 유지한다. 이 검토는 원격 GitHub Actions를 새로 실행한 결과를 주장하지 않는다.

## 현재 파일 SHA-256

검토 당시 실제 바이트다. 이후 코드/결과가 달라지면 해당 범위 재검토가 필요하다.

| 파일 | SHA-256 |
|---|---|
| `.claude/skills/humanize-korean/scripts/checks.py` | `51f7c3759fbfee0fb4a10e73eaac57ebd067f7a29cbe0387072d273cc589d757` |
| `.claude/skills/humanize-korean/references/metrics_v2.py` | `408aec9fe3b262d43b56295726f3a35597c0dd3f0fe2173f6207cbde6ead8be7` |
| `.claude/skills/humanize-korean/references/metrics.py` | `4b12b3fcabb48c9d92ec8a051954650750e0199b6e6821ee0b2686575644ebe8` |
| `.claude/skills/humanize-korean/scripts/verify_gates.py` | `32693301a32dbbc630aaa196acfd66741e0ce2258895a1adfd65e2816f49db28` |
| `.claude/skills/humanize-korean/scripts/prepare_monolith_input.py` | `3774a9faecf3791057d4c8e887dd222e701d131ac1605ba4de2e76c7c064a9a2` |
| `.claude/skills/humanize-korean/references/quick-rules.md` | `7a8e66c7b9326c1df7413f7a5662d69e89907591e16ba740e5746bf01f544b85` |
| `.claude/skills/humanize-korean/PROVENANCE.md` | `6f994646d0c390b583ac8e4c69b4984d7e23bc0e34e075c83857aa88ac1ebd8d` |
| `kr-harness/publication/scripts/tests/test_protected_quote_metrics.py` | `f3f52efd4e3088c2efc04c1bbff45d9c298d19bf2617e0731895fa8102f2c6d4` |
| `kr-harness/publication/scripts/tests/test_footnote_decimal.py` | `d742acba745364e3cd2dd7e3fb25c1cad0c2498f768fb2d2524b8c45d3fa7a6a` |
| `kr-harness/publication/scripts/tests/test_doi_annotations.py` | `3db83d6342bfa7d64a6d3cd1f19ee0ad08c245b7cf183651ffaac18ff96bbdbf` |
| `.github/workflows/kr-check.yml` | `b5e9b6cb462af811bcc5aebbfe3a2daa5fe3b053b7065ae2aa5fc306665747bd` |
| `kr-harness/publication/2026-10-18/ch05/_workspace/2026-10-18-005-7f82/01_input.txt` | `673d02556ed4f48f8f953f7617a367a7b794095cd6d4c53da3df13e2cc3ec72c` |
| `kr-harness/publication/2026-10-18/ch05/_workspace/2026-10-18-005-7f82/00_metrics.json` | `d87949c08799ebb5ec46c82ac75ed635351fe154460b5b16416f7f8c7f6d7482` |
| `kr-harness/publication/2026-10-18/ch05/_workspace/2026-10-18-005-7f82/final.md` | `b299c4ff07551c4f2eda97f43c4bd9acad400d5c218aed2125e4ba8604c4de3f` |
