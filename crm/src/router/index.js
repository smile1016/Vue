import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/user/User.vue'
import Login from '../views/login/Login.vue'
import Statics from '../views/statics/Statics.vue'

import Counter from '../views/counter/Counter.vue'
Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/login',
    // component:Counter
  },
  {
    path: '/home',
    component: Home,
    meta: {
      id: 1,
      name: '应用管理',
      iconclass:'el-icon-user'
    },
    children: [{
        path: 'user',
        component: User,
        meta: {
          id: 1 - 1,
          name: '用户管理'
        },
      },
      {
        path: 'roles',
        // component:Roles
        meta: {
          id: 1 - 2,
          name: '角色管理',
        },
      },
    ]
  },
  {
    path: '/home',
    component: Home,

    meta: {
      id: 2,
      name: '日志管理',
      iconclass:'el-icon-menu'
    },
    children:[{
      path:'syslog',
      meta:{
        id:'2-1',
        name:'系统日志'
      }
    },
    {
      path:'log',
      meta:{
        id:'2-2',
        name:'管理员操作日志'
      }
    },
    {
      path:'userlog',
      meta:{
        id:'2-3',
        name:'用户使用日志'
      }
    },
  ]
  },
  {
    path: '/login',
    component: Login
  },

  // {
  //   path: '/static',
  //   component: Statics
  // },

]

const router = new VueRouter({
  routes
})

// 全局守卫做权限验证
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    if (sessionStorage.getItem('username')) {
      router.push('/home')
    } else {
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