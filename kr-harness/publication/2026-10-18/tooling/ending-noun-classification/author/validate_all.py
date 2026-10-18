from pathlib import Path
import sys,json,collections,importlib.util,unittest,hashlib,subprocess
B=Path(__file__).parent;R=Path('/workspace/HowToLiveBetter-KR');S=B/'skill'
sys.path[:0]=[str(S/'scripts'),str(S/'references')]
import checks,metrics,metrics_v2,prepare_monolith_input as prep
results={}
for name in ('test_golden','test_metrics','test_metrics_v2'):
 spec=importlib.util.spec_from_file_location(name,'/workspace/.cache/im-not-ai/tests/'+name+'.py');m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
 result=unittest.TextTestRunner(verbosity=0).run(unittest.defaultTestLoader.loadTestsFromModule(m));results[name]={'count':result.testsRun,'failures':len(result.failures),'errors':len(result.errors)}
counts=collections.Counter();changes=[];metric_changes=[]
for manifest in sorted((R/'kr-harness/publication/2026-10-18').glob('ch*/manifest.json')):
 for e in json.loads(manifest.read_text())['entries']:
  run=manifest.parent/e['run_dir'];text=(run/'01_input.txt').read_text();obj=metrics_v2.compute_all_v2(text,genre='essay');obj['_text']=text;route=prep.compute_route_hint(obj)['route_hint'];counts[route]+=1
  if route!=e['route']:changes.append({'chapter':manifest.parent.name,'entry':e['number'],'old':e['route'],'new':route})
  # Compare fresh fixed-prefix production metric, not stale saved metrics.
  proc=subprocess.run([sys.executable,'-c',"import sys,json;sys.path.insert(0,sys.argv[1]);import metrics;print(metrics.ending_comma_rate(sys.stdin.read()))",str(R/'.claude/skills/humanize-korean/references')],input=text,text=True,capture_output=True,check=True)
  old=float(proc.stdout);new=metrics.ending_comma_rate(text)
  if old!=new:metric_changes.append({'chapter':manifest.parent.name,'entry':e['number'],'old':old,'new':new})
# Verify every candidate file except the edited lexical classifier equals production.
diffs=[]
for p in S.rglob('*'):
 if p.is_file() and '__pycache__' not in p.parts and p.suffix!='.pyc':
  rel=p.relative_to(S);q=R/'.claude/skills/humanize-korean'/rel
  if p.read_bytes()!=q.read_bytes():diffs.append(str(rel))
results.update({'routes':dict(counts),'total':sum(counts.values()),'route_changes':changes,'raw_metric_changes':metric_changes,'skill_diffs':diffs})
(B/'validation.json').write_text(json.dumps(results,ensure_ascii=False,indent=2));print(json.dumps(results,ensure_ascii=False))
