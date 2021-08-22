<template>

  <Header></Header>
  <Statement></Statement>
  <Synopsis></Synopsis>
  <Skills></Skills>
  <Education></Education>
  <Information></Information>

</template>

<script lang="ts">
import Header from "./components/Header.vue";
import { defineComponent } from "vue";
import Skills from "./components/Skills.vue";
import Statement from "./components/Statement.vue"
import Synopsis from "./components/Synopsis.vue"
import Education from "./components/Education.vue"
import Information from "./components/Information.vue"


export default defineComponent({
  components: {
    Header,
    Skills,
    Statement,
    Synopsis,
    Education,
    Information,
    
  },
  setup() {

  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}


</style>

