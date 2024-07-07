
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

const routes =
  [
    {
      path: '/',
      component: () => import('../pages/index.vue')
    },
    {
      path: '/zhongli',
      component: () => import('../pages/zhongli.vue')
    },
    {
      path: '/yangmei',
      component: () => import('../pages/yangmei.vue')
    },
    {
      path: '/hsinchu',
      component: () => import('../pages/hsinchu.vue')
    }
  ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
