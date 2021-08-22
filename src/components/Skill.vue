<template>
  <div>
    {{ title  }}{{color}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    color: String,
  },
});
</script>

<style  scoped>
@import url("../assets/style.css");
</style>
