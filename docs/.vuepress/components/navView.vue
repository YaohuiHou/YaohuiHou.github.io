<template>
  <div class="view">
    <ul class="content-ul" ref="view">
      <li v-for="(value ,key ,index) in content" v-bind:key="index" :ref="'content'+key">
        <em>{{key}}</em>
        <span v-for="(item,i) in value" :key="i">{{item}}</span>
      </li>
    </ul>
    <!-- 选中的弹窗样式 -->
    <div class="scale" v-show="navInfoShow">{{navInfo}}</div>
    <!-- 字母导航 -->
    <div class="nav" @touchmove="indexNavMove" @touchend="indexNavEnd">
      <span
        :class="[ navArr[index] === navInfo ? 'text selected' : 'text']"
        @click="indexNav(item,index)"
        v-for="(item,index) in navArr"
        :key="index"
      >{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navArr: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
      navInfo: "",
      navIndex: 0,
      navInfoShow: false,
      content: {
        A: [
          "asdfasdf",
          "asdfasdfasdfas",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的"
        ],
        B: [
          "asdfasdf",
          "阿什顿发大师傅阿什顿发大师傅",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭"
        ],
        C: [
          "asdfasdf",
          "asdfasdfasdfas",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭"
        ],
        D: [
          "asdfasdf",
          "asdfasdfasdfas",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭"
        ],
        G: [
          "asdfasdf",
          "阿什顿发大师傅",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭"
        ],
        H: [
          "asdfasdf",
          "asdfasdfasdfas",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭"
        ],
        I: [
          "asdfasdf",
          "asdfasdfasdfas",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭"
        ],
        J: [
          "asdfasdf",
          "asdfasdfasdfas",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭"
        ],
        K: [
          "asdfasdf",
          "asdfasdfasdfas",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭"
        ],
        L: [
          "asdfasdf",
          "asdfasdfasdfas",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭",
          "阿什顿发大师傅",
          "是大法官黑色的",
          "规范吃软饭"
        ]
      }
    };
  },
  methods: {
    // 导航点击
    indexNav(item, index) {
      this.navInfo = item;
      this.navIndex = index;
      this.navInfoShow = true;

      // 跳转
      this.moveContent(item);
      console.log(this.navArr[this.navIndex], this.navInfo);
      let time = setTimeout(() => {
        this.navInfoShow = false;
        clearTimeout(time);
      }, 500);
    },
    // 导航移动
    indexNavMove(e) {
      // this.navInfo = e.target.innerHTML
      // this.navIndex = this.navArr.indexOf(this.navInfo)
      // this.navInfoShow = true

      let num = this.navArr.indexOf(e.target.innerHTML);
      let top = e.target.offsetTop;
      let floorNum = Math.floor(
        (e.changedTouches[0].pageY - e.currentTarget.offsetTop) / (top / num)
      );
      let index = this.navArr[floorNum];

      if (index === this.navInfo || index === undefined) {
        return;
      }
      this.navInfo = index;
      this.navInfoShow = true;
      this.navIndex = num;
      // 跳转
      this.moveContent(index);
    },
    // 导航移动结束
    indexNavEnd(e) {
      // console.log('结束')
      let time = setTimeout(() => {
        this.navInfoShow = false;
        clearTimeout(time);
      }, 500);
    },
    // 移动内容
    moveContent(key) {
      this.$refs.view.scrollTop = this.$refs[`content${key}`][0].offsetTop;
      // content{{key}}
      console.log(this.$refs.view);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.view {
  position: relative;
  height: 600px;
  width: 400px;
  margin: 0 auto;
  overflow: hidden;
  background: #f5f5f5;
  .nav {
    position: absolute;
    right: 0;
    bottom: 220px;
  }
  .nav .text {
    display: block;
    height: 44rpx;
    line-height: 36rpx;
    font-size: 24rpx;
    color: #666;
    text-align: center;
    padding: 0 10px;
  }
  .nav .text.selected {
    color: #1571e5;
  }
  .scale {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 160px;
    height: 160px;
    line-height: 160px;
    margin: -80px 0 0 -80px;
    text-align: center;
    font-size: 100px;
    color: #f5f5f5;
    background: rgba(0, 0, 0, 0.6);
    z-index: 12;
    -webkit-transition: opacity 0.2s ease-out;
    transition: opacity 0.2s ease-out;
    border-radius: 16px;
  }
  .content-ul {
    list-style: none;
    position: relative;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    padding: 0;
    margin: 0;
    height: 100%;
  }
  .content-ul li {
    background: #f5f5f5;
  }
  .content-ul li em,
  .content-ul li span {
    display: block;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    color: #333;
    padding-left: 20px;
    border-bottom: 1px solid #eee;
  }
  .content-ul li em {
    background: #eee;
  }
}
</style>
