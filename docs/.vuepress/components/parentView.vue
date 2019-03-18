<template>
  <div class="chart-wrapper">
    <pieChart :dataTotal="pieData" :dataWatch="dataWatch"/>
  </div>
</template>

<script>
import pieChart from "./echarts.vue";
export default {
  components: {
    pieChart
  },
  data() {
    return {
      dataWatch: 1,
      pieData: {
        legend: ["高危", "中危", "低危", "严重"],
        name: "漏洞等级分布",
        data: []
      },
      data: {
        errno: 0,
        data: [
          { name: 0, value: 9 },
          { name: 1, value: 1 },
          { name: 2, value: 1 },
          { name: 3, value: 1 }
        ],
        errmsg: "成功"
      }
    };
  },
  mounted() {
    setTimeout(() => {
      let data = [];
      this.data.data.forEach(ele => {
        switch (ele.name) {
          case 0:
            ele.name = "低危";
            break;
          case 1:
            ele.name = "中危";
            break;
          case 2:
            ele.name = "高危";
            break;
          case 3:
            ele.name = "严重";
            break;
        }
        data.push(ele);
      });
      this.$set(this.pieData, "data", data);
      this.dataWatch = 2;
      console.log(this.pieData);
    }, 3e3);
  }
};
</script>

<style>
</style>
