<template>
<div class='background my'>
    <header class="my-title">
        <span/>
        <span>我的</span>
        <img src="@/assets/images/icon/set.png" @click="handleClickPush" alt="设置">
    </header>
    <div class="my-height">
        <img src="@/assets/images/img/wode-face.png" alt="">
        <p>It’s me</p>
        <div>
            <img src="@/assets/images/icon/wode-phone.png" alt="">
            <span>13548787544</span>
        </div>
    </div>
    <div>
        <myList v-for="(item,index) in list" :key="index" :test="item.test" :path="item.path" class="myList" />
    </div>
    <div class="btn"><div class="button"><span>退出当前账号</span></div></div>
</div>
</template>
<script>
import myList from '@/views/my-list'
    export default {
        data() {
            return {
                list : [
                    {
                        test : '我的图文动态',
                        path : '/my/image-text'
                    },
                    {
                        test : '我的活动',
                        path : '/my/activity'
                    },
                    {
                        test : '我的收藏',
                        path : '/my/enshrine'
                    },
                    {
                        test : '我的商品',
                        path : '/my/commodity'
                    },
                ]
            }
        },
        methods:{
            handleClickPush(){
                this.$router.push('/my/info');
            }
        },
        components:{
            myList
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
.my{
    .my-title{
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        padding:.32rem;
        align-items:center;
        font-size:.32rem;
        font-weight: bold;
        background-color:#fff;
        span{
            min-width:.64rem;
        }
        img{
            width:.4rem;
        }
    }
    .my-height{
        border-style:solid;
        border-color:@color-e;
        border-width:.02rem 0 .06rem 0;
        background-color:#fff;
        box-sizing: border-box;
        padding:.42rem 0 .3rem;
        display:flex;
        flex-flow:column;
        align-items: center;
        img{
            width:1.6rem;
            border-radius:50%;
        }
        p{
            font-weight: bold;
            padding:.12rem 0;
        }
        div{
            display:flex;
            align-items:center;
            color:@color-3;
            img{
                width:.32rem;
                padding-right:.04rem;
                flex-shrink: 0;
            }
        }
    }
    .myList{
        border-bottom:1px solid @color-e;
    }
    .btn{
        margin-top:2rem;
        width:100%;
        box-sizing: border-box;
        padding:.24rem;
        .button{
            background-color:@color-8;
            color:#fff;
            border-radius:.16rem;
        }
    }
}

</style>