<template>
<div class="info background">
    <myTitle test="账户信息" right="保存" @confirm="handleClick"/>
    <main>
        <main class="uploader">
            <span>头像</span>
            <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1">
                <div class="headPic">
                    <img v-if="userInfo.HeadPic" :src="userInfo.HeadPic?userInfo.HeadPic:'#'" alt="">
                </div>
            </van-uploader>
        </main>
        <div class="dynamic-input">
            <span>昵称</span>
            <input ref="input" type="text" v-model="userInfo.UserName" placeholder="It’s me">
        </div>
    </main>
    <main>
        <div class="info-item" @click="handleClickPush('/my/pass')">
            <p>修改密码</p>
            <div>
                <img src="@/assets/images/icon/spxq-jrdp.png" alt="">
            </div>
        </div>
        <div class="info-item" @click="handleClickPush('/my/phone')">
            <p>手机绑定</p>
            <div>
                <span>{{mobile}}</span>
                <img src="@/assets/images/icon/spxq-jrdp.png" alt="">
            </div>
        </div>
    </main>
</div>    
</template>
<script>
import { userNameEdit,uploadUserHeadPic } from '~api'
import myTitle from '../my-title'
export default {
    data() {
        return {
            fileList:[],
            userInfo : {},
            UserName:'',
            HeadPic : '',
            mobile : ''
        }
    },
    components:{
        myTitle
    },
    created(){
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.init();
        this.initLoad();

    },
    methods:{
        afterRead(file){
            var that = this;
            var url = '/Uploads/UploadImg';
            var leng = this.fileList.length-1;
            file = file.file;
            var param = new FormData();
            param.append("file", file);
            uploadUserHeadPic(param).then(res=>{
                // console.log(res,123);
                if(res.code === 0){
                    // 长传文件成功
                    that.$toast(res.msg);
                }else{
                    that.$toast(res.msg);
                }
            });
        },
        handleClick(){
            var that = this, UserName = that.UserName, HeadPic = that.HeadPic;

            userNameEdit({UserName:that.userInfo.UserName}).then(res=>{
                res = res.data;
                console.log(res);
            });
        },
        init(){
            var url =  `/User/GetMySelfInfo`;
            // this.axios.post(url).then(res=>{
            //     console.log(res);
            //     if(res.code == 0){
            //         this.UserName = res.data.userName;
            //     }
            // })
        },
        initLoad(){
            // this.axios.post('/User/GetMySelfInfo').then(res=>{
            //         var data = res.data;
            //         if(res.code == 0){
            //             this.mobile = data.mobile;
            //         }
            //     })
        },
        handleClickPush(path){
            this.$router.push(path);
        }
    }
}
</script>
<style scoped lang="less">
@color-e:#EEEEEE;
@color-9:#9E9E9E;
@color-8:#8B2C18;
@color-6:#666666;
@color-3:#333333;
@font-a:.28rem;
.info{
    .dynamic-input{
        box-sizing: border-box;
        padding:.24rem;
        display:flex;
        background-color:#fff;
        align-items:center;
        border-bottom:.06rem solid @color-e;
        span{
            color:@color-6;
            font-size:@font-a;
            flex-shrink: 0;
            padding:0 .8rem 0 .32rem;
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
        padding:.24rem;
        background-color:#ffffff;
        display:flex;
        align-items: center;
        .headPic{
            width:1rem;
            height:1rem;
            border-radius:50%;
            overflow: hidden;
            border:2px solid #ededed;
            box-shadow: 0 0 2px #ededed;
            img{
                width:100%;
                height:100%;
            }
        }
        span{
            display:block;
            color:@color-6;
            font-size:@font-a;
            display:block;
            padding:0 .6rem 0 .32rem;
        }
    }
    .info-item{
        box-sizing: border-box;
        padding:.24rem;
        font-size:@font-a;
        color:@color-3;
        display:flex;
        justify-content: space-between;
        background-color:#fff;
        border-bottom:.02rem solid @color-e;
        span{
            color:@color-9;
        }
        img{
            width:.18rem;
            padding-left:.2rem;
            flex-shrink: 0;
        }
        div{
            display:flex;
            align-items:center;
        }
    }
}
</style>