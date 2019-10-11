<template>
    <div class="discuss">
        <input type="text" placeholder="发表您的评论…">
        <img src="@/assets/images/icon/pl-emoji.png" alt="">
        <img src="@/assets/images/icon/pl-send.png" alt="">
    </div>
</template>
<style lang="less" scoped>
.discuss{
    box-sizing: border-box;
    height:1rem;
    padding:0 .32rem;
    display:flex;
    position:fixed;
    bottom:0;
    align-items:center;
    width:100%;
    background-color:#fff;
    justify-content: space-between;
    font-size:.28rem;
    input{
        display: block;
        width:60%;
        border-radius:1rem 1rem;
        padding:.12rem .26rem;
        border:1px solid #D7D7D7;
    }
    img{
        width:.6rem;
    }
}
</style>