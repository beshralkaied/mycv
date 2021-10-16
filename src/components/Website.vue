<template>
  <div class="websit-componant">
    <div class="bg">
      <div class="shadowbox">
        <ScrollHeader />
        <Section />
      </div>
    </div>
    <div class="bgall">
      <SitCards />
      <WebSitSlider />
      <ButtonSection />
      <FixedSection />
      <SecendSitCards />
      <HoverSitCards />
      <LastSection />
    </div>
  </div>

  <div class="fdiv footer"><Footer /></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ScrollHeader from "@/components/ScrollHeader.vue";
import Section from "@/components/Section.vue";
import SitCards from "@/components/SitCards.vue";
import FisrtSlider from "@/components/FirstSlider.vue";
import ButtonSection from "@/components/ButtonSection.vue";
import FixedSection from "@/components/FixedSection.vue";
import SecendSitCards from "@/components/SecendSitCards.vue";
import HoverSitCards from "@/components/HoverSitCards.vue";
import Footer from "@/components/Footer.vue";
import LastSection from "@/components/LastSection.vue";
import WebSitSlider from "@/components/WebSitSlider.vue";

export default defineComponent({
  components: {
    ScrollHeader,
    Section,
    SitCards,
    FisrtSlider,
    ButtonSection,
    FixedSection,
    SecendSitCards,
    HoverSitCards,
    Footer,
    LastSection,
    WebSitSlider,
   
  },
  setup() {},
});
</script>

<style scoped>
.color {
  color: #000;
}
.bg {
  background-image: url(https://freechurchwebsites.com/app/uploads/2019/08/FCW-4-compressor.jpg?id=7847);
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.shadowbox {
  background: linear-gradient(
    180deg,
    #0bccee 0%,
    rgba(0, 0, 0, 0.51) 0%,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}

.bgall {
  background-color: white;
}
.fdiv {
  background-color: #2d323d;
  width: 100%;
  z-index: -1;
  min-height: 411px;
}

.lasthieght {
  height: 411px;
}

@media (min-width: 992px) {
  .footer {
    position: fixed;
    bottom: 0;
  }
  .websit-componant {
    margin-bottom: 411px;
  }
}
</style>
