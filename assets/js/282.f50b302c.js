(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{160:function(t,e,n){"use strict";var s=n(97);n.n(s).a},511:function(t,e,n){"use strict";n.r(e);var s={name:"vueScratchCard",data:function(){return{supportTouch:!1,events:[],startMoveHandler:null,moveHandler:null,endMoveHandler:null,showLucky:!1,firstTouch:!0}},props:{elementId:{type:String,default:"scratch"},moveRadius:{type:Number,default:40},ratio:{type:Number,default:.6},startCallback:{type:Function,default:function(){}},clearCallback:{type:Function,default:function(){}},coverColor:{type:String,default:"#eee"},coverImg:{type:String},resultImg:{type:String,default:"https://raw.githubusercontent.com/ZENGzoe/imagesCollection/master/2018/default.jpg"}},mounted:function(){var t=this;this.$nextTick(function(){t.init()})},methods:{init:function(){if(this.isSupportCanvas()){var t=document.getElementById(this.elementId);this.canvas=t.querySelector("#scratchCanvas"),this.ctx=this.canvas.getContext("2d"),this.canvas.width=t.clientWidth,this.canvas.height=t.clientHeight,this.createCanvasStyle(),this.bindEvent()}else alert("当前浏览器不支持canvas")},isSupportCanvas:function(){var t=document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))},createCanvasStyle:function(){var t=this;if(this.coverImg){var e=new Image;e.src=this.coverImg,e.onload=function(){t.ctx.drawImage(e,0,0,t.canvas.width,t.canvas.height)}}else t.ctx.fillStyle=t.coverColor,t.ctx.fillRect(0,0,t.canvas.width,t.canvas.height)},bindEvent:function(){"ontouchstart"in window&&(this.supportTouch=!0),this.events=this.supportTouch?["touchstart","touchmove","touchend"]:["mousedown","mousemove","mouseup"],this.addEvent()},addEvent:function(){this.startMoveHandler=this.startEventHandler.bind(this),this.canvas.addEventListener(this.events[0],this.startMoveHandler,!1)},startEventHandler:function(t){t.preventDefault(),this.firstTouch&&(this.startCallback(),this.firstTouch=!1),this.showLucky=!0,this.moveHandler=this.moveEventHandler.bind(this),this.endMoveHandler=this.endEventHandler.bind(this),this.canvas.addEventListener(this.events[1],this.moveHandler,!1),document.addEventListener(this.events[2],this.endMoveHandler,!1)},moveEventHandler:function(t){t.preventDefault(),t=this.supportTouch?t.touches[0]:t;var e=this.canvas.getBoundingClientRect(),n=document.documentElement.scrollTop||document.body.scrollTop,s=document.documentElement.scrollLeft||document.body.scrollLeft,a=t.pageX-e.left-s,i=t.pageY-e.top-n;this.ctx.beginPath(),this.ctx.fillStyle="#FFFFFF",this.ctx.globalCompositeOperation="destination-out",this.ctx.arc(a,i,this.moveRadius,0,2*Math.PI),this.ctx.fill()},endEventHandler:function(t){t.preventDefault(),this.canvas.removeEventListener(this.events[1],this.moveHandler,!1),document.removeEventListener(this.events[2],this.endMoveHandler,!1),this.endMoveHandler=null,this.caleArea()},caleArea:function(){var t=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),e=[];t.data.map(function(n,s){var a=t.data[s+3];0===a&&e.push(a)}),e.length/t.data.length>this.ratio&&(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.canvas.removeEventListener(this.events[0],this.startMoveHandler),this.canvas.removeEventListener(this.events[1],this.moveHandler,!1),document.removeEventListener(this.events[2],this.endMoveHandler,!1),this.clearCallback())}}},a=(n(160),n(1)),i=Object(a.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvas-view"},[e("div",{staticClass:"scratchCard",attrs:{id:this.elementId}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.showLucky,expression:"showLucky"}],staticClass:"result"},[this._t("result"),e("img",{staticClass:"pic",attrs:{src:this.resultImg,alt:""}})],2),e("canvas",{attrs:{id:"scratchCanvas"}})]),e("el-button",{attrs:{type:"primary"},on:{click:this.init}},[this._v("再来一次")])],1)},[],!1,null,null,null);e.default=i.exports},97:function(t,e,n){}}]);