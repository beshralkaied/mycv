<template>
  <Header />

  <div class="container-fluid bgbody">
    <div class="container p-5">
      <form class="bg-white m-auto p-5" @submit.prevent="handleSubmit">
        <h2>Form<span class="span-title" v-if="id">Edit</span><span class="span-title" v-else>Add</span></h2>
        <hr />
        <label>Full Name:</label>
        <input type="text" required v-model="name" />

        <label>City:</label>
        <input type="text" v-model="city" />

        <label>Job:</label>
        <input type="text" v-model="job" />

        <label>Phone:</label>
        <input type="tel" v-model="Phone" placeholder="078-888-8888" />

        <div class="terms fs-3">
          <input type="checkbox" v-model="terms" />
          <label>Accept terms and conditions</label>
        </div>

        <div class="submit">
          <button type="submit" @click="myFunction">Add Form</button>
        </div>
        <div id="snackbar">Some text some message..</div>
      </form>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Header from "@/components/Header.vue";
import FamilyStoreService from "@/services/FamilyStoreService";
export default defineComponent({
  components: {
    Header,
  },
  props: {
    id: { type: Number, required: false },
  },

  setup(props) {
    const familyStoreService = FamilyStoreService();
    let name = ref("");
    let city = ref("");
    let job = ref("");
    let Phone = ref("");
    let terms = ref(false);

    function handleSubmit() {
      const data = {
        name: name.value,
        city: city.value,
        job: job.value,
        Phone: Phone.value,
        terms: terms.value,
      };

      if (props.id) {
        familyStoreService.setById(props.id, data);
      } else {
        familyStoreService.set(data);
      }
    }
    function init() {
      if (props.id) {
        const data = familyStoreService.getById(props.id);
        name.value = data.name;
        city.value = data.city;
        job.value = data.job;
        Phone.value = data.Phone;
        terms.value = data.terms;
      }
     
    }
    onMounted(init);

    function myFunction() {
    let x :any  
   x =  document.getElementById("snackbar");
  x.className = "show";

  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
    return {
      name,
      city,
      job,
      Phone,
      terms,
      handleSubmit,
      myFunction,
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
#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>