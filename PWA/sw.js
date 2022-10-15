//* Always save this service worker js file in the root folder
self.addEventListener('install', (e) => {
  //* The install event is fired only once always
  console.log('install!');
  e.waitUntil(
    caches.open('index').then((cache) => {
      return cache.addAll(['./', './src/style.css', './images/logo192.png']);
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
