import { createRouter, createWebHistory } from 'vue-router';
import CitiesPage from './components/CitiesPage';
import WarehousePage from './components/WarehousePage';

const routes = [
  {
    path: '/cities',
    name: 'Cities',
    component: CitiesPage
  },
  {
    path: '/warehouses',
    name: 'warehouses',
    component: WarehousePage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
