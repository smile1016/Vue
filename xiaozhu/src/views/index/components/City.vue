<template>
  <div class="city-container">
    <div class="city-top">
      <div class="close">
        <i @click="$router.push('/')" class="iconfont icon-close"></i>
      </div>

      <div class="city-input">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="城市/位置/地名" />
      </div>

      <ul class="HotRecommend">
        <li v-for="item in HotRecommendList" :key="item.cityid">{{item.locName}}</li>
      </ul>

      <div class="city-type">
        <router-link tag="div" to="/city/inside" active-class="pink">国内(含港澳台)</router-link>
        <router-link tag="div" to="/city/outside" active-class="pink">海外城市</router-link>
      </div>
      
    </div>
    <router-view class="city-main"></router-view>
  </div>
  
</template>
<script>
import { HotRecommend } from "../../../api/city.js";
export default {
  data() {
    return {
      timestamp: "1575554118309",
      HotRecommendList: ""
    };
  },
  created() {
    this.getHotRecommend();
  },
  methods: {
    async getHotRecommend() {
      let params = {
        timestamp: this.timestamp
      };
      let result = await HotRecommend(params);
      this.HotRecommendList = result.data.content.landmarkList;
    }
  }
};
</script>

<style lang="scss" scoped>
.city-container {
  height: 100%;
  .city-top {
    width: 100%;
    position: fixed;
    z-index: 1000;
    background: #fff;
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
    .city-input {
      margin: 0 20px;
      border-radius: 25px;
      height: 48px;
      background: #ff5f7a;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      input {
        height: 95%;
        width: 80%;
        margin: 10px;
        border: none;
        outline: none;
        background: #ff5f7a;
        font-size: 20px;
        &::placeholder {
          color: #fff;
        }

        //   flex: 1;
      }
    }
    .HotRecommend {
      // width: 100%;
      // display: flex;
      height: 24px;
      overflow: auto;
      margin: 10px 20px;
      white-space: nowrap;

      li {
        display: inline-block;
        line-height: 22px;
        color: #757575;
        margin: 0 5px 0 0;
        padding: 0 5px;
        border: 1px solid #e0e0e0;
        font-size: 12px;
      }
    }
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
      color: transparent;
    }
    .city-type {
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        width: 100px;
        height: 30px;
        font-size: 14px;
        text-align: center;
        color: #212121;
      }
      .pink {
        color: #ff4081;
        font-weight: 700;
        position: relative;
      }
      .pink::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 40px;
        right: 40px;
        height: 2px;
        background: #ff4081;
      }
    }
  }
  .city-main{
    padding-top: 180px;
  }
}
</style>