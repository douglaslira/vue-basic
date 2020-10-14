export const getters = {
  allUsers: state => {
    return state.all.sort((a, b) => {
      return a.id < b.id
    })
  },
  messages: state => state.message
}
