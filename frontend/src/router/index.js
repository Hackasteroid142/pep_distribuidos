import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Permiso from '../views/Permiso.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/permiso',
    name: 'Permiso',
    component: Permiso
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
