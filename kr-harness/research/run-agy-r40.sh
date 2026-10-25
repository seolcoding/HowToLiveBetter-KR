#!/usr/bin/env bash
# 40차~ 조사: bash kr-harness/research/run-agy-r40.sh NN [SUFFIX] [MODEL]
# AGY-PROMPT-R4.md 지시문을 그대로 쓰되 결과는 NN-SUF.md(기본 r40agy)에 쓴다. 로그는 logs/NN.SUF.log(커밋하지 않음).
set -u
NN=$(printf '%02d' "$((10#$1))")
SUF=${2:-r40agy}
MODEL=${3:-gemini-3.8-flash-high}
cd "$(dirname "$0")/../.."
mkdir -p kr-harness/research/logs
LOG=kr-harness/research/logs/$NN.$SUF.log
echo "[$(date -Is)] start $NN model=$MODEL" > "$LOG"
"/c/Users/ssals/AppData/Local/agy/bin/agy" -p "kr-harness/research/AGY-PROMPT-R4.md를 읽고 그대로 따른다. 대상 절 번호 NN=$NN. 이전 기록은 kr-harness/research/$NN*.md 전부(2차·3차·r4oc 등)를 읽고 이미 시도한 경로는 되풀이하지 않는다. 결과는 kr-harness/research/$NN-$SUF.md 하나에만 쓴다(지시문의 NN-r4.md 대신). 머리글은 「(agy, 2026-10-25, $SUF)」로 쓴다." \
  --dangerously-skip-permissions --model "$MODEL" --print-timeout 0s >> "$LOG" 2>&1
rc=$?
echo "[$(date -Is)] exit $rc" >> "$LOG"
