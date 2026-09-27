const CACHE='faxtrix-shell-v3';
const CORE=['./','./app.html','./app-v2.html','./manifest.json','./version.json','./assets/css/app-v3.css','./assets/js/app-v2.js','./assets/js/app-enhancements.js','./assets/js/update-check.js','./assets/img/faxtrix-mark.webp'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;if(new URL(e.request.url).origin!==location.origin)return;e.respondWith(fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./app.html'))))});
