<template>
  <div>
    <h4>Todo:</h4>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="index">{{ todo.text }}</li>
    </ul>
    <h4>Done:</h4>
    <ul>
      <li v-for="(done, index) in dones" v-bind:key="index">{{ done.text }}</li>
    </ul>
    <label>Add todo:</label>
    <input type="text" v-model="newTodo.text" @keyup.enter="addTodo(newTodo)" />
    <label>Add todo Async:</label>
    <input type="text" v-model="id" @keyup.enter="addTodoAsync(id)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Mutation, Action } from 'vuex-class'
import { Todo } from '../../types'

@Component
export default class Todos extends Vue {
  @Getter todos!: Todo[];
  @Getter dones!: Todo[];

  @Mutation addTodo!: Todo[];

  @Action addTodoAsync!: Todo[];

  newTodo: Todo = {
    text: '',
    checked: false
  };

  id: string = '1';
}
</script>
