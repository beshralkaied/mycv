<template>
<div class="p">
  <h2>{{ tilte }}</h2>
  <ul>
    <li>
      <strong>{{ discreption1 }}</strong
      >{{ discreption2 }}
    </li>
    <li>
      <strong>{{ discreption3 }}</strong>
    </li>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      tilte: "EDUCATION",
      discreption1: "Bachelor Degree in Computer Science,",
      discreption2: "Zarqa University, Zarqa-Jordan (Jan 2020)",
      discreption3: "General certificate of high school, Scientific stream.",
    };
  },
});
</script>

<style  scoped>
@import url("../assets/style.css");
</style>
