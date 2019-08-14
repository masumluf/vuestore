// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

window.$ = window.jQuery = require('jquery')

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

Vue.config.productionTip = false
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import {
  routes
} from './router/index'

const router = new VueRouter({
  routes
})

import Vuex from 'vuex'
Vue.use(Vuex)
import {
  storeage
} from './store/index'

const store = new Vuex.Store(storeage)
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
