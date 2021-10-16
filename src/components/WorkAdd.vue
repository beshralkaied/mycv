<template>
  <Header />

  <div class="container-fluid bgbody">
    <div class="container p-5">
      <form class="bg-white m-auto p-5" @submit.prevent="handleSubmit">
        <h2>Form<span class="span-title">Add</span></h2>
        <hr />
        <label>Salary:</label>
        <input type="text"  v-model="salary" />

        <label>Start Date:</label>
        <input type="date" v-model="start" />
        <div v-if="startError" class="error">{{ startError }}</div>

        <label>Hiring Date:</label>
        <input type="date" v-model="hiring" />

        <label>Salary Type:</label>
        <select v-model="role">
          <option value="hourly">Hourly</option>
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
        </select>

        <label>Skills</label>
        <input
          type="text"
          v-model="tempSkill"
          @keydown.enter.prevent="addSkill"
        />
        <div v-for="skill in skills" :key="skill" class="pill">
          <span @click="deleteSkill(skill)"> {{ skill }} </span>
        </div>

        <div class="terms fs-3">
          <input type="checkbox" v-model="terms"  />
          <label>Accept terms and conditions</label>
        </div>

        <div class="submit">
          <button type="submit" class="btn-submit">Add Form</button>
        </div>
      </form>
    </div>
  </div>
  <Toast :content="notification" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header from "@/components/Header.vue";
import WorkStoreService from "@/services/WorkStoreService";
import Toast from "@/components/Toast.vue";
export default defineComponent({
  components: {
    Header,
    Toast,
  },

  setup() {
    const workStoreService = WorkStoreService();
    let salary = ref("");
    let start = ref(new Date());
    let hiring = ref(new Date());
    let role = ref("");
    let terms = ref(false);
    let tempSkill = ref("");
    let skills = ref<string[]>([]);
    let startError = ref("");
    let notification = ref("");
    let counte = 0;
    function addSkill(e: any) {
      if (tempSkill.value) {
        if (!skills.value.includes(tempSkill.value)) {
          skills.value.push(tempSkill.value);
        }
        tempSkill.value = "";
      }
    }

    function deleteSkill(skill: string) {
      skills.value = skills.value.filter((item) => {
        return skill !== item;
      });
    }

    function validate() {
      let validObj: {valid:boolean, errorMsg:string} = {valid:true, errorMsg:""}
      

      if (!salary.value){ 
        validObj.valid = false;
        validObj.errorMsg +="\n Salary is requird"
        }

      if (!start.value) {
        validObj.valid = false;
        validObj.errorMsg +="\n Start is requird"
        }

      if (!hiring.value) {
        validObj.errorMsg +="\n Hiring is requird"
        validObj.valid = false;
        }

      if (!terms.value) {
        validObj.errorMsg +="\n Trems is requird"
        validObj.valid = false;
        }

       if(start.value < hiring.value) {
         validObj.valid = false
         }

      return validObj;
    }

    function handleSubmit() {
      debugger
      startError.value =
        start.value > hiring.value ? "" : "must be after the hiring date";
      const data = {
        salary: salary.value,
        start: start.value,
        hiring: hiring.value,
        role: role.value,
        skills: skills.value,
        terms: terms.value,
      };
        let msg: {valid:boolean, errorMsg:string} = validate()
      if (msg.valid) {
        workStoreService.set(data);
        notification.value = ++counte + ". Work Form Added Successfully";
      } else {
        notification.value = ++counte + ". Work Form Add faild" + msg.errorMsg;
      }
    }

    return {
      salary,
      start,
      hiring,
      tempSkill,
      startError,
      role,
      terms,
      skills,
      addSkill,
      deleteSkill,
      handleSubmit,
      notification,
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
.btn-submit {
  background: red;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 20px;
  color: white;
  text-align: center;
}
</style>