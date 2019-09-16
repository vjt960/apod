<template> 
  <div id="app"> 
    <h1 @click='clickFn' >Click Me</h1>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
import { getAPOD } from './utils/apiCalls';

export default {
  name: 'app',
  methods: {
    clickFn: async () => {
      const test = await getAPOD(); 
      console.log(test)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} 

h1:hover {
  cursor: pointer; 
  color: red;
}
</style>
