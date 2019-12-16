import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否显示下载app
    showDownload: true,
    city:{
      id:12,
      name:'北京',
    },
   ids:{
    luid:'',
    landlordId:'',
   },
    keyword:''
  },
  mutations: {
    UPDATE_DOWN_STATE(state, option) {
      state.showDownload = option;
    },
    UPDATE_CITY(state, city) {
      state.city = city;
    },
    UPDATE_KEYWORD(state, keyword) {
      state.keyword = keyword;
    },
    UPDATE_IDS(state, ids) {
      state.ids = ids;
      
    },
    
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
