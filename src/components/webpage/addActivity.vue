<template>
<div>
    <header class="my-title">
        <span/>
        <span>发布</span>
        <span/>
    </header>
    <div class="my-height">
        <myList v-for="(item,index) in list" :key="index" :test="item.test" :path="item.path" class="myList" />
    </div>
</div>
</template>
<script>
import myList from '@/views/my-list'

export default {
    data(){
        return {
            list:[
                {
                    test : '发图文动态',
                    path : '/dynamic'
                },
                {
                    test : '发起活动',
                    path : '/dynamic/activity'
                }
            ]
        }
    },
    components:{
        myList
    }
}
</script>

<style lang="less" scoped>
    .my-title{
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        height:1rem;width:100%;
        position:fixed;
        top:0;
        align-items:center;
        font-size:.32rem;
        font-weight: bold;
        background-color:#fff;
        span{
            min-width:.64rem;
        }
        img{
            width:.4rem;
            padding-right:.12rem;
        }
    }
    .my-height{
        margin-top:1rem;
        background-color:#eeeeee;
        .my-list{
            border-top:1px solid #EEEEEE;
            border-bottom:1px solid #EEEEEE;
        }
    }
</style>