
import { createRouter, createWebHistory } from 'vue-router'

import { Home, Chemical_Import_Tool, Establishment_Registration, Feedback, BulletinBoard, Downloads, Login, ForgotPassword, ResetPassword, SetupPassword, LandingPage } from '@/views';

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
      path: '/downloads',
      name: 'downloads',
      component: Downloads,
    },
    {
      path :'/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword,
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPassword,
    },
    {
      path: '/setup-password',
      name: 'setup-password',
      component: SetupPassword,
    },
    {
      path: '/landing-page',
      name: 'landing page',
      component: LandingPage,
    },
  ],
})

export default router
