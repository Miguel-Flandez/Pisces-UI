import { createRouter, createWebHistory } from 'vue-router'

import { Home, Chemical_Import_Tool, Establishment_Registration, Feedback, BulletinBoard, LandingPage } from '@/views';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
    {
      path: '/feedback',
      name: 'feedback form',
      component: Feedback,
    },
    {
      path: '/bulletin board',
      name: 'bulletin board',
      component: BulletinBoard,
    },
    {
      path: '/landing-page',
      name: 'landing page',
      component: LandingPage,
    },
  ],
})

export default router
