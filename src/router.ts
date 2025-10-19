import { createWebHistory, createRouter } from 'vue-router'

import StarterPage from './pages/StarterPage.vue'
import ContactPage from './pages/ContactPage.vue'

const routes = [
    { path: '/', component: StarterPage },
    { path: '/contact', component: ContactPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
