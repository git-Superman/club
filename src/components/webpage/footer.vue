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
            <img @click="handleClickPush(5)" src="@/assets/images/icon/add-ftw.png" alt="">
            <img @click="handleClickPush(6)" src="@/assets/images/icon/add-fhd.png" alt="">
        </div>
    </div>
</div>
</template>
<script>
    import icon1 from '@/assets/images/icon/main-zy-xz.png'
    import icon3 from '@/assets/images/icon/add-click.png'
    export default {
        data(){
            return {
                show : false,
                inx : 0,
                icon : [
                    {
                        istrue : icon1,
                        isfalse :icon1
                    },
                    {
                        istrue : icon1,
                        isfalse :icon1
                    },
                    {
                        istrue : icon3,
                        isfalse :icon3
                    },
                    {
                        istrue : icon1,
                        isfalse :icon1
                    },
                    {
                        istrue : icon1,
                        isfalse :icon1
                    }
                ]
            }
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
        img{
            width:2.6rem;
        }
    }
}
</style>