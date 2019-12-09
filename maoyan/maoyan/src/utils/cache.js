import Vue from 'vue';

const KEY = "keywords";
const CITY = 'historyCities';


var cache = {
  add: function (keyword, val) {
    if (!keyword) {
      return;
    }

    let list = [];
    if (localStorage.getItem(KEY)) {
      list = JSON.parse(localStorage.getItem(KEY));
    }
    list.push(keyword);
    localStorage.setItem(KEY, JSON.stringify(list))
  },
  get: function () {
    return JSON.parse(localStorage.getItem(KEY))
  },
  del: function (key) {
    let list = JSON.parse(localStorage.getItem(KEY));
    list.splice(list.indexOf(key), 1);
    localStorage.setItem(KEY, JSON.stringify(list))
  },

  addCity: function (keyword, val) {
    if (!keyword) {
      return;
    }
    let list = [];
    if (localStorage.getItem(CITY)) {
      list = JSON.parse(localStorage.getItem(CITY));
    }
    list.push(keyword);
    localStorage.setItem(CITY, JSON.stringify(list))
  },

}

var maoyanPlugin = {
  install(vue) {
    vue.prototype.$cache = cache;
  }
}

Vue.use(maoyanPlugin);