#!/usr/bin/env bash
# 한 차수 전체를 3갈래로 나눠 차례로 돌린다: bash kr-harness/research/run-cx-round.sh SUFFIX NN NN ...
# 갈래마다 run-cx-r53.sh를 하나씩 순서대로 부른다. 동시에 도는 codex는 최대 3개.
set -u
SUF=$1; shift
cd "$(dirname "$0")/../.."
lane() { for n in "$@"; do bash kr-harness/research/run-cx-r53.sh "$n" "$SUF"; done; }
A=(); B=(); C=(); i=0
for n in "$@"; do case $((i % 3)) in 0) A+=("$n");; 1) B+=("$n");; 2) C+=("$n");; esac; i=$((i+1)); done
lane "${A[@]}" & lane "${B[@]}" & lane "${C[@]}" &
wait
echo "[$(date -Is)] round $SUF done"
