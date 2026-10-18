#!/usr/bin/env python3
"""Prepare current public entries and assemble strictly gated candidates; no LLM calls."""
import argparse
from collections import Counter
from datetime import date
import hashlib
import json
from pathlib import Path
import re
import secrets
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[3]
SKILL = ROOT / '.claude/skills/humanize-korean'
PROSE = re.compile(r'^- (비용|쉽게|이득|비고):.*$', re.M)
SUMMARY = re.compile(r'<!--\s*HUMANIZE-SUMMARY\b.*', re.S)

def sha(text):
    return hashlib.sha256(text.encode()).hexdigest()

def save(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n')

def upstream(script, args, cwd):
    return subprocess.run([sys.executable, str(SKILL/'scripts'/script), *map(str,args)], cwd=cwd, text=True, capture_output=True)

def split(text):
    starts = list(re.finditer(r'^### (\d+)\. .+$', text, re.M))
    if not starts:
        raise ValueError('no numbered entries')
    todo = re.search(r'^## .*TODO.*$', text[starts[-1].start():], re.M)
    end = starts[-1].start()+todo.start() if todo else len(text)
    # Keep the separator before TODO with the unchanged tail.
    sep = re.search(r'\n(?:---\n)?\s*$',text[:end])
    if todo and sep:
        end = sep.start()
    entries = [(m.group(1),text[m.start():starts[i+1].start() if i+1<len(starts) else end]) for i,m in enumerate(starts)]
    return text[:starts[0].start()], entries, text[end:]

def invariants(text):
    return {
        'headings': re.findall(r'^#{1,6} .*$',text,re.M),
        'tags': re.findall(r'<!--.*?-->',text,re.S),
        'fields': re.findall(r'^- ([^:\n]+):',text,re.M),
        'source': re.findall(r'^- (?:출처|근거등급):.*$',text,re.M),
        'urls': sorted(re.findall(r'https?://[^\s<>]+',text)),
        'numbers': sorted(Counter(re.findall(r'\d+(?:[.,]\d+)*',text)).items()),
    }

def prepare(folder, chapter):
    if (folder/'manifest.json').exists():
        raise ValueError('manifest exists; refusing to replace evidence')
    source, = (ROOT/'book-kr').glob(f'{chapter}-*.md')
    text = source.read_text()
    intro, entries, tail = split(text)
    folder.mkdir(parents=True,exist_ok=True)
    (folder/'source.md').write_text(text)
    (folder/'intro.md').write_text(intro)
    (folder/'tail.md').write_text(tail)
    manifest={'source_commit':'225ec78','protected_labels':['비용','쉽게','이득','근거등급','출처','비고'],'route_counts':{},'version':2,'chapter':chapter,'source':str(source.relative_to(ROOT)), 'source_sha256':sha(text),'genre':'essay','entries':[]}
    for ordinal,(number,body) in enumerate(entries,1):
        run = folder/'_workspace'/f'{args.date}-{ordinal:03d}-{secrets.token_hex(2)}'
        run.mkdir(parents=True)
        (run/'entry_snapshot.md').write_text(body)
        eligible='\n'.join(m.group(0) for m in PROSE.finditer(body))+'\n'
        if len(PROSE.findall(eligible)) != 4:
            raise ValueError(f'expected four eligible fields: {number}')
        (run/'01_input.txt').write_text(eligible)
        result=upstream('prepare_monolith_input.py',['--run-dir',run,'--genre','essay'],folder)
        (run/'prepare.log').write_text(result.stdout+result.stderr)
        # Upstream sanitation can trim source whitespace; keep publication evidence exact.
        (run/'01_input.txt').write_text(eligible)
        if result.returncode or (run/'00_metrics.error').exists():
            raise ValueError(f'metrics failed: {run}')
        route=json.loads((run/'00_metrics.json').read_text())['route_hint']
        manifest['route_counts'][route]=manifest['route_counts'].get(route,0)+1
        manifest['entries'].append({'number':int(number),'heading':body.splitlines()[0], 'run_dir':str(run.relative_to(folder)), 'input_sha256':sha(eligible),'entry_sha256':sha(body),'route':route})
    save(folder/'manifest.json',manifest)
    print(folder/'manifest.json')

def assemble(folder,publish):
    manifest=json.loads((folder/'manifest.json').read_text())
    source=ROOT/manifest['source']
    snapshot=(folder/'source.md').read_text()
    if sha(snapshot)!=manifest['source_sha256'] or sha(source.read_text())!=manifest['source_sha256']:
        raise ValueError('snapshot or current public source changed')
    intro, originals, tail=split(snapshot)
    if intro!=(folder/'intro.md').read_text() or tail!=(folder/'tail.md').read_text():
        raise ValueError('intro/tail evidence changed')
    bodies=[]
    for entry, (number, original) in zip(manifest['entries'],originals,strict=True):
        run=folder/entry['run_dir']
        before=(run/'01_input.txt').read_text()
        final=(run/'final.md').read_text()
        expected='\n'.join(m.group(0) for m in PROSE.finditer(original))+'\n'
        if before!=expected or (run/'entry_snapshot.md').read_text()!=original or sha(original)!=entry['entry_sha256'] or sha(before)!=entry['input_sha256'] or int(number)!=entry['number']:
            raise ValueError(f'input evidence mismatch: {run}')
        if len(re.findall(r'<!--\s*HUMANIZE-SUMMARY\b',final))!=1:
            raise ValueError(f'exactly one summary required: {run}')
        body=SUMMARY.sub('',final).rstrip()
        if invariants(before)!=invariants(body):
            changed=[k for k,v in invariants(before).items() if v!=invariants(body)[k]]
            raise ValueError(f'conservation failure {changed}: {run}')
        result=upstream('verify_gates.py',['--before',run/'01_input.txt','--after',run/'final.md','--genre','essay','--json'],folder)
        (run/'publication-gates.txt').write_text(result.stdout+result.stderr)
        json_start=result.stdout.find('{')
        if json_start>=0:
            save(run/'publication-gates.json',json.loads(result.stdout[json_start:]))
        if result.returncode:
            raise ValueError(f'upstream gate not accepted (exit {result.returncode}): {run}')
        metrics=json.loads((run/'00_metrics.json').read_text())
        route=metrics.get('route_hint')
        if route!=entry['route']:
            raise ValueError(f'route evidence mismatch: {run}')
        if route in ('standard','heavy') and not (run/'02_diagnosis.md').is_file():
            raise ValueError(f'diagnosis evidence required: {run}')
        if (run/'09_finalize.json').exists():
            finalize=json.loads((run/'09_finalize.json').read_text())
            if 'hold_and_report' in json.dumps(finalize):
                raise ValueError(f'finalizer hold: {run}')
            if not any(value in json.dumps(finalize) for value in ('accept','corrected')):
                raise ValueError(f'accepted finalize status required: {run}')
        heavy=route=='heavy'
        if heavy and not all((run/name).is_file() for name in ('09_finalize.json','chunk_manifest.json','03_reassembled.md')):
            raise ValueError(f'heavy route requires finalize evidence: {run}')
        replacements=iter(body.splitlines())
        if len(body.splitlines())!=4 or len(PROSE.findall(body))!=4:
            raise ValueError(f'expected four field lines only: {run}')
        restored=PROSE.sub(lambda match:next(replacements),original)
        bodies.append(restored)
    candidate=intro+''.join(bodies)+tail
    if not candidate.endswith('\n'):
        candidate+='\n'
    (folder/'candidate.md').write_text(candidate)
    save(folder/'assembly.json',{'source_sha256':sha(snapshot),'candidate_sha256':sha(candidate),'entries':len(bodies),'upstream_gates':'accepted','published':publish})
    if publish:
        source.write_text(candidate)
    print(folder/'candidate.md')

def integrate(folder):
    """Apply explicitly reviewed changes after strict assembly, without publication."""
    def evidence(spec):
        path=(folder/spec['path']).resolve()
        if not path.is_relative_to(folder.resolve()) or not path.is_file():
            raise ValueError('integration evidence must be a file inside this chapter')
        content=path.read_text()
        if sha(content)!=spec['sha256']:
            raise ValueError(f'integration evidence hash mismatch: {path}')
        return content

    manifest=json.loads((folder/'manifest.json').read_text())
    plan=json.loads((folder/'integration-plan.json').read_text())
    assembly=json.loads((folder/'assembly.json').read_text())
    baseline=(folder/'source.md').read_text()
    candidate=(folder/'candidate.md').read_text()
    if plan.get('status')!='approved':
        raise ValueError('explicit approved integration plan required')
    evidence(plan['review'])
    if not (sha(baseline)==manifest['source_sha256']==assembly['source_sha256']==plan['source_sha256']==sha((ROOT/manifest['source']).read_text())):
        raise ValueError('integration baseline/current public source mismatch')
    if assembly.get('upstream_gates')!='accepted' or sha(candidate)!=assembly['candidate_sha256'] or sha(candidate)!=plan['candidate_sha256']:
        raise ValueError('accepted strict candidate hash mismatch')
    intro, entries, tail=split(candidate)
    baseline_intro, baseline_entries, baseline_tail=split(baseline)
    if intro!=baseline_intro or tail!=baseline_tail or len(entries)!=len(manifest['entries']) or assembly['entries']!=len(entries):
        raise ValueError('strict candidate structure mismatch')
    originals=dict(baseline_entries)
    bodies=dict(entries)
    applied=[]
    for operation in plan['operations']:
        if operation.get('status')!='approved':
            raise ValueError('each integration operation requires explicit approval')
        evidence(operation['review'])
        number=str(operation['entry'])
        if number not in bodies or operation['base'] not in ('baseline','candidate'):
            raise ValueError('invalid integration entry or base')
        before=originals[number] if operation['base']=='baseline' else bodies[number]
        if sha(before)!=operation['before_sha256']:
            raise ValueError('integration before hash mismatch')
        if 'replacement' in operation:
            after=evidence(operation['replacement'])
            metadata=json.loads(evidence(operation['changes']))
            if not metadata:
                raise ValueError('entry replacement requires change evidence')
        else:
            field=operation['field']
            if field not in ('title','비용','쉽게','이득','출처','비고'):
                raise ValueError('field is outside integration whitelist')
            pattern=rf'^### {number}\. (.*)$' if field=='title' else rf'^- {re.escape(field)}: (.*)$'
            matches=list(re.finditer(pattern,before,re.M))
            if len(matches)!=1 or matches[0].group(1)!=operation['before'] or '\n' in operation['after'] or '\r' in operation['after']:
                raise ValueError('integration field before mismatch or multiline replacement')
            match=matches[0]
            after=before[:match.start(1)]+operation['after']+before[match.end(1):]
        def structure(text, fold_continuations=False):
            layout=[]
            editable_field=False
            for line in text.splitlines():
                # Only reviewed full-entry replacements may fold legacy wrapped
                # prose. Blank/protected lines end the field's continuation scope.
                # Never classify Markdown structure, comments or labels as prose.
                if (fold_continuations and editable_field
                        and re.match(r'^[ \t]+\S',line)
                        and not re.match(r'\s*(?:[-*+#>|`~]|\d+[.)]\s|[^:：]{1,30}[:：])',line)
                        and '<!--' not in line and '-->' not in line):
                    continue
                editable_field=bool(re.match(r'^- (?:비용|쉽게|이득|출처|비고): ',line))
                if line.strip():
                    layout.append(re.sub(r'^(### \d+\. |^- (?:비용|쉽게|이득|출처|비고): ).*$',r'\1<editable>',line))
            return layout
        if structure(before, fold_continuations='replacement' in operation)!=structure(after):
            raise ValueError('integration changed protected entry layout')
        old=invariants(before); new=invariants(after)
        expected_fields=['비용','쉽게','이득','근거등급','출처','비고']
        if old['tags']!=new['tags'] or old['fields']!=new['fields'] or new['fields']!=expected_fields:
            raise ValueError('integration changed protected tags or field structure')
        if re.findall(r'^- 근거등급:.*$',before,re.M)!=re.findall(r'^- 근거등급:.*$',after,re.M):
            raise ValueError('integration changed evidence grade')
        if len(new['headings'])!=1 or not re.fullmatch(rf'### {number}\. .+',new['headings'][0]):
            raise ValueError('integration changed entry numbering/structure')
        if re.search(r'^#{1,6} ',after,re.M).start()!=0 or 'HUMANIZE-SUMMARY' in after:
            raise ValueError('invalid integrated entry body')
        # Preserve the original separator exactly between entries and before TODO.
        spacing=re.search(r'\s*\Z',before).group()
        bodies[number]=after.rstrip()+spacing
        applied.append({'entry':int(number),'base':operation['base'],'before_sha256':sha(before),'after_sha256':sha(bodies[number]),'review':operation['review']})
    revised_body=''.join(bodies[number] for number,_ in entries)+tail
    def dois(text):
        """Extract full DOI URLs, preserving balanced internal parentheses.

        Closing Markdown/prose parentheses and Unicode punctuation bound a URL;
        a following URL also bounds it even when the source omits whitespace.
        Malformed unbalanced DOI tokens fail closed instead of approving a prefix.
        """
        text=re.sub(r'<!--.*?-->', '', text, flags=re.S)
        found=set()
        for match in re.finditer(r'https://doi\.org/',text,re.I):
            position=match.end(); depth=0; token=[]
            while position<len(text):
                char=text[position]
                if char.isspace() or char in '<>\"\'`[]，；：。、）」『』《》“”‘’' or re.match(r'https?://',text[position:],re.I):
                    break
                if char=='(':
                    depth+=1
                elif char==')':
                    if depth==0:
                        break
                    depth-=1
                token.append(char);position+=1
            doi=''.join(token).rstrip(".,;:」·》'\"；：。、”’")
            if depth or not re.fullmatch(r'10\.\d{4,9}/[^\s<>]+',doi):
                raise ValueError('malformed or unbalanced DOI citation; refusing truncated token')
            found.add(doi.lower())
        return found
    old_dois=dois(candidate)
    new_dois=dois(intro+revised_body)
    needed={('add',doi) for doi in new_dois-old_dois}|{('drop',doi) for doi in old_dois-new_dois}
    annotations=plan.get('doi_annotations',[])
    declared=set()
    annotation_lines=[]
    if annotations and plan.get('intro_sha256')!=sha(intro):
        raise ValueError('DOI annotation intro hash mismatch')
    for annotation in annotations:
        if annotation.get('status')!='approved':
            raise ValueError('DOI annotation requires explicit approval')
        evidence(annotation['review'])
        action=annotation['action']; doi=annotation['doi']; reason=annotation['reason']
        if action not in ('add','drop') or not re.fullmatch(r'10\.\d{4,9}/[^\s<>]+',doi) or doi!=doi.rstrip(".,;:」·》'\"；：。、”’"):
            raise ValueError('invalid exact DOI or annotation action')
        if not reason.strip() or any(token in reason for token in ('\n','\r','<!--','-->')):
            raise ValueError('DOI annotation requires a single-line reason')
        key=(action,doi.lower())
        if key in declared or key not in needed:
            raise ValueError('duplicate or unnecessary DOI annotation')
        if re.search(r'<!--\s*kr-doi-(?:add|drop):[^\n]*'+re.escape(doi)+r'[^\n]*-->',intro,re.I):
            raise ValueError('DOI annotation conflicts with existing protected marker')
        declared.add(key)
        annotation_lines.append(f'<!-- kr-doi-{action}: <{doi}> — {reason} -->\n')
    if declared!=needed:
        raise ValueError('missing DOI annotations for actual citation additions/removals')
    # Append only approved markers; keep every original intro byte intact.
    if annotation_lines:
        intro+=('' if intro.endswith('\n') else '\n')+''.join(annotation_lines)+'\n'
    reviewed=intro+revised_body
    (folder/'reviewed-candidate.md').write_text(reviewed)
    save(folder/'integration.json',{'source_sha256':sha(baseline),'strict_candidate_sha256':sha(candidate),'reviewed_candidate_sha256':sha(reviewed),'plan_sha256':sha((folder/'integration-plan.json').read_text()),'operations':applied,'doi_annotations':annotations,'published':False,'kr_fit':'new hash review required; integration approval is not KR-FIT'})
    print(folder/'reviewed-candidate.md')

parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('command',choices=['prepare','assemble','integrate'])
parser.add_argument('chapter',type=lambda value:f'{int(value):02d}')
parser.add_argument('--date',default=date.today().isoformat())
parser.add_argument('--publish',action='store_true',help='explicitly replace current public chapter after all gates')
args=parser.parse_args()
try:
    folder=ROOT/'kr-harness/publication'/args.date/f'ch{args.chapter}'
    if args.command=='prepare':
        if args.publish:
            raise ValueError('--publish is only valid with assemble')
        prepare(folder,args.chapter)
    elif args.command=='integrate':
        if args.publish:
            raise ValueError('integrate never publishes')
        integrate(folder)
    else:
        assemble(folder,args.publish)
except (ValueError, OSError, KeyError) as exc:
    parser.exit(1,f'error: {exc}\n')
