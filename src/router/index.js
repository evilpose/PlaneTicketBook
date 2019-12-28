import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/homePage',
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
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
