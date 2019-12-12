<template>
  <div class="locationarea-container">
    <div class="close">
      <i @click="$router.go(-1)" class="iconfont icon-close"></i>
    </div>
    <div class="locationul">
        <ul class="ulparent">
            <li>
                <i class="iconfont">&#xe648;</i>
                <span>行政区域</span>
            </li>
            <li>
                <i class="iconfont">&#xe7c1;</i>
                <span>车站机场</span>
            </li>
            <li>
                <i class="iconfont">&#xe60a;</i>
                <span>地铁</span>
            </li>
            <li>
                <i class="iconfont">&#xe6cd;</i>
                <span>商圈</span>
            </li>
            <li>
                <i class="iconfont">&#xe63f;</i>
                <span>景点</span>
            </li>
            <li>
                <i class="iconfont">&#xe6ce;</i>
                <span>高校</span>
            </li>
            <li>
                <i class="iconfont">&#xe7c1;</i>
                <span>医院</span>
            </li>
        </ul>
    </div>
    <div class="footer-wrap">
        <div class="footer-btn">
            不限地点
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/style/mixin.scss";
@font-face {
  font-family: 'iconfont';
  src: url('../../assets/font_position/iconfont.eot');
  src: url('../../assets/font_position/iconfont.eot?#iefix') format('embedded-opentype'),
      url('../../assets/font_position/iconfont.woff2') format('woff2'),
      url('../../assets/font_position/iconfont.woff') format('woff'),
      url('../../assets/font_position/iconfont.ttf') format('truetype'),
      url('../../assets/font_position/iconfont.svg#iconfont') format('svg');
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
  .locationul{
      .ulparent{
          display: flex;
          flex-direction: column;
          
          >li{
              i{
                  font-size: 22px;
                  margin-right: 4px;
              }
              line-height: 60px;
              margin-left: 15px;
              @include border_1px(#e0e0e0);
          }
      }
  }
  .footer-wrap{
      .footer-btn{
          text-align: center;
          position: absolute;
          bottom: 20px;
          border: 1px solid rgba(33,33,33,.2);
          border-radius: 20px;
          margin: 0 20px;
          width: 90%;
          line-height: 40px;
      }
  }
}

</style>