<template>
<div class="give">
    <myNavbar test='点赞用户'></myNavbar>
    <ul class="give">
        <li class='give-item' v-for="(item,i) in list" :key="i">
            <div class='left'>
                <img :src="item.UserHeadPic" alt="">
                <div>
                    <p>{{item.UserName}}</p>
                    <span>{{item.Contents}}</span>
                </div>
            </div>
            <span>{{item.AddTime}}</span>
        </li>
    </ul>
    <myHint></myHint>
</div>
</template>
<script>
    import myNavbar from '../navBar'
    import myHint from '../hint'
    export default {
        data(){
            return {
                pg:1,
                list : []
            }
        },
        components:{
            myNavbar,
            myHint
        },
        created(){
            var id = this.$route.params.id;
            this.init(id)
        },
        methods:{
            init(id){
                var pg = this.pg;
                var url = `/User/GetUserDynamicZanList?articleID=${id}&pg=${pg}&size=10`;
                this.axios.post(url).then(res=>{
                    if(res.code == 0){
                        this.list = res.data;
                        console.log(this.list);
                    }
                })
            }
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
.give{
    min-height: 100vh;
    background-color:@color-e;
    .give-item{
        box-sizing: border-box;
        padding:.32rem;
        display:flex;
        justify-content: space-between;
        align-items:center;
        border-top:1px solid @color-e;
        background-color:#fff;
        .left{
            display:flex;
            img{
                width:.8rem;
                height:.8rem;
                flex-shrink: 0;
                padding-right:.26rem;
            }
            div{
                color:@color-3;
                font-size: @font-a;
                span{
                    color:@color-6;
                    padding-top:.12rem;
                }
            }
        }
        >span{
            color:@color-9;
            font-size:@font-a;
        }
    }
}
</style>