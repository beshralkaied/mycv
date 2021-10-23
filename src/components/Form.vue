<template>
  <Header />
  <Popups />
  <PersonalModal @onFormSelected="formSelected" :stop="stop"/>
  <div class="container-fluid bgbody pb-5 px-5">
    <div class="container form-main">
      <p>
        <a
          class="btn"
          data-bs-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
          >personalForm</a
        >
        <button
          class="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          FamilyForm
        </button>
        <button
          class="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#multiCollapseExample3"
          aria-expanded="false"
          aria-controls="multiCollapseExample3"
        >
          WorkForm
        </button>
      </p>
      <div class="row">
        <div class="col-lg-4">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
              <div v-for="form in forms" :key="form">
                <div>
                  <span>{{ form.name }}</span>
                  <span>{{ form.city }}</span>
                  <span>{{ form.job }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="collapse multi-collapse" id="multiCollapseExample2">
            <div class="card card-body">
              Some placeholder content for the second collapse component of this
              multi-collapse example. This panel is hidden by default but
              revealed when the user activates the relevant trigger.
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="collapse multi-collapse" id="multiCollapseExample3">
            <div class="card card-body">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "@/components/Header.vue";
import Popups from "@/components/Popups.vue";
import PersonalModal from "@/components/PersonalModal.vue";
import ParsonalStoreService, { finish } from "@/services/ParsonalStoreService";
export default defineComponent({
  components: {
    Header,
    Popups,
    PersonalModal,
  },

  setup() {
    const parsonalStoreService = ParsonalStoreService();
    let stop = ref(false)
    
    let forms = ref<any[]>([]);
    function formSelected(formsIds: number[]) {
      forms.value = []
      for (let index = 0; index < formsIds.length; index++) {
        if(forms.value.length < 2){
          stop.value = false
        const formid = formsIds[index];
        const form = parsonalStoreService.getById(formid);
        forms.value.push(form)
      }else{
        stop.value = true
      }
      }
    }

    return {
      formSelected,
      forms,
      stop,
    };
  },
});
</script>


<style scoped>
.bgbody {
  background-color: #292d33;
  color: #292d33;
  font-size: 2.3vw;
}
.form-main {
  background-color: #adadad;
  height: 94vh;
}
</style>