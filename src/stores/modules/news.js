import { getField, updateField } from 'vuex-map-fields';
import ApiService from '@/helpers/ApiService';

const state = {
  posts: {},
};

const getters = {
  getField,
  posts: (state) => state.posts,
};

const actions = {
  loadAll: ({state, commit}) => {
    if (state.posts.length) { return; }
    return new Promise((resolve, reject) => {
      ApiService.getNews(
        (response) => {
          commit('UPDATE_POSTS', response.data.response.posts);
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },
};

const mutations = {
  updateField,
  UPDATE_POSTS: (state, payload) => {
    state.posts = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
