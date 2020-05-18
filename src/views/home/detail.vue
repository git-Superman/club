<template>
    <div>
        <navBar test="详情"></navBar>

        <div ref="mse" v-if="imgs[index].Kind === 2" class="video-box"></div>
        <!-- <div class="img-box" v-if="url">
            <img :src="url" alt="">
        </div> -->
        <!-- 轮播展示图片  -->
        <div class="img-box" v-if="imgs[index].Kind !== 2">
            <van-swipe indicator-color="white">
            <van-swipe-item v-for="(its,inx) in imgs" :key="inx">
                <div>

                    <!-- 展示图 -->
                    <div class="plan-background" :style="'background-image:url('+(imgURL + its.Img)+')'">
                        <img :src="imgURL + its.Img" v-lazy="imgURL + its.Img" alt="a.png"/>
                    </div>

                </div>
            </van-swipe-item>
        </van-swipe>
        </div>
    </div>
</template>
<script>
import { getImgURL,getDetailDataObject } from '~api';
import navBar from '../navBar';
import Player from 'xgplayer';
export default {
    data(){
        return {
            imgURL:getImgURL,
            imgs:[],
            index:0,
            url:''
        }
    },
    methods:{
        handlePlayer(url){
            let mse = this.$refs.mse;
            let player = new Player({
                el: mse,
                fluid: true,
                autoplay:true,
                url
            });
            
        }
    },
    components:{
        navBar
    },
    mounted:function(){
        let imgs = this.imgs[this.index];
        if(imgs.Kind ===2 ){
            this.handlePlayer(this.imgURL+imgs.Src);
        }else if(imgs.Kind === 0){
            this.url = this.imgURL +imgs.Img;
        }
    },
    created() {
        let imgs = getDetailDataObject()
        this.index = imgs.pop();
        this.imgs = imgs;
        console.log(this.imgs,this.index);
        
    },
}
</script>
<style lang="less" scoped>
    .video-box{
        width:100%;
        height:auto;
        min-height:2rem;
    }
    .img-box{
        width:100%;
        img{
            width:100%;
            height:auto;
        }
    }
</style>