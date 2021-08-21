<template>
  <div>
    <q-table
      title="Users"
      :columns="columns"
      row-key="name"
      :rows="this.$store.state.usersData.users"
      selection="multiple"
      v-model:selected="selected"
    >
    </q-table>
    <q-btn @click="deleteSelected">Delete</q-btn>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getUsers } from "../services/users";
import { mapState, mapActions } from "vuex";
import usersData from "../store/usersData";

export default defineComponent({
  name: "Table",

  data() {
    return {
      selected: [],
      columns: [
        {
          name: "name",
          label: "Name",
          field: "name",
          sortable: true,
          align: "left"
        },
        { name: "email", label: "Email", field: "email", sortable: true },
        { name: "company", label: "Company", field: "company", sortable: true },
        { name: "added", label: "Added", field: "added", sortable: true }
      ]
    };
  },
  mounted() {
    this.loadUsers();
  },
  computed: {
    ...mapState(["usersData/users"])
  },
  methods: {
    ...mapActions(["usersData/setUsers", "usersData/deleteUsers"]),
    async loadUsers() {
      const data = await getUsers();
      console.log(data);
      this.$store.dispatch("usersData/setUsers", data);
    },
    deleteSelected() {
      const data = this.selected;
      this.$store.dispatch("usersData/deleteUsers", data);
    }
  }
});
</script>
