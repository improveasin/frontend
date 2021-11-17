const getters = {
  getPages(state) {
    return state;
  }
}

const mutations = {
  setPages(state, pages) {
    console.log('mutations setPages', state, pages);
    state = pages
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
