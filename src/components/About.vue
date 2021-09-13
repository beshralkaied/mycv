<template>
  <Header></Header>
  <div class=" container  ">
    <div class="row ">
    <div class="pt-5 col-md-6 col-sm-12"><Aboutme></Aboutme></div>
    <div class="pt-5 col-md-6 col-sm-12"><Photoo></Photoo></div>
    </div>
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


</style>

