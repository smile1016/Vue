<template>
  <div class="result-container">
    <div class="better-top">
      <div class="result-top">
        <i class="iconfont icon-zuojiantou" @click="handleback()"></i>
        <h3>{{$store.state.city.name}}</h3>
        <i class="iconfont icon-caidan"></i>
      </div>
      <div class="result-head">
        <router-link tag="div" to="/result/search" class="search_box">
          <i class="iconfont icon-search"></i>
          <input type="text" :placeholder="this.$store.state.keyword==='位置/地名/房源' ? '':this.$store.state.keyword" />
        </router-link>
        <div class="result_calendar_box">
          <router-link tag="div" to="/calendarPage" class="search_item">
            <span>请选择日期</span>
            <i class="iconfont icon-xiajiantou"></i>
          </router-link>
        </div>
      </div>
      <div class="result_select">
        <ul class="search_condition">
          <router-link tag="li" to="/result/locationarea">
            <span v-html="this.$store.state.keyword==='' ? '位置区域':this.$store.state.keyword"></span>
            <i class="iconfont icon-xiajiantou"></i>
          </router-link>
          <router-link tag="li" to="/result/moreselect">
            <span>更多筛选</span>
            <i class="iconfont icon-xiajiantou"></i>
          </router-link>
          <router-link tag="li" to="/result/recommendsort">
            <span>推荐排序</span>
            <i class="iconfont icon-xiajiantou"></i>
          </router-link>
        </ul>
      </div>
    </div>
    <ResultRoomList></ResultRoomList>
    <Download class="download"></Download>
  </div>
</template>
<script>
import Download from "../../components/Download";
import ResultRoomList from "./ResultRoomList";
import { Indicator } from "mint-ui";
import "mint-ui/lib/style.css";
export default {
  components: {
    Download,
    ResultRoomList
  },
  created() {
    document.title = this.$store.state.city.name;
  },
  // Indicator.open(); //加载loading
  methods: {
    handleback(){
      this.$router.push('/');
      this.$store.commit("UPDATE_KEYWORD", '');
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/mixin.scss";
.result-container {
  position: absolute;
  height: 100%;
  width: 100%;
  // .better-top {
    // z-index: 999;
    .result-top {
      background: #fff;
      line-height: 50px;
      display: flex;
      i {
        margin: 0 15px;
      }
      h3 {
        flex: 1;
        font-size: 16px;
        color: #333;
        font-weight: 700;
        text-align: center;
      }
    }
    .result-head {
      display: flex;
      line-height: 34px;
      background: #fff;
      padding: 0 15px;
      .search_box {
        flex: 1;
        background: #f5f5f5;
        margin: 0 5px;
        padding: 0 0 0 10px;
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
        i {
          width: 16px;
          height: 16px;
          display: inline-block;
          margin: 0 3px;
          color: #bdbdbd;
        }
        input {
          font-size: 12px;
          border: 0;
          outline: none;
          background: transparent;
          color: #bdbdbd;
        }
      }
      .result_calendar_box {
        background: #f5f5f5;
        font-size: 14px;
        padding: 0 10px 0 5px;
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
        span {
          color: #212121;
        }
        i {
          color: #bdbdbd;
        }
      }
    }
    .result_select {
      line-height: 50px;
      display: flex;
      justify-content: center;
      .search_condition {
        display: flex;
        li {
          font-size: 12px;
          color: #212121;
          margin-right: 15px;
          span {
            display: inline-block;
            height: 35px;
            @include border_1px(#e0e0e0);
          }
        }
      }
    }
  // }

  .download {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
}
</style>