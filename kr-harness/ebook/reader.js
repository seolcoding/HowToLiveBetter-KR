/* 한국어판 웹 리더·오프라인 HTML 공용 스크립트. 외부 요청은 같은 사이트의 search-index.json 하나뿐이다
   (오프라인 단일 파일은 window.__KR_INDEX__에 색인을 넣어 두므로 아무 요청도 하지 않는다).
   스크립트가 없어도 차례와 본문은 그대로 읽힌다. */
(function () {
  'use strict';
  var root = document.documentElement;
  var FS_KEY = 'kr-reader-fs';

  // 글자 크기: 0~3단계. localStorage를 못 쓰는 환경(사생활 보호 모드 등)에서도 동작은 한다.
  function getFs() { try { return Math.max(0, Math.min(3, Number(localStorage.getItem(FS_KEY)) || 0)); } catch (e) { return 0; } }
  function setFs(v) {
    v = Math.max(0, Math.min(3, v));
    root.classList.remove('fs-1', 'fs-2', 'fs-3');
    if (v) root.classList.add('fs-' + v);
    try { localStorage.setItem(FS_KEY, String(v)); } catch (e) { /* 저장 못 해도 이번 화면에는 적용 */ }
    var out = document.getElementById('fs-now');
    if (out) out.textContent = ['기본', '크게', '더 크게', '가장 크게'][v];
  }
  setFs(getFs());
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest && ev.target.closest('[data-fs]');
    if (!b) return;
    setFs(getFs() + Number(b.getAttribute('data-fs')));
  });

  // 항목 제목 검색
  var input = document.getElementById('q');
  var list = document.getElementById('results');
  var status = document.getElementById('search-status');
  if (!input || !list) return;
  var index = window.__KR_INDEX__ || null;
  var norm = function (s) { return String(s).toLowerCase().replace(/\s+/g, ''); };
  var pending = null;

  function load() {
    if (index) return Promise.resolve(index);
    if (pending) return pending;
    var url = input.getAttribute('data-index') || 'search-index.json';
    pending = fetch(url).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    }).then(function (j) { index = j; return j; }).catch(function () {
      if (status) status.textContent = '검색 색인을 불러오지 못했습니다. 아래 차례에서 찾아 주세요.';
      return [];
    });
    return pending;
  }

  function render(q) {
    var terms = q.split(/\s+/).map(norm).filter(Boolean);
    list.textContent = '';
    if (!terms.length) { if (status) status.textContent = ''; return; }
    load().then(function (idx) {
      if (norm(input.value) !== norm(q)) return; // 그 사이 입력이 바뀜
      var hits = idx.filter(function (e) {
        var hay = norm(e.c + '절 ' + e.ct + ' ' + e.t);
        return terms.every(function (t) { return hay.indexOf(t) !== -1; });
      });
      var shown = hits.slice(0, 60);
      shown.forEach(function (e) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = e.h;
        a.textContent = e.t;
        var where = document.createElement('span');
        where.className = 'where';
        where.textContent = '제' + e.c + '절 ' + e.ct;
        li.appendChild(a);
        li.appendChild(where);
        list.appendChild(li);
      });
      if (status) {
        status.textContent = hits.length
          ? '항목 ' + hits.length + '개를 찾았습니다' + (hits.length > shown.length ? '. 앞의 ' + shown.length + '개만 보여 드립니다.' : '.')
          : '맞는 항목이 없습니다. 낱말을 줄이거나 바꿔 보세요.';
      }
    });
  }

  var timer = null;
  input.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(function () { render(input.value); }, 120);
  });
  var form = input.form;
  if (form) form.addEventListener('submit', function (ev) { ev.preventDefault(); render(input.value); });

  // 다른 페이지에서 index.html?q=… 로 넘어온 경우
  var m = /[?&]q=([^&#]*)/.exec(location.search);
  if (m) {
    try { input.value = decodeURIComponent(m[1].replace(/\+/g, ' ')); } catch (e) { input.value = m[1]; }
    render(input.value);
  }
})();
