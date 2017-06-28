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
    "url": "/_nuxt/0.nuxt.bundle.57cc6a57ffe014b9616f.js",
    "revision": "a5ca35dfcde8b048afbc6e72c8f75362"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.233e1862df687807a155.js",
    "revision": "7bbc21537256d1b8ef1e3337eab1c850"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.96b641b4e16e5fafa357.js",
    "revision": "85ea336321e3b382d81c0c955ac43444"
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
    "revision": "d1e7d10e766397e9152971d524fc65de"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.18fe857528fddc310e1e.js",
    "revision": "e112f8bc5febe40ed197259fb974d9cc"
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
    "revision": "1843c6e7dfaf43899e6e4b2970480ee0"
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
