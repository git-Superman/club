<template>
  <div class="store">
    <myTitle center="户外商城" :right="icon"></myTitle>
    <!-- <main class="images">
            <div class="images-left">
                <img @click="handleClickPush" class="max" ref="max" src="@/assets/images/img/mian-pimg.png" alt="">
                <img class="min" ref="min" :style="{height:minHeight+'px'}" src="@/assets/images/img/hd-img1.png" alt="">
                <img class="min" ref="min" :style="{height:minHeight+'px'}" src="@/assets/images/img/hd-img2.png" alt="">
                <span class="btMsg a">热门推荐</span>
            </div>
            <div>
                <img class="min" ref="min" src="@/assets/images/img/hd-img1.png" alt="">
                <img class="min" ref="min" src="@/assets/images/img/hd-img2.png" alt="">
                <img class="min" ref="min" src="@/assets/images/img/hd-img2.png" alt="">
                <img class="min" ref="min" src="@/assets/images/img/hd-img2.png" alt="">
                <img class="min" ref="min" src="@/assets/images/img/hd-img2.png" alt="">
                <img class="min" ref="min" src="@/assets/images/img/hd-img2.png" alt="">
            </div>
            <div class="images-right">
                <img class="max" @click="handleClickPush" :style="{height:maxHeight+'px'}" src="@/assets/images/img/mian-pimg.png" alt="">
                <img class="min" :style="{height:minHeight+'px'}" src="@/assets/images/img/hd-img1.png" alt="">
                <img class="min" :style="{height:minHeight+'px'}" src="@/assets/images/img/hd-img2.png" alt="">
                <span class="btMsg b">最近更新</span>
            </div>
            
    </main>-->
    <div class="list">
      <router-link :to="'/store/this/'+item.id" v-for="(item,i) in list" :key="i" class="list-item">
        <div>
          <img v-if="item.logo != imgURL" :src="item.logo" :alt="item.name" />
          <p>LOGO</p>
          <span>{{item.name}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { imgURL } from '~api/config'
import { getCategoryFirst } from '~api'
import myTitle from '@/views/title'
import icon from '@/assets/images/icon/shop-sqgt.png'

export default {
  data() {
    return {
      icon,
      minHeight: 0,
      maxHeight: 0,
      list: [],
      imgURL
    }
  },
  created() {
    this.init()
    // getCategoryFirst().then(res => {
    //   console.log(res)
    // })
  },
  methods: {
    // getHeight(){
    //     var max = this.$refs.max;
    //     var min = this.$refs.min;
    //     this.minHeight= (max.height)/2;
    //     this.maxHeight = max.height;
    // },
    handleClickPush() {
      this.$router.push('/store')
    },
    init() {
      //   this.axios.post('/api/Shop/GetCategoryFirst').then(res => {
      //     if (res.code == 0) {
      //       var data = res.data
      //       data.forEach(item => {
      //         item.logo = this.imgURL + item.logo
      //       })
      //       this.list = data
      //     } else {
      //       this.$toast(data.msg)
      //     }
      //   })
      // }
    }
  },
  components: {
    myTitle
  }
}
</script>
<style lang="less" scoped>
.images {
  font-size: 0;
  padding-bottom: 1.2rem;
  background-color: #eeeeee;
  > div {
    position: relative;
  }
  > div::after {
    content: '';
    display: block;
    clear: both;
  }
  .btMsg {
    font-size: 0.28rem;
    position: absolute;
    bottom: 0.2rem;
    font-weight: bold;
    z-index: 99;
    color: #fff;
  }
  .btMsg.a {
    left: 0.24rem;
  }
  .btMsg.b {
    right: 0.24rem;
  }
  .max {
    width: 66.66%;
  }
  .min {
    width: 33.33%;
  }
  .images-left {
    img {
      float: left;
    }
  }
  .images-right {
    img {
      float: right;
    }
  }
}
.images::after {
  content: '';
  display: block;
  clear: both;
}

// start
.list {
  display: flex;
  flex-flow: wrap;
}
.list-item {
  display: block;
  width: 50%;
  box-sizing: border-box;
  padding: 0.08rem;
}
.list-item > div {
  position: relative;
  font-size: 0.28rem;
  font-size: 0;
  height: 3.6rem;
  box-shadow: #666 0 0 3px;
}
.list-item span {
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
  color: #fff;
  font-size: 0.28rem;
  font-weight: bold;
  text-shadow: 0 0 2px #000;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1px 5px;
  border-radius: 1rem 1rem;
  max-width: 3rem;
  overflow: hidden;
  white-space: nowrap;
}
.list-item p {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1.6rem;
  height: 0.8rem;
  margin-top: -0.4rem;
  margin-left: -0.8rem;
  font-size: 0.52rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  z-index: -1;
  text-shadow: 0 0 2px #000;
}
.list-item img {
  width: 100%;
  height: 100%;
}
</style>