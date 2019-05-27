(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{706:function(t,e,s){"use strict";s.r(e);var r=s(1),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),s("p",[t._v("字符串是 Python 中最常用的数据类型。我们可以使用引号( ' 或 \" )来创建字符串。")]),t._m(2),t._m(3),s("p",[t._v("定义：所谓“下标”，就是编号。通过这个编号就能找到相应的存储空间，下标从 0 开始")]),t._m(4),t._m(5),s("p",[t._v("定义：切片是指对操作的对象截取一部分的操作")]),s("p",[t._v("切片语法： [ 起始 : 结束 : 步长 ]")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),s("p",[t._v("检索 str 中是否包含某个值，存在返回索引值，否则返回-1")]),t._m(11),t._m(12),t._m(13),s("p",[t._v("跟 find()方法一样，只不过如果 str 不在 mystr 中会报一个异常")]),t._m(14),t._m(15),t._m(16),s("p",[t._v("返回 str 在 start 和 end 之间 在 mystr 里面出现的次数")]),t._m(17),t._m(18),t._m(19),s("p",[t._v("把 mystr 中的 str1 替换成 str2,如果 count 指定，则替换不超过 count 次.")]),t._m(20),t._m(21),t._m(22),s("p",[t._v("split()通过指定分隔符对字符串进行切片，如果参数 num 有指定值，则仅分隔 num+1 个子字符串")]),t._m(23),t._m(24),t._m(25),s("p",[t._v("把字符串的第一个字符大写")]),t._m(26),s("p",[t._v("把字符串的每个单词首字母大写")]),t._m(27),s("p",[t._v("检查字符串是否是以 obj 开头, 是则返回 True，否则返回 False")]),t._m(28),s("p",[t._v("检查字符串是否以 obj 结束，如果是返回 True,否则返回 False.")]),t._m(29),s("p",[t._v("转换 mystr 中所有大写字符为小写")]),t._m(30),s("p",[t._v("转换 mystr 中所有小写字符为大写")]),t._m(31),s("p",[t._v("删除 mystr 字符串两端的空白字符")]),t._m(32),s("p",[t._v("Python 数字数据类型用于存储数值。")]),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),t._m(38),t._m(39),s("ClientOnly",[s("livere")],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据类型","aria-hidden":"true"}},[this._v("#")]),this._v(" 数据类型")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串","aria-hidden":"true"}},[this._v("#")]),this._v(" 字符串")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("str1 = 'Hello World!'\nstr2 = \"string\"\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"下标索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下标索引","aria-hidden":"true"}},[this._v("#")]),this._v(" 下标索引")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("str1 = 'Hello World!'\n\nprint('str1[0]:',str1[0])\n\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"切片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切片","aria-hidden":"true"}},[this._v("#")]),this._v(" 切片")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v('注意：选取的区间属于左闭右开型，即从"起始"位开始，到"结束"位的前一位结束（不包含结束位本身)。')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("如果第一个索引为 0，可以省略")]),e("li",[this._v("支持倒数切片，s[-1]取倒数第一个元素")]),e("li",[this._v("只是通过步长截取可以省略前面两个下标，s[::2]每 2 个取一个")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("str = '0123456789'\n\n# 截取下标1到4的数\nprint(str[1:4])  # 123\n\n# 截取前3位\nprint(str[:3])  # 012\n\n# 截取后3位\nprint(str[-3:])  # 789\n\n# 前5个数，每2个取一个\nprint(str[:5:2])  # 024\n\n# 所有数，每5个取一个\nprint(::5)   # 05\n\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"字符串常见操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字符串常见操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 字符串常见操作")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"find"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#find","aria-hidden":"true"}},[this._v("#")]),this._v(" find")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("mystr.find(str, start=0, end=len(mystr))")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("mystr = 'Hello World!'\n\nmystr.find('Hello')  # 0\nmystr.find('W',0,10)  # 6\n\nmystr.find('hello')  # -1\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"index"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#index","aria-hidden":"true"}},[this._v("#")]),this._v(" index")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("mystr.index(str, start=0, end=len(mystr))")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("mystr = 'Hello World!'\n\nmystr.index('Hello')  # 0\nmystr.index('l',6,10)  # 9\n\nmystr.index('hello')  # 报错了！！\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"count"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#count","aria-hidden":"true"}},[this._v("#")]),this._v(" count")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("mystr.count(str, start=0, end=len(mystr))")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("mystr = 'Hello World!'\n\nmystr.count('l')  # 3\nmystr.count('c')  # 0\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"replace"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replace","aria-hidden":"true"}},[this._v("#")]),this._v(" replace")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("mystr.replace(str1, str2, mystr.count(str1))")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("mystr = 'Hello World! ha ha'\n\nmystr.replace('ha','HA')   # 'Hello World! HA HA'\nmystr.replace('ha','HA',1)  # 'Hello World! HA ha'\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"split"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#split","aria-hidden":"true"}},[this._v("#")]),this._v(" split")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v('mystr.split(str="", num=string.count(str))')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("mystr = 'Hello World! ha ha'\n\nmystr.split(' ')  # ['Hello', 'World!', 'ha', 'ha']\n\nmystr.split(' ',2)  # ['Hello', 'World!', 'haha']\n\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"capitalize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#capitalize","aria-hidden":"true"}},[this._v("#")]),this._v(" capitalize")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#title","aria-hidden":"true"}},[this._v("#")]),this._v(" title")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"startswith"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#startswith","aria-hidden":"true"}},[this._v("#")]),this._v(" startswith")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"endswith"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#endswith","aria-hidden":"true"}},[this._v("#")]),this._v(" endswith")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"lower"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lower","aria-hidden":"true"}},[this._v("#")]),this._v(" lower")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"upper"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upper","aria-hidden":"true"}},[this._v("#")]),this._v(" upper")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"upper-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upper-2","aria-hidden":"true"}},[this._v("#")]),this._v(" upper")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"数字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数字","aria-hidden":"true"}},[this._v("#")]),this._v(" 数字")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("num1 = 1\nnum2 = 10\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("整型(Int) - 通常被称为是整型或整数，是正或负整数，不带小数点。Python3 整型是没有限制大小的，可以当作 Long 类型使用，所以 Python3 没有 Python2 的 Long 类型。")]),e("li",[this._v("浮点型(float) - 浮点型由整数部分与小数部分组成，浮点型也可以使用科学计数法表示（2.5e2 = 2.5 x 102 = 250）")]),e("li",[this._v("复数( (complex)) - 复数由实数部分和虚数部分构成，可以用 a + bj,或者 complex(a,b)表示， 复数的实部 a 和虚部 b 都是浮点型。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"布尔值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#布尔值","aria-hidden":"true"}},[this._v("#")]),this._v(" 布尔值")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列表","aria-hidden":"true"}},[this._v("#")]),this._v(" 列表")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"元组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元组","aria-hidden":"true"}},[this._v("#")]),this._v(" 元组")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"字典"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字典","aria-hidden":"true"}},[this._v("#")]),this._v(" 字典")])}],!1,null,null,null);e.default=a.exports}}]);