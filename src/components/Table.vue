<template>
  <div>
    <q-table title="Users" :columns="columns" row-key="name" :rows="users">
    </q-table>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getUsers } from "../services/users";
import { mapState, mapActions } from "vuex";

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
      ]
    };
  },
  mounted() {
    this.loadUsers();
  },
  computed: {
    ...mapState(["/users/users"])
  },
  methods: {
    ...mapActions(["/users/setUsers"]),
    async loadUsers() {
      const data = await getUsers();
      console.log(data);
      this.$store.dispatch("setUsers");
    }
  }
});
</script>
