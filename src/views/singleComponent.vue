<template>
    <div class="list" v-if="container">
        <div class="list-head">
          <div class="img">
            <img :src="container.headPic ? imgURL + container.headPic:dufaultHead" alt />
            <p>{{container.userName?container.userName:'dufault'}}</p>
          </div>
          <div class="test">
            <span>{{container.addDate ?container.addDate.split('T')[0]:''}}</span>
          </div>
        </div>
        <div class="list-ban">
          <div v-if="container.imgList.length !== 0">
              <van-swipe indicator-color="white">
                <van-swipe-item v-for="(its,inx) in container.imgList" :key="inx">
                    <div>

                        <!-- 展示图 -->
                        <div @click="handleCoverPicture(container.imgList,inx)" class="plan-background" :style="'background-image:url('+(imgURL + its.Img)+');background-color:'+container.rgba">
                            <!-- <img :src="imgURL + its.Img" v-lazy="imgURL + its.Img" alt="a.png"/> -->
                        </div>

                        <!-- 封面图 + 按钮 -->
                        <!-- <div class="play-box"  v-if="its.Kind === 2">
                            <div class="cover-picture" @click="handleCoverPicture({src:imgURL + its.Src,id:container.id})">
                                <img class="play-img" :src="imgURL + its.Img" />
                            </div>
                        </div> -->

                    </div>
                </van-swipe-item>
            </van-swipe>
          </div>
          <van-empty v-if="!container.imgList || container.imgList.length === 0" image="error" description="No image..." />
        </div>
        <div>
          <div class="list-content">
            <li class="list-title">
              <div class="left">
                  <!-- 点赞 -->
                <img @click="handleClickZan(container.id)" src="@/assets/images/icon/mian-dz.png" alt />
                <!-- 评论 -->
                <!-- <img @click="handleClickPush('评论')" src="@/assets/images/icon/mian-ly.png" alt=""> -->
                <!-- 分享 -->
                <!-- <img @click="show = true" src="@/assets/images/icon/mian-zf.png" alt /> -->
              </div>
              <div class="right">
                <!-- <div>
                    <img src="@/assets/images/img/mian-dzface1.png" alt />
                    <img src="@/assets/images/img/mian-dzface1.png" alt />
                    <img src="@/assets/images/img/mian-dzface1.png" alt />
                </div> -->
                <p>{{container.zan?container.zan+'人觉得赞':'还没有人点赞哦'}}</p>
              </div>
            </li>
            <li><p>{{container.contents}}</p></li>
          </div>
        </div>
    </div>
</template>
<script>

import { getImgURL ,setArticleZan , setArticleUnZan,setDetailDataObject } from '~api';
import dufaultHead from '@/assets/images/default-head.png';
export default {
    data(){
        return {
            imgURL: getImgURL,
            dufaultHead
        }
    },
    created:function(){
        console.log(123);
        // console.log(this.container);
    },
    methods:{
        handleClickZan(articleID){
            console.log(articleID);
            setArticleZan({type:1,articleID}).then(res=>{
                console.log('~~~~~',res);
            }).catch(res=>{
                console.log('失败',res);
            });
        },
        handleCoverPicture(data,inx){
            data.push(inx)
            setDetailDataObject(data);
            console.log(data);
            this.$router.push('/home/detail');
        }
    },
    props:{
        container:{
            type:Object,
            default:{}
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
.list {
  .list-head {
    box-sizing: border-box;
    padding: 0.32rem;
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
    .img {
      width: .8rem;
      height: .8rem;
      border-radius: 50%;
      padding-right: 0.2rem;
      display:flex;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
        flex-shrink: 0;
      }
      p{
          margin-left:.2rem;
          min-width: 3.2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
      }
    }
    .test {
      font-family: Lucida, Tahoma, Verdana;
      display: flex;
      align-items: flex-end;
      span {
        padding-top: 0.2rem;
        color: @color-6;
        font-size: @font-a;
      }
    }
  }
  .list-ban {
    min-height: 4.2rem;
    .plan-background{
        height:4.2rem;
        overflow: hidden;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
    }
    .van-swipe__track{
        display: flex;
        justify-content: center;
        align-items: center;
    }
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
</style>