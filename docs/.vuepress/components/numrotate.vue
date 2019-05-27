<template>
  <div class="index">
    <!-- 主页面 -->
    <ul class="number">
      <li v-for="(item,index) in num.toString().split('')" :key="index">
        <span :class="`selected${item}`">
          <i v-for="(num,i) in numberArr" :key="i">{{ num }}</i>
        </span>
      </li>
    </ul>
    <button @click="random">click加数字</button>

    <!-- 时间插件 -->
    <ul class="timer">
      <li v-for="(item,index) in time.toString().split('')" :key="index">
        <span :class="`selected${item}`" v-if="item.trim() != '' && item >= 0">
          <i v-for="(num,i) in numberArr" :key="i">{{ num }}</i>
        </span>
        <span class="hint" v-else>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1234,
      numberArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      time: '',
      newDate: '',
      a: {
        status: 1,
        content: {
          c: [{ id: 'ZL-WAF-20180207-162134', domain: 'cmpapigw.zhaopin.com' }],
          t: [
            { id: 'ZL-WAF-20180201-184923', domain: 'test.com' },
            { id: 'ZL-WAF-20171116-112633', domain: 'test6.com' },
            { id: 'ZL-WAF-20171116-112657', domain: 'test7.com' }
          ]
        }
      }
    }
  },
  watch: {
    newDate(val, old) {
      setTimeout(() => {
        this.newDate = new Date()
        this.time = this.getNowFormatDate()
      }, 500)
    }
  },
  created() {
    this.time = this.getNowFormatDate()
    setTimeout(() => {
      this.newDate = new Date()
    }, 300)
  },
  methods: {
    random() {
      let num = Math.ceil(Math.random().toFixed(2) * 10)
      this.num = num + parseInt(this.num)
      console.log(`这次加了：${num} 数；最终展示为：${this.num}`)
    },
    getNowFormatDate() {
      var date = new Date()
      var seperator1 = '-'
      var seperator2 = ':'
      var month = date.getMonth() + 1
      var strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      let Hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      let Minutes =
        date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      let Seconds =
        date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      var currentdate =
        date.getFullYear() +
        seperator1 +
        month +
        seperator1 +
        strDate +
        ' ' +
        Hours +
        seperator2 +
        Minutes +
        seperator2 +
        Seconds
      return currentdate
    }
  }
}
</script>

<style scoped lang="less">
ul {
  list-style: none;
}
.number,
.timer {
  margin: 40px auto;
  width: 200px;
  height: 40px;
  background: #f60;
  color: #fff;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-radius: 4px;
  li {
    flex: 1;
    position: relative;
    height: 40px;
    line-height: 40px;
    span {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 1.7s ease-in-out 0.2s;
    }
    i {
      font-style: normal;
      height: 40px;
      line-height: 40px;
      width: 100%;
      text-align: center;
    }
  }
}
button {
  display: block;
  border: 1px solid rgb(12, 143, 231);
  width: 150px;
  height: 40px;
  border-radius: 6px;
  background: rgb(62, 173, 236);
  font-size: 16px;
  color: #fff;
  margin: 50px auto;
  outline: none;
}
.timer {
  width: 300px;
  padding: 0 20px;
  li {
    .hint {
      height: 40px;
    }
    span {
      transition: all 0.8s linear;
    }
  }
}

.selected0 {
  transform: translate3d(0, 0, 0);
}
.selected1 {
  transform: translate3d(0, -40px, 0);
}
.selected2 {
  transform: translate3d(0, -80px, 0);
}
.selected3 {
  transform: translate3d(0, -120px, 0);
}
.selected4 {
  transform: translate3d(0, -160px, 0);
}
.selected5 {
  transform: translate3d(0, -200px, 0);
}
.selected6 {
  transform: translate3d(0, -240px, 0);
}
.selected7 {
  transform: translate3d(0, -280px, 0);
}
.selected8 {
  transform: translate3d(0, -320px, 0);
}
.selected9 {
  transform: translate3d(0, -360px, 0);
}
</style>
