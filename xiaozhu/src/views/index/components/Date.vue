<template>
  <div class="date-container">
    <div class="date-top">
      <div class="close">
        <i @click="$router.go(-1)" class="iconfont icon-close"></i>
      </div>
      <p>选择入住离开日期</p>
      <DateMonth></DateMonth>
    </div>
  </div>
</template>
<script>
import DateMonth from './DateMonth'
export default {
  components:{
    DateMonth
  }
}
</script>
<style lang="scss" scoped>
.date-container {
  .date-top {
    .close {
      height: 24px;
      margin: 13px 20px 13px 15px;
      .icon-close:before {
        display: block;
        width: 24px;
        height: 24px;
        font-size: 24px;
        border-radius: 50%;
        background: #212121;
        color: #fff;
        content: "\e69e";
      }
    }
    p{
      line-height: 30px;
      font-size: 20px;
      margin: 13px 20px 13px 15px;
    }
  }
}
</style>