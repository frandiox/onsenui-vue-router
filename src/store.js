import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const navigator = {
  strict: true,
  namespaced: true,

  state: {
    stack: []
  },

  getters: {
    pageStack: (state) => state.stack
  },

  mutations: {
    reset (state, page) {
      if (Object.prototype.toString.call(page) === '[object Array]') {
        state.stack = page
      } else {
        state.stack = [page || state.stack[0]]
      }
    }
  }
}

export default new Vuex.Store({
  strict: debug,

  modules: {
    navigator
  }
})
