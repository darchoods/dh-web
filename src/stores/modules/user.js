import { getField, updateField } from 'vuex-map-fields';
import ApiService from '@/helpers/ApiService';
import axios from 'axios';

const state = {
  token: '',
  status: '',
  profile: {},
};

const getters = {
  getField,
  isAuthenticated: (state) => !!state.token,
  getProfile: (state) => state.profile,
  isProfileLoaded: (state) => !!Object.keys(state.profile).length,
};

const actions = {
  login: ({ commit }, data) => {
    return new Promise((resolve, reject) => {
      commit('CHANGE_STATUS', 'loading');
      ApiService.login(data, response => {
        let token = response.data.response.access_token;
        localStorage.setItem('user-token', token);

        axios.defaults.headers.Authorization = 'Bearer ' + token;
        commit('AUTH_SUCCESS', token);
        resolve(response);
      }, error => {
        let jsonResponse = JSON.parse(
          error.response.request.response.replace('\"', '"') // eslint-disable-line no-useless-escape
        );

        if (jsonResponse.message.includes('locked')) {
          commit('CHANGE_STATUS', 'locked');
        } else if (jsonResponse.message.includes('disabled')) {
          commit('CHANGE_STATUS', 'disabled');
        } else {
          commit('CHANGE_STATUS', 'error');
        }

        localStorage.removeItem('user-token');
        reject(jsonResponse.message);
      });
    });
  },
  logout: ({ commit }) => {
    return new Promise((resolve) => {
      commit('AUTH_LOGOUT');
      commit('UPDATE_PROFILE', {});
      localStorage.removeItem('user-token');
      resolve();
    });
  },

  setTokenFromLS: ({ commit }) => {
    return new Promise((resolve, reject) => {
      const token = localStorage.getItem('user-token');
      console.log('found token:' +token);

      axios.defaults.headers.Authorization = 'Bearer ' + token;
      commit('AUTH_SUCCESS', token);
      resolve();
    });
  },

  loadProfile: ({ state, commit, dispatch, getters }) => {
    return new Promise((resolve, reject) => {
      if (!state.token) {
        return false;
      }
      if (getters.isProfileLoaded) {
        return resolve(state.profile);
      }

      ApiService.getUser(response => {
        commit('UPDATE_PROFILE', response.data.response.user);
        
        resolve(response.data.response.user);
      }, error => {
        reject(error);
      });
    });
  },

};

const mutations = {
  updateField,
  CHANGE_STATUS: (state, payload) => {
    state.status = payload;
  },
  AUTH_SUCCESS: (state, token) => {
    state.status = 'success';
    state.token = token;
  },
  AUTH_LOGOUT: (state) => {
    state.status = 'logged out';
    state.token = '';
  },
  UPDATE_PROFILE: (state, payload) => {

    state['profile'] = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
