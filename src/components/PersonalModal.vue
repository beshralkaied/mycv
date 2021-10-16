<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Personal
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div v-for="(names, index) in data" :key="index">
            <input type="checkbox" name="index" @click="isChecked(index), $event" />
            {{ names.name }}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="save()">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import ParsonalStoreService, { finish } from "@/services/ParsonalStoreService";
export default defineComponent({
  emits: {
    onFormSelected: (formsIds: Array<any>) => formsIds.length > 0,
  },

  setup(props, context) {
    const parsonalStoreService = ParsonalStoreService();
    let data = parsonalStoreService.get();
    let parsonal = ref<number[]>([]);
    let fullName = "beshr";
    let name = ref("");
    let city = ref("");
    let job = ref("");

    function isChecked(i: number, event:any) {

      let tempIndex = parsonal.value.findIndex((x) => x == i);
      if (tempIndex > -1) {
        parsonal.value.splice(tempIndex, 1);
      } else {
        parsonal.value.push(i);
      }
    }

    function save() {
      context.emit("onFormSelected", parsonal.value);
    }

    return {
      data,
      parsonal,
      isChecked,
      save,
    };
  },
});
</script>


<style scoped>
</style>