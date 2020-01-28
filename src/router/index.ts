import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '@/components/product/Product.vue'
import Users from '@/components/users/Users.vue'
import Todos from '@/components/todos/Todos.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Product',
      component: Product
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    }
  ]
})
