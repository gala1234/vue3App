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
    <input type="text" v-model.lazy="newId" @keyup.enter="addTodoAsyncId(newId)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
import { TaskInterface } from '../../types'

@Component
export default class Todos extends Vue {
  @State tasks!: TaskInterface[];

  @Getter todos!: TaskInterface[];
  @Getter dones!: TaskInterface[];

  @Mutation addTodo!: any;
  @Mutation toggleTodo!: TaskInterface[];

  @Action addTodoAsync!: any;

  get newId () {
    return this.tasks && this.tasks.length + 1
  }

  get newTodo () {
    return {
      text: '',
      id: this.newId,
      checked: false
    }
  }

  addTodoAsyncId (newId: number) {
    const id: number = (this.tasks.map(task => Object.values(task).includes(newId)) || !newId) ? this.newId : newId
    this.addTodoAsync(id)
  }
}
</script>
