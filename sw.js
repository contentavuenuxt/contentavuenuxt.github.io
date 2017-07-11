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
    "url": "/_nuxt/0.nuxt.bundle.d2b2106b06ff9ddb4022.js",
    "revision": "cb1540f8787f19d5b1f434e85b282c0e"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.0eb625aed62691a6c434.js",
    "revision": "2c125eb3d5b59b966927569b7c3cbbad"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.212890071b9ee740a1ea.js",
    "revision": "9e721ae34ec8fcbb052e52e1653aff00"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.6fb8d252d5583d864092.js",
    "revision": "591b9e58424927161670b9be12420fca"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.c8c18531354455af45f1.js",
    "revision": "b59b90d37f4abb53fdc1541fd6b76649"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.70108296dcd0e22ad763.js",
    "revision": "fea258cdf488554337b2131742994502"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.2c7e179977f96016ed33.js",
    "revision": "f6eddced0c8922d4f0d67e6dc55a04da"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "f1aed011be07bf74b597d0ff109dec51"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.2977da3a.json",
    "revision": "b4569c53bd183e53c0f2ba903bf8aa85"
  },
  {
    "url": "/_nuxt/manifest.c1273016d6abbd6f6e4e.js",
    "revision": "9eefa1af83964d93f49f7ee102d9370e"
  },
  {
    "url": "/_nuxt/nuxt.bundle.2550052c835fbb1e89f9.js",
    "revision": "cde7d3b003d4a30546ff792f5bff8be5"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "881322cb7df6788836219d8dc0821770"
  },
  {
    "url": "/_nuxt/vendor.bundle.b465f6f15430e962fdcd.js",
    "revision": "97c6ba1c0fcb5b061d5390e84f4caa76"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "contenta_vue_nuxt_0.1.3",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
