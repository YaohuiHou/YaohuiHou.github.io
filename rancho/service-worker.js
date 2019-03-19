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
    "revision": "c264f51b1f6c6b2abadce8524a408a1a"
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
    "url": "assets/js/10.7c4d58d4.js",
    "revision": "f118d73f1bda8cf86e9b09540ae23d70"
  },
  {
    "url": "assets/js/11.3f9119fe.js",
    "revision": "418487ec4835019618b315ef985f735c"
  },
  {
    "url": "assets/js/12.ffe23dc3.js",
    "revision": "4c25dbab5abbd90537ab9fb87384c624"
  },
  {
    "url": "assets/js/13.5fce8d14.js",
    "revision": "6ae1d82acd28e0a7d7dbb71d44d81c11"
  },
  {
    "url": "assets/js/14.f975f547.js",
    "revision": "61bc08f48592de73657035f706eaa71c"
  },
  {
    "url": "assets/js/15.3d6ecc97.js",
    "revision": "e7457bcc9a2575a6265a3cdac602517a"
  },
  {
    "url": "assets/js/16.f7b2cb60.js",
    "revision": "d5047c8d338478aa26123621e7fde789"
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
    "url": "assets/js/5.f307f269.js",
    "revision": "609374b1f9a6b5cec0d855a834dfb1d4"
  },
  {
    "url": "assets/js/6.f4f3c6c8.js",
    "revision": "2904530a1156056500887fbef8a0222c"
  },
  {
    "url": "assets/js/7.db34948f.js",
    "revision": "376767d6d2828e628ff81450d9739ef1"
  },
  {
    "url": "assets/js/8.bcf273aa.js",
    "revision": "f7834d2b4c7c91ca1769d4508686285b"
  },
  {
    "url": "assets/js/9.950e0be5.js",
    "revision": "abbda85fd32e86a77356634597fe5f6a"
  },
  {
    "url": "assets/js/app.83870c53.js",
    "revision": "fe0a135a3e1a4ae347af0bb8f1debe11"
  },
  {
    "url": "Html+CSS/index.html",
    "revision": "dc421f790291fc63e508cf993ac762b5"
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
    "revision": "244fb88979a73568c72ffe8edd3e9faf"
  },
  {
    "url": "JavaScript/array.html",
    "revision": "6901644a3ed8d7afd5cb447316618a9d"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "83e33b55a3b221bd880e44085c668cd6"
  },
  {
    "url": "JavaScript/object.html",
    "revision": "e52d04b9b42335a7e39f97f388dc34c2"
  },
  {
    "url": "JavaScript/string.html",
    "revision": "16558003bfd2920205af09419782b157"
  },
  {
    "url": "js/canvas2svg.js",
    "revision": "a4306f790db67ed211e8ea9fa7812630"
  },
  {
    "url": "Node/index.html",
    "revision": "d89442dfb29a5bd184b97eeb3f2afda0"
  },
  {
    "url": "notes/index.html",
    "revision": "4f4f40a6c1e79da403673b6047cca7a4"
  },
  {
    "url": "notes/组件.html",
    "revision": "bdc5bb5ab6c8874cb2a41cd8a210d89a"
  },
  {
    "url": "Python/index.html",
    "revision": "047466a8f9e792be30a5185df901ecc3"
  },
  {
    "url": "Python/函数.html",
    "revision": "6f9b0c64682a637fa6afba3ae02596ee"
  },
  {
    "url": "Python/基础语法.html",
    "revision": "ae7dafed69f6cc4af821d94ab09eb937"
  },
  {
    "url": "Python/数据类型.html",
    "revision": "d5e349388ec441ff8aa1b58f10cca533"
  },
  {
    "url": "SQL/index.html",
    "revision": "828326abf34234cac479e9861ef0e2e1"
  },
  {
    "url": "tool/index.html",
    "revision": "af175d24f979d653131f11b82432210f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
