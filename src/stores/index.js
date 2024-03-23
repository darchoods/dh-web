import { createStore } from 'vuex';
import app from '@/stores/modules/app';
import news from '@/stores/modules/news';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    app,
    news,
  },
  strict: debug,
});
