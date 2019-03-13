<template>
  <div>
    <div class="main">
      <el-card class="box-card">
        <img class="circle-img" src="../public/img/monkeyed.png">
        <p align="center" class="name">Rancho</p>
        <p align="center" class="main-text">知识的贫穷，限制了你的想象力。</p>
        <div class="categories">
          <el-button type="success" size="mini" round v-for="item in tabs">{{item}}</el-button>
        </div>
      </el-card>
    </div>
    <div class="progress">
      <h3>技能概况</h3>
      <ul class="list">
        <li v-for="item in skillList">
          <el-progress type="circle" :percentage="item.progress" :color="item.color"></el-progress>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

export default {
  data() {
    return {
      tabs: ["年轻有为", "前端开发", "男神", "善良亲和爱你们", "推动人类进步"],
      skillList: [
        {
          name: "VUE",
          progress: 70,
          color: "#409EFF"
        },
        {
          name: "JavaScript",
          progress: 80,
          color: "#409EFF"
        },
        {
          name: "jQuery",
          progress: 80,
          color: "#409EFF"
        },
        {
          name: "HTML",
          progress: 90,
          color: "#409EFF"
        },
        {
          name: "CSS",
          progress: 80,
          color: "#409EFF"
        },
        {
          name: "Python",
          progress: 50,
          color: "#409EFF"
        },
        {
          name: "nodeJs",
          progress: 30,
          color: "#409EFF"
        },
        {
          name: "mySql",
          progress: 10,
          color: "#409EFF"
        }
      ]
    };
  },
  mounted() {
    // this.gatag();
    document.querySelector(".home").classList.add("home-view-one");
  },
  methods: {
    // ga统计
    gatag() {
      var script = document.createElement("script"); //1、创建元素
      script.src = "https://www.googletagmanager.com/gtag/js?id=UA-136059685-1";
      var body = document.querySelector("body"); //2、找到父级元素
      body.appendChild(script);
      setTimeout(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "UA-136059685-1");
      }, 300);
    }
  }
};
</script>
<style lang="less">
.home-view-one {
  &.home {
    max-width: 100%;
    padding: 0;
    .hero {
      padding-top: 80px;
    }
  }
  .content:not(.custom) {
    max-width: 100%;
    padding: 0;
    &:first-child {
      margin: 0;
    }
  }
  .main {
    width: 100%;
    height: calc(~"100vh - 60px");
    position: relative;
    background: url("../public/img/bg.jpg") no-repeat 54.5% 0%;
    background-attachment: fixed;
    .box-card {
      width: 520px;
      box-sizing: border-box;
      text-align: center;
      position: absolute;
      left: 50%;
      top: 80px;
      transform: translate3d(-50%, 0, 0);
    }
    .circle-img {
      animation: rotate 5s linear infinite;
    }
    .name {
      display: block;
      font-size: 16px;
      font-weight: bold;
    }
    .main-text {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
  .progress {
    height: 100vh;
    background: url("../public/img/bg2.jpg") no-repeat 50% 0%;
    background-attachment: fixed;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    &:after {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.86);
    }
    h3 {
      margin: 30px 0 30px;
      padding: 20px 0;
      text-align: center;
      font-size: 26px;
      position: relative;
      z-index: 1;
    }
    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      flex-wrap: wrap;
      position: relative;
      z-index: 1;
      li {
        width: 25%;
        text-align: center;
        margin-bottom: 40px;
        span {
          display: block;
          font-size: 16px;
          text-shadow: 2px 2px 9px #000;
        }
      }
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
</style>


