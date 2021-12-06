import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/home.vue')
  },
  {
    path: '/sub-vue',
    name: 'sub-vue',
    component: () => import('../components/AsideMenu.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router