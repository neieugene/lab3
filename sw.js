var cacheName = 'lab3';
var filesToCache = [
  '/lab3/',
  '/lab3/index.html',
  '/lab3/css/style.css',
  '/lab3/js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});






curl "https://api.openweathermap.org/data/2.5/weather?q=Budapest&appid=a457e758ed0d9ab3fcc40xxxe&units=metric"
