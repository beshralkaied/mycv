<template>
  <Header />
  <div class="container-fluid">
    <div class="first fs-5 fw-bold row m-auto">
      
      <div
        v-for="(all,index) in data"
        :key="index + new Date().getTime()"
        class="shadow loop col-12 col-lg-4 m-3"
      >
     
        <button class="del" @click="deleteall(index)">del</button>

        <router-link :to="{name:'FamilyEdit', params:{id:index}}">Edit</router-link>
        <div class="container py-3 px-4">
          <div id="hide">
            <h3 class="s"><span>Name :</span>{{ all.name }}</h3>
          </div>
          <div>
            <h3><span>City :</span>{{ all.city }}</h3>
          </div>
          <div>
            <h3><span>Job :</span>{{ all.job }}</h3>
          </div>
          <div>
            <h3><span>Role :</span>{{ all.role }}</h3>
          </div>
          <div>
            <h3><span>Phone :</span>{{ all.Phone }}</h3>
          </div>
          <div>
            <h3><span>Accept Terms :</span>{{ all.terms }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Header from "@/components/Header.vue";
import FamilyStoreService, { familyFormData } from "@/services/FamilyStoreService";
export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const familyStoreService = FamilyStoreService();
    let data = computed(() => familyFormData)

    function deleteall(i:number) {
      familyStoreService.del(i)
      
    }


    return {
      data: computed(() => data.value),
      deleteall,
     
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
.del {
  display: block;
  
}
.hide{
    display: none;
}
</style>