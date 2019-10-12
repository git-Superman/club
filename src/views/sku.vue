<template>
    <div>
        <van-overlay :show="show" @click="show = false" />
        <van-popup
            v-model="show"
            position="bottom"
            :style="{ height: '20%' }"
            />
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // show : true
            }
        },
        props:{
            show:{
                type:Boolean,
                default:false
            }
        }
    }
</script>