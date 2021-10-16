<template>
      <div
    class="modal fade"
    id="exampleModalToggle3"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel23"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 3</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Hide this modal and show the sec with the button below.
        </div>
        <div class="modal-footer">
          <button
            class="btn btn-primary"
            data-bs-target="#exampleModalToggle3"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
          >
            Back to sec
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>


<style scoped>

</style>