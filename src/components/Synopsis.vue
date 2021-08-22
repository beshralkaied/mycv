<template>
<div class="p">
<h2>{{ tilte }}</h2>
<h4>{{ discreption }}</h4>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
        tilte: "EXECUTIVE SYNOPSIS",
        discreption: "CAPABLE OF DEVELOPING AND IMPLEMENTING STRATEGIES AND PLANS TO PROVIDE ALL REQUIRED TERMS. PROACTIVE, ACHIEVEMENT-DRIVEN PROFESSIONAL WITH EXCELLENT COMMUNICATION, PROBLEM-SOLVING, DECISION MAKING, PLANNING AND EXECUTION SKILLS",



    };
  },
});
</script>

<style  scoped>
@import url("../assets/style.css");
</style>
