---
layout: null
---
var urlsToCache = [];

var CACHE_NAME = 'axerunners-cache-v13';

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
});

var urlsToCache = [];

// Cache assets
var filesToCache = [
  '.',
  '/assets/css/font-awesome.min.css',
  '/assets/css/ie9.css',
  '/assets/css/main.css',
  '/assets/css/noscript.css',
  '/assets/fonts/fontawesome-webfont.eot',
  '/assets/fonts/fontawesome-webfont.svg',
  '/assets/fonts/fontawesome-webfont.ttf',
  '/assets/fonts/fontawesome-webfont.woff',
  '/assets/fonts/fontawesome-webfont.woff2',
  '/assets/fonts/FontAwesome.otf',
  '/assets/images/axecore-ascii-screenshot.png',
  '/assets/images/axerunners-wht.png',
  '/assets/images/barterdex-btc-axe.png',
  '/assets/images/bg.jpg',
  '/assets/images/cntrls.jpg',
  '/assets/images/dgma.jpg',
  '/assets/images/minerdedication.jpg',
  '/assets/images/overlay.png',
  '/assets/images/splsh192.png',
  '/assets/images/splsh512.png',
  '/assets/images/tmbr.jpg',
  '/assets/images/whtslft.jpg',
  '/assets/js/jquery.min.js',
  '/assets/js/main.js',
  '/assets/js/skel.min.js',
  '/assets/js/util.js'
];

var staticCacheName = 'axerunners-cache-v13';

self.addEventListener('install', function(event) {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

// Cache pages
{% for page in site.html_pages %}
  urlsToCache.push("{{ page.url }}")
{% endfor %}
