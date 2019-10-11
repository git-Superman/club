<template>
<div class="home">
    <div class="home-head">
        <img src="@/assets/images/icon/mian-logo.png" alt="">
    </div>
    <ul class="list" v-for="i in 3" :key="i">
        <li class="list-head">
            <div class="img">
                <img src="@/assets/images/img/mian-face.png" alt="">
            </div>
            <div class="test">
                <p>Cameron AJ</p>
                <span>15分钟前</span>
            </div>
        </li>
        <li class="list-ban">
            <img src="@/assets/images/img/mian-pimg.png" alt="">
        </li>
        <li>
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
</template>
<script>
    export default {
        data(){
            return {
                show : false
            }
        },
        methods:{
            handleClickPush(test){
                if(test === "点赞"){
                    this.$router.push('/home/give');
                }else if(test === "评论"){
                    this.$router.push('/home/comment');
                }
            }
        }
    }
</script>
<style lang="less" rel="stylesheet/less">
@color-e:#EEEEEE;
@color-9:#9E9E9E;
@color-8:#8B2C18;
@color-6:#666666;
@color-3:#333333;
@font-a:.28rem;
.home{
    .home-head{
        display:flex;
        justify-content: center;
        padding:.32rem 0;
        border-bottom:1px solid @color-e;
        img{
            height:.4rem;
        }
    }
}
.list{
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
    .list-ban{
        img{
            width:100%;
        }
    }
}
.list + .list{
    border-top:.06rem solid @color-e;
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