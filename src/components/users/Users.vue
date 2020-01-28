<template>
    <p>{{ message }}</p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Users extends Vue {
    message: string = 'hello'
}
</script>
