<template>
  <div class="base64-view">
    <ul class="tags">
      <li v-for="(item,index) in tags" @click="primaryFun(index)">
        <el-button :type="item.select ? 'primary' : ''">{{item.name}}</el-button>
      </li>
    </ul>
    <div class="base64">
      <input
        ref="uploadFile"
        class="upload-input"
        multiple
        type="file"
        @change="onFileChange"
        value="上传"
      >
      <div class="upload-demo">
        <div
          class="upload"
          @dragenter="isDragenter=true"
          @dragleave="isDragenter=false"
          @dragover.prevent
          @drop="ondragdrop"
          @click="$refs.uploadFile.click()"
        >
          <i class="el-icon-upload"></i>
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <div class="el-upload-text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
        </div>
        <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
      </div>
      <div class="img-base">
        <textarea
          id="textarea"
          v-model="tags[tagsSelect].value"
          ref="copyText"
          :placeholder="tags[tagsSelect].placeholder"
        ></textarea>
        <el-button type="success" round @click="copyText">复制</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import EXIF from "exif-js";
import "../public/css/upimg.less";
import "../public/js/canvas2svg.js";

Vue.use(ElementUI);
export default {
  data() {
    return {
      imageUrl: "",
      isDragenter: false,
      tagsSelect: 0,
      imgInnputFile: null,
      imgWidth: 0,
      imgHeight: 0,
      tags: [
        {
          name: "base64转化",
          select: true,
          placeholder: "base64",
          value: ""
        },
        {
          name: "图片元数据",
          select: false,
          placeholder: "获取图片所有元数据",
          value: ""
        },
        {
          name: "图片转svg",
          select: false,
          placeholder: "得到svg",
          value: ""
        }
      ]
    };
  },
  methods: {
    // 拖拽上传
    ondragdrop(e) {
      e.preventDefault();
      this.isDragenter = false;
      let files = [];
      // 拖拽的文件会放到 e.dataTransfer.files 里面
      files = e.dataTransfer.files;
      this.getImgBase(e.dataTransfer.files[0]);
    },
    onFileChange(e) {
      this.getImgBase(e.target.files[0]);
    },
    // 获取图片的base64地址
    getImgBase(file) {
      console.log(file);

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.imgInnputFile = file;

        // 宽高
        var image = new Image();
        image.src = reader.result;
        image.onload = () => {
          this.imgWidth = image.width;
          this.imgHeight = image.height;
          this.imgFile();
        };
      };
    },
    imgFile() {
      switch (Number(this.tagsSelect)) {
        case 0:
          this.tags[this.tagsSelect].value = this.imageUrl;
          break;
        case 1:
          this.exifFun(this.imgInnputFile);
          break;
        case 2:
          this.getSvg();
          break;
      }
    },
    // 切换
    primaryFun(i) {
      this.tags[this.tagsSelect].select = false;

      this.tagsSelect = i;

      this.tags[i].select = true;

      if (this.imageUrl != "") {
        this.imgFile();
      }
    },
    // 复制
    copyText() {
      this.$refs.copyText.select();
      this.$refs.copyText.setSelectionRange(0, 9999);
      document.execCommand("Copy");
    },
    // 元数据
    exifFun(file) {
      let that = this;

      EXIF.getData(file, function() {
        var _dataTxt = EXIF.pretty(this);
        var _dataJson = JSON.stringify(EXIF.getAllTags(this));

        that.tags[that.tagsSelect].value = _dataTxt;
      });
    },
    // 获取svg
    getSvg() {
      var ctx = new C2S(this.imgWidth, this.imgHeight); //width, height of your desired svg file
      //do your normal canvas stuff:

      // ctx.drawImage(this.imageUrl, this.imgWidth, this.imgHeight);

      ctx.drawImage(this.imageUrl, 0, 0, this.imgWidth, this.imgHeight);

      //ok lets serialize to SVG:
      var myRectangle = ctx.getSerializedSvg(true);

      var svg = ctx.getSvg();

      this.tags[this.tagsSelect].value = myRectangle;
    }
  }
};
</script>

<style lang="less">
.base64-view {
  padding: 30px 0;
}
.base64 {
  padding: 20px;
  box-sizing: border-box;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.upload-input {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
}

.upload-demo {
  width: 320px;

  .upload {
    width: 320px;
    height: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px dashed #d9d9d9;
    cursor: pointer;
    border-radius: 4px;
    position: relative;

    &:hover {
      border-color: #409eff;
    }

    .el-icon-upload {
      font-size: 67px;
      color: #c0c4cc;
      margin-bottom: 20px;
      line-height: 50px;
    }

    .avatar {
      position: absolute;
      height: 100%;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
    }

    .el-upload-text {
      color: #606266;
      font-size: 14px;
      text-align: center;

      em {
        color: #409eff;
        font-style: normal;
      }
    }
  }

  .el-upload-dragger,
  .el-upload--text {
    width: 320px;
  }
}

.el-upload__tip {
  width: 320px;
  text-align: center;
}

.img-base {
  width: 350px;

  textarea {
    display: block;
    width: 100%;
    min-height: 180px;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }

  .el-button.is-round {
    float: right;
    margin-top: 30px;
    width: 90px;
  }
}

.tags {
  list-style: none;
  display: flex;
  flex-direction: row;

  li {
    margin-right: 20px;
  }
}
</style>
