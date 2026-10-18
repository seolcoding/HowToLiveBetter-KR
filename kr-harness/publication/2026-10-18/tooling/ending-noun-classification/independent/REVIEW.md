# Independent ending-noun review: PASS

Decision applies to candidate.patch SHA256 `336c8a13977595aadad51b20d5797cdfe5f7a7772693d21df9fb1226c40fbd69` only. Candidate metrics.py SHA256 is `c17ef0bbb25f24fc1695068a319d421d35e4cffd9a8c277da3ad6a30ea96b8e3`. Current/retained prefix checks.py SHA256 is `3220de721c2556760f853d67de336d53b8e89bd1a3ed7b9b2971fe393441a9bd`. Detailed file identities: hashes.json.

No blocking correctness or policy issue found. Production runtime, book/public files, fixtures, saved gates, metrics/manifests and Git were not modified. Candidate execution and new artifacts are confined to this review directory and transient temporary directories. AGENTS/CLAUDE, KR-GUIDE and publication CONTRACT obligations remain in force.

## Classification judgment

The nine exact words 연고/원고/광고/창고/금고/잔고/경고/선고/최고 are general lexical exclusions, not per-entry or sentence exemptions. Their bare 고-final forms are not contemporary Korean verb stem + connective 고; actual verbal constructions require forms such as 광고하고/경고하고, and copular constructions 연고이고/최고이고. The complete contiguous Korean-word check retains these genuine connective forms and does not suffix-exempt compounds. Independent tests cover all nine, including punctuation/spacing, quotation contexts, attached compounds and real predicative forms.

Ambiguous 사고/보고/참고/신고/재고 remain eligible. This is the correct conservative choice because each can represent an actual verb connective; the patch intentionally leaves some noun false positives. No morphology-completeness claim is warranted.

The new shared iterator removes each recognized noun from both numerator and denominator. Ratios may rise when a non-comma noun leaves only the denominator; this is necessary consistency, not a lowered threshold. Independent arithmetic checks and 168 noun/ambiguous/mixed-form combinations verify bounded ratios. Independent-results.json contains 110 explicit classification/arithmetic examples.

## Fresh execution evidence

Re-executed supplied runners in this separate review copy, and wrote independent.py for independent adversarial/arithmetic/wrapper/relocation checks.

- Exact diff recomputed from production metrics.py to copied candidate matches candidate.patch byte-for-byte. Full copied skill comparison finds only references/metrics.py different. checks.py, metrics_v2.py, verify_gates.py, baseline files, sample guards, thresholds and original-text P0/P3/P5 code remain unchanged.
- Candidate's proposed seven regression tests: 7 executed, all passed. Actual e14 identity and existing final exit 0; numeric injection and quote alteration rejected; P0 large rewrite abort and tracked P5 deontic loss rejected. Author C11 remains targeted.
- Existing production quote suite relocated only to this candidate copy: 11 executed, all passed. Prefix quotation, immutable content, new and expanded wrappers, neighbouring rhetorical quotations remain covered. Separate independent forward-wrapper CLI test also preserves the author C11 target (z_after >2, exit1).
- Upstream golden: 38/38 pass; metrics_v2: 69/69 pass. Raw metrics: 21 pass, 1 fails solely because its test fixture hardcodes the upstream baseline absolute path. Reassigning only that test fixture BASELINE_PATH to the reviewed copy gives 22/22 pass. No baseline data or implementation was edited to obtain the relocated result.
- All 667 original inputs recalculated with candidate metrics and unchanged route logic: 644 light /23 standard; route disagreements zero. Exactly 11 raw C11 changes, matching supplied evidence. See validation.json.
- Fresh production/candidate identity and existing-final CLI comparisons for all 11 affected inputs exactly match author's changed-input-final-gates.json. ch01 e42 stays0/0, e14 changes1/0; other identity outcomes do not change. Nine finals are genuinely absent (final-existence.json), so their final exit3 results are execution errors, not passes. See cases/ for fresh CLI reports.
- Read the actual affected noun contexts (contexts.json): 최고 usage, named legal 선고/금고, advertising 광고, warning 경고, and e14 topical 연고 enumeration are lexical nonconnective usages. Nine increased ratios and the two removed-comma-noun cases are explained by consistent lexical reclassification; none require acceptance waivers.

## Limits and adoption boundary

This remains an approximate finite lexicon. Compounds outside the exact set and ambiguous words remain possible false positives. It does not change quotation or semantic-preservation rules. The pre-existing untracked prohibition morphology (`지 마세요`) limitation mentioned by the author is outside this patch; tracked 해야 합니다 losses remain rejected.

Passing e14 gates under a correct metric is not independent approval of the existing final's content or publication. Follow the fresh root-controlled finalizer and CONTRACT requirements. No previously failed entry, missing final, semantic change or warning may be silently waived.
