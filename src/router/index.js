import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import Home from '@/views/Home.vue'
import Feedback from '@/views/Feedback.vue'
import Chemical_Import_Tool from '@/views/Chemical_Import_Tool.vue'
import Establishment_Registration from '@/views/Establishment_Registration.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/landing-page',
      name: 'landing page',
      component: LandingPage,
    },
    {
      path: '/feedback',
      name: 'feedback form',
      component: Feedback,
    },
    {
      path: '/chemical importation tool',
      name: 'chemical importation tool',
      component: Chemical_Import_Tool,
    },
    {
      path: '/establishment registration',
      name: 'establishment registration',
      component: Establishment_Registration,
    },
    
    
    
  ],
})

export default router
