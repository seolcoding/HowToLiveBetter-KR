# Current public chapter polishing

Use `.claude/skills/humanize-korean/SKILL.md` and its referenced role files. Upstream source and MIT license live beside that skill. These are fresh publication runs, never old S7 outputs.

Each numbered entry has an independent run in `2026-10-18/chNN/_workspace/`. Work with cwd `chNN`. `manifest.json` selects the exact input and upstream route. Read `entry_snapshot.md` for context, but transform only `01_input.txt`: the four single-line fields 비용, 쉽게, 이득, 비고. Preserve their labels, order, numbers, URLs, facts, conditions, negation, uncertainty, citations, and required warnings. Source, evidence grade, heading, cost tag, intro, and TODO remain outside the input and are restored verbatim. Keep concise 합니다/하세요 Korean; no new facts or sources. Do not merge fields or entries.

Follow the upstream route without override. Standard requires independent diagnosis and rewriting roles; heavy also requires chunk/reassembly and finalizer evidence. Preserve all intermediate files. Exactly one HUMANIZE-SUMMARY block belongs in final.md; it is stripped from the publication candidate. Run the unmodified upstream gate and resolve warnings; publication assembly accepts exit 0 only. Never suppress, weaken, or waive a threshold. Upstream numeric/URL preservation is additionally checked exactly by assembly.

Prepare: `python3 kr-harness/publication/scripts/humanize_publication.py prepare NN --date 2026-10-18`

Assemble for review: `python3 kr-harness/publication/scripts/humanize_publication.py assemble NN --date 2026-10-18`

Assembly rechecks current public source against the saved source, input hashes, all eligible numbers/URLs, field labels, upstream gates, and protected content. It writes `candidate.md`, `assembly.json`, and per-entry actual upstream gate evidence. It stops on the first rejected entry. Only the root coordinator may explicitly request `--publish`; no public file changes during preparation or candidate assembly. Existing manifests are never overwritten.

Upstream `prepare_monolith_input.py` can sanitize `01_input.txt` in place. The publication preparer restores exact source-derived input immediately afterward. After diagnosis recombination or any subsequent shim call, restore `01_input.txt` from the four original prose field lines in `entry_snapshot.md` (including trailing spaces), and verify the manifest SHA256 before gates. Do not replace it with sanitized or revised text.

## Reviewed integration

`integrate NN --date 2026-10-18` is a separate step after strict assembly. It never publishes or changes strict candidate, pure final outputs, or gates. It writes `reviewed-candidate.md` and `integration.json`. New content needs its own final hash KR-FIT review; editorial approval does not satisfy that gate.

The root coordinator writes `chNN/integration-plan.json` with `status: "approved"`, `source_sha256`, `candidate_sha256`, `review: {"path": "content-audit.md", "sha256": "..."}`, and an `operations` list. Paths are relative to chNN, must resolve inside that folder, and require matching SHA256. Every operation has `status: "approved"`, its own `review` file reference, `entry` number, `base` (`baseline` for source snapshot or `candidate` for the current accumulated candidate), and `before_sha256` for the entire selected entry including its separator whitespace.

A field operation adds `field` (title/비용/쉽게/이득/출처/비고), `before` and `after` (field values only, single line). A full entry operation instead adds `replacement: {"path": "_workspace/.../publication-entry-proposal.md", "sha256": "..."}` and `changes: {"path": "_workspace/.../publication-entry-changes.json", "sha256": "..."}`; changes must be nonempty JSON evidence. Intentional verified factual changes are permitted only in this approved integration phase. Exact tags, evidence grades, numbered entry structure, six labels and protected layout remain mandatory. Operations apply in order; a later candidate-based operation hashes the already edited entry. Raw proposals are never automatically adopted. Missing approvals, missing evidence, stale baseline/candidate hashes, and protected structure changes stop integration.

For reviewed full-entry replacements only, legacy indented plain-prose continuation lines may be folded into their editable field. Independent content review must account for the folded content. New replacement continuations, unscoped prose, comments, tags, labels and evidence grades receive no exemption. The production CLI regression is `python3 kr-harness/publication/scripts/tests/test_integration_continuations.py`.

### Approved DOI annotations

When reviewed integration changes the actual DOI citation set, the plan must additionally provide `intro_sha256` matching the unchanged strict candidate intro and `doi_annotations`. Each annotation is `{ "status": "approved", "action": "add" | "drop", "doi": "10.xxxx/exact-suffix", "reason": "single-line reason", "review": { "path": "independent-review.md", "sha256": "..." } }`. Use the exact bare DOI, not a URL. The helper compares full DOI URLs in strict candidate and integrated body, ignoring HTML comments. Balanced internal parentheses are retained (for example `10.1016/S0140-6736(15)00340-2`). Unmatched outside closing parentheses, Markdown link/autolink boundaries, whitespace, surrounding Unicode punctuation, and the next HTTP(S) URL delimit the token; trailing sentence punctuation is removed. Unbalanced internal parentheses fail closed rather than accepting a truncated DOI. Annotations must match every actual addition/removal exactly; missing, duplicate, unnecessary, unapproved, stale-hash, or conflicting existing annotations are rejected. Review paths remain confined to the chapter.

Only these approved `kr-doi-add/drop` comments are appended before the first numbered entry. Original intro bytes, strict candidate, and pure input/final outputs remain intact. Existing contradictory DOI markers require separate review and are rejected rather than silently removed. This permission does not allow arbitrary intro rewriting. A new hash independent KR-FIT review remains mandatory.
