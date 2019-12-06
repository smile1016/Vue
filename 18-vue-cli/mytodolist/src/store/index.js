import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num:1,
    datalist:[{id:1,name:'beijing'},{id:2,name:'qingdao'}]
  },
  mutations: {
    // 实现所有的增删改查
    UPDATE_LIST(state,list){
      state.datalist = list
    },
    DEL(state,id){
      state.datalist.forEach((item,index)=>{
        if(item.id==id){
          state.datalist.splice(index,1)
        }
      })
    },
    ADD(state,item){
      state.datalist.push(item)
    },
    //更新数据的编辑状态
    UPDATE_STATUS(state,obj){
      state.datalist.forEach((item,index)=>{
        if(item.id==obj.id){
          state.datalist[index]['idedit']=obj.status;
        }
      })
    }
  },
  actions: {
    // 异步数据请求 
    getlist(context){
      fetch('https://api.myjson.com/bins/1h8gwt').then((res)=>res.json()).then((result)=>{
        console.log(result)
        result.products.forEach((item)=>{
          item.isedit = false;
        })
        context.commit('UPDATE_LIST',result.products)
      })
    }
  },
  modules: {
  }
})
