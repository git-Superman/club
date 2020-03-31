<template>
    <ul class="forget">
        <li class="forget-head">
            <span @click="handleClickGo">取消</span>
            <p>{{title}}</p>
            <router-link :to="subTitle === '去登录' ? '/log/login' : ''">{{subTitle}}</router-link>
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
                Mobile : ''
        }
        },
        created(){
            console.log(this.forItem);
        },
        methods:{
            handleClickGo(){
                this.$router.go(-1);
            },
            reload(){
                this.axios.POST('/User/Reg',{
                    Account : this.Account,
                    Pwd : this.Pwd,
                    UserName : this.UserName,
                    Mobile : this.Mobile
                })
            }
        },
        props:{
            forItem:{
                type:Array,
                default:()=>{
                    return [
                        {
                            x:'昵称',
                            y:'输入您的名字',
                            value : ''
                        },
                        {
                            x:'手机号码',
                            y:'输入您的手机号码',
                            value : ''
                        },
                        {
                            x:'验证码',
                            y:'输入您手机收到的验证短信码',
                            z:'发送验证码',
                            value : ''
                        },
                        {
                            x:'登录密码',
                            y:'设定您登录的密码',
                            value : ''
                        }
                    ]
                }
            },
            title:{
                type:String,
                default:'注册账号'
            },
            subTitle:{
                type:String,
                default:'注册'
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