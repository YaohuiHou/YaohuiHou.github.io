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
    "revision": "8332b74128d778c6d57bc61a008a9b9e"
  },
  {
    "url": "article/index.html",
    "revision": "064dc06e97b63337e23d1d944cbe7565"
  },
  {
    "url": "article/test1/index.html",
    "revision": "7b0663367f5933cdb37c480b0262a647"
  },
  {
    "url": "article/test2/index.html",
    "revision": "2e5d7e6090a682edaf875dd2b54f0166"
  },
  {
    "url": "assets/css/8.styles.38aff4fb.css",
    "revision": "f6a8a025fbad004e2eae71de71a745da"
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
    "url": "assets/js/app.c57230de.js",
    "revision": "5f9207f3bcd21f0dc0fbb956ae007b85"
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
    "revision": "8331326b1f7c06224849463ab3316925"
  },
  {
    "url": "location.png",
    "revision": "3864934d480b987c240a64c4a90fa51d"
  },
  {
    "url": "technical/a.html",
    "revision": "7ccdcd9f355c3b6457bc7bd0c537e8a8"
  },
  {
    "url": "technical/b.html",
    "revision": "d317ecd8faf954cf7f9afa793b9d5b17"
  },
  {
    "url": "technical/c.html",
    "revision": "96cf8f017f61dd8f39e3b706898beed9"
  },
  {
    "url": "technical/index.html",
    "revision": "6b789487869d4563bfbe670e1031640c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
