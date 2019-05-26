import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Spinner from "../components/Spinner.vue"
import { EnchancedRouter } from 'vue-enchanced-router';
Vue.use(Router)

export default new EnchancedRouter({
  mode: 'history',
  loader: {
    spinnerComponent: Spinner,
    transition: "fade"
  },
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }]
})