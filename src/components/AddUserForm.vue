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
import { mapState, mapActions } from "vuex";

export default defineComponent({
  name: "AddUserForm",
  data() {
    return {
      name: "",
      email: "",
      company: "",
      added: ""
    };
  },
  methods: {
    ...mapActions(["usersData/addUsers"]),
    addUser() {
      const user = {
        name: this.name,
        email: this.email,
        company: this.company
      };
      this.$store.dispatch("usersData/addUsers", user);
    }
  }
});
</script>
