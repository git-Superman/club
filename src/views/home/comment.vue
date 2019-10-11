<template>
<div class="comment">
    <myNavbar test='评论'></myNavbar>
    <ul class="comment">
        <li class='comment-item' v-for="i in 3" :key="i">
            <div class='left'>
                <img src="@/assets/images/img/mian-dzface3.png" alt="">
                <div>
                    <p>Cameron AJ</p>
                    <span>哈哈哈哈哈</span>
                </div>
            </div>
            <span>刚刚</span>
        </li>
    </ul>
    <myHint></myHint>
    <myDiscuss></myDiscuss>
</div>
</template>
<script>
    import myNavbar from '../navBar'
    import myHint from '../hint'
    import myDiscuss from '../discuss'
    export default {
        components:{
            myNavbar,
            myHint,
            myDiscuss
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
.comment{
    min-height: 100vh;
    background-color:@color-e;
    .comment-item{
        box-sizing: border-box;
        padding:.32rem;
        display:flex;
        justify-content: space-between;
        align-items:center;
        border-top:1px solid @color-e;
        background-color:#fff;
        .left{
            display:flex;
            img{
                width:.8rem;
                height:.8rem;
                flex-shrink: 0;
                padding-right:.26rem;
            }
            div{
                color:@color-3;
                font-size: @font-a;
                span{
                    color:@color-6;
                    padding-top:.12rem;
                }
            }
        }
        >span{
            color:@color-9;
            font-size:@font-a;
        }
    }
}
</style>