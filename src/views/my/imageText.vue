<template>
<div class="info background">
    <myTitle test="我的图文动态" :right="right" @confirm="handleClick"/>
    <main class='main'>
        <div class='main-item' @click="handleClickPush">
            <div class='main-item-img'>
                <img src="@/assets/images/img/gm-img.png" alt="">
            </div>
            <div class='main-item-msg'>
                <p>今天太开心！</p>
                <div class="main-item-zx">
                    <div><img :src="isfalse" alt=""><span>50</span></div>
                    <div><img :src="iconMsg" alt=""><span>355</span></div>
                </div>
            </div>
            <div v-show="show" class="options"><img :src="activeTrue" alt=""></div>
        </div>
        <div class='main-item' v-for='i in 12' :key='i' @click="handleClickPush">
            <div class='main-item-img'>
                <img src="@/assets/images/img/gm-img.png" alt="">
            </div>
            <div class='main-item-msg'>
                <p>今天太开心！</p>
                <div class="main-item-zx">
                    <div><img :src="istrue" alt=""><span>50</span></div>
                    <div><img :src="iconMsg" alt=""><span>355</span></div>
                </div>
            </div>
            <div v-show="show" class="options"><img :src="activeFalse" alt=""></div>
        </div>
    </main>
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
import { getUserDynamicList } from '~api'
import isfalse from '@/assets/images/icon/twdt-dz.png'
import istrue from '@/assets/images/icon/twdt-ydz.png'
import iconMsg from '@/assets/images/icon/twdt-ly.png'
import activeTrue from '@/assets/images/icon/bj-xz.png'
import activeFalse from '@/assets/images/icon/bj-wxz.png'
export default {
    data() {
        return {
            isfalse,
            istrue,
            iconMsg,
            right:'编辑',
            activeTrue,
            activeFalse,
            show : false
        }
    },
    components:{
        myTitle
    },
    created(){
        getUserDynamicList({},true).then(res=>{
            console.log(res);
        })
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
            this.$router.push('/my/image-text-details');
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
.main{
    box-sizing: border-box;
    padding:.24rem 0 1rem .24rem;
    display:flex;
    flex-flow: wrap;
    .main-item{
        font-size:0;
        color:@color-6;
        width:50%;
        box-sizing: border-box;
        padding:0 .24rem .24rem 0;
        display:inline-block;
        position:relative;
        p{
            color:@color-3;
            width:100%;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding-bottom:.16rem;
        }
        .main-item-img{
            height:2.5rem;
            border-top-left-radius:.16rem;
            border-top-right-radius:.16rem;
            overflow: hidden;
            img{
                width:100%;
                height:100%;
            }
        }
        .main-item-msg{
            font-size:@font-a;
            background-color:#fff;
            box-sizing: border-box;
            padding:.12rem;
            border-bottom-left-radius:.16rem;
            border-bottom-right-radius:.16rem;
            div{
                display:flex;
                align-items:center;
            }
            img{
                width:.4rem;
                padding-right:.04rem;
            }
            div + div{
                margin-left:.4rem;
            }
        }
        .options{
            position: absolute;
            top:.08rem;right:.32rem;
            img{
                width:.52rem;
                height:.52rem;
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