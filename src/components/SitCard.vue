<template>
<transition
appear
@before-enter="beforeEnter"
@enter="enter"

>
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
</transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import gsap from "gsap"
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
  setup() {
    function beforeEnter(el:any) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(100px)'
    }
    
    function enter(el:any, done:any) {
       gsap.to(el, {
         opacity: 1,
         y: 0,
         duration: 0.8,
         onComplete: done,
         delay: 0.2,

       })
    }
 return {
   beforeEnter,
   enter
 }
 },
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
