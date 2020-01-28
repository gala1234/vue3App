<template>
    <div class="product">
    <div class="product-image" :href="link" >
        <img :src="image">
    </div>
    <div class="product-info">
        <h1>{{ title }}</h1>
        <span v-show="onSale">{{ onSale }}</span>
        <p>Shipping: {{ shipping }}</p>
        <p v-if="stock > 10">In Stock</p>
        <p v-else-if="stock <= 10 && stock > 0" >Last units</p>
        <p
            v-else
            :class="{ warningText: !stock}"
            >Out of stock</p>
        <ul>
            <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
        </ul>
        <div v-for="(variant, index) in variants"
            :key="variant.variantId"
            class="color-box"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)" >
        </div>
        <ul>
            <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
        </ul>

        <button
            v-on:click="addToCart"
            :disabled="!stock"
            :class="{ disabledButton: !stock}"
        >Add to Cart</button>
        <button v-on:click="removeFromCart">Less</button>

        <ProductTabs></ProductTabs>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ProductTabs from './ProductTabs.vue'

interface Variant {
       variantId: number,
       variantColor: string,
       variantImage: string,
       variantQuantity: number,
       isOnSale: boolean
    }

@Component({
  components: {
    ProductTabs
  }
})
export default class Product extends Vue {
    @Prop() private premium!: boolean;

    brand: string = 'VueShop';
    product: string = 'socks';
    selectedVariant: number = 0;
    link: string = 'www.google.es';
    details: string[] = ['80% cotton', '12% polyester', '6% elastane'];
    variants: Array<Variant> =
    [
      {
        variantId: 2234,
        variantColor: 'Green',
        variantImage: '../green-socks.png',
        variantQuantity: 10,
        isOnSale: true
      },
      {
        variantId: 2235,
        variantColor: 'Blue',
        variantImage: '../blue-socks.png',
        variantQuantity: 0,
        isOnSale: false
      }
    ];
    sizes: number[] = [36, 37, 38, 39, 40];

    get variantColor () { return this.variants[this.selectedVariant].variantColor };

    beforeRouterEnter () {
      console.log('Enter')
    }

    addToCart () {
      const id = this.variants[this.selectedVariant].variantId
      return this.$emit('add-to-cart', id)
    };
    removeFromCart () {
      const id: number = this.variants[this.selectedVariant].variantId
      this.$emit('remove-from-cart', id)
    };
    updateProduct (index: number) {
      this.selectedVariant = index
    };

    get title () {
      return this.brand + ' ' + this.product
    }
    get image () {
      return this.variants[this.selectedVariant].variantImage
    }
    get stock () {
      return this.variants[this.selectedVariant].variantQuantity
    };
    get onSale () {
      const message = this.variants[this.selectedVariant].variantColor + ' ' + this.brand + ' ' + this.product + ' are on sale.'
      return this.variants[this.selectedVariant].isOnSale && message
    };
    get shipping () {
      if (this.premium) {
        return 'Free'
      } else {
        return '2.99$'
      }
    }
}
</script>
