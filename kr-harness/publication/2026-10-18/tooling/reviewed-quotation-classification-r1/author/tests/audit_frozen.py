"""Read-only all-input/all-available-final audit; no registry or source approvals."""
from pathlib import Path
import sys,contextlib,io,json,collections
B=Path(__file__).resolve().parents[1];mode=sys.argv[1];base=B/mode/'.claude/skills/humanize-korean';R=Path('/workspace/HowToLiveBetter-KR')
sys.path[:0]=[str(base/'scripts'),str(base/'references')]
import checks,metrics_v2,prepare_monolith_input as prep,verify_gates
records=[];routes=collections.Counter();gatecounts=collections.Counter();routechanges=[]
for e in json.loads((B/'actual-snapshot/snapshot.json').read_text()):
  run=B/'actual-snapshot'/e['path'];before=(run/'before').read_bytes();text=before.decode()
  metrics=metrics_v2.compute_all_v2(text,genre='essay');metrics['_text']=text;route=prep.compute_route_hint(metrics)['route_hint'];routes[route]+=1
  if route!=e['route']:routechanges.append([e['chapter'],e['entry'],e['route'],route])
  item={'chapter':e['chapter'],'entry':e['entry'],'input_sha256':__import__('hashlib').sha256(before).hexdigest(),'automatic_spans':checks.protected_quote_spans(text),'route':route}
  if not (run/'after').is_file():item['status']='missing';gatecounts['missing']+=1
  else:
   capture=io.StringIO()
   item['final_file_sha256']=__import__('hashlib').sha256((run/'after').read_bytes()).hexdigest()
   try:
    with contextlib.redirect_stdout(capture),contextlib.redirect_stderr(io.StringIO()):
     if mode=='candidate':code,report=verify_gates.evaluate_gate(before,(run/'after').read_bytes(),'essay')
     else:
      code=verify_gates.main(['--before',str(run/'before'),'--after',str(run/'after'),'--genre','essay','--json']);out=capture.getvalue();report=json.loads(out[out.index('{'):])
    item['status']=str(code);item['gate']=report;gatecounts[str(code)]+=1
   except Exception as exc:item['status']='error';item['error']=repr(exc);gatecounts['error']+=1
  records.append(item)
result={'mode':mode,'routes':dict(routes),'route_changes':routechanges,'gate_counts':dict(gatecounts),'total':len(records),'records':records}
(B/(mode+'-frozen-audit.json')).write_text(json.dumps(result,ensure_ascii=False,indent=2));print(json.dumps({k:v for k,v in result.items() if k!='records'},ensure_ascii=False))
