import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login/Login.vue'
import User from '../views/user/User.vue'
import Statics from '../views/statics/Statics.vue'
// import Counter from '../views/counter/Counter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login',
    // component: Counter
  },
  {
    path: '/home',
    component: Home,
    redirect: '/home/statics',
    meta: {
      name: "应用管理",
      id: '1',
      iconclass: 'el-icon-s-custom'
    },
    children: [
      {
        path: '/home/statics', component: Statics
      },
      {
        path: '/home/user', component: User,
        meta: {
          name: '用户管理',
          id: '1-1'
        }
      },
      {
        path: '/home/roles',
        meta: {
          name: '角色管理',
          id: '1-2'
        },
      }

    ]
  },
  {
    path: '/home',
    component: Home,
    meta: {
      name: "日志管理",
      id: '2',
      iconclass: 'el-icon-menu'
    },
    children: [{
      path: 'syslog',
      meta: {
        name: '系统日志',
        id: '2-1'
      }
    },
    {
      path: 'log',
      meta: {
        name: '管理员操作日志',
        id: '2-2'
      }
    },
    {
      path: 'userlog',
      meta: {
        name: '用户使用日志',
        id: '2-3'
      }
    }

    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

const orginVueRouter = VueRouter.prototype.push;

VueRouter.prototype.push = function (location, onComplete) {
  debugger;
  orginVueRouter.call(this, location, onComplete);
}

router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    if (sessionStorage.getItem("username")) {
      router.push('/home');
    } else {
      next();
    }
    return;
  }

  //加强版本：调用后端接口 + token
  if (sessionStorage.getItem("username")) {
    next();
  } else {
    router.push('/login');
  }
})

export default router
