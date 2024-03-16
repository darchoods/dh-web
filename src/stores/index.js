import { createStore } from 'vuex';
import app from '@/stores/modules/app';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    app,
  },
  strict: debug,
});
