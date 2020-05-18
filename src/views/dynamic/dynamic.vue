<template>
  <div class="dynamic">
    <header class="title">
      <span @click="handleClickGo">取消</span>
      <span @click="init">发布</span>
    </header>
    <div class="dynamic-input">
      <span>活动标题</span>
      <input type="text" v-model="Title" placeholder="输入本次活动的主要内容…" />
    </div>
    <main class="uploader">
      <van-uploader
        :before-read="beforeRead"
        accept="image/jpeg, image/png, image/jpg, video/mp4"
        :after-read="afterRead"
        :before-delete="afterDetele"
        slots="default"
        v-model="fileList"
        multiple
      />
    </main>
    <div class="textarea">
      <textarea placeholder="写下你此时此刻的感想吧…" v-model="Contents"></textarea>
      <img src="@/assets/images/icon/pl-emoji.png" alt />
    </div>
  </div>
</template>
<script>
//
import { uploadMedia, dynamicAdd } from '~api'

export default {
  data() {
    return {
      fileList: [],
      Title: '',
      Contents: '',
      Img: [],
      imgList: []
    }
  },
  methods: {
    beforeRead(file) {
      console.log(file)
      // 文件格式限制jpeg ,png ,jpg ,mp4
      //   if (
      //     file.type === 'image/jpeg' ||
      //     file.type === 'image/png' ||
      //     file.type === 'image/jpg' ||
      //     file.type === 'video/mp4'
      //   ) {
      //     return true
      //   } else {
      //     this.$toast('文件格式错误')
      //     return false
      //   }
      return true
    },
    afterDetele(e) {
      var j = 0
      this.fileList.forEach((item, i) => {
        if (item.file.name === e.file.name) {
          j = i
        }
      })
      this.fileList.splice(j, 1)
      console.log('删除第' + j + 1 + '张图片')
    },
    handleClickGo() {
      this.$router.go(-1)
    },
    init() {
      var that = this
      var Title = this.Title
      var Contents = this.Contents
      var Img = JSON.stringify(this.imgList)
      console.log(Title, Contents, Img)
      if (!Title) {
        this.$toast('请输入标题！')
        return
      } else if (!Contents) {
        this.$toast('请输入内容！')
        return
      }
      dynamicAdd({ Title, Contents, Img }).then(res => {
        // console.log(res)
        if (res.code === 0) {
          that.Title = ''
          that.Contents = ''
          that.imgList = []
        }
        that.$toast(res.msg)
      })
      //   var url = `/User/DynamicAdd?Title=${Title}&Contents=${Contents}&Img=${Img}`
      //   this.axios.post(url).then(res => {
      //     if (res.code == 0) {
      //       console.log(res)
      //       this.$toast(res.msg)
      //     } else {
      //       this.$toast(res.msg)
      //     }
      //   })
    },
    afterRead(file) {
      var that = this
      var param = new FormData()
      if (file instanceof Array) {
        file.forEach((item, index) => {
          param.append('file', item.file)
        })
      } else {
        param.append('file', file.file)
      }
      // 上传
      uploadMedia(param).then(res => {
        if (res.code === 0 && res.data.legth != 0) {
          var list = that.imgList
          res.data.forEach(item => {
            list.push(item)
          })
          console.log(list)
          that.imgList = list
        } else {
          that.$toast(res.msg)
        }
      })
    }
  },

  components: {}
}
</script>
<style lang="less" scoped>
@color-e: #eeeeee;
@color-9: #9e9e9e;
@color-8: #8b2c18;
@color-6: #666666;
@color-3: #333333;
@font-a: 0.28rem;
.dynamic {
  min-height: 100vh;
  background-color: @color-e;
  .title {
    box-sizing: border-box;
    padding: 0.32rem;
    display: flex;
    justify-content: space-between;
    font-size: @font-a;
    color: @color-6;
    border-bottom: 1px solid @color-e;
    background-color: #fff;
    span:last-child {
      color: @color-8;
    }
  }
  .uploader {
    box-sizing: border-box;
    padding: 0.12rem;
    border-bottom: 1px solid @color-e;
    background-color: #ffffff;
  }
  .textarea {
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 0.12rem 0.12rem 0.8rem 0.12rem;
    position: relative;
    textarea {
      display: block;
      width: 100%;
      border: 0;
      min-height: 3rem;
    }
    img {
      position: absolute;
      bottom: 0.12rem;
      right: 0.24rem;
      width: 0.52rem;
      height: 0.52rem;
    }
  }
}
.dynamic-input {
  box-sizing: border-box;
  padding: 0.24rem 0.12rem;
  display: flex;
  background-color: #fff;
  align-items: center;
  span {
    color: @color-6;
    font-size: @font-a;
    flex-shrink: 0;
    padding-right: 0.2rem;
  }
  input {
    display: block;
    width: 100%;
    border: 0;
    background-color: #fff;
  }
  ::-webkit-input-placeholder {
    font-size: @font-a;
  }
}
</style>