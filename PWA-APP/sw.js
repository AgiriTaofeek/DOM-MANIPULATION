const cacheName = 'news-v1';
const staticAssets = [
  './',
  './index.html',
  './src/style.css',
  './src/js/script.js',
  './src/js/newsAPI.js',
  './src/js/newsArticle.js',
  './manifest.json',
  './images/logo192.png',
];

self.addEventListener('install', (e) => {
  //* The install event is fired only once always
  console.log('install!');

  e.waitUntil(
    caches.open('news-v1').then((cache) => {
      return cache.addAll(staticAssets);
    })
  );
});

self.addEventListener('fetch', (e) => {
  //   console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

// //* After the skipWaiting the activate event is fired
// self.addEventListener('activate', () => {
//   //* Automatically makes the web app start fetching for the static assets cached after the first time it ran
//   self.clients.claim();
// });
