<template>
  <!-- <div v-for="skill in skillsArray" :key="skill">
    <Skill :title="skill"></Skill>
  </div> -->

  <div>
  <div class="skill">
    <div v-for="skill in k" :key="skill">
      <div
        v-bind:style="{
          position: 'relative',
          top: skill.position.y + 'px',
          left: skill.position.x + 'px',
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
    let position = {
      x: 0,
      y: 0,
    };
    function getposition(x: number, y: number) {
      position.x += x;
      position.y += y;
      return { x: position.x, y: position.y };
    }
    function rand() {
      for (var i = 1; i < 11; i++) {
        var b = Math.floor(Math.random() * 10) + 1;
        if (i != b) {
          if (b == 1) {
            return "html";
          } else if (b == 2) {
            return "css";
          } else if (b == 3) {
            return " Less / Scss";
          }else if (b == 4) {
            return "Boot Strap";
          }else if (b == 5) {
            return " Java Script";
          }else if (b == 6) {
            return "Visual Studio";
          }else if (b == 7) {
            return "JQuery";
          }else if (b == 8) {
            return "PHP";
          }else if (b == 9) {
            return "My SQL";
          }else if (b == 10) {
            return "Java";
          }
        }
      }
    }

    const skillsArray = ["html", "java"];
    console.log(rand());
    const k = [
      {
        position: getposition(100, 38),

        title: rand(),
        color: "#fff",
      },

      {
        position: getposition(-50, 100),
        title: rand(),
        color: "red",
      },

      {
        position: getposition(50, -30),
        title: rand(),
        color: "blue",
      },

       {
        position: getposition(-160, -50),

        title: rand(),
        color: "#fff",
      },

       {
        position: getposition(60, -20),

        title: rand(),
        color: "#fff",
      },

       {
        position: getposition(0, 0),

        title: rand(),
        color: "#fff",
      },

       {
        position: getposition(40, -10),

        title: rand(),
        color: "#fff",
      },

       {
        position: getposition(-400, 200),

        title: rand(),
        color: "#fff",
      },

       {
        position: getposition(0, -50),

        title: rand(),
        color: "#fff",
      },

       {
        position: getposition(10, 5),

        title: rand(),
        color: "#fff",
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
