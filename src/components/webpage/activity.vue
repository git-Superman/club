<template>
<div>
    <div class="title">活动</div>
    <div class="input">
        <input type="text" placeholder="输入昵称、活动名称等查询活动" >
        <img class="left" src="@/assets/images/icon/hd-searchbtn.png" alt="">
        <img @click="show = true" class="right" src="@/assets/images/icon/hd-sxbtn.png" alt="">
    </div>
    <ul class="activity" v-for="i in 5" :key="i" @click="handleClickPush('活动')">
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
            <p>秋天到啦~！周末一起去赏枫叶啊~秋天到啦~！周末一起去赏枫叶啊~秋天到啦~！周末一起去赏枫叶啊~秋天到啦~！周末一起去赏枫叶啊~秋天到啦~！周末一起去赏枫叶啊~</p>
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
    </ul>
    <div class="alert" v-if="show">
        <van-overlay :show="show" @click="show = false" />
        <div class="share">
            <div class="head">
                <p></p>
                <p>筛选</p>
                <img  @click="show = false" src="@/assets/images/icon/share-close.png" alt="">
            </div>
            <ul class="share-ul">
                <li class="share-li">
                    <span>活动时间</span>
                    <div class="share-day">
                        <div>
                            <img src="@/assets/images/icon/sx-date.png" alt="">
                        </div>
                        <span>至</span>
                        <div>
                            <img src="@/assets/images/icon/sx-date.png" alt="">
                        </div>
                    </div>
                </li>
                <li class="share-li">
                    <span>活动地点</span>
                    <div class="city">
                        <img src="@/assets/images/icon/sx-dw.png" alt="">
                        <span>北京市</span>
                        <img src="@/assets/images/icon/sx-sx.png" alt="">
                        <input type="text" placeholder="手动输入城市名称">
                    </div>
                </li>
                <li class="share-btn">
                    <span>确定</span>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        data() {
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
.title{
    box-sizing: border-box;
    padding:.32rem;
    display:flex;
    justify-content: center;
    align-items:center;
    color:@color-3;
    font-weight: bold;
}
.input{
    box-sizing: border-box;
    padding: .24rem;
    display:flex;
    justify-content: space-between;
    align-items:center;
    position:relative;
    input{
        display:block;
        width:100%;
        background-color: @color-e;
        border:0;
        box-sizing: border-box;
        padding:.12rem .28rem;
        border-radius:1rem 1rem;
    }
    input::-webkit-input-placeholder{
        font-size:@font-a;
    }
    img{
        width:.6rem;
        flex-shrink:0;
    }
    .left{
        position:absolute;
        left:70%;
    }
    .right{
        padding-left:.52rem;
    }
}
.activity{
    border-top:1px solid @color-e;
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

    }
    .share-ul{
        box-sizing: border-box;
        padding:.24rem;
        span{
            color:@color-6;
            font-size:@font-a;
        }
        .share-li{
            .share-day{
                display:flex;
                justify-content: space-between;
                align-items:center;
                margin:.12rem 0 .6rem;
                img{
                    width:.4rem;
                }
                div{
                    width:50%;
                    background-color:@color-e;
                    box-sizing: border-box;
                    padding:.12rem .28rem;
                    border-radius:1rem 1rem;
                    display:flex;
                    align-items: center;
                }
                span{
                    margin:0 .24rem;
                    flex-shrink: 0;
                }
            }
            .city{
                padding:.24rem 0;
                display:flex;
                align-items:center;
                img{
                    width:.32rem;
                    flex-shrink: 0;
                }
                span{
                    padding:0 .12rem;
                    flex-shrink:0;
                }
                input{
                    width:100%;
                    background-color:@color-e;
                    box-sizing: border-box;
                    padding:.12rem .28rem;
                    border-radius:1rem 1rem;
                    border:0;
                    margin-left:.6rem;
                }
            }
        }
        .share-btn{
            width:100%;
            padding:.2rem 0;
            background-color:@color-8;
            display:flex;
            margin-top:.52rem;
            justify-content: center;
            border-radius:.14rem;
            span{
                color:#fff;
            }
        }
    }
}
</style>