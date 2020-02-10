import { MutationTree } from 'vuex'
import { TaskInterface } from '../../types'

// As the getters, mutations are typed as any, to add the type, is used the mutationTree
export const mutations: MutationTree<TaskInterface[]> = {
  addTodo (state, newTodo) {
    const todoCopy = Object.assign({}, newTodo)
    state.push(todoCopy)
  },
  toggleTodo (any, todo) {
    todo.checked = !todo.checked
  }
}
