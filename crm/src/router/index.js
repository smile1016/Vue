import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/user/User.vue'
import Login from '../views/login/Login.vue'
import Statics from '../views/statics/Statics.vue'
Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/login'
  },
  {
    path: '/home',
    component: Home,
    children: [{
        path: 'user',
        component: User
      },
      {
        path: 'roles',
        // component:Roles
      },
    ]
  },
  {
    path: '/login',
    component: Login
  },

  {
    path: '/static',
    component: Statics
  },

]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if(to.path ===  '/login'){
    if(sessionStorage.getItem('username')){
      router.push('/home')
    }else{
      next();
    }
    return;  
  }
  //加强版本：调用后端接口+token
  if (sessionStorage.getItem('username')) {
    next()
  } else {
    router.push('/login')

  }
})
export default router