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
    "revision": "3e8e33133644d1e2fa917fb8a93b9df7"
  },
  {
    "url": "assets/css/0.styles.e6d965a4.css",
    "revision": "d8236e8b526531f730cf6869e7c9263c"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/bg.c4b0b0e9.jpg",
    "revision": "c4b0b0e917187f7eb50c56b20cfe8dae"
  },
  {
    "url": "assets/img/bg2.452b561b.jpg",
    "revision": "452b561b441feffb9660ce2b68be9ca8"
  },
  {
    "url": "assets/img/monkeyed.d6afe94f.png",
    "revision": "d6afe94f02bd06ab87ae7c3e068f8b5d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tinypng.6bf398eb.jpg",
    "revision": "6bf398eba04773bf9504cd453de70b8c"
  },
  {
    "url": "assets/js/1.bb7905ab.js",
    "revision": "1a3354ba4598bd20d2e80277705eb33b"
  },
  {
    "url": "assets/js/10.a9c0993d.js",
    "revision": "3024bd7f5868a65434ddcd7078979195"
  },
  {
    "url": "assets/js/11.0178ad5e.js",
    "revision": "6b74f93305875a7ec28db3ce4b182589"
  },
  {
    "url": "assets/js/12.ffe23dc3.js",
    "revision": "4c25dbab5abbd90537ab9fb87384c624"
  },
  {
    "url": "assets/js/13.fd806773.js",
    "revision": "6da31080e6878386509bdaf601458fef"
  },
  {
    "url": "assets/js/14.b736b732.js",
    "revision": "56cfa7677fd85fb4f95e589c89422a51"
  },
  {
    "url": "assets/js/15.35e45881.js",
    "revision": "35867912b28c9e65d9293bca62d8c762"
  },
  {
    "url": "assets/js/16.08a0dc54.js",
    "revision": "3756977073ad04610e3e8561cf993221"
  },
  {
    "url": "assets/js/17.2408df55.js",
    "revision": "944bd83562a87b030611ad88b811bbbd"
  },
  {
    "url": "assets/js/18.bb3c710f.js",
    "revision": "1b43b9b864f247c6a39051587bea6788"
  },
  {
    "url": "assets/js/19.6c78cfbc.js",
    "revision": "5bdcc35163dd89924902e307665602f0"
  },
  {
    "url": "assets/js/2.5e38cbe9.js",
    "revision": "9e6d065dfd4d32b8a82c60643f202662"
  },
  {
    "url": "assets/js/20.6660d4fc.js",
    "revision": "9358ae929b8d561c68f7f3551c12e4dd"
  },
  {
    "url": "assets/js/21.e7feccfb.js",
    "revision": "1ac5ffff4fb85b98070fadb2c9c46b96"
  },
  {
    "url": "assets/js/22.7a96ba93.js",
    "revision": "84f938b5399803a4a8abbf5bf807a11b"
  },
  {
    "url": "assets/js/23.f8146093.js",
    "revision": "980d00a569211932f15d45348eebb4d8"
  },
  {
    "url": "assets/js/3.322125ab.js",
    "revision": "a2274a5756c80af734a05998689548b9"
  },
  {
    "url": "assets/js/4.fea8d875.js",
    "revision": "5daa60d47bc96d0f5ae447a1113595dd"
  },
  {
    "url": "assets/js/5.6d8b6c10.js",
    "revision": "8ce02842d4c0687be46cfe5f19761983"
  },
  {
    "url": "assets/js/6.f4f3c6c8.js",
    "revision": "2904530a1156056500887fbef8a0222c"
  },
  {
    "url": "assets/js/7.19958cf2.js",
    "revision": "5f77d34fc04a0e7cf7b288d58d02eb3a"
  },
  {
    "url": "assets/js/8.bcf273aa.js",
    "revision": "f7834d2b4c7c91ca1769d4508686285b"
  },
  {
    "url": "assets/js/9.b540d680.js",
    "revision": "244d5190d80dd9a921596a5d49677661"
  },
  {
    "url": "assets/js/app.44ed723c.js",
    "revision": "489c2286baf016dea31910728ca7d2d0"
  },
  {
    "url": "Html+CSS/index.html",
    "revision": "3da23ff6d2813836a29904f79415cdf6"
  },
  {
    "url": "img/bg.jpg",
    "revision": "c4b0b0e917187f7eb50c56b20cfe8dae"
  },
  {
    "url": "img/bg2.jpg",
    "revision": "452b561b441feffb9660ce2b68be9ca8"
  },
  {
    "url": "img/monkeyed.png",
    "revision": "d6afe94f02bd06ab87ae7c3e068f8b5d"
  },
  {
    "url": "img/timg.jpeg",
    "revision": "8794e1638e109fc02170147a2aa14daa"
  },
  {
    "url": "index.html",
    "revision": "a14ecdc41b357bef0715938e050c151b"
  },
  {
    "url": "JavaScript/array.html",
    "revision": "9a93df230b469b7048b32a0e2b8fb2de"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "5930a2f52784daac0af413b56de1a995"
  },
  {
    "url": "JavaScript/object.html",
    "revision": "c1ddf3c41b5e9e8342f0d313649f4918"
  },
  {
    "url": "JavaScript/string.html",
    "revision": "79be3a4171b25f639d231f84166d5dc5"
  },
  {
    "url": "js/canvas2svg.js",
    "revision": "a4306f790db67ed211e8ea9fa7812630"
  },
  {
    "url": "Node/index.html",
    "revision": "df04b61ef0115d864a754c39ef18d7ca"
  },
  {
    "url": "notes/index.html",
    "revision": "232c0f1c48889a0a7d9674a7e98bfd90"
  },
  {
    "url": "notes/组件.html",
    "revision": "fed384ab4239f0148be650ca498fe001"
  },
  {
    "url": "Python/index.html",
    "revision": "67408ac68e4d263c9c3a58fa6e4bd0a1"
  },
  {
    "url": "Python/函数.html",
    "revision": "c087eaf1acda22d23aba61db331740b4"
  },
  {
    "url": "Python/基础语法.html",
    "revision": "e2efd5c37a2d96e213a382060acaaf64"
  },
  {
    "url": "Python/数据类型.html",
    "revision": "2e8bb757e5fe17ebbabbbdcf1faa436f"
  },
  {
    "url": "SQL/index.html",
    "revision": "2edba371efe4e4e147e253ec273562b2"
  },
  {
    "url": "tool/index.html",
    "revision": "9085eaa96f9404594c9e2cd71a07a61d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
