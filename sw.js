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
    "url": "/_nuxt/0.nuxt.bundle.069b6f1e1bc1ed1d2206.js",
    "revision": "9d697e5dd2410bb81de50665d6f6bc9d"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.91339e6f8b9fbd8459f6.js",
    "revision": "32a9572aec12bb9f0608139664549604"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.a39665ed8ee9f83713f9.js",
    "revision": "e40b8275369af1be87fcb4bc3b210111"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.057785e0621d831f3f43.js",
    "revision": "5cddb9f10d2d7e6521e182b4b7fae6d0"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.3806ec5797dfb44801c2.js",
    "revision": "19ef2c28efdb306529b44f38d4ee6cdf"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.7093ff4835d220ae7906.js",
    "revision": "e5af5285fa5689d4d7f40de344f77860"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.f13c0685d1b03b43ece8.js",
    "revision": "e373121cfc9fd72e1f2bcb998bad6f60"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.248982a21592c1c04216.js",
    "revision": "14711e2f8c1861ce2039e1b1363f8e83"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "5b79319c8fc9f75d499baeb9d32992ae"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.8b2a8d5baa32c02f027a.js",
    "revision": "be56d9dbbd29fec85898b21ab89e9672"
  },
  {
    "url": "/_nuxt/manifest.ec0cab88.json",
    "revision": "8f9eb6d2f7446e0dc30edb3f792108aa"
  },
  {
    "url": "/_nuxt/nuxt.bundle.9047d096b7372b38ae32.js",
    "revision": "fad505f4e5e9c64c038036497313da33"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "e784f11e14bf13641d794626072c5ffb"
  },
  {
    "url": "/_nuxt/vendor.bundle.891e6e21c0c71dbd022a.js",
    "revision": "8e2cba3aa176795cecbc8ed052f31f14"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "contenta_vue_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
