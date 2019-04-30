import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex)
import movieStore from './movieStore'
const store = new Vuex.Store({
  modules: {
    movieStore
  }
})
export default store
