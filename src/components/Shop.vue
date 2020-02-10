<template>
    <div>
        <div class="nav-bar"></div>
        <Header :cart="cart" :premium="premium"></Header>
        <NavBar></NavBar>
        <router-view :premium="premium" @add-to-cart="updateCart" @remove-from-cart="removeItem"></router-view>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Header from './header/Header.vue'
import NavBar from './navBar/NavBar.vue'
import Product from './product/Product.vue'

@Component({
  components: {
    Header,
    NavBar,
    Product
  }
})
export default class Shop extends Vue {
    premium: boolean = true;
    cart : string[] = [];

    updateCart (id: string) {
      this.cart.push(id)
    };
    removeItem (id: string) {
      const index = this.cart.indexOf(id)
      return this.cart.splice(index, 1)
    };
}
</script>
