<template>
  <Header />
  <div v-if="Data.length">
    <TodosSlider :data="Data" />
  </div>
  <div v-else>
    <div class="linear-background container">
      <div class="inter-draw"></div>
      <div class="inter-crop"></div>
      <div class="inter-right--top"></div>
      <div class="inter-right--bottom"></div>
    </div>
  </div>
  <button @click="fire()" :disabled="loading">
    <span v-if="loading"><i class="fas fa-spinner fa-spin"></i></span>
    <span v-else>click here</span>
  </button>
  <small>{{ Data }} {{ error }}</small>
</template>


<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import Header from "@/components/Header.vue";
import TodosStoreService from "@/services/TodosStoreService";
import TodosSlider from "@/components/TodosSlider.vue";
export default defineComponent({
  components: {
    Header,
    TodosSlider,
  },
  setup() {
    const todosStoreService = TodosStoreService();

    let error = ref("");
    let Data = ref<any[]>([]);
    let loading = ref(false);

    // const getTodos = (resource: string) => {
    //   return new Promise((resolve, reject) => {
    //     const request = new XMLHttpRequest();
    //     request.addEventListener("readystatechange", () => {
    //       console.log("im in readystat");
    //       if (request.readyState === 4 && request.status === 200) {
    //         const data = JSON.parse(request.responseText);
    //         resolve(data);
    //       } else if (request.readyState === 4) {
    //         reject("coud not fetch data");
    //       }
    //     });
    //     request.open("GET", resource);
    //     request.send();
    //     loading.value = true;
    //   });
    // };

    // function getTodosCallback(err: any, data: any) {
    //   console.log("callback fired");
    //   loading.value = false;
    //   if (err) {
    //     error.value = err;
    //   } else {
    //     Data.value = data;
    //   }
    // }

    function fire() {
      todosStoreService
        .getDataServer("https://jsonplaceholder.typicode.com/todos/")
        .then((data: any) => {
          loading.value = false;
          Data.value = data;
          console.log("promise rsolved:", data);
        })
        .catch((err) => {
          loading.value = false;
          error.value = err;
          console.log("promise rejected:", err);
        });
    }

    // fetch("https://jsonplaceholder.typicode.com/todos/")
    //   .then((response) => {
    //     console.log("resolved", response);
    //     return response.json();
    //   })
    //   .then((data) => {
    //       Data.value = data
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //       error.value = err
    //     console.log("rejected", err);
    //   });

    //   const getSomething = () => {
    //       return new Promise((resolve, reject) => {
    //         //   resolve('some data')
    //           reject('some error')
    //       })
    //   }

    //   getSomething().then((data) => {
    //       console.log(data)
    //   }, (err) => {
    //       console.log(err)
    //   })

    // getTodos((err: any, data: any) => {
    //   console.log("callback fired");
    //   if (err) {
    //     return err;
    //   } else {
    //     return data;
    //   }
    // });
    return {
      Data,
      error,
      loading,
      fire,
    };
  },
});
</script>



<style scoped>
@keyframes placeHolderShimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.linear-background {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 1000px 104px;
  height: 200px;
  position: relative;
  overflow: hidden;
  max-width: 500px;
}
.inter-draw {
  background: #fff;
  width: 100%;
  height: 100px;
  position: absolute;
  top: 100px;
}
.inter-right--top {
  background: #fff;
  width: 100%;
  height: 20px;
  position: absolute;
  top: 20px;
  left: 100px;
}
.inter-right--bottom {
  background: #fff;
  width: 100%;
  height: 50px;
  position: absolute;
  top: 60px;
  left: 100px;
}
.inter-crop {
  background: #fff;
  width: 20px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 100px;
}
</style>