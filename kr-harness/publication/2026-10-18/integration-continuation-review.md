# Independent integration continuation review

Reviewer: `/root/integration_layout_review`, independent of author `/root/integration_layout_fix`. Date: 2026-10-18. Read AGENTS.md, CLAUDE.md, KR-GUIDE.md, and publication CONTRACT.md. Reviewed the current uncommitted diff against HEAD.

Reviewed SHA256:

- `scripts/humanize_publication.py`: `63b07216592c3800663bb26dbc78fa6af03bd914a584c51b86e2756d6232d200`
- `scripts/tests/test_integration_continuations.py`: `32022c68d91b96cbee6c99ed2315fad1bfefdaf861a83d64435cf578ba7d3439`

Verdict: pass for this helper change; no substantive protection regression found, no code edits made. This is a code review, not final content/KR-FIT approval.

The only normalization is on the selected original entry for an approved full-entry replacement. Indented legacy prose following an editable field may disappear from its structural signature. Replacement output receives no such exemption. Blank/protected lines terminate scope. Tags/comments, evidence grade, six fields/order, numbered heading, evidence hashes, reviewed plan/operation status, DOI accounting and confinement checks remain independently enforced. Strict assembly, gate thresholds and pure outputs are untouched. Content preservation remains a human review responsibility in this intentionally factual-change-permitting integration phase; the new positive fixture explicitly asserts all folded continuation facts survive.

Commands and results (repository cwd):

1. `git diff -- kr-harness/publication/scripts/humanize_publication.py` and `sha256sum` on the two reviewed files: diff and hashes match above.
2. `python3 -m unittest discover -s kr-harness/publication/scripts/tests -v`: 15 tests pass. Continuation test runs the production CLI in a temporary synthetic checkout, verifies exact accepted output and retained facts, and rejects new continuation/unindented prose, unknown/missing/duplicate/reordered fields, tag/grade/number/heading/comment changes, unscoped/protected baseline content, stale evidence and missing approval.
3. Independent in-memory extension of that CLI fixture: additional baseline lines `  ````, `  > 인용`, `  + 목록`, `  ~~~`, `  2) 목록`, `  <!-- 미완성`, `  끝 -->`, and `  근거등급：B` all remain protected and reject removal. One expanded test passes; repository test file unchanged.
4. `python3 kr-harness/publication/scripts/humanize_publication.py integrate 1 --date 2026-10-18`: exit 1, `error: integration changed protected tags or field structure`, as expected for current approved #42 proposal dropping its existing comment.
5. Ran that same production entry point with `runpy.run_path(..., run_name='__main__')`, CLI argv and a read-only `sys.settrace` exception observer: failure is operation entry 42; completed operations include actual entries 27 and 31 (and all preceding planned replacements). This verifies real chapter continuation folding reaches the intended blocker. No proposals or plan were changed.

One diagnostic attempt to import the script directly exited 2 because its CLI parser runs on import; reran through its real entry point as described above.

Outstanding: #42 requires a separately reviewed exact-comment-preserving proposal and coordinator plan binding, then another real integration run. Do not weaken comment protection to bypass this expected blocker. Integrated candidate still requires current-hash independent KR-FIT review. No public book, approved proposal, plan, strict candidate, pure output, git state or CI configuration was edited by this review.
