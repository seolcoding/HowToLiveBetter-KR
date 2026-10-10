# 진행 기록: 2026-10-next-publish

지시문은 [2026-10-next-publish.md](2026-10-next-publish.md). 세션이 이어서 시작되면 이 기록과 `node .claude/skills/kr-pipeline/scripts/pipeline.mjs status`만 보고 다음 할 일을 정한다.

## 판단 기록

- **2026-10-10 조사 네트워크**: 세션 시작 훅이 www.law.go.kr, europepmc.org, web.archive.org를 「접속 불가」로 알렸다. 멈춤 조건을 그대로 따르면 진행 중인 절이 없으므로 멈춰야 한다. 그러나 다시 재 보니 막힌 것이 아니라 끊김이었다.
  - law.go.kr: `LSW/lsInfoR.do` 주소로 curl 8번 중 5번 성공(본문 337 KB). 훅은 5초 시도 한 번으로 판정한다.
  - 국민건강보험공단(nhis.or.kr), 고용노동부(moel.go.kr): curl은 거의 실패하지만 WebFetch로는 열린다.
  - Europe PMC: europepmc.org는 403이지만 REST API(`www.ebi.ac.uk/europepmc/webservices/rest/`)는 200이다. doi.org, PubMed는 정상이다.
  - web.archive.org만 계속 막힌다. 한국어판 규칙(KR-GUIDE)은 보관 링크를 요구하지 않는다.
  - 그래서 조사를 진행하기로 했다. 서브에이전트에게 「WebFetch 우선, curl은 `--retry`로, law.go.kr은 `LSW/lsInfoP.do`·`lsInfoR.do`·`lsBdyPrint.do` 주소」를 알린다. 원문을 끝내 못 열면 지어내지 않고 `TODO 확인 필요`로 남긴다.
- **로컬 빌드 도구**: pandoc 3.11, typst 0.15.1, epubcheck 5.4.0은 스크래치 폴더에 받았다. 한글 글꼴은 `fonts-noto-cjk`를 설치했다. VM이 다시 만들어지면 다시 설치한다(`kr-book.yml`의 버전과 같다).

## 단계 기록

| 날짜 | 절 | 단계 | 실행 ID | 결과 | 다음 할 일 |
|---|---|---|---|---|---|
| 2026-10-10 | - | 시작 | - | 기준선: gate 6/6, 로컬 빌드 4종 성공, epubcheck 오류 0 | 0단계 서브에이전트 실행 |
