import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState: false
  },
  mutations: {
    change (state) {
      state.loginState = !state.loginState
    },
    login (state) {
      state.loginState = true
    }
  },
  actions: {
  },
  modules: {
  }
})
