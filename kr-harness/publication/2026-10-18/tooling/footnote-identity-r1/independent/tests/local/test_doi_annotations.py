"""Exercise approved DOI integration through the real publication CLI in isolation."""
import hashlib
import json
from pathlib import Path
import subprocess
import tempfile
import unittest

ROOT=Path('/workspace/.cache/howtolivebetter/publication/footnote-identity-code-review-r1/candidate')
SCRIPT=ROOT/'kr-harness/publication/scripts/humanize_publication.py'
def sha(text):
    return hashlib.sha256(text.encode()).hexdigest()

class DoiIntegration(unittest.TestCase):
    def test_actual_differences_and_review_bound_annotations(self):
        with tempfile.TemporaryDirectory(prefix='doi-integration-') as temporary:
            root=Path(temporary)
            (root/'book-kr').mkdir()
            (root/'.claude/skills').mkdir(parents=True)
            (root/'.claude/skills/humanize-korean').symlink_to(ROOT/'.claude/skills/humanize-korean')
            script=root/'runner.py'
            script.write_text(SCRIPT.read_text().replace('ROOT = Path(__file__).resolve().parents[3]',f'ROOT = Path({str(root)!r})'))
            source='# 제목\n\n원래 도입입니다.\n\n### 1. 확인하세요\n<!-- 成本标签: 钱=少 -->\n- 비용: 1분 듭니다.\n- 쉽게: 문을 닫으세요.\n- 이득: 시간을 아낍니다.\n- 근거등급: C\n- 출처: https://doi.org/10.1000/old\n- 비고: 필요하면 확인하세요.\n\n## TODO 확인 필요\n\n확인하지 못했습니다.\n'
            public=root/'book-kr/01-fixture.md';public.write_text(source)
            def call(command):
                return subprocess.run(['python3',str(script),command,'1','--date','2026-10-18'],capture_output=True,text=True)
            self.assertEqual(call('prepare').returncode,0)
            folder=root/'kr-harness/publication/2026-10-18/ch01'
            manifest=json.loads((folder/'manifest.json').read_text());entry=manifest['entries'][0];run=folder/entry['run_dir']
            pure=(run/'01_input.txt').read_text()+'\n<!-- HUMANIZE-SUMMARY -->\nfixture\n'
            (run/'final.md').write_text(pure)
            if entry['route']!='light':(run/'02_diagnosis.md').write_text('문제 없음')
            result=call('assemble');self.assertEqual(result.returncode,0,result.stderr)
            before=(run/'entry_snapshot.md').read_text();intro=(folder/'intro.md').read_text()
            (folder/'review.md').write_text('Independent primary-source review approves old DOI removal and new DOI addition.')
            review={'path':'review.md','sha256':sha((folder/'review.md').read_text())}
            annotation=lambda action,doi:{'status':'approved','review':review.copy(),'action':action,'doi':doi,'reason':'직접 확인한 연구로 교체'}
            plan={'status':'approved','review':review,'source_sha256':sha(source),'candidate_sha256':sha((folder/'candidate.md').read_text()),'intro_sha256':sha(intro),'operations':[{'status':'approved','review':review,'entry':1,'base':'candidate','before_sha256':sha(before),'field':'출처','before':'https://doi.org/10.1000/old','after':'https://doi.org/10.1000/new'}],'doi_annotations':[annotation('add','10.1000/new'),annotation('drop','10.1000/old')]}
            def check(value, accepted=False):
                (folder/'integration-plan.json').write_text(json.dumps(value))
                result=call('integrate')
                self.assertEqual(result.returncode,0 if accepted else 1,result.stdout+result.stderr)
            clone=lambda:json.loads(json.dumps(plan))
            check(plan,True)
            reviewed=(folder/'reviewed-candidate.md').read_text()
            self.assertTrue(reviewed.startswith(intro))
            self.assertLess(reviewed.index('kr-doi-add'),reviewed.index('### 1.'))
            self.assertIn('<!-- kr-doi-drop: <10.1000/old> — 직접 확인한 연구로 교체 -->',reviewed)
            self.assertEqual(public.read_text(),source)
            self.assertEqual((run/'final.md').read_text(),pure)
            self.assertEqual((folder/'candidate.md').read_text(),source)
            lancet='10.1016/S0140-6736(15)00340-2'
            general='10.1093/ije/dyad019'
            positive=[
                ('full Lancet DOI',f'https://doi.org/{lancet}',[lancet]),
                ('Markdown and enclosing prose',f'([논문](https://doi.org/{lancet})).',[lancet]),
                ('angle autolink and fullwidth punctuation',f'<https://doi.org/{lancet}>；',[lancet]),
                ('adjacent DOI and other URL',f'https://doi.org/{lancet}；https://doi.org/{general}。https://example.org/other',[lancet,general]),
                ('no whitespace before next URL',f'https://doi.org/{lancet};https://doi.org/{general}',[lancet,general]),
                ('general DOI and sentence punctuation',f'(https://doi.org/{general}).',[general]),
                ('nested balanced DOI parentheses','https://doi.org/10.1000/a(b(c))d).',['10.1000/a(b(c))d']),
            ]
            for label,text,expected in positive:
                with self.subTest(url_case=label):
                    p=clone();p['operations'][0]['after']=text
                    p['doi_annotations']=[annotation('add',doi) for doi in expected]+[annotation('drop','10.1000/old')]
                    check(p,True)
                    result=(folder/'reviewed-candidate.md').read_text()
                    for doi in expected:self.assertIn(f'kr-doi-add: <{doi}>',result)
                    self.assertEqual(public.read_text(),source)
                    self.assertEqual((run/'final.md').read_text(),pure)
                    self.assertEqual((run/'01_input.txt').read_text(),pure.split('\n<!-- HUMANIZE-SUMMARY -->')[0])
                    self.assertEqual((folder/'candidate.md').read_text(),source)
            p=clone();p['operations'][0]['after']=f'https://doi.org/{lancet}'
            p['doi_annotations'][0]['doi']='10.1016/S0140-6736(15'
            with self.subTest(url_case='truncated Lancet marker rejected'):check(p)
            p=clone();p['operations'][0]['after']='https://doi.org/10.1000/a(unclosed'
            p['doi_annotations'][0]['doi']='10.1000/a(unclosed'
            with self.subTest(url_case='malformed unbalanced source and marker rejected'):check(p)
            cases=[]
            p=clone();p.pop('doi_annotations');cases.append(('missing markers',p))
            p=clone();p['doi_annotations'][0]['status']='pending';cases.append(('unapproved',p))
            p=clone();p['intro_sha256']='0'*64;cases.append(('stale intro',p))
            p=clone();p['doi_annotations'][0]['review']['sha256']='0'*64;cases.append(('stale independent review',p))
            p=clone();p['doi_annotations'].append(annotation('add','10.1000/unnecessary'));cases.append(('unnecessary marker',p))
            p=clone();p['doi_annotations'][0]['doi']='10.1000/wrong';cases.append(('wrong DOI',p))
            p=clone();p['doi_annotations'][0]['reason']='';cases.append(('missing reason',p))
            for label,value in cases:
                with self.subTest(label=label):check(value)

if __name__=='__main__':unittest.main()
