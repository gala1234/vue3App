<template>
    <div class="nav-bar">
        <Cart :cart="cart" ></Cart>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import Cart from './Cart.vue'

@Component({
  components: {
    Cart
  }
})
export default class Header extends Vue {
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
