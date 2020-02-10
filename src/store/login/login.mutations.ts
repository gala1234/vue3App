import { MutationTree } from 'vuex'
import { LoginInterface } from '../../types'

export const mutations: MutationTree<LoginInterface> = {
  login (state) {
    state.isLoggedIn = true
    state.user = 'Gala'
  }
}
