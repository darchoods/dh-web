import * as middlewares from '../middlewares';

export default [
  {
    path: '/channels',
    name: 'channels.index',
    component: () => import('@/views/Channels/Index.vue'),
    meta: {
      group: 'channels',
    }
  },
];