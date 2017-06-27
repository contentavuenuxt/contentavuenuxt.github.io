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
    "url": "/_nuxt/0.nuxt.bundle.57976557b183bae8781c.js",
    "revision": "a6c0a9eee669105b7526b4d32bd8d741"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.c8e93de7664444bf9bec.js",
    "revision": "644435b085f5797b17a9bc11fc3642ed"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.628699e62fa8523adf96.js",
    "revision": "a24d08c4b3a29eb5883f2ba81a646d18"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.850d73e81e7f1880e033.js",
    "revision": "c01ae501f03b1abfec4343d989c27bb0"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.7b4ea539953809bb451c.js",
    "revision": "3a8ce779657f13117aa998bf93d694f7"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.e83696352fac8e8e0677.js",
    "revision": "33edd4ac1ba4e20f90815337b562bc1f"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "c64846b4799d6391e4c1547a285f969c"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.b0d470f52ac39f01d617.js",
    "revision": "9aeaa2c4f11df2b33b117b3722b3af23"
  },
  {
    "url": "/_nuxt/manifest.ec0cab88.json",
    "revision": "8f9eb6d2f7446e0dc30edb3f792108aa"
  },
  {
    "url": "/_nuxt/nuxt.bundle.a373a2b2d68fed82529e.js",
    "revision": "b2ee71baa35ad393ac1fcea972f5d78e"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "690399c218ecb13bd62f51f087cb1f33"
  },
  {
    "url": "/_nuxt/vendor.bundle.aa2c5acf56e916b2e843.js",
    "revision": "2e22b1e9c7be14dfbd8353e9118e191b"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "contenta_vue_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
