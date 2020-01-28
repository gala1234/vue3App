<template>
    <div>
        <span
            class="tab"
            :class="{ activeTab: selectedTab === tab }"
            v-for="(tab, index) in tabs"
            :key="index"
            @click="selectedTab = tab">
                {{ tab }}
        </span>
        <Reviews
            v-show="selectedTab === 'Reviews'"
            :reviews="reviews">
        </Reviews>
        <CreateReview
            v-show="selectedTab === 'Make a review'"
            @review-submitted="addReview"
        >
        </CreateReview>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CreateReview from './CreateReview.vue'
import Reviews from './Reviews.vue'

interface productReview {
    name: string,
    review: string,
    rating: number,
    recommend: boolean
    }

@Component({
  components: {
    CreateReview,
    Reviews
  }
})
export default class ProductTabs extends Vue {
    tabs: string[] = ['Reviews', 'Make a review'];
    selectedTab: string = 'Reviews';
    reviews: Array<productReview> = [];

    addReview (productReview: productReview) {
      this.reviews.push(productReview)
    }
}
</script>
