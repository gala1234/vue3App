<template>
  <nav>
    <router-link to="/">Product</router-link>
    <router-link to="/users">Users</router-link>
    <router-link to="/todos">Todos</router-link>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

export default class NavBar extends Vue {}
</script>
