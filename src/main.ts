import './hooks'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

// Lazy load a Vuex component at runtime using typescript
const load = true

if (load) {
  import('./store/login').then(({ login }) => {
    store.registerModule('login', login)
  })
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
