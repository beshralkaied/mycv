<template>
  <Header />
  <div class="container-fluid bgbody">
    <div class="container p-5">
      <form class="bg-white m-auto p-5" @submit.prevent="handleSubmit">
        <h2>Form<span class="span-title">Add</span></h2>
        <hr />
        <label>Full Name:</label>
        <input type="text" required v-model="name" />

        <label>City:</label>
        <input type="text" v-model="city" />

        <label>Job:</label>
        <input type="text" v-model="job" />

        <label>Phone:</label>

        <div
          v-for="(phone, index) in Phones"
          :key="index + new Date().getTime()"
        >
          <input type="tel" v-model="phone.value" placeholder="078-888-8888" />
          <button
            v-if="Phones.length - 1 != 0"
            @click.prevent="delPhone(index)"
          >
            Del
          </button>
        </div>

        <button @click.prevent="addPhone">Add</button>

        <div class="terms fs-3">
          <input type="checkbox" v-model="terms" />
          <label>Accept terms and conditions</label>
        </div>

        <div class="submit">
          <button type="submit" @click="addTodo">Add Form</button>
        </div>

        <div v-if="todos.length">
          <ul>
            <li
              v-for="todo in todos"
              :key="todo.id"
              @click="deleteTodo(todo.id)"
            >
              {{ todo.text }}
            </li>
          </ul>
        </div>
        <div v-else>Woohoo, nothing left todo!</div>
        <div class="home">
          <Toast v-if="showToast" />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import Header from "@/components/Header.vue";
import ParsonalStoreService from "@/services/ParsonalStoreService";
import Toast from "@/components/Toast.vue";
export default defineComponent({
  components: {
    Header,
    Toast,
  },
  props: {
    id: { type: Number, required: false },
    names: { type: Array },
  },

  setup(props) {
    const parsonalStoreService = ParsonalStoreService();
    let name = ref("");
    let city = ref("");
    let job = ref("");
    let Phones = reactive([{ value: "" }]);
    let terms = ref(false);
    
    
    const showToast = ref(false);

    const todos = ref([{ value: "yes yes yes yes", id: 2 }]);
    const newTodo = "no no no no";

    function addTodo() {
      const id = Math.random();
      todos.value = [{ value: newTodo, id }];
    }
    function delTodo(id: number) {
      todos.value = todos.value.filter((todo) => todo.id != id);
    }

    function handleSubmit() {
      
      const data = {
        name: name.value,
        city: city.value,
        job: job.value,
        terms: terms.value,
        Phones: Phones,
        
      };

      if (props.id) {
        parsonalStoreService.setById(props.id, data);
      } else {
        parsonalStoreService.set(data);
      }
    }
    function addPhone() {
      Phones.push({ value: "" });
    }
    function delPhone(index: number) {
      Phones.splice(index, 1);
    }
    function init() {
      if (props.id) {
        const data = parsonalStoreService.getById(props.id);
        name.value = data.name;
        city.value = data.city;
        job.value = data.job;
        Phones = data.Phones;
        terms.value = data.terms;
      }
    }
    onMounted(init);

    return {
      name,
      city,
      job,
      Phones,
      terms,
      handleSubmit,
      addPhone,
      delPhone,
      todos,
      addTodo,
      delTodo,
      newTodo,
      showToast,
    };
  },
});
</script>


<style scoped>
.bgbody {
  background-color: #292d33;
  color: #292d33;
  font-size: 2.3vw;
}
.form-main {
  background-color: #adadad;
  height: 100vh;
  max-width: 600px;
}

form {
  max-width: 420px;
  text-align: left;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 30px;
}
label {
  color: #aaa;
  display: inline-block;
  font-size: 0.5em;
  letter-spacing: 1px;
  font-weight: bold;
  padding-top: 30px;
}
input,
select {
  box-shadow: 0 0 15px 2px black;
  width: 100%;
  box-sizing: border-box;
  border: none;
  color: #555;
  border-radius: 6px;
  font-size: 23px;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: red;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 20px;
  color: white;
}
.submit {
  text-align: center;
}
.error {
  color: red;
  margin-top: 10px;
  font-size: 0.7em;
  font-weight: bold;
}
h2 {
  text-align: center;
  font-size: 4vw;
}
.span-title {
  font-size: 5.5vw;
  color: #ea6309;
}
.todos {
  max-width: 400px;
  margin: 20px auto;
  position: relative;
}
.todos ul {
  position: relative;
  padding: 0;
}
.todos li {
  list-style-type: none;
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  background: white;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
}
.todos li:hover {
  cursor: pointer;
}
</style>