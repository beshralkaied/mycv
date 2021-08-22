<template>
<div class="p">
  <h2>{{ tilte }}</h2>
  <ul>
  <li>{{ discreption1 }}</li>
  <li>{{ discreption2 }}</li>
  <li>{{ discreption3 }}</li>
  </ul>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      tilte: "PERSONAL INFORMATION",
      discreption1: "Date of Birth: 26 march 1997",
      discreption2: "Languages: Arabic, English",
      discreption3: " References: Available Upon Request",
    };
  },
});
</script>

<style  scoped>
@import url("../assets/style.css");
</style>
