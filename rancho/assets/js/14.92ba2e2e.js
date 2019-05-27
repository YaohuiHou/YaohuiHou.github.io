(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{170:function(t,e,n){},326:function(t,e,n){"use strict";var r=n(170);n.n(r).a},708:function(t,e,n){"use strict";n.r(e);n(326);var r=n(1),i=Object(r.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._m(1),n("p",[t._v("map() 根据提供的函数对指定序列做映射")]),t._m(2),t._m(3),t._m(4),t._m(5),n("p",[t._v("reduce()函数会对参数序列中元素进行累积。")]),n("p",[t._v("函数将一个数据集合（列表、元组等）中的所有数据进行下列操作：用传给 reduce 中的函数 function（有两个参数）先对集合中的第 1、2 个元素进行操作，得到的结果再与第三个数据用 function 函数运算，最后得到一个结果。")]),t._m(6),t._m(7),t._m(8),t._m(9),n("p",[t._v("filter()函数用于过滤序列，过滤不符合条件的元素，返回符合条件的元素组成新列表。")]),n("p",[t._v("函数接收两个参数，第一个是函数，第二个是序列，序列的每个元素作为参数传递给函数进行判断，返回 True 或 False，最后返回 True 的元素放到新列表中。")]),t._m(10),t._m(11),t._m(12),n("ClientOnly",[n("livere")],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 函数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"map"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#map","aria-hidden":"true"}},[this._v("#")]),this._v(" map")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("b",[this._v("语法：")]),e("br"),this._v("map(function, iterable, ...)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("function 函数")]),e("li",[this._v("iterable 一个或者多个序列")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(">>>def square(x) :            # 计算平方数\n...     return x ** 2\n...\n>>> map(square, [1,2,3,4,5])   # 计算列表各个元素的平方\n[1, 4, 9, 16, 25]\n>>> map(lambda x: x ** 2, [1, 2, 3, 4, 5])  # 使用 lambda 匿名函数\n[1, 4, 9, 16, 25]\n\n# 提供了两个列表，对相同位置的列表数据进行相加\n>>> map(lambda x, y: x + y, [1, 3, 5, 7, 9], [2, 4, 6, 8, 10])\n[3, 7, 11, 15, 19]\n\n# 将数字转化为字符串\n>>> list(map(str, [1, 2, 3, 4, 5, 6, 7, 8, 9]))\n['1', '2', '3', '4', '5', '6', '7', '8', '9']\n\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"reduce"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reduce","aria-hidden":"true"}},[this._v("#")]),this._v(" reduce")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("b",[this._v("语法：")]),e("br"),this._v("reduce(function, iterable[, initializer])")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("function --- 函数，两个参数")]),e("li",[this._v("iterable --- 可迭代对象")]),e("li",[this._v("initializer --- 可选，初始参数")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(">>>def add(x, y) :            # 两数相加\n...     return x + y\n...\n>>> reduce(add, [1,2,3,4,5])   # 计算列表和：1+2+3+4+5\n15\n>>> reduce(lambda x, y: x+y, [1,2,3,4,5])  # 使用 lambda 匿名函数\n15\n\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter","aria-hidden":"true"}},[this._v("#")]),this._v(" filter")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("b",[this._v("语法：")]),e("br"),this._v("filter(function, iterable)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# 过滤列表中的奇数\ndef is_odd(n):\n    return n % 2 == 1\nnewlist1 = filter(is_odd, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])\nprint(newlist1)\n# [1, 3, 5, 7, 9]\n\n\n\n# 过滤1~100中平方根是整数的数\nimport math\ndef is_sqr(x):\n    return math.sqr(x) % 1 == 0\nnewList2 = fliter(is_sqr,range(1,101))\nprint(newList2)\n# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"sorted"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sorted","aria-hidden":"true"}},[this._v("#")]),this._v(" sorted")])}],!1,null,null,null);e.default=i.exports}}]);