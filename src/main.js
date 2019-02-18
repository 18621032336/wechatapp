import Vue from 'vue'
import App from './App.vue'
import request from './utils/request'

Vue.config.productionTip = false
Vue.use(request)
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
