<template>
  <div id="scroll-wrapper">
    <div>
      <MovieItem v-for="item in dataset.movieList" :key="item.id" :item="item"></MovieItem>
    </div>
  </div>
</template>

<script>
import MovieItem from "./MovieItem";
// import {movieOnInfoList} from '@api/movie'
import { movieOnInfoList,moreComingList } from "../../../api/movie";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import { Indicator } from "mint-ui";
import "mint-ui/lib/style.css";
BScroll.use(Pullup);
export default {
  data() {
    return {
      pagesize: 10,
      startIndex: 12,
      dataset: {
        movieIds: [],
        movieList: [],
        total: 0
      }
    };
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll("#scroll-wrapper", {
        scrollY: true,
        click: true,
        pullUpLoad: true,
        probeType: 3
      });
      this.scroll.on("pullingUp", () => {
        console.log("pulling up");
        this.moreComingList();
      });
      // 下载app的显示隐藏
      this.scroll.on("scroll",(x,y)=>{
        if(x.y<-50){
          this.$store.commit('UPDATE_DOWN_STATE',false)
        }else{
          this.$store.commit('UPDATE_DOWN_STATE',true)
        }
      })
    },
    // 取更多数据
    async moreComingList() {
      if (this.dataset.movieList.length == this.dataset.total) {
        return;
      }
      let movieIds = this.dataset.movieIds.slice(
        this.startIndex,
        this.startIndex + this.pagesize
      );
      var params = {
        token: "",
        movieIds: movieIds.join(",")
      };
      Indicator.open();

      let result = await moreComingList(params);
      console.log(result.data.coming);
      this.dataset.movieList.push(...result.data.coming);
      this.$nextTick(() => {
        this.startIndex += this.pagesize;
        //重新计算滚动条的高度
        this.scroll.finishPullUp();
        this.scroll.refresh();
        Indicator.close();
      });
    }
  },

  async created() {
    Indicator.open();
    let result = await movieOnInfoList();
    this.dataset = result.data;
    this.$nextTick(() => {
      this.initScroll();
      Indicator.close();
    });
  },
  components: {
    MovieItem
  },
  mounted() {}
};
</script>