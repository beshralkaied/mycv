<template>
  <div v-for="skill in skillsArray" :key="skill">
    <!-- <Skill :title="skill"></Skill> -->
  </div>
  <div class="skill">
  <div v-for="skill in k" :key="skill">
    <div
      v-bind:style="{
        background: activeColor,
        width: width + 'px',
        margin: margin + 'px',
        display: ['flex'],
        padding: ['20px'],
        border: [border],
        borderRadius: 100 + '%',
      }"
    >
      <Skill :title="skill.title"></Skill>
      <!-- :color="skill.color" -->
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Skill from "./Skill.vue";
import { defineComponent } from "vue";

// function rand() {
//   for (var i = 1; i < 4; i++) {
//     var b = Math.floor(Math.random() * 3) + 1;
//     if (i != b) {
//       if ( b = 1 ) {
//         return "html";
//       } else if ( b = 2 ) {
//         return "css";
//       } else if ( b = 3 ) {
//         return "js";
//       }
//     }
//   }
// }

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

      {
        title: "css",
        color: "red",
      },

      {
        title: "js",
        color: "blue",
      },
    ];

    return {
      skillsArray,
      k,
      activeColor: "yellow",
      width: 30,
      margin: 10,
      align: "text-align",
      border: "1px solid red",
      radius: "border-radius",
    };
  },
});
</script>
