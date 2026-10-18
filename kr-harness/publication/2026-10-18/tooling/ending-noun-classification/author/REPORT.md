# C11 고-final noun lexical-classification candidate

Only the external copied skill references/metrics.py differs from the current production skill. The previously reviewed prefix patch is retained byte-for-byte in this copy. Operational source, inputs, metrics, finals, gate evidence and manifests were not changed.

## Cause and scoped correction

ending_comma_rate counted the final syllable of the independent noun 연고 as verbal connective 고. A quote eligibility change cannot correct this, because the affected noun enumeration is author prose.

The candidate uses a small exact Korean lexical set of nouns whose bare forms are not a verb stem plus connective 고: 연고, 원고, 광고, 창고, 금고, 잔고, 경고, 선고, 최고. Predicative constructions require a copula or 하다: 연고이고, 광고하고, 경고하고, 선고하고, 최고이고. Those genuine connecting forms remain detected. This is an explicit approximate lexical classifier consistent with the standalone module's existing small-dictionary approach, not a complete Korean morphological analyzer.

Ambiguous forms 사고, 보고, 참고, 신고, 재고 deliberately remain detected; their nominal and verbal readings cannot safely be separated by suffix alone. No arbitrary noun-list suffix removal, entry ID, quoted-wrapper exclusion, or particular sentence exception is used. Compound words outside the exact set remain conservative potential false positives.

Both numerator and denominator now consume one shared connective-position iterator. A noun without a following comma must also leave the denominator. This can increase the ratio elsewhere, which is mathematically necessary rather than a weakened threshold. The previously unused all_endings intermediate is removed.

## Evidence

Proposed permanent regression test test_ending_noun.py: 7 tests pass. Includes all nine noun classifications in three contexts, 19 genuine/ambiguous connective forms, shared numerator/denominator examples, actual e14 identity/final production CLI exit 0, author C11 still exit 1, number injection/quote alteration rejected, P0 large-change abort and P5 tracked deontic loss rejected.

Upstream golden 38 and metrics_v2 69 tests pass. Raw upstream metrics has 21 passes and one expected absolute-path mismatch because its fixture points at the upstream checkout rather than the copied bundle. Relocating only test fixture BASELINE_PATH to the candidate bundle gives all 22 passes; metrics-relocated-result.txt records this. No production test or baseline content was changed.

667 original inputs were recomputed read-only with current route logic: 644 light / 23 standard; zero route changes. Raw C11 changes in 11 inputs are fully listed in validation.json. Some values increase after removing noun-only denominator matches. Existing finals were checked for those 11: ch01 e42 remains exit0 and ch13 e14 changes exit1 to exit0. Nine other final paths do not yet exist, so both production and candidate return execution error3; no final success is claimed there. Fresh identity comparisons are separately recorded in changed-input-final-gates.json and cases/.

Baseline JSON, thresholds, sample guards, original full-text P0/P3/P5 and checks.py numerical/quotation fidelity code remain byte-identical. Only references/metrics.py differs in the copied skill, verified file-by-file.

## Limits requiring honest reporting

This conservative exact lexicon does not solve all Korean noun/verb ambiguity, compound nouns, or all connective-suffix false positives. A larger morphology dependency was neither required nor introduced. Generic noun-enumeration context was rejected as an exclusion condition because verbal sequences can also be comma-separated.

An additional unchanged upstream limitation was observed while checking preservation: affirmative edits of `지 마세요` prohibitions are not detected by P5's current deontic lexicon (zero tracked matches in both versions). Tracked `해야 합니다` losses are detected. This patch does not claim broader negation coverage and does not modify that subsystem. The existing publication workflow's explicit semantic preservation obligations still apply.

Candidate evaluation does not authorize adoption of existing hold outputs. Independent code review and a fresh root-controlled finalizer/gate decision are still required.
