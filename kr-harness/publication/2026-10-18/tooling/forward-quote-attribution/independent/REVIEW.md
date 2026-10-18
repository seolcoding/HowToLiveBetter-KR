# Independent review: PASS

Reviewed candidate SHA256: `cabb44a523efb610e140237ffff3a5ff44fa4a50b2a7d03de39957a49ef27af6`.

This decision applies only to candidate.patch. It authorizes neither adoption of failed e14 nor publication. No production runtime, gate evidence, inputs, manifests, metrics, public files or Git state were written. Execution used a copied skill under this review directory.

Read repository AGENTS.md and CLAUDE.md, humanize-korean SKILL.md and quick-rules, copied PROVENANCE.md, and publication CONTRACT.md. Their controlling distinction is attributed direct speech versus the author's unmarked rhetorical quotation. The new rule requires explicit forward reporting immediately before an opening quote. It resolves actual e10 without moving the existing generic speech-window sentence boundary.

## Evidence

- Independently recomputed the unified diff from operational checks.py and candidate copied checks.py; it exactly equals the SHA-bound candidate patch. All other 31 common non-bytecode files are byte-identical. Thus thresholds, sample guards, baseline/formula code, frozen after-text eligibility, P0/P3/P5 implementations and acceptance rules are unchanged.
- Re-executed supplied validate.py as review-local reproduce.py (source inputs/manifests read-only; outputs under this directory). Actual e10 identity and existing final exit 0; altered quotation exits 1 with quote_altered; absent introduction and adjacent rhetorical quotation remain rejected. Actual e14 identity and final remain exit 1. Fresh results.json records all 11 CLI cases.
- Independently authored adversarial.py: 15 classification cases pass. Explicit attribution works across newline/blank lines. Intervening sentence, paragraph text, heading, missing source, non-forward speech, negation, conditional and similar vocabulary do not license a following quotation. Two adjacent quotations protect only the immediately introduced first occurrence. See adversarial-results.json.
- Reproduced new, expanded and repeated wrapper rejection through production CLI; new speech wrappers may be classified as speech when viewed alone, but original-frozen eligibility prevents output-side author-text exemption.
- Independently authored preservation.py verifies P0 >50% rejection, P3 altered numeric and quotation rejection, and P5 lost deontic modality rejection through the candidate CLI. Detailed evidence in preservation/ and preservation-results.json.
- All 667 original inputs independently reprocessed through candidate metrics and unchanged route logic: light 644, standard 23, manifest route disagreements 0. Existing metrics and manifests were not rewritten.

## Limits and residual risk

The regex is a structural attribution heuristic, not named-entity recognition. Its subject particles accept ordinary subjects/pronouns as well as institution names. This is consistent with the existing speech-marker policy; the claim that it *requires a named source* should be understood as a reporting subject, not validation of source identity or factual provenance. Source verification remains editorial work.

The deliberately narrow grammar does not cover every valid introduction: e.g. 밝혔다/말했다 and commas/colons instead of the completed-period form are not newly added here. Existing attribution logic still handles some such forms. Lack of universal coverage does not regress the targeted e10 fix. Blank lines alone do not break immediate attribution; intervening words or headings do.

The supplied upstream 38-test success claim was not independently rerun because this review did not locate test_golden.py locally. This review instead verifies the exact patch and runs the production CLI and additional independent adversarial/preservation tests above; it does not claim a fresh upstream-suite pass.

ch13e14 remains a separate lexical classification problem (nominal 연고,). It must not be accepted under this patch; both fresh CLI runs reject it.
