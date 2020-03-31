<template>
<div class='background my'>
    <header class="my-title">
        <span/>
        <span>我的</span>
        <img src="@/assets/images/icon/set.png" @click="handleClickPush" alt="设置">
    </header>
    <div class="my-height">
        <div class="head">
            <img :src="user.headPic" alt="">
        </div>
        <p>{{user.UserName}}</p>
        <div class="mobile">
            <img src="@/assets/images/icon/wode-phone.png" alt="">
            <span>{{user.mobile}}</span>
        </div>
    </div>
    <div>
        <myList v-for="(item,index) in list" :key="index" :test="item.test" :path="item.path" class="myList" />
    </div>
    <div class="btn" @click="handleClickOver"><div class="button"><span>{{token?'退出当前账号':'登录'}}</span></div></div>
</div>
</template>
<script>

import { getMySelfInfo } from '~api'
import myList from '@/views/my-list'
// import headImg from '@/assets/images/img/wode-face.png'
    export default {
        data() {
            return {
                list : [
                    {
                        test : '我的图文动态',
                        path : '/my/image-text'
                    },
                    {
                        test : '我的活动',
                        path : '/my/activity'
                    },
                    {
                        test : '我的收藏',
                        path : '/my/enshrine'
                    },
                    {
                        test : '我的商品',
                        path : '/my/commodity'
                    },
                ],
                token:localStorage.getItem('token'),
                user:{
                    UserName : '',
                    mobile : '',
                    headPic : ''
                }
            }
        },
        created(){
            this.init()
        },
        methods:{
            handleClickOver(){
                sessionStorage.removeItem("token");
                setTimeout(()=>{
                    this.$router.replace('/log');
                },500);
            },
            handleClickPush(){

                this.$router.push({path:'/my/info'});
            },
            init(){
                var that = this;
                getMySelfInfo().then(res=>{
                    if(res.code == 0){
                        that.user = res.data;
                        localStorage.setItem('userInfo',JSON.stringify(that.user));
                    }
                    console.log(that.user);
                })
            }
        },
        components:{
            myList
        },
        
    }
</script>
<style lang="less" scoped>
@color-e:#EEEEEE;
@color-9:#9E9E9E;
@color-8:#8B2C18;
@color-6:#666666;
@color-3:#333333;
@font-a:.28rem;
.my{
    padding-top:1rem;
    .my-title{
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        height:1rem;width:100%;
        position:fixed;
        top:0;
        align-items:center;
        font-size:.32rem;
        font-weight: bold;
        background-color:#fff;
        span{
            min-width:.64rem;
        }
        img{
            width:.4rem;
            padding-right:.12rem;
        }
    }
    .my-height{
        border-style:solid;
        border-color:@color-e;
        border-width:.02rem 0 .06rem 0;
        background-color:#fff;
        box-sizing: border-box;
        padding:.42rem 0 .3rem;
        display:flex;
        flex-flow:column;
        align-items: center;
        .head{
            width:1.6rem;
            height:1.6rem;
            border-radius:50%;
            border:2px solid #ededed;
            box-shadow: 0 0 2px #ededed;
            overflow: hidden;
            img{
                width:100%;
                height:100%;
            }
        }
        p{
            font-weight: bold;
            padding:.12rem 0;
        }
        .mobile{
            display:flex;
            align-items:center;
            color:@color-3;
            img{
                width:.32rem;
                padding-right:.04rem;
                flex-shrink: 0;
            }
        }
    }
    .myList{
        border-bottom:1px solid @color-e;
    }
    .btn{
        margin-top:2rem;
        width:100%;
        box-sizing: border-box;
        padding:.24rem;
        .button{
            background-color:@color-8;
            color:#fff;
            border-radius:.16rem;
        }
    }
}

</style>