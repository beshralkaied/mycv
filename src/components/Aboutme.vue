<template>
  <div class="container main">
    <h2>{{ title }}</h2>
    <h4>EMAIL</h4>
    <h5>
      <a  href="mailto:beshr.alkaied@gmail.com">{{ email }}</a>
    </h5>
    <h4>ROLE</h4>
    <h5>{{ role }}</h5>
    <h4>PHONE</h4>
    <h5 class="b">
      <a href="tel:(+962)79-292-3491">{{ phone }}</a>
    </h5>
    <Download></Download>
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
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 88px;
  font-weight: 400;
  padding: 30px 30px;
  width: 396px;
  height: 563px;
 
}
.main h2 {
  color: #ea6309;
  font-size: 70px;
  margin-bottom: 0%;
  width: fit-content;
}
.main h4{
    margin-bottom: 0%;
    width: fit-content;
    margin: 30px 0 0 0;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #292d33;
}
.main h5{
    margin-bottom: 0%;
     width: fit-content;
     margin: 30px 0 0 0;
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

