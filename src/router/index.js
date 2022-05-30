/* eslint-disable prefer-const */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Search from '@/views/Search'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Detail from '@/views/Detail'
import AddCartSuccess from '@/views/AddCartSuccess'
import ShopCart from '@/views/ShopCart'
import Trade from '@/views/Trade'
import Pay from '@/views/Pay'
import Upload from '@/views/Upload'
import userInfo from '@/views/userInfo/index.vue'
import tradeList from '@/views/userInfo/tradeList.vue'
import verifyGoods from '@/views/userInfo/verifyGoods.vue'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/userInfo',
    component: userInfo,
    children: [
      { path: 'tradeList', component: tradeList },
      { path: 'verifyGoods', component: verifyGoods }
    ],
    meta: { show: true }
  },
  {
    path: '/upload',
    component: Upload,
    meta: { show: true }
  },
  {
    path: '/pay',
    component: Pay,
    meta: { show: true }
  },
  {
    path: '/trade',
    component: Trade,
    meta: { show: true }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: { show: true }
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: { show: true }
  },
  {
    path: '/detail/:skuid',
    component: Detail,
    meta: { show: true }
  },
  {
    path: '/home',
    component: Home,
    meta: { show: true }
  },
  {
    path: '/search/:keyword?',
    component: Search,
    meta: { show: true },
    name: 'search'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    // 返回的y=0,代表的滚动条在最上方
    return { y: 0 }
  }
})
// 全局守卫
router.beforeEach(async (to, from, next) => {
  next()
  let token = store.state.user.token
  let name = store.state.user.userInfo.name
  if (token) {
    if (name) {
      next()
    } else {
      try {
        // 保证每次刷新用户信息都在
        await store.dispatch('GetUserInfo')
        next()
      } catch (error) {
        await store.dispatch('userLogout')
        next('/login')
      }
    }
  } else {
    next()
  }
})
export default router
