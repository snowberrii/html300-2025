<template>
  <my-button></my-button>
</template>

<script>
import myButton from './components/my-button.vue'

export default {
  name: 'AppPage',
  components: {
    myButton,
  },
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: pink;
  padding: 1em;
}

html {
  background-color: rgb(178, 176, 176);
}


</style>
