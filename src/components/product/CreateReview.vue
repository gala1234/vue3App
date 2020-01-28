<template>
    <form class="review-form" @submit.prevent="onSubmit">
        <div v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="(error, index) in errors" :key="index" >{{ error }}</li>
            </ul>
        </div>
        <div>
            <label for="name">Name:</label>
            <input id="name" v-model="name">
        </div>
        <div>
            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>
        </div>
        <div>
            <p>Would you recommend this product?</p>
            <div>
                <input type="radio" id="yes" name="yes" value="true" v-model="recommend">
                <label for="true">Yes</label>
            </div>
            <div>
                <input type="radio" id="no" name="no" value="false" v-model="recommend">
                <label for="false">No</label>
            </div>
        </div>
        <div>
            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
        </div>
        <div>
            <input type="submit" value="Submit">
        </div>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CreateReview extends Vue {
    errors: string[] = [];
    name: string = '';
    review: string = '';
    rating: number = 0;
    recommend: boolean = false;

    onSubmit () {
      if (this.name && this.review && this.rating) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend
        }
        this.$emit('review-submitted', productReview)
        this.name = ''
        this.review = ''
        this.rating = 0
        this.recommend = false
      } else {
        if (!this.name) { this.errors.push('name required') };
        if (!this.review) { this.errors.push('Review required') };
        if (this.rating === 0) { this.errors.push('Rating required') };
      }
    }
    mounted () { }
}
</script>
