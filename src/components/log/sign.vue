<template>
    <ul class="forget">
        <li class="forget-head">
            <span @click="handleClickGo">取消</span>
            <p>注册账号</p>
            <i @click="reload">注册</i>
        </li>
        <li class="forget-item" v-for="(item,i) in forItem" :key="i">
            <span>{{item.x}}</span>
            <input type="text" :placeholder="item.y" v-model="item.value">
            <p v-if="item.z">{{item.z}}</p>
        </li>
    </ul>
</template>
<script>
    export default {
        data(){
            return {
                Account:'',
                Pwd : '',
                UserName : '',
                Mobile : '',
                forItem:[
                        {
                            x:'账户',
                            y:'输入您的名字',
                            value : ''
                        },
                        {
                            x:'密码',
                            y:'输入您的手机号码',
                            value : ''
                        },
                        {
                            x:'真实姓名',
                            y:'输入您的真实姓名',
                            z:'发送验证码',
                            value : ''
                        },
                        {
                            x:'手机号码',
                            y:'设定您登录的密码',
                            value : ''
                        }
                    ]
        }
        },
        created(){

        },
        methods:{
            handleClickGo(){
                this.$router.go(-1);
            },
            reload(){
                var that = this;
                sessionStorage.setItem('token',"123");
                var forItem = that.forItem;

                var Account = forItem[0].value;
                var Pwd = forItem[1].value;
                var UserName = forItem[2].value;
                var Mobile = forItem[3].value;
                var url = `/User/Reg?Account=${Account}&Pwd=${Pwd}&UserName=${UserName}&Mobile=${Mobile}`;
                if(!Account){
                    that.$toast('请输入您的账户')
                }else if(!Pwd) {
                    that.$toast('请输入您的密码')
                }else if(!UserName){
                    that.$toast('请输入您的昵称')
                }else{
                    that.axios.post(url).then(res=>{
                        console.log(res);
                        if(res.code === 0){
                            that.$toast(res.msg);
                            that.forItem.forEach(item=>{
                                item.value = "";
                            });

                            sessionStorage.removeItem("token");

                            setTimeout(()=>{
                                that.$router.push("/log/login");
                            },1000);
                        }else{
                            that.$toast(res.msg);
                            that.forItem.forEach(item=>{
                                item.value = "";
                            })
                        }
                    })
                }

            }
        }
    }
</script>
<style lang="less" scoped>
@color-e:#EEEEEE;
@color-e9:#9E9E9E;
@color-8:#8B2C18;
@color-6:#666666;
@color-3:#333333;
@font-a:.28rem;
.forget{
    background-color:#fff;
    span{
        color:@color-6; 
        font-size:@font-a;
    }
    .forget-head{
        display:flex;
        justify-content: space-between;
        align-items:center;
        box-sizing: border-box;
        padding:.32rem .24rem;
        border-bottom:1px solid @color-e;
        p{
            font-weight: bold;
            color:@color-3;
        }
        a{
            font-size:@font-a;
            color:@color-8;
        }
    }
    .forget-item{
        box-sizing: border-box;
        padding:.32rem .24rem;
        display:flex;
        align-items:center;
        span{
            flex-shrink: 0;
            padding-right:.24rem;
            min-width:1.12rem;
        }
        input{
            display:block;
            width:100%;
            border:0;
        }
        ::-webkit-input-placeholder{
            font-size:.28rem;
        }
        ::-moz-input-placeholder{
            font-size:.28rem;
        }
        ::-o-input-placeholder{
            font-size:.28rem;
        }
        ::-ms-input-placeholder{
            font-size:.28rem;
        }
        p{
            flex-shrink: 0;
            padding:.06rem .16rem;
            border:1px solid @color-8;
            border-radius:1rem 1rem;
            font-size:.24rem;
            color:@color-8;
        }
    }
}
</style>