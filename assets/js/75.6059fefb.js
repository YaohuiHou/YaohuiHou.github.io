(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{304:function(t,s,a){"use strict";a.r(s);var n=a(1),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"_02-面向对象：类的定义和继承的几种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-面向对象：类的定义和继承的几种方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 02.面向对象：类的定义和继承的几种方式")]),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),a("p",[t._v("类与实例：")]),a("ul",[a("li",[a("p",[t._v("类的声明")])]),a("li",[a("p",[t._v("生成实例")])])]),a("p",[t._v("类与继承：")]),a("ul",[a("li",[a("p",[t._v("如何实现继承：继承的本质就是原型链")])]),a("li",[a("p",[t._v("继承的几种方式")])])]),a("h2",{attrs:{id:"类的定义、实例化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类的定义、实例化","aria-hidden":"true"}},[t._v("#")]),t._v(" 类的定义、实例化")]),a("h3",{attrs:{id:"类的定义-类的声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类的定义-类的声明","aria-hidden":"true"}},[t._v("#")]),t._v(" 类的定义/类的声明")]),a("p",[a("strong",[t._v("方式一")]),t._v("：用构造函数模拟类（传统写法）")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Animal1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'smyhvae'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//通过this，表明这是一个构造函数")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[a("strong",[t._v("方式二")]),t._v("：用 class 声明（ES6的写法）")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Animal2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token function"}},[t._v("constructor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("//可以在构造函数里写属性")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("控制台的效果：")]),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20180307_0957.png",alt:""}})]),a("h3",{attrs:{id:"实例化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例化","aria-hidden":"true"}},[t._v("#")]),t._v(" 实例化")]),a("p",[t._v("类的实例化很简单，直接 new 出来即可。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Animal1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Animal2")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//实例化。如果括号里没有参数，则括号可以省略")]),t._v("\n")])]),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20180307_1000.png",alt:""}})]),a("h2",{attrs:{id:"继承的几种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承的几种方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 继承的几种方式")]),a("p",[t._v("继承的本质就是原型链。")]),a("p",[a("strong",[t._v("继承的方式有几种？每种形式的优缺点是")]),t._v("？这些问题必问的。其实就是考察你对原型链的掌握程度。")]),a("h3",{attrs:{id:"方式一：借助构造函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式一：借助构造函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 方式一：借助构造函数")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Parent1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'parent1 的属性'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Child1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Parent1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),a("span",{attrs:{class:"token comment"}},[t._v("//【重要】此处用 call 或 apply 都行：改变 this 的指向")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'child1 的属性'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Child1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("【重要】上方代码中，最重要的那行代码：在子类的构造函数里写了"),a("code",[t._v("Parent1.call(this);")]),t._v("，意思是："),a("strong",[t._v("让Parent的构造函数在child的构造函数中执行")]),t._v("。发生的变化是："),a("strong",[t._v("改变this的指向")]),t._v("，parent的实例 --\x3e 改为指向child的实例。导致 parent的实例的属性挂在到了child的实例上，这就实现了继承。")]),a("p",[t._v("打印结果：")]),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20180307_1015.png",alt:""}})]),a("p",[t._v("上方结果表明：child先有了 parent 实例的属性（继承得以实现），再有了child 实例的属性。")]),a("p",[a("strong",[t._v("分析")]),t._v("：")]),a("p",[t._v("这种方式，虽然改变了 this 的指向，但是，"),a("strong",[t._v("Child1 无法继承 Parent1 的原型")]),t._v("。也就是说，如果我给 Parent1 的原型增加一个方法：")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    Parent1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function-variable function"}},[t._v("say")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("上面这个方法是无法被 Child1 继承的。如下：")]),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20180307_1030.png",alt:""}})]),a("h3",{attrs:{id:"方法二：通过原型链实现继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二：通过原型链实现继承","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法二：通过原型链实现继承")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n    通过原型链实现继承\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Parent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Parent 的属性'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Child")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Child 的属性'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    Child"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Parent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//【重要】")]),t._v("\n\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Child")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("打印结果：")]),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20180307_1109.png",alt:""}})]),a("p",[t._v("【重要】上方代码中，最重要的那行：每个函数都有"),a("code",[t._v("prototype")]),t._v("属性，于是，构造函数也有这个属性，这个属性是一个对象。现在，"),a("strong",[t._v("我们把"),a("code",[t._v("Parent")]),t._v("的实例赋值给了"),a("code",[t._v("Child")]),t._v("的"),a("code",[t._v("prototye")])]),t._v("，从而实现"),a("strong",[t._v("继承")]),t._v("。此时，"),a("code",[t._v("Child")]),t._v("构造函数、"),a("code",[t._v("Parent")]),t._v("的实例、"),a("code",[t._v("Child")]),t._v("的实例构成一个三角关系。于是：")]),a("ul",[a("li",[a("code",[t._v("new Child.__proto__ === new Parent()")]),t._v("的结果为true")])]),a("p",[a("strong",[t._v("分析：")])]),a("p",[t._v("这种继承方式，"),a("strong",[t._v("Child 可以继承 Parent 的原型")]),t._v("，但有个缺点：")]),a("p",[t._v("缺点是："),a("strong",[t._v("如果修改 child1实例的name属性，child2实例中的name属性也会跟着改变")]),t._v("。")]),a("p",[t._v("如下：")]),a("p",[a("img",{attrs:{src:"http://img.smyhvae.com/20180307_1123.png",alt:""}})]),a("p",[t._v("上面的代码中， child1修改了arr属性，却发现，child2的arr属性也跟着改变了。这显然不太好，在业务中，两个子模块应该隔离才对。如果改了一个对象，另一个对象却发生了改变，就不太好。")]),a("p",[t._v("造成这种缺点的原因是：child1和child2共用原型。即："),a("code",[t._v("chi1d1.__proto__ === child2__proto__")]),t._v("是严格相同。而 arr方法是在 Parent 的实例上（即 Child实例的原型）的。")]),a("h2",{attrs:{id:"方式三：组合的方式：构造函数-原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式三：组合的方式：构造函数-原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" 方式三：组合的方式：构造函数 + 原型链")]),a("p",[t._v("就是把上面的两种方式组合起来：")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("/*\n    组合方式实现继承：构造函数、原型链\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Parent3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Parent 的属性'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("arr "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("Child3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Parent3"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("call")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//【重要1】执行 parent方法")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Child 的属性'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    Child3"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Parent3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("//【重要2】第二次执行parent方法")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" child "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Child3")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("p",[t._v("这种方式，能解决之前两种方式的问题：既可以继承父类原型的内容，也不会造成原型里属性的修改。")]),a("p",[t._v("这种方式的缺点是：让父亲Parent的构造方法执行了两次。")]),a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("\n")])]),a("p",[t._v("ES6中的继承方式，一带而过即可，重点是要掌握ES5中的继承。")])])}],!1,null,null,null);s.default=o.exports}}]);