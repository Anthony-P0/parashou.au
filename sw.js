const CACHE_NAME = 'parashou-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/content/style.css',
  '/content/parashou-resume.pdf',
  '/images/apple-touch-icon.png',
  '/images/favicon-96x96.png',
  '/images/favicon.ico',
  '/images/favicon.svg',
  '/images/site.webmanifest',
  '/images/web-app-manifest-192x192.png',
  '/images/web-app-manifest-512x512.png'
];

// Install: cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    )
  );
});

// Fetch: serve cache fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});
