import { GetterTree } from 'vuex'
import { TaskInterface } from '../../types'
import { state } from './tasks.state'

// Getters are functions that receive the state as a first parameter, by default they are type as any.
// To add a type to the getters is used the GetterTree, it received 2 parameters, State and Root State.
export const getters: GetterTree<TaskInterface[], any> = {
  todos: state => state.filter(task => !task.checked),
  dones: state => state.filter(task => task.checked)
}
