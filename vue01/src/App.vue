<template>
  <div id="app">
     <!-- <test msg="这是重新的属性"></test>  -->
    <user></user>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Test from './components/test'
import User from './components/user'

export default {
  name: 'app',
  components: {
    Test,
    User
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
