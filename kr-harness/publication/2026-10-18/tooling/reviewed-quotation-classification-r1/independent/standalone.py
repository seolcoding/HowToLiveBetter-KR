from pathlib import Path
import tempfile,shutil,subprocess,sys,json,os
B=Path(__file__).resolve().parent;S=B/'candidate/.claude/skills/humanize-korean';out=[]
with tempfile.TemporaryDirectory(dir=B,prefix='TEST-clean-runtime-') as d:
 root=Path(d);(root/'scripts').mkdir();(root/'references').mkdir()
 names=sorted(p.name for p in (S/'scripts').glob('*.py'));assert len(names)==10
 for name in names:shutil.copy2(S/'scripts'/name,root/'scripts'/name)
 for name in ('metrics.py','metrics_v2.py','baseline.json','baseline_v2.json'):shutil.copy2(S/'references'/name,root/'references'/name)
 before='기관은 "조건은 복잡하며, 절차는 간단합니다"라고 설명했다. 환자는 20분 기다려야 합니다.'
 for label,after,expected,code in [('identity',before,0,None),('quote',before.replace('복잡하며,','복잡합니다.'),1,'quote_altered'),('numbers',before.replace('20분','21분'),1,'number_injected')]:
  (root/'before').write_text(before);(root/'after').write_text(after)
  p=subprocess.run([sys.executable,'-I','-B',str(root/'scripts/verify_gates.py'),'--before',str(root/'before'),'--after',str(root/'after'),'--json'],cwd=root,capture_output=True,text=True,env={'PATH':os.environ['PATH'],'HOME':d,'LC_ALL':'C.UTF-8'})
  assert p.returncode==expected,(label,p.stdout,p.stderr);report=json.loads(p.stdout[p.stdout.index('{'):]);assert code is None or code in {x['code'] for x in report['golden']};out.append({'case':label,'exit':p.returncode,'golden':report['golden']})
(B/'standalone-results.json').write_text(json.dumps({'runtime_names':names,'runtime_count':10,'cases':out},ensure_ascii=False,indent=2));print('Clean minimal10 runtime +4 references, python -I -B:3 cases pass')
