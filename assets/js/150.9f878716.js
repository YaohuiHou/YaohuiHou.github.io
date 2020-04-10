(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{379:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),n("p",[t._v("less 的注释可以有两种。")]),n("p",[t._v("第一种注释：模板注释")]),t._m(18),n("p",[t._v("因为 less 要转换为 css才能在浏览器中使用。转换成 css 之后，这种注释会被删除（毕竟 css 不识别这种注释）。")]),n("p",[t._v("第二种注释：CSS 注释语法")]),t._m(19),n("p",[t._v("总结：如果在less中写注释，我们推荐写第一种注释。除非是类似于版权等内容，就采用第二种注释。")]),t._m(20),t._m(21),n("p",[t._v("（1）在less文件中，定义一个变量的格式：")]),t._m(22),n("p",[t._v("（2）同时，在 less 文件中引用这个变量。")]),n("p",[t._v("最终，less文件的完整版代码如下：")]),n("p",[t._v("main.less：")]),t._m(23),n("p",[t._v("我们将上面的less文件编译为 css 文件后（下一段讲less文件的编译），自动生成的代码如下：")]),n("p",[t._v("main.css：")]),t._m(24),t._m(25),n("p",[t._v("在 css 中经常会用到子代选择器，效果可能是这样的：")]),t._m(26),n("p",[t._v("上面的代码嵌套了很多层，写起来很繁琐。可如果用 less 的嵌套语法来写这段代码，就比较简洁。")]),n("p",[t._v("嵌套的举例如下：")]),n("p",[t._v("main.less:")]),t._m(27),n("p",[t._v("将上面的less文件编译为 css 文件后，自动生成的代码如下：")]),n("p",[t._v("main.css")]),t._m(28),t._m(29),t._m(30),n("p",[t._v("（1）在 less 文件中定义一个类：（将重复的代码放到自定义的类中）")]),t._m(31),t._m(32),n("p",[t._v("（2）在 less 文件中引用上面这个类：")]),t._m(33),n("p",[t._v("上方代码中，header 中的引用没有带参数，表示参数为缺省值； footer 中的引用带了参数，那就用这个参数。")]),t._m(34),n("p",[t._v("在开发阶段，我们可以将不同的样式放到多个文件中，最后通过@import 的方式合并。意思就是，当出现多个 less 文件时，怎么引用它们。")]),n("p",[t._v("这个很好理解， css 文件可以有很多个，less文件也可以有很多个。")]),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),n("p",[t._v("main.css：")]),t._m(41),n("p",[t._v("将 上面的main.less 编译为 main.css之后，自动生成的代码如下：")]),t._m(42),t._m(43),n("p",[t._v("less 里有一些内置的函数，这里讲一下 lighten 和 darken 这两个内置函数。")]),n("p",[t._v("main.less:")]),t._m(44),n("p",[t._v("将 上面的 main.less 编译为 main.css 之后，自动生成的代码如下：")]),n("p",[t._v("main.css：")]),t._m(45),n("p",[t._v("如果还有什么不懂的，可以看 api 文档，在上面的第二段附上了链接。")]),t._m(46),t._m(47),n("p",[t._v("产品上线后，当然是使用做法一，因为做法二会多出编译的时间。")]),n("p",[t._v("平时开发或演示demo的时候可以用做法二。")]),n("p",[t._v("这一段，我们讲一下做法二，其实是浏览器在本地在线地把 less 文件转换为 css 文件。")]),n("p",[t._v("（1）在 less 官网下载 less.js 文件：")]),t._m(48),n("p",[t._v("把下载好的文件放在工程文件的lib文件夹里：")]),t._m(49),n("p",[t._v("（2）在 index.html 中引入 less.js 和我们自己写的  main.less。位置如下：")]),t._m(50),n("p",[t._v("copy 红框那部分的代码如下：")]),t._m(51),n("p",[t._v("我们可以在打开的网页中，通过控制台看到效果：")]),t._m(52),n("p",[t._v("注意，我们要在服务器中打开 html 文件，否则，看不到效果。")]),n("p",[t._v("这里也告诉了我们：")]),t._m(53),n("p",[t._v("工程文件：（工程文件中，我引用的less.js版本是 2.5.3）")]),t._m(54),n("p",[t._v("参考链接：")]),t._m(55),t._m(56),n("p",[t._v("less 的编译指的是将写好的 less 文件 生成为 css 文件。")]),n("p",[t._v("less 的编译，依赖于 NodeJS 环境。因此，我们需要先安装 NodeJS。")]),t._m(57),t._m(58),t._m(59),n("p",[t._v("一路 next 进行安装。")]),n("p",[t._v("安装完成后，配置环境变量：")]),t._m(60),n("p",[t._v("PS：我发现，我安装的 node.js v8.9.4 版本，已经自动添加了环境变量。")]),t._m(61),t._m(62),t._m(63),t._m(64),t._m(65),t._m(66),n("p",[t._v("如果你用的是 linux 系统，可以输入下面的命令安装：")]),t._m(67),t._m(68),t._m(69),t._m(70),n("p",[t._v("想学习"),n("font",{attrs:{color:"#0000ff"}},[n("strong",[t._v("代码之外的技能")])]),t._v("？不妨关注我的微信公众号："),n("strong",[t._v("千古壹号")]),t._v("（id："),n("code",[t._v("qianguyihao")]),t._v("）。")],1),n("p",[t._v("扫一扫，你将发现另一个全新的世界，而这将是一场美丽的意外：")]),t._m(71)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"less详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#less详解","aria-hidden":"true"}},[this._v("#")]),this._v(" Less详解")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("本文最初发表于"),s("a",{attrs:{href:"http://www.cnblogs.com/smyhvae/p/8476602.html",target:"_blank",rel:"noopener noreferrer"}},[this._v("博客园")]),this._v("，并在"),s("a",{attrs:{href:"https://github.com/qianguyihao/Web",target:"_blank",rel:"noopener noreferrer"}},[this._v("GitHub")]),this._v("上持续更新"),s("strong",[this._v("前端的系列文章")]),this._v("。欢迎在GitHub上关注我，一起入门和进阶前端。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("以下是正文。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"css-预处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-预处理器","aria-hidden":"true"}},[this._v("#")]),this._v(" CSS 预处理器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"为什么要有-css-预处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有-css-预处理器","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么要有 CSS 预处理器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("CSS基本上是设计师的工具，不是程序员的工具")]),this._v("。在程序员的眼里，CSS是很头痛的事情，它并不像其它程序语言，比如说PHP、Javascript等等，有自己的变量、常量、条件语句以及一些编程语法，只是一行行单纯的属性描述，写起来相当的费事，而且代码难以组织和维护。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("很自然的，有人就开始在想，能不能给CSS像其他程序语言一样，加入一些编程元素，让CSS能像其他程序语言一样可以做一些预定的处理。这样一来，就有了“"),s("strong",[this._v("CSS预处器")]),this._v("（CSS Preprocessor）”。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"什么是-css-预处理器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-css-预处理器","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是 CSS 预处理器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("是 CSS 语言的"),s("strong",[this._v("超集")]),this._v("，比CSS更丰满。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("CSS 预处理器定义了一种新的语言，其基本思想是："),s("strong",[this._v("用一种专门的编程语言，为CSS增加了一些编程的特性")]),this._v("，将CSS作为目标生成文件，然后开发者就只要使用这种语言进行编码工作。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("通俗的说，"),s("strong",[this._v("CSS预处理器用一种专门的编程语言，进行Web页面样式设计，然后再编译成正常的CSS文件")]),this._v("，以供项目使用。CSS预处理器为CSS增加一些编程的特性，无需考虑浏览器的兼容性问题，例如你可以在CSS中使用变量、简单的逻辑程序、函数等等在编程语言中的一些基本特性，可以让你的CSS更加简洁、适应性更强、可读性更佳，更易于代码的维护等诸多好处。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("CSS预处理器技术已经非常成熟，而且也涌现出了很多种不同的CSS预处理器语言，比如说："),s("strong",[this._v("Sass（SCSS）、LESS")]),this._v("、Stylus、Turbine、Swithch CSS、CSS Cacheer、DT CSS等。如此之多的CSS预处理器，那么“我应该选择哪种CSS预处理器？”也相应成了最近网上的一大热门话题，在Linkedin、Twitter、CSS-Trick、知乎以及各大技术论坛上，很多人为此争论不休。相比过去我们对是否应该使用CSS预处理器的话题而言，这已经是很大的进步了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("到目前为止，在众多优秀的CSS预处理器语言中就属"),s("strong",[this._v("Sass、LESS和Stylus最优秀")]),this._v("，讨论的也多，对比的也多。本文将分别从他们产生的背景、安装、使用语法、异同等几个对比之处向你介绍这三款CSS预处理器语言。相信前端开发工程师会做出自己的选择——我要选择哪款CSS预处理器。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"less-的介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#less-的介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" less 的介绍")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("less 是一款比较流行的"),s("strong",[this._v("预处理 CSS")]),this._v("，支持变量、混合、函数、嵌套、循环等特点。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[s("a",{attrs:{href:"http://lesscss.org/",target:"_blank",rel:"noopener noreferrer"}},[this._v("官网")])])]),s("li",[s("p",[s("a",{attrs:{href:"http://lesscss.cn/",target:"_blank",rel:"noopener noreferrer"}},[this._v("中文网（less 文档）")])])]),s("li",[s("p",[s("a",{attrs:{href:"https://less.bootcss.com/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Bootstrap网站的 less 文档")])])]),s("li",[s("p",[this._v("推荐文章："),s("a",{attrs:{href:"http://www.w3cplus.com/css/less",target:"_blank",rel:"noopener noreferrer"}},[this._v("http://www.w3cplus.com/css/less")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"less-的语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#less-的语法","aria-hidden":"true"}},[this._v("#")]),this._v(" less 的语法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释","aria-hidden":"true"}},[this._v("#")]),this._v(" 注释")])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("  // 模板注释 这里的注释转换成CSS后将会删除\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-less"}},[s("code",[this._v("\n"),s("span",{attrs:{class:"token comment"}},[this._v("/* CSS 注释语法 转换为CSS后让然保留 */")]),this._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"定义变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 定义变量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们可以把"),s("strong",[this._v("重复使用或经常修改的值")]),this._v("定义为变量，在需要使用的地方引用这个变量即可。这样可以避免很多重复的工作量。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-less"}},[n("code",[t._v("@变量名"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 变量值"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),n("span",{attrs:{class:"token comment"}},[t._v("//格式")]),t._v("\n\n"),n("span",{attrs:{class:"token variable"}},[t._v("@bgColor"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #f5f5f5"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),n("span",{attrs:{class:"token comment"}},[t._v("//格式举例")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-less"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 定义变量")]),t._v("\n"),n("span",{attrs:{class:"token variable"}},[t._v("@bgColor"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #f5f5f5"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 引用变量")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v("body")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("background-color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("@bgColor")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v("body")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("background-color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f5f5f5"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用嵌套"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用嵌套","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用嵌套")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1024px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".container > .row")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".container > .row a")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f40"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".container > .row a:hover")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f50"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-less"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("@containerWidth")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token selector"}},[t._v("> .row")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token selector"}},[t._v("a")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f40"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),n("span",{attrs:{class:"token selector"}},[t._v("&:hover")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f50"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{attrs:{class:"token selector"}},[t._v(".hello")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token property"}},[t._v("background-color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #00f"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1024px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".container > .row")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".container > .row a")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f40"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".container > .row a:hover")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f50"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".container div")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".container div .hello")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("background-color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #00f"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"mixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixin","aria-hidden":"true"}},[this._v("#")]),this._v(" Mixin")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Mixin 的作用是把"),s("strong",[this._v("重复的代码")]),this._v("放到一个类当中，每次只要引用类名，就可以引用到里面的代码了，非常方便。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-less"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("/* 定义一个类 */")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".roundedCorners("),n("span",{attrs:{class:"token variable"}},[t._v("@radius")]),t._v(": 5px)")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("-moz-border-radius")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("@radius")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("-webkit-border-radius")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("@radius")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("@radius")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("上方代码中，第一行里面，括号里的内容是参数：这个参数是"),s("strong",[this._v("缺省值")]),this._v("。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-less"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v("#header")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token mixin-usage function"}},[t._v(".roundedCorners")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v("#footer")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token mixin-usage function"}},[t._v(".roundedCorners")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("10px"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import","aria-hidden":"true"}},[this._v("#")]),this._v(" Import")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("（1）定义一个被引用的less文件，名为"),s("code",[this._v("_button1.less")]),this._v("：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("_button1.less:")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-less"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v(".btn")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("line-height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("@btnColor")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("PS1：被引用的less文件，我们习惯在前面加"),s("strong",[this._v("下划线")]),this._v("，表示它是"),s("strong",[this._v("部分文件")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("PS2："),s("code",[this._v("_button1.less")]),this._v("里可以引用"),s("code",[this._v("main.css")]),this._v("里的自定义变量。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("（2）在 "),s("code",[this._v("main.css")]),this._v(" 中引用上面的 "),s("code",[this._v("_button1.less")]),this._v("：（代码的第二行）")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-less"}},[n("code",[n("span",{attrs:{class:"token variable"}},[t._v("@btnColor"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" red"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{attrs:{class:"token variable"}},[t._v("@import")]),t._v(" "),n("span",{attrs:{class:"token url"}},[t._v("url(`_button1.less:')")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),n("span",{attrs:{class:"token comment"}},[t._v("//这里的路径写的是相对路径")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v("body")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1024px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v(".btn")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("line-height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1024px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"内置函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 内置函数")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-less"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("background-color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("lighten")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("#000"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10%"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),n("span",{attrs:{class:"token comment"}},[t._v("// 让黑色变亮 10%")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("darken")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("#fff"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 10%"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("               "),n("span",{attrs:{class:"token comment"}},[t._v("// 让白色变暗 10%")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v("body")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("background-color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #1a1a1a"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #e6e6e6"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"在-index-html中直接引用-less-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-index-html中直接引用-less-js","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 index.html中直接引用 less.js")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("做法一：写完 less文件后，将其编译为 css 文件，然后在代码中引用css文件。")])]),s("li",[s("p",[this._v("做法二：在代码中直接用引用 less 文件。")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180226_2131.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180226_2143.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180226_2145.png",alt:""}})])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("    "),n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token tag"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet/less"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{attrs:{class:"token attr-value"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("../main.less"),n("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180226_2150.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("不提倡将 less 引入页面，因为 less 需要编译，因此你就需要再引入一个less.js, 多了一个HTTP 请求，同时当浏览器禁用了 js 你的样式就不起作用了，less 编译应该在服务端或使用 grunt 自动编译。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"http://download.csdn.net/download/smyhvae/10260410",target:"_blank",rel:"noopener noreferrer"}},[this._v("2018-02-27-LessDemo.rar")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://www.zhihu.com/question/26075208",target:"_blank",rel:"noopener noreferrer"}},[this._v("知乎 | less文件如何引入页面")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"less-的编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#less-的编译","aria-hidden":"true"}},[this._v("#")]),this._v(" less 的编译")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1、安装-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、安装-node-js","aria-hidden":"true"}},[this._v("#")]),this._v(" 1、安装 Node.js")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("去 "),s("a",{attrs:{href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Node.js")]),this._v("的官网下载安装包：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180226_2153.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 path 变量中追加安装路径："),s("code",[this._v(";C:\\Program Files\\nodejs")]),this._v("。重启资源管理器，即可生效。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 cmd 命令行，输入"),s("code",[this._v("node.exe -v")]),this._v("，可以查看 node.js 的版本。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2、安装-less-的编译环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装-less-的编译环境","aria-hidden":"true"}},[this._v("#")]),this._v(" 2、安装 less 的编译环境")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("将 "),s("a",{attrs:{href:"http://download.csdn.net/download/smyhvae/10260414",target:"_blank",rel:"noopener noreferrer"}},[this._v("npm.zip")]),this._v(" 解压，将解压后的文件拷贝到路径"),s("code",[this._v("C:\\Users\\smyhvae\\AppData\\Roaming\\npm")]),this._v("下：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180226_2212.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后重启资源管理器（或者重启电脑）。在 cmd 中输入 "),s("code",[this._v("lessc")]),this._v("，如果能看到下面的效果，说明 less编译环境安装成功：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/20180226_2217.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("    "),s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -g "),s("span",{attrs:{class:"token function"}},[this._v("less")]),this._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3、将-less-文件编译为-css-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、将-less-文件编译为-css-文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 3、将 less 文件编译为 css 文件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 less 所在的路径下，输入 "),s("code",[this._v("lessc xxx.less")]),this._v("，即可编译成功。或者，如果输入 "),s("code",[this._v("lessc xxx.less > ..\\xx.css")]),this._v("，表示输出到指定路径。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"我的公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#我的公众号","aria-hidden":"true"}},[this._v("#")]),this._v(" 我的公众号")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"http://img.smyhvae.com/2016040102.jpg",alt:""}})])}],!1,null,null,null);s.default=e.exports}}]);