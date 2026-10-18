from pathlib import Path
import sys,json,hashlib
B=Path(__file__).resolve().parents[1];mode=sys.argv[1]
sys.path.insert(0,str(B/mode/'.claude/skills/humanize-korean/scripts'))
import checks
records=[]
for item in json.loads((B/'actual-snapshot/snapshot.json').read_text()):
 raw=(B/'actual-snapshot'/item['path']/'before').read_bytes();text=raw.decode();failures=checks.check_footnotes(text,text)
 records.append({'chapter':item['chapter'],'entry':item['entry'],'input_sha256':hashlib.sha256(raw).hexdigest(),'markers':[{'number':n,'position':p,'anchor':checks._nearest_num_before(text,p)} for n,p in checks.extract_inline_markers(text)],'failures':[{'code':f.code,'message':f.message} for f in failures]})
result={'scope':'P3 check_footnotes(original,original), not full gate','mode':mode,'total':len(records),'failed_entries':sum(bool(r['failures']) for r in records),'failed_occurrences':sum(len(r['failures']) for r in records),'records':records}
(B/(mode+'-p3-identity667.json')).write_text(json.dumps(result,ensure_ascii=False,indent=2))
print(json.dumps({k:v for k,v in result.items() if k!='records'},ensure_ascii=False))
