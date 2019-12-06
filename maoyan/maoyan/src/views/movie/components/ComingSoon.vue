<template>
  <div>
    <div id="mostexpect">
      <div class="mostexpect" :style="'width:'+itemsWidth+'px'">
        <MostExpectItem v-for="item in expect.coming" :key="item.id" :item="item"></MostExpectItem>
      </div>
    </div>
    <!-- <div class="coming-container">
      <ComingList v-for="item in cominglist.coming" :key="item.id" :item="item"></ComingList>
    </div>-->
    <div class="coming-container">
      <div v-for="(items, name) in cominglistByDay" :key="name">
        <h4>{{name}}</h4>
        <ComingItem v-for="item in cominglistByDay[name]" :item="item" :key="item.id"></ComingItem>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import MostExpectItem from "./MostExpectItem";
import ComingItem from "./ComingItem";
import { mostExprected, comingList } from "../../../api/movie";
export default {
  data() {
    return {
      finished: true,
      ci: 51,
      itemsWidth: 0,
      cominglist: {
        coming: []
      },
      expect: {
        coming: [],
        paging: {
          hasMore: true,
          limit: 10,
          offset: 0,
          total: 0
        }
      }
    };
  },
  computed: {
    // obj: {
    //   "2019-12-4": [{}],
    //   "2019-12-5": [{}]
    // },
    cominglistByDay() {
      var result = {};
      this.cominglist.coming.forEach(item => {
        if (!result[item.comingTitle]) {
          result[item.comingTitle] = [item];
        } else {
          result[item.comingTitle].push(item);
        }
      });
      return result;
    }
  },
  async created() {
    this.getMostExprect();
    let rs = await comingList({
      ci: 51,
      token: "",
      limit: 10
    });
    this.cominglist = rs.data;
    console.log(rs.data);
  },
  methods: {
    // 获取
    async getMostExprect() {
      let params = {
        ci: this.ci,
        limit: this.expect.paging.limit,
        offset: this.expect.paging.offset,
        token: ""
      };
      let result = await mostExprected(params);
      console.log(this.expect);

      this.expect.coming.push(...result.data.coming);
      this.expect.paging = result.data.paging;

      this.expect.paging.offset += this.expect.paging.limit;

      this.itemsWidth = this.expect.coming.length * 105;
      this.$nextTick(() => {
        this.initScroll();
      });
    },
    initScroll() {
      if (this.scroll) {
        this.scroll.refresh();
        return;
      }
      this.scroll = new BScroll("#mostexpect", {
        click: true,
        scrollX: true,
        probeType: 3
      });
      this.scroll.on("scrollEnd", async position => {
        if (this.finished && this.scroll.maxScrollX === position.x) {
          //到达最右侧，发送翻页的数据请求
          this.finished = false;
          await this.getMostExprect();
          this.finished = true;
        }
      });
    }
  },
  components: {
    MostExpectItem,
    ComingItem
  }
};
</script>

<style lang="scss" scoped>
.mostexpect {
  display: flex;
  margin: 13px;
  // overflow-x: hidden;
}
.mostexpect div:first-child {
  margin-left: 0;
}
</style>