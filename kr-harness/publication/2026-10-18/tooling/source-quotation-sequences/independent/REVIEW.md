# Independent quote-passage review: PASS

Decision binds candidate.patch SHA256 `70ae8888c1e6c5d72fd55a8fcea21dc9e3abaf89cd1efc838d78898b932c632b` only. File hashes are in hashes.json. Production base checks.py remains SHA3220de721c2556760f853d67de336d53b8e89bd1a3ed7b9b2971fe393441a9bd; retained metrics.py is SHAc17ef0bbb25f24fc1695068a319d421d35e4cffd9a8c277da3ad6a30ea96b8e3.

No blocking issue found for the proposed local grammar correction. This review uses the separate skill copy here; no production runtime, input/final, gates, saved metrics/manifests, Git or public files were written. Previous repository/skill/publication instructions continue to control adoption.

## Code judgment

The source-original introduction requires preceding nonempty source wording, completed forward introduction, and immediately following opening quotation. Adding 권합니다 is consistent with forward recommendations as reported speech. The suffix change handles existing Unicode closers and grammatical short 고 합니다/한다/했다/했습니다 predicates. These are structural attribution signals rather than source-ID special cases.

The contiguous-sequence algorithm sorts outer-before-inner ranges, retains an outer endpoint during nested processing and merges protected overlaps. Short quoted units can transmit independently established attribution while still respecting the unchanged minimum-length inclusion guard. This preserves the documented existing short-quotation limitation; it does not claim that short contents become fidelity-checked.

Attribution propagation allows only punctuation matching [.!?。]* followed by whitespace between adjacent quoted units. It does not extend across words, headings, colons or semicolons. Blank lines alone are allowed. Mixed quotation styles and nested quoted content retain correct ranges in the independent examples.

## Reproduced evidence

- Recomputed production-to-candidate unified diff exactly equals the SHA-bound patch. All executable/reference code other than checks.py is identical. The copied PROVENANCE.md is stale only by the recently added tracked-fixture explanation sentence; this non-runtime discrepancy is recorded rather than mistaken for a runtime difference.
- Supplied seven test methods run in this separate copy: all7 pass. Actual e30 identity and existing final both exit0. It has exactly three protected spans; deliberate mutation of each produces quote_altered and rejection. Actual e24 identity and existing final both remain exit1; its distant `멈추고, 엎드리고, 구른다` span is still eligible. Actual protected spans and full contexts: actual-spans-contexts.json.
- Existing quote suite retargeted solely to this review copy: all11 pass, including e10/e5, source quote mutation, nearby rhetorical quotes and new/expanded wrappers.
- Independently authored independent.py: 14 additional short/nested/mixed-style/boundary/negative-grammar examples and 20 four-style suffix/fidelity cases pass. See independent-results.json. Bare adjacent quotes without attribution remain eligible; intervening prose or headings breaks inherited attribution.
- Independently tested duplication of the exact original protected quote using frozen original quote texts: a repeated output occurrence does not acquire a second exclusion (protected_quote_count stays1). See repeated-exact-quote.json. New/expanded/repeated-author-wrapper CLI checks also retain style warnings.
- P0 abort, P3 number injection and each actual e30 quote mutation, tracked P5 deontic-loss rejection all pass through the copied production CLI. Genuine author connective commas remain targeted. Thresholds, sample guards, original-text preservation and frozen after-text content/occurrence rules are byte-identical.
- Upstream golden38 and metrics_v2 69 tests directly rerun: all pass.
- All667 original inputs recomputed read-only using candidate metrics and unchanged route logic: 644 light/23 standard; route disagreements0. No saved metric or manifest overwritten.

## Limits

Adjacent quotation is a local structural heuristic, not semantic speaker detection. A rhetorical quote placed immediately after an attributed quote with only punctuation/whitespace is indistinguishable from a continuing source passage and will inherit protection, including across blank lines. This is an explicit consequence of the proposed contiguous-passage rule; source switches and author rhetorical intent still require editorial review. No prose-crossing attribution propagation is justified here.

The e24 limitation is correctly diagnosed. The actual input has author narrative and separate quoted material between its initial explicit source introduction and the C11 phrase, then later switches sources. Extending this patch across that prose would lose the boundary that preserves nearby author rhetoric. This candidate does not resolve e24 and must not be used to claim its convergence.

The supplied tests read historical finals for external review. If promoted to permanent CI, they must follow the previous R2 fixture lesson: tracked input fixtures only, or explicitly tracked test data; do not introduce dependencies on untracked publication final.md files. Their successful external execution is not proof of fresh-checkout fixture availability.

This approval concerns tooling only. Fresh root-controlled finalizer/gates and independent content/publication obligations remain required before adopting e30; e24 remains held.
