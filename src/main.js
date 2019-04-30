import Vue from 'vue'
import App from './App.vue'
import './assets/fonts/iconfont.css'
import router from './router'
import store from './store'
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
