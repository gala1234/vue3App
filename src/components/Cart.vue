<template>
    <div class="cart">
        <p>Cart ({{ cart.length }})</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Cart extends Vue {
    @Prop() private cart!: string[];
}
</script>
