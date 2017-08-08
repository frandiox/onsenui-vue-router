import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const navigator = {
  namespaced: true,

  state: {
    stack: []
  },

  getters: {
    pageStack: state => state.stack
  },

  mutations: {
    reset (state, page) {
      state.stack = Array.isArray(page) ? page : [page || state.stack[0]];
    }
  }
}

export default new Vuex.Store({
  strict: debug,

  modules: {
    navigator
  }
})
