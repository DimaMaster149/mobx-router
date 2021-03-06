import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import CuriosityPhotos from '../views/CuriosityPhotos.vue'
import Spinner from "../components/Spinner.vue"
import { userLoader } from "./loaders/fetch-users"
import { curiosityPhotosLoader } from "./loaders/fetch-curiosity-photos"
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
      component: Home,
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
      component: User,
      loaders: [userLoader]
    },
    {
      path: '/mars',
      name: 'mars',
      component: CuriosityPhotos,
      loaders: [curiosityPhotosLoader]
    },
  ]
})