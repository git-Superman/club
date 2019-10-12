<template>
    <div class="dynamic">
        <header class="title">
            <span @click="handleClickGo">取消</span>
            <p>发起活动</p>
            <span>发布</span>
        </header>
        <div class="dynamic-input">
            <span>活动标题</span>
            <input type="text" placeholder="输入本次活动的主要内容…">
        </div>
        <main class="uploader">
            <span>活动内容</span>
            <van-uploader v-model="fileList" multiple />
        </main>
        <div class="textarea">
            <textarea placeholder="请详细描述下活动内容，注意事项等…"></textarea>
        </div>
        <div class="dynamic-input">
            <span>活动城市</span>
            <input type="text" placeholder="输入本次活动的所在城市">
        </div>
        <div class="dynamic-input">
            <span>具体位置</span>
            <input type="text" placeholder="输入本次活动的具体地点">
        </div>
        <div class="dynamic-input" @click="show = true">
            <span>活动时间</span>
            <input type="text" disabled placeholder="请选择">
        </div>
        <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
            <van-datetime-picker
            v-model="currentDate"
            type="datetime"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="confirm"
            @change="getValues"
            />
        </van-popup>

        
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
            ],
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
        box-sizing: border-box;
        padding:.12rem;
        background-color:#ffffff;
        span{
            color:@color-6;
            font-size:@font-a;
            display:block;
            padding-bottom:.24rem;
        }
    }
    .textarea{
        background-color:#ffffff;   
        box-sizing: border-box;
        padding:.12rem;
        position:relative;
        border-bottom:.06rem solid @color-e;
        textarea{
            display:block;
            width:100%;
            border:0;
            min-height:1.2rem;
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