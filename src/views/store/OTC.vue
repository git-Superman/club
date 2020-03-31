<template>
    <div class="dynamic">
        <header class="title">
            <span @click="handleClickGo">取消</span>
            <p>申请柜台</p>
            <span @click="handleClick">申请</span>
        </header>
        <div class="dynamic-input">
            <span>柜台名称</span>
            <input type="text" v-model="ShopName" placeholder="输入您柜台的名称">
        </div>
        <main class="uploader">
            <span>logo</span>
            <van-uploader v-model="fileList" :after-read="afterRead1" :max-count="1" multiple />
        </main>
        <div class="dynamic-input">
            <span>申请人</span>
            <input type="text" v-model="PersonName" placeholder="输入柜台申请人的姓名">
        </div>
        <div class="dynamic-input">
            <span>联系方式</span>
            <input type="text" v-model="PersonTel" placeholder="输入柜台申请人的联系方式">
        </div>
        <div class="dynamic-sfz">
            <span>上传身份证图片</span>
            <p>请分别上传身份证正面和反面的照片</p>
            <div>
                <van-uploader v-model="fileList1" :after-read="afterRead2" :max-count="1" multiple />
                <van-uploader v-model="fileList2" :after-read="afterRead3" :max-count="1" multiple />
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
            ],
            fileList1:[],
            fileList2:[],
            confi : null,
            show : false,
            minHour: 1,
            maxHour: 12,
            minDate: new Date(2019, 10, 1),
            maxDate: new Date(2060, 10, 1),
            currentDate: new Date(),
            ShopName : '',
            Logo : '',
            PersonName : '',
            PersonTel : '',
            PersonIDCard1 : '',
            PersonIDCard2 : ''
         }
    },
    methods:{
        afterRead1(file){
            file = file.file;
            var url = '/Uploads/UploadImg';
            var param = new FormData();
            param.append("file", file);
            this.axios.post(url, param ).then(res=>{
                if(res.code == 0){
                    this.Logo = res.data.src;
                    this.$toast("上传成功！");
                }else{
                    this.$toast("上传失败！");
                }
            })

        },
        afterRead2(file){
            file = file.file;
            var url = '/Uploads/UploadImg';
            var param = new FormData();
            param.append("file", file);
            this.axios.post(url, param ).then(res=>{
                if(res.code == 0){
                    this.PersonIDCard1 = res.data.src;
                    this.$toast("上传成功！");
                }else{
                    this.$toast("上传失败！");
                }
            })

        },
        afterRead3(file){
            file = file.file;
            var url = '/Uploads/UploadImg';
            var param = new FormData();
            param.append("file", file);
            this.axios.post(url, param ).then(res=>{
                if(res.code == 0){
                    this.PersonIDCard2 = res.data.src;
                    this.$toast("上传成功！");
                }else{
                    this.$toast("上传失败！");
                }
            })

        },
        handleClickGo(){
            this.$router.go(-1);
        },
        confirm(file){
            console.log(file);
        },
        getValues(val){
            console.log(val);
            console.log(this.confi);
        },
        handleClick(){
            var ShopName = this.ShopName;
            var Logo = this.Logo;
            var PersonName = this.PersonName;
            var PersonTel = this.PersonTel;
            var PersonIDCard1 = this.PersonIDCard1;
            var PersonIDCard2 = this.PersonIDCard2;
            if(!ShopName){
                this.$toast('柜台名称不能为空！')
                return;
            }else if(!Logo){
                this.$toast('请上传Logo！')
                return;
            }else if(!PersonName){
                this.$toast('请填写申请人！')
                return;
            }else if(!PersonTel){
                this.$toast('请填写您的联系电话！')
                return;
            }else if(!PersonIDCard1){
                this.$toast('请上传您的居民身份证(正)！')
                return;
            }else if(!PersonIDCard2){
                this.$toast('请上传您的居民身份证(反)！')
            }

            var url = `/Shop/ShopAdd?ShopName=${ShopName}&Logo=${Logo}&PersonName=${PersonName}&PersonTel=${PersonTel}&PersonIDCard1=${PersonIDCard1}&PersonIDCard2=${PersonIDCard2}`
            this.axios.post(url).then(res=>{
                if(res.code == 0){
                    this.$toast('已发布申请，请等待审核...');
                }else{
                    this.$toast('发布失败，请稍后再试...');
                }
            })

        },
        handles(){
            this.$router.push('/store/issue');
        },
        init(){

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
            min-width:1.12rem;
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
    }
}

</style>