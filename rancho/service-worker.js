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
    "revision": "58564c47d63f7a369a1166da5a95bb5b"
  },
  {
    "url": "article/index.html",
    "revision": "4693baa4b9e306ac66a85e159253ec95"
  },
  {
    "url": "article/test1/index.html",
    "revision": "7654a72c68465da2097e633454bc72c1"
  },
  {
    "url": "article/test2/index.html",
    "revision": "607dc7e0f5bf23f228eaf4e48b79f8bc"
  },
  {
    "url": "assets/css/0.styles.fab68f77.css",
    "revision": "450499371bbe30c35fc1bdf60fa13051"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5e9572cc.js",
    "revision": "312c88a2d5c76fc697ab092b1ac306fa"
  },
  {
    "url": "assets/js/10.5c20d911.js",
    "revision": "4642ca19521f124a4c97833eebab2e26"
  },
  {
    "url": "assets/js/11.2fbd8269.js",
    "revision": "84527283fb44de90fbb3a54efe293a74"
  },
  {
    "url": "assets/js/12.40e3896d.js",
    "revision": "167bab7239e3e7a5fb3ebc4fdce4a12a"
  },
  {
    "url": "assets/js/2.dddb88d9.js",
    "revision": "7727155e1ec2e7f60cfa77f52d320629"
  },
  {
    "url": "assets/js/3.3a62641f.js",
    "revision": "625279d0c201fe41940334a22e0b7621"
  },
  {
    "url": "assets/js/4.ab2e5eee.js",
    "revision": "dec6142c0a9f227f7d99b7d97e15d1f8"
  },
  {
    "url": "assets/js/5.9b2b8608.js",
    "revision": "4821dcb0688a67f1093573b002b5fc3d"
  },
  {
    "url": "assets/js/6.c4ad6f3a.js",
    "revision": "4e95f9dd71ce9c61382947d7c98d4e0b"
  },
  {
    "url": "assets/js/7.7e51a39e.js",
    "revision": "edaa74faffdedfdbee866175153815c6"
  },
  {
    "url": "assets/js/8.595847b5.js",
    "revision": "71a2cef3b948b605862e680add5721cb"
  },
  {
    "url": "assets/js/9.37665c27.js",
    "revision": "03c677995035224e330f1aea030d07f3"
  },
  {
    "url": "assets/js/app.c0db8b3c.js",
    "revision": "4e07100508b980ddbb1bcd175cc27ca8"
  },
  {
    "url": "Html+CSS/index.html",
    "revision": "a12ff186221be53bc39bad19fa32fb0f"
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
    "revision": "77804bdba9b2aa06b694cbf1a084d473"
  },
  {
    "url": "JavaScript/array.html",
    "revision": "f90b1c3fea62d01c22f20f9c76455f74"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "2ef24fae1bfc09be70edf067d41290a4"
  },
  {
    "url": "JavaScript/object.html",
    "revision": "4db560e348a487d579124d3b28b39f76"
  },
  {
    "url": "JavaScript/string.html",
    "revision": "c3dc1f13aa58d438594e58ae97cda635"
  },
  {
    "url": "location.png",
    "revision": "3864934d480b987c240a64c4a90fa51d"
  },
  {
    "url": "Node/index.html",
    "revision": "055fdd1d14e88a65f607cafaf60bbd7a"
  },
  {
    "url": "SQL/index.html",
    "revision": "1abf4b5a2c79b436510aea8d656e3394"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
