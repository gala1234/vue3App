import { Module } from 'vuex'
import { UserInterface, RootState } from '../../types'

import { actions } from './users.actions'
// import { getters } from './users.getters'
import { mutations } from './users.mutations'
import { state } from './users.state'

export const users: Module<UserInterface[], RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
}
