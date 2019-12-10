<template>
  <div class="calendar_box">
    <div class="year_wrap">
      <span>{{year}}.{{month}}</span>
    </div>
    <div class="week_wrap">
      <div
        class="weekday"
        v-for="(item,index) in ['日','一','二','三','四','五','六']"
        :key="index"
      >{{item}}</div>
    </div>
    <div class="days">
      <div class="day" v-for="(item,index) in 42" :data-id="index" :key="index">
        <!-- {{item}}
        -->
        <!-- <div v-if="item-beginDay() >0 && curDay()-(item-beginDay())>=0">{{item-beginDay()}}</div> -->
        <div
          @click="handleDate"
          v-show="Datejust(item)"
          :class="style==DateStylejust(item-beginDay())?'ago':''"
        >{{item-beginDay()}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      year: null,
      month: null,
      day: null,
      style: true,

      clickitem: 0,
      clickcount: 0,
      starttime: "",
      endtime: ""
    };
  },
  created() {
    this.getInitDate();
  },
  methods: {
    // 初始化日期
    getInitDate() {
      const date = new Date();
      this.year = date.getFullYear();
      this.month = date.getMonth() + 1;
      this.day = date.getDate();
    },
    // 该月1号是周几
    beginDay() {
      return new Date(this.year, this.month - 1, 1).getDay();
    },
    // 该月有几天
    curDay() {
      return new Date(this.year, this.month, 0).getDate();
    },
    Datejust(item) {
      return (
        item - this.beginDay() > 0 &&
        this.curDay() - (item - this.beginDay()) >= 0
      );
    },
    DateStylejust(item) {
      return item - this.day < 0;
    },
    handleDate(e) {
      this.clickcount++;
      this.clickitem = e.path[1].attributes[1].value;
      if (this.clickcount == 1) {
        this.starttime = this.clickitem;
        this.endtime = "";
        e.target.className = "checkin";
            e.target.innerHTML = "入住";
        
      } else if(this.clickcount ==2) {
        this.endtime = this.clickitem;
        if (this.starttime > this.endtime) {
          this.endtime = this.starttime;
          this.starttime = this.clickitem;
        }   
         if(this.starttime<this.endtime){
            e.target.className = "checkin";
            e.target.innerHTML = "离开";
        }else{
            e.target.className = "checkin";
            e.target.innerHTML = "入住";
        }
        this.clickcount =0;
      }
      
      console.log(this.clickcount,this.clickitem,this.clickcount,this.starttime,this.endtime);
     
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar_box {
  width: 340px;
  height: 265px;
  margin: 13px 20px 13px 15px;
  .year_wrap {
    text-align: center;
    line-height: 37px;
    font-size: 14px;
    color: #212121;
    font-weight: 400;
  }
  .week_wrap {
    display: flex;
    .weekday {
      flex: 1;
      line-height: 37px;
      color: #757575;
      text-align: center;
      font-size: 12px;
    }
  }
  .days {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    .day {
      width: 46px;
      line-height: 31px;
      text-align: center;
      color: #212121;
      font-size: 13px;
    }
    .ago {
      color: #999;
    }
    .checkin {
      background: #ff4081;
      color: #fff;
      border-radius: 5px;
    }
  }
}
</style>