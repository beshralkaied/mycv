<template>
  <div class="container all">
    <div class="suball">
      

      <HomeCard
        :title="'PERSONAL STATEMENT'"
        :desc="'A highly focused, versatile Computer Science graduate,professionally competent with very good qualifications. Deft in building productive teamsas well as leading and motivating cross-functional teams eliciting superior performances. A proactive achievement-driven professional with strong teamwork ethics, integrity and excellent communication, coordination,problem-solving, decision making, planning and execution skills.'"
      />

      <HomeCard
        :title="'EXECUTIVE SYNOPSIS'"
        :desc="'CAPABLE OF DEVELOPING AND IMPLEMENTING STRATEGIES AND PLANS TO PROVIDE ALL REQUIRED TERMS. PROACTIVE, ACHIEVEMENT-DRIVEN PROFESSIONAL WITH EXCELLENT COMMUNICATION, PROBLEM-SOLVING, DECISION MAKING, PLANNING AND EXECUTION SKILLS'"
      />

      <HomeCard
        :title="'EDUCATION'"
        :desc="'Bachelor Degree in Computer Science,Zarqa University, Zarqa-Jordan (Jan 2020) General certificate of high school, Scientific stream.'"
      />
      <HomeCard
        :title="'PERSONAL INFORMATION'"
        :desc="'  Date of Birth: 26 march 1997 Languages: Arabic, English References: Available Upon Request'"
      />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import HomeCard from "@/components/HomeCard.vue"

export default defineComponent({
    components:{
        HomeCard,
    },
  setup() {

      
  },
});
</script>


<style scoped>

.all {
  display: flex;
  grid-gap: 63px;
  width: 100%;
  height: 1140px;
  grid-template-columns: repeat(3, calc(33.3333% - 42px));
  min-height: 970px;
  flex-wrap: wrap;
  position: relative;
}
.suball {
  display: flex;
  width: 1111px;
  height: 1140px;
  grid-template-columns: repeat(3, calc(33.3333% - 42px));
  min-height: 970px;
  flex-wrap: wrap;
}

</style>
