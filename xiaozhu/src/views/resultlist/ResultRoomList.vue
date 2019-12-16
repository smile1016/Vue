<template>
  <div class="ResultRoomList-container" id="list-wrap" >
    <div>
      <div class="carnival_item" v-for="(item,index) in this.RoomList" @click="handleResult({luid:item.luId,
    landlordId:item.landlordId})" :key="index">
        <div class="carnival_item_top">
          <img :src="item.luMainImageUrl" alt />
          <span class="iconfont icon-xihuan"></span>
        </div>
        <div class="carnival_item_bottom">
          <div class="box">
            <h5 class="title">{{item.luTitle}}</h5>
            <p class="desc">
              {{item.luLeaseType}} · {{item.houseTypeInfo}} · {{item.bedinfo}} · {{item.guestnum}}
              <span
                v-if="item.commentScore>0 || item.luComments>0"
              >· {{ item.commentScore>0 ? item.commentScore + '分/' : '' }}{{ item.luComments>0? item.luComments + '点评' : '' }}</span>
            </p>
            <div class="tags">
              <span v-for="(i,index) in item.lodgeUnitNewTags" :key="index">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAATlBMVEUAAACLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0fwUY2xAAAAGnRSTlMA/inpWgUB3GBGMbeleHFXHQ8L8r6wm5pJPEeDJT8AAACLSURBVBjTfdBZDsMgDARQD1sI2dP9/hctzihyy0fmA8TDkg1yJuWcpM0CvH/PfdAF+NQt9LTYQdU5NXSR6vyhh3m9Mm2M+m9botLSpjbjwVrW3THXdcBNp56ASUcBhrqVcWEPdgtjEbFZbDIzdmvN1MyUb1fbX89d9Xz7qnUZ/JaVxhSv9W1ilMt8AcP6Ay4ZEsVfAAAAAElFTkSuQmCC"
                />
                {{i.title}}
              </span>
            </div>
          </div>
          <span class="landlordheadimg">
            <img
              alt
              :data-src="item.landlordheadimgurl"
              :src="item.landlordheadimgurl"
              lazy="loaded"
            />
          </span>
          <div class="price">
            <span class="num">¥{{item.luPrice}}</span>
            <span class="txt">
              起/晚
              ·
              <i class="show_price_v2">{{item.promotionInfo[0]}}</i>
              <i>·</i>
              <del>原价¥{{item.localprice}}</del>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ResultRoomList } from "../../api/result.js";
import { Indicator } from "mint-ui";
import "mint-ui/lib/style.css";
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      result: {
        cityId: 12,
        checkInDay: "",
        checkOutDay: "",
        locId: "",
        keyword: "",
        radius: 5,
        cityAndLandmark: "",
        offset: 0,
        length: 10,
        orderBy: "recommend",
        leaseType: "",
        minPrice: 0,
        maxPrice: 12980,
        distId: "",
        huXing: "",
        facilitys: "",
        guestNum: "",
        cashPledgeFree: "",
        label: "",
        lodgeUnitTags: "",
        userId: "",
        sessId: "",
        timestamp: 1576118712757,
        is_supportWebP: true
      },
      RoomList: []
    };
  },
  async created() {
    Indicator.open();
    let params = {
      cityId: this.$store.state.city.id,
      checkInDay: "",
      checkOutDay: "",
      locId: "",
      keyword: this.$store.state.keyword,
      radius: 5,
      cityAndLandmark: "",
      offset: 0,
      length: 10,
      orderBy: "recommend",
      leaseType: "",
      minPrice: 0,
      maxPrice: 12980,
      distId: "",
      huXing: "",
      facilitys: "",
      guestNum: "",
      cashPledgeFree: "",
      label: "",
      lodgeUnitTags: "",
      userId: "",
      sessId: "",
      timestamp: 1576118712757,
      is_supportWebP: true
    };
    let rs = await ResultRoomList(params);
    // debugger
    // this.$store.commit("UPDATE_LUID", this.$refs.item.luid);
    
    this.RoomList = rs.data.content.item;
    console.log(this.RoomList)
    Indicator.close();
    this.$nextTick(() => {
        this.initScroll()
      })
  },
  methods: {
    initScroll() {
      this.scroll = new BScroll("#list-wrap", {
        click: true,
        scrollX: true,
        probeType: 3
      });
    },
    handleResult(ids){
      this.$router.push('/detail');
      this.$commit(this.$store.commit("UPDATE_IDS", ids))
     
    }
  }
};
</script>
<style lang="scss" scoped>
.ResultRoomList-container {
  width: 100%;
  height: 100%;
  .carnival_item_top {
    position: relative;
    img {
      width: 375px;
    }
    span {
      font-size: 28px;
      position: absolute;
      top: 15px;
      right: 15px;
      color: #fff;
    }
  }
  .carnival_item_bottom {
    position: relative;
    padding: 15px;
    .box {
      .title {
        color: #323232;
        font-size: 22px;
        line-height: 30px;
      }
      .desc {
        color: #757575;
        font-size: 13px;
        margin: 4px 0 0;
      }
      .tags {
        color: #720124;
        font-size: 12px;
        margin: 8px 0 0;
        img {
          width: 12px;
        }
      }
    }
    .landlordheadimg {
      position: absolute;
      right: 15px;
      top: -22px;
      img {
        width: 54px;
      }
    }
    .price {
      padding: 7px 0 0;
      font-size: 12px;
      color: #212121;
      .num {
        font-size: 20px;
        color: #ff4081;
      }
      .txt {
        color: #757575;
      }
      .show_price_v2 {
        font-size: 10px;
        color: #ff4081;
      }
    }
  }
}
</style>