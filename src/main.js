import { createApp } from 'vue';
import App from './App.vue';
import './assets/scss/main.scss';

const app = createApp(App);

// Use tsparticles plugin if needed, or directly add Particles component inside your Vue components

app.mount('#app');
