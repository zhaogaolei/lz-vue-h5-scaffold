import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/setRem'
import './permission'
import './assets/common.less'
// 引入zmjd组件
import './lib/components.zmjd.use'
// // 全部注册组件
// import zmjd from 'zmjd-mobile'
// Vue.use(zmjd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
