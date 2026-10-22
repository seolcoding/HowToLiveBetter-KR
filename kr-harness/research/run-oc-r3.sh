#!/usr/bin/env bash
# 3차 조사: bash kr-harness/research/run-oc-r3.sh NN [MODEL]
set -u
NN=$(printf '%02d' "$((10#$1))")
MODEL=${2:-zai-coding-plan/glm-5.3-flash}
cd "$(dirname "$0")/../.."
mkdir -p kr-harness/research/logs
LOG=kr-harness/research/logs/$NN.r3.log
echo "[$(date -Is)] start $NN r3 model=$MODEL" > "$LOG"
OPENCODE_ENABLE_EXA=1 opencode run -m "$MODEL" --auto --title "kr research r3 $NN" \
  "kr-harness/research/OC-PROMPT-R3.md를 읽고 그대로 따른다. 대상 절 번호 NN=$NN. 결과는 kr-harness/research/$NN-r3.md 하나에만 쓴다." >> "$LOG" 2>&1
rc=$?
echo "[$(date -Is)] exit $rc" >> "$LOG"
