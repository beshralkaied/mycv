<template>
  <h1>{{title}}</h1>
  <h2>{{desc}}</h2>
  <h3>{{paragraph}}</h3>
  <img src="https://dummyimage.com/100x100/000/fff" alt="">
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    paragraph: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>


<style scoped>
</style>