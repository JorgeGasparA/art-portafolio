import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../infrastructure/viewLayer/views/HomeView.vue'

const viewRoute = '../infrastructure/viewLayer/views/'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/storyboard',
      name: 'storyboard',
      component: () => import(viewRoute + 'StoryboardView.vue')
    },
    {
      path: '/animation',
      name: 'animation',
      component: () => import(viewRoute + 'AnimationView.vue')
    },
    {
      path: '/illustration',
      name: 'illustration',
      component: () => import(viewRoute + 'IllustrationView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(viewRoute + 'AboutView.vue')
    }
  ]
})

export default router
