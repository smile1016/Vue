import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否显示下载app
    showDownload: true,
    city:{
      id:'1',
      name:'北京'
    },
    // historyCities:[]
  },
  getters:{
    getCityName(state){
      return state.city.name;
    }
  },
  mutations: {
    UPDATE_DOWN_STATE(state, option) {
      state.showDownload = option;
    },
    // 更新城市
    UPDATE_CITY(state,city){
      state.city = city;
      // 判断历史城市的唯一性
      // let rs = false;
      // state.historyCities.forEach((item)=>{
      //   if(item.id === city.id){
      //     rs = true
      //   }
      // })
      // if(!rs){
      //   // !rs表示原数组没有该城市，push进去
      //   state.historyCities.push(city);
      // }
    }
  },
  actions: {
  },
  modules: {
  }
})
