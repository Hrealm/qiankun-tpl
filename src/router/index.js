import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: require('@/components/home')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router