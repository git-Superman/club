<template>
<div>
    <ul class="list">
        <li class="list-logo">
            <img src="@/assets/images/log/login-logo.png" alt="">
        </li>
        <li class="list-item">
            <input type="text" placeholder="手机号码">
        </li>
        <li class="list-item">
            <input type="password" placeholder="登录密码">
        </li>
        <li class="list-msg">
            <span @click="handleClickPush('忘记密码')">忘记密码？</span>
        </li>
        <li class="list-wx">
            <img src="@/assets/images/log/login-wx.png" alt="">
            <span>微信登录</span>
        </li>
        <li class="list-btn button">
            <div>登录</div>
        </li>
        <li class="list-sign" @click="handleClickPush('立即注册')">
            <span>还没有账户，立即注册 ></span>
        </li>
    </ul>
</div>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            handleClickPush(e){
                if(e === "忘记密码"){
                    this.$router.push('/log/forget');
                }else if(e === "立即注册"){
                    this.$router.push('/log/sign');
                }
            }
        }
    }
</script>
<style lang="less" scoped>
@color-e:#EEEEEE;
@color-e9:#9E9E9E;
@color-8b:#8B2C18;
@font-a:.26rem;
.list{
    box-sizing: border-box;
    padding:.5rem 1rem 0;
    .list-logo{
        img{
            display:block;
            width:1.6rem;height:1.6rem;
            margin:.6rem auto;
        }
    }
    .list-item{
        padding-bottom:.32rem;
        input{
            display:block;
            width:100%;
            box-sizing: border-box;
            padding:.2rem .28rem;
            border:0;
            background-color:@color-e;
            border-radius:1rem 1rem;
        }
    }
    .list-msg{
        font-size:@font-a;
        color:@color-e9;
        span{
            float: right;
        }
    }
    .list-wx{
        display:flex;
        width:100%;
        flex-flow:column;
        justify-content: center;
        align-items:center;
        padding:1.2rem 0 1rem;
        font-size:@font-a;
        color:@color-e9;
        img{
            width:.6rem;
            padding-bottom:.06rem;
        }
    }
    .list-btn{
        color:#fff;
        font-size:@font-a;
        background-color:@color-8b;
    }
    .list-sign{
        color:@color-e9;
        font-size:@font-a;
        display:flex;
        justify-content: center;
        padding:.42rem 0;
    }
}
</style>