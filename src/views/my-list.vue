<template>
<div class="my-list" @click="handleClickPush(path)">
    <p>{{test}}</p>
    <img src="@/assets/images/icon/spxq-jrdp.png" alt="">
</div>
</template>
<script>
export default {
    props:{
        test : {
            type:String,
            default:'test String'
        },
        path : {
            type : String,
            default : '/webpage/my'
        }
    },
    methods:{
        handleClickPush(path){
            this.$router.push(path);
        }
    }
}
</script>
<style lang="less" scoped>
.my-list{
    display:flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding:.24rem;
    background-color:#fff;
    align-items:center;
    img{
        width:.16rem;
        height:.28rem;
        flex-shrink: 0;
    }
    p{
        display:flex;
        align-items:center;
    }
    p::before{
        content:'';
        display:block;
        height:.32rem;
        width:.06rem;
        background-color:#373737;
        border-radius:.2rem .2rem;
        margin-right:.2rem;
    }
}
</style>