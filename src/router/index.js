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
      return savedPosition; // назад/вперёд — позиция сохраняется
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } 
    // Если меняется только параметр lang (путь остался тот же, кроме языка) — не скроллим
    else if (to.name === from.name && to.params.lang !== from.params.lang) {
      return false; // запрещаем менять скролл
    }
    else {
      return { top: 0 }; // иначе прокручиваем вверх
    }
  },
});


export default router
