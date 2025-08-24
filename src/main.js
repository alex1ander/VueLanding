import { createApp } from 'vue';
import { createI18n } from 'vue-i18n'; 
import App from './App.vue';
import './assets/scss/main.scss';

import router from './router/index.js';

import ua from './i18n/ua';
import ru from './i18n/ru';
import en from './i18n/en';

import { initSmoothScroll } from '@/assets/js/script.js';

// Инициализация vue-i18n
const i18n = createI18n({
  legacy: false,
  locale: 'ua', // дефолтная локаль
  messages: { ua, ru, en },
});

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
});

// Определяем язык по пути
const pathLocale = window.location.pathname.split('/')[1];
let lang = 'ua';
if (['ru', 'en'].includes(pathLocale)) {
  lang = pathLocale;
}
i18n.global.locale.value = lang;

// Создаем и монтируем приложение
const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount('#app');

// ⚡ событие для Prerender SPA Plugin / Puppeteer
if (process.env.NODE_ENV === 'production') {
  // Ждем полной загрузки всех компонентов и i18n
  app.config.globalProperties.$nextTick(() => {
    document.dispatchEvent(new Event('render-event'));
  });
}
