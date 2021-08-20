<template>
  <div class="main">
    <div class="logo">
      <img :src="'./src/assets/logo.png'" />
      <h2>title</h2>
    </div>
    <div class="link">
      <a href="">home</a>
      <a href="">about</a>
      <a href="">skills</a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {},
  setup() {},
});
</script>
<style scoped>
.main {
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;
}
.logo {
  display: flex;
}
.logo h2 {
  margin: 0 0;
}
.link {
  width: 100%;
}
.link a {
  margin-left: 20px;
}
</style>
