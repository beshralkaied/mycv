<template>
  <Header />
  <div class="container-fluid">
    <div class="first fs-5 fw-bold row m-auto">
      <div
        v-for="all in data"
        :key="all"
        class="shadow loop col-12 col-lg-4 m-3"
      >
        <span @click="deleteall()" class="del">
          <div class="container py-3 px-4">
            <div>
              <h3><span>Salary :</span>{{ all.salary }}</h3>
            </div>
            <div>
              <h3><span>Start :</span>{{ all.start }}</h3>
            </div>
            <div>
              <h3><span>Hiring :</span>{{ all.hiring }}</h3>
            </div>
            <div>
              <h3><span>Role :</span>{{ all.role }}</h3>
            </div>
            <div>
              <h3><span>Skills :</span>{{ all.skills }}</h3>
            </div>
            <div>
              <h3><span>Accept Terms :</span>{{ all.terms }}</h3>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import WorkStoreService from "@/services/WorkStoreService";
export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const workStoreService = WorkStoreService();
    let data = workStoreService.get();

                      

    return {
      data,
      
    };
  },
});
</script>


<style scoped>
.loop {
  max-width: 335px;
  border-radius: 20px;
  background: #eee;
  color: #777;
}
.first {
  text-align: start;
}
</style>