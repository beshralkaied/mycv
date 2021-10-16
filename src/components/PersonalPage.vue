<template>
  <Header />

  <form @submit.prevent="addTodo()">
    <label>New Phone Number </label>
    <input v-model="newTodo" name="newTodo" autocomplete="off" />
    <button>Add</button>
  </form>
  <h2>Phone List</h2>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">
      <span :class="{ done: todo.done }" @click="doneTodo(todo)">{{
        todo.content
      }}</span>
      <button @click="removeTodo(index)">Remove</button>
    </li>
  </ul>
  <h4 v-if="todos.length === 0">Empty list.</h4>

  <div class="container-fluid">
    <div class="first fs-5 fw-bold row m-auto">
      <div
        v-for="(all, index) in data"
        :key="all"
        class="shadow loop col-12 col-lg-4 m-3"
      >
        <router-link :to="{ name: 'PersonalEdit', params: { id: index } }"
          >Edit</router-link
        >
        <div class="container py-3 px-4">
          <div>
            <h3><span>Name :</span>{{ all.name }}</h3>
          </div>
          <div>
            <h3><span>City :</span>{{ all.city }}</h3>
          </div>
          <div>
            <h3><span>Job :</span>{{ all.job }}</h3>
          </div>
          <div>
            <h3><span>Role :</span>{{ all.role }}</h3>
          </div>
          <div>
            <h3><span>Phone :</span><span v-for="(phone, index) in all.Phones" :key="index">{{phone.value}} <span v-if="index<all.Phones.length-1">, </span> </span> 
            </h3>
          </div>
          <div>
            <h3><span>Accept Terms :</span>{{ all.terms }}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import Header from "@/components/Header.vue";
import ParsonalStoreService, { parsonalFormData } from "@/services/ParsonalStoreService";
export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const parsonalStoreService = ParsonalStoreService();
    
    let data = computed(() => parsonalFormData)

    function deleteall() {
     
    }


    

    const newTodo = ref("");
    const defaultData = [
      {
        done: false,
        content: "Write a blog post",
      },
    ];
    const todosData = defaultData;
    const todos = ref(todosData);
    function addTodo() {
      if (newTodo.value) {
        todos.value.push({
          done: false,
          content: newTodo.value,
        });
        newTodo.value = "";
      }
      saveData();
    }
    function doneTodo(todo: any) {
      todo.done = !todo.done;
      saveData();
    }
    function removeTodo(index: number) {
      todos.value.splice(index, 1);
      saveData();
    }
    function saveData() {
      const storageData = JSON.stringify(todos.value);
      localStorage.setItem("todos", storageData);
    }

    return {
      data,
      deleteall,
      todos,
      newTodo,
      addTodo,
      doneTodo,
      removeTodo,
      saveData,
    };
  },
});
</script>


<style scoped>
.loop {
  max-width: 335px;
  border-radius: 20px;
  background: #eee;
  color: #777;
}
.first {
  text-align: start;
}
</style>