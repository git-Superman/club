<template>
<div>
    <myTitle left="返回" center="户外商城" :right="icon"></myTitle>
<div v-for="i in 12" :key="i" style="border-top:3px solid #EEEEEE">
    <div class="activity-title">
        <div class="img">
            <img src="@/assets/images/img/shop-dpface.png" alt="">
        </div>
        <div class="test">
            <p>Cameron户外店</p>
            <span>15分钟前</span>
        </div>
    </div>
    <van-swipe :autoplay="3000" @change="onChange">
        <van-swipe-item class="van-swipe-item">
            <img src="@/assets/images/img/shop-spimg.png" @click="handleClickPush('1')" alt="">
        </van-swipe-item>
        <van-swipe-item class="van-swipe-item">
            <img src="@/assets/images/img/shop-spimg.png" @click="handleClickPush('1')" alt="">
        </van-swipe-item>
        <van-swipe-item class="van-swipe-item">
            <img src="@/assets/images/img/shop-spimg.png" @click="handleClickPush('1')" alt="">
        </van-swipe-item>
        <van-swipe-item class="van-swipe-item">
            <img src="@/assets/images/img/shop-spimg.png" @click="handleClickPush('1')" alt="">
        </van-swipe-item>
        <div class="custom-indicator" slot="indicator">
            {{ current + 1 }}/4
        </div>
    </van-swipe>
    <ul class="list-content">
        <li class="list-title">
            <div class="left">
                <img @click="handleClickPush('点赞')" src="@/assets/images/icon/mian-dz.png" alt="">
                <img @click="handleClickPush('评论')" src="@/assets/images/icon/mian-ly.png" alt="">
                <img @click="show = true" src="@/assets/images/icon/mian-zf.png" alt="">
            </div>
            <div class="right">
                <img src="@/assets/images/img/mian-dzface1.png" alt="">
                <img src="@/assets/images/img/mian-dzface1.png" alt="">
                <img src="@/assets/images/img/mian-dzface1.png" alt="">
                <p>等153人觉得赞</p>
            </div>
        </li>
        <li>在路上……</li>
        <li class="nbsp">
            <span>共 5 条回复</span>
        </li>
        <li class="nbsp">
            <p>Cameron AJ&nbsp;&nbsp;<span>回复&nbsp;吃可爱长大</span>&nbsp;哈哈哈</p>
        </li>
        <li class="nbsp">
            <p>吃可爱长大&nbsp;<span>是你说的地方吗？</span></p>
        </li>
        <li class="list-list">
            <img src="@/assets/images/icon/shop-dptjbt.png" alt="">
            <ul class="list">
                <li class="list-item" v-for="i in 6" :key="i" @click="handleClickPush('1')">
                    <img src="@/assets/images/img/shop-spsimg.png" alt="">
                    <span>便携户外保温水壶 </span>
                    <p>￥32.00</p>
                </li>
            </ul>
        </li>
    </ul>
    <div class="alert" v-if="show">
        <van-overlay :show="show" @click="show = false" />
        <div class="share">
            <div class="head">
                <p></p>
                <p>分享到</p>
                <img  @click="show = false" src="@/assets/images/icon/share-close.png" alt="">
            </div>
            <div class="share-item">
                <img src="@/assets/images/icon/share-wx.png" alt="">
                <img src="@/assets/images/icon/share-pyq.png" alt="">
                <img src="@/assets/images/icon/share-qq.png" alt="">
                <img src="@/assets/images/icon/share-wb.png" alt="">
            </div>
        </div>
    </div>
</div>
</div>
</template>
<script>
    import myTitle from '../title'
    import icon from "@/assets/images/icon/shop-sqgt.png"
    export default {
        data() {
            return {
                icon,
                current: 0,
                show : false
            }
        },
        methods:{
            onChange(index) {
                this.current = index;
            },
            handleClickPush(test){
                if(test === "点赞"){
                    this.$router.push('/home/give');
                }else if(test === "评论"){
                    this.$router.push('/home/comment');
                }else{
                    this.$router.push('/store/details');
                }
            }
        },
        components:{
            myTitle
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
.van-swipe{
    font-size:0;
    .van-swipe-item{
        img{
            width:100%;
        }
    }
    .custom-indicator{
        color:#fff;
        position:absolute;
        bottom:.24rem;right:.24rem;
        padding:.04rem .18rem;
        background-color:#9E9E9E;
        font-size:.24rem;
        border-radius:1rem 1rem;
    }
}

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
.list-content{
    box-sizing: border-box;
    padding:0 .32rem .24rem;
    font-size:@font-a;
    span{
        color:@color-6;
    }
    .list-title{
        display:flex;
        align-items:center;
        justify-content: space-between;
        box-sizing: border-box;
        padding:.12rem 0;
        .left{
            display:flex;
            img{
                width:.52rem;
                height:.52rem;
                border-radius:50%;
                margin-right:.16rem;
            }
        }
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
    .nbsp{
        margin-top:.04rem;
    }
}
.list-list{
    >img{
        display:block;
        height:.26rem;
        padding:.32rem 0 .12rem;
    }
    .list{
        display:flex;
        width:100%;
        overflow-x: auto;
        .list-item{
            width:33.33%;
            margin-right:.16rem;
            flex-shrink: 0;
            font-size:@font-a;
            color:@color-6;
            border:1px solid @color-e;
            img{
                display:block;
                width:100%;
                padding-bottom:.12rem;
            }
            span{
                display:block;
                width:100%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                box-sizing: border-box;
                padding-left:.12rem;
            }
            p{
                padding-top:.12rem;
                color:@color-3;
                font-weight: bold;
                box-sizing: border-box;
                padding-left:.12rem;
            }
        }
    }
}
.share{
    position:fixed;
    bottom:0;
    background-color:#fff;
    z-index:3;
    width:100%;
    .head{
        box-sizing: border-box;
        padding:.24rem;
        display:flex;
        align-items:center;
        justify-content: space-between;
        color:@color-3;
        font-size:@font-a;
        border-bottom:3px solid @color-3;
        img{
            width:.4rem;
        }
    }
    .share-item{
        box-sizing: border-box;
        padding:.6rem 0 1rem;
        display:flex;
        justify-content: space-evenly;
        img{
            width:1rem;
            flex-shrink: 0;
        }
    }
}
</style>