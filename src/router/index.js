import Vue from 'vue';
import VueRouter from 'vue-router';
import routeList from './routes';

Vue.use(VueRouter);

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  ...routeList,
  {
    path: '/:path(.*)',
    name: 'not_found',
    component: () => import('@/views/Pages/NotFound.vue'),
  },
];

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes,
});

export default router;
