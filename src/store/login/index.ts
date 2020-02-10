import { Module } from 'vuex'
import { LoginInterface, RootState } from '../../types'

// import { actions } from './login.actions'
// import { getters } from './login.getters'
import { mutations } from './login.mutations'
import { state } from './login.state'

export const login: Module<LoginInterface, RootState> = {
  namespaced: true,
  state,
  mutations
}
