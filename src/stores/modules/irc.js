import { getField, updateField } from 'vuex-map-fields';
import ApiService from '@/helpers/ApiService';

const state = {
  channels: {},
};

const getters = {
  getField,
  channels: (state) => state.channels,
};

const actions = {
  getChanlist: ({state, commit}) => {
    if (state.channels.length) { return; }
    return new Promise((resolve, reject) => {
      ApiService.getChannels(
        (response) => {
          commit('UPDATE_CHANNELS', response.data.response.channels);
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
  UPDATE_CHANNELS: (state, payload) => {
    state.channels = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
