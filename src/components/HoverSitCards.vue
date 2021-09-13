<template>
  <div class="container px-5">
    <!-- scrolling -->

    <div class="row padding ">
      <HoverSitCard
        :title="'Tech Soup – Super Low Cost Software and Hardware for Churches'"
        :desc="' To have a website you need a computer, software for that computer and various accessories. All that can'"
      />
      <HoverSitCard
        :title="'Do Free Church Websites Really Work Out?'"
        :desc="' Free Pens. Free mugs. Free Buttons. Free Websites? As you walk through the stands everyone wants to give you'"
      />
      <HoverSitCard
        :title="'The Internet and the Persecuted Church'"
        :desc="' For those of us living in Western nations with democratic governments, there is no fear in posting our'"
      />

    </div>
  </div>
</template>


<script lang="ts">
import HoverSitCard from "@/components/HoverSitCard.vue"
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    HoverSitCard,
    
},
  setup() {},
});
</script>

<style scoped>
.padding {
  padding-top: 130px;
  padding-bottom: 50px;
}
</style>
