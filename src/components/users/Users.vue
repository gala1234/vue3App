<template>
  <div>
    <p>{{ message }}</p>
    <div v-if="users">
      <ul>
        <li v-for="user in users" v-bind:key="user.id">{{ user.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, namespace } from 'vuex-class'
import { UserInterface } from '../../types'

const UsersAction = namespace('users', Action)

@Component
export default class Users extends Vue {
  @State users!: UserInterface[];

  @UsersAction addUserAsync!: any;

  message: string = 'hello';

  beforeMount () {
    if (!this.users.length) {
      this.addUserAsync(1)
    }
  }
}
</script>
