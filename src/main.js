// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import ElementUI from 'element-ui'
import axios from 'axios'
import store from './store/store'
import FastClick from 'fastclick'
import 'babel-polyfill'
import VueLazyLoad from 'vue-lazyload'
import MinstUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
FastClick.attach(document.body)
/* eslint-disable no-new */
Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.use(VueLazyLoad, {
  error: './static/error.png',
  loading: './static/loading.png'
})
Vue.use(MinstUI)

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
console.log(store.store.modules.chat.state.name)
