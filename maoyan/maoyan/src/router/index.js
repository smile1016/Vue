import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Movie from '../views/movie/Movie.vue'
import HotShow from '../views/movie/components/HotShow.vue'
import ComingSoon from '../views/movie/components/ComingSoon.vue'
import Theater from '../views/theater/Theater.vue'
import Profile from '../views/profile/Profile.vue'
Vue.use(VueRouter)
import City from '../components/City.vue'
import Search from '../components/Search.vue'
import Detail from '../views/detail/Detail.vue'

const routes = [{
    path: '',
    redirect: "/index/movie/hotshow"
  },
  {
    path: '/index',
    component: Index,
    children: [{
        path: 'movie',
        component: Movie,
        redirect:'/index/movie/hotshow',
        children: [{
            path: 'hotshow',
            component: HotShow,
          },
          {
            path: 'comingsoon',
            component: ComingSoon
          }
        ]
      },
      {
        path: 'theater',
        component: Theater
      },
      {
        path: 'profile',
        component: Profile
      },
    ]
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/search',
    component: Search
  },
  {
    path:'detail',
    name:'detail',
    component:Detail
  }


]

const router = new VueRouter({
  routes
})

export default router