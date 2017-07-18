importScripts('workbox-sw.prod.v1.1.0.js');

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
    "url": "0.nuxt.bundle.7224d15cd9225beb0c62.js",
    "revision": "9f1776268506daf8d915c99e2125bb94"
  },
  {
    "url": "1.nuxt.bundle.c41c144e4843e077065b.js",
    "revision": "f09b6715b03824bd83a8ee6082707638"
  },
  {
    "url": "2.nuxt.bundle.53edcfdc31036e924741.js",
    "revision": "e134c43fd567bf5c35bee7cfd458168d"
  },
  {
    "url": "3.nuxt.bundle.975e5c115c163ba0c96c.js",
    "revision": "41ee72a8e836aa611be8e0749d3e0a84"
  },
  {
    "url": "4.nuxt.bundle.3da83f4e4cecd3de3c5a.js",
    "revision": "6e2d02905693848d5b9186d21de15650"
  },
  {
    "url": "5.nuxt.bundle.7c50ab6e9b678a2c9527.js",
    "revision": "b245eb5688be9ae95c174cb7f9b6bf10"
  },
  {
    "url": "6.nuxt.bundle.2a410a980050122c15ac.js",
    "revision": "9fa8051000edc40e0ed185a46fce9624"
  },
  {
    "url": "7.nuxt.bundle.476ff2ba1db43f6c3306.js",
    "revision": "f469c5e99c60225a0bcd9d9eff5c105b"
  },
  {
    "url": "8.nuxt.bundle.e94bfd10cf776e46048d.js",
    "revision": "4dc504212912e109ff205c84b6476c3e"
  },
  {
    "url": "client-manifest.json",
    "revision": "6a8ccecffbba5e6aae186998f7d2a75d"
  },
  {
    "url": "index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "manifest.2977da3a.json",
    "revision": "b4569c53bd183e53c0f2ba903bf8aa85"
  },
  {
    "url": "manifest.d2336e5368cf4b67b64d.js",
    "revision": "d509cb1281092ac249c12d50b505e9c2"
  },
  {
    "url": "nuxt.bundle.3835d8c66947f6e9833c.js",
    "revision": "44d37219b7895134239df2bb8351c6af"
  },
  {
    "url": "server-bundle.json",
    "revision": "9cfbae53ea198c259b4c608792317808"
  },
  {
    "url": "vendor.bundle.e72832b0df21f564fa91.js",
    "revision": "3b9d430e9aaf7502560323a4aa0b456f"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "contenta_vue_nuxt_0.6.1",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/\/_nuxt\/.*/', workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute('/\/.*/', workboxSW.strategies.networkFirst({}), 'GET');
