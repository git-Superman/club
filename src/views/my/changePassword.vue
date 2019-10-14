<template>
<div class="info background">
    <myTitle test="修改密码" right="确定" @confirm="handleClick"/>
    <main>
        <div class="dynamic-input">
            <span>旧密码</span>
            <input type="text" placeholder="输入您过去登录的密码">
        </div>
        <div class="dynamic-input">
            <span>新密码</span>
            <input type="text" placeholder="输入您设定的新密码">
        </div>
        <div class="dynamic-input">
            <span>确认密码</span>
            <input type="text" placeholder="再次输入密码以确认无误">
        </div>
    </main>
</div>    
</template>
<script>
import myTitle from '../my-title'
export default {
    data() {
        return {
        }
    },
    components:{
        myTitle
    },
    methods:{
        handleClick(){
            console.log('保存');
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
.dynamic-input{
    box-sizing: border-box;
    padding:.24rem;
    display:flex;
    background-color:#fff;
    align-items:center;
    span{
        color:@color-6;
        font-size:@font-a;
        flex-shrink: 0;
        min-width:1.16rem;
        padding-right:.2rem;
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
</style>