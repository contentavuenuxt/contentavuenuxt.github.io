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
    "url": "/_nuxt/0.nuxt.bundle.82fe23ed4a102c65069a.js",
    "revision": "70fe1237725e46d19142852e99de10d5"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.a459764b8a1e3daf4493.js",
    "revision": "d052b86dd036ef3d105ef070e87bee97"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.bc9bbf5cd7a3f8cf6001.js",
    "revision": "ecdddd4815f82bec2933cb774f1a6726"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.f718e7c6b7d090f5b67b.js",
    "revision": "a598187376cbad4c2a088bc98b967db6"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.0450af168c5f5bc0a4fe.js",
    "revision": "0deb99ac55d924d5a05c3092d7c1d628"
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
    "revision": "a701d69bba689c2c806f4f65e698e70b"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.4a9bf8b075631db13740.js",
    "revision": "be8e56a10906395182ea9dd48d3fd09c"
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
    "revision": "3d6291858a5206f324124a4ad21fd87b"
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
