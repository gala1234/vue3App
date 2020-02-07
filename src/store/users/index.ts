import { actions } from './users.actions'
// import { getters } from './users.getters'
import { mutations } from './users.mutations'
import { state } from './users.state'

export const users = {
  namespaced: false,
  state,
  actions,
  mutations
}
