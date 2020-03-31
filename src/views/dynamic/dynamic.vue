<template>
    <div class="dynamic">
        <header class="title">
            <span @click="handleClickGo">取消</span>
            <span @click="init">发布</span>
        </header>
        <div class="dynamic-input">
            <span>活动标题</span>
            <input type="text" v-model="Title" placeholder="输入本次活动的主要内容…">
        </div>
        <main class="uploader">
            <van-uploader :after-read="afterRead" v-model="fileList" multiple />
        </main>
        <div class="textarea">
            <textarea placeholder="写下你此时此刻的感想吧…" v-model="Contents"></textarea>
            <img src="@/assets/images/icon/pl-emoji.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data() {
         return {
             fileList: [],
             Title : '',
             Contents : '',
             Img : ''
         }
    },
    methods:{
        handleClickGo(){
            this.$router.go(-1);
        },
        init(){
            var Title = this.Title;
            var Contents = this.Contents;
            var Img = this.Img;
            if(!Title){
                this.$toast('请输入标题！');
                return;
            }
            var url = `/User/DynamicAdd?Title=${Title}&Contents=${Contents}&Img=${Img}`;
            this.axios.post(url).then(res=>{
                if(res.code == 0){
                    console.log(res);
                    this.$toast(res.msg);
                }else{
                    this.$toast(res.msg);
                }
            })
        },
        afterRead(file){
            var url = '/Uploads/UploadImg'
            var leng = this.fileList.length-1;
            file = file.file;
            let param = new FormData();
            param.append("file", file);
            this.axios.post(url, param ).then(res=>{
                if(res.code == 0){
                    this.Img +=(res.data.src+'|');
                }
            }).catch(res=>{
                this.$toast("发布失败，请稍后再试！");
            })
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
</style>