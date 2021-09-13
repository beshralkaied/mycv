<template>
  <div class="container">
    <div class="main text-start mt-5 p-0 ">
    <h2>{{ title }}</h2>
    <h4 class="mt-4">EMAIL</h4>
    <h5 class="mt-4">
      <a  href="mailto:beshr.alkaied@gmail.com">{{ email }}</a>
    </h5>
    <h4 class="mt-4">ROLE</h4>
    <h5 class="mt-4">{{ role }}</h5>
    <h4 class="mt-4">PHONE</h4>
    <h5 class="b mt-4">
      <a href="tel:(+962)79-292-3491">{{ phone }}</a>
    </h5>
    <Download></Download>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Download from "./Download.vue"

export default defineComponent({
  components: {
      Download,
  },
  setup() {
    return {
      title: "About Me",
      email: "beshr.alkaied@gmail.com",
      role: "devloper",
      phone: "(+962)792923491",
    };
  },
});
</script>

<style scoped>
.main {
  
  font-family: Arial, Helvetica, sans-serif;
  line-height: 88px;
  font-weight: 400;
  width: 396px;
  height: auto;
 
}
.main h2 {
  color: #ea6309;
  font-size: 70px;
}
.main h4{
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #292d33;
}
.main h5{
     width: fit-content;
     color: #ea6309;
     
}
.b{
    letter-spacing: 2px;
}
a{
    color: #ea6309;
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  color: #333;
}

a:active {
  text-decoration: none;
}
</style>

