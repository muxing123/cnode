import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import http from './http'

Vue.prototype.$axios = http
Vue.config.productionTip = false

// 响应拦截
axios.defaults.timeout = 10000 // 设置超时时间
// 过滤请求结果 只返回结果的data
axios.interceptors.response.use(
    response => {
      return response.data
    }, error => {
      return Promise.reject(error)
    })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
