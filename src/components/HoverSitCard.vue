<template>
  <a class="first col-md-12 col-xl-4 text-start px-0 py-3 " src="">
    <article class="cardd p-5 rounded">
      <h3 class="fs-4 fw-normal lh-sm">{{ title }}</h3>
      <p>
        <span class="text-muted">
          {{ desc }}
        </span>
      </p>
      <article>
          <div class="row">
        <img
          alt="fcw"
          src="https://secure.gravatar.com/avatar/1a5e263c520af66c66bdd7482b2ecdcf?s=50&amp;d=mm&amp;r=g"
          srcset="
            https://secure.gravatar.com/avatar/1a5e263c520af66c66bdd7482b2ecdcf?s=100&amp;d=mm&amp;r=g 2x
          "
          class="col rounded-circle"
          style="width:50px; "
        />
        <div class="col">
        <h2>October 15, 2019</h2>
        <p class="textp">fcw</p>
        </div>
          </div>
      </article>
    </article>
  </a>
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
  text-decoration-line: none;
}

.cardd {
  min-height: 364px;
  background-color: #f4f5f6;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.cardd:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.cardd h2 {
  color: #9b9b9b;
  font-size: 12px;
  line-height: 1.5em;
  letter-spacing: 0.1em;
}
.textp {
  font-size: 11px;
  line-height: 1.5em;
  font-weight: 400;
  color: #000;
  letter-spacing: 0.2em;
}
img{
        max-width: 75px;
    max-height: 50px;
}
</style>