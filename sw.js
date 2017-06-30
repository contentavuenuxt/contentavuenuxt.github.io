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
    "url": "/_nuxt/0.nuxt.bundle.8482d2404fad14953bd2.js",
    "revision": "ef2031c401ea9102cbdd30863e779a11"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.a16009cc8ade447023ca.js",
    "revision": "3cea1ff0a2f3d9901008b7ddd0c76b96"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.e7689ef145f2afbdd2cc.js",
    "revision": "f73ae225c9df963f794705c8458bf481"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.f00b26c72b577bcb5007.js",
    "revision": "3f307a5d7d344f25c13591d933775f78"
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
    "revision": "ab2a4ad45154eaf1111049b22bf221ff"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.ca270fe5d5617c593b99.js",
    "revision": "1b08d27900ae37027decdbc6e1edb239"
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
    "revision": "23a6fa3b6dac03eecb022a975e91bbb7"
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
