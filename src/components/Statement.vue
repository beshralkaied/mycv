<template>
<div class="p">
<h2>{{ tilte }}</h2>
<p>{{ discreption }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
        tilte: "PERSONAL STATEMENT",
        discreption: "A highly focused, versatile Computer Science graduate, professionally competent with very good qualifications. Deft in building productive teamsas well as leading and motivating cross-functional teams eliciting superior performances. A proactive achievement-driven professional with strong teamwork ethics, integrity and excellent communication, coordination,problem-solving, decision making, planning and execution skills.",



    };
  },
});
</script>

<style  scoped>
@import url("../assets/style.css");
</style>

