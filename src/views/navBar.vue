<template>
<div class="navBar">
    <div @click="handleClickPush">
        <img src="@/assets/images/icon/returnbtn.png" alt="">
        <span>{{test}}</span>
    </div>
</div>
</template>
<script>
    export default {
        props : {
            test:{
                type:String,
                default:"导航"
            }   
        },
        methods:{
            handleClickPush(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style lang="less" scoped>
.navBar{
    div{
        display:flex;
        box-sizing: border-box;
        width:100%;
        height:1rem;
        padding:0 .32rem;
        align-items:center;
        position: fixed;
        background-color:#fff;
        top:0;z-index:99;
        font-size:.32rem;
        img{
            width:.2rem;
            height:.36rem;
            padding-right:.28rem;
        }
    }
}
.navBar::after{
        content:'';
        display:block;
        padding-top:1rem;
    }
</style>