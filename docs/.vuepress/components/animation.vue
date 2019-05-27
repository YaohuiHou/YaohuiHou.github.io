<template>
  <div class="aniamtion-view">
    <span :class="[,addAnimat,animate?'animated animate-span':'animate-span']">
      <h3>Aniamtion.css</h3>
    </span>
    <div class="select-view">
      <el-select v-model="value" filterable @change="changeSelect" placeholder="请选择">
        <el-option-group v-for="group in options" :key="group.label" :label="group.label">
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-option-group>
      </el-select>
      <el-button type="primary" style="margin-left:40px;" @click="changeSelect(0)">Aniamte it</el-button>
    </div>
    <div class="img-base1">
      <textarea
        id="textarea"
        v-model="animateStyle[value]"
        ref="copyText1"
        placeholder="在这里复制animation样式"
      ></textarea>
      <el-button type="success" round @click="copyTextFun">复制</el-button>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "../public/css/animate.min.css";

Vue.use(ElementUI);
export default {
  data() {
    return {
      value: "",
      addAnimat: "",
      animate: false,
      copyTextValue: "",
      options: [
        {
          label: "Attention Seekers",
          options: [
            { value: "bounce", label: "bounce" },
            { value: "flash", label: "flash" },
            { value: "pulse", label: "pulse" },
            { value: "rubberBand", label: "rubberBand" },
            { value: "shake", label: "shake" },
            { value: "swing", label: "swing" },
            { value: "tada", label: "tada" },
            { value: "wobble", label: "wobble" },
            { value: "jello", label: "jello" },
            { value: "heartBeat", label: "heartBeat" }
          ]
        },
        {
          label: "Bouncing Entrances",
          options: [
            { value: "bounceIn", label: "bounceIn" },
            { value: "bounceInDown", label: "bounceInDown" },
            { value: "bounceInLeft", label: "bounceInLeft" },
            { value: "bounceInRight", label: "bounceInRight" },
            { value: "bounceInUp", label: "bounceInUp" }
          ]
        },
        {
          label: "Bouncing Exits",
          options: [
            { value: "bounceOut", label: "bounceOut" },
            { value: "bounceOutDown", label: "bounceOutDown" },
            { value: "bounceOutLeft", label: "bounceOutLeft" },
            { value: "bounceOutRight", label: "bounceOutRight" },
            { value: "bounceOutUp", label: "bounceOutUp" }
          ]
        },
        {
          label: "Fading Entrances",
          options: [
            { value: "fadeIn", label: "fadeIn" },
            { value: "fadeInDown", label: "fadeInDown" },
            { value: "fadeInDownBig", label: "fadeInDownBig" },
            { value: "fadeInLeft", label: "fadeInLeft" },
            { value: "fadeInLeftBig", label: "fadeInLeftBig" },
            { value: "fadeInRight", label: "fadeInRight" },
            { value: "fadeInRightBig", label: "fadeInRightBig" },
            { value: "fadeInUp", label: "fadeInUp" },
            { value: "fadeInUpBig", label: "fadeInUpBig" }
          ]
        },
        {
          label: "Fading Exits",
          options: [
            { value: "fadeOut", label: "fadeOut" },
            { value: "fadeOutDown", label: "fadeOutDown" },
            { value: "fadeOutDownBig", label: "fadeOutDownBig" },
            { value: "fadeOutLeft", label: "fadeOutLeft" },
            { value: "fadeOutLeftBig", label: "fadeOutLeftBig" },
            { value: "fadeOutRight", label: "fadeOutRight" },
            { value: "fadeOutRightBig", label: "fadeOutRightBig" },
            { value: "fadeOutUp", label: "fadeOutUp" },
            { value: "fadeOutUpBig", label: "fadeOutUpBig" }
          ]
        },
        {
          label: "Flippers",
          options: [
            { value: "flip", label: "flip" },
            { value: "flipInX", label: "flipInX" },
            { value: "flipInY", label: "flipInY" },
            { value: "flipOutX", label: "flipOutX" },
            { value: "flipOutY", label: "flipOutY" }
          ]
        },
        {
          label: "Lightspeed",
          options: [
            { value: "lightSpeedIn", label: "lightSpeedIn" },
            { value: "lightSpeedOut", label: "lightSpeedOut" }
          ]
        },
        {
          label: "Rotating Entrances",
          options: [
            { value: "rotateIn", label: "rotateIn" },
            { value: "rotateInDownLeft", label: "rotateInDownLeft" },
            { value: "rotateInDownRight", label: "rotateInDownRight" },
            { value: "rotateInUpLeft", label: "rotateInUpLeft" },
            { value: "rotateInUpRight", label: "rotateInUpRight" }
          ]
        },
        {
          label: "Rotating Exits",
          options: [
            { value: "rotateOut", label: "rotateOut" },
            { value: "rotateOutDownLeft", label: "rotateOutDownLeft" },
            { value: "rotateOutDownRight", label: "rotateOutDownRight" },
            { value: "rotateOutUpLeft", label: "rotateOutUpLeft" },
            { value: "rotateOutUpRight", label: "rotateOutUpRight" }
          ]
        },
        {
          label: "Sliding Entrances",
          options: [
            { value: "slideInUp", label: "slideInUp" },
            { value: "slideInDown", label: "slideInDown" },
            { value: "slideInLeft", label: "slideInLeft" },
            { value: "slideInRight", label: "slideInRight" }
          ]
        },
        {
          label: "Sliding Exits",
          options: [
            { value: "slideOutUp", label: "slideOutUp" },
            { value: "slideOutDown", label: "slideOutDown" },
            { value: "slideOutLeft", label: "slideOutLeft" },
            { value: "slideOutRight", label: "slideOutRight" }
          ]
        },
        {
          label: "Zoom Entrances",
          options: [
            { value: "zoomIn", label: "zoomIn" },
            { value: "zoomInDown", label: "zoomInDown" },
            { value: "zoomInLeft", label: "zoomInLeft" },
            { value: "zoomInRight", label: "zoomInRight" },
            { value: "zoomInUp", label: "zoomInUp" }
          ]
        },
        {
          label: "Zoom Exits",
          options: [
            { value: "zoomOut", label: "zoomOut" },
            { value: "zoomOutDown", label: "zoomOutDown" },
            { value: "zoomOutLeft", label: "zoomOutLeft" },
            { value: "zoomOutRight", label: "zoomOutRight" },
            { value: "zoomOutUp", label: "zoomOutUp" }
          ]
        },
        {
          label: "Specials",
          options: [
            { value: "hinge", label: "hinge" },
            { value: "jackInTheBox", label: "jackInTheBox" },
            { value: "rollIn", label: "rollIn" },
            { value: "rollOut", label: "rollOut" }
          ]
        }
      ],
      animateStyle: {
        bounce: `
        @keyframes bounce {
            0%,20%,53%,80%,to {
                -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
                -webkit-transform: translateZ(0);
                animation-timing-function: cubic-bezier(.215,.61,.355,1);
                transform: translateZ(0)
            }

            40%,43% {
                -webkit-animation-timing-function: cubic-bezier(.755,.05,.855,.06);
                -webkit-transform: translate3d(0,-30px,0);
                animation-timing-function: cubic-bezier(.755,.05,.855,.06);
                transform: translate3d(0,-30px,0)
            }

            70% {
                -webkit-animation-timing-function: cubic-bezier(.755,.05,.855,.06);
                -webkit-transform: translate3d(0,-15px,0);
                animation-timing-function: cubic-bezier(.755,.05,.855,.06);
                transform: translate3d(0,-15px,0)
            }

            90% {
                -webkit-transform: translate3d(0,-4px,0);
                transform: translate3d(0,-4px,0)
            }
        }`,
        flash: `
        @keyframes flash {
            0%,50%,to {
                opacity: 1
            }

            25%,75% {
                opacity: 0
            }
        }`,
        pulse: `
        @keyframes pulse {
            0% {
                -webkit-transform: scaleX(1);
                transform: scaleX(1)
            }

            50% {
                -webkit-transform: scale3d(1.05,1.05,1.05);
                transform: scale3d(1.05,1.05,1.05)
            }

            to {
                -webkit-transform: scaleX(1);
                transform: scaleX(1)
            }
        }`,
        rubberBand: `
        @keyframes rubberBand {
            0% {
                -webkit-transform: scaleX(1);
                transform: scaleX(1)
            }

            30% {
                -webkit-transform: scale3d(1.25,.75,1);
                transform: scale3d(1.25,.75,1)
            }

            40% {
                -webkit-transform: scale3d(.75,1.25,1);
                transform: scale3d(.75,1.25,1)
            }

            50% {
                -webkit-transform: scale3d(1.15,.85,1);
                transform: scale3d(1.15,.85,1)
            }

            65% {
                -webkit-transform: scale3d(.95,1.05,1);
                transform: scale3d(.95,1.05,1)
            }

            75% {
                -webkit-transform: scale3d(1.05,.95,1);
                transform: scale3d(1.05,.95,1)
            }

            to {
                -webkit-transform: scaleX(1);
                transform: scaleX(1)
            }
        }`,
        shake: `
        @keyframes shake {
            0%,to {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }

            10%,30%,50%,70%,90% {
                -webkit-transform: translate3d(-10px,0,0);
                transform: translate3d(-10px,0,0)
            }

            20%,40%,60%,80% {
                -webkit-transform: translate3d(10px,0,0);
                transform: translate3d(10px,0,0)
            }
        }`,
        headShake: `
        @keyframes headShake {
            0% {
                -webkit-transform: translateX(0);
                transform: translateX(0)
            }

            6.5% {
                -webkit-transform: translateX(-6px) rotateY(-9deg);
                transform: translateX(-6px) rotateY(-9deg)
            }

            18.5% {
                -webkit-transform: translateX(5px) rotateY(7deg);
                transform: translateX(5px) rotateY(7deg)
            }

            31.5% {
                -webkit-transform: translateX(-3px) rotateY(-5deg);
                transform: translateX(-3px) rotateY(-5deg)
            }

            43.5% {
                -webkit-transform: translateX(2px) rotateY(3deg);
                transform: translateX(2px) rotateY(3deg)
            }

            50% {
                -webkit-transform: translateX(0);
                transform: translateX(0)
            }
        }`,
        swing: `
        @keyframes swing {
            20% {
                -webkit-transform: rotate(15deg);
                transform: rotate(15deg)
            }

            40% {
                -webkit-transform: rotate(-10deg);
                transform: rotate(-10deg)
            }

            60% {
                -webkit-transform: rotate(5deg);
                transform: rotate(5deg)
            }

            80% {
                -webkit-transform: rotate(-5deg);
                transform: rotate(-5deg)
            }

            to {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg)
            }
        }`,
        tada: `
        @keyframes tada {
            0% {
                -webkit-transform: scaleX(1);
                transform: scaleX(1)
            }

            10%,20% {
                -webkit-transform: scale3d(.9,.9,.9) rotate(-3deg);
                transform: scale3d(.9,.9,.9) rotate(-3deg)
            }

            30%,50%,70%,90% {
                -webkit-transform: scale3d(1.1,1.1,1.1) rotate(3deg);
                transform: scale3d(1.1,1.1,1.1) rotate(3deg)
            }

            40%,60%,80% {
                -webkit-transform: scale3d(1.1,1.1,1.1) rotate(-3deg);
                transform: scale3d(1.1,1.1,1.1) rotate(-3deg)
            }

            to {
                -webkit-transform: scaleX(1);
                transform: scaleX(1)
            }
        }`,
        wobble: `
        @keyframes wobble {
            0% {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }

            15% {
                -webkit-transform: translate3d(-25%,0,0) rotate(-5deg);
                transform: translate3d(-25%,0,0) rotate(-5deg)
            }

            30% {
                -webkit-transform: translate3d(20%,0,0) rotate(3deg);
                transform: translate3d(20%,0,0) rotate(3deg)
            }

            45% {
                -webkit-transform: translate3d(-15%,0,0) rotate(-3deg);
                transform: translate3d(-15%,0,0) rotate(-3deg)
            }

            60% {
                -webkit-transform: translate3d(10%,0,0) rotate(2deg);
                transform: translate3d(10%,0,0) rotate(2deg)
            }

            75% {
                -webkit-transform: translate3d(-5%,0,0) rotate(-1deg);
                transform: translate3d(-5%,0,0) rotate(-1deg)
            }

            to {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }
        }`,
        jello: `
        @keyframes jello {
            0%,11.1%,to {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }

            22.2% {
                -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
                transform: skewX(-12.5deg) skewY(-12.5deg)
            }

            33.3% {
                -webkit-transform: skewX(6.25deg) skewY(6.25deg);
                transform: skewX(6.25deg) skewY(6.25deg)
            }

            44.4% {
                -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
                transform: skewX(-3.125deg) skewY(-3.125deg)
            }

            55.5% {
                -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
                transform: skewX(1.5625deg) skewY(1.5625deg)
            }

            66.6% {
                -webkit-transform: skewX(-.78125deg) skewY(-.78125deg);
                transform: skewX(-.78125deg) skewY(-.78125deg)
            }

            77.7% {
                -webkit-transform: skewX(.390625deg) skewY(.390625deg);
                transform: skewX(.390625deg) skewY(.390625deg)
            }

            88.8% {
                -webkit-transform: skewX(-.1953125deg) skewY(-.1953125deg);
                transform: skewX(-.1953125deg) skewY(-.1953125deg)
            }
        }`,
        heartBeat: `
        @keyframes heartBeat {
            0% {
                -webkit-transform: scale(1);
                transform: scale(1)
            }

            14% {
                -webkit-transform: scale(1.3);
                transform: scale(1.3)
            }

            28% {
                -webkit-transform: scale(1);
                transform: scale(1)
            }

            42% {
                -webkit-transform: scale(1.3);
                transform: scale(1.3)
            }

            70% {
                -webkit-transform: scale(1);
                transform: scale(1)
            }
        }`,
        bounceIn: `
        @keyframes bounceIn {
            0%,20%,40%,60%,80%,to {
                -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
                animation-timing-function: cubic-bezier(.215,.61,.355,1)
            }

            0% {
                -webkit-transform: scale3d(.3,.3,.3);
                opacity: 0;
                transform: scale3d(.3,.3,.3)
            }

            20% {
                -webkit-transform: scale3d(1.1,1.1,1.1);
                transform: scale3d(1.1,1.1,1.1)
            }

            40% {
                -webkit-transform: scale3d(.9,.9,.9);
                transform: scale3d(.9,.9,.9)
            }

            60% {
                -webkit-transform: scale3d(1.03,1.03,1.03);
                opacity: 1;
                transform: scale3d(1.03,1.03,1.03)
            }

            80% {
                -webkit-transform: scale3d(.97,.97,.97);
                transform: scale3d(.97,.97,.97)
            }

            to {
                -webkit-transform: scaleX(1);
                opacity: 1;
                transform: scaleX(1)
            }
        }`,
        bounceInDown: `
        @keyframes bounceInDown {
            0%,60%,75%,90%,to {
                -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
                animation-timing-function: cubic-bezier(.215,.61,.355,1)
            }

            0% {
                -webkit-transform: translate3d(0,-3000px,0);
                opacity: 0;
                transform: translate3d(0,-3000px,0)
            }

            60% {
                -webkit-transform: translate3d(0,25px,0);
                opacity: 1;
                transform: translate3d(0,25px,0)
            }

            75% {
                -webkit-transform: translate3d(0,-10px,0);
                transform: translate3d(0,-10px,0)
            }

            90% {
                -webkit-transform: translate3d(0,5px,0);
                transform: translate3d(0,5px,0)
            }

            to {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }
        }`,
        bounceInLeft: `
        @keyframes bounceInLeft {
            0%,60%,75%,90%,to {
                -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
                animation-timing-function: cubic-bezier(.215,.61,.355,1)
            }

            0% {
                -webkit-transform: translate3d(-3000px,0,0);
                opacity: 0;
                transform: translate3d(-3000px,0,0)
            }

            60% {
                -webkit-transform: translate3d(25px,0,0);
                opacity: 1;
                transform: translate3d(25px,0,0)
            }

            75% {
                -webkit-transform: translate3d(-10px,0,0);
                transform: translate3d(-10px,0,0)
            }

            90% {
                -webkit-transform: translate3d(5px,0,0);
                transform: translate3d(5px,0,0)
            }

            to {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }
        }`,
        bounceInRight: `
        @keyframes bounceInRight {
            0%,60%,75%,90%,to {
                -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
                animation-timing-function: cubic-bezier(.215,.61,.355,1)
            }

            0% {
                -webkit-transform: translate3d(3000px,0,0);
                opacity: 0;
                transform: translate3d(3000px,0,0)
            }

            60% {
                -webkit-transform: translate3d(-25px,0,0);
                opacity: 1;
                transform: translate3d(-25px,0,0)
            }

            75% {
                -webkit-transform: translate3d(10px,0,0);
                transform: translate3d(10px,0,0)
            }

            90% {
                -webkit-transform: translate3d(-5px,0,0);
                transform: translate3d(-5px,0,0)
            }

            to {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }
        }`,
        bounceInUp: `
        @keyframes bounceInUp {
            0%,60%,75%,90%,to {
                -webkit-animation-timing-function: cubic-bezier(.215,.61,.355,1);
                animation-timing-function: cubic-bezier(.215,.61,.355,1)
            }

            0% {
                -webkit-transform: translate3d(0,3000px,0);
                opacity: 0;
                transform: translate3d(0,3000px,0)
            }

            60% {
                -webkit-transform: translate3d(0,-20px,0);
                opacity: 1;
                transform: translate3d(0,-20px,0)
            }

            75% {
                -webkit-transform: translate3d(0,10px,0);
                transform: translate3d(0,10px,0)
            }

            90% {
                -webkit-transform: translate3d(0,-5px,0);
                transform: translate3d(0,-5px,0)
            }

            to {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }
        }`,
        bounceOut: `
        @keyframes bounceOut {
            20% {
                -webkit-transform: scale3d(.9,.9,.9);
                transform: scale3d(.9,.9,.9)
            }

            50%,55% {
                -webkit-transform: scale3d(1.1,1.1,1.1);
                opacity: 1;
                transform: scale3d(1.1,1.1,1.1)
            }

            to {
                -webkit-transform: scale3d(.3,.3,.3);
                opacity: 0;
                transform: scale3d(.3,.3,.3)
            }
        }`,
        bounceOutDown: `
        @keyframes bounceOutDown {
            20% {
                -webkit-transform: translate3d(0,10px,0);
                transform: translate3d(0,10px,0)
            }

            40%,45% {
                -webkit-transform: translate3d(0,-20px,0);
                opacity: 1;
                transform: translate3d(0,-20px,0)
            }

            to {
                -webkit-transform: translate3d(0,2000px,0);
                opacity: 0;
                transform: translate3d(0,2000px,0)
            }
        }`,
        bounceOutLeft: `
        @keyframes bounceOutLeft {
            20% {
                -webkit-transform: translate3d(20px,0,0);
                opacity: 1;
                transform: translate3d(20px,0,0)
            }

            to {
                -webkit-transform: translate3d(-2000px,0,0);
                opacity: 0;
                transform: translate3d(-2000px,0,0)
            }
        }`,
        bounceOutRight: `
        @keyframes bounceOutRight {
            20% {
                -webkit-transform: translate3d(-20px,0,0);
                opacity: 1;
                transform: translate3d(-20px,0,0)
            }

            to {
                -webkit-transform: translate3d(2000px,0,0);
                opacity: 0;
                transform: translate3d(2000px,0,0)
            }
        }`,
        bounceOutUp: `
        @keyframes bounceOutUp {
            20% {
                -webkit-transform: translate3d(0,-10px,0);
                transform: translate3d(0,-10px,0)
            }

            40%,45% {
                -webkit-transform: translate3d(0,20px,0);
                opacity: 1;
                transform: translate3d(0,20px,0)
            }

            to {
                -webkit-transform: translate3d(0,-2000px,0);
                opacity: 0;
                transform: translate3d(0,-2000px,0)
            }
        }`,
        fadeIn: `
        @keyframes fadeIn {
            0% {
                opacity: 0
            }

            to {
                opacity: 1
            }
        }`,
        fadeInDown: `
        @keyframes fadeInDown {
            0% {
                -webkit-transform: translate3d(0,-100%,0);
                opacity: 0;
                transform: translate3d(0,-100%,0)
            }

            to {
                -webkit-transform: translateZ(0);
                opacity: 1;
                transform: translateZ(0)
            }
        }`,
        fadeInDownBig: `
        @keyframes fadeInDownBig {
            0% {
                -webkit-transform: translate3d(0,-2000px,0);
                opacity: 0;
                transform: translate3d(0,-2000px,0)
            }

            to {
                -webkit-transform: translateZ(0);
                opacity: 1;
                transform: translateZ(0)
            }
        }`,
        fadeInLeft: `
        @keyframes fadeInLeft {
            0% {
                -webkit-transform: translate3d(-100%,0,0);
                opacity: 0;
                transform: translate3d(-100%,0,0)
            }

            to {
                -webkit-transform: translateZ(0);
                opacity: 1;
                transform: translateZ(0)
            }
        }`,
        fadeInLeftBig: `
        @keyframes fadeInLeftBig {
            0% {
                -webkit-transform: translate3d(-2000px,0,0);
                opacity: 0;
                transform: translate3d(-2000px,0,0)
            }

            to {
                -webkit-transform: translateZ(0);
                opacity: 1;
                transform: translateZ(0)
            }
        }`,
        fadeInRight: `
        @keyframes fadeInRight {
            0% {
                -webkit-transform: translate3d(100%,0,0);
                opacity: 0;
                transform: translate3d(100%,0,0)
            }

            to {
                -webkit-transform: translateZ(0);
                opacity: 1;
                transform: translateZ(0)
            }
        }`,
        fadeInRightBig: `
        @keyframes fadeInRightBig {
            0% {
                -webkit-transform: translate3d(2000px,0,0);
                opacity: 0;
                transform: translate3d(2000px,0,0)
            }

            to {
                -webkit-transform: translateZ(0);
                opacity: 1;
                transform: translateZ(0)
            }
        }`,
        fadeInUp: `
        @keyframes fadeInUp {
            0% {
                -webkit-transform: translate3d(0,100%,0);
                opacity: 0;
                transform: translate3d(0,100%,0)
            }

            to {
                -webkit-transform: translateZ(0);
                opacity: 1;
                transform: translateZ(0)
            }
        }`,
        fadeInUpBig: `
        @keyframes fadeInUpBig {
            0% {
                -webkit-transform: translate3d(0,2000px,0);
                opacity: 0;
                transform: translate3d(0,2000px,0)
            }

            to {
                -webkit-transform: translateZ(0);
                opacity: 1;
                transform: translateZ(0)
            }
        }`,
        fadeOut: `
        @keyframes fadeOut {
            0% {
                opacity: 1
            }

            to {
                opacity: 0
            }
        }`,
        fadeOutDown: `
        @keyframes fadeOutDown {
            0% {
                opacity: 1
            }

            to {
                -webkit-transform: translate3d(0,100%,0);
                opacity: 0;
                transform: translate3d(0,100%,0)
            }
        }`,
        fadeOutDownBig: `
        @keyframes fadeOutDownBig {
            0% {
                opacity: 1
            }

            to {
                -webkit-transform: translate3d(0,2000px,0);
                opacity: 0;
                transform: translate3d(0,2000px,0)
            }
        }
        `,
        fadeOutLeft: `
        @keyframes fadeOutLeft {
            0% {
                opacity: 1
            }

            to {
                -webkit-transform: translate3d(-100%,0,0);
                opacity: 0;
                transform: translate3d(-100%,0,0)
            }
        }
        `,
        fadeOutLeftBig: `
        @keyframes fadeOutLeftBig {
            0% {
                opacity: 1
            }

            to {
                -webkit-transform: translate3d(-2000px,0,0);
                opacity: 0;
                transform: translate3d(-2000px,0,0)
            }
        }
        `,
        fadeOutRight: `
        @keyframes fadeOutRight {
            0% {
                opacity: 1
            }

            to {
                -webkit-transform: translate3d(100%,0,0);
                opacity: 0;
                transform: translate3d(100%,0,0)
            }
        }
        `,
        fadeOutRightBig: `
        @keyframes fadeOutRightBig {
            0% {
                opacity: 1
            }

            to {
                -webkit-transform: translate3d(2000px,0,0);
                opacity: 0;
                transform: translate3d(2000px,0,0)
            }
        }`,
        fadeOutUp: `
        @keyframes fadeOutUp {
            0% {
                opacity: 1
            }

            to {
                -webkit-transform: translate3d(0,-100%,0);
                opacity: 0;
                transform: translate3d(0,-100%,0)
            }
        }`,
        fadeOutUpBig: `
        @keyframes fadeOutUpBig {
            0% {
                opacity: 1
            }

            to {
                -webkit-transform: translate3d(0,-2000px,0);
                opacity: 0;
                transform: translate3d(0,-2000px,0)
            }
        }`,
        flipInX: `
        @keyframes flipInX {
            0% {
                -webkit-animation-timing-function: ease-in;
                -webkit-transform: perspective(400px) rotateX(90deg);
                animation-timing-function: ease-in;
                opacity: 0;
                transform: perspective(400px) rotateX(90deg)
            }

            40% {
                -webkit-animation-timing-function: ease-in;
                -webkit-transform: perspective(400px) rotateX(-20deg);
                animation-timing-function: ease-in;
                transform: perspective(400px) rotateX(-20deg)
            }

            60% {
                -webkit-transform: perspective(400px) rotateX(10deg);
                opacity: 1;
                transform: perspective(400px) rotateX(10deg)
            }

            80% {
                -webkit-transform: perspective(400px) rotateX(-5deg);
                transform: perspective(400px) rotateX(-5deg)
            }

            to {
                -webkit-transform: perspective(400px);
                transform: perspective(400px)
            }
        }`,
        flipInY: `
        @keyframes flipInY {
            0% {
                -webkit-animation-timing-function: ease-in;
                -webkit-transform: perspective(400px) rotateY(90deg);
                animation-timing-function: ease-in;
                opacity: 0;
                transform: perspective(400px) rotateY(90deg)
            }

            40% {
                -webkit-animation-timing-function: ease-in;
                -webkit-transform: perspective(400px) rotateY(-20deg);
                animation-timing-function: ease-in;
                transform: perspective(400px) rotateY(-20deg)
            }

            60% {
                -webkit-transform: perspective(400px) rotateY(10deg);
                opacity: 1;
                transform: perspective(400px) rotateY(10deg)
            }

            80% {
                -webkit-transform: perspective(400px) rotateY(-5deg);
                transform: perspective(400px) rotateY(-5deg)
            }

            to {
                -webkit-transform: perspective(400px);
                transform: perspective(400px)
            }
        }`,
        flipOutX: `
        @keyframes flipOutX {
            0% {
                -webkit-transform: perspective(400px);
                transform: perspective(400px)
            }

            30% {
                -webkit-transform: perspective(400px) rotateX(-20deg);
                opacity: 1;
                transform: perspective(400px) rotateX(-20deg)
            }

            to {
                -webkit-transform: perspective(400px) rotateX(90deg);
                opacity: 0;
                transform: perspective(400px) rotateX(90deg)
            }
        }`,
        flipOutY: `
        @keyframes flipOutY {
            0% {
                -webkit-transform: perspective(400px);
                transform: perspective(400px)
            }

            30% {
                -webkit-transform: perspective(400px) rotateY(-15deg);
                opacity: 1;
                transform: perspective(400px) rotateY(-15deg)
            }

            to {
                -webkit-transform: perspective(400px) rotateY(90deg);
                opacity: 0;
                transform: perspective(400px) rotateY(90deg)
            }
        }`,
        lightSpeedIn: `
        @keyframes lightSpeedIn {
            0% {
                -webkit-transform: translate3d(100%,0,0) skewX(-30deg);
                opacity: 0;
                transform: translate3d(100%,0,0) skewX(-30deg)
            }

            60% {
                -webkit-transform: skewX(20deg);
                opacity: 1;
                transform: skewX(20deg)
            }

            80% {
                -webkit-transform: skewX(-5deg);
                transform: skewX(-5deg)
            }

            to {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }
        }`,
        lightSpeedOut: `
        @keyframes lightSpeedOut {
            0% {
                opacity: 1
            }

            to {
                -webkit-transform: translate3d(100%,0,0) skewX(30deg);
                opacity: 0;
                transform: translate3d(100%,0,0) skewX(30deg)
            }
        }`,
        rotateIn: `
        @keyframes rotateIn {
            0% {
                -webkit-transform: rotate(-200deg);
                -webkit-transform-origin: center;
                opacity: 0;
                transform: rotate(-200deg);
                transform-origin: center
            }

            to {
                -webkit-transform: translateZ(0);
                -webkit-transform-origin: center;
                opacity: 1;
                transform: translateZ(0);
                transform-origin: center
            }
        }`,
        rotateInDownLeft: `
        @keyframes rotateInDownLeft {
            0% {
                -webkit-transform: rotate(-45deg);
                -webkit-transform-origin: left bottom;
                opacity: 0;
                transform: rotate(-45deg);
                transform-origin: left bottom
            }

            to {
                -webkit-transform: translateZ(0);
                -webkit-transform-origin: left bottom;
                opacity: 1;
                transform: translateZ(0);
                transform-origin: left bottom
            }
        }`,
        rotateInDownRight: `
        @keyframes rotateInDownRight {
            0% {
                -webkit-transform: rotate(45deg);
                -webkit-transform-origin: right bottom;
                opacity: 0;
                transform: rotate(45deg);
                transform-origin: right bottom
            }

            to {
                -webkit-transform: translateZ(0);
                -webkit-transform-origin: right bottom;
                opacity: 1;
                transform: translateZ(0);
                transform-origin: right bottom
            }
        }`,
        rotateInUpLeft: `
        @keyframes rotateInUpLeft {
            0% {
                -webkit-transform: rotate(45deg);
                -webkit-transform-origin: left bottom;
                opacity: 0;
                transform: rotate(45deg);
                transform-origin: left bottom
            }

            to {
                -webkit-transform: translateZ(0);
                -webkit-transform-origin: left bottom;
                opacity: 1;
                transform: translateZ(0);
                transform-origin: left bottom
            }
        }`,
        rotateInUpRight: `
        @keyframes rotateInUpRight {
            0% {
                -webkit-transform: rotate(-90deg);
                -webkit-transform-origin: right bottom;
                opacity: 0;
                transform: rotate(-90deg);
                transform-origin: right bottom
            }

            to {
                -webkit-transform: translateZ(0);
                -webkit-transform-origin: right bottom;
                opacity: 1;
                transform: translateZ(0);
                transform-origin: right bottom
            }
        }`,
        rotateOut: `
        @keyframes rotateOut {
            0% {
                -webkit-transform-origin: center;
                opacity: 1;
                transform-origin: center
            }

            to {
                -webkit-transform: rotate(200deg);
                -webkit-transform-origin: center;
                opacity: 0;
                transform: rotate(200deg);
                transform-origin: center
            }
        }`,
        rotateOutDownLeft: `
        @keyframes rotateOutDownLeft {
            0% {
                -webkit-transform-origin: left bottom;
                opacity: 1;
                transform-origin: left bottom
            }

            to {
                -webkit-transform: rotate(45deg);
                -webkit-transform-origin: left bottom;
                opacity: 0;
                transform: rotate(45deg);
                transform-origin: left bottom
            }
        }`,
        rotateOutDownRight: `
        @keyframes rotateOutDownRight {
            0% {
                -webkit-transform-origin: right bottom;
                opacity: 1;
                transform-origin: right bottom
            }

            to {
                -webkit-transform: rotate(-45deg);
                -webkit-transform-origin: right bottom;
                opacity: 0;
                transform: rotate(-45deg);
                transform-origin: right bottom
            }
        }`,
        rotateOutUpLeft: `
        @keyframes rotateOutUpLeft {
            0% {
                -webkit-transform-origin: left bottom;
                opacity: 1;
                transform-origin: left bottom
            }

            to {
                -webkit-transform: rotate(-45deg);
                -webkit-transform-origin: left bottom;
                opacity: 0;
                transform: rotate(-45deg);
                transform-origin: left bottom
            }
        }`,
        rotateOutUpRight: `
        @keyframes rotateOutUpRight {
            0% {
                -webkit-transform-origin: right bottom;
                opacity: 1;
                transform-origin: right bottom
            }

            to {
                -webkit-transform: rotate(90deg);
                -webkit-transform-origin: right bottom;
                opacity: 0;
                transform: rotate(90deg);
                transform-origin: right bottom
            }
        }`,
        hinge: `
        @keyframes hinge {
            0% {
                -webkit-animation-timing-function: ease-in-out;
                -webkit-transform-origin: top left;
                animation-timing-function: ease-in-out;
                transform-origin: top left
            }

            20%,60% {
                -webkit-animation-timing-function: ease-in-out;
                -webkit-transform: rotate(80deg);
                -webkit-transform-origin: top left;
                animation-timing-function: ease-in-out;
                transform: rotate(80deg);
                transform-origin: top left
            }

            40%,80% {
                -webkit-animation-timing-function: ease-in-out;
                -webkit-transform: rotate(60deg);
                -webkit-transform-origin: top left;
                animation-timing-function: ease-in-out;
                opacity: 1;
                transform: rotate(60deg);
                transform-origin: top left
            }

            to {
                -webkit-transform: translate3d(0,700px,0);
                opacity: 0;
                transform: translate3d(0,700px,0)
            }
        }`,
        jackInTheBox: `
        @keyframes jackInTheBox {
            0% {
                -webkit-transform: scale(.1) rotate(30deg);
                -webkit-transform-origin: center bottom;
                opacity: 0;
                transform: scale(.1) rotate(30deg);
                transform-origin: center bottom
            }

            50% {
                -webkit-transform: rotate(-10deg);
                transform: rotate(-10deg)
            }

            70% {
                -webkit-transform: rotate(3deg);
                transform: rotate(3deg)
            }

            to {
                -webkit-transform: scale(1);
                opacity: 1;
                transform: scale(1)
            }
        }`,
        rollIn: `
        @keyframes rollIn {
            0% {
                -webkit-transform: translate3d(-100%,0,0) rotate(-120deg);
                opacity: 0;
                transform: translate3d(-100%,0,0) rotate(-120deg)
            }

            to {
                -webkit-transform: translateZ(0);
                opacity: 1;
                transform: translateZ(0)
            }
        }`,
        rollOut: `
        @keyframes rollOut {
            0% {
                opacity: 1
            }

            to {
                -webkit-transform: translate3d(100%,0,0) rotate(120deg);
                opacity: 0;
                transform: translate3d(100%,0,0) rotate(120deg)
            }
        }`,
        zoomIn: `
        @keyframes zoomIn {
            0% {
                -webkit-transform: scale3d(.3,.3,.3);
                opacity: 0;
                transform: scale3d(.3,.3,.3)
            }

            50% {
                opacity: 1
            }
        }`,
        zoomInDown: `
        @keyframes zoomInDown {
            0% {
                -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
                -webkit-transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0);
                animation-timing-function: cubic-bezier(.55,.055,.675,.19);
                opacity: 0;
                transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0)
            }

            60% {
                -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
                -webkit-transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
                animation-timing-function: cubic-bezier(.175,.885,.32,1);
                opacity: 1;
                transform: scale3d(.475,.475,.475) translate3d(0,60px,0)
            }
        }`,
        zoomInLeft: `
        @keyframes zoomInLeft {
            0% {
                -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
                -webkit-transform: scale3d(.1,.1,.1) translate3d(-1000px,0,0);
                animation-timing-function: cubic-bezier(.55,.055,.675,.19);
                opacity: 0;
                transform: scale3d(.1,.1,.1) translate3d(-1000px,0,0)
            }

            60% {
                -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
                -webkit-transform: scale3d(.475,.475,.475) translate3d(10px,0,0);
                animation-timing-function: cubic-bezier(.175,.885,.32,1);
                opacity: 1;
                transform: scale3d(.475,.475,.475) translate3d(10px,0,0)
            }
        }`,
        zoomInRight: `
        @keyframes zoomInRight {
            0% {
                -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
                -webkit-transform: scale3d(.1,.1,.1) translate3d(1000px,0,0);
                animation-timing-function: cubic-bezier(.55,.055,.675,.19);
                opacity: 0;
                transform: scale3d(.1,.1,.1) translate3d(1000px,0,0)
            }

            60% {
                -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
                -webkit-transform: scale3d(.475,.475,.475) translate3d(-10px,0,0);
                animation-timing-function: cubic-bezier(.175,.885,.32,1);
                opacity: 1;
                transform: scale3d(.475,.475,.475) translate3d(-10px,0,0)
            }
        }`,
        zoomInUp: `
        @keyframes zoomInUp {
            0% {
                -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
                -webkit-transform: scale3d(.1,.1,.1) translate3d(0,1000px,0);
                animation-timing-function: cubic-bezier(.55,.055,.675,.19);
                opacity: 0;
                transform: scale3d(.1,.1,.1) translate3d(0,1000px,0)
            }

            60% {
                -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
                -webkit-transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);
                animation-timing-function: cubic-bezier(.175,.885,.32,1);
                opacity: 1;
                transform: scale3d(.475,.475,.475) translate3d(0,-60px,0)
            }
        }`,
        zoomOut: `
        @keyframes zoomOut {
            0% {
                opacity: 1
            }

            50% {
                -webkit-transform: scale3d(.3,.3,.3);
                opacity: 0;
                transform: scale3d(.3,.3,.3)
            }

            to {
                opacity: 0
            }
        }`,
        zoomOutDown: `
        @keyframes zoomOutDown {
            40% {
                -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
                -webkit-transform: scale3d(.475,.475,.475) translate3d(0,-60px,0);
                animation-timing-function: cubic-bezier(.55,.055,.675,.19);
                opacity: 1;
                transform: scale3d(.475,.475,.475) translate3d(0,-60px,0)
            }

            to {
                -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
                -webkit-transform: scale3d(.1,.1,.1) translate3d(0,2000px,0);
                -webkit-transform-origin: center bottom;
                animation-timing-function: cubic-bezier(.175,.885,.32,1);
                opacity: 0;
                transform: scale3d(.1,.1,.1) translate3d(0,2000px,0);
                transform-origin: center bottom
            }
        }`,
        zoomOutLeft: `
        @keyframes zoomOutLeft {
            40% {
                -webkit-transform: scale3d(.475,.475,.475) translate3d(42px,0,0);
                opacity: 1;
                transform: scale3d(.475,.475,.475) translate3d(42px,0,0)
            }

            to {
                -webkit-transform: scale(.1) translate3d(-2000px,0,0);
                -webkit-transform-origin: left center;
                opacity: 0;
                transform: scale(.1) translate3d(-2000px,0,0);
                transform-origin: left center
            }
        }`,
        zoomOutRight: `
        @keyframes zoomOutRight {
            40% {
                -webkit-transform: scale3d(.475,.475,.475) translate3d(-42px,0,0);
                opacity: 1;
                transform: scale3d(.475,.475,.475) translate3d(-42px,0,0)
            }

            to {
                -webkit-transform: scale(.1) translate3d(2000px,0,0);
                -webkit-transform-origin: right center;
                opacity: 0;
                transform: scale(.1) translate3d(2000px,0,0);
                transform-origin: right center
            }
        }`,
        zoomOutUp: `
        @keyframes zoomOutUp {
            40% {
                -webkit-animation-timing-function: cubic-bezier(.55,.055,.675,.19);
                -webkit-transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
                animation-timing-function: cubic-bezier(.55,.055,.675,.19);
                opacity: 1;
                transform: scale3d(.475,.475,.475) translate3d(0,60px,0)
            }

            to {
                -webkit-animation-timing-function: cubic-bezier(.175,.885,.32,1);
                -webkit-transform: scale3d(.1,.1,.1) translate3d(0,-2000px,0);
                -webkit-transform-origin: center bottom;
                animation-timing-function: cubic-bezier(.175,.885,.32,1);
                opacity: 0;
                transform: scale3d(.1,.1,.1) translate3d(0,-2000px,0);
                transform-origin: center bottom
            }
        }`,
        slideInDown: `
        @keyframes slideInDown {
            0% {
                -webkit-transform: translate3d(0,-100%,0);
                transform: translate3d(0,-100%,0);
                visibility: visible
            }

            to {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }
        }`,
        slideInLeft: `
        @keyframes slideInLeft {
            0% {
                -webkit-transform: translate3d(-100%,0,0);
                transform: translate3d(-100%,0,0);
                visibility: visible
            }

            to {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }
        }`,
        slideInRight: `
        @keyframes slideInRight {
            0% {
                -webkit-transform: translate3d(100%,0,0);
                transform: translate3d(100%,0,0);
                visibility: visible
            }

            to {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }
        }`,
        slideInUp: `
        @keyframes slideInUp {
            0% {
                -webkit-transform: translate3d(0,100%,0);
                transform: translate3d(0,100%,0);
                visibility: visible
            }

            to {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }
        }`,
        slideOutDown: `
        @keyframes slideOutDown {
            0% {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }

            to {
                -webkit-transform: translate3d(0,100%,0);
                transform: translate3d(0,100%,0);
                visibility: hidden
            }
        }`,
        slideOutLeft: `
        @keyframes slideOutLeft {
            0% {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }

            to {
                -webkit-transform: translate3d(-100%,0,0);
                transform: translate3d(-100%,0,0);
                visibility: hidden
            }
        }`,
        slideOutRight: `
        @keyframes slideOutRight {
            0% {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }

            to {
                -webkit-transform: translate3d(100%,0,0);
                transform: translate3d(100%,0,0);
                visibility: hidden
            }
        }`,
        slideOutUp: `
        @keyframes slideOutUp {
            0% {
                -webkit-transform: translateZ(0);
                transform: translateZ(0)
            }

            to {
                -webkit-transform: translate3d(0,-100%,0);
                transform: translate3d(0,-100%,0);
                visibility: hidden
            }
        }`
      }
    };
  },
  methods: {
    changeSelect(v) {
      if (this.animate) return;
      this.animate = true;
      if (v) {
        this.addAnimat = v;
      } else {
        this.addAnimat = this.value;
      }
      setTimeout(() => {
        this.animate = false;
        this.addAnimat = "";
      }, 2e3);
    },
    // 复制
    copyTextFun() {
      this.$refs.copyText1.select();
      this.$refs.copyText1.setSelectionRange(0, 9999);
      document.execCommand("Copy");
    }
  }
};
</script>

<style lang="less">
.aniamtion-view {
  min-height: 300px;
  width: 450px;
  margin: 0 auto;
  .animate-span {
    display: block;
  }
  h3 {
    color: #f35626;
    background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: hue 60s infinite linear;
    font-size: 70px;
    line-height: 70px;
    margin-bottom: 50px;
    font-weight: 300;
  }
  .select-view {
  }
  .img-base1 {
    width: 450px;
    display: flex;
    flex-direction: row;
    margin-top: 50px;

    textarea {
      display: block;
      width: 100%;
      min-height: 180px;
      box-sizing: border-box;
      padding: 10px;
      border: 1px solid #eee;
    }

    .el-button {
      margin-left: 30px;
      width: 90px;
      height: 40px;
    }
  }
}

@keyframes hue {
  from {
    filter: hue-rotate(0deg);
  }

  to {
    filter: hue-rotate(-360deg);
  }
}
</style>
