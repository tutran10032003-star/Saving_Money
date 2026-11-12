```javascript
const CACHE_NAME = "eco-buddy-v2";

const APP_FILES = [
  "/Saving_Money/",
  "/Saving_Money/index.html",
  "/Saving_Money/manifest.json",
  "/Saving_Money/icons/icon-192.png",
  "/Saving_Money/icons/icon-512.png"
];

// Cài đặt và lưu các file cần thiết
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_FILES);
    })
  );

  self.skipWaiting();
});

// Kích hoạt phiên bản mới và xóa cache Eco-Buddy cũ
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter(
            (key) =>
              key.startsWith("eco-buddy-") &&
              key !== CACHE_NAME
          )
          .map((key) => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

// Xử lý yêu cầu tải dữ liệu
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  if (url.origin !== self.location.origin) return;

  // Không cache các yêu cầu ngoài phạm vi ứng dụng
  if (!url.pathname.startsWith("/Saving_Money/")) return;

  event.respondWith(
    caches.match(event.request).then(async (cachedResponse) => {
      try {
        const response = await fetch(event.request);

        if (response.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(event.request, response.clone());
        }

        return response;
      } catch (error) {
        return cachedResponse || caches.match("/Saving_Money/");
      }
    })
  );
});
```
