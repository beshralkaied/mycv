<template>

  <Header></Header>
  <div class="container hh">
  <div class="col-6"><Aboutme></Aboutme></div>
  <div class="col-6"><Photoo></Photoo></div>
  </div>
</template>

<script lang="ts">
import Header from "./Header.vue";
import Aboutme from "./Aboutme.vue";
import Photoo from "@/components/Photoo.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Header,
    Aboutme,
    Photoo,
  },
  setup() {},
});
</script>

<style scoped>
.hh{
  margin-top: 50px;
  display: flex;
}
</style>

