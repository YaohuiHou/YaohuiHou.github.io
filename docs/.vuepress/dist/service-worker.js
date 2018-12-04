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
    "revision": "aa2b6e3a10d1ef5003d2b90f049c88be"
  },
  {
    "url": "article/index.html",
    "revision": "cc2a4484badb0ecb6aca517680afe3d6"
  },
  {
    "url": "article/test1/index.html",
    "revision": "ff0c31e3f414022948106fd02d4da273"
  },
  {
    "url": "article/test2/index.html",
    "revision": "64aed1bbed01bb4dfb285c84385d5e18"
  },
  {
    "url": "assets/css/0.styles.896254c0.css",
    "revision": "450499371bbe30c35fc1bdf60fa13051"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0917b44b.js",
    "revision": "c985797677d78981669ea272027b47a3"
  },
  {
    "url": "assets/js/2.2845a559.js",
    "revision": "d8493754080c0dd84562ceffbc13292b"
  },
  {
    "url": "assets/js/3.8e24e5e5.js",
    "revision": "5eb02397d4282eebb83d14863e1737f6"
  },
  {
    "url": "assets/js/4.a47dc334.js",
    "revision": "181384adbee3c47f5664ce3f8a8b01d4"
  },
  {
    "url": "assets/js/5.bd83842d.js",
    "revision": "f08140a4c1b6542ec04ed669481222f7"
  },
  {
    "url": "assets/js/6.e2aad397.js",
    "revision": "2920b50d42b7927da61aac2601e3fffe"
  },
  {
    "url": "assets/js/7.83877a91.js",
    "revision": "6d12ecd049521c963243416b1bfa86ce"
  },
  {
    "url": "assets/js/8.77e4176d.js",
    "revision": "ef1ebe541884449f32969305cc9b62be"
  },
  {
    "url": "assets/js/9.e501300d.js",
    "revision": "77baf8cd182e6213ec2b835a49424ab7"
  },
  {
    "url": "assets/js/app.16129b7d.js",
    "revision": "e0558549ce0c0af598da8ee41d68f163"
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
    "revision": "36780d00ae541c9fadcc0ac68379d4d2"
  },
  {
    "url": "location.png",
    "revision": "3864934d480b987c240a64c4a90fa51d"
  },
  {
    "url": "technical/array.html",
    "revision": "0567188d3787ac9f179214e47dc00203"
  },
  {
    "url": "technical/index.html",
    "revision": "a0fbdcfed05ad33d4cd45eacc96aa522"
  },
  {
    "url": "technical/object.html",
    "revision": "a6f3201738a68d59a1a5ed818a48c0c8"
  },
  {
    "url": "technical/string.html",
    "revision": "7437e0ad4298ec138fb0beb46c6d9bbe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
