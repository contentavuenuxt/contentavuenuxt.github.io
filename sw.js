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
    "url": "/_nuxt/0.nuxt.bundle.37193fd3ff13cd377a3a.js",
    "revision": "42411dc1ae567c364cbd2b92426cec8b"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.60a6dc51136efa726290.js",
    "revision": "e392d69476f163359bbab28130587853"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.ee04ced21c7af036071d.js",
    "revision": "6c3b1ccf3b2fea49881e19a3533508a1"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.3adcc725ff877289aee6.js",
    "revision": "d8dbee827e3616cda2f04636f1865f09"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.75ad5e8f17a18fb543fc.js",
    "revision": "2d2e8c8188d13d7d80f945a199762dbd"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.5db8d0644ac59290bc34.js",
    "revision": "04cdc1b9fc31237941bcb622c6ae098a"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.28b4b288f2769595cd23.js",
    "revision": "ead7b5c2033b18fa170c9d5c56c32369"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.54d5be494458a13e6b45.js",
    "revision": "bdea70f8648d5e23f45dc7285c9b296c"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "33f37b4c2127c031b827ef2ca0331c1a"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.019aa2a08721041cbf6f.js",
    "revision": "91fe60a23ddb6c3e50d24654f7350281"
  },
  {
    "url": "/_nuxt/manifest.ec0cab88.json",
    "revision": "8f9eb6d2f7446e0dc30edb3f792108aa"
  },
  {
    "url": "/_nuxt/nuxt.bundle.cecd903c57ac44e82073.js",
    "revision": "f7ed570d8af532d51a1c2c924c5ae6c4"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "d9404a4de13bee0bfc2c7bbed3d85d1b"
  },
  {
    "url": "/_nuxt/vendor.bundle.81c2e970920b4fe0b60f.js",
    "revision": "0d332788122578469a4614a52c1ab3d8"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "contenta_vue_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
