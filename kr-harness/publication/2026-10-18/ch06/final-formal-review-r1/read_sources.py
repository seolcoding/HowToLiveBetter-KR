import json, pathlib, re, sys, html, gzip, subprocess, xml.etree.ElementTree as ET
from html.parser import HTMLParser

ROOT=pathlib.Path(__file__).parent
rows=json.loads((ROOT/'source-index.json').read_text())
class Text(HTMLParser):
    def __init__(self):
        super().__init__(); self.out=[]; self.skip=0
    def handle_starttag(self,tag,attrs):
        if tag in ['script','style']:self.skip+=1
        if tag in ['p','div','tr','li','h1','h2','h3','h4','section']:self.out.append('\n')
    def handle_endtag(self,tag):
        if tag in ['script','style']:self.skip=max(0,self.skip-1)
        if tag in ['p','div','tr','li','h1','h2','h3','h4','section']:self.out.append('\n')
    def handle_data(self,data):
        if not self.skip:self.out.append(data)
def strip(s):
    p=Text();p.feed(s);return '\n'.join(re.sub(r'\s+',' ',x).strip() for x in ''.join(p.out).splitlines() if x.strip())
def convert(r):
    p=pathlib.Path(r['artifact_path']);b=p.read_bytes()
    if b[:2]==b'\x1f\x8b':b=gzip.decompress(b)
    if b.startswith(b'%PDF'):return subprocess.check_output(['pdftotext','-layout',str(p),'-']).decode()
    if p.suffix=='.png':return '[IMAGE; use view_image]'
    s=b.decode('utf-8',errors='replace')
    if '\ufffd' in s:
        try:s=b.decode('cp949')
        except UnicodeError:pass
    try:
        x=json.loads(s)
        if isinstance(x,dict) and 'resultList' in x:
            return '\n\n'.join(r.get('title','')+'\n'+strip(r.get('abstractText','[NO ABSTRACT]')) for r in x['resultList'].get('result',[]))
        if isinstance(x,list):
            return '\n'.join(p.get('text','') for d in x for doc in d.get('documents',[]) for p in doc.get('passages',[]))
    except (ValueError,AttributeError):pass
    if s.lstrip().startswith('<?xml'):
        try:return '\n'.join(t.strip() for t in ET.fromstring(s).itertext() if t.strip())
        except ET.ParseError:pass
    return strip(s) if '<' in s else s
if __name__=='__main__':
    for a in sys.argv[1:]:
        r=rows[int(a)-1];s=convert(r)
        print('\nSOURCE',a,r.get('url'),r['actual_sha256']); print(s)
