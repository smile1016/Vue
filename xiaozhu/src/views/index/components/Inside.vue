<template>
  <!-- <div>inside</div> -->
  <div>
    <!-- 热门城市 -->
    <span id="hot" class="search_T">热门城市</span>
    <div>
      <div class="search_ul">
        <div data-v-2201177c class="city_choose myLocation">
          <i data-v-2201177c class="doticon iconfont">&#xe60d;</i>
          我的附近
        </div>
        <div data-v-2201177c v-for="city in insideHotCity" :key="city.cityId" class="city_choose">
          <i data-v-2201177c class="doticon iconfont" v-html="city.iconfont"></i>
          {{city.cityName}}
        </div>
      </div>
    </div>
    <!-- 所有城市 -->
    <div data-v-5aafaf7a>
      <div data-v-5aafaf7a v-for="(items,key,index) in insideAllCity" :key="index">
        <h3 data-v-5aafaf7a id="A" class="city_title">{{key}}</h3>
        <div
          data-v-19da5c88
          data-v-5aafaf7a
          v-for="item in items"
          :key="item.id"
          class="cityname"
        >{{item.cityName}}</div>
      </div>
    </div>
    <!-- 右侧字母 -->
    <div>
      <div data-v-12245d5c class="cityScroll_bar" side="1">
        <i data-v-12245d5c>热</i>
        <i data-v-12245d5c>A</i>
        <i data-v-12245d5c>B</i>
        <i data-v-12245d5c>C</i>
        <i data-v-12245d5c>D</i>
        <i data-v-12245d5c>E</i>
        <i data-v-12245d5c>F</i>
        <i data-v-12245d5c>G</i>
        <i data-v-12245d5c>H</i>
        <i data-v-12245d5c>J</i>
        <i data-v-12245d5c>K</i>
        <i data-v-12245d5c>L</i>
        <i data-v-12245d5c>M</i>
        <i data-v-12245d5c>N</i>
        <i data-v-12245d5c>P</i>
        <i data-v-12245d5c>Q</i>
        <i data-v-12245d5c>R</i>
        <i data-v-12245d5c>S</i>
        <i data-v-12245d5c>T</i>
        <i data-v-12245d5c>W</i>
        <i data-v-12245d5c>X</i>
        <i data-v-12245d5c>Y</i>
        <i data-v-12245d5c>Z</i>
      </div>
    </div>
  </div>
</template>

<script>
import { insideHotCity } from "../../../api/city";
import { insideAllCity } from "../../../api/city";
export default {
  data() {
    return {
      insideHotCity: {},
      insideAllCity: {}
    };
  },
  created() {
    this.getInsideHotCity();
    this.getInsideAllCity();
  },
  methods: {
    // 热门城市
    async getInsideHotCity() {
      let rs = await insideHotCity();
      this.insideHotCity = rs.data;
    },
    // 国内全部城市
    async getInsideAllCity() {
      let rs = await insideAllCity();
      this.insideAllCity = rs.data;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style/mixin.scss";

@font-face {
  font-family: "iconfont";
  src: url("../../../assets/font_insidecity/iconfont.eot");
  src: url("../../../assets/font_insidecity/iconfont.eot?#iefix")
      format("embedded-opentype"),
    url("../../../assets/font_insidecity/iconfont.woff2") format("woff2"),
    url("../../../assets/font_insidecity/iconfont.woff") format("woff"),
    url("../../../assets/font_insidecity/iconfont.ttf") format("truetype"),
    url("../../../assets/font_insidecity/iconfont.svg#iconfont") format("svg");
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


.cityScroll_bar[data-v-12245d5c] {
    position: fixed;
    top: 200px;
    right: 5px;
    width: 15px;
    padding: 8px 0
}

.cityScroll_bar i[data-v-12245d5c] {
    font-size: 12px;
    display: block;
    text-align: center;
    line-height: 16px;
    color: #bdbdbd
}
</style>