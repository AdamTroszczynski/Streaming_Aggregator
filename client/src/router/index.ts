import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AddEventView from '@/views/AddEventView.vue';

import TestView from '@/views/TestView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/addEvent',
      name: 'addEvent',
      component: AddEventView,
    },
  ],
});

export default router;
