<template> 
  <div id="app"> 
    <h1 @click='clickFn' >NASA's Astronomy Picture of the Day</h1> 
    <p>{{this.timesClicked}}</p>
    <img class='apod' :alt=this.title :src=this.apod />
    <p class='apod-description'>{{this.desc}}</p>
  </div>
</template>

<script>
import { getAPOD } from './utils/apiCalls';

export default {
  name: 'app', 
  data() {
    return {
      apod: '', 
      title: '', 
      desc: '', 
      timesClicked: 0
    }
  }, 
  async mounted() {
    const data = await getAPOD(); 
    this.apod = data.url; 
    this.desc = data.explanation; 
    this.title = data.title;
  }, 
  methods: {
    clickFn() {
      this.timesClicked ++;
    }, 
    async changeApodByDate(date) {
      const data = await getAPOD(date); 
      this.apod = data.url; 
      this.desc = data.explanation; 
      this.title = data.title;
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
