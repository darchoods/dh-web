import * as middlewares from '../middlewares';

export default [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/Pages/Index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Auth/Login.vue'),
    beforeEnter: middlewares.noAuth,
  },
  {
    path: '/qdb',
    name: 'qdb',
    component: () => import('@/views/QuoteDb/Index.vue'),
    beforeEnter: middlewares.noAuth,
    meta: {
      group: 'qdb',
    }
  },
];
