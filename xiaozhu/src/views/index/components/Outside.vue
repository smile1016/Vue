<template>
  <div>
    <!-- 热门城市 -->
    <span id="hot" class="search_T">热门城市</span>
    <div>
      <div class="search_ul">
        <div v-for="city in outsideHotCity" :key="city.cityId" class="city_choose" @click="setCity({id:city.cityId,name:city.cityName})">
          <i class="doticon iconfont" v-html="city.iconfont"></i>
          {{city.cityName}}
        </div>
      </div>
    </div>
    <!-- 所有城市 -->
    <div>
      <div v-for="items in outsideAllCity" :key="items.cityId" @click="setCity({id:item.cityId,name:item.cityName})">
        <div class="cityname">{{items.cityName}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { outsideHotCity } from "../../../api/city";
import { outsideAllCity } from "../../../api/city";
export default {
  data() {
    return {
      outsideHotCity: {},
      outsideAllCity: {}
    };
  },
  created() {
    this.getoutsideHotCity();
    this.getoutsideAllCity();
  },
  methods: {
    // 热门城市
    async getoutsideHotCity() {
      let rs = await outsideHotCity();
      this.outsideHotCity = rs.data;
    },
    // 国外全部城市
    async getoutsideAllCity() {
      let rs = await outsideAllCity();
      this.outsideAllCity = rs.data;
    },
    setCity(city){
      this.$store.commit("UPDATE_CITY", city);
      this.$router.push('/')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/mixin.scss";
@font-face {
  font-family: "iconfont";
  src: url("../../../assets/font_outsidecity/iconfont.eot");
  src: url("../../../assets/font_outsidecity/iconfont.eot?#iefix")
      format("embedded-opentype"),
    url("../../../assets/font_outsidecity/iconfont.woff2") format("woff2"),
    url("../../../assets/font_outsidecity/iconfont.woff") format("woff"),
    url("../../../assets/font_outsidecity/iconfont.ttf") format("truetype"),
    url("../../../assets/font_outsidecity/iconfont.svg#iconfont") format("svg");
}
.search_T {
  background-color: #f5f5f5;
  line-height: 20px;
  display: block;
  clear: both;
  color: #bdbdbd;
  font-size: 12px;
  padding-left: 20px;
  margin-top: 15px;
}
.search_ul {
  width: 100%;
  padding: 10px 0 4px;
  //   text-align: center;
  display: flex;
  flex-flow: row wrap;
}
.city_choose {
  width: 60px;
  height: 72px;
  margin: 8px 10px;
  text-align: center;
  font-size: 12px;
  i {
    display: block;
    text-align: center;
    line-height: 50px;
    width: 50px;
    font-size: 34px;
    border: 1px dashed #999;
    border-radius: 50%;
    margin: 0 0 5px;
  }
}
.city_title {
  display: block;
  height: 20px;
  background: #f3f3f3;
  padding: 0 0 0 20px;
  font-size: 12px;
}
.cityname {
  line-height: 40px;
  padding: 0 0 0 15px;
  font-size: 14px;
  color: #212121;
  font-weight: 700;
  @include border_1px(#d8d8d8);
}
</style>