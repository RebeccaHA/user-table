<template>
  <div>
    <q-input
      type="search"
      placeholder="Search.."
      v-model="searchQuery"
    ></q-input>
    <q-table
      title="Users"
      :columns="columns"
      row-key="name"
      :rows="users"
      selection="multiple"
      v-model:selected="selected"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-checkbox v-model="props.selected" />
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.name }}
            <q-popup-edit v-model="props.row.name" title="Update name" buttons>
              <q-input v-model="props.row.name"></q-input>
            </q-popup-edit>
          </q-td>

          <q-td key="email" :props="props">
            {{ props.row.email }}
            <q-popup-edit
              v-model="props.row.email"
              title="Update email"
              buttons
            >
              <q-input type="email" v-model="props.row.email"></q-input>
            </q-popup-edit>
          </q-td>

          <q-td key="company" :props="props">
            <div>{{ props.row.company }}</div>
            <q-popup-edit
              v-model="props.row.company"
              title="Update company"
              buttons
            >
              <q-input v-model="props.row.company"></q-input>
            </q-popup-edit>
          </q-td>
          <q-td key="added" :props="props">{{ props.row.added }}</q-td>
        </q-tr>
      </template>
    </q-table>

    <q-btn @click="deleteSelected">Delete</q-btn>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
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
  setup() {
    const searchQuery = ref("");
  },
  computed: {
    searchUsers() {
      return console.log("helo");
    }
  },
  mounted() {
    this.loadUsers();
  },
  computed: {
    users() {
      return this.$store.state.usersData.users;
    }
  },
  methods: {
    ...mapActions(["usersData/setUsers", "usersData/deleteUsers"]),
    async loadUsers() {
      const data = await getUsers();
      this.$store.dispatch("usersData/setUsers", data);
    },
    deleteSelected() {
      const data = this.selected;
      this.$store.dispatch("usersData/deleteUsers", data);
    }
  }
});
</script>
