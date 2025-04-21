import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'

export const routes = [
  {
    path: '/:lang',
    name: 'Home',
    component: App,
    meta: { locale: 'ua' }, // Установим язык по умолчанию
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
