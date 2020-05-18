<template>
  <div>
    <div class="title">活动</div>
    <div class="input">
      <div>
        <input type="text" placeholder="输入昵称、活动名称等查询活动" />
        <img class="left" src="@/assets/images/icon/hd-searchbtn.png" alt />
      </div>
      <img @click="show = true" class="right" src="@/assets/images/icon/hd-sxbtn.png" alt />
    </div>

    <div class="alert" v-if="show">
      <van-overlay :show="show" @click="show = false" />
      <div class="share">
        <div class="head">
          <p></p>
          <p>筛选</p>
          <img @click="show = false" src="@/assets/images/icon/share-close.png" alt />
        </div>
        <ul class="share-ul">
          <li class="share-li">
            <span>活动时间</span>
            <div class="share-day">
              <div>
                <img src="@/assets/images/icon/sx-date.png" alt />
              </div>
              <span>至</span>
              <div>
                <img src="@/assets/images/icon/sx-date.png" alt />
              </div>
            </div>
          </li>
          <li class="share-li">
            <span>活动地点</span>
            <div class="city">
              <img src="@/assets/images/icon/sx-dw.png" alt />
              <span>北京市</span>
              <img src="@/assets/images/icon/sx-sx.png" alt />
              <input type="text" placeholder="手动输入城市名称" />
            </div>
          </li>
          <li class="share-btn">
            <span>确定</span>
          </li>
        </ul>
      </div>
    </div>
    <div ref="main" class="mainStroll">
      <ul class="activity" v-for="(item,i) in list" :key="i">
        <li class="activity-title" @click="handleClick(item.id)">
          <div class="img">
            <img :src="item.headPic?item.headPic : HeadImg" alt />
          </div>
          <div class="test" @click="handleClick(item.id)">
            <p>{{item.userName ? item.userName : '匿名用户'}}</p>
            <span>{{item.addDate?item.addDate.split("T")[0]:''}}</span>
          </div>
        </li>
        <li class="activity-item" @click="handleClick(item.id)">
          <p>{{item.contents}}</p>
        </li>
        <li class="activity-item">
          <img src="@/assets/images/icon/hd-timeicon.png" alt />
          <span>{{item.openTime?item.openTime.split("T")[0]:''}}</span>
        </li>
        <li class="activity-item">
          <img src="@/assets/images/icon/hd-dzicon.png" alt />
          <span>{{item.cityName}}</span>
        </li>
        <li class="activity-img">
          <img v-for="(it,inx) in item.imgList" :key="inx" v-show="!it" src="it" alt />
        </li>
        <li class="list-title">
          <div class="left">
            <img @click="handleClickPush(item.id)" src="@/assets/images/icon/mian-dz.png" alt />
            <!-- <img @click="handleClickPush('评论')" src="@/assets/images/icon/mian-ly.png" alt=""> -->
            <img @click="show = true" src="@/assets/images/icon/mian-zf.png" alt />
          </div>
          <div class="right">
            <p>{{item.zan?'等'+item.zan+'人觉得赞' : '等0人觉得赞'}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { imgURL } from '~api/config'
import HeadImg from '@/assets/images/img/20131204184148_hhXUT.jpeg'

import isTrue from '@/assets/images/icon/twdt-ydz.png'
import isFalse from '@/assets/images/icon/twdt-dz.png'

import DropDown from '@/views/DropDown'

export default {
  data() {
    return {
      show: false,
      list: [],
      imgURL,
      HeadImg,
      isScrollTop: false,
      pg: 1
    }
  },
  components: {
    DropDown
  },
  created() {
    this.reload(this.pg, 30)
  },
  mounted() {
    this.onRefresh()
    // 滚动事件
    this.$refs.main.addEventListener('scroll', this.onRefresh)
  },
  methods: {
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
          this.reload(this.pg, 10)
        }
      }
    },
    handleClick(id) {
      this.$router.push({ path: `/activity/details/${id}` })
    },
    handleClickPush(id) {
      // if(test === "点赞"){
      this.$router.push('/home/give/' + id)
      // }else if(test === "评论"){
      //     this.$router.push('/home/comment');
      // }
    },
    reload(pg, size) {
      var url = `/api/User/GetUserEventList?pg=${pg}&size=${size}`
      var that = this
      this.axios.post(url).then(res => {
        console.log(res.data)
        var data = res.data
        if (res.code == 0) {
          this.isScrollTop = true
          data.forEach(item => {
            var imgs = item.img
            if (imgs) {
              item.imgList = imgs.split('|')
            } else {
              item.imgList = []
            }
          })
          this.list = this.list.concat(data)
          console.log(this.list)
        }
      })
    },
    loadmore() {
      //可滚动容器的高度
      let innerHeight = document.querySelector('#app').clientHeight
      //屏幕尺寸高度
      let outerHeight = document.documentElement.clientHeight
      //可滚动容器超出当前窗口显示范围的高度
      let scrollTop = document.documentElement.scrollTop + 60
      if (innerHeight < outerHeight + scrollTop) {
        //加载更多操作
        console.log('loadmore')
      }
    }
  }
}
</script>
<style lang="less" scoped>
@color-e: #eeeeee;
@color-9: #9e9e9e;
@color-8: #8b2c18;
@color-6: #666666;
@color-3: #333333;
@font-a: 0.28rem;
.title {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 2020;
  box-sizing: border-box;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: @color-3;
  font-weight: bold;
}
.input {
  box-sizing: border-box;
  padding: 0.24rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  div {
    width: 100%;
    position: relative;
    input {
      display: block;
      width: 100%;
      background-color: @color-e;
      border: 0;
      box-sizing: border-box;
      padding: 0.12rem 0.28rem;
      border-radius: 1rem 1rem;
    }
    input::-webkit-input-placeholder {
      font-size: @font-a;
    }
    .left {
      position: absolute;
      left: 86%;
      top: 0.04rem;
      background-color: @color-e;
    }
  }
  img {
    width: 0.6rem;
    flex-shrink: 0;
  }
  .right {
    padding-left: 0.52rem;
  }
}
.activity {
  border-top: 1px solid @color-e;
  padding-top: 1rem;
  .activity-title {
    box-sizing: border-box;
    padding: 0.12rem 0.32rem;
    display: flex;
    .img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      padding-right: 0.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        box-shadow: 0 0 2px #000;
      }
    }
    .test {
      span {
        padding-top: 0.2rem;
        color: @color-6;
        font-size: @font-a;
      }
    }
  }
  .activity-item {
    box-sizing: border-box;
    padding: 0.12rem 0.24rem;
    color: @color-3;
    font-size: @font-a;
    display: flex;
    align-items: center;
    span {
      color: @color-9;
    }
    img {
      width: 0.4rem;
      padding-right: 0.12rem;
    }
  }
  .activity-img {
    padding-left: 0.24rem;
    font-size: 0;
    img {
      width: 30%;
      padding: 0.12rem 0.12rem 0 0;
    }
  }
  .list-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0.24rem;
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
}

.mainStroll {
  position: fixed;
  width: 100%;
  height: 82%;
  overflow-y: auto;
}

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
  }
  .share-ul {
    box-sizing: border-box;
    padding: 0.24rem;
    span {
      color: @color-6;
      font-size: @font-a;
    }
    .share-li {
      .share-day {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0.12rem 0 0.6rem;
        img {
          width: 0.4rem;
        }
        div {
          width: 50%;
          background-color: @color-e;
          box-sizing: border-box;
          padding: 0.12rem 0.28rem;
          border-radius: 1rem 1rem;
          display: flex;
          align-items: center;
        }
        span {
          margin: 0 0.24rem;
          flex-shrink: 0;
        }
      }
      .city {
        padding: 0.24rem 0;
        display: flex;
        align-items: center;
        img {
          width: 0.32rem;
          flex-shrink: 0;
        }
        span {
          padding: 0 0.12rem;
          flex-shrink: 0;
        }
        input {
          width: 100%;
          background-color: @color-e;
          box-sizing: border-box;
          padding: 0.12rem 0.28rem;
          border-radius: 1rem 1rem;
          border: 0;
          margin-left: 0.6rem;
        }
      }
    }
    .share-btn {
      width: 100%;
      padding: 0.2rem 0;
      background-color: @color-8;
      display: flex;
      margin-top: 0.52rem;
      justify-content: center;
      border-radius: 0.14rem;
      span {
        color: #fff;
      }
    }
  }
}
</style>