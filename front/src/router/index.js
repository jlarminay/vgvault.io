import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UsersView from '@/views/UsersView.vue'

import LoginRoutes from './routes/login.route'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...LoginRoutes,

    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/users',
      name: 'Users',
      component: UsersView,
    },
  ],
})

export default router
