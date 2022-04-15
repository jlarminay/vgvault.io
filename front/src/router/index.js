import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UsersView from '@/views/UsersView.vue'
import DictionaryView from '@/views/DictionaryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView,
    },
    {
      path: '/dictionary',
      name: 'dictionary',
      component: DictionaryView,
    },
  ],
})

export default router
