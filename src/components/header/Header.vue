<template>
  <div class="nav-bar">
    <div v-if="login">
      <button v-if="!login.isLoggedIn" @click="loginMutation">
        Login
      </button>
      <p v-else>Hello {{ login.user }}</p>
    </div>
    <Cart :cart="cart"></Cart>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { State, Mutation, namespace } from 'vuex-class'
import { LoginInterface } from '../../types'
import Cart from '../cart/Cart.vue'

const LoginMutation = namespace('login', Mutation)

@Component({
  components: {
    Cart
  }
})
export default class Header extends Vue {
  @State login!: LoginInterface;
  @LoginMutation('login') loginMutation!: any;

  @Prop() private cart!: string[];
  @Prop() private premium!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 60px;
  margin-bottom: 15px;
}
</style>
