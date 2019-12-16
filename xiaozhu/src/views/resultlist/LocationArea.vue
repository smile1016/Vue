<template>
  <div class="locationarea-container">
    <div class="close">
      <i @click="$router.go(-1)" class="iconfont icon-close"></i>
    </div>
    <div class="locationul">
      <ul class="ulparent">
        <li v-for="(item,index) in landmark" :key="index" @click="showHide(index)" ref="parent">
          <i class="iconfont">&#xe648;</i>
          <span>{{item.name}}</span>
          <ul class="ulchild" :style="{display:isdisplay}" ref="child">
            <li v-for="(i,index) in item.value" :key="index" @click.stop="handleChildli(i.name)">{{i.name}}</li>
            <!-- <li v-for="(i,index) in item.value" :key="index">{{i.name}}</li> -->
          </ul>
        </li>
      </ul>
    </div>
    <div class="footer-wrap">
      <div class="footer-btn">不限地点</div>
    </div>
  </div>
</template>

<script>
import { getLocationIcon, getPositionArea } from "../../api/result.js";
import { Indicator } from "mint-ui";
import "mint-ui/lib/style.css";
export default {
  data() {
    return {
      isdisplay: "none",
      options: {
        cityId: 114,
        timestamp: 1576230361077
      },
      area: [],
      landmark: []
    };
  },
  async created() {
    let params = {
      cityId: this.$store.state.city.id,
      timestamp: 1576230361077
    };
    Indicator.open();
    let rs = await getPositionArea(params);
    this.area = rs.data.content.area;
    this.landmark = rs.data.content.landmark;
    Indicator.close();

    // let icon = await getLocationIcon()
    // this.iconfont = icon.data.iconfont
    // console.log(this.iconfont)
  },
  methods: {
    //   handle(){
    //       if(this.isdisplay=='none'){
    //           this.isdisplay='block'
    //       }else{
    //           this.isdisplay ='none'
    //       }
    //     // return this.isdisplay==='none' ? 'block':'none'
    //   },
    // @click="isdisplay=='none' ? 'block':'none'"
    // @click="showHide(index)"
    showHide(index) {
      if (this.$refs.child[index].style.display === "none") {
        this.$refs.child[index].style.display = "block";
      } else {
        this.$refs.child[index].style.display = "none";
      }
    },
    handleChildli(keyword){
        this.$store.commit("UPDATE_KEYWORD", keyword);
        this.$router.push('/result')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mixin.scss";
@font-face {
  font-family: "iconfont";
  src: url("../../assets/font_position/iconfont.eot");
  src: url("../../assets/font_position/iconfont.eot?#iefix")
      format("embedded-opentype"),
    url("../../assets/font_position/iconfont.woff2") format("woff2"),
    url("../../assets/font_position/iconfont.woff") format("woff"),
    url("../../assets/font_position/iconfont.ttf") format("truetype"),
    url("../../assets/font_position/iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.locationarea-container {
  .close {
    height: 60px;
    overflow: hidden;
    //
    .icon-close:before {
      display: block;
      width: 24px;
      margin: 13px 20px 13px 15px;
      font-size: 24px;
      border-radius: 50%;
      background: #212121;
      color: #fff;
      content: "\e69e";
    }
    @include border_1px(#e0e0e0);
  }
  .locationul {
    .ulparent {
      display: flex;
      flex-direction: column;

      > li {
        i {
          font-size: 22px;
          margin-right: 4px;
        }
        line-height: 60px;
        margin-left: 15px;
        @include border_1px(#e0e0e0);
      }
      .ulchild {
        > li {
          margin-left: 20px;
        }
      }
    }
  }
  .footer-wrap {
      width:100%;
      height: 40px;
      padding: 20px 0;
      z-index: 9999;
    background: #fff;
    position: fixed;
    bottom: 0;
    .footer-btn {
      text-align: center;
      position: fixed;
      background: #fff;
      bottom: 20px;
      border: 1px solid rgba(33, 33, 33, 0.2);
      border-radius: 20px;
      margin: 0 20px;
      width: 90%;
      line-height: 40px;
    }
  }
}
</style>