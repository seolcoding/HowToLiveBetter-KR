# 제3절 한국 실정 적합성 검토
검토일: 2026-10-19 KST (실제 clock: 2026-10-18 15:40:44 UTC) · 검토 대상: `book-kr/03-기력-낭비-줄이기.md` · 전체24항목

새 격리 독립 전체검토 후, 승인된 세 최소수정의 현재 적용본을 재열람한 최종 검토입니다. 이전 r5를 승인으로 재사용하지 않았습니다. 직전 전체검토 r6의 근거열람은 아래에 보존하고 현재24항 판정을 통째로 재작성했습니다. 중국어 book/03 전체, chapters/03의 분석·조사·r1~r5 기록, 현재24항·도입·빈 tail과 publication content-audit/editorial-decisions/canonical-review-r2의 근거 범위를 대조했습니다. canonical 편집 승인은 정식 KR-FIT가 아닙니다. 본문·승인·도구·git는 수정하지 않았습니다.

## 실제 검증과 열람 범위
현재17·20·22항 전체를 실제 다시 읽었습니다. post-formal-integration-r1.json의3개 승인span을 현재본문에서 역치환하자 수정전 raw SHA097b24b2d1d5e2b697e9d48f5e8d07db73d6002ebddbd6fa34e60c07ecbde654와 정확히 일치했습니다. 따라서 다른21항·도입·빈tail과 변경3항의나머지바이트는 불변입니다. 현재 raw SHA는6d93d8bc948dfb64178b45659a9135a2421242f4d5b135772bd4df969d9f7f93입니다. 아래 신규HTTPS는 직전 전체검토 때의 실제요청이며 이번 최소수정 재열람에서 다시 요청한 것은 아닙니다.
시작 CLI: `node .claude/skills/kr-verify/scripts/kr-fit.mjs 03 --hash` → `c27b1c95f96d3d2b41f9968fda1b88f0a366d2dc47a423d24b039a6b5b004af6`. 같은 CLI --check는 block0/warn0입니다.
의학 DOI의 정확일치 초록은 `/workspace/.cache/howtolivebetter/source-check/2026-10-18/medical-doi-cache-index.json`의 원자료 JSON을 직접 읽었습니다. 초록/서지/원문을 구별합니다. 각 항의 source-evidence와 아래 명시한 로컬 원자료는 기존 HTTP 캐시 열람이며 이번 신규 네트워크 성공으로 세지 않습니다. 원문 전체 표를 열지 못한 항목은 그 한계를 아래 남겼습니다.
신규 HTTPS는 TLS 검증을 유지했습니다. 실제 요청 URL·UTC·status·SHA는 `/workspace/.cache/howtolivebetter/source-check/2026-10-18/ch03-final-review/fetch-index.json`에 저장했습니다. 109 공식 HTML과 국가데이터처 첨부 PDF는 HTTP200뿐 아니라 본문을 실제 읽었습니다. 요청시각은 각각 2026-10-18T15:42:03.231093+00:00 / 15:42:03.231810+00:00입니다. PDF는 pdftotext로 열어 숫자와 조사방법을 확인했습니다.
- https://www.129.go.kr/109 : “정신건강 상담전화 (1577-0199) 24시간 정신건강 상담”, 자살예방109 안내와 2024년1월1일 통합 FAQ.
- https://www.mods.go.kr/boardDownload.es?bid=220&list_no=437764&seq=9 : 2024 생활시간조사, “응답자가 자신이 한 행동을 10분 단위로 2일 동안 작성”.

## 한국 법령 본문·부칙 대조
공식 DRF lawService 원시XML 캐시를 직접 읽었습니다. 본문 MST는 근로기준법285279, 시행령270551, 형소법290189, 형법290185, 민원법239293입니다. URL 형식은 `https://www.law.go.kr/DRF/lawService.do?OC=test&target=law&MST=<MST>&type=XML`이며 앞4개는 공용 law-versions/<MST>.xml, 민원법은 ch03-audit/239293.xml입니다. 원래 요청시각·SHA는 editorial-decisions.json korean_core_verification에 있습니다. ch03-audit/fetch-index.json의 현행검색도 본문과 대조했습니다. 한글 URL의 프레임200을 조문 열람으로 인정하지 않았습니다.
- 근로법11·50·53·59·63/시행령7·7의2·34: 5인원칙과 가사·친족 제외, 휴게 제외40/8, 대기시간, 합의12시간, 특별연장 인가·동의·건강조치,59조 서면합의/11시간휴식,63조 적용제외가 현재문장과 맞습니다.53③추가8시간은15513부칙2의2022.12.31만료로 현재예외에 넣지 않았습니다.21533부칙 지연시행을 전체법 시행일과 혼동하지 않았습니다.
- 형소법245의6/7·258/259: “그 송부한 날부터7일”, “통지를 받은 날부터3개월”, 정당사유의 “송부일부터6개월”을 대조했습니다.21857부칙7의 시행이후 통지 적용과22009부칙의2026.10.2 시행을 대조했습니다. 시행예정 다른 판본281865를 현재로 사용하지 않았습니다.
- 민원법3·17·35: 특별법우선, 법정민원별·기관별공표, 거부처분60일 문서이의, 접수10일 결정/지체없는통지, 만료다음날부터10일범위연장과 사유통지가 현재문장에 있습니다. 이의신청과 다른 불복기한을 구별합니다.
- 형법129·133: 직무관련 공무원 뇌물 전제에 부합합니다. 모든 의사·은행원 선물을133조로 일반화하지 않습니다.

## 항목별 판정

### 3-1. 불필요한 알림을 끄고, 일할 때는 휴대전화를 시야 밖에 두세요
- 판정: 적합
- 근거·범위: Stothart 정확 DOI 초록의 알림 단독 주의력 저하·사용과 비슷한 크기에 부합합니다. Ward 존재효과를 삭제했고 시야 밖 두기는 저자 제안으로 구분했습니다. 원문 DOI 10.1086/691462의 실제 제거와 도입 kr-doi-drop이 일치합니다.
- 출처 URL: Stothart, Mitchum & Yehnert (2015). The attentional cost of receiving a cell phone notification. Journal of Experimental Psychology: Human Perception and Performance. <https://doi.org/10.1037/xhp0000100>

### 3-2. 기상 시간을 고정하세요, 주말에도
- 판정: 적합
- 근거·범위: Phillips 초록의 61명·30일·극단 5분위·00:08/21:32·r=.37와 대조했습니다. 관찰연구이며 기상 고정이나 아침 햇빛의 필수조건을 입증하지 않았다는 제한이 있습니다. 모형 비교의 2.2시간과 관측 2.5시간을 섞지 않습니다.
- 출처 URL: Phillips et al. (2017). Irregular sleep/wake patterns are associated with poorer academic performance and delayed circadian and sleep/wake timing. Scientific Reports. <https://doi.org/10.1038/s41598-017-03171-4>

### 3-3. 매일 밤 7~8시간 자세요. 6시간을 '충분하다'고 여기지 마세요
- 판정: 적합
- 근거·범위: Van Dongen 초록의 두 실험 합계48명·21~38세·14일·4/6/8시간 취침기회·다른 시간 수면 금지를 대조했습니다. 실제 수면시간과 구별합니다. Lim의70편147검사·g=-.776/-.125와 추론 CI의0 포함도 부합합니다. 최대 이틀 밤샘이라는 범위를 보존합니다.
- 출처 URL: Van Dongen, Maislin, Mullington & Dinges (2003). The cumulative cost of additional wakefulness. Sleep. <https://doi.org/10.1093/sleep/26.2.117>；Lim & Dinges (2010). A meta-analysis of the impact of short-term sleep deprivation on cognitive variables. Psychological Bulletin. <https://doi.org/10.1037/a0018883>

### 3-4. 오후 2시 이후에는 카페인을 피하세요
- 판정: 적합
- 근거·범위: Drake 초록과 /tmp/ch03e04-full.txt의12명·400mg·0/3/6시간·위약·객관1.1~1.2시간과 일지41분/p=.08을 대조했습니다. Gardiner 초록24연구·45분·7%·107mg/250mL·8.8시간에 부합합니다. 7%의 척도와 개인별 무영향 보장 한계를 정직하게 적었습니다.
- 출처 URL: Drake, Roehrs, Shambroom & Roth (2013). Caffeine effects on sleep taken 0, 3, or 6 hours before going to bed. Journal of Clinical Sleep Medicine. <https://doi.org/10.5664/jcsm.3170>；Gardiner et al. (2023). The effect of caffeine on subsequent sleep: A systematic review and meta-analysis. Sleep Medicine Reviews. <https://doi.org/10.1016/j.smrv.2023.101764>

### 3-5. 메일과 메시지는 하루 몇 번, 정해진 시간에 몰아서 처리하세요
- 판정: 적합
- 근거·범위: source-evidence/kushlev-dunn.txt 원저자 논문 텍스트를 열어124명·두 주·교차조건·하루3회·스트레스d=.37·메일량 비유의와 평소 약15.5회를 대조했습니다. 생산성 자기보고와 메신저 외삽을 구분합니다.
- 출처 URL: Kushlev & Dunn (2015). Checking email less frequently reduces stress. Computers in Human Behavior. <https://doi.org/10.1016/j.chb.2014.11.005>

### 3-6. 연속으로 생각해야 하는 일을 할 때는 몇 초짜리 방해도 막으세요
- 판정: 적합
- 근거·범위: Altmann 초록2.8초/두 배·4.4초/세 배는 순서실수에 한정됩니다. source-evidence/chi2005.txt·chi2008.txt를 열어24명·11분·57%·25분26초·2.26개 및48명 실험을 대조했습니다. 재개 대기와 집중력 회복을 구분하며 빨라진 수행과 스트레스 증가를 함께 적습니다.
- 출처 URL: Altmann, Trafton & Hambrick (2014). Momentary interruptions can derail the train of thought. Journal of Experimental Psychology: General. <https://doi.org/10.1037/a0030986>；Mark, Gonzalez & Harris (2005). No task left behind? Examining the nature of fragmented work. CHI 2005. <https://doi.org/10.1145/1054972.1055017>；Mark, Gudith & Klocke (2008). The cost of interrupted work: More speed and stress. CHI 2008. <https://doi.org/10.1145/1357054.1357072>

### 3-7. 한 번에 하나의 일만 하세요. 회의하면서 메시지 답하지 마세요
- 판정: 적합
- 근거·범위: Monsell·Ophir 초록에서 과제전환 직후 지연·대개 오류 증가와 집단간 성적 차이를 확인했습니다. 훈련 효과나 멀티태스킹의 인과효과를 입증한 것으로 쓰지 않습니다.
- 출처 URL: Monsell (2003). Task switching. Trends in Cognitive Sciences. <https://doi.org/10.1016/S1364-6613(03)00028-7>；Ophir, Nass & Wagner (2009). Cognitive control in media multitaskers. PNAS. <https://doi.org/10.1073/pnas.0903620106>

### 3-8. 자기 전 빛나는 화면을 줄이세요. 읽을 거면 종이책을 고르세요
- 판정: 적합
- 근거·범위: Chang 정확 DOI 초록의 취침 전 여러 시간 읽기·지연·멜라토닌 감소·다음날 각성 저하에 부합합니다. 원문표 전체를 재검증한 것은 아닙니다. 확인하지 못했던10분/55%/1.5시간은 현재 단정하지 않습니다. 한 시간 권고와 야간모드 효과는 실험의 입증 범위 밖임을 표시합니다.
- 출처 URL: Chang, Aeschbach, Duffy & Czeisler (2015). Evening use of light-emitting eReaders negatively affects sleep, circadian timing, and next-morning alertness. PNAS. <https://doi.org/10.1073/pnas.1418490112>

### 3-9. 자기로 정한 시간에 자세요. 게임·짧은 영상(숏폼)·음란물로 밤새지 마세요
- 판정: 적합
- 근거·범위: Carter 초록의20횡단연구·6~19세125198명·OR2.17/1.46/2.72와 접근만의1.79/1.53/2.27, Exelmans844명18~94세 관찰범위를 대조했습니다. OR을 확률 배수로 옮기지 않았습니다. 국가데이터처 첨부 PDF를 신규 다운로드해8시간4분·평일7시간45분·23:28·20대00:37·11.9%·4.6%p와10분단위 시간일지를 읽었습니다. Prause의280명 전체와 기능평가127명/방법133명 충돌 및59명 하위집단을 숨기지 않습니다. Grubbs 설명은 인과 확정이 아닙니다.
- 출처 URL: Carter et al. (2016). Association Between Portable Screen-Based Media Device Access or Use and Sleep Outcomes. JAMA Pediatrics. <https://doi.org/10.1001/jamapediatrics.2016.2341>；Exelmans & Van den Bulck (2016). Bedtime mobile phone use and sleep in adults. Social Science & Medicine. <https://doi.org/10.1016/j.socscimed.2015.11.037>；국가데이터처 (2025). 2024년 생활시간조사 결과(보도자료). <https://www.mods.go.kr/board.es?act=view&bid=220&list_no=437764&mid=a10301010000>, 첨부 보도자료 PDF <https://www.mods.go.kr/boardDownload.es?bid=220&list_no=437764&seq=9>；Grubbs JB 외 (2018). Pornography Problems Due to Moral Incongruence: An Integrative Model with a Systematic Review and Meta-Analysis. Archives of Sexual Behavior. <https://doi.org/10.1007/s10508-018-1248-x>(비고의 논쟁 당사자 중 하나)；Prause N, Pfaus J (2015). Viewing Sexual Stimuli Associated with Greater Sexual Responsiveness, Not Erectile Dysfunction. Sexual Medicine. <https://doi.org/10.1002/sm2.58>(비고의 논쟁 당사자 중 둘째)

### 3-10. 깊은 밤에는 큰 결정을 하지 마세요. 중요한 메시지도 보내지 마세요
- 판정: 적합
- 근거·범위: Killgore 초록의 건강성인34명·49.5시간 박탈·IGT 위험선택·나이 연관에 부합합니다. 일반 새벽시간과 메시지 금지는 직접 측정하지 않았다는 경험권고 제한이 있습니다.
- 출처 URL: Killgore, Balkin & Wesensten (2006). Impaired decision making following 49 h of sleep deprivation. Journal of Sleep Research. <https://doi.org/10.1111/j.1365-2869.2006.00487.x>

### 3-11. 오후에 졸리면 10분 자세요. 30분 잤다면 깬 직후 활동에 주의하세요
- 판정: 적합
- 근거·범위: Brooks 초록의24명·전날 약5시간·오후3시·실제수면5/10/20/30분·155분·35분에 부합합니다. 10분은 잠드는 시간 제외이며30분 뒤 즉시 수행 저하와 이후 이득을 구별합니다.
- 출처 URL: Brooks & Lack (2006). A brief afternoon nap following nocturnal sleep restriction: Which nap duration is most recuperative? Sleep. <https://doi.org/10.1093/sleep/29.6.831>

### 3-12. 개방형 사무실에서 일할 때는 귀마개를 쓰거나, 기억이 필요한 일은 조용한 방에서 하세요
- 판정: 적합
- 근거·범위: source-evidence-r2/author-thesis-abstract.txt를 직접 읽었습니다. 원저자 기관 학위초록 Paper I의39→51dB LAeq·단어기억 저하·피로 증가·의욕 감소 및 자연영상/강소리/사무소음 비교에 부합합니다. 논문 제목이 같은 Paper I라는 기관 기록을 사용하며 개별 논문 전체 표를 검증했다고 주장하지 않습니다. 귀마개·이어폰은 별도 저자 조언입니다.
- 출처 URL: Jahncke, Hygge, Halin, Green & Dimberg (2011). Open-plan office noise: Cognitive performance and restoration. Journal of Environmental Psychology. <https://doi.org/10.1016/j.jenvp.2011.07.002>；Jahncke H (2012). Cognitive Performance and Restoration in Open-Plan Office Noise. Doctoral thesis. University of Gävle 기관 저장소의 원저자 초록. <https://hig.diva-portal.org/smash/record.jsf?pid=diva2%3A565729>

### 3-13. 주 근무시간을 줄일 여지가 있는지 살펴보세요
- 판정: 적합
- 근거·범위: /tmp/ch03e13-pencavel.txt 원저자 작업논문의49/48시간 문맥·63시간 최대·70시간과56시간 비교를 읽었습니다. 100년 전 주로 여성인 공장 노동자 관찰자료를 한국 직종의 보편기준으로 옮기지 않습니다. 아래 법령 대조에 따라40+12·사업장범위·특례·제외가 현재 설명에 반영됐습니다.
- 출처 URL: Pencavel (2015). The Productivity of Working Hours. The Economic Journal. <https://doi.org/10.1111/ecoj.12166>；「근로기준법」 제50조(근로시간) <https://www.law.go.kr/법령/근로기준법/제50조>；「근로기준법」 제53조(연장 근로의 제한) <https://www.law.go.kr/법령/근로기준법/제53조>；「근로기준법」 제11조(적용 범위) <https://www.law.go.kr/법령/근로기준법/제11조>；「근로기준법 시행령」 제7조와 별표 1(상시 4명 이하 사업장에 적용하는 법 규정) <https://www.law.go.kr/법령/근로기준법시행령/제7조>；Pencavel (2014). The Productivity of Working Hours. IZA Discussion Paper No. 8129. <https://docs.iza.org/dp8129.pdf>；「근로기준법」 제59조·제63조 <https://www.law.go.kr/법령/근로기준법/제59조> <https://www.law.go.kr/법령/근로기준법/제63조>；「근로기준법 시행령」 제34조 <https://www.law.go.kr/법령/근로기준법시행령/제34조>

### 3-14. 같은 안 좋은 일을 되뇌고 있음을 알아차리면, 손을 쓰는 일로 바꾸세요
- 판정: 적합
- 근거·범위: Nolen-Hoeksema 개관 초록의 우울·부정적 생각·문제해결·행동·사회지지·불안/폭식/음주/자해 관련 방향에 부합합니다. 손 쓰는 일의 우월성을 직접 비교한 근거는 없다고 적습니다.
- 출처 URL: Nolen-Hoeksema, Wisco & Lyubomirsky (2008). Rethinking Rumination. Perspectives on Psychological Science. <https://doi.org/10.1111/j.1745-6924.2008.00088.x>

### 3-15. 비관적 예측을 확정된 미래로 받아들이지 마세요
- 판정: 적합
- 근거·범위: Whitfield 초록·원문 캐시의2978명/1068사망과 분석2742명/994사망을 구별합니다. HR1.134/1.196은1SD당 순간위험이며 추적 전체 확률비가 아닙니다. 암·낙관 비유의, 역인과 가능성, 임상진단·개입효과 미입증을 보존합니다.
- 출처 URL: Whitfield JB, Zhu G, Landers JG, Martin NG (2020). Pessimism is associated with greater all-cause and cardiovascular mortality, but optimism is not protective. Scientific Reports, 10, 12609. <https://doi.org/10.1038/s41598-020-69388-y>

### 3-16. 소모적인 인간관계를 줄이고, 받고 싶지 않은 부탁을 거절하는 법을 배우세요
- 판정: 적합
- 근거·범위: Rook PMID6737206 캐시 초록의60~89세 사별여성120명과 부정경험의 더 강한 안녕감 연관에 부합합니다. 관계 한 명의 손익이나 거절의 인과효과로 환산하지 않습니다. 기력 해석은 저자 판단이며 원문 C등급을 보존합니다.
- 출처 URL: Rook (1984). The negative side of social interaction: Impact on psychological well-being. Journal of Personality and Social Psychology. <https://doi.org/10.1037/0022-3514.46.5.1097>

### 3-17. 화가 나면 먼저 자리를 뜨세요. 상대를 적이 아니라 날씨로 보세요
- 판정: 적합
- 근거·범위: Webb 정확 DOI 초록의306비교·.36/.45/.27·표현억제.32와 경험억제-.04는 올바릅니다. Carlsmith 초록은 offender를 벌한 뒤 반추하는 방향과3실험을 뒷받침합니다. 현재 “잘못한 상대를 벌하면 상대를 더 오래 곱씹습니다.”로 승인된 최소안이 정확히 반영됐습니다. 초록의 offender 범위에 맞으며 모욕 장면으로 한정하지 않습니다. 원문 전체의 구체적 절차는 미확인이지만 현재 표현의 결함으로 세지 않습니다.
- 출처 URL: Webb TL, Miles E, Sheeran P (2012). Dealing with feeling: A meta-analysis of the effectiveness of strategies derived from the process model of emotion regulation. Psychological Bulletin. <https://doi.org/10.1037/a0027600>；Carlsmith KM, Wilson TD, Gilbert DT (2008). The paradoxical consequences of revenge. Journal of Personality and Social Psychology. <https://doi.org/10.1037/a0012165>

### 3-18. 기분이 가라앉을 때 먼저 할 일: 움직이기, 햇볕 쬐기, 제때 자기, 누군가에게 말하기, 109에 전화하기
- 판정: 적합
- 근거·범위: Noetel 초록의218시험14170명·활성대조·걷기g=-.62/신용구간과 낮은 확실성, Golden의치료용 밝은빛 .84/.53 및 항우울제 병용 비유의, Karyotaki의구조화 iCBT·단기안내우위·PHQ9>9·6/12개월 차이근거없음에 부합합니다. 햇빛 권고와 광선치료를 구분합니다. 초록/본문 -.62/-.63 차이는 현재 비고에서 미해결로 공개합니다. 109·1577-0199는 신규 공식 본문으로 확인했습니다.
- 출처 URL: Noetel M 외 (2024). Effect of exercise for depression: systematic review and network meta-analysis of randomised controlled trials. BMJ. <https://doi.org/10.1136/bmj-2023-075847>；Golden RN 외 (2005). The efficacy of light therapy in the treatment of mood disorders: a review and meta-analysis of the evidence. American Journal of Psychiatry. <https://doi.org/10.1176/appi.ajp.162.4.656>；Karyotaki E 외 (2021). Internet-Based Cognitive Behavioral Therapy for Depression: A Systematic Review and Individual Patient Data Network Meta-analysis. JAMA Psychiatry. <https://doi.org/10.1001/jamapsychiatry.2020.4364>；보건복지부 (2025). 자살예방 상담전화(109) 콜센터 추가 개소(보도자료, 2025-10-23). <https://www.mohw.go.kr/board.es?mid=a10503010100&bid=0027&act=view&list_no=1487674>；보건복지상담센터. 자살예방상담전화 109. <https://www.129.go.kr/109>

### 3-19. 경찰·의사·창구 직원을 '역할'이 아니라 규칙에 따라 일하는 사람으로 보세요. 일을 움직이는 것은 서류와 기한이다
- 판정: 적합
- 근거·범위: 아래 형소법·민원법·형법 본문 및 부칙 대조를 현재 문장에 적용했습니다. 송부일기산7일·통지후3개월·송부후6개월연장·2026.10.2이후통지 적용, 처분/청구7일, 법정민원60일·10일과 연장예외가 구별됩니다. 기대조정C등급·서류/대리/심판/소송 비용범위·결과비보장을 유지합니다. 응급실 중증도 원칙은 기존 조사기록의 공식 확인 범위이며 이번에 새 응급실 웹 본문을 열었다고 주장하지 않습니다.
- 출처 URL: 「형사소송법」 제245조의6(고소인등에 대한 송부통지) <https://www.law.go.kr/법령/형사소송법/제245조의6>；「형사소송법」 제245조의7(고소인등의 이의신청) <https://www.law.go.kr/법령/형사소송법/제245조의7>；「형사소송법」 제258조(고소인등에의 처분고지) <https://www.law.go.kr/법령/형사소송법/제258조>；「형사소송법」 제259조(고소인등에의 공소불제기이유고지) <https://www.law.go.kr/법령/형사소송법/제259조>；「민원 처리에 관한 법률」 제17조(법정민원의 처리기간 설정ㆍ공표) <https://www.law.go.kr/법령/민원처리에관한법률/제17조>；「민원 처리에 관한 법률」 제35조(거부처분에 대한 이의신청) <https://www.law.go.kr/법령/민원처리에관한법률/제35조>；「형법」 제133조(뇌물공여 등) <https://www.law.go.kr/법령/형법/제133조>

### 3-20. "남들은 어떻게 살까"를 매일 확인하지 마세요. 또래 소식을 훑는 앱에 제한을 걸거나 끄세요
- 판정: 적합
- 근거·범위: Lei 원문 캐시의54표본94효과36583명·r=.330와 영역별 값, w25514.txt의2743모집/1661분석·4주·60분·.09·.12/.10/.09/.08·-.19/-.16·12분/23%와 자기보고/아이폰8% 비유의를 대조했습니다. 본문 유의성 주장과 표A11 즐거움q=.06의 충돌을 공개합니다. Hunt143명·각10분·3주 및 양집단 불안감소를 구별합니다. 현재 “기분이 가라앉으면 이 절 제18항(기분이 가라앉을 때 먼저 할 일)을 보세요.”로 승인된 최소안이 정확히 반영됐습니다. 실제18항 제목의 앵커와 맞으며43자입니다.
- 출처 URL: Lei Y, Hu S, Sun Y, Zheng L (2026). "Looking up" linked to feeling down: a meta-analysis of online upward social comparison and psychological maladjustment. Frontiers in Psychology. <https://doi.org/10.3389/fpsyg.2026.1825169>；Allcott H, Braghieri L, Eichmeyer S, Gentzkow M (2020). The Welfare Effects of Social Media. American Economic Review, 110(3), 629–676. <https://doi.org/10.1257/aer.20190658>；Allcott H, Braghieri L, Eichmeyer S, Gentzkow M (2019). The Welfare Effects of Social Media. NBER Working Paper No. 25514. <https://www.nber.org/papers/w25514>；Hunt MG, Marx R, Lipson C, Young J (2018). No More FOMO: Limiting Social Media Decreases Loneliness and Depression. Journal of Social and Clinical Psychology, 37(10), 751–768. <https://doi.org/10.1521/jscp.2018.37.10.751>

### 3-21. "모두가 내 망신을 봤다"고 느낄 때, 남들이 얼마나 봤을지 다시 따져보세요
- 판정: 적합
- 근거·범위: source-evidence/spotlight.txt 본문 각주의46/23·48/8과 평균차23/27/40/36%p·CI 및109/79명 구성, Boothby 초록의대화/룸메이트/워크숍·수개월을 대조했습니다. 원문 내부 그림/각주 차이를 공개하고 개인 추정 보정계수나 반으로 나눠도 높다는 일반화를 제거했습니다.
- 출처 URL: Gilovich T, Medvec VH, Savitsky K (2000). The spotlight effect in social judgment: An egocentric bias in estimates of the salience of one's own actions and appearance. Journal of Personality and Social Psychology, 78(2), 211–222. <https://doi.org/10.1037/0022-3514.78.2.211>；Boothby EJ, Cooney G, Sandstrom GM, Clark MS (2018). The Liking Gap in Conversations: Do People Like Us More Than We Think? Psychological Science, 29(11), 1742–1756. <https://doi.org/10.1177/0956797618783714>

### 3-22. "주변 사람들이 나에게 완벽을 요구한다"는 생각과 실제 요구를 구별하세요
- 판정: 적합
- 근거·범위: Smith 초록45연구11747명·사고/시도·추적에서 초기사고 통제후 예측에 부합합니다. 미확인 세부r/분모/CI는 현재 단정하지 않습니다. 사망 미측정·비인과·임상진단아님·실제요구 구별·109 위기조건을 보존합니다. 현재 “제15항(비관적 예측을 확정된 미래로 받아들이지 마세요)도 참고하세요.”로 승인된 최소안이 정확히 반영됐습니다. 실제15항 제목과 맞으며39자입니다.
- 출처 URL: Smith MM, Sherry SB, Chen S, Saklofske DH, Mushquash C, Flett GL, Hewitt PL (2018). The perniciousness of perfectionism: A meta-analytic review of the perfectionism-suicide relationship. Journal of Personality, 86(3), 522–542. <https://doi.org/10.1111/jopy.12333>

### 3-23. 화가 나면 물건 부수기·샌드백 치기·달리기보다 몸부터 진정시키세요
- 판정: 적합
- 근거·범위: Kjærvik 초록154연구184표본10189명·g=-.63/-.02 및 구간을 대조했습니다. 각성증가 방법 평균과 개별 조깅의 결과를 구별합니다. 장기기분개선과 즉시분노조절을 구별하고 폭행위험 때112를 안내합니다. 경찰청112신고포털 원자료의 전화신고·국민비상벨112를 읽었습니다. 전체 연구본문 열람으로 과장하지 않습니다.
- 출처 URL: Kjærvik SL, Bushman BJ (2024). A meta-analytic review of anger management activities that increase or decrease arousal: What fuels or douses rage? Clinical Psychology Review. <https://doi.org/10.1016/j.cpr.2024.102414>；경찰청 112신고포털. <https://www.112.go.kr/>

### 3-24. 마음에 눌린 일이 있으면 며칠 동안 생각과 감정을 적어 보세요. 다만 치료로 기대하지는 마세요
- 판정: 적합
- 근거·범위: Frattaroli 초록146무작위연구·r=.075와 Zachariae 초록16시험·g=.04/CI-.06~.14 비유의를 확인했습니다. Mogk 원문캐시의영문/본문42적격·30분석과 독문43 충돌, 초기3~4회15~20분과 실제1~5회평균3.2회를 구별합니다. 괴로움 심화시 중단·치료대체금지·자살위기109 조건을 유지합니다.
- 출처 URL: Frattaroli J (2006). Experimental disclosure and its moderators: a meta-analysis. Psychological Bulletin. <https://doi.org/10.1037/0033-2909.132.6.823>；Mogk C, Otte S, Reinhold-Hurley B, Kröner-Herwig B (2006). Health effects of expressive writing on stressful or traumatic experiences - a meta-analysis. Psycho-Social Medicine. <https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2736499/>；Zachariae R, O'Toole MS (2015). The effect of expressive writing intervention on psychological and physical health outcomes in cancer patients--a systematic review and meta-analysis. Psycho-Oncology. <https://doi.org/10.1002/pon.3802>

## 도입·빈 tail·참조·문체
도입 분류의24번호는 각1회이며 현재 제목/권고와 맞습니다. 15·22항을 임상증상으로 진단하지 않고22항은 사망미측정이라고 명시합니다. 1항의 실제 DOI drop1개와 유일 kr-doi-drop의 DOI가 맞습니다. 원문과24항 수는 같고 승인 없는 DOI 추가삭제를 발견하지 못했습니다.
현재 마지막24항 뒤에 별도 TODO tail은 없습니다. 과거 통계PDF·법령확인이 수행되지 않았다는 오래된 TODO를 남기지 않은 것은 타당합니다. 연구본문 접근한계(8·12·17·22·23), 원문내127/133·42/43·그림/각주 차이, BMJ초록/본문 및 Allcott표 차이는 본문 또는 이 기록에 남아 있습니다. 빈 tail을 모든 원문을 완전히 검증했다는 뜻으로 해석하지 않습니다.
제2절13·37·38항, 제4절15·16항, 제6절23·24항, 제22절6·8항의 앵커와 대상제목을 대조했습니다. 다른절1·8·9·24·30 주제는 README표와 맞습니다. 자리표시 절의 특정제도 현지화가 완료됐다고 보증하지 않으며 현재 본문에는 공개여부 금지표시가 없습니다. 같은절20·22의 괄호앵커 형식문제는 현재 정확수정으로 해결됐습니다.
24제목은70자 이하, 쉽게는 모두120자 이하(최장113자)입니다. 출처와 제목을 제외한 네 필드의 문장을 소수점과 문장종결점을 구분하여 읽었고 실제50자초과 문장을 발견하지 못했습니다. 숫자나 영어로 시작하는 다음문장을 앞문장과 잘못 합치는 점검오탐은 초과로 세지 않았습니다. 합니다/하세요 체의 이해를 막는 번역투는 발견하지 못했습니다. 19항 제목 끝의 “기한이다”는 경미한 체 차이이며 정보오류는 아닙니다.

## 요약
block0건 · warn0건 · 삭제권고0건. 직전3개 warn은17항 범위표현과20·22항 괄호앵커의 승인된 최소수정으로 모두 해결됐습니다. 근거 열람 한계는 현재 표현 warn과 구별하여 아래 보존합니다. 본문은 검토자가 수정하지 않았습니다.
미확인 범위: 12항 개별원논문 전체표(원저자 학위초록만 확인),17항 복수실험 절차 세부,8·22·23항 전체 원문표 및18항 판본차이의 최종원인. 현재본문은 미확인 세부숫자를 단정하지 않거나 불일치를 공개하므로 허위 정보 blocker로 세지 않았습니다. 이 판정은 기존 source의 모든 수치가 자동으로 옳다는 승인이 아닙니다.
종료 CLI 해시는 시작과 같으며 검토 중 본문 변경이 없습니다.
KR-FIT: pass blockers=0 sha256=c27b1c95f96d3d2b41f9968fda1b88f0a366d2dc47a423d24b039a6b5b004af6
