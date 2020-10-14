import * as constants from './constants'
import { state } from './state'

export const actions = {
  getAllUsers ({ commit }) {
    commit(constants.SHOW_ALL_USER, [{ id: 1, name: 'Douglas Lira' }])
  },
  saveUser (context, data, bool) {
    state.message = 'Data success has saved'
    context.dispatch('getAllUsers')
  },
  updateUser (context, user) {
    state.message = 'Data success has updated'
    context.dispatch('getAllUsers')
  },
  destroy (context, iduser) {
    const conf = window.confirm('Are you sure delete this Data?')
    if (conf) {
      state.message = 'Data success has deleted'
      context.dispatch('getAllUsers')
    }
  }
}
