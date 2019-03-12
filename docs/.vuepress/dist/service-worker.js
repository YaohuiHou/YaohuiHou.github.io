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
    "revision": "963617c4a6ce1f79af9cb9e54288e065"
  },
  {
    "url": "article/index.html",
    "revision": "61c3d60dc8b619804986c23088a4b08d"
  },
  {
    "url": "article/test1/index.html",
    "revision": "631f6026bd4124f59fca72346018060b"
  },
  {
    "url": "article/test2/index.html",
    "revision": "f2d1fecb780c1f7cf7a61119c768b24e"
  },
  {
    "url": "assets/css/0.styles.8ec37b70.css",
    "revision": "2cbc234a1a1cfd78f4396413404a11f2"
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
    "url": "assets/js/1.bf9fa4c9.js",
    "revision": "a33a1ff25574b48fc95b00be83ecebcf"
  },
  {
    "url": "assets/js/10.22b3a5fc.js",
    "revision": "acbf3f68fe7e238bd100fa9be8aff732"
  },
  {
    "url": "assets/js/11.c6bd4e7a.js",
    "revision": "f33fdd249a2da53d81044909d1c9a2fe"
  },
  {
    "url": "assets/js/12.fff1d0fc.js",
    "revision": "ce49233c6f25d4a35a31edcace15446f"
  },
  {
    "url": "assets/js/13.7d1c1c31.js",
    "revision": "964c8e543f67c259bebea6ed13c0f34a"
  },
  {
    "url": "assets/js/14.66010c3d.js",
    "revision": "5218d2946a8513f51d8eff086461dcea"
  },
  {
    "url": "assets/js/15.4bbaba44.js",
    "revision": "d77be2aa8116bab4bfd6d4bd1d21aabc"
  },
  {
    "url": "assets/js/2.77e325ca.js",
    "revision": "5eb2a46bf8c963f04d9850c4d0fd7041"
  },
  {
    "url": "assets/js/3.785c49cb.js",
    "revision": "7ac74ba946b11111d747f17518d86a6b"
  },
  {
    "url": "assets/js/4.2af37af8.js",
    "revision": "a9d4e36b43cc2e1cb91c7c657340921d"
  },
  {
    "url": "assets/js/5.d4fa0502.js",
    "revision": "a3aec541a79b082cf49de6eab5f3bfb3"
  },
  {
    "url": "assets/js/6.cf95503b.js",
    "revision": "621bcc3d9165efd7bc7171fa44e48e4f"
  },
  {
    "url": "assets/js/7.b4e46167.js",
    "revision": "3aef93c48ebd78b1229a7e0305dca1bb"
  },
  {
    "url": "assets/js/8.953ac5fb.js",
    "revision": "e6f1f7acb7d62629244fe13a5bca60bc"
  },
  {
    "url": "assets/js/9.cb7a3e8d.js",
    "revision": "c98928c89afafa08c091df3ab8be8753"
  },
  {
    "url": "assets/js/app.a773a78a.js",
    "revision": "b64d28c30ceeea3bf6cbba7e53310ca2"
  },
  {
    "url": "Html+CSS/index.html",
    "revision": "0d5c2800728a5b7d6e4d2fc3b0637055"
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
    "revision": "658621e8623fef865df596fa581fa909"
  },
  {
    "url": "JavaScript/array.html",
    "revision": "1d7222b5c6e2158c42a15760998549ca"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "1973dba76640cb17a47f60c8eb33df00"
  },
  {
    "url": "JavaScript/object.html",
    "revision": "e4dac987f2cdd28ca0c8d0af5a69662d"
  },
  {
    "url": "JavaScript/string.html",
    "revision": "a2b29c1fd72793f03d19f18554eb1553"
  },
  {
    "url": "Node/index.html",
    "revision": "1faee86f26c08f047fc107ba7dbbc598"
  },
  {
    "url": "Python/index.html",
    "revision": "eaa91daeac3882374958d8286bb89400"
  },
  {
    "url": "Python/函数.html",
    "revision": "00b9fc773d7e11feb3cdc07394c22174"
  },
  {
    "url": "SQL/index.html",
    "revision": "8d89c60aeb80545273fe4a9e1debf520"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
