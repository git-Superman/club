<template>
<div class="info background">
    <myTitle test="我的活动" right="" @confirm="handleClick"/>
    <main class="navTitle">
        <div @click="show = true">
            <span :class="show ? 'action' : ''">我发布的活动</span>
        </div>
        <div @click="show = false">
            <span :class="!show ? 'action' : ''">我参与的活动</span>
        </div>
    </main>
    <div v-show="show">
        <ul class="activity" v-for="i in 5" :key="i" @click="handleClickPush('活动')">
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
            <li class="list-title">
                <div class="left">
                    <span>报名中…</span>
                </div>
                <div class="right">
                    <img src="@/assets/images/img/mian-dzface1.png" alt="">
                    <img src="@/assets/images/img/mian-dzface1.png" alt="">
                    <img src="@/assets/images/img/mian-dzface1.png" alt="">
                    <p>共 53 人报名</p>
                </div>
            </li>
        </ul>
    </div>
    <div v-show='!show'>
        <ul class="activity" @click="handleClickPush('活动')">
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
            <li class="list-title">
                <div class="left">
                    <span>报名中…</span>
                </div>
                <div class="right">
                    <img src="@/assets/images/img/mian-dzface1.png" alt="">
                    <img src="@/assets/images/img/mian-dzface1.png" alt="">
                    <img src="@/assets/images/img/mian-dzface1.png" alt="">
                    <p>共 53 人报名</p>
                </div>
            </li>
        </ul>
    </div>
</div>    
</template>
<script>
import myTitle from '../my-title'
export default {
    data() {
        return {
            show : true
        }
    },
    components:{
        myTitle
    },
    methods:{
        handleClick(){
            console.log('保存');
        },
        handleClickPush(){
            this.$router.push('/activity/details');
        }
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
    .list-title{
        display:flex;
        align-items:center;
        justify-content: space-between;
        box-sizing: border-box;
        padding:.24rem;
        .right{
            display:flex;
            align-items:center;
            img{
                width:.4rem;
                height:.4rem;
                border-radius:50%;
            }
            p{
                margin-left:.12rem;
            }
        }
    }
}
.navTitle{
    display:flex;
    background-color:#fff;
    font-size:@font-a;
    color:@color-6;
    div{
        width:50%;
        display:flex;
        justify-content: center;
        span{
            padding:.24rem 0;
            font-weight: bold;
            position:relative;
        }
        span::after{
            content:'';
            display:block;
            position:absolute;
            width:60%;height:.06rem;
            border-radius:1rem 1rem;
            bottom:0;
            left:50%;
            margin-left:-30%;
            background-color:transparent;
        }
        span.action{
            color:@color-8;
        }
        span.action::after{
            background-color:@color-8;
        }
    }
}
</style>