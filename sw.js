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
    "url": "/_nuxt/0.nuxt.bundle.f67454a2eef1404d8c72.js",
    "revision": "feac6b14fe754867361287296b07dc20"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.f39d264f39abde620b22.js",
    "revision": "e8c6acb28aaf0ca949fc350cfd7cfc8c"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.e0eb21fa86f5eb726bdd.js",
    "revision": "16c364ed662eb9ce2dd83086df42ac15"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.df00070fea0f31634262.js",
    "revision": "9007e17ddd1830e57d5922386d1c9f16"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.cee44b8dae7707c44442.js",
    "revision": "5562d166ea43bd5535421aacdc18e553"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.ce50bc798030fce8eaa7.js",
    "revision": "62fd8e819e16050bead3ea00cad967a8"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.a47ac5accd40d26bb00a.js",
    "revision": "bdd0a00f024f6ffc92425536db4b57e3"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.78cbc811bde259487cea.js",
    "revision": "72f7d45a388316602ec7af74297ea1fd"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "8361abc8be69a21f8eac245f00a90e7c"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.9083b613171d69c594f9.js",
    "revision": "1a1d426c0cbd38e251ef63391c09e1a8"
  },
  {
    "url": "/_nuxt/manifest.ec0cab88.json",
    "revision": "8f9eb6d2f7446e0dc30edb3f792108aa"
  },
  {
    "url": "/_nuxt/nuxt.bundle.15d2b60c47f9d2b39fed.js",
    "revision": "cbb4dedf93308b5cb2a7e82a53178c63"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "87dcd890c78004e1158ca2f12fc66ce8"
  },
  {
    "url": "/_nuxt/vendor.bundle.41684a544fc2e927e836.js",
    "revision": "fd14212a8aa0893ae434d3bc2244aaa7"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "contenta_vue_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
