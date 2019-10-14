<template>
<div class="info background">
    <myTitle test="手机绑定" right="确定" @confirm="handleClick"/>
    <main>
        <div class="dynamic-input">
            <span>绑定手机号</span>
            <input type="text" value="15698784578" placeholder="请输入您的手机号">
        </div>
        <div class="dynamic-input">
            <span>验证码</span>
            <input type="text" maxlength="12" placeholder="请输入短信验证码">
            <i>发送验证码</i>
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
    position:relative;
    span{
        color:@color-6;
        font-size:@font-a;
        flex-shrink: 0;
        min-width:1.44rem;
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
    i{
        position:absolute;
        font-size:.24rem;
        flex-shrink: 0;
        right:.24rem;
        background-color:#fff;
        padding:.04rem .12rem;
        border:1px solid @color-8;
        color:@color-8;
        border-radius:.15rem;
    }
}
</style>