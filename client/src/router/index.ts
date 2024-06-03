import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AddEventView from '@/views/AddEventView.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';

import TestView from '@/views/TestView.vue';
import { useUserStore } from '@/stores/userStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: false },
    },
    {
      path: '/addEvent',
      name: 'addEvent',
      component: AddEventView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { requiresAuth: false, onlyWhenLogout: true },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { requiresAuth: false, onlyWhenLogout: true },
    },
    {
      path: '/test',
      name: 'test',
      component: TestView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      redirect: { name: 'home' },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();

  if (!userStore.isLogged) {
    const token = localStorage.getItem('token');

    if (token !== null) {
      try {
        //const reponse = await ;
        //userStore.login(response, token);
      } catch (error) {
        //userStore.logout();
      }
    }
  }

  if (!to.meta.requiresAuth && !userStore.isUserLoggedIn) {
    next();
  } else if (to.meta.requiresAuth && !userStore.isUserLoggedIn) {
    next({ name: 'login' });
  } else if (
    !to.meta.requiresAuth &&
    to.meta.onlyWhenLogout &&
    userStore.isUserLoggedIn
  ) {
    next({ name: 'home' });
  } else {
    next();
  }
});
export default router;
