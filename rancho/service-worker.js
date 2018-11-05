/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c73599889659ec1ecb850e81254db5c9"
  },
  {
    "url": "article/index.html",
    "revision": "103c03f59a15706cfd33f106c328db62"
  },
  {
    "url": "article/test1/index.html",
    "revision": "d80713c5291f19cd44b6ba6cc9798be8"
  },
  {
    "url": "article/test2/index.html",
    "revision": "90b8667626865fd23ac8f337963bb46d"
  },
  {
    "url": "assets/css/8.styles.2d9cbed8.css",
    "revision": "bb3a456738ccf04f293ad2c63968868d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.1cfb9d16.js",
    "revision": "9a6489beecc1cf4fe9038351f2ceb9c4"
  },
  {
    "url": "assets/js/1.38a18c5d.js",
    "revision": "03b8b4aa4e307c9d8a89d32558e99a2b"
  },
  {
    "url": "assets/js/2.16167a11.js",
    "revision": "35e57c33c076b66ec3bc1ebb9405b0d9"
  },
  {
    "url": "assets/js/3.05efaf33.js",
    "revision": "ca23bcd0e63cbaba04e8361e8ac878df"
  },
  {
    "url": "assets/js/4.0aa0523f.js",
    "revision": "8c602eabe031e0adb2bf47d1b58d8857"
  },
  {
    "url": "assets/js/5.c89df81c.js",
    "revision": "9e53bd28a40102a52c98647047761be7"
  },
  {
    "url": "assets/js/6.61b5e6c1.js",
    "revision": "699f4bcd8ceffa736bc9ff9b6cce04d7"
  },
  {
    "url": "assets/js/7.95019a43.js",
    "revision": "6bd4f0daf973bca4cec7915b761815c3"
  },
  {
    "url": "assets/js/app.27f40cac.js",
    "revision": "15956a7636cef4eb83047f6c99e3aca2"
  },
  {
    "url": "img/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "img/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "index.html",
    "revision": "4c8e3029ee7a7baac4d66943819f98aa"
  },
  {
    "url": "location.png",
    "revision": "3864934d480b987c240a64c4a90fa51d"
  },
  {
    "url": "technical/a.html",
    "revision": "7db85398426ef2b8bc6cf4774ba69f51"
  },
  {
    "url": "technical/b.html",
    "revision": "b9521eb67be46d1cc3a70c6d684cc20c"
  },
  {
    "url": "technical/c.html",
    "revision": "222a98cce7741d871e70aeea8391c89c"
  },
  {
    "url": "technical/index.html",
    "revision": "794f1b2d6ac1cee2805bae7a67193ca4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
