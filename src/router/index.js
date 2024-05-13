import { createRouter, createWebHistory } from 'vue-router'

import routers from './routers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
})

router.beforeEach((to, from, next) => {
  next();
});


export default router
