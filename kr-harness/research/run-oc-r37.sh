#!/usr/bin/env bash
# 37·38차 조사(opencode, agy 한도 중): bash kr-harness/research/run-oc-r37.sh NN [SUFFIX] [MODEL]
# OC-PROMPT-R4.md 지시문을 쓰되 결과는 NN-SUFFIX.md(기본 r38oc)에 쓴다. 로그는 logs/NN.SUFFIX.log(커밋하지 않음).
set -u
NN=$(printf '%02d' "$((10#$1))")
SUF=${2:-r38oc}
MODEL=${3:-zai-coding-plan/glm-5.3-flash}
cd "$(dirname "$0")/../.."
mkdir -p kr-harness/research/logs
LOG=kr-harness/research/logs/$NN.$SUF.log
echo "[$(date -Is)] start $NN $SUF model=$MODEL" > "$LOG"
OPENCODE_ENABLE_EXA=1 opencode run -m "$MODEL" --auto --title "kr research $SUF $NN" \
  "kr-harness/research/OC-PROMPT-R4.md를 읽고 그대로 따른다. 대상 절 번호 NN=$NN. 이전 기록 kr-harness/research/$NN*.md 전부와 kr-harness/chapters/$NN/2-research.md 끝의 반영 기록을 읽고, 이미 시도해 막힌 경로는 되풀이하지 말고 다른 1차 경로를 찾는다. 결과는 kr-harness/research/$NN-$SUF.md 하나에만 쓴다(지시문의 NN-r4oc.md 대신). 머리글 날짜는 2026-10-24." >> "$LOG" 2>&1
rc=$?
echo "[$(date -Is)] exit $rc" >> "$LOG"
