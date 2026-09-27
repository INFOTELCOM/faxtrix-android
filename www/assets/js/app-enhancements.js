(function(){'use strict';
  var $=function(s){return document.querySelector(s)};
  var search=$('#globalSearch');
  function openSearch(q){
    q=String(q||'').trim().toLowerCase();if(!q)return;
    var hits=[];document.querySelectorAll('.data-row,.service-card,.intel-card,.security-item').forEach(function(el){var text=(el.textContent||'').toLowerCase();if(text.indexOf(q)>=0&&hits.length<8)hits.push(el.textContent.trim().replace(/\s+/g,' '))});
    var box=$('#modal'),title=$('#modalTitle'),body=$('#modalBody');if(!box||!title||!body)return;
    title.textContent='Recherche globale';body.innerHTML=hits.length?'<div class="rows">'+hits.map(function(x){return '<div class="data-row"><div class="row-main"><b>'+x.replace(/[&<>]/g,'')+'</b><span>Résultat dans l’espace courant</span></div></div>'}).join('')+'</div>':'<div class="empty">Aucun résultat pour « '+q.replace(/[&<>]/g,'')+' ».</div>';box.classList.add('open');
  }
  if(search){search.addEventListener('keydown',function(e){if(e.key==='Enter')openSearch(search.value)});document.addEventListener('keydown',function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();search.focus()}})}
  var notif=$('#notifications');if(notif)notif.onclick=function(){var box=$('#modal'),title=$('#modalTitle'),body=$('#modalBody');if(!box)return;title.textContent='Notifications';body.innerHTML='<div class="rows"><div class="data-row"><div class="row-main"><b>Synchronisation FAXTRIX</b><span>Les indicateurs opérationnels sont prêts.</span></div></div><div class="data-row"><div class="row-main"><b>Business Brain</b><span>Analyse disponible dans Intelligence.</span></div></div><div class="data-row"><div class="row-main"><b>Mises à jour</b><span>La vérification de version est active.</span></div></div></div>';box.classList.add('open')};
})();
