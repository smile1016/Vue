import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'
import City from '../views/index/components/City.vue'
import Date from '../views/index/components/Date.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children:[
      
    ]
  },
  {
    path:'/city',
    component:City
  },
  {
    path:'/calendarPage',
    component:Date
  }
  
]

const router = new VueRouter({
  routes
})

export default router
