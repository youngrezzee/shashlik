const CACHE_NAME = "shashlik-planner-v1";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./favicon.ico",
  "./manifest.webmanifest",
  "./assets/app-icon-192.png",
  "./assets/app-icon-512.png",
  "./assets/favicon-32.png",
  "./assets/shashlik-hero.png",
  "./assets/shashlik-hero-prep.png",
  "./assets/shashlik-hero-grill.png",
  "./assets/shashlik-hero-served.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached || fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
    )
  );
});
