(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{175:function(n,a,s){},331:function(n,a,s){"use strict";var t=s(175);s.n(t).a},718:function(n,a,s){"use strict";s.r(a);var t={data:function(){return{navArr:["A","B","C","D","E","F","G","H","I","J","K","L"],navInfo:"",navIndex:0,navInfoShow:!1,content:{A:["asdfasdf","asdfasdfasdfas","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的"],B:["asdfasdf","阿什顿发大师傅阿什顿发大师傅","阿什顿发大师傅","是大法官黑色的","规范吃软饭"],C:["asdfasdf","asdfasdfasdfas","阿什顿发大师傅","是大法官黑色的","规范吃软饭"],D:["asdfasdf","asdfasdfasdfas","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的","规范吃软饭"],G:["asdfasdf","阿什顿发大师傅","阿什顿发大师傅","是大法官黑色的","规范吃软饭"],H:["asdfasdf","asdfasdfasdfas","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的","规范吃软饭"],I:["asdfasdf","asdfasdfasdfas","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的","规范吃软饭"],J:["asdfasdf","asdfasdfasdfas","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的","规范吃软饭"],K:["asdfasdf","asdfasdfasdfas","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的","规范吃软饭"],L:["asdfasdf","asdfasdfasdfas","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的","规范吃软饭","阿什顿发大师傅","是大法官黑色的","规范吃软饭"]}}},methods:{indexNav:function(n,a){var s=this;this.navInfo=n,this.navIndex=a,this.navInfoShow=!0,this.moveContent(n),console.log(this.navArr[this.navIndex],this.navInfo);var t=setTimeout(function(){s.navInfoShow=!1,clearTimeout(t)},500)},indexNavMove:function(n){var a=this.navArr.indexOf(n.target.innerHTML),s=n.target.offsetTop,t=Math.floor((n.changedTouches[0].pageY-n.currentTarget.offsetTop)/(s/a)),e=this.navArr[t];e!==this.navInfo&&void 0!==e&&(this.navInfo=e,this.navInfoShow=!0,this.navIndex=a,this.moveContent(e))},indexNavEnd:function(n){var a=this,s=setTimeout(function(){a.navInfoShow=!1,clearTimeout(s)},500)},moveContent:function(n){this.$refs.view.scrollTop=this.$refs["content"+n][0].offsetTop,console.log(this.$refs.view)}}},e=(s(331),s(1)),f=Object(e.a)(t,function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("div",{staticClass:"view"},[s("ul",{ref:"view",staticClass:"content-ul"},n._l(n.content,function(a,t,e){return s("li",{key:e,ref:"content"+t,refInFor:!0},[s("em",[n._v(n._s(t))]),n._l(a,function(a,t){return s("span",{key:t},[n._v(n._s(a))])})],2)})),s("div",{directives:[{name:"show",rawName:"v-show",value:n.navInfoShow,expression:"navInfoShow"}],staticClass:"scale"},[n._v(n._s(n.navInfo))]),s("div",{staticClass:"nav",on:{touchmove:n.indexNavMove,touchend:n.indexNavEnd}},n._l(n.navArr,function(a,t){return s("span",{key:t,class:[n.navArr[t]===n.navInfo?"text selected":"text"],on:{click:function(s){n.indexNav(a,t)}}},[n._v(n._s(a))])}))])},[],!1,null,"71d1d186",null);a.default=f.exports}}]);