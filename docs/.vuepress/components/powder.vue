<template>
  <div class="powder">
    <div class="boss-view">
      <img
        src="../public/img/nightking.png"
        alt="夜王"
        class="boss-img"
        id="target"
        @click="particles"
      >
      <div id="effect"/>
    </div>
    <el-button type="primary" style="margin-right:80px;" @click="particles">消失动画</el-button>
    <el-button type="success" @click="show">从新再来</el-button>
  </div>
</template>

<script>
import $ from "jquery";
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
export default {
  data() {
    return {
      html2canvas: null,
      finish: false
    };
  },
  mounted() {
    this.html2canvas = require("../public/js/html2canvas.min.js");
  },
  methods: {
    show() {
      const $target = $("#target");
      $target.css({
        opacity: 1,
        visibility: "visible",
        transition: "all ease 3s"
      });
    },
    particles() {
      const LAYER_COUNT = 32;
      const TRANSITION_DURATION = 40;
      const TRANSITION_DELAY = 3;

      let currentLayerCount = LAYER_COUNT;

      const $target = $("#target");
      const target = $target[0];

      const $effect = $("#effect");

      const hideTarget = () => {
        $target.css({
          transition: `opacity ${TRANSITION_DURATION} ease`,
          opacity: 0
        });

        delay(1e3 * TRANSITION_DURATION).then(() => {
          $target.css("visibility", "hidden");
        });
      };

      const showTarget = () => {
        $target.css({
          opacity: 1,
          visibility: "visible",
          transition: "all ease 3s"
        });
      };

      const play = layerCount => {
        showTarget();

        const bRect = target.getBoundingClientRect();
        $effect.css({
          width: bRect.width,
          height: bRect.height
        });

        this.html2canvas(target, {
          backgroundColor: null,
          useCORS: true
        }).then(canvas => {
          console.log("变渣渣");

          const context = canvas.getContext("2d");
          const { width, height } = canvas;

          // get element imageData
          const imgData = context.getImageData(0, 0, width, height);
          // init empty imageData
          const effectImgDatas = [];
          for (let i = 0; i < layerCount; i++) {
            effectImgDatas.push(context.createImageData(width, height));
          }
          sampler(effectImgDatas, imgData, width, height, layerCount);

          // create cloned canvases
          for (let i = 0; i < layerCount; i++) {
            const canvasClone = canvas.cloneNode();
            canvasClone.getContext("2d").putImageData(effectImgDatas[i], 0, 0);

            const $canvas = $(canvasClone);
            const transitionDelay = TRANSITION_DELAY * (i / layerCount);
            $canvas.css({ "transition-delay": `${transitionDelay}s` });
            $effect.append($canvas);

            delay(0).then(() => {
              const rotate1 = 10 * (Math.random() - 0.5);
              const rotate2 = 10 * (Math.random() - 0.5);
              const fac = 2 * Math.PI * (Math.random() - 0.5);
              const translateX = 40 * Math.cos(fac);
              const translateY = 10 * Math.sin(fac);
              // const translateX = -100;
              // const translateY = 10 * Math.sin(fac);

              $canvas.css({
                transform: `rotate(${rotate1}deg) translate(${translateX}px, ${translateY}px) rotate(${rotate2}deg)`,
                opacity: 0
              });

              const removeDelay =
                300 * (TRANSITION_DURATION + 1 + Math.random());
              delay(removeDelay).then(() => {
                $canvas.remove();
              });
            });

            hideTarget();
          }
          setTimeout(() => {
            this.finish = true;
          }, 3300);
        });
      };

      function sampler(imgDatas, sourceImgData, width, height, layerCount) {
        for (let x = 0; x < width; x++) {
          for (let y = 0; y < height; y++) {
            for (let l = 0; l < 2; l++) {
              // random piece index which tend to grow with x
              const pieceIndex = Math.floor(
                (layerCount * (Math.random() + (2 * x) / width)) / 3
              );
              const pixelPos = 4 * (y * width + x);
              for (let rgbaIndex = 0; rgbaIndex < 4; rgbaIndex++) {
                const dataPos = pixelPos + rgbaIndex;
                imgDatas[pieceIndex].data[dataPos] =
                  sourceImgData.data[dataPos];
              }
            }
          }
        }
      }

      function delay(ms) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, ms);
        });
      }
      play(currentLayerCount);
    }
  }
};
</script>

<style lang="less">
.powder {
  width: 100%;
  min-height: 500px;
  .boss-view {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.8);
    margin-bottom: 30px;
    position: relative;
    #effect {
      position: absolute;
      width: 28.4vw;
      margin: auto;
      left: 0 !important;
      right: 0;
      top: 0 !important;
      bottom: 0;
      background: transparent;
    }
    #effect canvas {
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 1.5s ease-out, opacity 1.5s ease-out;
    }
  }
}
</style>
