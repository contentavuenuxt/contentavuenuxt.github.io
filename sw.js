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
    "url": "/_nuxt/0.nuxt.bundle.a77aa6330776d9fe4d9f.js",
    "revision": "de40466296e3fbcaddf339ca2d1b03fd"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.cda29518b94fe697a17f.js",
    "revision": "5c609ee9f650e6147f7636f7ef5960ac"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.e510cb7b12bda091aacd.js",
    "revision": "d7ca90dbdc2c339db43ce0204d26cfcb"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "9b720e0789788284a50d3f089e65fda2"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.b426410f12c9be338fd3.js",
    "revision": "bf472da08f2c07a59e3efde1170b219a"
  },
  {
    "url": "/_nuxt/manifest.ec0cab88.json",
    "revision": "8f9eb6d2f7446e0dc30edb3f792108aa"
  },
  {
    "url": "/_nuxt/nuxt.bundle.30d36fed0dd2823cc347.js",
    "revision": "172586d41caf982e06b02ef21646040f"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "53eff6e2773ae74541073a044cdefe47"
  },
  {
    "url": "/_nuxt/vendor.bundle.6e11a1538b3dc7aed1d4.js",
    "revision": "208e7b96b9ad18ddb08909b4e5852167"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "contenta_vue_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
