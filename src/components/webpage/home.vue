<template>
<div class="home">
    <div class="home-head">
        <img src="@/assets/images/icon/mian-logo.png" alt="">
    </div>
    <div class="mainStroll" ref="main">
        <ul class="list" v-for="(item,i) in list" :key="i">
            <li class="list-head">
                <div class="img" v-if="item.headPic">
                    <img v-if="item.headPic" :src="imgURL + item.headPic" alt="">
                </div>
                <div class="test">
                    <p>{{item.UserName}}</p>
                    <span>{{item.addDate ?item.addDate.split('T')[0]:''}}</span>
                </div>
            </li>
            <li class="list-ban" @click="handleDblclick(item.id,item.contents)">
                <van-swipe indicator-color="white">
                    <van-swipe-item v-for="(it,inx) in item.imgList" v-if="it" :key="inx">
                        <img :src="imgURL + it" alt="">
                    </van-swipe-item>
                </van-swipe>
            </li>
            <li>
                <ul class="list-content">
                    <li class="list-title">
                        <div class="left">
                            <img @click="handleClickZan(item.id)" src="@/assets/images/icon/mian-dz.png" alt="">
                            <!-- <img @click="handleClickPush('评论')" src="@/assets/images/icon/mian-ly.png" alt=""> -->
                            <img @click="show = true" src="@/assets/images/icon/mian-zf.png" alt="">
                        </div>
                        <div class="right">
                            <!-- <img src="@/assets/images/img/mian-dzface1.png" alt="">
                            <img src="@/assets/images/img/mian-dzface1.png" alt="">
                            <img src="@/assets/images/img/mian-dzface1.png" alt=""> -->
                            <p>等{{item.zan}}人觉得赞</p>
                        </div>
                    </li>
                    <li>{{item.contents}}</li>
                    <!-- <li class="nbsp">
                        <span>共 5 条回复</span>
                    </li>
                    <li class="nbsp">
                        <p>Cameron AJ&nbsp;&nbsp;<span>回复&nbsp;吃可爱长大</span>&nbsp;哈哈哈</p>
                    </li>
                    <li class="nbsp">
                        <p>吃可爱长大&nbsp;<span>是你说的地方吗？</span></p>
                    </li> -->
                </ul>
            </li>
        </ul>
    </div>
    <div class="alert" v-if="show">
        <van-overlay :show="show" @click="show = false" />
        <div class="share">
            <div class="head">
                <p></p>
                <p>分享到</p>
                <img  @click="show = false" src="@/assets/images/icon/share-close.png" alt="">
            </div>
            <div class="share-item">
                <img src="@/assets/images/icon/share-wx.png" alt="">
                <img src="@/assets/images/icon/share-pyq.png" alt="">
                <img src="@/assets/images/icon/share-qq.png" alt="">
                <img src="@/assets/images/icon/share-wb.png" alt="">
            </div>
        </div>
    </div>
</div>
</template>
<script>
    import { imgURL } from '~api/config'

    export default {
        data(){
            return {
                show : false,
                list : [],
                isScrollTop : false,
                imgURL,
                pg:1,
                size:10
            }
        },
        created(){
            this.reload(1,10)

        },
        mounted(){
            // 滚动事件
            this.$refs.main.addEventListener('scroll',this.onRefresh);
        },
        methods:{
            // 双击点赞
            handleDblclick(e,s){
                // console.log('双击',e,s);
            },
            handleClickZan(id){
                this.$router.push('/home/give/'+id);
            },
            reload(pg,size){
                var that= this;
                var url = `/User/GetUserDynamicList?pg=${pg}&size=${size}`;
                this.axios.post(url).then(res=>{

                    var data = res.data;
                    // console.log(data);
                    if(res.code == 0){
                        that.isScrollTop = true;
                        data.forEach(item => {
                            console.log(item);
                            if(item.img){
                                var imgs = item.img.slice(0,-1);
                                item.imgList = imgs.split("|");
                            }else{
                                item.imgList = []
                            }
                        });
                        this.list = this.list.concat(data);

                    }

                }).catch(res=>{
                    console.log(res);
                })
            },
            onRefresh(){
                var main = this.$refs.main;
                var scrollTop = main.scrollTop , mainHeight = main.offsetHeight , scrollHeight= main.scrollHeight;

                if((scrollTop + mainHeight + 60) >= scrollHeight){
                    if(this.isScrollTop){
                        this.isScrollTop = false;
                        var pg = this.pg;
                        pg++;
                        this.pg = pg;
                        this.reload(this.pg,10);
                    }
                }
                
            },
        }
    }
</script>
<style lang="less" rel="stylesheet/less">
@color-e:#EEEEEE;
@color-9:#9E9E9E;
@color-8:#8B2C18;
@color-6:#666666;
@color-3:#333333;
@font-a:.28rem;
.home{
    padding-top:1rem;
    .home-head{
        position:fixed;
        width:100%;
        background-color:#fff;
        z-index:1;
        top:0;
        display:flex;
        justify-content: center;
        height:1rem;
        align-items:center;
        border-bottom:1px solid @color-e;
        img{
            height:.48rem;
        }
    }
}
.list{
    .list-head{
        box-sizing: border-box;
        padding:.32rem;
        display:flex;
        .img{
            width:1rem;
            height:1rem;
            border-radius:50%;
            padding-right:.2rem;
            img{
                width:100%;
                height:100%;
            }
        }
        .test{
            font-family: Lucida,Tahoma,Verdana;
            span{
                padding-top:.2rem;
                color:@color-6;
                font-size:@font-a;
            }
        }
    }
    .list-ban{
        img{
            width:100%;
            height:4.2rem;
        }
    }
}
.list + .list{
    border-top:.06rem solid @color-e;
}
.list-content{
    box-sizing: border-box;
    padding:0 .32rem .24rem;
    font-size:@font-a;
    span{
        color:@color-6;
    }
    .list-title{
        display:flex;
        align-items:center;
        justify-content: space-between;
        box-sizing: border-box;
        padding:.12rem 0;
        .left{
            display:flex;
            img{
                width:.52rem;
                height:.52rem;
                border-radius:50%;
                margin-right:.16rem;
            }
        }
        .right{
            display:flex;
            align-items:center;
            img{
                width:.4rem;
                height:.4rem;
                border-radius:50%;
            }
            p{
                margin-left:.12rem;
            }
        }
    }
    .nbsp{
        margin-top:.04rem;
    }
}
// .alert{
//     animation: baseBottom .2s;
// }
.share{
    position:fixed;
    bottom:0;
    background-color:#fff;
    z-index:3;
    width:100%;
    .head{
        box-sizing: border-box;
        padding:.24rem;
        display:flex;
        align-items:center;
        justify-content: space-between;
        color:@color-3;
        font-size:@font-a;
        border-bottom:3px solid @color-3;
        img{
            width:.4rem;
        }
    }
    .share-item{
        box-sizing: border-box;
        padding:.6rem 0 1rem;
        display:flex;
        justify-content: space-evenly;
        img{
            width:1rem;
            flex-shrink: 0;
        }
        img:nth-child(2){
            width:1.2rem;
        }
    }
}

.mainStroll{
    position:fixed;
    width:100%;
    height:82%;
    overflow-y: auto;
}
</style>