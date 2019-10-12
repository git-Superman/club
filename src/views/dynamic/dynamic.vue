<template>
    <div class="dynamic">
        <header class="title">
            <span @click="handleClickGo">取消</span>
            <span>发布</span>
        </header>    
        <main class="uploader">
            <van-uploader v-model="fileList" multiple />
        </main>
        <div class="textarea">
            <textarea placeholder="写下你此时此刻的感想吧…"></textarea>
            <img src="@/assets/images/icon/pl-emoji.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data() {
         return {
             fileList: [
                { url: 'https://img.yzcdn.cn/vant/cat.jpeg' },
                // Uploader 根据文件后缀来判断是否为图片文件
                // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
                { url: 'https://cloud-image', isImage: true } 
            ]
         }
    },
    methods:{
        handleClickGo(){
            this.$router.go(-1);
        },
    },
    components:{
        
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
.dynamic{
    min-height:100vh;
    background-color:@color-e;
    .title{
        box-sizing: border-box;
        padding:.32rem;
        display:flex;
        justify-content: space-between;
        font-size:@font-a;
        color:@color-6;
        border-bottom:1px solid @color-e;
        background-color:#fff;
        span:last-child{
            color:@color-8;
        }
    }
    .uploader{
        box-sizing: border-box;
        padding:.12rem;
        border-bottom:1px solid @color-e;
        background-color:#ffffff;
    }
    .textarea{
        background-color:#ffffff;   
        box-sizing: border-box;
        padding:.12rem .12rem .8rem .12rem;
        position:relative;
        textarea{
            display:block;
            width:100%;
            border:0;
            min-height:3rem;
        }
        img{
            position: absolute;
            bottom:.12rem;right:.24rem;
            width:.52rem;
            height:.52rem;
        }
    }
}

</style>