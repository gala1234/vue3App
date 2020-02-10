import { GetterTree } from 'vuex'
import { TaskInterface, RootState } from '../../types'

// Getters are functions that receive the state as a first parameter, by default they are type as any.
// To add a type to the getters is used the GetterTree, it received 2 parameters, State and RootState.
export const getters: GetterTree<TaskInterface[], RootState> = {
  todos: (state, getters, rootState) => state.filter(task => !task.checked),
  dones: state => state.filter(task => task.checked)
}
