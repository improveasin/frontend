const state = {
    pages: []
}

const getters = {
    getPages() {
        console.log('getters getPages', state.pages);
        return state.pages
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
    state,
    getters,
    mutations,
    actions
}