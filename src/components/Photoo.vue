<template>
  <div class="container position-relative pt-5">
    <div>
      <img
        class="img-fluid rounded-circle position-absolute  img"
        src="https://dummyimage.com/2000x2000/ea6309/ea6309"
        alt=""
      />
    </div>
    <div>
      <img
        class="img-fluid rounded-circle"
        src="https://dummyimage.com/3000x3000/000/fff"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  setup() {
    return {};
  },
});
</script>

<style scoped>
.img {
  z-index: -1;
  left: 78px;
  top: 0;
}
.pp {
  position: relative;
}
</style>

