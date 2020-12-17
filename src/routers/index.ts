import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [
  {
    path: '/list',
    component: () => import('../views/list.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
