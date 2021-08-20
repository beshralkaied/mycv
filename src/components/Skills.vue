<template>
  <div v-for="skill in skillsArray" :key="skill">
    <Skill :title="skill"></Skill>
    
  </div>
  <div v-for="skill in k" :key="skill">
    <Skill :title="skill.title" :color="skill.color"></Skill>
  </div>
</template>

<script lang="ts">
import Skill from "./Skill.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Skill,
  },
  setup() {
    const skillsArray = ["html", "java"];

    const k = [
      {
        title: "html",
        color: "#fff",
      },
      {},
    ];

    return {
      skillsArray,
      k,
    };
  },
});
</script>
