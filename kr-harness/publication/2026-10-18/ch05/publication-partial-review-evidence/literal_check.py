#!/usr/bin/env python3
"""Read-only literal sentence check. No parentheses/citation/quote exemption."""
import argparse,json,re
from pathlib import Path
p=argparse.ArgumentParser();p.add_argument('path');a=p.parse_args();path=Path(a.path)
if path.suffix=='.json':
 manifest=json.loads(path.read_text());targets=[(e.get('entry',e.get('number')),Path(e['proposal_path'])) for e in manifest['entries']]
else:targets=[(None,path)]
rows=[]
for number,target in targets:
 text=target.read_text();fields=dict(re.findall(r'^- ([^:\n]+): (.*(?:\n[ \t]+[^\n]+)*)',text,re.M));long=[]
 for field,value in fields.items():
  if field not in ['비용','쉽게','이득','비고']:continue
  for sentence in re.split(r'(?<=[.!?])\s+',value):
   if len(sentence)>50:long.append({'field':field,'literal_chars':len(sentence),'sentence':sentence})
 title=text.splitlines()[0].split('. ',1)[-1];easy=fields.get('쉽게','');rows.append({'entry':number,'path':str(target),'title_chars':len(title),'easy_chars':len(easy),'easy_sentences':len(re.split(r'(?<=[.!?])\s+',easy)) if easy else 0,'long_sentences':long,'pass_length':len(title)<=70 and len(easy)<=120 and 2<=len(re.split(r'(?<=[.!?])\s+',easy))<=4 and not long})
print(json.dumps(rows,ensure_ascii=False,indent=2))
raise SystemExit(0 if all(x['pass_length'] for x in rows) else 1)
