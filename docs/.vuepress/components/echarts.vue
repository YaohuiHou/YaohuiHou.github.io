<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
// import { debounce } from '@/utils'

export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    },
    dataWatch: {
      type: Number
    },
    dataTotal: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    dataWatch() {
      console.log("我来过");

      this.initChart();
    }
  },
  mounted() {
    this.chart = echarts.init(this.$el, "macarons");
    this.initChart();
  },
  methods: {
    initChart() {
      console.log(12);

      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          left: "center",
          bottom: "10",
          data: this.dataTotal.legend
        },
        calculable: true,
        series: [
          {
            name: this.dataTotal.name,
            type: "pie",
            roseType: "radius",
            radius: [15, 95],
            center: ["50%", "38%"],
            data: this.dataTotal.data,
            animationEasing: "cubicInOut",
            animationDuration: 2600
          }
        ]
      };
      this.chart.setOption(option);
    }
  }
};
</script>