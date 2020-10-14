import * as constants from './constants'
import Vue from 'vue'

export const mutations = {
  [constants.SHOW_ALL_USER] (state, users) {
    Vue.set(state, 'all', users)
  }
}
