<template>
  <div id="ScrollHeaderId"><Header :theme="classes" /></div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
  setup() {
     let classes = ref( 'transparent');
    function OnScroll() {
      if (window.pageYOffset > 625) {
          let elm = document.getElementById("ScrollHeaderId");
          if(!!elm){
              classes.value ='LeightHeader'
            elm.className = "fixed-top bg-white text-dark shadow-sm"
          }
        
      }else{
           let elm = document.getElementById("ScrollHeaderId");
          if(!!elm){
              classes.value ='transparent'
            elm.className = ""
          }
      }
    }
    window.onscroll = OnScroll;
    return{
        classes,
    }
        
    
  },

});
</script>


<style scoped>
</style>