#!/usr/bin/env bash
# 사용법: bash kr-harness/research/run-agy.sh NN
# agy에게 제NN절 TODO 딥리서치를 맡긴다. 로그는 kr-harness/research/logs/NN.log(커밋하지 않음).
set -u
NN=$(printf '%02d' "$((10#$1))")
cd "$(dirname "$0")/../.."
mkdir -p kr-harness/research/logs
LOG=kr-harness/research/logs/$NN.log
echo "[$(date -Is)] start $NN" > "$LOG"
"/c/Users/ssals/AppData/Local/agy/bin/agy" -p "kr-harness/research/AGY-PROMPT.md를 읽고 그대로 따른다. 대상 절 번호 NN=$NN. 결과는 kr-harness/research/$NN.md 하나에만 쓴다." \
  --dangerously-skip-permissions --model gemini-3.8-flash-high --print-timeout 0s >> "$LOG" 2>&1
rc=$?
echo "[$(date -Is)] exit $rc" >> "$LOG"
