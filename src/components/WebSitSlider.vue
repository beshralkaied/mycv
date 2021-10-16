<template>
  <div class="max-width text-center bg-light p-4 m-auto mw-70 shadow shadowbox">
    <transition name="route" mode="out-in">
      <div>
        <h2 class="fs-4">{{ currentSlide.title }}</h2>
        <p class="text-muted">{{ currentSlide.desc }}</p>

        <div class="container">
          <div class="slide-box p-5">
            <p class="comment bg-black text-light px-4 py-3 shadow">
              {{ currentSlide.paragraph }}
            </p>
            <img class="rounded-circle" :src="currentSlide.image" />
          </div>
        </div>
      </div>
    </transition>
    <a href="#!" @click="previus" class="control-slider text-dark p-3">
      <i class="fas fa-chevron-left"></i>
    </a>
    <a href="#!" @click="next" class="control-slider text-dark p-3">
      <i class="fas fa-chevron-right"></i>
    </a>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import Slides from "@/components/Slides.vue";
export default defineComponent({
  components: {
    Slides,
  },
  setup() {
    let AllSlides = [
      {
        title: "test",
        desc: "this is text",
        paragraph: "paragraph",
        image: "https://dummyimage.com/1000x1000/000/fff",
      },
      {
        title: "test2",
        desc: "this is text2",
        paragraph: "paragraph2",
        image: "https://dummyimage.com/2000x2000/000/fff",
      },
      {
        title: "test3",
        desc: "this is text3",
        paragraph: "paragraph3",
        image: "https://dummyimage.com/3000x3000/000/fff",
      },
    ];

    let currentSlide = ref(AllSlides[0]);
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

    watch(
      () => currntSlidIndex.value,
      function nextSlide() {
        currentSlide.value = AllSlides[currntSlidIndex.value];
      }
    );
    return {
      next,
      previus,
      currentSlide,
    };
  },
});
</script>


<style scoped>
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