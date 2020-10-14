import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import modules from './modules'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    clearAll ({ commit }) {
      Object.keys(modules).forEach(moduleName => {
        commit(`${moduleName}/RESET`)
      })
    }
  },
  modules: {
    ...modules
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
