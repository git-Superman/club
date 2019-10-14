<template>
<div class="ftp">
    <div class="footer">
        <div class="footer-item" v-for="(item,index) in icon" :key="index" @click="handleClickPush(index)">
            <img :src="index == inx? item.istrue : item.isfalse" :class="inx==2?'action':''" alt="">
        </div>
    </div>
    <div class="footer-serve" v-show="show">
        <van-overlay :show="show" @click="show = false" />
        <div class="serve">
            <div>
                <img @click="handleClickPush(5)" src="@/assets/images/icon/add-ftw.png" alt="">
                <p>发图文动态</p>
            </div>
            <div>
                <img @click="handleClickPush(6)" src="@/assets/images/icon/add-fhd.png" alt="">
                <p>发起活动</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    import icon1 from '@/assets/images/icon/main-zy-xz.png'
    import icon2 from '@/assets/images/icon/hd-yx.png'
    import icon3 from '@/assets/images/icon/add-click.png'
    import icon4 from '@/assets/images/icon/sc-yx.png'
    import icon5 from '@/assets/images/icon/wd-yx.png'
    import icon6 from '@/assets/images/icon/main-wx.png'
    import icon7 from '@/assets/images/icon/hd-wx.png'
    import icon8 from '@/assets/images/icon/add-click.png'
    import icon9 from '@/assets/images/icon/sc-wx.png'
    import icon10 from '@/assets/images/icon/wd-wx.png'

    export default {
        data(){
            return {
                show : false,
                inx : 0,
                icon : [
                    {
                        istrue : icon1,
                        isfalse :icon6
                    },
                    {
                        istrue : icon2,
                        isfalse :icon7
                    },
                    {
                        istrue : icon3,
                        isfalse :icon8
                    },
                    {
                        istrue : icon4,
                        isfalse :icon9
                    },
                    {
                        istrue : icon5,
                        isfalse :icon10
                    }
                ]
            }
        },
        mounted(){
            this.init();
        },
        methods:{
            handleClickPush(i){
                this.inx = i;
                switch(i){
                    case 0 :
                        this.$router.push('/webpage');
                    break;
                    case 1 :
                        this.$router.push('/webpage/activity');
                    break;
                    case 2 :
                        this.show = true;
                    break;
                    case 3 :
                        this.$router.push('/webpage/store');
                    break;
                    case 4 :
                        this.$router.push('/webpage/my');
                    break;
                    case 5 :
                        this.$router.push('/dynamic');
                    break;
                    case 6 :
                        this.$router.push('/dynamic/activity');
                    break;
                }
            },
            init(){
                name = this.$route.name;
                if(name === 'home'){
                    this.inx = 0;
                }else if(name === 'activity'){
                    this.inx = 1;
                }else if(name === "store"){
                    this.inx = 3;
                }else if(name === 'my'){
                    this.inx = 4;
                }
            }
        }
    }
</script>
<style lang="less" scoped>
.ftp{
    position:relative;
}
.footer{
    position:fixed;
    display:flex;
    justify-content: space-evenly;
    width:100%;
    bottom:-1px;
    background-color:#fff;
    img{
        width:.8rem;
        padding:.26rem 0;
        position:relative;
    }
    img.action{
        z-index:99999;
        background-color:#fff;
    }
}
.footer-serve{
    position: fixed;
    bottom:2rem;
    width:100%;
    .serve{
        position:relative;
        z-index:999;
        width:100%;
        display:flex;
        justify-content: space-evenly;
        align-items:center;
        color:#fff;
        font-weight: bold;
        font-size:.28rem;
        box-sizing: border-box;
        padding:0 .52rem;
        div{
            width:50%;
            display:flex;
            flex-flow:column;
            align-items:center;
            justify-content: center;
            img{
                width:1.8rem;
                padding-bottom:.12rem;
            }
        }
        
    }
}
</style>