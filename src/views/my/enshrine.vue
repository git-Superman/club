<template>
<div class="info background">
    <myTitle test="我的收藏" :right="right" @confirm="handleClick"/>
    <div>
        <ul class="activity" v-for="i in 5" :key="i" @click="handleClickPush('活动')">
            <li class="list-head">
                <div class="img">
                    <img src="@/assets/images/img/mian-face.png" alt="">
                </div>
                <div class="test">
                    <p>Cameron AJ</p>
                    <span>15分钟前</span>
                </div>
            </li>
            <li class="activity-item">
                <p>秋天到啦~！周末一起去赏枫叶啊~秋天到啦~！</p>
            </li>
            <li class="activity-item">
                <img src="@/assets/images/icon/hd-timeicon.png" alt="">
                <span>9月20日 07:00</span>
            </li>
            <li class="activity-item">
                <img src="@/assets/images/icon/hd-dzicon.png" alt="">
                <span>徐州.西山枫叶公园</span>
            </li>
            <li class="activity-img">
                <img src="@/assets/images/img/hd-img1.png" alt="">
                <img src="@/assets/images/img/hd-img2.png" alt="">
            </li>
            <li v-show="show" class="options">
                <img :src="activeFalse" alt="">
            </li>
        </ul>
    </div>
    <div class="main-bottom" v-show="show">
        <div class="main-bottom-left">
            <img src="@/assets/images/icon/zfdd-danxwx.png" alt="">
            <span>全选</span>
        </div>
        <div class="main-bottom-right">
            <img src="@/assets/images/icon/bj-delet.png" alt="">
        </div>
    </div>
</div>    
</template>
<script>
import myTitle from '../my-title'
import activeTrue from '@/assets/images/icon/bj-xz.png'
import activeFalse from '@/assets/images/icon/bj-wxz.png'
export default {
    data() {
        return {
            show : false,
            right : '编辑',
            activeTrue,
            activeFalse
        }
    },
    components:{
        myTitle
    },
    methods:{
        handleClickPush(){
            this.$router.push('/activity/details');
        },
        handleClick(){
            var isRight = this.right;
            if(isRight==='编辑'){
                this.show = true;
                this.right = '确定';
            }else if(isRight==="确定"){
                console.log('确定')
                this.show = false;
                this.right = '编辑';
            }
        },
    }
}
</script>
<style scoped lang="less">
@color-e:#EEEEEE;
@color-9:#9E9E9E;
@color-8:#8B2C18;
@color-6:#666666;
@color-3:#333333;
@font-a:.28rem;
.activity{
    border-top:.08rem solid @color-e;
    background-color:#fff;
    padding-bottom:.24rem;
    position: relative;
    .list-head{
        box-sizing: border-box;
        padding:.32rem;
        display:flex;
        .img{
            width:1rem;
            height:1rem;
            border-radius:50%;
            padding-right:.2rem;
            img{
                width:100%;
                height:100%;
            }
        }
        .test{
            span{
                padding-top:.2rem;
                color:@color-6;
                font-size:@font-a;
            }
        }
    }
    .activity-item{
        box-sizing: border-box;
        padding:.12rem .24rem;
        color:@color-3;
        font-size:@font-a;
        display:flex;
        align-items:center;
        span{
            color:@color-9;
        }
        img{
            width:.4rem;
            padding-right:.12rem;
        }
    }
    .activity-img{
        padding-left:.24rem;
        font-size:0;
        img{
            width:30%;
            padding:.12rem .12rem 0 0;
        }
    }
    .options{
        position: absolute;
        top:.24rem;right:.24rem;
        img{
            width:.52rem;
            height:.52rem;
        }
    }
}
.main-bottom{
    position:fixed;
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items:center;
    background-color:#fff;
    font-size:@font-a;
    color:@color-6;
    box-sizing: border-box;
    padding:.24rem;
    bottom:0;
    z-index:999;
    .main-bottom-left,.main-bottom-right{
        display:flex;
        align-items:center;
        img{
            width:.48rem;
            height:.48rem;
            padding-right:.08rem;
        }
    }
}
</style>