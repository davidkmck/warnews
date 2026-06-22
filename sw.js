const CACHE_NAME = 'war-news-v1';
const ASSETS = [
  '/warnews/',
  '/warnews/index.html',
  '/warnews/manifest.json',
  '/warnews/war-news.png'
];

// Install Service Worker and cache core files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch assets from cache if offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

