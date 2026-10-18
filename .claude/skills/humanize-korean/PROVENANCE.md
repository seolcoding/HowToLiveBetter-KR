# Upstream provenance

Source: https://github.com/epoko77-ai/im-not-ai

Commit: `b37e0206d31fffd9149bf57168d4d62eb2086bee`

Standalone Codex bundle copied with references dereferenced and the nine actual runtime scripts listed by upstream `install.sh` `RUNTIME_SCRIPTS`. Upstream files are unmodified. MIT license: [LICENSE](LICENSE). No installer or home-directory changes.

The publication helper restores the exact source-derived `01_input.txt` after the upstream preparation shim, whose sanitizer can trim trailing whitespace. Upstream scripts and thresholds remain unmodified. Combined metric inputs retain the upstream sanitation behavior.
