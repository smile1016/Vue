import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否显示下载app
    showDownload: true,
    city:{
      id:12,
      name:'北京'
    }
  },
  mutations: {
    UPDATE_DOWN_STATE(state, option) {
      state.showDownload = option;
    },
    UPDATE_CITY(state, city) {
      state.city = city;
    }
  },
  getters: {
    getCityName(state) {
      return state.city.name;
    }
  },
  actions: {
  },
  modules: {
  }
})
