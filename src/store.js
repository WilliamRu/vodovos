import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  state: {
    cities: null,
  },
  getters: {
    CITIES: state => {
      return state.cities;
    },
  },
  mutations: {
    SET_CITIES: async (state, payload) => {
      state.cities = payload;
    },
  },
  actions: {
    GET_CITIES: async (context, payload) => {
      let {data} = await axios.get('https://my-json-server.typicode.com/WilliamRu/TestAPI/cities');
      context.commit('SET_CITIES', data);
    },
  }
})
