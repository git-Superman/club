<template>
    <div style="padding-bottom:1.4rem;">
        <router-view></router-view>
        <myFooter></myFooter>
    </div>
</template>
<script>
import myFooter from './footer'
    export default {
        components:{
            myFooter
        }
    }
</script>