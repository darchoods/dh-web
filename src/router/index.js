import { createRouter, createWebHistory } from 'vue-router';
import routeList from './routes';

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  ...routeList,
  {
    path: '/:path(.*)',
    name: 'not_found',
    component: () => import('@/views/Pages/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
