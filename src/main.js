import { createApp } from 'vue';
import { createI18n } from 'vue-i18n'; // Импортируем vue-i18n
import App from './App.vue';
import './assets/scss/main.scss';
// import { gsap } from 'gsap';
// Импорт переводов

import router from './router/index.js';

import ua from './i18n/ua';
import ru from './i18n/ru'
import en from './i18n/en';

// Настройка vue-i18n
const i18n = createI18n({
  legacy: false, // для Vue 3
  locale: 'ua',  // Язык по умолчанию
  messages: {
    ua,
    ru,
    en,
  },
});

const app = createApp(App);


// app.mixin({
//   data() {
//     return {
//       isDropdownActive: false
//     }
//   },
//   mounted() {
//     document.addEventListener('click', this.handleClickAnywhere)
//   },
//   unmounted() {
//     document.removeEventListener('click', this.handleClickAnywhere)
//   }
// })




// Определим язык в зависимости от домена
const pathLocale = window.location.pathname.split('/')[1]
let lang = 'ua'

if (['ru', 'en'].includes(pathLocale)) {
  lang = pathLocale
}

// Установим локаль в i18n
i18n.global.locale.value = lang;
// Использование vue-i18n в приложении
app.use(router);
app.use(i18n);

app.mount('#app');
