import { ActionTree } from 'vuex'
import { TaskInterface, RootState } from '../../types'

// As getters, actions are typed as any, to add the type, is used the ActionTree,
// it received 2 parameters, State and RootState.
export const actions: ActionTree<TaskInterface[], RootState> = {
  addTodoAsync ({ commit, rootState }, id) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(data => {
        console.log('data', data)
        return data.json()
      })
      .then(item => {
        console.log('item', item)
        const todo: TaskInterface = {
          checked: false,
          id: item.id,
          text: rootState.login.user + ': ' + item.title
        }
        commit('addTodo', todo)
      })
      .catch(error => {
        console.error(error)
      })
  }
}
