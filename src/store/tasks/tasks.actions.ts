import { ActionTree } from 'vuex'
import { TaskInterface } from '../../types'

// As getters, actions are typed as any, to add the type, is used the ActionTree,
// it received 2 parameters, State and Root State.
export const actions: ActionTree<TaskInterface[], any> = {
  addTodoAsync ({ commit }, id) {
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
          text: item.title
        }
        commit('addTodo', todo)
      })
      .catch(error => {
        console.error(error)
      })
  }
}
