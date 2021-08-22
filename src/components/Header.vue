<template>
  <div class="main" style="margin: 0">
    <div class="logo">
      <img src="@/assets/imge.png" />
      <h2>My Cv</h2>
    </div>
    <div class="link menu">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">About</a></li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
// import imagelogo from '../assets/image.png';

export default defineComponent({
  props: {},
  setup() {},
});
</script>



<style scoped>
@import url("../assets/style.css");

.main {
  border-bottom: 1px solid;
  display: flex;
  justify-content: space-between;
  margin: 0;
}
.logo {
  display: flex;
  background-color: #333;
  padding: 10px 0px 0px 10px;
}
.logo h2 {
  margin: 0 0;
  color: white;
  width: max-content;
}
.link {
  width: 100%;
}
.link a {
  margin-left: 20px;
}
</style>
