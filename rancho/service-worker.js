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
    "revision": "e2bcf98967f364c8892e1368973b058e"
  },
  {
    "url": "article/index.html",
    "revision": "0de780144f6445697363af0f6a69c2ba"
  },
  {
    "url": "article/test1/index.html",
    "revision": "8ce39577b21e0cdbb478cce12068a483"
  },
  {
    "url": "article/test2/index.html",
    "revision": "bdaf4cc0ce4cf54c347b1db682442b96"
  },
  {
    "url": "assets/css/8.styles.9af1acce.css",
    "revision": "3e56ac8124f9c18a5c01f22481a1434e"
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
    "url": "assets/js/app.9ffd7c43.js",
    "revision": "891ae2e09576f5b88c07c8376b2476ea"
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
    "revision": "ec818a019e0fd8d56bdcedf912406b75"
  },
  {
    "url": "location.png",
    "revision": "3864934d480b987c240a64c4a90fa51d"
  },
  {
    "url": "technical/a.html",
    "revision": "954965039ef13a7172b154c25245caf2"
  },
  {
    "url": "technical/b.html",
    "revision": "d08ee27e930e95f0c35d363368d866f1"
  },
  {
    "url": "technical/c.html",
    "revision": "1114d7286876bb14182bc9384c28d54f"
  },
  {
    "url": "technical/index.html",
    "revision": "d39f21632e5e6df970aa169ce708898f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
