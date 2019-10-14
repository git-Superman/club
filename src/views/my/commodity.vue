<template>
<div class="info background">
    <myTitle test="我的商品" :right="right" @confirm="handleClick"/>
    <myInput test="输入商品名称、分类等进行查询"/>
    <div>
        <ul class="commodity" v-for="i in 2" :key="i" @click="handleClickPush">
            <li class="commodity-item">
                <div class='commodity-item-img'>
                    <img src="@/assets/images/img/wdsp-img.png" alt="">
                </div>
                <p>征伐 烧烤架 户外不锈钢烧烤架子可折叠便携烧烤炉家 用碳烤炉烤肉架套装</p>
                <div class="commodity-item-info">
                    <div>
                        <img src="@/assets/images/icon/wdsp-bj.png" alt="">
                        <div>
                            <img src="@/assets/images/icon/wdsp-yl.png" alt="">
                            <span>1587</span>
                        </div>
                    </div>
                    <p>￥50.00 起</p>
                </div>
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
import myInput from '../my-input'
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
        myTitle,
        myInput
    },
    methods:{
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
        handleClickPush(){
            this.$router.push('/my/commodity-details');
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
.commodity{
    padding:.24rem .6rem 0;
    position: relative;
    .options{
        position: absolute;
        top:.32rem;right:.68rem;
        img{
            width:.52rem;
            height:.52rem;
        }
    }
    .commodity-item{
        background-color:#fff;
        border-radius:.12rem;
        overflow: hidden;
        font-size:0;
        p{
            font-size:@font-a;
            color:@color-3;
            font-weight: bold;
            box-sizing: border-box;
            padding:.12rem .12rem .06rem .12rem;
        }
        .commodity-item-img{
            img{
                width:100%;
                height:2.8rem;
            }
        }
        .commodity-item-info{
            font-size:@font-a;
            display:flex;
            justify-content: space-between;
            align-items:center;
            padding-bottom:.12rem;
            span{
                color:@color-6;
            }
            div{
                display:flex;
                align-items:center;
                padding-left:.32rem;
                img{
                    width:.4rem;
                    padding-right:.06rem;
                }
            }
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