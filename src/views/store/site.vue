<template>
    <div>
        <navBar test="收货地址"></navBar>
        <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        @add="onAdd"
        @edit="onEdit"
        />
    </div>
</template>
<script>
import navBar from '../navBar'
export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
  methods: {
    onAdd() {
      this.$router.push('/store/edit')
    },

    onEdit(item, index) {
    //   this.$toast('编辑地址:' + index);
        this.$router.push('/store/edit')
    }
  },
  components:{
      navBar
  }
}
</script>
<style lang="less" scoped>
/deep/ .van-address-item .van-radio__icon--checked .van-icon{
  background-color: #373737;
  border-color: #373737;
}
/deep/ .van-button--danger {
  color: #fff;
  background-color: #8B2C18;
  border: 1px solid #8B2C18;
}
</style>