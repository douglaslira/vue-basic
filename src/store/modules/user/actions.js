import * as constants from './constants'
import { state } from './state'

const listOfUsers = [
  { id: 1, name: 'Douglas Lira' },
  { id: 2, name: 'Miguel Lira' },
  { id: 3, name: 'Rafael Lira' },
  { id: 4, name: 'Cibelly Lira' }
]

export const actions = {
  getAllUsers ({ commit }) {
    commit(constants.SHOW_ALL_USER, listOfUsers)
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
			const position = listOfUsers.map((e) => { return e.id }).indexOf(iduser);
			listOfUsers.splice(position, 1)
			context.dispatch('getAllUsers')
    }
  }
}
