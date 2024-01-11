import { getField, updateField } from 'vuex-map-fields';

const state = {
  theme: {},
  loading: false,
  loadingCount: 0,
  debug: {
    ajax: true,
    store: !true,
    mutations: !true,
  },
};

const getters = {
  getField,

  debug: (state) => state.debug,
};

const actions = {
  initTheme: ({ state, commit }) => {
    const cachedTheme = localStorage.theme
      ? localStorage.theme
      : false;

    //  `true` if the user has set theme to `dark` on browser/OS
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (cachedTheme) {
      if (state.debug.store) {
        console.log('[INIT_THEME] cached', cachedTheme);
      }
      commit('SET_THEME', cachedTheme);
    } else if (userPrefersDark) {
      if (state.debug.store) {
        console.log('[INIT_THEME] dark');
      }
      commit('SET_THEME', 'dark');
    } else {
      if (state.debug.store) {
        console.log('[INIT_THEME] light');
      }
      commit('SET_THEME', 'light');
    }
  },
  setLoading: ({state, commit}, payload) => {
    if (payload === true) {
      commit('INC_LOADING');
    } else {
      commit('DEC_LOADING');
    }

    commit('SET_LOADING', state.loadingCount > 0);
  },
  setTheme: ({commit}, payload) => {
    commit('SET_THEME', payload);
  },
};

const mutations = {
  updateField,
  SET_THEME: (state, payload) => {
    state.theme = payload;
    localStorage.setItem('theme', payload);
  },
  SET_LOADING: (state, payload) => {
    state.loading = payload;
  },
  INC_LOADING: (state) => {
    state.loadingCount += 1;
  },
  DEC_LOADING: (state) => {
    state.loadingCount -= 1;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
