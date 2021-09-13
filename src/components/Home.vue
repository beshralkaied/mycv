<template>
  <div class="firstdiv">
    <Header :theme="'sale'" />
    <div class="">
    <div class="maindiv mt-5 mx-auto">Development Services</div>
    <div class="mainp mt-2 mb-3 mx-auto">
      Sample text. Click to select the text box. Click again or double click to
      start editing the text.
    </div>

    <HomeCards></HomeCards>
    </div>
    <Statement></Statement>
    <Synopsis></Synopsis>
    <Skills></Skills>
    <Education></Education>
    <Information></Information>
  </div>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import { defineComponent } from "vue";
import Skills from "@/components/Skills.vue";
import Statement from "@/components/Statement.vue";
import Synopsis from "@/components/Synopsis.vue";
import Education from "@/components/Education.vue";
import Information from "@/components/Information.vue";
import HomeCards from "@/components/HomeCards.vue";

export default defineComponent({
  components: {
    Header,
    Skills,
    Statement,
    Synopsis,
    Education,
    Information,
    HomeCards,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.maindiv {
  font-size: 3.75rem;
  font-weight: 700;
  color: #ea6309;
}

.mainp {
  font-size: 1.25rem;
}
.firstdiv {
  height: 100vh;
  overflow: auto;
  background-color: #292d33;
}
</style>
