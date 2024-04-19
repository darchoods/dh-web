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
    path: '/logout',
    name: 'logout',
    component: () => import('@/views/Auth/Logout.vue'),
    beforeEnter: middlewares.needsAuth,
  },
  {
    path: '/qdb',
    name: 'qdb.index',
    component: () => import('@/views/QuoteDb/Index.vue'),
    meta: {
      group: 'qdb',
    }
  },
  {
    path: '/qdb/:channel',
    name: 'qdb.channel',
    component: () => import('@/views/QuoteDb/Channel.vue'),
    meta: {
      group: 'qdb',
    }
  },
];
