import Vue from 'vue'
import Vuex from 'vuex'

import { tasks } from './tasks'
import { users } from './users'
import { login } from './login'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    tasks,
    users,
    login
  }
})
