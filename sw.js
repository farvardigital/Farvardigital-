const CACHE_NAME = 'vof-armor-v1';
const assets = [
  '/',
  '/index.html',
  '/armor.html',
  '/manifest.json'
];

// ഇൻസ്റ്റാൾ ചെയ്യുമ്പോൾ ഫയലുകൾ സേവ് ചെയ്യാൻ
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
  console.log('Vof Armor Service Worker Installed');
});

// ആപ്പ് സജീവമായി നിലനിർത്താൻ
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});

// ബാക്ക്ഗ്രൗണ്ടിൽ സിങ്ക് ചെയ്യാൻ (ഇത് ആപ്പ് ഓഫ് ആവാതിരിക്കാൻ സഹായിക്കും)
self.addEventListener('periodicsync', (event) => {
  console.log('Keeping Armor Active in Background');
});
