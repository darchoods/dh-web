import store from '@/stores';

const needsAuth = (to, from, next) => {
  if (!store.getters['user/isAuthenticated']) {
    next({ name: 'login', query: { 'session-expired': 1 } });
  } else {
    next();
  }
};

const noAuth = (to, from, next) => {
  if (store.getters['user/isAuthenticated']) {
    next({ name: 'index' });
  } else {
    next();
  }
};

export {
  needsAuth,
  noAuth
};
