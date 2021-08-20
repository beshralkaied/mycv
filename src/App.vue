<template>
  <Header></Header>
  <Skills></Skills>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import { defineComponent } from "vue";
import Skills from "./components/Skills.vue";

export default defineComponent({
  components: {
    Header,
    Skills,
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
  margin-top: 60px;
}
</style>
