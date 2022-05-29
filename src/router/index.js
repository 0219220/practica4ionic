import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import Tab1Page from '../views/Tab1Page.vue'
import Tab2Page from '../views/Tab2Page.vue'
import Tab3Page from '../views/Tab3Page.vue'

const routes= [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Tab1Page',
    name: 'Tab1Page',
    component: Tab1Page
  },
  {
    path: '/Tab2Page',
    name: 'Tab2Page',
    component: Tab2Page
  },
  {
    path: '/Tab3Page',
    name: 'Tab3Page',
    component: Tab3Page
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
