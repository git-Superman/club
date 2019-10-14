<template>
    <div>
        <navBar test="地址详情"></navBar>
        <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
            />
    </div>
</template>
<script>
import navBar from '../navBar'
import areaList from '@/assets/js/area.js'
export default {
  data() {
    return {
      areaList,
      searchResult: []
    }
  },

  methods: {
    onSave() {
      this.$toast('save');
    },
    onDelete() {
      this.$toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  },
    components:{
        navBar
    }
}
</script>
<style lang="less" scoped>
/deep/ .van-button--danger {
  color: #fff;
  background-color: #8B2C18;
  border: 1px solid #8B2C18;
}
</style>
