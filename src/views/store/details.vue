<template>
<div class="background">
    <navBar test="商品详情"></navBar>
    <div class="details">
        <van-swipe :autoplay="3000" @change="onChange">
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
            <div class="custom-indicator" slot="indicator">
                {{ current + 1 }}/4
            </div>
        </van-swipe>
        <div class="box">
            <p>征伐 烧烤架 户外不锈钢烧烤架子可折叠便携烧烤炉家用碳烤炉烤肉架套装 图片色 73*33.5*70厘米</p>
            <div>
                <p>￥129.00-258.00</p>
                <span>154人已购</span>
            </div>
        </div>
        <div class="scope"  @click="handleClickPush">
            <div>
                <img src="@/assets/images/img/spxq-dpface.png" alt="">
                <span>马先森の店</span>
            </div>
            <img src="@/assets/images/icon/spxq-jrdp.png" alt="">
        </div>
        <div class="scope-item" @click="shows = true">
            <span>选择规格</span>
            <div>
                <span>请选择</span>
                <img src="@/assets/images/icon/spxq-jrdp.png" alt="">
            </div>
        </div>
    </div>
    <div class="specification">
        <div class="bt">
            <span :class="show ? 'action' : ''" @click="show = true">商品详情</span>
            <span :class="!show ? 'action' : ''" @click="show = false">商品规格</span>
        </div>
        <div class="images" v-show="show">
            <img src="@/assets/images/img/spxq-xqyimg1.png" alt="">
        </div>
        <div class="images detail" v-show="!show" style="min-height:429.41px">
            <img src="@/assets/images/img/spxq-ggimg.png" alt="">
            <div>
                <span>颜色：白色;黑色</span>
                <span>型号：小号;大号</span>
                <span>产地：中国</span>
                <span>标准：A级</span>
            </div>
        </div>
    </div>
    <footer class="foot">
        <div @click="handleClickPush">
            <img src="@/assets/images/icon/spxq-gtrk.png" alt="">
        </div>
        <div>
            <span>立即购买</span>
        </div>
    </footer>
    <div>
        <van-overlay :show="shows" @click="shows = false" />
        <van-popup v-model="shows" position="bottom" :style="{ height: '60%'}">
            <div class="popup">
                <div class="van-popup--top" />
                <div class="popup-title">
                    <div>
                        <img src="@/assets/images/img/gm-img.png" alt="">
                    </div>
                    <div>
                        <p>征伐 烧烤架 户外不锈钢烧烤架子可 折叠便携烧烤炉家用碳烤炉烤肉架 套装</p>
                        <i>￥258.00</i>
                        <span>已选：白色;大号</span>
                    </div>
                </div>
                <div class="popup-item">
                    <span>颜色</span>
                    <div>
                        <p>黑色</p>
                        <p class="action">白色</p>
                    </div>
                </div>
                <div class="popup-item">
                    <span>型号</span>
                    <div>
                        <p>小号</p>
                        <p class="action">大号</p>
                    </div>
                </div>
                <div class="button" @click="handleClickPay">
                    <span>支付</span>
                </div>
            </div>
        </van-popup>
    </div>
</div>
</template>
<script>
import navBar from '../navBar'
    export default {
        data() {
            return {
                current : 0,
                show : true,
                shows : false,
            }
        },
        methods:{
            onChange(index) {
                this.current = index;
            },
            handleClickPush(){
                this.$router.push('/store/counter');
            },
            handleClickPay(){
                this.$router.push('/store/pay');
            }
        },
        components:{
            navBar
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
/deep/ .van-popup{
        overflow-y: visible;
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
.details{
    font-size:0;
    .box{
        font-size:@font-a;
        color:@color-6;
        box-sizing: border-box;
        padding:.24rem;
        background-color:#fff;
        p{
            font-weight: bold;
            color:@color-3;
        }
        div{
            margin-top:.2rem;
            display:flex;
            justify-content: space-between;
            p{
                color:@color-8;
            }
        }
    }
    .scope{
        font-size:@font-a;
        background-color:@color-e;
        display:flex;
        box-sizing: border-box;
        padding:.24rem;
        justify-content: space-between;
        align-items:center;
        color:@color-6;
        margin-bottom:2px;
        >img{
            width:.2rem;
        }
        div{
            display:flex;
            align-items:center;
            img{
                width:.4rem;
                padding-right:.08rem;
            }
        }
    }
    .scope-item{
        font-size:@font-a;
        background-color:#FFF;
        display:flex;
        box-sizing: border-box;
        padding:.24rem;
        justify-content: space-between;
        align-items:center;
        color:@color-6;
        margin-bottom:.06rem;
        div{
            display:flex;
            align-items:center;
            img{
                width:.2rem;
                padding-left:.28rem;
            }
        }
    }
}
.specification{
    background-color:#fff;
    box-sizing: border-box;
    padding:.24rem;
    .bt{
        display:flex;
        font-size:@font-a;
        color:@color-6;
        padding-bottom:.24rem;
        span{
            display:block;
            margin-right:.6rem;
            position:relative;
            padding:.12rem;
        }
        span::after{
            content:'';
            position:absolute;
            display:block;
            width:60%;
            bottom:0;left:50%;
            margin-left:-30%;
            border-bottom:3px solid transparent;
            border-radius:1rem 1rem;
        }
        span.action{
            font-weight: bold;
            color:@color-3;
        }
        span.action::after{
            border-color:@color-3;
        }
    }
    .images{
        >img{
            width:100%;
        }
    }
    .images.detail{
        div{
            margin-top:.12rem;
            box-sizing: border-box;
            padding:.32rem .32rem .2rem .32rem;
            background-color:@color-e;
            font-size:@font-a;
            color:@color-3;
            font-weight: bold;
            span{
                display:inline-block;
                width:50%;
                padding-bottom:.12rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
}
.background{
    padding-bottom:1.2rem;
    .foot{
        display:flex;
        width:100%;
        height:1rem;
        position: fixed;
        bottom:0;
        font-size:0;
        align-items:center;
        z-index:15;
        div:first-child{
            width:1.6rem;height:100%;
            background-color:#FFF;
            display:flex;
            align-items:center;
            justify-content: center;
            flex-shrink: 0;
            img{
                width:.52rem;
            }
        }
        div:last-child{
            font-size:@font-a;
            color:#fff;
            font-weight: bold;
            background-color:@color-8;
            width:100%;height:100%;
            display:flex;
            justify-content: center;
            align-items: center;
        }
    }
}
.popup{
    box-sizing: border-box;
    padding:.24rem;
    .popup-title{
        display:flex;
        padding-bottom:.6rem;
        div:first-child{
            width:40%;
            padding-right:.24rem;
            img{
                width:100%;
                margin-top:-.6rem;
                position:relative;
                z-index:999999;
                border:2px solid #fff;
            }
        }
        div:last-child{
            padding-top:.16rem;
            width:60%;
            font-size:@font-a;
            color:@color-6;
            p{
                height:1.16rem;
                overflow: hidden;
            }
            i{
                display:block;
                color:@color-8;
                font-weight: bold;
                padding:.04rem 0;
            }
        }
    }
    .popup-item{
        font-size:@font-a;
        color:@color-6;
        span{
            display:block;
        }
        p{
            display:inline-block;
            padding:.06rem .24rem;
            background-color:@color-e;
            border-radius:1rem 1rem;
            margin:.2rem .2rem .2rem 0;
        }
        p.action{
            background-color:@color-8;
            color:#fff;
        }
    }
    .button{
        margin-top:1rem;
        background-color:@color-8;
        border-radius:.16rem;
        color:#fff;
    }
}
</style>