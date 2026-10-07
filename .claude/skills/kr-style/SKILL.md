---
name: kr-style
description: 한국 현지화 파이프라인 S4. 평어체(A) 초역의 문장 끝을 합니다체(B)로 결정론 변환한다. "문체 변환", "합니다체로", "S4" 요청이나 kr-pipeline이 새 실행을 만들 때 사용. LLM을 쓰지 않는다.
---

# S4 문체 변환 (결정론)

보통은 직접 부르지 않는다. `pipeline.mjs new-run N`이 실행 폴더를 만들면서 이 변환기를 부른다.

```bash
node .claude/skills/kr-pipeline/scripts/pipeline.mjs new-run 13            # B(기본)
node .claude/skills/kr-pipeline/scripts/pipeline.mjs new-run 13 --style A  # 비교용 평어체(초역 그대로)
node .claude/skills/kr-style/scripts/convert-b.mjs <입력.md> <출력.md>      # 변환기만 단독 실행
```

- 바꾸는 것: 서문·본문 문단, `- 비용/쉽게/이득/비고` 필드의 문장 끝 어미.
- 안 바꾸는 것: `###` 제목, 비용태그 주석, `- 출처`·`- 근거등급`, `## TODO` 섹션, 링크, 「」 인용 내부.
- 문체 프로파일: B(합니다체)가 기본, A는 비교 변형, C(해요체)는 폐기. 근거는 [STYLE-PROFILES.md](../kr-localize/references/style-corpus/STYLE-PROFILES.md).

## 오류가 보이면

알려진 오류 3유형(명사+이다 축약, 숫자·기호+다, 명령형 평어)은 `convert-b.mjs`의 FIXES 배열이 고친다([LESSONS.md](../../../kr-harness/LESSONS.md) L4). 새 유형을 찾으면 FIXES에 한 줄 추가하고 해당 실행을 다시 만든다. `집니다`(책임이 집니다)처럼 정상형도 있으니 전역 치환 전에 문맥을 본다.
