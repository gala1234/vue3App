import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '@/components/product/Product.vue'
import Users from '@/components/users/Users.vue'

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
    }
  ]
})
