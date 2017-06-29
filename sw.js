importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/0.nuxt.bundle.095c56ee8ee6363d5147.js",
    "revision": "816a5a0d83382ee58104e40341c8e251"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.e401de545f52ea92b0d6.js",
    "revision": "456a9c1a0458a4df8edd7325736fe633"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.fd55cfd4933933ecd58b.js",
    "revision": "4ad0c46c0b0444d346642f103e3ff962"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.74e503e6b2c627ffa822.js",
    "revision": "c4af374c68f35e3b641567c062253dce"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.fcd598e6ea281edadecc.js",
    "revision": "a070e427b63dfa2e5fc40644bc3e8fe2"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.5db8d0644ac59290bc34.js",
    "revision": "04cdc1b9fc31237941bcb622c6ae098a"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.3f79f0b4a7b448610751.js",
    "revision": "8dcc73c69c6b43a74c944a06a7eec9b5"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "e9c1774ea816faa676d2ed23412fabc7"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.b90f3f038b6c9976c408.js",
    "revision": "1b9cfdc4968c25848d30ad6f8f67438e"
  },
  {
    "url": "/_nuxt/manifest.ec0cab88.json",
    "revision": "8f9eb6d2f7446e0dc30edb3f792108aa"
  },
  {
    "url": "/_nuxt/nuxt.bundle.f75250e5fdb0495dbd7f.js",
    "revision": "2fdc45aff801de8148290b4863e5cbf9"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "db2aae52c42b93513f044679ac04e5e1"
  },
  {
    "url": "/_nuxt/vendor.bundle.24bc6a5499524102337c.js",
    "revision": "a609f7f0ea6fc34c61346e876aa7c28e"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "contenta_vue_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
