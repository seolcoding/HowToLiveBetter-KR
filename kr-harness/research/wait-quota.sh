#!/usr/bin/env bash
# agy 할당량 리셋을 기다린다. 인자: 첫 대기 초, 최대 대기 초. 리셋 뒤 20분마다 시험하고, 되면 AGY_READY로 끝난다.
first=$1; max=$2; start=$(date +%s)
sleep "$first"
while true; do
  out=$("/c/Users/ssals/AppData/Local/agy/bin/agy" -p "Reply with exactly: AGY_OK" --model gemini-3.8-flash-high --dangerously-skip-permissions 2>&1 | tail -1)
  if echo "$out" | grep -q AGY_OK; then echo "AGY_READY $(date -Is)"; exit 0; fi
  if [ $(( $(date +%s) - start )) -ge "$max" ]; then echo "AGY_MAXWAIT $(date -Is) $out"; exit 0; fi
  sleep 1200
done
