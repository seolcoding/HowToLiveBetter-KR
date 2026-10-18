# Reviewed quotation classification — isolated implementation candidate

Status: ready for independent code review, **not adopted**. No operational repository/run/input/final/gate/00_metrics/manifest/public/Git file was written by this work. No actual source attribution or translation was approved, and no real approved registry was created or consumed by this code-author task. All approval-shaped fixtures are explicitly TEST-ONLY and temporary. e24/e38 remain actual gate1 without a separately reviewed, explicitly selected classification context.

## Review entry points

- `candidate.patch`: complete proposed repository diff, including portable permanent tests, CONTRACT/PROVENANCE drafts and the exact approved SPEC-R3 copy.
- `candidate/.claude/skills/humanize-korean/scripts/quote_context.py`: strict schema, retained descriptor snapshot, complete occurrences, payload/review/source/final-body validation, frozen context and separate derived evidence.
- `candidate/.claude/skills/humanize-korean/scripts/verify_gates.py`: bound in-memory evaluate_gate; explicit classification CLI dispatch; existing axis logic retained.
- `candidate/.claude/skills/humanize-korean/scripts/checks.py`: intentional no-registry P3 complete-occurrence multiplicity hardening.
- `candidate/.claude/skills/humanize-korean/references/metrics_v2.py`: internal verified-span input only; primitive formulas/guards/baselines unchanged.
- `candidate/kr-harness/publication/scripts/humanize_publication.py`: explicit root-selected, review-only classified assembly on retained bytes; no historical evidence overwrites.
- `candidate/kr-harness/publication/scripts/tests/test_reviewed_quote_classification.py`: 25 portable synthetic-only regressions, including an isolated ten-module standalone CLI copy.
- `candidate/kr-harness/publication/CONTRACT.md`: new proposed operational contract plus correction of the old “unmodified upstream gate” wording to the vendored gate with documented local classification fixes.
- `candidate/kr-harness/publication/QUOTE-CLASSIFICATION-SPEC.md`: exact approved SPEC-R3 (`ede7ecf4a7f7f2c35a3065a9ee90263df03d799146a1b89eeb6bed0edbfe2496`).
- `candidate/.claude/skills/humanize-korean/PROVENANCE.md`: separates historical nine upstream runtime scripts from the added tenth local module, and declares the P3 behavior change.

`candidate-files.json` and `artifact-sha256.json` provide exact file/evidence hashes. `baseline/` is the untouched code snapshot used for comparison; `upstream-harness/` is a separate disposable upstream compatibility copy.

## Implemented approval and byte boundary

The non-circular chain is exact original/source excerpt/anchor/final-body payload → independent payload-SHA review → root payload/review-SHA registry → explicit expected registry SHA. Registry location cannot be selected from input/final text, summary, neighbouring files or unapproved proposals. Requested empty/incomplete/invalid flags error, with no automatic fallback.

Strict JSON rejects duplicate/unknown keys, NaN/Infinity/floats, boolean offsets, bad types/ranges/SHA/enums, oversized/deep structures and invalid UTF-8/BOM/NUL. Evidence uses root-confined relative paths, nonsymlink descriptor traversal, bounded regular-file reads, inode role/alias checks, before/after read metadata checks, and immutable retained bytes. Same source artifact reuse by the same path/source role is allowed and cached. Cross-role file aliases are rejected. Failed construction closes snapshots; no partial context is returned.

Manual selection must name a complete original, balanced, standalone non-nested quote occurrence in one of the four existing physical editable fields. Byte offsets and Unicode positions are mapped centrally. The original unique source anchor must remain unique, preceding a complete matching quote in the same final field. Exact raw final body bytes, including its pre-summary newline, are bound to the reviewed payload. Summary-only edits preserve classification approval but require current gate/finalizer context evidence; body edits require a new reviewed payload.

Primary-source evidence is retained raw UTF-8 text/HTML with an exact byte excerpt. No web fetch, HTML rendering/entity/whitespace extraction or PDF extraction runs in the validator. Native verbatim requires literal equality; translated wording requires genuine independent review. Schema statuses and hashes do not prove authenticity, translation fidelity or independence; the existing root-role procedural trust assumption remains explicit. A malicious fully privileged code-writing actor is outside the protection provided by both this and the existing integration pipeline.

Verified contexts bind exact immutable before/after bytes and genre; they cannot be reused on other texts. Style eligibility and quote fidelity share the frozen original occurrence set. No-registry after-text style eligibility still requires automatic attribution grammar; reviewed manual occurrences may use their independently approved classification. Complete content, field scope and original caps still govern both. Extra repeated/new/expanded wrappers cannot acquire additional exclusions. Supported automatic nesting remains available; manual nesting is rejected. P3 now independently detects loss of one of two identical protected originals, including without registry; the test suite isolates that axis below P0 abort and also tests a deliberately bad TEST-ONLY semantic review with exact body binding.

Derived metrics are written only in new exclusive evidence directories. Both historical saved route and derived route must equal the immutable manifest route; otherwise error3. No route override/upgrading/downgrading is provided. Classified assembly requires matching fresh finalizer classification_context, reloads the selected snapshot, regates the retained bytes and builds its candidate from those same bytes. Cached gate0, finalizer accept or review approval never substitutes for actual current exit0. Derived context completion reports explicitly record gate exit and `approved_for_publication: false`.

## Actual executed checks

| Check | Result |
|---|---|
| Portable permanent classification suite | **25 passed**, `permanent-regressions.log` |
| Existing local quotation/noun/footnote/integration/DOI suites | **33 passed**, `local-regressions-final.log` |
| Full upstream with original nine-script installer | 397 total, **2 packaging failures**, 2 pre-existing skips; original log retained as `upstream-full.log` |
| Full upstream with explicit tenth-module installer/fixture port | 397 total: **395 passed, 2 pre-existing skips**, zero errors/failures; `upstream-adapted-final.log`, `upstream-adapted-result.json` |
| Frozen 667 original input routes | **644 light / 23 standard**, zero changes |
| Frozen existing actual finals | **444 available: 442 exit0, e24/e38 exit1; 223 missing**, baseline and candidate identical |
| Same frozen original/after bytes, automatic spans, full gate reports | **zero differences**, `frozen-comparison.json` |
| v1 metrics.py and baseline JSON files | byte-identical to baseline |
| Existing register/heading/number/footnote, P1 judgment/P4/P5 helpers and full-text assembly invariants | unchanged ASTs; `preservation-audit.json` |

The upstream two skipped tests are explicitly reported: no Claude CLI for live fixture invocation; no measured live workspace run in a fresh clone. No test was disabled or weakened. The original packaging failures are real: an unmodified upstream install.sh copies only its historical nine scripts, omitting quote_context.py. `upstream-runtime-port.patch` adds the dependency and strengthens runtime-boundary/Codex packaging assertions. Adapted results are separate from the original failure evidence. The portable new regression copies the full ten-runtime standalone bundle to a separate temporary directory and executes actual identity/numeric/quotation CLI cases with `python -I`, no source checkout path/PYTHONPATH dependency.

New synthetic tests exercise explicit CLI success/error, exact body/summary/CRLF rules, review binding, context argument mismatch, retained-byte behavior after on-disk mutation, observed mutation during read, schema/size/depth/type/offset failures, stale/source digest, field/anchor/run/route mismatch, symlink/FIFO/traversal/inode alias, duplicate declarations, source-role reuse, manual nesting, automatic nesting, complete occurrence/multiplicity and cap attacks, malicious summary approval metadata, isolated full-bundle deployment, fresh finalizer context enforcement, helper actual regating, P0, numeric injection and tracked P5 loss. Semantic source/translation truth and real role independence remain human-review obligations, not claimed parser tests.

All 667 original inputs were copied read-only into `actual-snapshot/` once, then both runtimes consumed identical frozen bytes. This avoids conflating ongoing authors' new finals with code regressions. Earlier live sequential audit logs are retained but are **not** the authoritative comparison: another author created ch17 e4 between those runs. Frozen input/final hashes are identical between baseline and candidate, and both preserve the two real holds. Missing finals are counted as missing, never successes. No real classification context was manufactured to turn those holds into passes, and actual manual-classified 667-route behavior has not been claimed; it must be checked through genuinely approved contexts after independent review.

## Conservative restrictions and review points

1. Classified `--publish` is deliberately unsupported and fails closed. This candidate supports new-folder review assembly only; root's separately reviewed exact-copy publication procedure remains outside this code path.
2. Assembly classification evidence directories are restricted to a new direct chapter child; direct gate evidence supports relative nested directories whose parents already exist. Existing candidates/gates/metrics are never overwritten in classified mode.
3. Manual parsing conservatively requires balanced/unescaped quote grammar throughout the four original editable fields, including an unselected field. This is stricter than the minimum selected-field scope; unsupported input fails closed rather than obtaining an exemption. Hardlink aliases at different paths are likewise rejected even within one role; same-path source reuse is supported.
4. Descriptor-based classified snapshot validation targets the current Linux cloud runtime. No-registry legacy assembly retains its existing automatic/subprocess path; the new retained-byte assembly claim applies to explicit classified mode.
5. No-registry P3 duplicate-loss results intentionally change. Unsupported crossing automatic quote merges cannot act as complete-occurrence substitutes and may now warn. Automatic eligibility grammar itself is unchanged; all 667 observed automatic spans and actual gate reports were identical.
6. P1 metric execution errors now error3 rather than silently dropping that axis. This is declared fail-closed execution hardening, not threshold relaxation.
7. Actual source approval/registry files were not inspected, created or used here. Code review, any deployment/CONTRACT status adoption, real independent source/translation/final-body review, root context selection and fresh finalizer/regating remain separate steps. Existing P5 limits (e.g. incomplete prohibition-form coverage) are unchanged and not represented as universal negation protection.

The proposed/candidate-only CONTRACT/PROVENANCE status text must be explicitly reconciled with the eventual independent adoption record; this report itself is not that record.
