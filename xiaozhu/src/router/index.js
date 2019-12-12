import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index/Index.vue'
import City from '../views/index/components/City.vue'
import Date from '../views/index/components/Date.vue'

import Inside from '../views/index/components/Inside.vue'
import Outside from '../views/index/components/Outside.vue'

import Result from '../views/resultlist/result.vue'
import Search from '../views/resultlist/Search.vue'
import LocationArea from '../views/resultlist/LocationArea.vue'
import MoreSelect from '../views/resultlist/MoreSelect.vue'
import RecommendSort from '../views/resultlist/RecommendSort.vue'

import Detail from '../views/detail/Detail.vue'
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
    component:Result,
  },
  {
    path:'/result/search',
    component:Search,
  },
  {
    path:'/result/locationarea',
    component:LocationArea
  },
  {
    path:'/result/moreselect',
    component:MoreSelect
  },
  {
    path:'/result/recommendsort',
    component:RecommendSort
  },
  {
    path:'/detail',
    component:Detail
  },
]

const router = new VueRouter({
  routes
})

export default router