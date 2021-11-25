import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import app from '../main'
import { setCurrentLanguage } from '../utils'
import menu from './modules/menu'
import pages from './modules/pages'
import user from './modules/user'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence()

export const getInitialState = () => {
  return {
  };
};

export default new Vuex.Store({
  state: getInitialState(),
  plugins: [
    vuexLocal.plugin,
  ],
  mutations: {
    changeLang(state, payload) {
      app.$i18n.locale = payload
      setCurrentLanguage(payload);
    }
  },
  actions: {
    setLang({ commit }, payload) {
      commit('changeLang', payload)
    }
  },
  modules: {
    menu,
    user,
    pages,
  }
})
