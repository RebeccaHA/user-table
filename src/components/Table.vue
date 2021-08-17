<template>
  <div>
    <q-table
      title="Users"
      :columns="columns"
      row-key="name"
      :rows="this.$store.state.users"
    >
    </q-table>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getUsers } from "../services/users";

export default defineComponent({
  name: "Table",
  data() {
    return {
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
      ],
      rows: []
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      const data = await getUsers();
      this.$store.dispatch("setUsers", data);
    }
  }
});
</script>
