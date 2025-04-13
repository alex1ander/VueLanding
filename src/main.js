import { createApp } from 'vue';
import { createI18n } from 'vue-i18n'; // Импортируем vue-i18n
import App from './App.vue';
import './assets/scss/main.scss';

// Импорт переводов

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

// Использование vue-i18n в приложении
app.use(i18n);

app.mount('#app');
