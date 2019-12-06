<template>
  <div class="most-container">
    <img :src="item.img|formatImg('85.115')" alt />
    <h4>{{item.nm}}</h4>
    <span>{{item.comingTitle}}</span>
  </div>
</template>

<script>
export default {
  props: ["item"]
};

</script>
<style lang="scss" scoped>
.most-container {
  
  height: 160px;
  margin: 5px 6px;
  
  img {
    width: 85px;
    height: 115px;
  }
  h4 {
    font-size: 13px;
    color: #222;
    line-height: 27px;
    font-weight: 700;
    white-space: nowrap;
    overflow-x: hidden;
    width: 80px;
    text-overflow: ellipsis;
  }
  span {
    font-size: 12px;
    display: block;
    white-space: nowrap;
    overflow-x: hidden;
    width: 100px;
    text-overflow: ellipsis;
    color: #999;
  }
}
</style>