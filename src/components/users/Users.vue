<template>
  <div>
    <p>{{ message }}</p>
    <ul>
      <li v-for="user in users" v-bind:key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action } from 'vuex-class'
import { UserInterface } from '../../types'

@Component
export default class Users extends Vue {
  @State users!: UserInterface[];

  @Action addUserAsync!: any;

  message: string = 'hello';

  beforeMount () {
    this.addUserAsync(1)
  }
}
</script>
