# 数组 Array

<style>
  .highlighted{background:#f9f2f4;color:#c7254e}
  b{color:#333}
</style>

#### Array 对象用于在单个的变量中存储多个值。

## 属性

| 属性名      | 描述                               |
| ----------- | ---------------------------------- |
| constructor | 返回对创建此对象的数组函数的引用。 |
| length      | 设置或返回数组中元素的数目。       |
| prototype   | 使您有能力向对象添加属性和方法。   |

```js
let a = new Array()
let o = new Object()

console.log(typeof a)
console.log(typeof o)
// object

if (a.constructor == Array) {
  console.log('this is Array')
}
// 'this is Array'

if (o.constructor == Object) {
  console.log('this is Object')
}
// 'this is Object'
```

## concat

concat() 方法用于连接两个或多个数组

该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。

> <b>语法：</b> </br>arrayObject.concat(arrayX,arrayX,......,arrayX)

```js
var a = [1, 2, 3]
var b = [4, 5, 6]
// 合并a 和 b
var c = a.concat(b)
// [1, 2, 3, 4, 5, 6]
```

## join

join() 方法用于把数组中的所有元素放入一个字符串。

元素是通过指定的分隔符进行分隔的。

> <b>语法：</b> </br>arrayObject.join(separator)

```js
var a = [1, 2, 3, 4, 5]
a.join('-')
// "1-2-3-4-5"
a.join()
// "1,2,3,4,5"
```

## pop

pop() 方法用于删除并返回数组的最后一个元素。

pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。

> <b>语法：</b> </br>arrayObject.pop()

```js
var a = [1, 2, 3, 4, 5]
a.pop()
// 5
console.log(a)
// [1, 2, 3, 4]

var b = []
b.pop()
// undefined
console.log(b)
// []
```

## push

push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

push() 方法可把它的参数顺序添加到 arrayObject 的尾部。它直接修改 arrayObject，而不是创建一个新的数组。push() 方法和 pop() 方法使用数组提供的先进后出栈的功能。

> <b>语法：</b> </br>arrayObject.push(newelement1,newelement2,....,newelementX)

```js
var a = [1, 2, 3, 4, 5]
a.push(6, 7)
console.log(a)
// [1, 2, 3, 4, 5, 6, 7]

a.push([1, 2, 3], 23, 11)
console.log(a)
// [1, 2, 3, 4, 5, 6, 7, [1,2,3], 23, 11]
```

## reverse

reverse() 方法用于颠倒数组中元素的顺序。

注释：该方法会改变原来的数组，而不会创建新的数组。

> <b>语法：</b> </br>arrayObject.reverse()

```js
var a = [1, 2, 3, 4, 5]
a.reverse()

console.log(a)
// [5, 4, 3, 2, 1]
```

## shift

shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

该方法不创建新数组，而是直接修改原有的 arrayObject。

> <b>语法：</b> </br>arrayObject.shift()

```js
var a = [1, 2, 3, 4, 5]
a.shift()
console.log(a)
// [2, 3, 4, 5]
```

## unshift

unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。

unshift() 方法不创建新的创建，而是直接修改原有的数组。

> <b>语法：</b> </br>arrayObject.unshift(newelement1,newelement2,....,newelementX)

```js
var a = [1, 2, 3, 4, 5]
a.unshift(6, 7)
console.log(a)
// [6, 7,1, 2, 3, 4, 5]

a.unshift([1, 2, 3], 23, 11)
console.log(a)
// [[1, 2, 3], 23, 11, 6, 7, 1, 2, 3, 4, 5]
```

## sort

sort() 方法用于对数组的元素进行排序

注意，数组在原数组上进行排序，不生成副本。

> <b>语法：</b> </br>arrayObject.sort(sortby)

```js
var a = [4, 5, 3, 2, 6, 8, 1]
a.sort()

console.log(a)
// [1, 2, 3, 4, 5, 6, 8]
```

## reverse

reverse() 方法用于反转数组的元素顺序

> <b>语法：</b> </br>arrayObject.reverse(sortby)

```js
var a = [1, 2, 8, 12, 3, 4, 5, 6]
a.reverse()

console.log(a)
// [6, 5, 4, 3, 12, 8, 2, 1]
```

## slice

slice() 方法可从已有的数组中返回选定的元素。

返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。该方法并不会修改数组

> <b>语法：</b> </br>arrayObject.sort(sortby)

- 注释：您可使用负值从数组的尾部选取元素。
- 注释：如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。

```js
var a = [1, 2, 3, 4, 5, 6, 7]
var b = a.slice(1, 3)

console.log(a, b)
// [1, 2, 3, 4, 5, 6, 7] , [2, 3]

var c = a.slice(4, -1)
console.log(c)
// [5, 6]

var d = a.slice(-1)
console.log(d)
// [7]

var e = a.slice(-3, -1)
console.log(e)
// [5, 6]
```

## splice

splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。

注释：该方法会改变原始数组。

> <b>语法：</b> </br>arrayObject.splice(index,howmany,item1,.....,itemX)

| 参数名            | 必填 | 描述                                                            |
| ----------------- | ---- | --------------------------------------------------------------- |
| index             | 必需 | 整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。 |
| howmany           | 必需 | 要删除的项目数量。如果设置为 0，则不会删除项目。                |
| item1, ..., itemX | 可选 | 向数组添加的新项目。                                            |

```js
var a = [1, 2, 3, 4, 5, 6, 7, 8]

// 删除 下标从3开始的1个 元素
a.splice(3, 1)
console.log(a)
// [1, 2, 3, 5, 6, 7, 8]

// 删除 下标从1开始的0个 元素
a.splice(1, 0)
// [1, 2, 3, 5, 6, 7, 8]

// 删除 下标从1开始的0个 元素  并在此处添加123
a.splice(1, 0, 123)
console.log(a)
// [1, 123, 2, 3, 5, 6, 7, 8]

// 删除 下标从1开始的4个 元素
a.splice(1, 4)
console.log(a)
// [1, 6, 7, 8]
```

## isArray

isArray() 方法用于判断一个对象是否为数组。

如果对象是数组返回 true，否则返回 false。

> <b>语法：</b> </br>Array.isArray(arr)

```js
Array.isArray([])
// true

Array.isArray({})
// false

Array.isArray('')
// false

Array.isArray(1)
// false
```

## some

some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。

some() 方法会依次执行数组的每个元素：

- 如果有一个元素满足条件，则表达式返回 true , 剩余的元素不会再执行检测。
- 如果没有满足条件的元素，则返回 false。

注意： 1、不会对空数组进行检测。 2、不会改变原始数组。

> <b>语法：</b> </br>array.some(function(currentValue,index,arr),thisValue)

| 参数名       | 必填 | 描述                                                                                                     |
| ------------ | ---- | -------------------------------------------------------------------------------------------------------- |
| function     | 必需 | 函数，数组中的每个元素都会执行这个函数                                                                   |
| currentValue | 必需 | 当前元素的值                                                                                             |
| index        | 可选 | 当前元素的索引值                                                                                         |
| arr          | 可选 | 当前元素属于的数组对象                                                                                   |
| thisValue    | 可选 | 对象作为该执行回调时使用，传递给函数，用作 "this" 的值。如果省略了 thisValue ，"this" 的值为 "undefined" |

```js
var a = [1, 3, 5, 7, 9, 14]
var b = [1, 2, 3, 4, 5]

function change(num) {
  return num > 6
}

a.some(change)
// true   有符合条件的元素

b.some(change)
// false  没有符合条件的元素
```

## every

every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）

- 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
- 如果所有元素都满足条件，则返回 true。

> <b>语法：</b> </br>array.every(function(currentValue,index,arr),thisValue)

```js
var a = [1, 3, 5, 7, 9, 14]
var b = [1, 2, 3, 4, 5]
var c = [7, 8, 9, 11, 34]

function change(num) {
  return num > 6
}

a.every(change)
// false  没有完全符合条件

b.every(change)
// false  没有完全符合条件

c.every(change)
// true  全部符合条件
```

## filter

filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

- filter() 不会对空数组进行检测。
- filter() 不会改变原始数组。

> <b>语法：</b> </br>array.filter(function(currentValue,index,arr),thisValue)

```js
var a = [1, 3, 5, 7, 9, 14]
var b = [1, 2, 3, 4, 5]

function change(num) {
  return num > 6
}

a.filter(change)
// [7, 9, 14]   所有符合条件的元素

b.filter(change)
// []  没有符合条件的元素返回空数组
```

## map

map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

map() 方法按照原始数组元素顺序依次处理元素。

> <b>语法：</b> </br>array.map(function(currentValue,index,arr),thisValue)

```js
var numbers = [4, 9, 16, 25]
numbers.map(Math.sqrt)
// [2, 3, 4, 5]

numbers.map(function(n) {
  return n * 10
})
// [40, 90, 160, 250]

console.log(number)
// [4, 9, 16, 25]
```
