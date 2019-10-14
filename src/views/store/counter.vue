<template>
<div class="counter">
    <div class="nav">
        <span @click="handleClickGo">返回</span>
        <div>
            <img src="@/assets/images/img/spxq-dpface.png" alt="">
            <p>马先森の店</p>
        </div>
        <span/>
    </div>
    <div class="input">
        <div>
            <input type="text" placeholder="输入商品名称、分类等进行查询" />
            <img src="@/assets/images/icon/hd-searchbtn.png" alt="">
        </div>
    </div>
    <div v-for="i in 6" :key="i" style="border-bottom:3px solid #EEEEEE">
        <van-swipe :autoplay="3000" @change="onChange">
            <van-swipe-item class="van-swipe-item">
                <img src="@/assets/images/img/shop-spimg.png" @click="handleClickPush('1')" alt="">
            </van-swipe-item>
            <van-swipe-item class="van-swipe-item">
                <img src="@/assets/images/img/shop-spimg.png" @click="handleClickPush('1')" alt="">
            </van-swipe-item>
            <div class="custom-indicator" slot="indicator">
                {{ current + 1 }}/2
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
        </ul>
    </div>

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
</template>
<script>
    export default {
        data() {
            return {
                current: 0,
                show : false
            }
        },
        methods:{
            handleClickGo(){
                this.$router.go(-1);
            },
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
.counter{
    padding-top:1.06rem;
    .nav{
        box-sizing: border-box;
        padding:.32rem;
        display:flex;
        justify-content: space-between;
        background-color:#fff;
        position:fixed;
        width:100%;
        top:0;
        z-index: 9999999;
        color:@color-6;
        font-size:@font-a;
        align-items:center;
        border-bottom:1px solid @color-e;
        span{
            min-width:.56rem;
        }
        div{
            display:flex;
            align-items:center;
            img{
                width:.4rem;
                padding-right:.12rem;
            }
            p{
                font-weight: bold;
                font-size:.32rem;
                color:@color-3;
            }
        }
    }
    .input{
        display:flex;
        justify-content: center;
        padding:.12rem;
        border-bottom:1px solid @color-e;
        div{
            background-color:@color-e;
            border-radius:1rem 1rem;
            width:80%;
            display:flex;
            align-items:center;
            position:relative;
            box-sizing: border-box;
            padding:.12rem .9rem .12rem .32rem;
            input{
                border:0;
                display:block;
                width:100%;
                background-color:transparent;
            }
            ::-webkit-input-placeholder{
                font-size:@font-a;
            }
            img{
                width:.52rem;
                position: absolute;
                right:.26rem;
            }
        }
    }
}
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
        background-color:rgba(0,0,0,.6);
        font-size:.24rem;
        border-radius:1rem 1rem;
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