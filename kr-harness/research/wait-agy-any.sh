#!/usr/bin/env bash
# agy 아무 모델이나 풀릴 때까지 5시간마다 시험한다. 되면 AGY_READY <모델>을 찍고 끝난다.
# 시험 호출 자체가 한도를 쓰므로 5시간 간격을 지킨다.
AGY=/c/Users/ssals/AppData/Local/agy/bin/agy
while true; do
  sleep 18000
  for m in gemini-4-argon gemini-3.8-flash-high; do
    out=$(timeout 120 "$AGY" -p "Reply with exactly: AGY_OK" --model $m --dangerously-skip-permissions 2>&1 | tail -1)
    if echo "$out" | grep -q AGY_OK; then echo "AGY_READY $m $(date -Is)"; exit 0; fi
    echo "[$(date -Is)] $m still blocked: $(echo "$out" | grep -o 'Resets in [0-9hms]*')"
  done
done
