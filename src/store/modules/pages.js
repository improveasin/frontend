const getters = {
  getPages(state) {
    console.log('mutations getPages', state);
    return state.pages;
  }
}

const mutations = {
  setPages(state, pages) {
    console.log('mutations setPages', state, pages);
    state.pages = pages
  }
}

const actions = {
  setPages({ commit }, pages) {
    console.log('actions setPages', pages);
    commit('setPages', pages)
  }
}

export default {
  namespaced: true,
  //state,
  getters,
  mutations,
  actions
}
