
import Vue from 'vue'
import router from './router'
import { setDocumentTitle } from './utils/domUtil'
import zmDevice from './utils/native'

router.beforeEach((to, from, next) => {
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title}`))
  next()
})
