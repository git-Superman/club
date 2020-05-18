<template>
  <div class="home">
    <div class="home-head">
      <div>
        <img src="@/assets/images/icon/mian-logo.png" alt />
      </div>
      <div>
        <input
          :style="'background:#f7f8fa url('+searchICON+') no-repeat 6% center;background-size:.6rem'"
          type="text"
          @input="handlChangeSearch"
          @click="handleClickOK"
          placeholder="请输入关键字"
          v-model="value"
        />
      </div>
    </div>
    <div class="mainStroll" ref="main">
      <ul class="list" v-for="(item,i) in list" :key="i">
        <li class="list-head">
          <div class="img" v-if="item.headPic">
            <img v-if="item.headPic" :src="imgURL + item.headPic" alt />
          </div>
          <div class="test">
            <p>{{item.UserName}}</p>
            <span>{{item.addDate ?item.addDate.split('T')[0]:''}}</span>
          </div>
        </li>
        <li class="list-ban">
          <van-swipe indicator-color="white">
            <van-swipe-item v-for="(its,inx) in item.img" :key="inx">
              <div style="width:100%;height:100%;">
                <div v-if="its.Kind === 0 ">
                  <img :src="imgURL + its.Img" alt v-lazy="imgURL + its.Img" :data-id="imgURL + its.Img"/>
                </div>
                <div class="play-box"  v-if="its.Kind === 2">
                  <!-- 封面图 + 按钮 -->
                  <div class="cover-picture" @click="handleCoverPicture({src:imgURL + its.Src,id:item.id})">
                    <img class="play-img" :src="imgURL + its.Img" />
                    <img class="play-icon" src="@/assets/images/play1.svg" />
                  </div>
                  <!-- <video :ref="video+i"  class="play-video" :src="imgURL + its.Src" controls></video> -->
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </li>
        <li>
          <ul class="list-content">
            <li class="list-title">
              <div class="left">
                <img @click="handleClickZan(item.id,item.contents,i)" src="@/assets/images/icon/mian-dz.png" alt />
                <!-- <img @click="handleClickPush('评论')" src="@/assets/images/icon/mian-ly.png" alt=""> -->
                <img @click="show = true" src="@/assets/images/icon/mian-zf.png" alt />
              </div>
              <div class="right">
                <!-- <img src="@/assets/images/img/mian-dzface1.png" alt />
                <img src="@/assets/images/img/mian-dzface1.png" alt />
                <img src="@/assets/images/img/mian-dzface1.png" alt />-->
                <p>{{item.zan?item.zan+'人觉得赞':'还没有人点赞哦'}}</p>
              </div>
            </li>
            <li>{{item.contents}}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="alert" v-if="show">
      <van-overlay :show="show" @click="show = false" />
      <div class="share">
        <div class="head">
          <p></p>
          <p>分享到</p>
          <img @click="show = false" src="@/assets/images/icon/share-close.png" alt />
        </div>
        <div class="share-item">
          <img src="@/assets/images/icon/share-wx.png" alt />
          <img src="@/assets/images/icon/share-pyq.png" alt />
          <img src="@/assets/images/icon/share-qq.png" alt />
          <img src="@/assets/images/icon/share-wb.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getUserDynamicList, getImgURL,setDynamicZan } from '~api'
import searchICON from '@/assets/images/search.svg'
export default {
  data() {
    return {
      searchICON,
      show: false,
      list: [],
      isScrollTop: false,
      imgURL: getImgURL,
      key: '',
      value: '',
      pg: 1 //页数
    }
  },
  created() {
    this.reload()
  },
  mounted() {
    // 滚动事件
    this.$refs.main.addEventListener('scroll', this.onRefresh)
  },
  methods: {
    // 视频跳转播放
    handleCoverPicture(data){
      console.log(data);
    },
    // 搜索
    handlChangeSearch() {
      var that = this,
        value = that.value
      if (/^@/i.test(value) || /^#/i.test(value)) {
        that.key = 'tkey'
      } else if (/^\d{5,16}/g.test(value)) {
        that.key = 'Uid'
      } else {
        that.key = 'Account'
      }
    },
    // 确定搜索
    handleClickOK() {
      if (this.value && this.key) {
        this.reload(true)
        this.list = []
      } else {
        this.key = ''
      }
    },
    // 点赞
    handleClickZan(ArticleID,Contents,index) {
      console.log(ArticleID,Contents,index)
      Contents = Contents || '11111111';
      setDynamicZan({ArticleID,Contents}).then(res=>{
        console.log(res)
      }).catch(res=>{
        console.log(res);
      })
      // this.$router.push('/home/give/' + id)
    },
    reload(isSearch) {
      var that = this,
        data = { size: 10 }
      isSearch = isSearch || false
      if (isSearch) {
        that.pg = 1
        data[that.key] = that.value
      }
      data['pg'] = that.pg
      getUserDynamicList(data)
        .then(res => {
          console.log(res.data);
          if (res.code == 0 && res.data != null && res.data.length != 0) {
            that.isScrollTop = true
            this.list = this.list.concat(res.data)
          } else {
            that.$toast('加载失败，请稍后再试！')
          }
        })
        .catch(err => {
          that.$toast('加载失败，请稍后再试！')
          // throw err
        })
    },
    onRefresh() {
      var main = this.$refs.main
      var scrollTop = main.scrollTop,
        mainHeight = main.offsetHeight,
        scrollHeight = main.scrollHeight

      if (scrollTop + mainHeight + 60 >= scrollHeight) {
        if (this.isScrollTop) {
          this.isScrollTop = false
          var pg = this.pg
          pg++
          this.pg = pg
          this.reload()
        }
      }
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
@color-e: #eeeeee;
@color-9: #9e9e9e;
@color-8: #8b2c18;
@color-6: #666666;
@color-3: #333333;
@font-a: 0.28rem;
.home {
  padding-top: 1rem;
  .home-head {
    position: fixed;
    width: 100%;
    background-color: #fff;
    z-index: 1;
    top: 0;
    display: flex;
    justify-content: space-between;
    height: 1rem;
    align-items: center;
    border-bottom: 1px solid @color-e;
    padding: 0 0.2rem;
    box-sizing: border-box;
    img {
      height: 0.48rem;
    }
    input {
      width: 3.6rem;
      padding: 0.12rem 0.2rem 0.12rem 0.8rem;
      overflow: hidden;
      border-radius: 30px 30px;
      border: 0;
      box-sizing: border-box;
      background-size: 14%;
    }
    ::-webkit-input-placeholder {
      font-size: 0.28rem;
    }
  }
}
.list {
  .list-head {
    box-sizing: border-box;
    padding: 0.32rem;
    display: flex;
    .img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      padding-right: 0.2rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .test {
      font-family: Lucida, Tahoma, Verdana;
      span {
        padding-top: 0.2rem;
        color: @color-6;
        font-size: @font-a;
      }
    }
  }
  .list-ban {
    // background-color:rgba(0,0,0,.1);
    // display:flex;

    .van-swipe__track{
      display: flex;
    justify-content: center;
    align-items: center;
    }

    // img {
    //   width: 100%;
    //   height:auto;
    //   min-height: 4.2rem;
    // }
    .play-box{
      position:relative;
      width:100%;
      height:4.2rem;
      .play-icon{
        position:absolute;
        top:0;
        left:50%;
        width:1rem;
        height:1rem;
        margin-left:-.5rem;
      }
    }
    video{
      width:100%;
    }
  }
}
.list + .list {
  border-top: 0.06rem solid @color-e;
}
.list-content {
  box-sizing: border-box;
  padding: 0 0.32rem 0.24rem;
  font-size: @font-a;
  span {
    color: @color-6;
  }
  .list-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.12rem 0;
    .left {
      display: flex;
      img {
        width: 0.52rem;
        height: 0.52rem;
        border-radius: 50%;
        margin-right: 0.16rem;
      }
    }
    .right {
      display: flex;
      align-items: center;
      img {
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
      }
      p {
        margin-left: 0.12rem;
      }
    }
  }
  .nbsp {
    margin-top: 0.04rem;
  }
}
// .alert{
//     animation: baseBottom .2s;
// }
.share {
  position: fixed;
  bottom: 0;
  background-color: #fff;
  z-index: 3;
  width: 100%;
  .head {
    box-sizing: border-box;
    padding: 0.24rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: @color-3;
    font-size: @font-a;
    border-bottom: 3px solid @color-3;
    img {
      width: 0.4rem;
    }
  }
  .share-item {
    box-sizing: border-box;
    padding: 0.6rem 0 1rem;
    display: flex;
    justify-content: space-evenly;
    img {
      width: 1rem;
      flex-shrink: 0;
    }
    img:nth-child(2) {
      width: 1.2rem;
    }
  }
}

.mainStroll {
  position: fixed;
  width: 100%;
  height: 82%;
  overflow-y: auto;
}
</style>