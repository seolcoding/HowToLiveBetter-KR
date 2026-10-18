from pathlib import Path
import json,subprocess,sys
B=Path(__file__).parent;R=Path('/workspace/HowToLiveBetter-KR');v=json.loads((B/'validation.json').read_text());out=[]
for e in v['raw_metric_changes']:
 p=R/'kr-harness/publication/2026-10-18'/e['chapter'];entry=next(x for x in json.loads((p/'manifest.json').read_text())['entries'] if x['number']==e['entry']);run=p/entry['run_dir'];codes={}
 for label,s in [('production',R/'.claude/skills/humanize-korean'),('candidate',B/'skill')]:
  target=B/'cases'/f"{e['chapter']}-e{e['entry']}";target.mkdir(parents=True,exist_ok=True)
  result=subprocess.run([sys.executable,str(s/'scripts/verify_gates.py'),'--before',str(run/'01_input.txt'),'--after',str(run/'final.md'),'--genre','essay','--json'],capture_output=True,text=True)
  (target/f'{label}-final-gates.json').write_text(result.stdout);codes[label]=result.returncode
  identity={}
 for label,s in [('production',R/'.claude/skills/humanize-korean'),('candidate',B/'skill')]:
  result=subprocess.run([sys.executable,str(s/'scripts/verify_gates.py'),'--before',str(run/'01_input.txt'),'--after',str(run/'01_input.txt'),'--genre','essay','--json'],capture_output=True,text=True)
  (target/f'{label}-identity-gates.json').write_text(result.stdout);identity[label]=result.returncode
 out.append(dict(e,final_gate_codes=codes,identity_gate_codes=identity))
(B/'changed-input-final-gates.json').write_text(json.dumps(out,ensure_ascii=False,indent=2));print(json.dumps(out,ensure_ascii=False))
