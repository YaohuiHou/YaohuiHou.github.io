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
    "revision": "e1cf19cd2f1709181b8e6d6eb78107f4"
  },
  {
    "url": "article/index.html",
    "revision": "de17c00f04bdb753be894d15eae3c625"
  },
  {
    "url": "article/test1/index.html",
    "revision": "eafc7ef7b91bfe952cca9fde5f5e6d34"
  },
  {
    "url": "article/test2/index.html",
    "revision": "beb177835a8f6f3177e7455652e34553"
  },
  {
    "url": "assets/css/0.styles.86f68b8f.css",
    "revision": "450499371bbe30c35fc1bdf60fa13051"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.7833ab0c.js",
    "revision": "0f6fb9725a64f8d03c2a534493c4dace"
  },
  {
    "url": "assets/js/10.c3ef164f.js",
    "revision": "4afa3f82f9d1d32da507ba0471659760"
  },
  {
    "url": "assets/js/11.2e27145d.js",
    "revision": "b19aa909ad740c5e9940f71a324c06b8"
  },
  {
    "url": "assets/js/12.eca7f0e4.js",
    "revision": "8ce0db0119dd2e34a126c16c3ced143a"
  },
  {
    "url": "assets/js/13.8daa2d6b.js",
    "revision": "e27dded06742c44a19f66901e03d4849"
  },
  {
    "url": "assets/js/14.ef3d0186.js",
    "revision": "a18939f20ba15a57635d271076c5c463"
  },
  {
    "url": "assets/js/2.59b46811.js",
    "revision": "9f09401d8a80615e26683622aab3e42a"
  },
  {
    "url": "assets/js/3.837dae66.js",
    "revision": "2715165c19d8173fdc46e25a717210ea"
  },
  {
    "url": "assets/js/4.b8e97ac2.js",
    "revision": "081c58bc68ab6c0161ed6a9d64ed62cc"
  },
  {
    "url": "assets/js/5.89caad9b.js",
    "revision": "6a6f829a04f83ff69b1a1f9f8a2c4080"
  },
  {
    "url": "assets/js/6.a6cae4ac.js",
    "revision": "7eadca0fa258ee8799e039d3e0660f05"
  },
  {
    "url": "assets/js/7.4f752edf.js",
    "revision": "b13d445c366569d08b2cdbe9a5f119c2"
  },
  {
    "url": "assets/js/8.11ca10b3.js",
    "revision": "58f9b6ca96b89e1731aa766a4727fdce"
  },
  {
    "url": "assets/js/9.befb98a5.js",
    "revision": "953a9ed972fcf7530bf9165b377966e8"
  },
  {
    "url": "assets/js/app.3b25bcf4.js",
    "revision": "20cc045ba531bcb3cbafe3b958207f5f"
  },
  {
    "url": "Html+CSS/index.html",
    "revision": "b15a262852e49499aa6539b3e4df5ac7"
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
    "revision": "049fe4845583b4a186e547a843d18a71"
  },
  {
    "url": "JavaScript/array.html",
    "revision": "4a2b35206d0951da8dedf28675a33ba5"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "88032d66fb2186b880ff323204a28a8a"
  },
  {
    "url": "JavaScript/object.html",
    "revision": "7430c82c6ddbfe6d44b86863e9c8899f"
  },
  {
    "url": "JavaScript/string.html",
    "revision": "616fb3a75af4667c6126eb1a099573ab"
  },
  {
    "url": "location.png",
    "revision": "3864934d480b987c240a64c4a90fa51d"
  },
  {
    "url": "Node/index.html",
    "revision": "267316d730d91e19e4dbf8c5801e91ee"
  },
  {
    "url": "Python/index.html",
    "revision": "242a62f2da11267528310dff2b38e85b"
  },
  {
    "url": "Python/函数.html",
    "revision": "ff1d12a81baed8bb026399f0b113be2f"
  },
  {
    "url": "SQL/index.html",
    "revision": "511018bfcd202e5245258e0fbf91b47b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
