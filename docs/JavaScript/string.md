# 字符串 String

<style>
  .highlighted{background:#f9f2f4;color:#c7254e}
  b{color:#333}
</style>

#### String 全局对象是一个用于字符串或一个字符序列的构造函数。

## charAt

返回指定位置的字符，默认返回 ‘0’ 下标的字符<span class="highlighted">test</span>

```js
let str = '这是一个测试字符串'
str.charAt() // 这
str.charAt(4) // 测
str.charAt(100) // ''
```

## charCodeAt

返回指定位置字符的 Unicode 编码，默认返回 ‘0’ 下标的编码

```js
let str = '这是一个测试字符串'
str.charCodeAt() // 36825
str.charCodeAt(4) // 27979
str.charCodeAt(100) // NaN
```

## codePointAt

<a target="_block" href="http://es6.ruanyifeng.com/#docs/string#codePointAt">codePointAt (es6) </a>

JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为 2 个字节。对于那些需要 4 个字节储存的字符（Unicode 码点大于 0xFFFF 的字符），JavaScript 会认为它们是两个字符。

```js
var s = '𠮷'

s.length // 2
s.charAt(0) // ''
s.charAt(1) // ''
s.charCodeAt(0) // 55362
s.charCodeAt(1) // 57271
```

上面代码中，汉字“𠮷”（注意，这个字不是“吉祥”的“吉”）的码点是 0x20BB7，UTF-16 编码为 0xD842 0xDFB7（十进制为 55362 57271），需要 4 个字节储存。对于这种 4 个字节的字符，JavaScript 不能正确处理，字符串长度会误判为 2，而且 charAt 方法无法读取整个字符，charCodeAt 方法只能分别返回前两个字节和后两个字节的值。

ES6 提供了 codePointAt 方法，能够正确处理 4 个字节储存的字符，返回一个字符的码点。

```js
let s = '𠮷a'

s.codePointAt(0) // 134071
s.codePointAt(1) // 57271

s.codePointAt(2) // 97
```

## concat

concat() 方法是用于链接两个或者多个字符串

```
stringObject.concat(stringX,stringX,...,stringX)
```

concat() 方法将把它的所有参数转换成字符串，然后按顺序连接到字符串 stringObject 的尾部，并返回连接后的字符串。请注意，stringObject 本身并没有被更改

stringObject.concat() 与 Array.concat() 很相似。

```js
'123a'.concat('哈哈哈', 'woqu') // "123a哈哈哈woqu"
```

## indexOf

indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置

> <b>语法：</b> </br>stringObject.indexOf(searchvalue, fromindex)

| 参数名      | 必填 | 描述                                                                      |
| ----------- | ---- | ------------------------------------------------------------------------- |
| searchvalue | 是   | 规定需检索的字符串值                                                      |
| fromindex   | 否   | 规定在字符串中开始检索的位置。它的合法取值是 0 到 stringObject.length - 1 |

::: warning
注释：indexOf() 方法对大小写敏感！

注释：如果要检索的字符串值没有出现，则该方法返回 -1。
:::

```js
// 示例
let s = 'Hello World'

s.indexOf('Hello') // 0
s.indexOf('World') // 6
s.indexOf('world') // -1
```

### es6 新增

includes(), startsWith(), endsWith()

::: tip
includes()：返回布尔值，表示是否找到了参数字符串。</br>
startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。</br>
endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
:::

```js
let s = 'Hello world!'

s.startsWith('Hello') // true
s.endsWith('!') // true
s.includes('o') // true

// 这三个方法都支持第二个参数，表示开始搜索的位置。

s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
```

使用第二个参数 n 时，endsWith 的行为与其他两个方法有所不同。它针对前 n 个字符，而其他两个方法针对从第 n 个位置直到字符串结束。

## lastIndexOf

lastIndexOf() 方法可返回某个指定的字符串值在字符串中最后出现的位置，在一个字符串中的指定位置从后向前搜索。

用法同上 indexOf()

## match

match() 是在字符串内检索指定的值，或找到一个或者多个正则表达式的匹配，类似 indexOf 和 lastIndexOf，但是他返回的是置顶的值，而不是位置

> <b>语法：</b> </br>stringObject.match(searchvalue) </br> stringObject.match(regexp)

| 参数名      | 必填 | 描述                                                                                                                       |
| ----------- | ---- | -------------------------------------------------------------------------------------------------------------------------- |
| searchvalue | 是   | 规定要检索的字符串值。                                                                                                     |
| regexp      | 是   | 规定要匹配的模式的 RegExp 对象。如果该参数不是 RegExp 对象，则需要首先把它传递给 RegExp 构造函数，将其转换为 RegExp 对象。 |

#### 返回值

存放匹配结果的数组。该数组的内容依赖于 regexp 是否具有全局标志 g。

#### 说明

未找到任何匹配的文本，match() 将返回 null，匹配需要用到正则表达式，可以查看详细的<a href="http://www.runoob.com/regexp/regexp-tutorial.html" target="_block">正则教程</a>

```js
var s = 'Hello World'
s.match('Hello') // [Hello]

var c = '12dssfd2df 12dd'
c.match(/\d/) // ['1']
c.match(/\d+/) // ['12']
c.match(/\d+/g) // ['12','2','12']
```

## replace

replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

> <b>语法：</b> </br>stringObject.replace(regexp/substr,replacement)

| 参数名        | 必填 | 描述                                                                                                                                                    |
| ------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| regexp/substr | 是   | 规定子字符串或要替换的模式的 RegExp 对象。</br> <b>请注意，如果该值是一个字符串，则将它作为要检索的直接量文本模式，而不是首先被转换为 RegExp 对象。</b> |
| replacement   | 是   | 一个字符串值。规定了替换文本或生成替换文本的函数。                                                                                                      |

#### 返回值

一个新的字符串，是用 replacement 替换了 regexp 的第一次匹配或所有匹配之后得到的。

```js
let s = 'Hello World,Hello my Love'
s.replace('Hello', '你好') // "你好 World,Hello my Love"
s.replace(/Hello/g, '你好') // "你好 World,你好 my Love"

let t = 'JavaScript Much like Java'
t.replace(/JAVA/gi, 'java') // "javaScript Much like java"
```

## search

search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。

> <b>语法：</b> </br>stringObject.search(regexp)

::: warning
注释：search() 方法对大小写敏感！

注释：如果没有找到任何匹配的子串，则返回 -1。
:::

```js
let s = 'this is Javascript'
s.search(/Javascript/) // 8
s.search(/javascript/) // -1
```

## slice

slice() 方法可截取字符串的某个部分，并以新的字符串返回被截取的部分。

> <b>语法：</b> </br>stringObject.slice(start,end)

| 参数名 | 必填 | 描述                                                                                           |
| ------ | ---- | ---------------------------------------------------------------------------------------------- |
| start  | 是   | 要截取的开始下标。可以为负数，负数从字符串尾部开始算起。-1 为最后一个字符，-2 为倒数第二个字符 |
| end    | 否   | 要截取的结束下标。无此参数则截取包括 start 到原字符串结尾的字符串。为负数从尾部开始算          |

#### 返回值

一个新的字符串。包括字符串 stringObject 从 start 开始（包括 start）到 end 结束（不包括 end）为止的所有字符。

```js
let s = 'javascript'

s.slice(3) // ascript
s.slice(3, 6) // asc
s.slice(-3) // ipt
s.slice(-3, -1) // ip
```

## split

split() 方法用于把一个字符串分割成字符串数组。

> <b>语法：</b> </br>stringObject.split(separator,howmany)

| 参数名    | 必填 | 描述                                                      |
| --------- | ---- | --------------------------------------------------------- |
| separator | 是   | 字符串或正则表达式，从该参数指定的地方分割 stringObject。 |
| howmany   | 否   | 该参数可指定返回的数组的最大长度                          |

```js
let s = 'javascript'

s.split('') // ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]
s.split('', 4) // ["j", "a", "v", "a"]
s.split('') // ["j", "v", "script"]

'2:3:4:5'.split(':') // ["2", "3", "4", "5"]
'|a|b|c'.split('|') // ["", "a", "b", "c"]
```

## substr

substr() 方法可在字符串中截取从 start 下标开始的指定数目的字符。

> <b>语法：</b> </br>stringObject.substr(start,length)

| 参数名 | 必填 | 描述                                                                 |
| ------ | ---- | -------------------------------------------------------------------- |
| start  | 是   | 要截取的开始下标，必须是数值。可以为负数                             |
| length | 否   | 字符串的长度，必须是数值，如果省略该参数，返回开始位置到结尾的字符串 |

```js
let s = 'javascript'

s.substr(3) // ascript
s.substr(3, 3) // asc
s.substr(-5) // cript
s.substr(-5, 2) // cr
```

## substring

substring() 方法用于截取字符串中介于两个指定下标之间的字符。

> <b>语法：</b> </br>stringObject.substring(start,stop)

| 参数名 | 必填 | 描述                                                                       |
| ------ | ---- | -------------------------------------------------------------------------- |
| start  | 是   | 一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。     |
| stop   | 否   | 一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。 |

```js
let s = 'javascript'

s.substring(3) // ascript
s.substring(3, 6) // asc
```

## 字符串模板

<a href="http://es6.ruanyifeng.com/#docs/string#%E6%A0%87%E7%AD%BE%E6%A8%A1%E6%9D%BF" target="_block">阮一峰 es6 标签模板</a>

“标签模板”的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容。

```js
let h = 'Hello'
let w = 'World'

let newStr = `This id new String, ${h} ${w}`
// 等同于
let newStr = 'This id new String, ' + h + ' ' + w

// 大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。
let x = 1
let y = 2

;`${x} + ${y} = ${x + y}``${
  x // "1 + 2 = 3"
} + ${y * 2} = ${x + y * 2}`
// "1 + 4 = 5"

let obj = { x: 1, y: 2 }
;`${obj.x + obj.y}`
// "3"
```

<!-- 评论 -->
<ClientOnly>
  <livere/>
</ClientOnly>
