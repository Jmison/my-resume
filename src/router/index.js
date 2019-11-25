import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
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
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
  },
  {
    path: '/projects',
    name: 'projects',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Projects.vue')
    },
  },
  {
    path: '/experience',
    name: 'experience',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Experience.vue')
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    },
  },
  {
    path: '/home',
    name: 'home',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../components/Home.vue')
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
