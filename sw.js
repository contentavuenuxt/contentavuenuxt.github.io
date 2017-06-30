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
    "url": "/_nuxt/0.nuxt.bundle.e9f48da34ea7a4647e2c.js",
    "revision": "9c339b16ef2fdeef09d9600c4ada594b"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.af0555bcdeb969d59d88.js",
    "revision": "f523807fa4882569d2b5236b3667d716"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.37f0892a98c2290ca552.js",
    "revision": "52543b098e0564bb721f32e738630655"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.5e5d2dc092882b902c73.js",
    "revision": "238e80515f197a9e069fe57f87b8ab94"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.eaca49f7bf4748234a4a.js",
    "revision": "63ebbdb51514367a896d9a1d721de5c9"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.ac303a3243adb484e3c6.js",
    "revision": "4ae4dd650f3a2c009a4efc587848bc41"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.7db01852e3d188ed6260.js",
    "revision": "816599bfa168653d20175ce5a5fc9a43"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "55debb004f8466d1aacff45816ed6ee0"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.cb1340beb991cd044d74.js",
    "revision": "56a5b9c9ac1e0dd1179dee0f43937153"
  },
  {
    "url": "/_nuxt/manifest.ec0cab88.json",
    "revision": "8f9eb6d2f7446e0dc30edb3f792108aa"
  },
  {
    "url": "/_nuxt/nuxt.bundle.dff7e2c48ac4b1e66f84.js",
    "revision": "1ffc0ccc9eee70fb40952bfa07a183a7"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "e59a81cd66ad03567fc4625431bf1412"
  },
  {
    "url": "/_nuxt/vendor.bundle.8c053661befc6f3403ef.js",
    "revision": "a6a5ece8b7f1c58c74a04c7b7c3f7177"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "contenta_vue_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
