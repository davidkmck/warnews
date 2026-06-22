const CACHE_NAME = 'war-news-v1';
const ASSETS = [
  '/warnews/',
  '/warnews/index.html',
  '/warnews/manifest.json',
  '/warnews/war-news.png'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});
