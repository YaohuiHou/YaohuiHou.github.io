(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{709:function(e,n,t){"use strict";t.r(n);var s=t(1),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"vue-ie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-ie","aria-hidden":"true"}},[e._v("#")]),e._v(" vue - IE")]),t("p",[e._v("vue 兼容 ie9+，在开发 ie 过程中兼容做的好好的，可以说吃着火锅唱着歌，艹蛋的麻匪就把你截了！在 ie 下打开页面没有任何数据请求，查看控制台又发现突然之间好了，关掉刷新又奇葩的没有数据。心中一万个曹尼玛奔腾着。。。")]),t("h4",{attrs:{id:"排查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#排查","aria-hidden":"true"}},[e._v("#")]),e._v(" 排查")]),t("ul",[t("li",[e._v("铁定百度一下你就知道")])]),t("p",[e._v("百度给你说：ie 下，console 只有在 bug 模式下才会创建，生产模式下并不认识这个玩意儿，就报错，直接阻断后面的。")]),t("ul",[t("li",[e._v("全局去掉 console")])]),t("p",[e._v("自己的代码在上线前所有 console 都已经干掉了，可是最后打包后的 vendor.js 是人家 vue 自己生成的，在 build 文件中直接删掉麻烦还可能删错，所以只能在代码中关掉 vue 自己的 console")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("/*\n   webpack.config.js 的 plugins 里面加上\n   drop_debugger: true,\n   drop_console: true\n*/\n\nnew webpack.optimize.UglifyJsPlugin({\n  compress:{\n    warnings: false,\n    drop_debugger: true,\n    drop_console: true\n  }\n})\n")])])])}],!1,null,null,null);n.default=r.exports}}]);