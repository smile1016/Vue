<template>
  <div class="detail-container">
    <download></download>
    <div class="detail-main">
      <div class="detail-title">
        <i class="iconfont icon-zuojiantou" @click="$router.go(-1)"></i>
        <h1>房间详情</h1>
        <i class="iconfont icon-fenxiang"></i>
        <i class="iconfont icon-caidan"></i>
      </div>
      <div class="detail-imgs">
        <img :src="roomInfo.lodgeUnit[0].luMainimageUrl" alt />
      </div>
      <div class="detail-info">
        <h5 class="title">{{roomInfo.lodgeUnit[0].lodgeUnitName}}</h5>
        <div class="price">
          <span class="num">¥{{roomInfo.lodgeUnit[0].showPriceV2.showPrice}}</span>
          <span class="txt">起/晚</span>
        </div>
        <div class="detail_allAct">
          <p>
            <span class="activity_icon_p">{{this.activities.content.promotion[0].shortName}}</span>
            <span class="activity_info2">{{this.activities.content.promotion[0].activityDescription}}</span>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAKBAMAAAAjlpGqAAAAHlBMVEUAAAC+vr69vb0hISEiIiIhISHV1dUhISEhISG9vb0jT2JfAAAACHRSTlMA5ojmsj0Gev+iqjAAAABESURBVAjXY4CCEGNXBhTA3tHRUQBlJwmqAckIoEgrlKc5cxKQ5QEUaQHSIJ7kzIlAlgVQpBlIA3mYIpi6ME3GtB3ThQCC2yDPxcH6mAAAAABJRU5ErkJggg=="
              class="allPromotionIcon"
            />
          </p>
        </div>
        <div class="baseInfoBar">
          <div class="baseInfoBar_threeIcon">
            <div>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAmVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjHWqVAAAAMnRSTlMAgOl6ni4g975ZK/z1BQFg7tFO2A6VPxzgxYQSqKR1co1UScm5tq6bMhWRCWtC5txmO3nAoBkAAAMjSURBVHja7d3ZcqJAGIbhRlxBQBAVl7jFuC8T7v/i5pckQ82o3T0VTPo333vsyVP4gVV2qUAIIYQQQgghhL6/XvBUX9pVwbo42rbTLHcuuOZ1rb6b/qnG85pUJi/N9O8CwS0aRSm9bCs4lY/iorLg0scoeEM+RsEa8jEK1pA46mSjYA3xugMahTz3aDjEV46CCqfznW0yRGcUp9VsKChjITqjKI1+9QRlLIRG8awaRfNlUhGUsRCdUbh969Wj15oLoVG0dJYtKGMhQ41RJKtGtmxjIdko1MuuCspYSD4K+bJ9eq25kHwU6mUbC8lHoV62sZBsFOplbwRlLMSvjBeqUbTel20upBeMWqplL8br87LNhQxnnbZ62d1s2cZCvIN6FOE0igVlLERnFEn5bdnmQqo0Cs1lmwuhUZw0l20uxFc/Kdz+4G3ZJkOikmrZ23zZhUISuyKKa+3eadlqCJVsD0Vd6dHtZS/3jrhD9r83kEYhF7ytXPadIZRb3/fEZ7tciPs8kFzvYiF54WDtFwlpS5Z9Vwh1XEVeIZCkHEiWfX8I1VwGm89CLEd8TbbqmWU7n4JUxNdEEGWnaddnBGm5EkvraRZzgZTjWbklsdQW+x4PSPZBb3pKJYXWmgfknDPuyyzHztzjAaE2wbImvysPeUCoXbQqSe/K4yoPCOW/DsJUUnv66rOAnKtO6tK7ctlhAqGGjVFT8h4bs4FQ3rxzvElpMIKcW1vhjakwg1C9/eLaYGJ2ECqeXX4vU+UIobzDNHkIyDnHfn4MCLWpPQhEAPIeIIAAAggggABCAQIIIIAAAgggFCCAAAIIIIAAQgECCCCAAAIIIBQggAAihwxntiVvHHkMIIdSqq5dMR5SbaY6JTvTIatUr4npkFAT8mQ6pKQJqQMCyE+HdKxrLflBHHGtBiCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAogBkI51tabmEY7E0q2e/07p/+UqIPwCxLQeGxKm7HJ314/Dsiu8dUCZW3NxtTmzldT2skP8bLIDnn+9jRBCCCGEEEIIIfS9/QYYv1V0pXyLGgAAAABJRU5ErkJggg=="
              />
              <p>{{roomInfo.lodgeUnit[0].leaseType}}</p>
              <div class="banner_arrow"></div>
            </div>
            <div>
              <img
                src="data:image/png;base64,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"
              />
              <p>{{roomInfo.lodgeUnit[0].guestNum}}</p>
              <div class="banner_arrow" style="display: none;"></div>
            </div>
            <div>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAllBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6C80qAAAAMXRSTlMAwIBAF595YekutgMT/PBXDOWmvQjbb8YmqpKGO9+yi2lJNCDW0M1QQxv2mn90FT6X2la6EAAAAtpJREFUeNrt2ulyokAUhuGjxhVZFFBc4q7Zkzn3f3NTEYFiHNruDEwdku/5h1UW9VZvP2gCAAAAAAAAAAAAgBvuFquGNH7bJVMth0UakxlvxEJtyEiXpQrJyJzFCshEm8W6Q4gwPz3kpSXEv4Z0SAiEICSGEIQgRA0hCEGIGkIQghA1hCAEIWoIQQhC1BCCEISoIQQhCFFDCEIQolaHkOG2+/baLNRx+xYpBI/uRPH31+7O+x8hQXdg8y3Pfieiv9uOn/kW+7T+qDjEm/RYj/0ypCuWe2BNflRlyD5kfc7D1aTyWZ/drC6k32Mj6/xaeT+yEd+rKGTvsKF2bjwObOgUVBLihWxsQpkVGxtXEjJmc/aOEhP+gk0FIX3+iml6+Dj8BY5XfsiUM6N2U2ERcibZutaccWZNlQZnFqWHRJwKXYvU3B4nZnRmOVnGxCO13YkTo9JDOrldUSW/wT3H0Y+cCPd0k3fkRL/kkGxm9QLS4HLiMX9r1Y5IQ2Sn7y87ZJT9oOWQ33hm6VQzfP+47BBORKRlnS7X/IC6REYj6pcc8s4J0tPJn+73fLEjHdmaOpQc8pTOcdIzyc+NUbZ4tSz54h4h3yTkfdk6G/xx79dNQ1p65ulqPT+mJ2S3pWWTnohX934fzo8fkUXFnhpcH06XigT3XCuFJQuuF8crCJlyzSwLQnpcM12ECPNzQk4N0RztkD6JNkCIMAiRBiHSIEQahEiDEGkQIg1CpEGINAiRBiHSIEQahEiDEGn0Q341RQt/3veRukCINEUhIdfMQ0HIjGtmXxCys7lWxlRkW6tV0g6o0HCzasSmnGjIwInp+dGfL0nLkBMWiXB9gw4hRhCCEISoIQQhCFFDCEIQooYQhCBEDSEI+e4hHl/YQkJsvvDIzIhjR5LhyLERGVpw7I1keOPYmgxZY/40Jynm/GlmkTF34Ky2JMd25QxcAgAAAAAAAAAAAAAAgMRvbFFwdLfJMiUAAAAASUVORK5CYII="
              />
              <p>{{roomInfo.lodgeUnit[0].bedInfo}}</p>
            </div>
          </div>
          <div class="baseInfoBar_explain">
            <p>整套30平米 1室1卫1厨1阳台</p>
            <!---->
            <!---->
          </div>
        </div>
        <img
          id="headImageUrl"
          class="img_fd"
          data-src="//image.xiaozhustatic1.com/roundcrop/0/00,154,154,1,80,2/23,0,78,2988,329,329,b5bead56.jpg"
          src="//image.xiaozhustatic1.com/roundcrop/0/00,154,154,1,80,2/23,0,78,2988,329,329,b5bead56.jpg"
          lazy="loaded"
        />
        <p class="fd_name bold">{{roomInfo.landlordName}}</p>
        <p class="span_999">
          <span class="realIdentity">已实名认证</span>
        </p>
        <!-- 房间描述 -->
        <div class="infor_colunm">
          <p class="p_left">
            <span class="title_16">房间描述</span>
          </p>
          <div>
            <!---->
            <p class="descri_detail_short">这是房间描述</p>
          </div>
          <br />
          <!-- <p class="checkMoreDescri pink">
            <span>
              展开
              <i class="iconfont rotate90 icon_arrow"></i>
            </span>
          </p>-->
        </div>
        <!-- 房客点评 -->
        <div class="infor_colunm">
          <p class="p_left">
            <span class="title_16">房客点评</span>
          </p>
        </div>
        <!-- 房源位置 -->
        <div class="infor_colunm">
          <p class="p_left">
            <span class="title_16">房源位置</span>
          </p>
        </div>
        <!-- 可租日期 -->
        <div class="infor_colunm">
          <p class="p_left">
            <span class="title_16">可租日期</span>
          </p>
        </div>
        <!-- 配套设备 -->
        <div class="infor_colunm">
          <p class="p_left">
            <span class="title_16">配套设备</span>
          </p>
        </div>
        <!-- 交易规则 -->
        <div class="infor_colunm">
          <p class="p_left">
            <span class="title_16">交易规则</span>
          </p>
        </div>
        <!-- 入住贴士 -->
        <div class="infor_colunm">
          <p class="p_left">
            <span class="title_16">入住贴士</span>
          </p>
        </div>
        <!-- 退订规则 -->
        <div class="infor_colunm">
          <p class="p_left">
            <span class="title_16">退订规则</span>
          </p>
        </div>
        <!-- 猜你喜欢 -->
        <div class="infor_colunm">
          <p class="p_left">
            <span class="title_16">猜你喜欢</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 页面底部固定的预定按钮 -->
    <div class="order_btn" style="position: fixed;">
      <div class="order_btn_collect">
        <i class="iconfont icon-xihuan"></i>
      </div>
      <div class="order_btn_chat">
        <i class="iconfont icon-fenxiang"></i>
      </div>
      <div class="order_btn_info">
        <!---->
        <p class="button_price">¥{{roomInfo.lodgeUnit[0].showPriceV2.showPrice}}</p>
       
      </div>
      <div class="order_btn_submit">立即预订</div>
    </div>
  </div>
</template>

<script>
import Download from "../../components/Download";
import { getRoomDetail, getActivities } from "../../api/result";
export default {
  data() {
    return {
      roomInfo: {},
      activities: {},
      room: {
        landlordId: 39141171201,
        offset: 0,
        length: 5,
        onlyLodgeunit: false,
        timestamp: 1576246806174
      },
      acitivity: {
        luId: 129890468703,
        timestamp: 1576309346261
      }
    };
  },
  components: {
    Download
  },
  async created() {
    let params = {
      landlordId: this.$store.state.ids.landlordId,
      offset: 0,
      length: 5,
      onlyLodgeunit: false,
      timestamp: 1576246806174
    };
    let acitivity = {
      luId: this.$store.state.ids.luid,
      timestamp: 1576309346261
    };
    let rs = await getRoomDetail(params);
    this.roomInfo = rs.data.content;
    console.log(this.roomInfo);
    let actrs = await getActivities(acitivity);
    this.activities = actrs.data;
    console.log(this.activities);
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/style/mixin.scss";
.detail-container {
  .detail-main {
    .detail-title {
      line-height: 50px;
      display: flex;
      padding: 0 15px;
      h1 {
        flex: 1;
        text-align: center;
        color: #333;
        font-weight: 700;
      }
      i {
        display: block;
        margin: 0 5px;
      }
    }
    .detail-imgs {
      width: 375px;
      img {
        width: 100%;
        height: 280px;
      }
    }
    .detail-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 5px 15px 20px 15px;
      @include border_1px(#e0e0e0);
      .title {
        color: #323232;
        font-size: 22px;
        line-height: 30px;
      }
      .price {
        padding: 7px 0 0;
        font-size: 12px;
        color: #212121;
        width: 100%;
        .num {
          font-size: 20px;
          color: #000;
        }
        .txt {
          color: #757575;
        }
        .show_price_v2 {
          font-size: 10px;
          color: #000;
        }
      }
      .detail_allAct {
        width: 100%;
        padding-top: 10px;
        height: 20px;
        .activity_icon_p {
          background-color: #ff3e82;
          color: #fff;
          display: inline-block;
          height: 16px;
          line-height: 16px;
          text-align: center;
          vertical-align: middle;
          margin-top: -2px;
          border-radius: 2px;
          font-size: 10px;
          padding: 0 5px;
        }
        .activity_info2 {
          line-height: 19px;
          margin-left: 10px;
          font-size: 12px;
          margin-right: 10px;
          margin-top: -3px;
          display: inline-block;
          vertical-align: middle;
          color: #212121;
          width: 60%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .allPromotionIcon {
          width: 20px;
          vertical-align: middle;
          margin-left: 10px;
          float: right;
        }
      }
      // 房间信息
      .baseInfoBar {
        margin: 20px 0;
        width: 100%;
        background: #ececec;
        border-radius: 3px;

        .baseInfoBar_explain {
          text-align: center;
          padding: 15px 0;
          p {
            line-height: 20px;
          }
        }

        .baseInfoBar_threeIcon {
          background-color: #f5f5f5;
          height: 90px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          display: -webkit-flex;
          font-weight: 600;
          text-align: center;
          color: #000;
          > div {
            -webkit-box-flex: 1;
            -webkit-flex: 1 0 auto;
            -ms-flex: 1 0 auto;
            flex: 1 0 auto;
            padding-top: 15px;
            position: relative;
          }
          img {
            width: 40px;
          }
        }
      }
      // 房东头像
      .img_fd {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        -webkit-border-radius: 30px;
      }
      //房东姓名
      .fd_name {
        display: block;
        font-size: 18px;
        color: #333;
        padding: 10px 0 3px;
      }
      //实名认证
      .realIdentity {
        font-size: 13px;
        color: #212121;
      }
      //房间描述
      .infor_colunm {
        overflow: hidden;
        width: 100%;
        border-top: 1px solid #eee;
        padding: 15px 0;
        -webkit-overflow-scrolling: touch;
        @include border_1px(#e0e0e0);
        .p_left {
          font-size: 14px;
          line-height: 23px;
          margin-bottom: 10px;
          position: relative;
          .title_16 {
            font-size: 22px;
            color: #333;
            display: block;
            margin-bottom: 10px;
            font-weight: 600;
            margin-top: 10px;
          }
        }
        .descri_detail_short {
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 5;
          overflow: hidden;
          font-size: 14px;
          line-height: 25px;
        }
      }
    }
  }
  // 页面底部固定的预定按钮
  .order_btn {
    height:50px;
    background-color: #fff;
    color: #000;
    bottom: 0;
    width: 100%;
    border-top:1px solid #e0e0e0;
    box-shadow: 0 -2px 8px #eee;
    z-index: 100;
    i {
      display: inline-block;
      transform: scale(1.4);
      line-height: 38px;
    }
    .order_btn_collect {
      border:1px solid #e0e0e0;
      border-radius: 50%;
      width:38px;
      height: 38px;
      margin-left:15px;
      text-align: center;
    }
    .order_btn_chat {
      border:1px solid #e0e0e0;
      border-radius: 50%;
      display: inline-block;
      font-size:16px;
      width: 38px;
      height: 38px;
      margin-left: 10px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
    }
    .order_btn_info {
      position: absolute;
      left: 50%;
      top: 55%;
      transform: translate(-50%, -50%);
      .button_price {
        font-size:20px;
        text-align: center;
      }
      .button_count {
        color: #757575 !important;
        font-size: 12px;
        text-align: center;
      }
    }
    .order_btn_collect,
    .order_btn_submit {
      display: inline-block;
      font-size:16px;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
    .order_btn_submit {
      background-color: #ff4081;
      border-radius: 30px;
      color: #fff;
      font-weight: 500;
      padding: 9px 11px 6px 11px;
      float: right;
      margin-right: 15px;
    }
  }
}
.download-container {
  @include border_1px(#e0e0e0);
}
</style>