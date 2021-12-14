import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/Home.vue')
  },
  {
    path: '/sub-vue',
    name: 'sub-vue',
    component: () => import('@/components/SubApp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router