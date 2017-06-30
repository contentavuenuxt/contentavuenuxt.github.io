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
    "url": "/_nuxt/0.nuxt.bundle.8afb86922b2f87f87feb.js",
    "revision": "6aec576206aef21bf656d4d9560a6784"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.e34b40395577244b7148.js",
    "revision": "7691fa455f7ef7034518af0af6fdf087"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.7cac6be0c48274497e39.js",
    "revision": "ce212e864ee531e64d22068f51cdc7d4"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.3865cbe96aa10be9c73d.js",
    "revision": "d28e717af262d21f25395d536eda6258"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.8f4e652555a316e4ff64.js",
    "revision": "d2a0015c8121bf3fc144d4db66d722bd"
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
    "revision": "7806d1f012ec6f617cb1829b02901af7"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.dff42d5512a4a12e5f8a.js",
    "revision": "7fa817ace764f0e6a6d63757be90a490"
  },
  {
    "url": "/_nuxt/manifest.ec0cab88.json",
    "revision": "8f9eb6d2f7446e0dc30edb3f792108aa"
  },
  {
    "url": "/_nuxt/nuxt.bundle.caf2ede03618314c915d.js",
    "revision": "1d5a662bf3741ebf0929022fc72aa9e3"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "f8bf37980db59cd181049f9ed2f4231d"
  },
  {
    "url": "/_nuxt/vendor.bundle.a1c6ec22b6609c988177.js",
    "revision": "4873b85ea06b3d92f13e18d619dce1ec"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "contenta_vue_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
