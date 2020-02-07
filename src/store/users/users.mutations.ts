import { MutationTree } from 'vuex'
import { StateInterface } from '../../types'

// As the getters, mutations are typed as any, to add the type, is used the mutationTree
export const mutations: MutationTree<StateInterface[]> = {
  addUser (state, newUser) {
    const userCopy = Object.assign({}, newUser)
    state.push(userCopy)
  }
}
