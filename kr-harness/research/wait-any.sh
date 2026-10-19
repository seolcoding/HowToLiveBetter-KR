#!/usr/bin/env bash
# 실행 중인 agy 로그 가운데 하나라도 exit 줄이 새로 생기면 끝난다. 인자: 감시할 절 번호들
cd "$(dirname "$0")/logs"
while true; do
  for n in "$@"; do
    if grep -q "exit" "$n.log" 2>/dev/null; then echo "DONE $n"; tail -3 "$n.log"; exit 0; fi
  done
  sleep 30
done
