import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { State, Todo } from '../types'

export const state: State = {
  todos: [
    { text: 'Buy milk', id: 1, checked: false },
    { text: 'Buy chocolate', id: 2, checked: true },
    { text: 'Buy bread', id: 3, checked: false }
  ]
}

// Getters are functions that receive the state as a first parameter, by default they are type as any.
// To add a type to the getters is used the GetterTree, it received 2 parameters, State and RouterState.
export const getters: GetterTree<State, any> = {
  todos: state => state.todos.filter(todo => !todo.checked),
  dones: state => state.todos.filter(todo => todo.checked)
}

// As the getters, mutations are typed as any, to add the type, is used the mutationTree
export const mutations: MutationTree<State> = {
  addTodo (state, newTodo) {
    const todoCopy = Object.assign({}, newTodo)
    state.todos.push(todoCopy)
  },
  toggleTodo (any, todo) {
    todo.checked = !todo.checked
  }
}

// As getters, actions are typed as any, to add the type, is used the ActionTree,
// it received 2 parameters, State and RouterState.
export const actions: ActionTree<State, any> = {
  addTodoAsync ({ commit }, id) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(data => data.json())
      .then(item => {
        const todo: Todo = {
          checked: false,
          text: item.title
        }

        commit('addTodo', todo)
      })
  }
}
