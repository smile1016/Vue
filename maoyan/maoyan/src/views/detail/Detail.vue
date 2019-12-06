<template>
  <div>
    <HeaderBar>
      <template #back>
        <i class="icon-back" @click="$router.go(-1)"></i>
      </template>
    </HeaderBar>
    <!-- detail {{$route.params}} -->
    <div class="movie-detail" data-bid="dp_wx_buy_movie">
      <div class="movie-filter"></div>
      <div class="poster-bg" style="background-image:url(//p0.meituan.net/71.100/movie/dd488887e8a1c8ab4723eee4026d25aa1973142.jpg)"></div>
      <div class="detail box-flex">
        <div class="poster">
          <img src="//p0.meituan.net/148.208/movie/dd488887e8a1c8ab4723eee4026d25aa1973142.jpg">
        </div>

      </div>

      <div class="arrow-g">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC">
      </div>

    </div>

    <div>

      <div id="showDays">
        <ul id="timeline" :style="{'left':toleft+'px'}" class="mb-line-b">

          <li v-for="(d,index) in showDays.dates" @click="handleSelect(index,$event)" :key="index" class="showDay" :class="index===current?'chosen':''">
            {{d.date}}
          </li>

        </ul>
      </div>
    </div>

  </div>
</template>
<script>
import HeaderBar from '../../components/HeaderBar'
export default {
  data() {
    return {
      current: 0,
      toleft: 0,
      showDays: {
        dates: [
          {
            date: "2019-12-04",
            isPredate: 0
          },
          {
            date: "2019-12-05",
            isPredate: 0
          },
          {
            date: "2019-12-06",
            isPredate: 0
          },
          {
            date: "2019-12-07",
            isPredate: 0
          },
          {
            date: "2019-12-08",
            isPredate: 0
          },
          {
            date: "2019-12-09",
            isPredate: 0
          },
          {
            date: "2019-12-10",
            isPredate: 0
          },
          {
            date: "2019-12-11",
            isPredate: 0
          }
        ]
      }
    }
  },
  methods: {
    handleSelect(index, event) {
      this.current = index
      let x = event.pageX
      console.log("x:", x)
      if (x < 115 && index > 0) {
        this.toleft += 115
      } else if (x > 230 && index < this.showDays.dates.length - 1) {
        this.toleft -= 115
      }
    }
  },
  components: {
    HeaderBar
  }
}
</script>



<style lang="scss" scoped>
.mb-line-b {
  transition: all 1s;
  position: absolute;
  top: 0px;
}

.movie-detail {
  height: 188px;
  position: relative;
  cursor: pointer;
}

.movie-detail .movie-filter {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #333;
}

.movie-detail .poster-bg {
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  position: absolute;
  -webkit-filter: blur(1.2rem);
  filter: blur(1.2rem);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.55;
}

.movie-detail .detail {
  height: 150px;
  padding: 19px 30px 19px 15px;
}

.movie-detail .detail .poster img {
  width: 110px;
  height: 150px;
  box-sizing: border-box;
}

.movie-detail .detail .content {
  overflow-x: hidden;
  margin-left: 12.5px;
  line-height: 1;
  color: #fff;
}

.movie-detail .detail .content .title {
  font-size: 20px;
  margin-top: 2px;
  font-weight: 700;
  overflow: hidden;
}

.movie-detail .detail .content .score {
  font-size: 18px;
  font-weight: 700;
  color: #fc0;
  margin-top: 11px;
}

.movie-detail .detail .content .score span.no-score {
  font-size: 12px;
  color: #fff;
  opacity: 0.8;
}

.movie-detail .detail .content .title-en-name {
  opacity: 1;
}

.movie-detail .detail .content .pubDesc,
.movie-detail .detail .content .snum,
.movie-detail .detail .content .src,
.movie-detail .detail .content .title-en-name,
.movie-detail .detail .content .type {
  margin-top: 10px;
  font-size: 12px;
  color: #fff;
  opacity: 0.8;
}

.movie-detail .detail .content .type > span {
  vertical-align: top;
}

.movie-detail .detail .content .type .type-group {
  display: inline-block;
  width: 42px;
  opacity: 0.85;
}

.movie-detail .arrow-g {
  position: absolute;
  width: 10px;
  right: 15px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

#showDays {
  width: 100%;
  height: 45px;
  overflow-x: scroll;
  background-color: #fff;
  position: relative;
}

#showDays #timeline {
  overflow-x: scroll;
  padding: 0;
  margin: 0;
  height: 45px;
  white-space: nowrap;
}

#showDays #timeline .showDay {
  position: relative;
  display: inline-block;
  width: 115px;
  line-height: 43px;
  margin-left: 4.5px;
  font-size: 14px;
  text-align: center;
  list-style: none;
  color: #666;
}

#showDays #timeline .showDay.predateShowDay {
  width: auto;
  padding-left: 10px;
}

#showDays #timeline .showDay.predateShowDay .isPredate {
  float: right;
  margin: 14px 3px;
  width: 26px;
  height: 15px;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAeCAYAAABjTz27AAAAAXNSR0IArs4c6QAABJ9JREFUWAndmH+IlEUYx7+zu6mdldZF2VUGpUVC9gMJlaIuI7vzCBSJ/qioQ4ugwOCMiAr/sMgMCqs/+qtIrqBEjDw1ME0sEbI/hCBDKIhS+0FJnHdl502fZ3bf9d19971972492gZm5/k1z8x3nmfmnR0niv9Ul2pQr8jpNnldYrKmKU5HmfMena0et0g/uQDmLx1A+JoKetfdjUETFb+DAAzrAeb/pKZonvN9eg/moOvSuibCkZiq36anwHFDDs3tFpmERbMJctoYsPit4PqfFMNiERpT8V550rXLf6LLx+SgTif2xizS6K46Zgn1mAHpK00mth9rSHcmvDZCMKx72ey9o3VVGG2HhL3XAkL9T0IeCaZqi2tXv7F+u5bqlB6NVKF1OuKWqLtCNg5m/ICklYxvtXYZ1CwUARARvaL0rSseQk43ojO9SN8Z6O8xOhSvm2mnsFiPlCTWHOY03h3jE+T4ATl1s8JvJzynCbz6mVSIEnvkGUAUo5PXbNL3LQD/QtdTyM+hbYFfE1x5tUJ/AD0ioLHvoTDKGfhxWsgCtSmnl/D+u9GBd/o8y2iZIsRKzmfFbq1weEyTAu/VQbpcWKErMj8ykfdryM+oKBMgZnAHdS31WHk2LlB2TbqlVMsqiPNZgC9p/7OA2LUaJPfb4rNOo9nIm9HVipp1mUpEXw59h4l8cWEC24ifrBFqxFhFH05nQRTT13HLl042zrm4xU108TpOpBfYsNEpR8Su44R7IkzF61kifJyMsOhNh361NMXZyNqwXc3eXF+SJZrRACrg7OGEh1oC+95IJ2qpaspymsatoBXdLupMgMxk8tdDF6AX09pePVxKz6uhU0s2QD7cBIYY5I1UT9UKpy+qRWm86whH8qJIT1SuhDYAe2gHiEhnpKvXZgPUote5vqSGuXoQLq45bQ97pVqVlX8aQ/vT2Q2obwHYXu+GEDmu+2H1B/haD+gb8v1x60Q7hwF6IgfwV5GKm6iWZsWyTTtGiGYLtmusYlOOStSV+55FYyVLshYQ32HTC6h1LFKm87AuIP2s53B6kfL6KAzqdA3teoBcFvg83ybPJLzuC3zxpw9+BcCXxWQRORliaana0X4oUuBzPpeeXvhe18lN3sokvYCvm9SnDSHyQTjCD4P6NDW6a1nJk7TPRzbwM6wP9f6YzCJ0sMyTcvD7sfnN7wybPaiY8Cpkv0Z28dYig+5P+u3y+3jyiBVkD6Ebom6u1sXMhL7OHzynN+lwRBec3j9sULstfE9tLztz+pBlmcuE55jMOc6sglaQJOfp79hbRZ5UzOmxcj8Iv1sF+m0gMn2we3WxutxC3qBihTHfod9y/HXqD+2kz/SYuoJMTbkQXqd9OOmpHgDZXqods8WS11aIHwBlR20obrG+hngRu4GSSMgOkUqbIt5aDhs7PVuZcI+WAGbeafsKu05twa4DWb/OHeGTYGGKd8xCZ92gWXw10qZ+yqWMRkqNehFSXDVcnCMljobHuoa7nliHAQNYbA99Fl4eJ3b8xo82pAcNS4Hn09XiKZiTRmzMjU35FGxgnFaFp2BbqqZ/rLcsIzD2WP8v1uNyTE/IErcAAAAASUVORK5CYII=);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

#showDays #timeline .showDay.chosen {
  border-bottom: 2px solid #f03d37;
  color: #f03d37;
}
</style>

