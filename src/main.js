import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import store from './store'
// 注册全局组件
import Nav from '@/components/Nav'
import Pagination from '@/components/Pagination'
import Carsousel from '@/components/Carousel'

import '@/mock/mockServe.js'
// 轮播图
import 'swiper/css/swiper.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
// 全局组件 第一个参数：组件名字 第二个参数：组件
Vue.component(Nav.name, Nav)
Vue.component(Carsousel.name, Carsousel)
Vue.component(Pagination.name, Pagination)
new Vue({
  router,
  store,
  render: h => h(App),
  // 全局事件总线配置
  beforeCreate () {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
