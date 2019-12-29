import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import { Message } from 'element-ui'
Vue.prototype.$message = Message

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/homePage.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue')
      },
      {
        path: '/allplane',
        name: 'allplane',
        component: () => import('../views/allplane.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/order.vue')
      },
      {
        path: '/book',
        name: 'book',
        component: () => import('../views/book.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const whiteList = ['/', '/login', '/home', '/allplane'] // todo
  console.log(to.path)
  if (whiteList.indexOf(to.path) > -1) {
    next()
  } else {
    const token = localStorage.getItem('token')
    if (!token) {
      Message.error('请登陆后进行操作')
      setTimeout(function () {
        next({ path: '/login' })
      }, 1000)
    } else {
      next()
    }
  }
})

export default router
