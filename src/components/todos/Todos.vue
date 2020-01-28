<template>
  <div>
    <h4>Todo:</h4>
    <ul>
      <li
        v-for="(todo) in todos"
        v-bind:key="todo.id">
          <input
            type="checkbox"
            id="todo.id"
            :checked="todo.checked"
            @change="toggleTodo(todo)">
            <label for="checkbox">{{ todo.text }}</label>
      </li>
    </ul>
    <h4>Done:</h4>
    <ul>
      <li
        v-for="(done) in dones"
        v-bind:key="done.id">
          <input
            type="checkbox"
            id="done.id"
            :checked="done.checked"
            @change="toggleTodo(done)">
          <label for="checkbox">{{ done.text }}</label>
        </li>
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
  @Mutation toggleTodo!: Todo[];

  @Action addTodoAsync!: Todo[];

  newTodo: Todo = {
    text: '',
    checked: false
  };

  id: string = '1';
}
</script>
