import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../infrastructure/viewLayer/views/HomeView.vue'

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
      component: () => import(`../infrastructure/viewLayer/views/StoryboardView.vue`)
    },
    {
      path: '/animation',
      name: 'animation',
      component: () => import(`../infrastructure/viewLayer/views/AnimationView.vue`)
    },
    {
      path: '/illustration',
      name: 'illustration',
      component: () => import(`../infrastructure/viewLayer/views/IllustrationView.vue`)
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(`../infrastructure/viewLayer/views/AboutView.vue`)
    }
  ]
})

export default router
