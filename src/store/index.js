import Vue from 'vue'
import Vuex from 'vuex'
import app from '../main'
import { setCurrentLanguage } from '../utils'
import menu from './modules/menu'
import pages from './modules/pages'
import user from './modules/user'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  reducer: (state) => {
    console.log('state', state);
    if (state.pages.pages) {
      state.pages = state.pages.pages;
    }
    return state;
  },
  storage: window.localStorage
})

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
