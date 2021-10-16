<template>

<Popup2/>
<Popup3/>
    <a
    class="btn btn-primary"
    data-bs-toggle="modal"
    href="#exampleModalToggle"
    role="button"
    >Open first modal</a
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Popup2 from "@/components/Popup2.vue"
import Popup3 from "@/components/Popup3.vue"

export default defineComponent({
    components:{
        Popup2,
        Popup3,
    },
    setup() {
        
    },
})
</script>


<style scoped>

</style>