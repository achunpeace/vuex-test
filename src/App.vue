<template>
  <div id="app">
    <Todos />
  </div>
</template>

<script>
import store from "./store"
import Todos from './components/Todos.vue'

export default {
  name: 'App',
  store,
  components: {
    Todos
  }
}
</script>

<style>
body {
  background: #cccccc;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width:  1100px;
  margin: 0 auto;
}
</style>
