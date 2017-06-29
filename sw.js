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
    "url": "/_nuxt/0.nuxt.bundle.98686a5faa8f0f910bb3.js",
    "revision": "d3ebb49574bc942031dc191d1ab1f08a"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.60a6dc51136efa726290.js",
    "revision": "e392d69476f163359bbab28130587853"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.5d4a96c12744b9b0e357.js",
    "revision": "b0667efd82658329a8e49b5ac11d83e3"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.35bc89948a17226e0dc3.js",
    "revision": "836942cd1f13069bae0e5830a8b419a5"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.75ad5e8f17a18fb543fc.js",
    "revision": "2d2e8c8188d13d7d80f945a199762dbd"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.3471ddd44be005ced15d.js",
    "revision": "04a9699d721acf48e874d81362deae51"
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
    "revision": "a1d8daa615327c9d30d9dbb2ccdb6d55"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.ec0cab88.json",
    "revision": "8f9eb6d2f7446e0dc30edb3f792108aa"
  },
  {
    "url": "/_nuxt/manifest.f2e85555b0850fe60843.js",
    "revision": "d7504ecd2b37d781494546fa6ef24cdb"
  },
  {
    "url": "/_nuxt/nuxt.bundle.cecd903c57ac44e82073.js",
    "revision": "f7ed570d8af532d51a1c2c924c5ae6c4"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "a8e23ef7b4c10ed7b91cd1427d5847e0"
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
