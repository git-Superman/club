<template>
<div class="background">
    <navBar :test='test'/>
    <ul class="pay">
        <li class="pay-dz" @click="handleClickSite">
            <span>收货地址</span>
            <div>
                <p>李先生，江苏省苏州市苏州工业园区澄湾路19号中新科技 大厦1107室，215000，13845875421</p>
                <img src="@/assets/images/icon/spxq-jrdp.png" alt="">
            </div>
        </li>
        <li class="pay-qd">
            <span>商品清单</span>
            <div class="pay-qd-top">
                <p>征伐 烧烤架 户外不锈钢烧烤架子 可折叠便携烧烤炉家用碳烤炉烤肉 架套装21(黑色;大号)</p>
                <i>x 1</i>
                <span>￥258.00</span>
            </div>
            <div class="pay-qd-bot">
                <p>邮费(顺丰快递)</p>
                <span>￥10.00</span>
            </div>
        </li>
        <li class="pay-hj">
            <span>合计</span>
            <em>￥268.00</em>
        </li>
        <li class="pay-fk">
            <span>付款方式</span>
            <div v-for="(item,i) in pay" :key="i" class="pay-fk-item">
                <div class="pay-fk-left">
                    <img :src="item.icon" :alt="item.test">
                    <p>{{item.test}}</p>
                </div>
                <div class="pay-fk-right">
                    <img :src="item.active?istrue:isfalse" @click="handleClickActive(i)" alt="">
                </div>
            </div>
        </li>
    </ul>
    <div class="pay-btn"><div class="button"><span>确定支付</span></div></div>
</div>
</template>
<script>
import wxIcon from '@/assets/images/icon/zfdd-wxzf.png'
import zfbIcon from '@/assets/images/icon/zfdd-zfb.png'
import yhkIcon from '@/assets/images/icon/zfdd-yhk.png'
import isfalse from '@/assets/images/icon/zfdd-danxwx.png'
import istrue from '@/assets/images/icon/zfdd-danxyx.png'
    import navBar from '../navBar'
    export default {
        data() {
            return {
                test : '支付订单',
                isfalse,
                istrue,
                pay : [
                    {
                        icon:wxIcon,
                        test:'微信支付',
                        active:false
                    },
                    {
                        icon:zfbIcon,
                        test:'支付宝支付',
                        active:true
                    },
                    {
                        icon:yhkIcon,
                        test:'银行卡支付',
                        active:false
                    }
                ]
            }
        },
        methods:{
            handleClickActive(i){
                this.pay.forEach(item=>{
                    item.active = false;
                });
                this.pay[i].active = true;
            },
            handleClickSite(){
                this.$router.push('/store/site');
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
.flex{
    display:flex;
    justify-content: space-between;
    align-items:center;
}
.pay{
    font-size:@font-a;
    span{
        display:block;
        color:@color-6;
        padding-bottom:.08rem;
    }
    em,i{
        color:@color-8;
        font-weight: bold;
        font-size:.32rem;
    }
    i{
        color:@color-6;
    }
    p{
        color:@color-3;
        font-weight: 600;
    }
    .pay-pay{
        border-top:.06rem solid #EEEEEE;
        background-color:#fff;
        box-sizing: border-box;
        padding:.24rem;
    }
    .pay-dz{
        .pay-pay;
        div{
            .flex;
            p{
                padding-right:.8rem;
            }
            img{
                width:.18rem;
                flex-shrink: 0;
            }
        }
    }
    .pay-qd{
        .pay-pay;
        .pay-qd-top,.pay-qd-bot{
            .flex;
        }
        .pay-qd-top{
            padding-bottom:.12rem;
            p{
                width:60%;
            }
        }
    }
    .pay-hj{
        .pay-pay;
        .flex;
    }
    .pay-fk{
        .pay-pay;
        .pay-fk-item{
            .flex;
            margin-top:.2rem;
        }
        .pay-fk-left{
            display:flex;
            img{
                padding-right:.12rem;
            }
        }
        img{
            width:.4rem;
            height:.4rem;
            flex-shrink: 0;
        }
    }
}
.pay-btn{
    position:fixed;
    box-sizing: border-box;
    padding:.16rem;
    bottom:0;
    width:100%;
    .button{
        background-color:@color-8;
        color:#fff;
        border-radius:.14rem;
    }
}
</style>