import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    updateCount(state, num) {
      state.count += num;
    }
  },
  actions: {
    updateCountAsycn({ commit }, num) {
      setTimeout(() => {
        commit('updateCount', num)
      }, 2000)
    }
  },
  modules: {
  }
})
