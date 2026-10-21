#!/usr/bin/env bash
# 사용법: bash kr-harness/research/run-oc.sh NN [MODEL]
# agy 한도 소진 동안 opencode에게 제NN절 TODO 딥리서치를 맡긴다. 로그는 kr-harness/research/logs/NN.oc.log.
set -u
NN=$(printf '%02d' "$((10#$1))")
MODEL=${2:-zai-coding-plan/glm-5.3-flash}
cd "$(dirname "$0")/../.."
mkdir -p kr-harness/research/logs
LOG=kr-harness/research/logs/$NN.oc.log
echo "[$(date -Is)] start $NN model=$MODEL" > "$LOG"
OPENCODE_ENABLE_EXA=1 opencode run -m "$MODEL" --auto --title "kr research $NN" \
  "kr-harness/research/OC-PROMPT.md를 읽고 그대로 따른다. 대상 절 번호 NN=$NN. 결과는 kr-harness/research/$NN.md 하나에만 쓴다." >> "$LOG" 2>&1
rc=$?
echo "[$(date -Is)] exit $rc" >> "$LOG"
