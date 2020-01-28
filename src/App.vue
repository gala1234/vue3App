<template>
  <div id="app">
    <h4>Todo:</h4>
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="index">{{ todo.text }}</li>
    </ul>
    <h4>Done:</h4>
    <ul>
      <li v-for="(done, index) in dones" v-bind:key="index">{{ done.text }}</li>
    </ul>
    <label>Add todo:</label>
    <input type="text" v-model="newTodo.text" @keyup.enter="addTodo(newTodo)">
    <label>Add todo Async:</label>
    <input type="text" v-model="id" @keyup.enter="addTodoAsync(id)">
    <Shop></Shop>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Shop from './components/Shop.vue'
import { Getter, Mutation, Action } from 'vuex-class'
import { Todo } from './types'

@Component({
  components: {
    Shop
  }
})
export default class App extends Vue {
  @Getter todos!: Todo[];
  @Getter dones!: Todo[];

  @Mutation addTodo!: Todo[]

  @Action addTodoAsync! : Todo[]

  newTodo: Todo = {
    text: '',
    checked: false
  }

  id: string = '1'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  font-family: tahoma;
  color: #282828;
  margin: 0px;
}

.product {
  display: flex;
}

img {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

.product-image {
  flex-basis: 700px;
}

.product-info {
  margin-top: 10px;
  flex-basis: 500px;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}

button {
  margin-top: 30px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
}

.disabledButton {
  background-color: #d8d8d8;
}

.review-form {
  /* width: 30%; */
  width: 100%;
  padding: 20px;
  border: 1px solid #d8d8d8;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

textarea {
  width: 100%;
  height: 60px;
}

.warningText {
  text-decoration: line-through;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.disabledButton {
  background-color: #d8d8d8;
}

.cart {
  margin-right: 25px;
  float: right;
  border: 1px solid #d8d8d8;
  padding: 5px 20px;
}

input {
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
}

button {
  margin-top: 30px;
  border: none;
  background-color: #1e95ea;
  color: white;
  height: 40px;
  width: 100px;
}

.tabs {
  margin-left: 20px;
  cursor: pointer;
}

.activeTab {
  color: #16c0b0;
  text-decoration: underline;
}
</style>
