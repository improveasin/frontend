const state = {
  pages: []
}

const getters = {
  getPages(state) {
    return state;
    /*
      console.log('getters getPages', state, state.pages);
      debugger
      return state.pages
      */
  }
}

const mutations = {
  setPages(state, pages) {
    console.log('mutations setPages', state, pages);
    debugger
    state.pages = pages
  }
}

const actions = {
  setPages({ commit }, pages) {
    console.log('actions setPages', pages);
    debugger
    commit('setPages', pages)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
