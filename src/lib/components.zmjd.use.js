/**
 * zmjd组件库，统一注册文件
 * 当需要更多组件依赖时，在该文件加入即可
 */
import Vue from 'vue'
import {
  Button,
  Icon,
  Swipe,
  SwipeItem,
  Cell,
  Toast
} from 'zmjd-mobile'

Vue.use(Button)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Cell)

Vue.prototype.$toast = Toast
