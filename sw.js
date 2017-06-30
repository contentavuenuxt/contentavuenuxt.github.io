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
    "url": "/_nuxt/0.nuxt.bundle.b84f1b0246a1d7ddc791.js",
    "revision": "fffb624e6757d1cab9c6f78a5899ea93"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.850fabdbb3f5cee6368e.js",
    "revision": "1f3e13e992de4b4f15bbe8f541850582"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.1aa416752f5ed6d7e945.js",
    "revision": "952bada221da3aafb3633e6b59cdbf9a"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.f8feb3e9f1d5dcbd0eb2.js",
    "revision": "3b7cda24465e3da2312edf25ff48576e"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.bce4156960b650c06051.js",
    "revision": "e7c5a4c893263dd1cc891674f1d64fb4"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.4fdf4fe1d5abd37ee504.js",
    "revision": "656424c03037187368f4dc678c082fa9"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.ecc0067fdc175eea6ba2.js",
    "revision": "e00837c0924514f7a3a39308d3daa806"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "a241f850e2e01075af3ba909b31712df"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.7405f053cf8b586fb7e0.js",
    "revision": "07b77d9193de89846e2ed07fedc58bff"
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
    "revision": "9b375314c409f2438183553fca640e1e"
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
