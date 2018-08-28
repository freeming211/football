// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import promise from 'es6-promise'
promise.polyfill()

import FastClick from 'fastclick'
FastClick.attach(document.body)

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$http = axios
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// axios 配置
import 'common/js/http'

// 引入这个懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('common/img/default.jpg')
})


import 'common/css/style.css'

/* eslint-disable no-new */
Vue.config.devtools = true;
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
