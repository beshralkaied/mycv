<template>\
<div class="container">

    <!-- scrolling -->
    
    <div class="row padding">
      <SitCard
        :title="'Church Specific'"
        :desc="'The latest design trends meet hand-crafted templates for churches.'"
      />

      <SitCard
        :title="'Website Builder'"
        :desc="'Our website builder will provide the ultimate flexibility and functionality.'"
      />

      <SitCard
        :title="'Caring Support'"
        :desc="'We have your back with our best in class support team.'"
      />
      <SitCard
        :title="'Experience'"
        :desc="'10+ years of experience helping the world build websites with impact.'"
      />
      </div>
</div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import SitCard from "@/components/SitCard.vue"
export default defineComponent({
    components:{
        SitCard
    },
    setup() {
        
    },
})
</script>

<style scoped>
.padding{
    padding-top: 130px;
    padding-bottom: 50px;
}
</style>
