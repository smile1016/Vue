<template>
  <div style="height:100%">
    <div id="city-container" class="city-container">
      <section id="city-list" class="city-list-container" style="display: block;">
        <!-- 定位城市 -->
        <section>
          <div id="locate" class="city-title">定位城市</div>
          <div class="city-list city-list-inline clearfix">
            <div class="location-city">定位失败，请点击重试</div>
          </div>
        </section>
        <!-- 最近访问城市 -->
        <section class="history-city-list">
          <div id="history" class="city-title">最近访问城市</div>
          <div class="city-list city-list-inline clearfix">
            <!-- 从store中获取 -->
            <div class="city-item" v-for="item in getHotCities" :key="item.id" :data-nm="item.name" :data-id="item.id">{{item.name}}</div>
          </div>
        </section>
        <!-- 热门城市 -->
        <section>
          <div id="hot" class="city-title">热门城市</div>
          <div class="city-list city-list-inline clearfix">
            <div
              class="city-item"
              @click="setCity(city)"
              v-for="city in hotCities"
              :key="city.id"
            >{{city.name}}</div>
          </div>
        </section>

        <!-- 所有城市按字母显示 -->
        <section>
          <div v-for="(items,key) in cities" :key="items.id">
            <div :id="key" class="city-title city-title-letter">{{key}}</div>
            <div class="city-list city-list-block clearfix">
              <div
                class="city-item"
                @click="setCity(item)"
                v-for="item in items"
                :key="item.id"
              >{{item.name}}</div>
            </div>
          </div>
        </section>
      </section>
    </div>

    <section class="nav">
      <div class="nav-item" @click="setPosition('locate')" data-id="locate">定位</div>
      <div @click="setPosition('history')" class="nav-item" data-id="history">最近</div>
      <div @click="setPosition('hot')" class="nav-item" data-id="hot">热门</div>
      <!-- 右侧字母列表 -->
      <div
        class="nav-letter nav-item"
        :ref="l"
        @touchmove="handleTouch"
        @click="setPosition(l)"
        v-for="(l,index) in getLetters"
        :key="index"
        :data-id="l"
      >{{l}}</div>
    </section>
  </div>
</template>
<script>
import { getHotCities } from "../api/movie";
import BScroll from "@better-scroll/core";

export default {
  data() {
    return {
      hotCities: [],
      cities: [],
      getHotCities:[]
    };
  },
  async created() {
    // 请求结果
    let result = await getHotCities();
    // 请求结果赋给hotCities和cities
    this.hotCities = result.data.hotCities;
    this.cities = result.data.cities;
    this.getHotCities = JSON.parse(localStorage.getItem('historyCities'))
    this.$nextTick(() => {
      this.initScroll();
      // 单个字母的高度
      this.baseLetterHeight = this.$refs["A"][0].offsetHeight;
      // A距离顶部的距离
      this.topHeight = this.$refs["A"][0].getBoundingClientRect().y;
    });
  },
  mounted(){
    this.getHotCities = JSON.parse(localStorage.getItem('historyCities'))
  },
  methods: {
    setCity(city) {
      // 城市信息需要存在store复用
      this.$store.commit("UPDATE_CITY", city);
      this.$router.go(-1);
      this.$cache.addCity(city)
    },
    setPosition(letter) {
      // 根据id跳转到指定位置
      this.scroll.scrollToElement(`#${letter}`, 100);
    },
    // 移动端触摸滑动事件

    handleTouch(event) {
      // 当前滑动的y坐标
      // let currentY = event.target.getBoundingClientRect().y;
      let currentY = event.touches[0].pageY;
      // 当前滑动的字母的索引
      let index = Math.floor(
        (currentY - this.topHeight) / this.baseLetterHeight
      );
      // 当前滑动的字母值
      let key = Object.keys(this.cities)[index];
      // 滑动条状对应DOM
      this.scroll.scrollToElement(`#${key}`);
    },
    initScroll() {
      this.scroll = new BScroll("#city-container", {
        scrollY: true,
        click: true,
        pullUpLoad: true,
        probeType: 3
      });
    }
  },
  computed: {
    getLetters() {
      // 得到右侧字母
      return Object.keys(this.cities);
    },
    getHotCities(){
      // local不支持响应式
      return localStorage.getItem('historyCities')
    }
  }
};
</script>
<style lang="scss" scoped>
.city-container {
  height: 100%;
}
nav {
  width: 100%;
  position: fixed;
  bottom: 0;
}

.city-list-container {
  display: none;
  background-color: #ebebeb;
  font-size: 14px;
  color: #333;
  top: 0;
  bottom: 0;
  // height: 100%;
  width: 100%;
  // position: absolute;
  z-index: 1000;
  // overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.clearfix:after {
  content: " ";
  display: table;
  clear: both;
}

.city-title {
  padding-left: 15px;
  line-height: 30px;
}

.city-title-letter {
  padding-left: 25px;
}

.city-list {
  padding-right: 30px;
}

.city-list-inline {
  background-color: #f5f5f5;
  padding-bottom: 8px;
}

.city-list-inline .city-item,
.city-list-inline .location-city {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 4%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.city-list-inline .location-city {
  width: auto;
  min-width: 30%;
  padding: 0 20px;
}

.city-list-block {
  background-color: #f5f5f5;
}

.city-list-block .city-item {
  height: 44px;
  line-height: 44px;
  margin-left: 15px;
  border-bottom: 1px solid #c8c7cc;
}

.city-list-block .city-item:last-child {
  border-bottom: none;
}

.nav {
  position: fixed;
  top: 75px;
  top: 11vh;
  right: 0;
  width: 35px;
  z-index: 10;
  text-align: center;
  font-size: 12px;
}

.nav .nav-item {
  height: 16px;
  height: 2.8vh;
}
.nav .nav-letter {
  width: 15px;
  margin-left: 15px;
}
</style>