var CACHE_NAME = 'my-site-cache-v2';
var urlsToCache = [
  "manifest.html",
  "assets/css/main.css",
  'manifest.webmanifest',
  'current.js',
  'icon/64.png',
  "icon/128.png",
  "icon/194.png",
  "icon/256.png",
  "icon/512.png",
  "icon/1024.png"
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
/*
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });*/