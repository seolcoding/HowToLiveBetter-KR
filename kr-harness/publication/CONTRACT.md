# Current public chapter polishing

Use `.claude/skills/humanize-korean/SKILL.md` and its referenced role files. Upstream source and MIT license live beside that skill. These are fresh publication runs, never old S7 outputs.

Each numbered entry has an independent run in `2026-10-18/chNN/_workspace/`. Work with cwd `chNN`. `manifest.json` selects the exact input and upstream route. Read `entry_snapshot.md` for context, but transform only `01_input.txt`: the four single-line fields 비용, 쉽게, 이득, 비고. Preserve their labels, order, numbers, URLs, facts, conditions, negation, uncertainty, citations, and required warnings. Source, evidence grade, heading, cost tag, intro, and TODO remain outside the input and are restored verbatim. Keep concise 합니다/하세요 Korean; no new facts or sources. Do not merge fields or entries.

Follow the upstream route without override. Standard requires independent diagnosis and rewriting roles; heavy also requires chunk/reassembly and finalizer evidence. Preserve all intermediate files. Exactly one HUMANIZE-SUMMARY block belongs in final.md; it is stripped from the publication candidate. Run the unmodified upstream gate and resolve warnings; publication assembly accepts exit 0 only. Never suppress, weaken, or waive a threshold. Upstream numeric/URL preservation is additionally checked exactly by assembly.

Prepare: `python3 kr-harness/publication/scripts/humanize_publication.py prepare NN --date 2026-10-18`

Assemble for review: `python3 kr-harness/publication/scripts/humanize_publication.py assemble NN --date 2026-10-18`

Assembly rechecks current public source against the saved source, input hashes, all eligible numbers/URLs, field labels, upstream gates, and protected content. It writes `candidate.md`, `assembly.json`, and per-entry actual upstream gate evidence. It stops on the first rejected entry. Only the root coordinator may explicitly request `--publish`; no public file changes during preparation or candidate assembly. Existing manifests are never overwritten.

Upstream `prepare_monolith_input.py` can sanitize `01_input.txt` in place. The publication preparer restores exact source-derived input immediately afterward. After diagnosis recombination or any subsequent shim call, restore `01_input.txt` from the four original prose field lines in `entry_snapshot.md` (including trailing spaces), and verify the manifest SHA256 before gates. Do not replace it with sanitized or revised text.
