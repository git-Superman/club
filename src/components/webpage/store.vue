<template>
    <div class="store">
        <myTitle center="户外商城" :right="icon"></myTitle>
        <main class="images">
            <div class="images-left">
                <img @click="handleClickPush" class="max" ref="max" src="@/assets/images/img/mian-pimg.png" alt="">
                <img class="min" ref="min" :style="{height:minHeight+'px'}" src="@/assets/images/img/hd-img1.png" alt="">
                <img class="min" ref="min" :style="{height:minHeight+'px'}" src="@/assets/images/img/hd-img2.png" alt="">
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
                <img class="max" :style="{height:maxHeight+'px'}" src="@/assets/images/img/mian-pimg.png" alt="">
                <img class="min" :style="{height:minHeight+'px'}" src="@/assets/images/img/hd-img1.png" alt="">
                <img class="min" :style="{height:minHeight+'px'}" src="@/assets/images/img/hd-img2.png" alt="">
            </div>
            
        </main>
    </div>
</template>
<script>
import myTitle from '@/views/title'
import icon from '@/assets/images/icon/shop-sqgt.png'
    export default {
        data() {
            return {
                icon,
                minHeight:0,
                maxHeight:0
            }
        },
        methods:{
            getHeight(){
                var max = this.$refs.max;
                var min = this.$refs.min;
                this.minHeight= max.height/2;
                this.maxHeight = max.height;
            },
            handleClickPush(){
                this.$router.push('/store');
            }
        },
        mounted(){
            setTimeout(()=>{
                this.getHeight()
            },200);
            window.onresize = ()=>{
                this.getHeight();
            }
        },
        components:{
            myTitle
        }
    }
</script>
<style lang="less" scoped>
.images{
    font-size:0;
    padding-bottom:1.2rem;
    background-color:#EEEEEE;
    .max{
        width:66.66%;
    }
    .min{
        width:33.33%;
    }
    .images-left{
        img{
            float: left;
        }
    }
    .images-right{
        img{
            float:right;
        }
    }
}
.images::after{
    content:'';
    display:block;
    clear: both;
}
</style>