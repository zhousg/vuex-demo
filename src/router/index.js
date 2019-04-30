import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Movie from '../components/Movie'
import Hot from '../components/Hot'
import Top from '../components/Top'
import Item from '../components/Item'

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/hot'},
    {path: '/hot', component: Hot},
    {path: '/movie', component: Movie},
    {path: '/top', component: Top},
    {path: '/item/:id', name: 'item', component: Item}
  ],
  linkExactActiveClass: 'active'
})

export default router
