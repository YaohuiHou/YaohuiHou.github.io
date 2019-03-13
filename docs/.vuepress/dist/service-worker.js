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
    "revision": "8af8aee01758eeb1ec2be2bc2792f0ff"
  },
  {
    "url": "article/index.html",
    "revision": "de23f6a7bbed0251d96b42c6175a8fe3"
  },
  {
    "url": "article/test1/index.html",
    "revision": "e8ba08eadba443868c472cffd779c188"
  },
  {
    "url": "article/test2/index.html",
    "revision": "31c36782eef5d3c34b459140dc3b5760"
  },
  {
    "url": "assets/css/0.styles.691ed5d6.css",
    "revision": "7658bde6c5502c02f69c116ac89b25d6"
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
    "url": "assets/js/15.4fede0b3.js",
    "revision": "fb58980614ac0c860481cb54dc9d05e2"
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
    "url": "assets/js/app.3ad38085.js",
    "revision": "798e420b3ddd3b12339ad88e34d6901f"
  },
  {
    "url": "Html+CSS/index.html",
    "revision": "f03034f3555d83a3e177d91d0cf1e279"
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
    "revision": "576d4cfc402d69a1428fa13fa0cd5085"
  },
  {
    "url": "JavaScript/array.html",
    "revision": "47a1dbfe73edb291c6b554c53a5a1587"
  },
  {
    "url": "JavaScript/index.html",
    "revision": "87458128548365f643548c18a2d0098f"
  },
  {
    "url": "JavaScript/object.html",
    "revision": "15d244b8a77e35268dc5e53e6fb8fae6"
  },
  {
    "url": "JavaScript/string.html",
    "revision": "bc0464f3769a6923d4abc1911e548403"
  },
  {
    "url": "Node/index.html",
    "revision": "9ece85c4d170ae226211718e7008ac9b"
  },
  {
    "url": "Python/index.html",
    "revision": "724bc4b44a647538cad2706deb235182"
  },
  {
    "url": "Python/函数.html",
    "revision": "a5f16b6ba29479da4c15b830050db0d2"
  },
  {
    "url": "SQL/index.html",
    "revision": "1a2691a233705e442b2b800081da0c6d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
