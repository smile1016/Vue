import Vue from "vue";
import App from "./views/TodoList.vue";
import Store from "./store/index";



Vue.config.productionTip = false;

new Vue({
  el:'#app',
  Store,
  render: h => h(App)
});
