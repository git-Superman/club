<template>
<div class="info background">
    <myTitle test="账户信息" right="保存" @confirm="handleClick"/>
    <main>
        <main class="uploader">
            <span>头像</span>
            <van-uploader v-model="fileList" :max-count="1">
                <img src="@/assets/images/img/mian-face.png" alt="">
            </van-uploader>
        </main>
        <div class="dynamic-input">
            <span>昵称</span>
            <input type="text" placeholder="It’s me">
        </div>
    </main>
    <main>
        <div class="info-item" @click="handleClickPush('/my/pass')">
            <p>修改密码</p>
            <div>
                <img src="@/assets/images/icon/spxq-jrdp.png" alt="">
            </div>
        </div>
        <div class="info-item" @click="handleClickPush('/my/phone')">
            <p>手机绑定</p>
            <div>
                <span>15475875655</span>
                <img src="@/assets/images/icon/spxq-jrdp.png" alt="">
            </div>
        </div>
    </main>
</div>    
</template>
<script>
import myTitle from '../my-title'
export default {
    data() {
        return {
            fileList:[]
        }
    },
    components:{
        myTitle
    },
    methods:{
        handleClick(){
            console.log('保存');
        },
        handleClickPush(path){
            this.$router.push(path);
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
.info{
    .dynamic-input{
        box-sizing: border-box;
        padding:.24rem;
        display:flex;
        background-color:#fff;
        align-items:center;
        border-bottom:.06rem solid @color-e;
        span{
            color:@color-6;
            font-size:@font-a;
            flex-shrink: 0;
            padding:0 .8rem 0 .32rem;
        }
        input{
            display:block;
            width:100%;
            border:0;
            background-color:#fff;
        }
        ::-webkit-input-placeholder{
            font-size:@font-a;
        }
    }
    .uploader{
        box-sizing: border-box;
        padding:.24rem;
        background-color:#ffffff;
        display:flex;
        align-items: center;
        span{
            display:block;
            color:@color-6;
            font-size:@font-a;
            display:block;
            padding:0 .6rem 0 .32rem;
        }
        img{
            width:1rem;
            height:1rem;
            border-radius:50%;
        }
    }
    .info-item{
        box-sizing: border-box;
        padding:.24rem;
        font-size:@font-a;
        color:@color-3;
        display:flex;
        justify-content: space-between;
        background-color:#fff;
        border-bottom:.02rem solid @color-e;
        span{
            color:@color-9;
        }
        img{
            width:.18rem;
            padding-left:.2rem;
            flex-shrink: 0;
        }
        div{
            display:flex;
            align-items:center;
        }
    }
}
</style>