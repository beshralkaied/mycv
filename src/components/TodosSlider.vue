<template>
  <div class="max-width text-center bg-light p-4 m-auto mw-70 shadow shadowbox" >
    <div name="route" mode="out-in" >
      <div >
        <h2 class="fs-4">{{ currentSlide.userId }}</h2>
        <p class="text-muted">{{ currentSlide.title }}</p>

        <div class="container ">
          <div class="slide-box p-5 ">
            <p class="comment bg-black text-light px-4 py-3 shadow">
              {{ currentSlide.completed }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <a href="#!" @click="previus" class="control-slider text-dark p-3">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#!" @click="next" class="control-slider text-dark p-3">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
  
</template>


<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import Slides from "@/components/Slides.vue";
export default defineComponent({
  components: {
    Slides,
  },
  props: {
    data: { type: Array, required: true },
  },
  setup(props) {
    let AllSlides: any[] = [];

    let currentSlide = ref({});
    let currntSlidIndex = ref(0);
    function beforeEnter(el: any) {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    }
    function enter(el: any, done: any) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: 0.2,
      });
    }
    function next() {
      if (currntSlidIndex.value < AllSlides.length - 1) {
        currntSlidIndex.value++;
        beforeEnter;
        enter;
      }
    }
    function previus() {
      if (currntSlidIndex.value > 0) {
        currntSlidIndex.value--;
      }
    }

    function initSlid() {
      AllSlides = props.data;
      currentSlide.value = AllSlides[0];
    }

    watch(
      () => currntSlidIndex.value,
      function nextSlide() {
        currentSlide.value = AllSlides[currntSlidIndex.value];
      }
    );

    watch(() => props.data, initSlid);

    onMounted(initSlid);

    return {
      next,
      previus,
      currentSlide,
    };
  },
});
</script>


<style scoped>
p {
  font-size: 2vw;
}
.loop-div {
  max-width: 300px;
  min-width: 300px;
}
.max-width {
  max-width: 600px;
}
.shadowbox {
  background: linear-gradient(
    180deg,
    #0bccee 0%,
    rgba(0, 0, 0, 0.51) 0%,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
.comment {
  font-size: 0.86rem;
  margin-bottom: 2rem;
  letter-spacing: 0.4px;
}
img {
  max-width: 60px;
}
.control-slider {
  height: 40px;
  width: 40px;
}
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-out;
}


</style>