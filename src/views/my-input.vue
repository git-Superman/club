<template>
    <div class="addInput">
        <div class="my-input">
            <input type="text" :placeholder="test">
            <img src="@/assets/images/icon/hd-searchbtn.png" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            test:{
                type:String,
                default:'test String'
            }
        }
    }
</script>
<style lang="less" scoped>
.addInput{
    background-color:#fff;
    box-sizing: border-box;
    padding:.08rem .8rem;
    .my-input{
        height:.6rem;width:100%;
        background-color:#EFEFEF;
        border-radius:1rem 1rem;
        position:relative;
        font-size:.28rem;
        display:flex;
        align-items:center;
        box-sizing: border-box;
        padding:0 .24rem;
        input{
            display:block;
            border:0;width:80%;
            background-color:transparent;
        }
        img{
            position:absolute;
            right:0.24rem;
            width:.52rem;
            height:.52rem;
            background-color:#EFEFEF;
            z-index:9;
        }
    }
}
</style>