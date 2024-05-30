import { createStore } from 'vuex';
import app from '@/stores/modules/app';
import user from '@/stores/modules/user';
import news from '@/stores/modules/news';
import qdb from '@/stores/modules/qdb';
import irc from '@/stores/modules/irc';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    app,
    user,
    news,
    qdb,
    irc,
  },
  strict: debug,
});
