import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Characters from '../views/Characters.vue';
import Films from '../views/Films.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/films',
    name: 'Films',
    component: Films
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
