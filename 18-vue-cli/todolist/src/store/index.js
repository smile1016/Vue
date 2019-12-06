import Vue from "vue";
import Vuex from "vuex";
import Product from '../store/modules/Product'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num:1,
    dateList:[{id:1,name:'beijing'},{id:2,name:'tianjin'}]
  },
  mutations: {
    // 所有的增删改查
    UPDATE_LIST(state,list){
      state.dateList = list
    },
    DEL(state,id){
      state.dateList.forEach((item,index)=>{
        if(item.id==id){
          state.dateList.splice(index,1)
        }
      })
    },
    ADD(state,item){
      state.dataList.push(item)
    },
    UPDATE_STATUS(state,obj){
      state.dateList.forEach((item,index)=>{
        if(item.id==obj.id){
          state.dateList[index]['isedit']=obj.status
        }
      })
    },
    UPDATE(state,obj){
      state.dateList.forEach((item,index)=>{
        if(item.id==obj.id){
          state.dateList[index]['name']=obj.name;
        }
      })
    }
  },
  actions: {
    // 异步数据请求
    getList(context){
      fetch('https://api.myjson.com/bins/1h8gwt').then((res)=>
        res.json()).then((result)=>{
          result.product.forEach((item)=>{
            item.isedit = false
          })
          context.commit('UPDATE_LIST',result.product)
        })
    }
  },
  modules: {
    Product
  }
});
