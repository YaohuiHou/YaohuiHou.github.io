(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{54:function(e,n,t){},58:function(e,n,t){"use strict";var r=t(54);t.n(r).a},67:function(e,n,t){"use strict";t.r(n);t(58);var r=t(0),a=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数","aria-hidden":"true"}},[e._v("#")]),e._v(" 函数")]),t("h2",{attrs:{id:"map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map","aria-hidden":"true"}},[e._v("#")]),e._v(" map")]),t("p",[e._v("map() 根据提供的函数对指定序列做映射")]),t("blockquote",[t("p",[t("b",[e._v("语法：")]),t("br"),e._v("map(function, iterable, ...)")])]),t("ul",[t("li",[e._v("function 函数")]),t("li",[e._v("iterable 一个或者多个序列")])]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(">>>def square(x) :            # 计算平方数\n...     return x ** 2\n...\n>>> map(square, [1,2,3,4,5])   # 计算列表各个元素的平方\n[1, 4, 9, 16, 25]\n>>> map(lambda x: x ** 2, [1, 2, 3, 4, 5])  # 使用 lambda 匿名函数\n[1, 4, 9, 16, 25]\n\n# 提供了两个列表，对相同位置的列表数据进行相加\n>>> map(lambda x, y: x + y, [1, 3, 5, 7, 9], [2, 4, 6, 8, 10])\n[3, 7, 11, 15, 19]\n\n# 将数字转化为字符串\n>>> list(map(str, [1, 2, 3, 4, 5, 6, 7, 8, 9]))\n['1', '2', '3', '4', '5', '6', '7', '8', '9']\n\n")])]),t("h2",{attrs:{id:"reduce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reduce","aria-hidden":"true"}},[e._v("#")]),e._v(" reduce")]),t("p",[e._v("reduce()函数会对参数序列中元素进行累积。")]),t("p",[e._v("函数将一个数据集合（列表、元组等）中的所有数据进行下列操作：用传给 reduce 中的函数 function（有两个参数）先对集合中的第 1、2 个元素进行操作，得到的结果再与第三个数据用 function 函数运算，最后得到一个结果。")]),t("blockquote",[t("p",[t("b",[e._v("语法：")]),t("br"),e._v("reduce(function, iterable[, initializer])")])]),t("ul",[t("li",[e._v("function --- 函数，两个参数")]),t("li",[e._v("iterable --- 可迭代对象")]),t("li",[e._v("initializer --- 可选，初始参数")])]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(">>>def add(x, y) :            # 两数相加\n...     return x + y\n...\n>>> reduce(add, [1,2,3,4,5])   # 计算列表和：1+2+3+4+5\n15\n>>> reduce(lambda x, y: x+y, [1,2,3,4,5])  # 使用 lambda 匿名函数\n15\n\n")])]),t("h2",{attrs:{id:"filter"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filter","aria-hidden":"true"}},[e._v("#")]),e._v(" filter")]),t("p",[e._v("filter()函数用于过滤序列，过滤不符合条件的元素，返回符合条件的元素组成新列表。")]),t("p",[e._v("函数接收两个参数，第一个是函数，第二个是序列，序列的每个元素作为参数传递给函数进行判断，返回 True 或 False，最后返回 True 的元素放到新列表中。")]),t("blockquote",[t("p",[t("b",[e._v("语法：")]),t("br"),e._v("filter(function, iterable)")])]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# 过滤列表中的奇数\ndef is_odd(n):\n    return n % 2 == 1\nnewlist1 = filter(is_odd, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])\nprint(newlist1)\n# [1, 3, 5, 7, 9]\n\n\n\n# 过滤1~100中平方根是整数的数\nimport math\ndef is_sqr(x):\n    return math.sqr(x) % 1 == 0\nnewList2 = fliter(is_sqr,range(1,101))\nprint(newList2)\n# [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\n\n")])])])}],!1,null,null,null);n.default=a.exports}}]);