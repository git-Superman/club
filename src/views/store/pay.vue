<template>
<div>
    <navBar :test='test'/>
</div>
</template>
<script>
    import navBar from '../navBar'
    export default {
        data() {
            return {
                test : '支付订单'
            }
        },
        components:{
            navBar
        }
    }
</script>