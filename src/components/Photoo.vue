<template>
  <!-- <img alt="Vue logo" :src="getURL()" />
    <img alt="Vue logo" src="@/assets/logo.png" /> -->
  <div class="po">
    <div class="test rounded-circle"></div>
    <div class="rounded-circle test2"></div>
  </div>
</template>

<script lang="ts">
// import image from "@/assets/logo.png"
import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  // data() {
  //     return { imgPath: "@/assets/logo.png" };
  //   },

  //   methods: {

  //     getURL() {
  //         //

  //       // console.log(path)
  //       return (this.imgPath)
  //     }
  //   },

  // setup() {
  //   return { imgPath: "@/assets/logo.png" };
  // },

  // methods: {

  //   getURL() {
  //       //

  //     // console.log(path)
  //     return (this.imgPath)
  //   }
  // },
});
</script>

<style scoped>
.test2 {
  margin: -440px auto 0 -37px;
 
  background-image: url('../assets/004-sustainability-1.png');
      background-repeat: no-repeat;
      object-fit: cover;
      background-size: cover;
  width: 500px;
  height: 500px;
}
.test {
  background-color: #ea6309;
  width: 500px;
  height: 500px;
  margin: 0 30px 0 auto;
}

.po {
  position: relative;
}
</style>

