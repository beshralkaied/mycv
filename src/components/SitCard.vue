<template>
  <div class="container first col-md-4 col-sm-6 col-lg-3  ">
    <div class="padding">
      <div class="d-flex justify-content-center margin">
        <div class="rounded-circle circle"></div>
      </div>
      <div class=" margin">
        <h3 class="margin text">{{ title }}</h3>
        <p>
          <span class="text-muted">
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
.circle {
  width: 100px;
  height: 100px;
  background-color: green;
}
.circle:hover{
    background: linear-gradient(
115deg
,rgb(141,216,22) .6369426751592356%,rgb(15,197,239) 100%);
}
.margin {
  margin-bottom: 20px;
}
.first {
  color: #060221;
}
.text {
  font-weight: bold;
  font-size: 18px;
  color: #060221;
}
.padding {
  padding: 0 30px;
}
</style>
