(function(){'use strict';
  var root=document.documentElement;
  var theme=localStorage.getItem('faxtrix-theme')||'light';root.dataset.theme=theme;
  var themeBtn=document.getElementById('themeToggle'),menu=document.getElementById('menu'),nav=document.getElementById('navlinks');
  function updateTheme(){root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('faxtrix-theme',root.dataset.theme);if(themeBtn)themeBtn.textContent=root.dataset.theme==='dark'?'☀':'☾'}
  if(themeBtn){themeBtn.textContent=theme==='dark'?'☀':'☾';themeBtn.onclick=updateTheme}
  if(menu){menu.onclick=function(){nav.classList.toggle('open')}}
  document.querySelectorAll('[data-scroll]').forEach(function(a){a.onclick=function(e){var t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}nav.classList.remove('open')}});
  var tabs=[].slice.call(document.querySelectorAll('.tabs button')),panels=[].slice.call(document.querySelectorAll('.demo-panel'));
  tabs.forEach(function(b){b.onclick=function(){tabs.forEach(function(x){x.classList.remove('active')});panels.forEach(function(x){x.classList.remove('active')});b.classList.add('active');var p=document.getElementById('demo-'+b.dataset.tab);if(p)p.classList.add('active')}});
  var counters=document.querySelectorAll('[data-count]');var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target,target=Number(el.dataset.count||0),n=0,step=Math.max(1,Math.ceil(target/35));var timer=setInterval(function(){n=Math.min(target,n+step);el.textContent=n+(el.dataset.suffix||'');if(n>=target)clearInterval(timer)},25);io.unobserve(el)})},{threshold:.6});counters.forEach(function(x){io.observe(x)});
})();
