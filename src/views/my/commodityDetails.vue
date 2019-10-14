<template>
    <div class="dynamic">
        <myTitle test="商品详情" right="确定" @confirm="handleClick"/>
        <div class="dynamic-sfz">
            <span>上传商品图片</span>
            <div>
                <van-uploader v-model="fileList" multiple />
            </div>
        </div>
        <div class="dynamic-input">
            <span>商品名称</span>
            <input type="text" placeholder="输入您发布的商品名称">
        </div>
        <div class='dynamic-sx'>
            <span>商品属性</span>
            <div class="dynamic-box">
                <div><span>选择属性分类</span></div>
                <div>
                    <input type="text" placeholder="输入选项名称">
                    <input type="text" placeholder="输入选项名称">
                </div>
                <div>
                    <input type="text" placeholder="￥输入选项价格">
                    <input type="text" placeholder="￥输入选项价格">
                </div>
            </div>
            <div class="dynamic-box"><div/><div> <input type="text" class="add" disabled placeholder="+ 添加选项"></div><div /></div>
        </div>
        <div class='dynamic-sx'>
            <div class="dynamic-box">
                <div><span>型号</span></div>
                <div>
                    <input type="text" placeholder="输入选项名称">
                    <input type="text" placeholder="输入选项名称">
                </div>
                <div>
                    <input type="text" placeholder="￥输入选项价格">
                    <input type="text" placeholder="￥输入选项价格">
                </div>
            </div>
            <div class="dynamic-box"><div/><div> <input type="text" class="add" disabled placeholder="+ 添加选项"></div><div /></div>
            <div class="dynamic-box"><div> <input type="text" class="add" disabled placeholder="+ 添加属性分类"></div><div/><div /></div>
        </div>
        <div class="dynamic-sfz">
            <span>商品详情</span>
            <p>请描述商品的详细情况，也可直接上传图片…</p>
            <div>
                <van-uploader v-model="fileList1" multiple />
            </div>
        </div>
        <div class="dynamic-sfz">
            <span>商品规格</span>
            <p>请描述商品的规格相关信息…</p>
            <div>
                <van-uploader v-model="fileList2" multiple />
            </div>
        </div>
        <div style="border-bottom:3rem solid #eeeeee"/>
    </div>
</template>
<script>
import myTitle from '../my-title'
export default {
    data() {
         return {
             fileList: [
                // { url: 'https://img.yzcdn.cn/vant/cat.jpeg' },
                // Uploader 根据文件后缀来判断是否为图片文件
                // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
            ],
            fileList1:[],
            fileList2:[],
            confi : null,
            show : false,
            minHour: 1,
            maxHour: 12,
            minDate: new Date(2019, 10, 1),
            maxDate: new Date(2060, 10, 1),
            currentDate: new Date()
         }
    },
    methods:{
        handleClickGo(){
            this.$router.go(-1);
        },
        confirm(e){
            console.log(e);
        },
        getValues(val){
            console.log(val);
            console.log(this.confi);
        },
        handleClick(){
            this.$toast('已发布商品，请等待审核...')
        },
        handles(){
            this.$router.push('/store/issue');
        }
    },
    components:{
        myTitle
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
        padding:.24rem;
        display:flex;
        background-color:#fff;
        align-items:center;
        span{
            color:@color-6;
            font-size:@font-a;
            flex-shrink: 0;
            padding-right:.2rem;
            min-width: 1.32rem;
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
        padding:.24rem;
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
        padding:.24rem .24rem 0 .24rem;
        background-color:#fff;
        font-size:@font-a;
        color:@color-6;
        >span{
            display:block;
            margin-bottom:.2rem;
        }
        p{
            color:@color-9;
            padding-bottom:.16rem;
        }
        .van-uploader{
            display:block;
        }
    }
}
.dynamic-sx{
    font-size:@font-a;
    background-color:#fff;
    box-sizing: border-box;
    padding:.24rem 0 0 .24rem;
    >span{
        display:block;
        color:@color-6;
        padding-bottom:.2rem;
    }
    .dynamic-box{
        display:flex;
        >div{
            box-sizing: border-box;
            padding-right:.24rem;
            width:33.33%;
            input,span{
                display:block;
                width:100%;
                height:.6rem;
                border:1px solid @color-9;
                margin-bottom:.24rem;
            }
            span{
                display: flex;
                align-items:center;
                justify-content: center;
                color:@color-9;
            }
            input{
                box-sizing: border-box;
                padding-left:.06rem;
            }
            ::-webkit-input-placeholder{
                font-size:@font-a;
            }
        }
    }
    .add{
        border:0 !important;
        background-color:@color-e;
    }
}
.dynamic-sx + .dynamic-sx{
    padding-top:0;
}
</style>