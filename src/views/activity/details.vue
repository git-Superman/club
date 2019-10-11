<template>
<div class="details">
    <myNavbar test='活动详情'></myNavbar>
    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item class="van-swipe-item">
            <img src="@/assets/images/img/hdxq-bimg.png" alt="">
        </van-swipe-item>
        <van-swipe-item class="van-swipe-item">
            <img src="@/assets/images/img/hdxq-bimg.png" alt="">
        </van-swipe-item>
        <van-swipe-item class="van-swipe-item">
            <img src="@/assets/images/img/hdxq-bimg.png" alt="">
        </van-swipe-item>
        <van-swipe-item class="van-swipe-item">
            <img src="@/assets/images/img/hdxq-bimg.png" alt="">
        </van-swipe-item>
    </van-swipe>
    <ul class="activity">
        <li class="activity-title">
            <div class="img">
                <img src="@/assets/images/img/mian-face.png" alt="">
            </div>
            <div class="test">
                <p>Cameron AJ</p>
                <span>15分钟前</span>
            </div>
        </li>
        <li class="activity-item">
            <p>秋天到啦~！周末一起去赏枫叶啊~</p>
        </li>
        <li class="activity-msg">
            <span>
                这里是活动详情介绍，这里是活动详情介绍，这里是活动详情介
                绍，这里是活动详情介绍，这里是活动详情介绍，这里是活动详
                情介绍，这里是活动详情介绍，这里是活动详情介绍，这里是活
                动详情介绍，这里是活动详情介绍，这里是活动详情介绍，这里
                是活动详情介绍。
            </span>
        </li>
        <li class="activity-item">
            <img src="@/assets/images/icon/hd-timeicon.png" alt="">
            <span>9月20日 07:00</span>
        </li>
        <li class="activity-item">
            <img src="@/assets/images/icon/hd-dzicon.png" alt="">
            <span>徐州.西山枫叶公园</span>
        </li>
        <li class="activity-btn">
            <span>报名</span>
        </li>
        <li class="list-title">
            <div class="left">
                <img @click="handleClickPush('点赞')" src="@/assets/images/icon/mian-dz.png" alt="">
                <img @click="handleClickPush('评论')" src="@/assets/images/icon/mian-ly.png" alt="">
                <img @click="show = true" src="@/assets/images/icon/mian-zf.png" alt="">
            </div>
        </li>
        <li class="list-apply">
            <span>已有 12 人报名</span>
            <div class="apply">
                <div class="apply-item" v-for="i in 12" :key="i">
                    <img src="@/assets/images/img/mian-dzface1.png" alt="">
                    <p>阿花阿华</p>
                </div>
            </div>
        </li>
    </ul>
    <ul class="critic">
        <li class="critic-icon">
            <img src="@/assets/images/icon/hdxq-pl.png" alt="">
        </li>
        <li class="critic-item action">
            <img src="@/assets/images/img/mian-dzface2.png" alt="">
            <p>Cameron AJ</p>
            <span>大家踊跃报名啊~有什么问题可以在评 论区留言</span>
        </li>
    </ul>
    <myDiscuss></myDiscuss>
</div>
</template>
<script>
import myNavbar from '../navBar'
import myDiscuss from '../discuss'
export default {
    components:{
        myNavbar,
        myDiscuss
    },
    methods:{
        handleClickPush(test){
            if(test === "点赞"){
                this.$router.push('/home/give');
            }else if(test === "评论"){
                this.$router.push('/home/comment');
            }else if(test === "活动"){
                this.$router.push('/activity')
            }
        }
    }
}
</script>
<style lang="less" scoped>
@color-e:#EEEEEE;
@color-9:#9E9E9E;
@color-8:#8B2C18;
@color-6:#666666;
@color-3:#333333;
@font-a:.28rem;
.van-swipe-item{
    img{
        width:100%;
    }
}
.details{
    font-size:0;
    padding-bottom:1rem;
}
.activity{
    border-top:1px solid @color-e;
    font-size:.32rem;
    .activity-title{
        box-sizing: border-box;
        padding:.12rem .32rem;
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
    .activity-msg{
        box-sizing: border-box;
        padding:.12rem .4rem;
        font-size:@font-a;
        color:@color-6;
    }
    .activity-btn{
        padding:.26rem 0;
        display:flex;
        justify-content: center;
        span{
            color:@color-8;
            border-radius:@color-8;
            padding:.08rem .8rem;
            border:.02rem solid @color-8;
            border-radius:1rem 1rem;
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

    .list-title{
        display:flex;
        align-items:center;
        justify-content: space-between;
        box-sizing: border-box;
        padding:.24rem;
        .left{
            display:flex;
            img{
                width:.52rem;
                height:.52rem;
                border-radius:50%;
                margin-right:.16rem;
            }
        }
    }
    .list-apply{
        box-sizing: border-box;
        padding:.24rem;
        width:100%;
        >span{
            color:@color-6;
            font-size:@font-a;
        }
        .apply{
            display:flex;
            padding-top:.2rem;
            overflow-x: auto;
            .apply-item{
                width:20%;
                display:flex;
                flex-flow:column;
                justify-content: center;
                align-items:center;
                margin-right:.2rem;
                flex-shrink: 0;
                font-size:@font-a;
                img{
                    width:80%;
                    border-radius:50%;
                    padding-bottom:.12rem;
                }
                p{
                    width:100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    text-align:center;
                }
            }
        }
    }

}
.critic{
    font-size:@font-a;
    box-sizing: border-box;
    padding:.26rem;
    .critic-icon{
        height:.32rem;
        padding-bottom:.12rem;
        img{
            height:100%;
        }
    }
    .critic-item{
        box-sizing: border-box;
        padding:.12rem;
        p{
            display:inline-block;
            color:@color-3;
            padding-right:.24rem;
        }
        span{
            color:@color-6;
        }
        img{
            width:.8rem;
            vertical-align: middle;
            padding:0 .24rem .06rem 0;
        }
    }
    .critic-item.action{
        p::after{
            content:'发起人';
            display: inline-block;
            padding:.02rem .12rem;
            background-color:@color-8;
            border-radius: 1rem 1rem;
            color:#fff;
            font-size:.24rem;
            margin-left:.08rem;
        }
    }
}
</style>