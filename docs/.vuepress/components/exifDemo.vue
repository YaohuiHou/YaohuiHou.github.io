<template>
  <div class="exif-view">
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
        <img :src="imageUrl" class="avatar" id="exifImg">
        <div class="el-upload-text">
          将文件拖到此处，或
          <em>点击上传</em>
        </div>
      </div>
    </div>
    <div class="img-base">
      <textarea
        id="textarea"
        v-model="textareaVal"
        ref="copyText"
        placeholder="EXIF.getAllTags() 图片元数据"
      ></textarea>
    </div>
  </div>
</template>

<script>
import EXIF from "exif-js";
export default {
  data() {
    return {
      imageUrl: "",
      isDragenter: false,
      textareaVal: ""
    };
  },
  watch: {
    imageUrl(val) {}
  },
  mounted() {},
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
    getImgBase(file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.exifFun(file);
      };
    },
    exifFun(file) {
      let that = this;
      EXIF.getData(file, function() {
        console.log(this);

        var _dataTxt = EXIF.pretty(this);
        var _dataJson = JSON.stringify(EXIF.getAllTags(this));

        that.textareaVal = _dataTxt;
        console.log(_dataTxt);
      });
    }
  }
};
</script>


<style lang="less">
.upload-input {
  width: 0;
  height: 0;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
}
.exif-view {
  padding: 30px 20px;
  box-sizing: border-box;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .upload-demo {
    width: 320px;
    .upload {
      width: 320px;
      height: 300px;
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
  }
  .el-upload__tip {
    width: 320px;
    text-align: center;
  }
  .img-base {
    width: 350px;
    textarea {
      width: 100%;
      height: 300px;
      box-sizing: border-box;
      padding: 10px;
      border: 1px solid #eee;
      font-size: 14px;
      line-height: 20px;
    }
    .el-button.is-round {
      float: right;
      margin-top: 30px;
      width: 90px;
    }
  }
}
</style>
