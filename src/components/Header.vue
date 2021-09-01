<template>
  <div class="main" style="margin: 0">
    <div class="logo  col-5" :class="{ sale: theme === 'sale' }">
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
  background-color: white;
  color: #292d33;
}

.menu {
    margin-top: 0;
    background-color: #292d33;
}

.menu ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    

    /* background-color: #292d33; */
}

.menu li {
    float: left;
}

.menu li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.menu li a:hover {
    background-color: #ea6309;
    color: white;
}
.sale li a {
  color: #292d33;
}
.sale h2 {
  color: #292d33;
}



</style>
