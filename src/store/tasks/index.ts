import { actions } from './tasks.actions'
import { getters } from './tasks.getters'
import { mutations } from './tasks.mutations'
import { state } from './tasks.state'

export const tasks = {
  namespaced: false,
  state,
  mutations,
  actions,
  getters
}
