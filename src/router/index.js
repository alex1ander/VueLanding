import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import PrivacyPolicy from '@/pages/PrivacyPolicy.vue'

const routes = [
  {
    path: '/:lang(ua|ru|en)?',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/:lang(ua|ru|en)/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/ua',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // При возврате назад — позиция прокрутки сохраняется
      return savedPosition
    } else if (to.hash) {
      // Плавно скроллим к якорю, если он есть
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      // По умолчанию скроллим вверх
      return { top: 0 }
    }
  }
})

export default router
