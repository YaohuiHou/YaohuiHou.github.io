# axios

axios 数据请求是前端开发必不可少的一部分，由于公司业务要求，需要兼容到 IE9+，前后端分离接口跨域处理一般都在用 CORS 通信解决，解决 IE 问题只能使用 jsonp，在这里做一个总结：

[axios 地址：https://github.com/axios/axios](https://github.com/axios/axios)

## Browser Support

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Latest ✔                                                                                 | Latest ✔                                                                                    | Latest ✔                                                                                 | Latest ✔                                                                              | Latest ✔                                                                           | 8+ ✔                                                                                                                         |

[![Browser Matrix](https://saucelabs.com/open_sauce/build_matrix/axios.svg)](https://saucelabs.com/u/axios)

- npm 安装

```
$ npm install axios
```

axios 官网说明是兼容到 ie8 的，不过是基于 Promess 实现的，所以 ie 兼容会有问题；

- 1 安装 babel-polyfill [polyfill](https://babeljs.io/docs/usage/polyfill/)

```
$ npm install babel-polyfill
```

- 2 修改 build 配置环境 webpack.base.conf.js

![](https://github.com/YaohuiHou/Frontend-Study/blob/master/vue/axios/img/WechatIMG128.jpeg)

- 3 增加 axios 的 jsonp 方法

```
$ npm install axios-jsonp
```

这是重新启动使用 jsonp 方式请求就可以兼容到 ie8 了,在需要的地方调用

```
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
```

axios 请求：

```
  axios({
      url: url,
      adapter: jsonpAdapter,
      params: {}
  })
  .then()
  .catch();
```

在这里用到了 babel 解决兼容问题，axios-jsonp 做了 jsonp 请求扩展；
