import { Module } from 'vuex'
import { TaskInterface, RootState } from '../../types'

import { actions } from './tasks.actions'
import { getters } from './tasks.getters'
import { mutations } from './tasks.mutations'
import { state } from './tasks.state'

export const tasks: Module<TaskInterface[], RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
