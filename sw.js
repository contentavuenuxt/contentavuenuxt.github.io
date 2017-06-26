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
    "url": "/_nuxt/0.nuxt.bundle.4c61d08c3bc34a8064eb.js",
    "revision": "2ccafc50263137efcefa65cda6717581"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.85c43d992d336dec0b18.js",
    "revision": "04552257b06dad32029324eb26c76fc3"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.c54ddc4210d4fb43e879.js",
    "revision": "a81568ee8e71a5f2d25ec3fe96d1ba7e"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "5f385d0e88f2af96447094f718048a4e"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.083772f0d3dd31662232.js",
    "revision": "43f4906f9c858cff910f95ed55190442"
  },
  {
    "url": "/_nuxt/manifest.ec0cab88.json",
    "revision": "8f9eb6d2f7446e0dc30edb3f792108aa"
  },
  {
    "url": "/_nuxt/nuxt.bundle.30d36fed0dd2823cc347.js",
    "revision": "d86b3501ac1a41a0bb07f01ddbb08ddc"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "f9544d3bc04239413d7cda169bcec8b6"
  },
  {
    "url": "/_nuxt/vendor.bundle.e8b00d1706781dffadc5.js",
    "revision": "a75b9cf7fb7c01246fe226c05cdb5a91"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "contenta_vue_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
