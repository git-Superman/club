<template>
    <div class="dynamic">
        <header class="title">
            <span @click="handleClickGo">取消</span>
            <p>申请柜台</p>
            <span @click="handleClick">申请</span>
        </header>
        <div class="dynamic-input">
            <span>柜台名称</span>
            <input type="text" placeholder="输入您柜台的名称">
        </div>
        <main class="uploader">
            <span>logo</span>
            <van-uploader v-model="fileList" multiple />
        </main>
        <div class="dynamic-input">
            <span>申请人</span>
            <input type="text" placeholder="输入柜台申请人的姓名">
        </div>
        <div class="dynamic-input">
            <span>联系方式</span>
            <input type="text" placeholder="输入柜台申请人的联系方式">
        </div>
        <div class="dynamic-sfz">
            <span>上传身份证图片</span>
            <p>请分别上传身份证正面和反面的照片</p>
            <div>
                <van-uploader v-model="fileList1" multiple />
                <van-uploader v-model="fileList2" multiple />
            </div>
        </div>
        <div class="button" @click="handles"><span>发布商品页面</span></div>
    </div>
</template>
<script>
export default {
    data() {
         return {
             fileList: [
                // { url: 'https://img.yzcdn.cn/vant/cat.jpeg' },
                // Uploader 根据文件后缀来判断是否为图片文件
                // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
            ],
            fileList1:[],
            fileList2:[],
            confi : null,
            show : false,
            minHour: 1,
            maxHour: 12,
            minDate: new Date(2019, 10, 1),
            maxDate: new Date(2060, 10, 1),
            currentDate: new Date()
         }
    },
    methods:{
        handleClickGo(){
            this.$router.go(-1);
        },
        confirm(e){
            console.log(e);
        },
        getValues(val){
            console.log(val);
            console.log(this.confi);
        },
        handleClick(){
            this.$toast('已发布申请，请等待审核...')
        },
        handles(){
            this.$router.push('/store/issue');
        }
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
        align-items:center;
        span:last-child{
            color:@color-8;
        }
        p{
            color:@color-3;
            font-size:.32rem;
            font-weight: bold;
        }
    }
    .dynamic-input{
        box-sizing: border-box;
        padding:.24rem .12rem;
        display:flex;
        background-color:#fff;
        align-items:center;
        span{
            color:@color-6;
            font-size:@font-a;
            flex-shrink: 0;
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
    }
    .uploader{
        display:flex;
        align-items:center;
        box-sizing: border-box;
        padding:.12rem;
        background-color:#ffffff;
        span{
            color:@color-6;
            font-size:@font-a;
            display:block;
            padding-bottom:.24rem;
            min-width:1.32rem;
        }
    }
    .dynamic-sfz{
        box-sizing: border-box;
        padding:.24rem .12rem;
        background-color:#fff;
        font-size:@font-a;
        color:@color-6;
        p{
            color:@color-3;
            padding:.16rem 0;
        }
        .van-uploader{
            display:block;
        }
    }
}

</style>