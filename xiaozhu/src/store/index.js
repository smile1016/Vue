import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否显示下载app
    showDownload: true
  },
  mutations: {
    UPDATE_DOWN_STATE(state, option) {
      state.showDownload = option;
    }
  },
  actions: {
  },
  modules: {
  }
})
