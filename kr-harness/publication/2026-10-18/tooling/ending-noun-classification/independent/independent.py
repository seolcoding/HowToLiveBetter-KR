from pathlib import Path
import sys,re,json,hashlib,difflib,subprocess,importlib.util,unittest
B=Path(__file__).resolve().parent;R=Path('/workspace/HowToLiveBetter-KR');S=B/'skill';sys.path[:0]=[str(S/'references'),str(S/'scripts')];import metrics,checks
nouns=('연고','원고','광고','창고','금고','잔고','경고','선고','최고');amb=('사고','보고','참고','신고','재고');tests=[]
for noun in nouns:
 for form in (noun+', 다른 물건',noun+' , 다른 물건','('+noun+'), 다른 물건','"'+noun+', 준비물"',noun+' 가져오고, 보관하며 보냅니다.'):
  expected=.5 if '가져오고' in form else 0
  actual=metrics.ending_comma_rate(form);assert actual==expected,(form,actual);tests.append((form,actual))
 # Compounds deliberately remain conservative; predicates still true connectives.
 for word in ('새'+noun,noun+'이고',noun+'하고',noun+'이며',noun+'였지만'):
  form=word+', 계속합니다.';actual=metrics.ending_comma_rate(form);assert actual==1,(form,actual);tests.append((form,actual))
for word in amb+('먹고','읽고','웃고','마시고','들었고','하고','하며','하지만','하면서','좋아서','없어서'):
 form=word+', 다음입니다.';assert metrics.ending_comma_rate(form)==1;tests.append((form,1))
# Independently check the arithmetic by subtraction from the previous suffix classifier.
forms=['연고, 먹고, 갑니다.','연고 먹고, 읽고 갑니다.','원고, 경고, 광고하고, 갑니다.','최고 창고 잔고 보고, 신고 갑니다.']
for text in forms:
 matches=list(re.finditer(r'(?:고|며|지만|면서|아서|어서)(?=[\s,\.!?、。]|$)',text));num=den=0
 for m in matches:
  word=text[:m.end()].split()[-1].strip('"(「')
  if word in nouns:continue
  den+=1;num+=bool(re.match(r'\s*,',text[m.end():]))
 expected=num/den if den else 0;actual=metrics.ending_comma_rate(text);assert actual==expected,(text,expected,actual);tests.append((text,actual))
# Exact full patch and retained runtime/fidelity/threshold files.
old=R/'.claude/skills/humanize-korean/references/metrics.py';new=S/'references/metrics.py';patch=''.join(difflib.unified_diff(old.read_text().splitlines(True),new.read_text().splitlines(True),fromfile='a/.claude/skills/humanize-korean/references/metrics.py',tofile='b/.claude/skills/humanize-korean/references/metrics.py'))
assert patch==(B.parent/'ending-noun-fix/candidate.patch').read_text()
# Numerator cannot exceed denominator for mixtures of exempt nouns and true connective forms.
for a in nouns+amb:
 for b in ('먹고','연고','원고','광고하고'):
  for sep in (' ', ', ', ' ,\n'):
   text=a+sep+b+', 다음입니다.';val=metrics.ending_comma_rate(text);assert 0<=val<=1
# New forward wrapper must not exempt original author text.
a='설명은 간단하며, 조건은 그대로입니다. '*8;b='기관은 이렇게 설명합니다. "'+a+'"'
p=B/'wrapper';p.mkdir(exist_ok=True);(p/'before').write_text(a);(p/'after').write_text(b)
x=subprocess.run([sys.executable,str(S/'scripts/verify_gates.py'),'--before',str(p/'before'),'--after',str(p/'after'),'--genre','essay','--json'],capture_output=True,text=True);(p/'gate.txt').write_text(x.stdout);obj=json.loads(x.stdout[x.stdout.index('{'):]);assert x.returncode==1;assert next(t for t in obj['s1_targets'] if t['metric']=='ending_comma_rate')['z_after']>2
# Relocate only test fixture path, preserving baseline files and tested implementation.
spec=importlib.util.spec_from_file_location('relocated_metrics','/workspace/.cache/im-not-ai/tests/test_metrics.py');mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod);mod.BASELINE_PATH=str(S/'references/baseline.json');res=unittest.TextTestRunner(verbosity=1).run(unittest.defaultTestLoader.loadTestsFromModule(mod));assert res.wasSuccessful()
(B/'independent-results.json').write_text(json.dumps({'classified_cases':tests,'bounded_ratio_cases':len(nouns+amb)*4*3,'relocated_metrics_tests':res.testsRun,'patch_sha256':hashlib.sha256(patch.encode()).hexdigest()},ensure_ascii=False,indent=2));print('Independent classification/arithmetic/wrapper/relocated-suite checks passed')
