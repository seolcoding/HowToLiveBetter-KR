#!/usr/bin/env bash
# 53차~ 조사(codex gpt-6.1-terra): bash kr-harness/research/run-cx-r53.sh NN [SUFFIX] [MODEL]
# OC-PROMPT-R4.md 지시문을 쓰되 결과는 NN-SUFFIX.md(기본 r53cx)에 쓴다. 로그는 logs/NN.SUFFIX.log(커밋하지 않음).
set -u
NN=$(printf '%02d' "$((10#$1))")
SUF=${2:-r53cx}
MODEL=${3:-gpt-6.1-terra}
cd "$(dirname "$0")/../.."
mkdir -p kr-harness/research/logs
LOG=kr-harness/research/logs/$NN.$SUF.log
echo "[$(date -Is)] start $NN $SUF model=$MODEL" > "$LOG"
# Windows 샌드박스는 elevated면 UAC 도우미가 실패(1223)해 unelevated로 둔다. 이 모드에선 셸 curl이 막히므로 --search(웹 검색·페이지 열기)로 원문을 본다.
codex --search exec -m "$MODEL" -s workspace-write -c windows.sandbox=\"unelevated\" --skip-git-repo-check \
  "kr-harness/research/OC-PROMPT-R4.md를 읽고 그대로 따른다. 셸의 curl·네트워크는 막혀 있으니 원문은 web_search 도구로 찾고 연다. 대상 절 번호 NN=$NN. 이전 기록 kr-harness/research/$NN*.md 전부와 kr-harness/chapters/$NN/2-research.md 끝의 반영 기록을 읽고, 이미 시도해 막힌 경로는 되풀이하지 말고 다른 1차 경로를 찾는다. 결과는 kr-harness/research/$NN-$SUF.md 하나에만 쓴다(지시문의 NN-r4oc.md 대신). 다른 파일은 고치지 않는다. git 명령은 쓰지 않는다. 저장소 루트에 파일을 만들지 않는다(내려받기는 \$TEMP). 원문을 직접 열어 인용한 것만 확인으로 쓰고, 지어내지 않는다. 머리글 날짜는 $(date +%F). 마지막 줄은 RESEARCH-DONE: total=… resolved=… partial=… conflict=… unresolved=…" >> "$LOG" 2>&1
rc=$?
echo "[$(date -Is)] exit $rc" >> "$LOG"
