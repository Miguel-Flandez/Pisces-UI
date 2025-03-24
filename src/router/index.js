
// 6. import your page at the top
// 7. export your page at the bottom, the path is the name of the page on the address bar of the browser, I dont know what name does but better match it,
// the component should be the same as what you imported
// 8. if you want to make a button to redirect to another page, use this example: 
// <router-link to="/chemical importation tool"><button class="header-links">Chemical Importation Tool</button></router-link>
// 9. make use of comments to distinguish and organize your code so other people can understand what is going on

import { createRouter, createWebHistory } from 'vue-router'

// Login
import {Login, ForgotPassword, ResetPassword, SetupPassword} from '@/views';
// User Imports
import { Home, Chemical_Import_Tool, Establishment_Registration, Feedback, BulletinBoard, Downloads, LandingPage} from '@/views';
// Locator Imports
import {LocatorLandingPage} from '@/views';
// import here
import { ProjectCoverage } from '@/views';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // User
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
      path: '/landing-page',
      name: 'landing page',
      component: LandingPage,
    },


    // Locator
    {
      path: '/locator-landing-page',
      name: 'locator landing page',
      component: LocatorLandingPage,
    },

    // Project Coverage
    {
      path: '/project-coverage',
      name: 'project coverage',
      component: ProjectCoverage,
    },



    // Login
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

  ],
})

export default router
