import sys,json,hashlib,difflib,subprocess
from pathlib import Path
B=Path(__file__).resolve().parent;R=Path('/workspace/HowToLiveBetter-KR');sys.path.insert(0,str(B/'skill/scripts'));import checks
q='조건은 복잡하며, 절차는 간단합니다'
cases=[('canonical','기관은 내용을 이렇게 설명합니다. "'+q+'"',1),('newline','기관은 내용을 이렇게 설명합니다.\n"'+q+'"',1),('blank-lines','기관은 내용을 이렇게 설명합니다.\n\n"'+q+'"',1),('boundary','기관은 내용을 이렇게 설명합니다. 나는 생각합니다. "'+q+'"',0),('line-boundary','기관은 내용을 이렇게 설명합니다.\n나는 생각합니다. "'+q+'"',0),('unrelated-speech','기관은 설명했습니다. "'+q+'"',0),('no-source','이렇게 설명합니다. "'+q+'"',0),('near-word','기관은 내용을 이렇게 설명서로 정리합니다. "'+q+'"',0),('negated','기관은 내용을 이렇게 설명하지 않습니다. "'+q+'"',0),('conditional','기관은 내용을 이렇게 설명한다면. "'+q+'"',0),('extra-sentence','기관은 내용을 이렇게 설명합니다. 끝입니다. "'+q+'"',0),('multiple','기관은 내용을 이렇게 설명합니다. "'+q+'" "다른 조건은 복잡하며, 절차는 다릅니다"',1),('heading-between','기관은 내용을 이렇게 설명합니다.\n# 내 생각\n"'+q+'"',0),('new-speech-wrapper','기관은 내용을 이렇게 설명합니다. "'+q+'"',1),('similar-pointer','기관은 내용을 그런 식으로 설명합니다. "'+q+'"',0)]
results=[]
for name,text,expected in cases:
 actual=len(checks.protected_quote_spans(text));assert actual==expected,(name,actual,expected);results.append(dict(name=name,text=text,expected=expected,actual=actual))
base=(R/'.claude/skills/humanize-korean/scripts/checks.py').read_text();new=(B/'skill/scripts/checks.py').read_text();patch=''.join(difflib.unified_diff(base.splitlines(True),new.splitlines(True),fromfile='a/.claude/skills/humanize-korean/scripts/checks.py',tofile='b/.claude/skills/humanize-korean/scripts/checks.py'))
assert patch==(B.parent/'quote-prefix-fix/candidate.patch').read_text()
unchanged=[]
for p in (B/'skill').rglob('*'):
 if p.is_file() and '__pycache__' not in str(p):
  rp=R/'.claude/skills/humanize-korean'/p.relative_to(B/'skill')
  if rp.exists() and p.name!='checks.py':
   assert p.read_bytes()==rp.read_bytes(),p;unchanged.append(str(p.relative_to(B/'skill')))
(B/'adversarial-results.json').write_text(json.dumps(dict(cases=results,unchanged_files=unchanged,patch_sha256=hashlib.sha256(patch.encode()).hexdigest()),ensure_ascii=False,indent=2))
print('15 adversarial classifications passed; patch exact; other common skill files unchanged:',len(unchanged))
