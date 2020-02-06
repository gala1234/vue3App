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
    <input type="text" v-model="newId" @keyup.enter="addTodoAsync(newId)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
import { TaskInterface } from '../../types'

@Component
export default class Todos extends Vue {
  @State tasks!: TaskInterface[];

  @Getter todos!: TaskInterface[];
  @Getter dones!: TaskInterface[];

  @Mutation addTodo!: TaskInterface[];
  @Mutation toggleTodo!: TaskInterface[];

  @Action addTodoAsync!: TaskInterface[];

  newId () {
    return this.tasks && this.tasks.length + 1
  }

  newTodo: TaskInterface = {
    text: '',
    id: this.newId(),
    checked: false
  };

  @Watch('this.tasks')
  onPropertyChanged (value: TaskInterface[], oldValue: TaskInterface[]) {
    console.log('value', value, 'oldValue', oldValue)
  }

  mounted () {
    this.newId()
    console.log('newId', this.newId())
  }

  updated () {
    this.newId()
    console.log('newId', this.newId())
  }
}
</script>
