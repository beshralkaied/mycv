<template>
  <div id="snackbar" class="show">
    <div
      v-for="(todo, index) in todos"
      :key="index"
      class="
        sub-popup
        bg-danger
        text-white
        p-2
        d-flex
        justify-content-spacebetween
      "
    >
      <span :class="{ done: todo.done }" @click="doneTodo(todo)">{{
        todo.content
      }}</span>
      <button @click="removeTodo(index)" class="btn btn-danger btn-sm">
        Remove
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";

export default defineComponent({
  props: {
      
    content: { type: String, required: true },
    type: String as PropType<"succes" | "error">,
  },
  setup(props) {
    let todos = ref<{ done: boolean; content: string }[]>([]);

    function addTodo() {
      todos.value.push({
        done: false,
        content: props.content,
      });
      hideTimeOut();
    }
    function doneTodo(todo: any) {
      todo.done = !todo.done;
    }
    function removeTodo(index: number) {
      todos.value.splice(index, 1);
    }

    function hideTimeOut() {
      setTimeout(function () {
        todos.value.splice(0, 1);
      }, 3000);
    }
    
    watch(() => props.content,
    () => {addTodo(); console.log(123)}
    )
    return {
      todos,
      addTodo,
      doneTodo,
      removeTodo,
    };
  },
  
});
</script>


<style scoped>
#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;

  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 85%;
  bottom: 30px;
  font-size: 17px;
}

.sub-popup {
  margin-bottom: 20px;
  border-radius: 8px;
  font-size: 0.97rem;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}
.hide {
  visibility: hidden;
}
</style>