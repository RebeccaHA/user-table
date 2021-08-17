<template>
  <div>
    <q-table title="Users" :columns="columns" row-key="name" :rows="this.rows">
    </q-table>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import axios from "axios";

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
    axios
      .get("https://renewable.exchange/test/users.json")
      .then(response => (this.rows = response.data));
  }
});
</script>
