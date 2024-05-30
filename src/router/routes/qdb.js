import * as middlewares from '../middlewares';

export default [
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