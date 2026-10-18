# Upstream provenance

Source: https://github.com/epoko77-ai/im-not-ai

Commit: `b37e0206d31fffd9149bf57168d4d62eb2086bee`

Standalone Codex bundle copied with references dereferenced and the nine actual runtime scripts listed by upstream `install.sh` `RUNTIME_SCRIPTS`. Upstream files are unmodified except the local footnote parsing and attributed-quotation eligibility patches below. MIT license: [LICENSE](LICENSE). No installer or home-directory changes.

The publication helper restores the exact source-derived `01_input.txt` after the upstream preparation shim, whose sanitizer can trim trailing whitespace. Upstream sanitation and all gate thresholds remain unmodified. Combined metric inputs retain the upstream sanitation behavior.

## Local runtime patch — 2026-10-18

`scripts/checks.py` excludes digit-preceded decimal separators (`.`, `,`) and interval separators (`~`, `–`, `−`, `-`) immediately before a closing-parenthesis numeric tail from inline footnote recognition. For example, CI `2.5~3.1)` and `12~33)` are statistical values, not footnotes `1)` and `33)`. The original entry27 identity gate incorrectly failed because repeated decimal tails were assigned to the first false marker's numeric anchor. The same local patch also excludes leading-zero-omitted decimals such as `.29)` when the decimal point follows a numeric boundary (start of line, whitespace, opening bracket, range separator, or mathematical sign). Genuine sentence-attached references such as `결과였다.29)` and `20%.30)` remain footnotes. Actual ch03 entry22 identity previously failed on repeated `.29)` CI endpoints. This change only corrects token classification; no threshold, preservation check, anchor check, or gate acceptance behavior was weakened.

Validation: six local regression checks cover actual ch01 entry27 identity through the vendored production gate (exit 0), decimal/interval exclusion with real marker retention, missing real markers, a duplicate marker replacing another number, actual ch03 entry22 identity (exit 0), and omitted-zero decimal classification with deliberate real footnote loss/duplication still rejected. Six relevant existing upstream golden tests (footnote count, anchor relocation, definition changes, preserved references, parenthesized headings and years) also pass against the locally patched runtime. Regression command: `python3 kr-harness/publication/scripts/tests/test_footnote_decimal.py`.

## Local attributed-quotation eligibility patch — 2026-10-18

The upstream quick-rules Do-NOT excludes attributed direct quotations from detection and rewriting while preserving them verbatim. Actual ch05 entry5 has its only connective comma inside a direct quotation followed by the institutional source `(동행복권 로또6/45 소개)`. The previous P1 target demanded rewriting that protected source wording (identity z+5.84), contradicting the quotation rule.

- `scripts/checks.py` additionally recognizes an immediately following institutional-name + document-label parenthesis, through a bounded Korean grammatical bridge, as source attribution. Plain rhetorical quotation and ordinary unlabelled parenthetical asides remain eligible. Shared non-overlapping quote spans now drive both quotation fidelity and stylistic eligibility; nested spans are merged and occurrence positions are used explicitly.
- `references/metrics_v2.py` computes style metrics on eligible text with only those attributed quote contents excluded. It retains raw input character-count metadata and exposes exclusion counts. Primitive v1 metric functions, sample guards, baselines and thresholds remain unchanged. Quotation fidelity, numerical checks and change-rate gates still consume original full text.
- `scripts/verify_gates.py` freezes permitted quotation contents and occurrence counts from the original for both P1 measurements. After-text exclusions require an exact original protected quotation, not newly added or expanded quote wrappers. New attribution around author prose cannot acquire an exemption.

Seven production-CLI regressions cover actual entry5 identity convergence, golden rejection when its source quote changes, rhetorical and unquoted author style still targeted, the same connective comma outside the quote still targeted, speech-attributed/nested quote fidelity, newly wrapped author prose still warned, and expanded quotation wrappers still warned. The previous hold evidence and all input/final/public files remain untouched; a fresh finalizer decision is required before adoption. CI runs `python3 kr-harness/publication/scripts/tests/test_protected_quote_metrics.py`.
