import Vue from 'vue'
import VueRouter from 'vue-router'
import { TabLayout } from '../layouts'

import homeRouter from './home.router.js'
import vipRouter from './vip.router.js'
import myRouter from './my.router.js'

import Order from '../views/my/order'
import Wallet from '../views/my/wallet'

Vue.use(VueRouter)

const notFound = [
  {
    path: '*',
    // route level code-splitting
    // this generates a separate chunk (404.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
]
const routes = [
  {
    path: '/',
    redirect: '/home',
    component: TabLayout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue')
      },
      {
        path: '/vip',
        name: 'vip',
        meta: {
          title: '会员'
        },
        component: () => import(/* webpackChunkName: "vip" */ '../views/vip')
      },
      {
        path: '/friend',
        name: 'friend',
        meta: {
          title: '朋友'
        },
        component: () => import(/* webpackChunkName: "friend" */ '../views/friend')
      },
      {
        path: '/my',
        name: 'my',
        // redirect: '/my/order',
        meta: {
          title: '我的'
        },
        component: () => import(/* webpackChunkName: "friend" */ '../views/my')
        // children: [...myRouter]  // 再次嵌套路由
      }
    ]
  },
  ...notFound,
  ...homeRouter,
  ...vipRouter,
  ...myRouter
]

console.log('All router=', routes)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
