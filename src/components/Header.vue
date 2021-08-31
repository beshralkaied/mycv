<template>
  <div class="main" style="margin: 0">
    <div class="logo col-5">
      <img src="@/assets/imge.png" />
      <h2>My Cv</h2>
    </div>
    <div class="menu col-7" >
      
      <ul :class="{ sale: theme === 'sale' }">
        <li><router-link to="/">Home</router-link></li>
        <li><a href="">Skills</a></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
let color = "";
export default defineComponent({
  props: ['theme'],

 

  setup() {
    // function ChangeColor() {
    //   if (axios.post("URL") == axios.post("http://localhost:8080/")) {
    //    return color = "red";
    //   } else {
    //    return color = "blue";
    //   }
    // }
  },
});
</script>



<style scoped>
@import url("../assets/style.css");

.main {
  display: flex;
  margin: 0;
}
.logo {
  display: flex;
  background-color: #292d33;
  padding: 10px 0px 0px 10px;
}
.logo h2 {
  margin: 0 0;
  color: white;
  width: max-content;
}

.sale{
  background-color: brown;
  color: black;
}

</style>
