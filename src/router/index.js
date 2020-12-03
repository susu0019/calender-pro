import { createRouter, createWebHistory } from 'vue-router'
import Today from '../views/Today'
const routes = [
  {
    path: '/',
    name: 'today',
    component: Today
  },
  {
    path: '/tomorrow',
    name: 'tomorrow',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tomorrow.vue')
  },
  {
    path: '/week',
    name: 'week',
    component: () => import(/* webpackChunkName: "about" */ '../views/Week.vue')
  },
  {
    path: '/month',
    name: 'month',
    component: () => import(/* webpackChunkName: "about" */ '../views/Month.vue')
  },

  {
    path: '/year',
    name: 'year',
    component: () => import(/* webpackChunkName: "about" */ '../views/Year.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
