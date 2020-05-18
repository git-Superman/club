<template>
  <div class="home">
    <div class="home-head">
      <div>
        <img src="@/assets/images/icon/mian-logo.png" alt />
      </div>
    </div>

  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list  v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoads">
        <div v-for="(item,i) in list" :key="i" class="single-component-box">
            <single-component :container="item"></single-component>
        </div>
      </van-list>
  </van-pull-refresh>

  </div>
</template>
<script>
import { getUserDynamicList, getImgURL,setDynamicZan } from '~api'
import singleComponent from '@/views/singleComponent.vue';
function getRgba(){
  return 'rgba('+ parseInt(Math.random() * 255)+','+parseInt(Math.random() * 255)+','+parseInt(Math.random() * 255)+','+Math.random()+')';
}
export default {
  data() {
    return {
      list: [],
      imgURL: getImgURL,
      pg: 1, //页数,
      loading:false,
      finished:false,
      refreshing:false
    }
  },
  created() {
    this.init();
  },
  mounted() {
    // 滚动事件
  },
  components:{
      "single-component":singleComponent
  },
  methods: {
    onRefresh(e){
      let that = this;
      setTimeout(()=>{
        that.init();
      },1800);
    },
    onLoads(e){
      setTimeout(()=>{
        this.loadData();
      },1500);
    },
    init(){
      this.pg = 1;
      this.loadData();
    },
    loadData(){
      var that = this,data = { size: 10 };
      data['pg'] = that.pg;
      getUserDynamicList(data)
        .then(res => {
          if (res.code == 0) {

            if(res.data != null && res.data.length != 0){
              
              res.data.forEach(element => {
                element.rgba = getRgba();
                if(typeof element.img === 'string'){
                  element.imgList = JSON.parse(element.img);
                }else{
                  element.imgList = element.img;
                }
              });
              console.log(res.data);
              if(that.pg == 1){
                that.list = res.data;
              }else{
                that.list = that.list.concat(res.data);
              }
              that.refreshing = false;
              that.loading = false;
              that.pg+=1;
              // 加载状态结束
              that.loading = false;
            }else{
              // 关闭滚动加载
              that.finished = true;
            }

          }else{
            that.$toast('加载失败，请稍后再试！')  
          }

        })
        .catch(err => {
          that.$toast('加载失败，请稍后再试！')
          // throw err
        });

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
    justify-content: center;
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

.single-component-box + .single-component-box{
  border-top: 1px solid @color-e;
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