(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{704:function(t,e,r){"use strict";r.r(e);var s=r(1),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._m(1),r("p",[t._v("1、搜索 ‘order 表’ 中全部的内容\nSELECT * FROM order")]),r("p",[t._v("2、只获取对应列的内容\nSELECT LastName,FirstName FROM order\nSELECT LastName FROM order")]),t._m(2),r("p",[t._v("3、获取列表，不重复 SELECT DISTINCT\nSELECT DISTINCT LastName FROM order")]),t._m(3),r("p",[t._v("4、条件语句 where")]),r("p",[t._v("请注意，我们在例子中的条件值周围使用的是单引号。\nSQL 使用单引号来环绕文本值（大部分数据库系统也接受双引号）。如果是数值，请不要使用引号。")]),r("p",[t._v("文本：\n这是正确的：\nSELECT _ FROM Persons WHERE FirstName='Bush'\n这是错误的：\nSELECT _ FROM Persons WHERE FirstName=Bush\n数值：\n这是正确的：\nSELECT _ FROM Persons WHERE Year>1965\n这是错误的：\nSELECT _ FROM Persons WHERE Year>’1965'")]),t._m(4),r("p",[t._v("5、AND 和 OR 运算符\nselect _ FROM order where FirstName=‘Bush’ AND LastName=‘Carter’")]),r("p",[t._v("select _ FROM order where FirstName=‘Bush’ OR LastName=‘Carter’")]),t._m(5),t._m(6),r("p",[t._v("6、ORDER BY 语句 - 正序排序 DESC - 倒序")]),t._m(7),t._m(8),r("p",[t._v("7、INSERT INTO 插入语句")]),t._m(9),t._m(10),r("p",[t._v("8、Updata 修改语句")]),t._m(11),t._m(12),t._m(13),r("p",[t._v("9、DELETE 删除语句")]),r("p",[t._v("DELETE FROM order WHERE")]),r("ClientOnly",[r("livere")],1)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"sql-语句"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sql-语句","aria-hidden":"true"}},[this._v("#")]),this._v(" SQL 语句")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"select"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select","aria-hidden":"true"}},[this._v("#")]),this._v(" SELECT")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"select-distinct"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select-distinct","aria-hidden":"true"}},[this._v("#")]),this._v(" SELECT DISTINCT")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"where"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#where","aria-hidden":"true"}},[this._v("#")]),this._v(" WHERE")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"and-和-or"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#and-和-or","aria-hidden":"true"}},[this._v("#")]),this._v(" AND 和 OR")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("select * FROM order where (FirstName=‘Bush’ AND LastName=‘Carter’) OR city=‘Beijing’\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"order-by-order-by-name-desc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order-by-order-by-name-desc","aria-hidden":"true"}},[this._v("#")]),this._v(" ORDER BY / ORDER BY name DESC")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("以 City 排序\nSelect * from order ORDER BY City")]),e("li",[this._v("City 排序，相同 CIty 下根据 LastName 排序\nSelect * from order ORDER BY City, LastName")]),e("li",[this._v("City 倒序\nSELECT * FROM order ORDER BY City DESC")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"insert-into"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#insert-into","aria-hidden":"true"}},[this._v("#")]),this._v(" INSERT INTO")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("插入新的一行\nINSERT INTO order VALUES (10,'哈哈哈’,’first’,’hello’,’world’)")]),e("li",[this._v("插入指定的列\nINSERT INTO order (LastName,FirstName) VALUES (‘灰灰’,’猪猪')")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"updata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updata","aria-hidden":"true"}},[this._v("#")]),this._v(" UPDATA")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("更新某一行中的一列\nUPDATA order SET LastName=‘这是更新的值’ WHERE FirstName=Adams")]),e("li",[this._v("更新某一行中的若干列\nUPDATA order SET LastName=‘新值 1’,city=‘新值 2’ WHERE FIrstName=Adams")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"delete"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#delete","aria-hidden":"true"}},[this._v("#")]),this._v(" DELETE")])}],!1,null,null,null);e.default=a.exports}}]);