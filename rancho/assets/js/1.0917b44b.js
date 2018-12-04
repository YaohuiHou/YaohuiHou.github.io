(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{52:function(t,s,a){},54:function(t,s,a){"use strict";var n=a(52);a.n(n).a},56:function(t,s,a){"use strict";a.r(s);a(54);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"字符串-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串-string","aria-hidden":"true"}},[t._v("#")]),t._v(" 字符串 String")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("String 全局对象是一个用于字符串或一个字符序列的构造函数。")])]),a("h2",{attrs:{id:"charat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#charat","aria-hidden":"true"}},[t._v("#")]),t._v(" charAt")]),a("p",[t._v("返回指定位置的字符，默认返回 ‘0’ 下标的字符"),a("span",{staticClass:"highlighted"},[t._v("test")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'这是一个测试字符串'")]),t._v("\nstr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("charAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 这")]),t._v("\nstr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("charAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 测")]),t._v("\nstr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("charAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ''")]),t._v("\n")])]),a("h2",{attrs:{id:"charcodeat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#charcodeat","aria-hidden":"true"}},[t._v("#")]),t._v(" charCodeAt")]),a("p",[t._v("返回指定位置字符的 Unicode 编码，默认返回 ‘0’ 下标的编码")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'这是一个测试字符串'")]),t._v("\nstr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("charCodeAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 36825")]),t._v("\nstr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("charCodeAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 27979")]),t._v("\nstr"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("charCodeAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// NaN")]),t._v("\n")])]),a("h2",{attrs:{id:"codepointat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#codepointat","aria-hidden":"true"}},[t._v("#")]),t._v(" codePointAt")]),a("p",[a("a",{attrs:{target:"_block",href:"http://es6.ruanyifeng.com/#docs/string#codePointAt"}},[t._v("codePointAt (es6) ")])]),a("p",[t._v("JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为 2 个字节。对于那些需要 4 个字节储存的字符（Unicode 码点大于 0xFFFF 的字符），JavaScript 会认为它们是两个字符。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'𠮷'")]),t._v("\n\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("charAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ''")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("charAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ''")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("charCodeAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 55362")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("charCodeAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 57271")]),t._v("\n")])]),a("p",[t._v("上面代码中，汉字“𠮷”（注意，这个字不是“吉祥”的“吉”）的码点是 0x20BB7，UTF-16 编码为 0xD842 0xDFB7（十进制为 55362 57271），需要 4 个字节储存。对于这种 4 个字节的字符，JavaScript 不能正确处理，字符串长度会误判为 2，而且 charAt 方法无法读取整个字符，charCodeAt 方法只能分别返回前两个字节和后两个字节的值。")]),a("p",[t._v("ES6 提供了 codePointAt 方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'𠮷a'")]),t._v("\n\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("codePointAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 134071")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("codePointAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 57271")]),t._v("\n\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("codePointAt")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 97")]),t._v("\n")])]),a("h2",{attrs:{id:"concat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concat","aria-hidden":"true"}},[t._v("#")]),t._v(" concat")]),a("p",[t._v("concat() 方法是用于链接两个或者多个字符串")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("stringObject.concat(stringX,stringX,...,stringX)\n")])]),a("p",[t._v("concat() 方法将把它的所有参数转换成字符串，然后按顺序连接到字符串 stringObject 的尾部，并返回连接后的字符串。请注意，stringObject 本身并没有被更改")]),a("p",[t._v("stringObject.concat() 与 Array.concat() 很相似。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token string"}},[t._v("'123a'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("concat")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'哈哈哈'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'woqu'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// "123a哈哈哈woqu"')]),t._v("\n")])]),a("h2",{attrs:{id:"indexof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#indexof","aria-hidden":"true"}},[t._v("#")]),t._v(" indexOf")]),a("p",[t._v("indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置")]),a("blockquote",[a("p",[a("b",[t._v("语法：")]),a("br"),t._v("stringObject.indexOf(searchvalue, fromindex)")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),a("th",[t._v("必填")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("searchvalue")]),a("td",[t._v("是")]),a("td",[t._v("规定需检索的字符串值")])]),a("tr",[a("td",[t._v("fromindex")]),a("td",[t._v("否")]),a("td",[t._v("规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1")])])])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),a("p",[t._v("注释：indexOf() 方法对大小写敏感！")]),a("p",[t._v("注释：如果要检索的字符串值没有出现，则该方法返回 -1。")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// 示例")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello World'")]),t._v("\n\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'World'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 6")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'world'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// -1")]),t._v("\n")])]),a("h2",{attrs:{id:"lastindexof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lastindexof","aria-hidden":"true"}},[t._v("#")]),t._v(" lastIndexOf")]),a("p",[t._v("lastIndexOf() 方法可返回某个指定的字符串值在字符串中最后出现的位置，在一个字符串中的指定位置从后向前搜索。")]),a("p",[t._v("用法同上 indexOf()")]),a("h2",{attrs:{id:"match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#match","aria-hidden":"true"}},[t._v("#")]),t._v(" match")]),a("p",[t._v("match() 是在字符串内检索指定的值，或找到一个或者多个正则表达式的匹配，类似 indexOf 和 lastIndexOf，但是他返回的是置顶的值，而不是位置")]),a("blockquote",[a("p",[a("b",[t._v("语法：")]),a("br"),t._v("stringObject.match(searchvalue) "),a("br"),t._v(" stringObject.match(regexp)")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),a("th",[t._v("必填")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("searchvalue")]),a("td",[t._v("是")]),a("td",[t._v("规定要检索的字符串值。")])]),a("tr",[a("td",[t._v("regexp")]),a("td",[t._v("是")]),a("td",[t._v("规定要匹配的模式的 RegExp 对象。如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。")])])])]),a("h4",{attrs:{id:"返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值","aria-hidden":"true"}},[t._v("#")]),t._v(" 返回值")]),a("p",[t._v("存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。")]),a("h4",{attrs:{id:"说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 说明")]),a("p",[t._v("未找到任何匹配的文本，match() 将返回 null，匹配需要用到正则表达式，可以查看详细的"),a("a",{attrs:{href:"http://www.runoob.com/regexp/regexp-tutorial.html",target:"_block"}},[t._v("正则教程")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello World'")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// [Hello]")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'12dssfd2df 12dd'")]),t._v("\nc"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\d/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ['1']")]),t._v("\nc"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\d+/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ['12']")]),t._v("\nc"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("match")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/\\d+/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ['12','2','12']")]),t._v("\n")])]),a("h2",{attrs:{id:"replace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replace","aria-hidden":"true"}},[t._v("#")]),t._v(" replace")]),a("p",[t._v("replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。")]),a("blockquote",[a("p",[a("b",[t._v("语法：")]),a("br"),t._v("stringObject.replace(regexp/substr,replacement)")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),a("th",[t._v("必填")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("regexp/substr")]),a("td",[t._v("是")]),a("td",[t._v("规定子字符串或要替换的模式的 RegExp 对象。"),a("br"),a("b",[t._v("请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。")])])]),a("tr",[a("td",[t._v("replacement")]),a("td",[t._v("是")]),a("td",[t._v("一个字符串值。规定了替换文本或生成替换文本的函数。")])])])]),a("h4",{attrs:{id:"返回值-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 返回值")]),a("p",[t._v("一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello World,Hello my Love'")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'你好'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// "你好 World,Hello my Love"')]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/Hello/g")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'你好'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// "你好 World,你好 my Love"')]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" t "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'JavaScript Much like Java'")]),t._v("\nt"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/JAVA/gi")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'java'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// "javaScript Much like java"')]),t._v("\n")])]),a("h2",{attrs:{id:"search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search","aria-hidden":"true"}},[t._v("#")]),t._v(" search")]),a("p",[t._v("search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。")]),a("blockquote",[a("p",[a("b",[t._v("语法：")]),a("br"),t._v("stringObject.search(regexp)")])]),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),a("p",[t._v("注释：search() 方法对大小写敏感！")]),a("p",[t._v("注释：如果没有找到任何匹配的子串，则返回 -1。")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'this is Javascript'")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("search")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/Javascript/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 8")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("search")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token regex"}},[t._v("/javascript/")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// -1")]),t._v("\n")])]),a("h2",{attrs:{id:"slice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slice","aria-hidden":"true"}},[t._v("#")]),t._v(" slice")]),a("p",[t._v("slice() 方法可截取字符串的某个部分，并以新的字符串返回被截取的部分。")]),a("blockquote",[a("p",[a("b",[t._v("语法：")]),a("br"),t._v("stringObject.slice(start,end)")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),a("th",[t._v("必填")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("start")]),a("td",[t._v("是")]),a("td",[t._v("要截取的开始下标。可以为负数，负数从字符串尾部开始算起。-1 为最后一个字符，-2 为倒数第二个字符")])]),a("tr",[a("td",[t._v("end")]),a("td",[t._v("否")]),a("td",[t._v("要截取的结束下标。无此参数则截取包括 start 到原字符串结尾的字符串。为负数从尾部开始算")])])])]),a("h4",{attrs:{id:"返回值-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 返回值")]),a("p",[t._v("一个新的字符串。包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'javascript'")]),t._v("\n\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("slice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ascript")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("slice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// asc")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("slice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ipt")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("slice")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ip")]),t._v("\n")])]),a("h2",{attrs:{id:"split"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#split","aria-hidden":"true"}},[t._v("#")]),t._v(" split")]),a("p",[t._v("split() 方法用于把一个字符串分割成字符串数组。")]),a("blockquote",[a("p",[a("b",[t._v("语法：")]),a("br"),t._v("stringObject.split(separator,howmany)")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),a("th",[t._v("必填")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("separator")]),a("td",[t._v("是")]),a("td",[t._v("字符串或正则表达式，从该参数指定的地方分割 stringObject。")])]),a("tr",[a("td",[t._v("howmany")]),a("td",[t._v("否")]),a("td",[t._v("该参数可指定返回的数组的最大长度")])])])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'javascript'")]),t._v("\n\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]')]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// ["j", "a", "v", "a"]')]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("''")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// ["j", "v", "script"]')]),t._v("\n\n"),a("span",{attrs:{class:"token string"}},[t._v("'2:3:4:5'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("':'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// ["2", "3", "4", "5"]')]),t._v("\n"),a("span",{attrs:{class:"token string"}},[t._v("'|a|b|c'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("split")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'|'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v('// ["", "a", "b", "c"]')]),t._v("\n")])]),a("h2",{attrs:{id:"substr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#substr","aria-hidden":"true"}},[t._v("#")]),t._v(" substr")]),a("p",[t._v("substr() 方法可在字符串中截取从 start 下标开始的指定数目的字符。")]),a("blockquote",[a("p",[a("b",[t._v("语法：")]),a("br"),t._v("stringObject.substr(start,length)")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),a("th",[t._v("必填")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("start")]),a("td",[t._v("是")]),a("td",[t._v("要截取的开始下标，必须是数值。可以为负数")])]),a("tr",[a("td",[t._v("length")]),a("td",[t._v("否")]),a("td",[t._v("字符串的长度，必须是数值，如果省略该参数，返回开始位置到结尾的字符串")])])])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'javascript'")]),t._v("\n\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("substr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ascript")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("substr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// asc")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("substr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// cript")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("substr")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// cr")]),t._v("\n")])]),a("h2",{attrs:{id:"substring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#substring","aria-hidden":"true"}},[t._v("#")]),t._v(" substring")]),a("p",[t._v("substring() 方法用于截取字符串中介于两个指定下标之间的字符。")]),a("blockquote",[a("p",[a("b",[t._v("语法：")]),a("br"),t._v("stringObject.substring(start,stop)")])]),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),a("th",[t._v("必填")]),a("th",[t._v("描述")])])]),a("tbody",[a("tr",[a("td",[t._v("start")]),a("td",[t._v("是")]),a("td",[t._v("一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。")])]),a("tr",[a("td",[t._v("stop")]),a("td",[t._v("否")]),a("td",[t._v("一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。")])])])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" s "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'javascript'")]),t._v("\n\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("substring")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// ascript")]),t._v("\ns"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("substring")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("6")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// asc")]),t._v("\n")])])])}],!1,null,null,null);s.default=r.exports}}]);