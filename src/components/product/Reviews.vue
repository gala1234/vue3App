<template>
  <div>
    <h2>Reviews</h2>
    <p v-if="!reviews.length">There are no reviews yet.</p>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
        <p>{{ review.name }}</p>
        <p>{{ review.recommend }}</p>
        <p>{{ review.rating }}</p>
        <p>{{ review.review }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Reviews extends Vue {
  @Prop() reviews!: Array<object>;
}
</script>
