<template>
  <div class="q-pa-md q-gutter-sm">
    <form @submit.prevent="addUser">
      <q-input v-model="name" filled clearable label="Name"></q-input>
      <q-input
        v-model="email"
        filled
        clearable
        type="email"
        label="Email"
      ></q-input>
      <q-input v-model="company" filled clearable label="Company"></q-input>
      <q-btn type="submit" label="Submit"></q-btn>
    </form>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddUser",
  data() {
    return {
      name: "",
      email: "",
      company: "",
      added: ""
    };
  },
  methods: {
    addUser() {
      console.log("hello");
    }
  }
});
</script>
