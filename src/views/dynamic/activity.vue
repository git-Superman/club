<template>
    <div class="dynamic">
        <header class="title">
            <span @click="handleClickGo">取消</span>
            <p>发起活动</p>
            <span @click="handleClickIssue">发布</span>
        </header>
        <div class="dynamic-input">
            <span>活动标题</span>
            <input type="text" v-model="Title" placeholder="输入本次活动的主要内容…">
        </div>
        <main class="uploader">
            <span>活动内容</span>
            <van-uploader v-model="fileList" :after-read="afterRead" multiple />
        </main>
        <div class="textarea">
            <textarea v-model="Contents" placeholder="请详细描述下活动内容，注意事项等…"></textarea>
        </div>
        <div class="dynamic-input" @click="shows = true">
            <span>活动城市</span>
            <input type="text" v-model="CityName" disabled :placeholder="CityName">
        </div>
        <div class="dynamic-input">
            <span>具体位置</span>
            <input type="text" v-model="CityArea" placeholder="请输入本次活动的具体地点">
        </div>
        <div class="dynamic-input" @click="show = true">
            <span>活动时间</span>
            <input type="text" disabled :placeholder="time">
        </div>
        
        <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
            <van-datetime-picker
            v-model="currentDate"
            type="date"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="confirm"
            @cancel="cancel"
            />
        </van-popup>

        <van-popup v-model="shows" position="bottom" :style="{ height: '50%' }">
            <van-area :area-list="areaList" @confirm="confArea" @cancel="canArea"/>
        </van-popup>

    </div>
</template>
<script>
import areaList from '@/assets/js/area'

export default {
    data() {
         return {
            fileList: [],
            confi : null,
            show : false,
            shows : false,
            minHour: 1,
            maxHour: 12,
            minDate: new Date(2019, 0, 0),
            maxDate: new Date(2060, 10, 1),
            currentDate: new Date(),
            time: '请选择',
            Title : '',
            imgs : "",
            Contents : '',
            CityName : '请选择本次活动的所在城市',
            CityArea : '',
            areaList,
            OpenTime : null
         }
    },
    created(){
        
    },
    methods:{
        confArea(val){
            var city = '';
            val.forEach(item=>{
                city +=(item.name+" ");
            })
            this.CityName = city;
            this.shows = false;
        },
        canArea(){
            this.CityName = '请选择本次活动的所在城市';
            this.shows = false;
        },
        handleClickIssue(){
            var Title = this.Title;
            var Contents = this.Contents;
            var CityName = this.CityName;
            var CityArea = this.CityArea;
            var OpenTime = this.time;
            if(!Title){
                this.$toast('请输入标题！');
                return;
            }else if(CityName == '请选择本次活动的所在城市'){
                this.$toast('请选择活动地址！');
                return;
            }else if(!CityArea){
                this.$toast('请输入详细地址！');
                return;
            }else if(OpenTime == "请选择"){
                this.$toast('请选则活动时间！');
                return;
            }

            var url = `/User/EventAdd?Title=${Title}&Contents=${Contents}&CityName=${CityName}&OpenTime=${OpenTime}`;
            this.axios.post(url).then(res=>{
                if(res.code == 0){
                    console.log(res);
                    this.$toast(res.msg);
                }else{
                    this.$toast(res.msg);
                }
            })
        },
        handleClickGo(){
            this.$router.go(-1);
        },
        afterRead(){
            var url = '/Uploads/UploadImg';
            var leng = this.fileList.length-1;
            var file = this.fileList[leng].file;
            let param = new FormData();
            param.append("file", file);
            this.axios.post(url, param ).then(res=>{
                if(res.code == 0){
                    this.imgs +=(res.data.src+'|');
                }
            })
        },
        confirm(val){
            this.OpenTime = val;
            console.log(this.OpenTime);
            var time = `${val.getFullYear()}-${val.getMonth()}-${val.getDate()}`
            this.time = time;
            this.show = false;
        },
        cancel(val){
            this.time = '请选择';
            this.show = false;
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