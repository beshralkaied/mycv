<template>
  <div class="container first col-md-12  col-xl-4 text-start ">
    <div class="row pb-5 ">
      <div class="col-2 ">
        <div
          style="width: 50px; height: 50px; background-color: red"
          class=""
        ></div>
      </div>
      <div class="margin col-10 ">
        <h3 class="margin text fs-5 fw-bold lh-lg mb-3">{{ title }}</h3>
        <p>
          <span class="text-muted  lh-lg">
            {{ desc }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>



<style scoped>
.first {
  color: #060221;
      background-color: #f7f8fb;
}

.padding {
  padding: 0 30px;
}

</style>