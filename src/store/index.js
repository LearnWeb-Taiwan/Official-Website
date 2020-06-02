import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scrollTop: 0,
  },
  mutations: {
    setScrollTop(state, payload) {
      state.scrollTop = payload
    },
  },
  actions: {
    setScrollTop(context, payload) {
      context.commit('setScrollTop', payload)
    },
  },
  modules: {},
})
