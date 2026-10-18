# Upstream provenance

Source: https://github.com/epoko77-ai/im-not-ai

Commit: `b37e0206d31fffd9149bf57168d4d62eb2086bee`

Standalone Codex bundle copied with references dereferenced and the nine actual runtime scripts listed by upstream `install.sh` `RUNTIME_SCRIPTS`. Upstream files are unmodified except the local lexical footnote parsing fix below. MIT license: [LICENSE](LICENSE). No installer or home-directory changes.

The publication helper restores the exact source-derived `01_input.txt` after the upstream preparation shim, whose sanitizer can trim trailing whitespace. Upstream sanitation and all gate thresholds remain unmodified. Combined metric inputs retain the upstream sanitation behavior.

## Local runtime patch — 2026-10-18

`scripts/checks.py` excludes digit-preceded decimal separators (`.`, `,`) and interval separators (`~`, `–`, `−`, `-`) immediately before a closing-parenthesis numeric tail from inline footnote recognition. For example, CI `2.5~3.1)` and `12~33)` are statistical values, not footnotes `1)` and `33)`. The original entry27 identity gate incorrectly failed because repeated decimal tails were assigned to the first false marker's numeric anchor. This change only corrects token classification; no threshold, preservation check, anchor check, or gate acceptance behavior was weakened.

Validation: four local regression checks cover actual ch01 entry27 identity through the vendored production gate (exit 0), decimal/interval exclusion with real marker retention, missing real markers, and a duplicate marker replacing another number. Six relevant existing upstream golden tests (footnote count, anchor relocation, definition changes, preserved references, parenthesized headings and years) also pass against the locally patched runtime. Regression command: `python3 kr-harness/publication/scripts/tests/test_footnote_decimal.py`.
