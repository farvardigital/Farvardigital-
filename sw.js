self.addEventListener('install', (e) => {
  console.log('Vof Armor Installed');
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
