"""Root-selected reviewed original quotation classification (SPEC-R3 candidate).

No metadata discovery, source fetch, semantic approval or identity authentication.
Artifact reuse in the same source role is allowed; cross-role aliases are not.
All evidence is retained as immutable bytes after bounded descriptor-relative reads.
"""
from __future__ import annotations
from collections import Counter
from dataclasses import dataclass
import hashlib
import json
import os
from pathlib import Path
import re
import stat
import secrets
from urllib.parse import urlsplit

class ContextError(ValueError):
    pass

def require(condition, message):
    if not condition:
        raise ContextError(message)

def digest(data):
    return hashlib.sha256(data).hexdigest()

def utf8(data):
    require(not data.startswith(b'\xef\xbb\xbf'), 'UTF8 BOM forbidden')
    text=data.decode('utf-8',errors='strict')
    require('\x00' not in text,'NUL forbidden')
    return text

def keys(value, expected):
    require(type(value) is dict and set(value)==set(expected.split()),'object keys/type mismatch')

def integer(value, low=0, high=2**63-1):
    require(type(value) is int and low<=value<=high,'integer type/range')
    return value

def sha(value):
    require(type(value) is str and re.fullmatch('[0-9a-f]{64}',value) is not None,'SHA format')
    return value

def string(value, low=1, high=16384):
    require(type(value) is str and low<=len(value)<=high and '\x00' not in value,'string type/length/NUL')
    value.encode('utf-8',errors='strict')
    return value

def strict_json(data, allow_floats=False):
    require(len(data)<=256*1024,'JSON byte limit')
    def pairs(items):
        result={}
        for k,v in items:
            require(k not in result,'duplicate JSON key')
            result[k]=v
        return result
    def bad(value):
        raise ContextError('nonfinite JSON value')
    value=json.loads(utf8(data),object_pairs_hook=pairs,parse_constant=bad)
    def bounds(v,depth=0):
        require(depth<=12,'JSON depth')
        require(allow_floats or type(v) is not float,'JSON float forbidden')
        if type(v) is str: string(v,0)
        elif type(v) is list:
            for x in v: bounds(x,depth+1)
        elif type(v) is dict:
            for k,x in v.items(): string(k);bounds(x,depth+1)
    bounds(value)
    require(type(value) is dict,'JSON top object')
    return value

def relative_path(value):
    string(value,1,1024)
    require('\\' not in value and ':' not in value and not value.startswith('/')
            and all(p not in ('','.','..') for p in value.split('/')),'unsafe relative path')
    return value

class Snapshot:
    """One invocation, no reread after SHA checks; call close when finished."""
    def __init__(self, root):
        root=Path(root).absolute()
        # The trusted root itself must not be a symlink either.
        require(not root.is_symlink(),'symlink evidence root')
        self.root=root
        self.fd=os.open(root,os.O_RDONLY|os.O_DIRECTORY|os.O_NOFOLLOW)
        self.cache={};self.identities={};self.total=0
    def __del__(self):
        if getattr(self,'fd',None) is not None:
            os.close(self.fd);self.fd=None
    def close(self):
        if self.fd is not None: os.close(self.fd);self.fd=None
    def read(self,path,role,limit=2*1024*1024):
        relative_path(path)
        if path in self.cache:
            old_role,data=self.cache[path]
            require(old_role==role,'path reused across evidence roles')
            require(len(data)<=limit,'cached byte limit')
            return data
        directory=os.dup(self.fd)
        try:
            parts=path.split('/')
            for part in parts[:-1]:
                child=os.open(part,os.O_RDONLY|os.O_DIRECTORY|os.O_NOFOLLOW,dir_fd=directory)
                os.close(directory);directory=child
            fd=os.open(parts[-1],os.O_RDONLY|os.O_NOFOLLOW|os.O_NONBLOCK,dir_fd=directory)
            try:
                initial=os.fstat(fd)
                require(stat.S_ISREG(initial.st_mode),'not regular file')
                require(initial.st_size<=limit,'file byte limit')
                identity=(initial.st_dev,initial.st_ino)
                require(identity not in self.identities,'inode alias')
                chunks=[];size=0
                while True:
                    chunk=os.read(fd,min(65536,limit+1-size))
                    if not chunk: break
                    chunks.append(chunk);size+=len(chunk)
                    require(size<=limit,'read byte limit')
                final=os.fstat(fd)
                require((initial.st_size,initial.st_mtime_ns,initial.st_ctime_ns)==
                        (final.st_size,final.st_mtime_ns,final.st_ctime_ns),'changed during read')
                data=b''.join(chunks)
                require(len(data)==final.st_size,'incomplete read')
                utf8(data)
                self.total+=len(data);require(self.total<=64*1024*1024,'snapshot byte budget')
                self.identities[identity]=(path,role);self.cache[path]=(role,data)
                return data
            finally: os.close(fd)
        finally: os.close(directory)
    def file_ref(self,ref,role,limit=256*1024):
        keys(ref,'path sha256');relative_path(ref['path']);sha(ref['sha256'])
        data=self.read(ref['path'],role,limit)
        require(digest(data)==ref['sha256'],'file SHA mismatch: '+ref['path'])
        return data

FIELDS=('비용','쉽게','이득','비고')
PAIRS=(('「','」'),('『','』'),('“','”'),('"','"'))

def field_ranges(text,strict=False):
    lines=text.splitlines(keepends=True);out=[];pos=0
    for line in lines:
        value=line.rstrip('\r\n')
        matches=[f for f in FIELDS if value.startswith('- '+f+': ')]
        if matches:
            f=matches[0];start=pos+len('- '+f+': ');out.append((f,start,pos+len(value)))
        elif strict: raise ContextError('four editable physical field lines only')
        pos+=len(line)
    if strict: require(tuple(f for f,_,_ in out)==FIELDS,'field order/count')
    return out

@dataclass(frozen=True)
class Occurrence:
    field:str
    ordinal:int
    opening:tuple[int,int]
    content:tuple[int,int]
    closing:tuple[int,int]
    nested:bool=False
    ambiguous:bool=False

def occurrences(text,manual=False):
    fields=field_ranges(text,strict=manual)
    scope_fields=fields if tuple(f for f,_,_ in fields)==FIELDS else []
    raw=[]
    for op,cl in PAIRS:
        if op=='"' and text.count('"')%2: continue
        for match in re.finditer(re.escape(op)+r'([^'+re.escape(cl)+r']+)'+re.escape(cl),text):
            a,b=match.span(1)
            f=next((f for f,s,e in scope_fields if s<=match.start() and match.end()<=e),'__document__')
            raw.append((match.start(),match.end(),a,b,f))
    raw.sort(key=lambda x:(x[0],-x[1]));counts=Counter();out=[]
    for s,e,a,b,f in raw:
        overlap=[x for x in raw if x[:2]!=(s,e) and max(s,x[0])<min(e,x[1])]
        nested=bool(overlap)
        ambiguous=any(not (s<=x[0] and x[1]<=e or x[0]<=s and e<=x[1]) for x in overlap)
        out.append(Occurrence(f,counts[f],(s,a),(a,b),(b,e),nested,ambiguous));counts[f]+=1
    if manual:
        # Any unmatched/escaped/crossing delimiter in a selected field makes its
        # grammar unsuitable for manual classification; auto parsing stays legacy.
        for f,s,e in fields:
            part=text[s:e]
            require(not re.search(r'\\["“”「」『』]',part),'escaped manual quote delimiter')
            stack=[]
            closers={cl:op for op,cl in PAIRS if op!=cl};openers={op:cl for op,cl in PAIRS if op!=cl}
            straight=False
            for ch in part:
                if ch=='"': straight=not straight
                elif not straight:
                    if ch in openers: stack.append(openers[ch])
                    elif ch in closers:
                        require(stack and stack.pop()==ch,'unbalanced/crossing manual quote')
            require(not stack and not straight,'unbalanced manual quote')
    return tuple(out)

def byte_map(text):
    offsets=[0]
    for ch in text: offsets.append(offsets[-1]+len(ch.encode('utf-8')))
    return offsets

def checked_range(value,data):
    keys(value,'start end sha256');a=integer(value['start']);b=integer(value['end']);sha(value['sha256'])
    require(a<b<=len(data),'byte range')
    # Each prefix must independently decode at a complete boundary.
    utf8(data[:a]);utf8(data[:b])
    require(digest(data[a:b])==value['sha256'],'slice SHA mismatch')
    return a,b

def final_body(data):
    text=utf8(data)
    marker=b'<!-- HUMANIZE-SUMMARY'
    require(data.count(marker)==1,'one exact summary marker required')
    i=data.index(marker)
    require(i>0 and data[i-1:i]==b'\n','summary line/body boundary')
    suffix=data[i+len(marker):]
    require(suffix.startswith((b'\n',b'\r\n')),'summary marker newline')
    require(suffix.count(b'-->')==1,'one summary terminator')
    _,tail=suffix.split(b'-->',1)
    require(all(c in b' \t\r\n\v\f' for c in tail),'nonwhitespace after summary')
    require(not re.search(r'<!--\s*HUMANIZE-SUMMARY',utf8(data[:i])),'embedded summary')
    return data[:i]

def legacy_text(data):
    # Match legacy open(...,newline=None) before summary stripping.
    return utf8(data).replace('\r\n','\n').replace('\r','\n')

def frozen_keys(text,manual_ranges=()):
    import checks
    spans=set(checks.protected_quote_spans(text));spans.update(manual_ranges)
    all_occ=occurrences(text);keys_out=[]
    for a,b in sorted(spans):
        match=next((o for o in all_occ if o.content==(a,b)),None)
        if match:
            keys_out.append((match.field,text[a:b]))
        else:
            # Crossing legacy auto merges cannot become substring substitutes.
            keys_out.append(('__unrepresentable__',text[a:b]))
    return tuple(keys_out)

def capped_spans(text,keys_to_use,automatic_only=False,manual_allow=()):
    allowed=Counter(keys_to_use);manual=Counter(manual_allow);spans=[]
    if automatic_only:
        import checks
        automatic=set(checks.protected_quote_spans(text))
    else:automatic=None
    for o in occurrences(text):
        a,b=o.content;key=(o.field,text[a:b])
        eligible=automatic is None or (a,b) in automatic
        if allowed[key]>0 and (eligible or manual[key]>0) and not any(x<=a and b<=y for x,y in spans):
            spans.append((a,b));allowed[key]-=1
            if not eligible:manual[key]-=1
    return tuple(spans)

def quote_losses(before,after,keys_to_use=None):
    keys_to_use=frozen_keys(before) if keys_to_use is None else keys_to_use
    required=Counter(keys_to_use)
    selected=set(capped_spans(after,keys_to_use))
    available=Counter((o.field,after[o.content[0]:o.content[1]]) for o in occurrences(after) if o.content in selected)
    return [(key,count-available[key]) for key,count in required.items() if available[key]<count]

@dataclass(frozen=True)
class FrozenQuoteContext:
    before_bytes:bytes
    after_bytes:bytes
    genre:str
    route:str
    keys:tuple
    manual_keys:tuple
    registry_sha256:str
    payload_sha256:str
    review_sha256:str
    body_sha256:str
    derived_json:bytes
    original_path:str
    runtime_json:bytes
    def bind(self,before,after,genre):
        require(type(before) is bytes and type(after) is bytes and type(genre) is str
                and before==self.before_bytes and after==self.after_bytes and genre==self.genre,'context argument mismatch')
    def report(self):
        return {'registry_sha256':self.registry_sha256,'payload_sha256':self.payload_sha256,
                'review_sha256':self.review_sha256,'original_sha256':digest(self.before_bytes),
                'final_body_sha256':self.body_sha256,'final_file_sha256':digest(self.after_bytes),
                'route':self.route,'original_path':self.original_path,'runtime_sha256':json.loads(self.runtime_json),
                'protected_quote_count':len(self.keys),'reviewed_quote_count':len(self.manual_keys),'excluded_quote_chars_before':sum(len(content) for _,content in self.keys)}

class ChapterContext:
    """Validated root-selected registry and immutable snapshot, including all records."""
    def __init__(self,manifest_path,registry_path,expected_sha):
        self.snapshot=None
        try:
            self._initialize(manifest_path,registry_path,expected_sha)
        except BaseException:
            if self.snapshot is not None:self.snapshot.close()
            raise
    def _initialize(self,manifest_path,registry_path,expected_sha):
        manifest_path=Path(manifest_path).absolute();require(manifest_path.name=='manifest.json','manifest filename')
        self.snapshot=Snapshot(manifest_path.parent);self.root=self.snapshot.root
        self.manifest=strict_json(self.snapshot.read('manifest.json','manifest',256*1024))
        require(type(self.manifest.get('entries')) is list and len(self.manifest['entries'])<=128,'manifest entries')
        require(self.manifest.get('genre') in ('essay','column','report','blog','abstract'),'manifest genre')
        sha(expected_sha);relative_path(registry_path)
        registry_bytes=self.snapshot.read(registry_path,'registry',256*1024)
        require(digest(registry_bytes)==expected_sha,'registry SHA mismatch');self.registry_sha=expected_sha
        registry=strict_json(registry_bytes);keys(registry,'schema_version status records')
        require(type(registry['schema_version']) is int and registry['schema_version']==1 and registry['status']=='approved','registry version/status')
        records=registry['records'];require(type(records) is list and 1<=len(records)<=128,'registry record count')
        self.contexts={};payload_paths=set();review_paths=set();artifact_paths=set()
        for record in records:
            keys(record,'payload review')
            for ref,seen in ((record['payload'],payload_paths),(record['review'],review_paths)):
                keys(ref,'path sha256');require(ref['path'] not in seen,'duplicate registry ref');seen.add(ref['path'])
            payload_bytes=self.snapshot.file_ref(record['payload'],'payload');review_bytes=self.snapshot.file_ref(record['review'],'review')
            payload=strict_json(payload_bytes);review=strict_json(review_bytes)
            ctx=self._payload(payload,review,record,artifact_paths)
            require(ctx.original_path not in self.contexts,'duplicate original record')
            self.contexts[ctx.original_path]=ctx
        require(len(artifact_paths)<=128,'distinct artifact limit')
    def _payload(self,p,r,record,artifact_paths):
        keys(p,'schema_version original final_body quotations');require(type(p['schema_version']) is int and p['schema_version']==1,'payload version')
        original=p['original'];keys(original,'path sha256 byte_length');path=relative_path(original['path']);sha(original['sha256']);integer(original['byte_length'])
        entries=[e for e in self.manifest['entries'] if e.get('run_dir','')+'/01_input.txt'==path]
        require(len(entries)==1,'original must match one manifest run');entry=entries[0]
        before=self.snapshot.read(path,'original');require(digest(before)==entry['input_sha256']==original['sha256'] and len(before)==original['byte_length'],'manifest/original mismatch')
        run=path.rsplit('/',1)[0];after=self.snapshot.read(run+'/final.md','final');body=final_body(after)
        keys(p['final_body'],'sha256 byte_length');sha(p['final_body']['sha256']);integer(p['final_body']['byte_length'])
        require(digest(body)==p['final_body']['sha256'] and len(body)==p['final_body']['byte_length'],'final body hash/length mismatch')
        rawtext=utf8(before);outtext=utf8(body);ranges=field_ranges(rawtext,True);outfields=field_ranges(outtext,True)
        parsed=occurrences(rawtext,manual=True);mapping=byte_map(rawtext)
        quotations=p['quotations'];require(type(quotations) is list and 1<=len(quotations)<=32,'quotation count')
        manual=[];seen=set();local_artifacts=set()
        for q in quotations:
            keys(q,'occurrence source_anchor source');o=q['occurrence'];keys(o,'field ordinal opening content closing')
            require(o['field'] in FIELDS,'manual field');integer(o['ordinal'])
            key=(o['field'],o['ordinal']);require(key not in seen,'duplicate manual occurrence');seen.add(key)
            matches=[x for x in parsed if (x.field,x.ordinal)==key];require(len(matches)==1,'unknown occurrence ordinal');occ=matches[0]
            require(not occ.nested and not occ.ambiguous,'manual nested/ambiguous')
            for name,span in (('opening',occ.opening),('content',occ.content),('closing',occ.closing)):
                require(checked_range(o[name],before)==(mapping[span[0]],mapping[span[1]]),'not complete original occurrence')
            a,b=occ.content;content=rawtext[a:b]
            require(8<=len(content.strip()) and len(content.encode())<=65536,'manual quote length')
            anchor_a,anchor_b=checked_range(q['source_anchor'],before);anchor=utf8(before[anchor_a:anchor_b]);require(len(anchor.encode())<=8192,'anchor length')
            f,s,e=next(x for x in ranges if x[0]==occ.field)
            require(mapping[s]<=anchor_a<anchor_b<=mapping[occ.opening[0]],'anchor original same-field/prefix')
            require(unique_position(rawtext[s:e],anchor)>=0,'original anchor uniqueness')
            _,s2,e2=next(x for x in outfields if x[0]==f);outfield=outtext[s2:e2]
            anchor_position=unique_position(outfield,anchor)
            require(anchor_position>=0,'final anchor uniqueness')
            candidates=[x for x in occurrences(outtext) if x.field==f and outtext[x.content[0]:x.content[1]]==content]
            require(candidates and any(s2+anchor_position+len(anchor)<=x.opening[0] for x in candidates),'final quote/anchor ownership')
            source=q['source'];keys(source,'url artifact artifact_byte_length excerpt language rendering')
            url=string(source['url'],1,2048);parts=urlsplit(url)
            require(parts.scheme=='https' and parts.netloc and not parts.username and not parts.password and not parts.fragment and not any(ord(c)<=32 or 127<=ord(c)<=159 for c in url),'source HTTPS URL')
            require(type(source['language']) is str and len(source['language'])<=35 and re.fullmatch(r'[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*',source['language']),'source language')
            require(source['rendering'] in ('native_verbatim','reviewed_translation'),'source rendering')
            artifact=self.snapshot.file_ref(source['artifact'],'source',8*1024*1024)
            require(not artifact.startswith(b'%PDF'),'PDF source unsupported')
            integer(source['artifact_byte_length'])
            require(len(artifact)==source['artifact_byte_length'],'artifact byte length')
            aa,bb=checked_range(source['excerpt'],artifact);require(bb-aa<=65536,'source excerpt length')
            if source['rendering']=='native_verbatim':require(utf8(artifact[aa:bb])==content,'native excerpt mismatch')
            local_artifacts.add(source['artifact']['path']);artifact_paths.add(source['artifact']['path'])
            require(len(local_artifacts)<=8,'payload distinct artifact limit');manual.append(occ.content)
        keys(r,'schema_version payload_sha256 decision reviewer_role reviewer_id proposer_id reviewed_original_sha256 reviewed_final_body_sha256 assessments')
        require(type(r['schema_version']) is int and r['schema_version']==1 and r['decision']=='approved' and r['reviewer_role']=='independent_source_reviewer','review status/role')
        for name in ('reviewer_id','proposer_id'):
            string(r[name],1,128);require(r[name].isprintable(),'review ID control')
        require(r['reviewer_id']!=r['proposer_id'],'self-review identity')
        for name,expected in (('payload_sha256',record['payload']['sha256']),('reviewed_original_sha256',digest(before)),('reviewed_final_body_sha256',digest(body))):sha(r[name]);require(r[name]==expected,'review binding')
        assessments=r['assessments'];require(type(assessments) is list and len(assessments)==len(seen),'assessment count');covered=set()
        for item in assessments:
            keys(item,'occurrence_ordinal field source_authenticity direct_quotation translation_or_verbatim_fidelity original_attribution final_attribution reason')
            integer(item['occurrence_ordinal']);k=(item['field'],item['occurrence_ordinal']);require(k in seen and k not in covered,'assessment identity');covered.add(k)
            for name in ('source_authenticity','direct_quotation','translation_or_verbatim_fidelity','original_attribution','final_attribution'):require(item[name]=='verified','assessment decision')
            string(item['reason'],1,8192)
        # Convert raw positions to legacy-normalized gate text only after every
        # raw-byte approval check, using exact field+content identities.
        normalized=legacy_text(before)
        def normalized_position(position):
            return len(rawtext[:position].replace('\r\n','\n').replace('\r','\n'))
        normalized_manual=tuple((normalized_position(a),normalized_position(b)) for a,b in manual)
        combined=frozen_keys(normalized,normalized_manual)
        # Any manual/automatic nested/partial overlap was prohibited above.
        import metrics_v2,prepare_monolith_input
        original_metrics_text=legacy_text(before)
        spans=capped_spans(original_metrics_text,tuple(combined))
        metrics=metrics_v2.compute_all_v2(original_metrics_text,genre=self.manifest['genre'],_eligible_quote_spans=spans)
        metrics['_text']=original_metrics_text;derived=prepare_monolith_input.compute_route_hint(metrics);metrics.update(derived);metrics.pop('_text',None)
        saved=self.snapshot.read(run+'/00_metrics.json','saved_metrics',256*1024);saved_obj=strict_json(saved,allow_floats=True)
        require(saved_obj.get('route_hint')==entry['route']==derived['route_hint'],'derived/original route mismatch')
        metrics['original_metrics_sha256']=digest(saved)
        return FrozenQuoteContext(before,after,self.manifest['genre'],entry['route'],tuple(combined),
            tuple((o.field,rawtext[o.content[0]:o.content[1]]) for o in parsed if o.content in manual),self.registry_sha,
            record['payload']['sha256'],record['review']['sha256'],digest(body),json.dumps(metrics,ensure_ascii=False,allow_nan=False).encode(),path,
            json.dumps(runtime_digests(),sort_keys=True).encode())
    def context_for(self,before_path,after_path,genre):
        before_path=Path(before_path).absolute();after_path=Path(after_path).absolute()
        require(before_path.is_relative_to(self.root) and after_path.is_relative_to(self.root),'gate paths outside chapter')
        path=before_path.relative_to(self.root).as_posix()
        require(after_path.relative_to(self.root).as_posix()==path.rsplit('/',1)[0]+'/final.md','after must be fixed run final')
        require(path in self.contexts,'no approved record for direct gate run')
        ctx=self.contexts[path];require(genre==ctx.genre,'context genre mismatch');return ctx

def evidence_values(context,report,prefix=""):
    """In-memory evidence only. Exposure is an InvocationOutput responsibility."""
    return [(prefix+'derived-metrics.json',context.derived_json),
            (prefix+'classified-gates.json',json.dumps(report,ensure_ascii=False,allow_nan=False).encode()),
            (prefix+'context.json',json.dumps(dict(context.report(),completed=True,
                gate_exit_code=report['gate']['exit_code'],approved_for_publication=False),ensure_ascii=False).encode())]


class InvocationOutput:
    """New invocation only; stage all bytes then atomically replace its empty reserve.

    Owned inode checks constrain cleanup to files/directories created here. Existing
    paths are never adopted, traversed recursively or removed. On an error no owned
    successful output survives; only bounded failure.json is retained when writable.
    """
    def __init__(self,snapshot,path):
        relative_path(path);parts=path.split('/')
        self.parent=os.dup(snapshot.fd);self.name=parts[-1]
        self.reserve_fd=None;self.stage_fd=None;self.stage_name=None;self.stage_identity=None;self.reserve_identity=None
        self.dirs={};self.files=[];self.renamed=False;self.closed=False
        try:
            for part in parts[:-1]:
                child=os.open(part,os.O_RDONLY|os.O_DIRECTORY|os.O_NOFOLLOW,dir_fd=self.parent)
                os.close(self.parent);self.parent=child
            os.mkdir(self.name,mode=0o700,dir_fd=self.parent)
            reserve_stat=os.stat(self.name,dir_fd=self.parent,follow_symlinks=False)
            self.reserve_identity=(reserve_stat.st_dev,reserve_stat.st_ino)
            self.reserve_fd=os.open(self.name,os.O_RDONLY|os.O_DIRECTORY|os.O_NOFOLLOW,dir_fd=self.parent)
            self.reserve_identity=self.identity(self.reserve_fd)
            self.stage_name='.quote-pending-'+secrets.token_hex(12)
            os.mkdir(self.stage_name,mode=0o700,dir_fd=self.parent)
            stage_stat=os.stat(self.stage_name,dir_fd=self.parent,follow_symlinks=False)
            self.stage_identity=(stage_stat.st_dev,stage_stat.st_ino)
            self.stage_fd=os.open(self.stage_name,os.O_RDONLY|os.O_DIRECTORY|os.O_NOFOLLOW,dir_fd=self.parent)
            self.dirs['']=(self.stage_fd,self.identity(self.stage_fd))
        except BaseException as exc:
            if self.stage_fd is None and self.stage_identity is not None:
                if self.matches(self.parent,self.stage_name,self.stage_identity):
                    os.rmdir(self.stage_name,dir_fd=self.parent)
            if self.reserve_fd is not None:self.abort(exc)
            elif self.reserve_identity is not None and self.matches(self.parent,self.name,self.reserve_identity):
                os.rmdir(self.name,dir_fd=self.parent)
            self.close();raise
    @staticmethod
    def identity(fd):
        value=os.fstat(fd);return value.st_dev,value.st_ino
    @staticmethod
    def matches(parent,name,identity):
        try:value=os.stat(name,dir_fd=parent,follow_symlinks=False)
        except FileNotFoundError:return False
        return (value.st_dev,value.st_ino)==identity
    def directory(self,path):
        if path in self.dirs:return self.dirs[path][0]
        parent,name=path.rsplit('/',1) if '/' in path else ('',path)
        parent_fd=self.directory(parent)
        os.mkdir(name,mode=0o700,dir_fd=parent_fd)
        value=os.stat(name,dir_fd=parent_fd,follow_symlinks=False);identity=(value.st_dev,value.st_ino)
        try:fd=os.open(name,os.O_RDONLY|os.O_DIRECTORY|os.O_NOFOLLOW,dir_fd=parent_fd)
        except BaseException:
            if self.matches(parent_fd,name,identity):os.rmdir(name,dir_fd=parent_fd)
            raise
        self.dirs[path]=(fd,self.identity(fd));return fd
    def commit(self,values):
        require(self.stage_fd is not None and not self.renamed,'output transaction state')
        seen=set()
        for path,data in values:
            relative_path(path);require(path not in seen and type(data) is bytes,'duplicate output/type');seen.add(path)
            parent,name=path.rsplit('/',1) if '/' in path else ('',path)
            directory=self.directory(parent)
            fd=os.open(name,os.O_WRONLY|os.O_CREAT|os.O_EXCL|os.O_NOFOLLOW,0o600,dir_fd=directory)
            self.files.append((directory,name,self.identity(fd)))
            with os.fdopen(fd,'wb') as stream:
                stream.write(data);stream.flush();os.fsync(stream.fileno())
        for path,(fd,_) in sorted(self.dirs.items(),key=lambda item:len(item[0]),reverse=True):
            os.fsync(fd)
        require(self.matches(self.parent,self.name,self.reserve_identity),'output reserve replaced')
        require(not os.listdir(self.reserve_fd),'output reserve not empty')
        os.rename(self.stage_name,self.name,src_dir_fd=self.parent,dst_dir_fd=self.parent)
        self.renamed=True
        os.fsync(self.parent)
    def abort(self,error,gate_exit_code=3):
        cleanup=[]
        for directory,name,identity in reversed(self.files):
            try:
                if self.matches(directory,name,identity):os.unlink(name,dir_fd=directory)
                else:cleanup.append('owned file identity changed')
            except OSError:cleanup.append('owned file cleanup failed')
        for path,(fd,identity) in sorted(self.dirs.items(),key=lambda item:len(item[0]),reverse=True):
            if not path:continue
            parent,name=path.rsplit('/',1) if '/' in path else ('',path)
            try:
                if self.matches(self.dirs[parent][0],name,identity):os.rmdir(name,dir_fd=self.dirs[parent][0])
                else:cleanup.append('owned directory identity changed')
            except OSError:cleanup.append('owned directory cleanup failed')
        if self.stage_fd is not None:
            name=self.name if self.renamed else self.stage_name
            identity=self.dirs[''][1]
            try:
                if self.matches(self.parent,name,identity):os.rmdir(name,dir_fd=self.parent)
                else:cleanup.append('staging identity changed')
            except OSError:cleanup.append('staging cleanup failed')
        # The original reserve is empty and still owned before commit; after a
        # rollback create a new failure-only directory at the now absent name.
        failure_fd=self.reserve_fd
        if self.renamed:
            failure_fd=None
            try:
                os.mkdir(self.name,mode=0o700,dir_fd=self.parent)
                failure_fd=os.open(self.name,os.O_RDONLY|os.O_DIRECTORY|os.O_NOFOLLOW,dir_fd=self.parent)
            except OSError:cleanup.append('failure directory unavailable')
        elif failure_fd is not None and not self.matches(self.parent,self.name,self.reserve_identity):
            failure_fd=None;cleanup.append('reserve identity changed')
        if failure_fd is not None:
            payload=json.dumps({'completed':False,'status':'failed','gate_exit_code':gate_exit_code,
                'error_type':type(error).__name__,'reason':str(error)[:512],
                'cleanup_errors':cleanup[:8]},ensure_ascii=False).encode()
            # Bounded diagnostic only; persistent I/O failure may prevent even
            # this diagnostic, but never converts the invocation into success.
            require(len(payload)<=8192,'failure diagnostic bound')
            try:
                fd=os.open('failure.json',os.O_WRONLY|os.O_CREAT|os.O_EXCL|os.O_NOFOLLOW,0o600,dir_fd=failure_fd)
                with os.fdopen(fd,'wb') as stream:
                    stream.write(payload);stream.flush();os.fsync(stream.fileno())
                os.fsync(failure_fd)
            except OSError:pass
            finally:
                if self.renamed:os.close(failure_fd)
    def close(self):
        if self.closed:return
        for fd,_ in self.dirs.values():os.close(fd)
        if self.reserve_fd is not None:os.close(self.reserve_fd)
        os.close(self.parent);self.closed=True


def write_evidence(snapshot,path,context,report):
    output=InvocationOutput(snapshot,path)
    try:
        code=report['gate']['exit_code']
        if code!=0:
            output.abort(ContextError('gate not accepted'),gate_exit_code=code)
            return
        output.commit(evidence_values(context,report))
    except BaseException as exc:
        output.abort(exc);raise
    finally:output.close()


def runtime_digests():
    root=Path(__file__).parent.parent
    references=root/'references'
    if not references.is_dir():
        references=root/'skills/humanize-korean/references'
    scripts=('quote_context.py','checks.py','verify_gates.py','prepare_monolith_input.py')
    result={'scripts/'+name:digest((root/'scripts'/name).read_bytes()) for name in scripts}
    result.update({'references/'+name:digest((references/name).read_bytes())
                   for name in ('metrics.py','metrics_v2.py','baseline.json','baseline_v2.json')})
    return result


def compute_classified_metrics(before_bytes,after_bytes,genre,context,which):
    """Bound context API; never accepts alternate caller-selected text views."""
    context.bind(before_bytes,after_bytes,genre)
    require(which in ('before','after'),'metrics context side')
    import checks,metrics_v2
    data=before_bytes if which=='before' else after_bytes
    text=checks.strip_summary_block(legacy_text(data))
    return metrics_v2.compute_all_v2(text,genre=genre,
                _eligible_quote_spans=capped_spans(text,context.keys,automatic_only=which=='after',manual_allow=context.manual_keys))


def unique_position(text,needle):
    start=text.find(needle)
    return start if start>=0 and text.find(needle,start+1)<0 else -1
