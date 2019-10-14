<template>
    <div class="myTitle">
        <header class="title">
            <span @click="handleClickGo">返回</span>
            <p>{{test}}</p>
            <span @click="handleClick">{{right}}</span>
        </header>
    </div>
</template>
<script>
    export default {
        props:{
            test : {
                type : String,
                default : 'test String'
            },
            right : {
                type : String,
                default : 'right String'
            }
        },
        methods:{
            handleClickGo(){
                this.$router.go(-1);
            },
            handleClick(){
                this.$emit('confirm')
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
.myTitle::before{
    content:'';
    display:block;
    height:1.08rem;
}
.title{
    width:100%;
    box-sizing: border-box;
    padding:.32rem;
    display:flex;
    justify-content: space-between;
    font-size:@font-a;
    color:@color-6;
    border-bottom:1px solid @color-e;
    background-color:#fff;
    align-items:center;
    position:fixed;
    top:0;
    z-index:999999;
    span:last-child{
        color:@color-8;
        min-width:.56rem;
    }
    p{
        color:@color-3;
        font-size:.32rem;
        font-weight: bold;
    }
}
</style>