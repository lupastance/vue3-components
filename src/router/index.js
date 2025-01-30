import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import LinkView from '@/views/linkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
    },
    {
      path: '/linkview',
      name: 'link view',
      component: LinkView,
    }
  ],
})

export default router
