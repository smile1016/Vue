import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'
import City from '../views/index/components/City.vue'
import Date from '../views/index/components/Date.vue'

import Inside from '../views/index/components/Inside.vue'
import Outside from '../views/index/components/Outside.vue'

import Result from '../views/resultlist/result.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    component: Index,
    children: [

    ]
  },
  {
    path: '/city',
    component: City,
    redirect:'/city/inside',
    children: [{
      path: 'inside',
      component: Inside
    }, {
      path: 'outside',
      component: Outside
    }]
  },
  {
    path: '/calendarPage',
    component: Date
  },
  {
    path:'/result',
    component:Result
  }
]

const router = new VueRouter({
  routes
})

export default router