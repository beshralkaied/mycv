<template>
  <div class="px-5 bgg">
    <!-- scrolling -->

    <div class="row padding">
      <CecondSitCard
        :title="'No Coding Skills Required'"
        :desc="'Starting from headers through the footers, every bit of your website has been engineered for your church’s complete control.'"
      />

      <CecondSitCard
        :title="'Church Website Builder'"
        :desc="'Limitless customization. Visually customize any element of your website with the security of an instant backup.'"
      />

      <CecondSitCard
        :title="'Online Documentation'"
        :desc="'Free Church Websites provides you with a fully integrated documentation in written and video format.'"
      />
      <CecondSitCard
        :title="'Social Media Integration'"
        :desc="'Easy social media integrations will allow your website to seamlessly connect with all your various social media accounts.'"
      />
      <CecondSitCard
        :title="'SEO Optimized'"
        :desc="'Help your church be found with tools and documentation on how to optimize your website for search. '"
      />
      <CecondSitCard
        :title="'Automatic Updates'"
        :desc="'The Free Church Websites platform will take care of all updates so that you can focus on your church’s outreach.'"
      />
    </div>
  </div>
</template>


<script lang="ts">
import SitCard from "@/components/SitCard.vue";
import CecondSitCard from "@/components/CecondSitCard.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    SitCard,
    CecondSitCard,
  },
  setup() {},
});
</script>

<style scoped>
.padding {
  padding-top: 130px;
  padding-bottom: 50px;
}
.bgg {
  background-color: #f4f5f6;
}
</style>
