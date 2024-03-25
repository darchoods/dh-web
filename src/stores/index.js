import { createStore } from 'vuex';
import app from '@/stores/modules/app';
import news from '@/stores/modules/news';
import qdb from '@/stores/modules/qdb';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    app,
    news,
    qdb,
  },
  strict: debug,
});
