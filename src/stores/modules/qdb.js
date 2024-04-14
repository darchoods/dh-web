import { getField, updateField } from 'vuex-map-fields';
import ApiService from '@/helpers/ApiService';

const state = {
  channels: {},
  random: {},
  quotes: {},
};

const getters = {
  getField,
  channels: (state) => state.channels,
  random: (state) => state.random,
};

const actions = {
  getRandom: ({state, commit}) => {
    return new Promise((resolve, reject) => {
      ApiService.qdbRandom(
        {
          number: 8,
        },
        (response) => {
          commit('UPDATE_RANDOM', response.data.response.quotes);
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },
  getChanlist: ({state, commit}) => {
    if (state.channels.length) { return; }
    return new Promise((resolve, reject) => {
      ApiService.qdbChanlist(
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
  UPDATE_RANDOM: (state, payload) => {
    state.random = payload;
  },
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
