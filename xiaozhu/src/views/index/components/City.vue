<template>
  <div class="city-container">
    <div class="city-top">
      <div class="close">
        <i @click="$router.go(-1)" class="iconfont icon-close"></i>
      </div>
      <div class="city-input">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="城市/位置/地名" />
      </div>
      <ul class="HotRecommend">
          <li v-for="item in HotRecommendList" :key="item.cityid">{{item.locName}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { HotRecommend } from "../../../api/city.js";
export default {
  data() {
    return {
      timestamp: "1575554118309",
      HotRecommendList:''
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
      this.HotRecommendList  =result.data.content.landmarkList
      console.log(result);
    }
  }
};
</script>

<style lang="scss" scoped>
.city-container {
  height: 100%;
  .city-top {
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
    .HotRecommend{
        width: 100%;
        // display: flex;
        margin: 10px 20px;
        li{
            float: left;
            // width: 100%;
            line-height: 22px;
            color: #757575;
            margin: 0 5px 0 0;
            padding: 0 5px;
            border: 1px solid #e0e0e0;
            font-size: 12px;
        }
    }
  }
}
</style>