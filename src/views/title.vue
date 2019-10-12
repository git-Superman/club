<template>
<div>
    <div class="Tit">
        <span class="first" @click="handleClickGo">{{left}}</span>
        <p>{{center}}</p>
        <img class="last" :src="right"/>
    </div>
    <div style="padding-top:1rem" />
</div>
</template>
<script>
    export default {
        props:['left','center','right'],
        methods:{
            handleClickGo(){
                if(this.left){
                    this.$router.go(-1);
                }
            }
        }
    }
</script>
<style lang="less" scoped>
.Tit{
    box-sizing: border-box;
    padding:0 .32rem;
    height:1rem;
    display:flex;
    width:100%;
    justify-content: space-between;
    align-items:center;
    background-color:#fff;
    font-size:.28rem;
    color:#666666;
    position:fixed;
    top:0;
    z-index:99;
    p{
        color:#333333;
        font-size:.32rem;
        font-weight: bold;
    }
    .first{
        min-width:1rem;
    }
    .last{
        color:#8B2C18;
        height:.32rem;
    }
}
</style>