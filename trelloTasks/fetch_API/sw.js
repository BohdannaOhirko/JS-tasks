const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v_1");
  await cache.addAll(resources);
};

const putInCache = async (request, response) => {
  const cache = await caches.open("v_1");
  await cache.put(request, response);
};

const cacheFirst = async ({ request }) => {
  const responseFromCache = await caches.match(request);
  if (responseFromCache) {
    return responseFromCache;
  }

  try {
    const responseFromNetwork = await fetch(request.clone());
    putInCache(request, responseFromNetwork.clone());
    return responseFromNetwork;
  } catch (error) {
    return new Response("Network error happened", {
      status: 408,
      headers: { "Content-Type": "text/plain" },
    });
  }
};
const deleteCache = async (key) => {
  await caches.delete(key);
};
self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache(["./index.html", "./fetch_API.js", "./style.css"])
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    addResourcesToCache(["./index.html", "./fetch_API.js", "./style.css"])
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    cacheFirst({
      request: event.request,
    })
  );
});
