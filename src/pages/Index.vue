<template>
  <q-page class="flex flex-center">
    <Table></Table>
    <AddUserForm></AddUserForm>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Table from "../components/Table";
import AddUserForm from "../components/AddUserForm";

export default defineComponent({
  name: "PageIndex",
  components: {
    Table,
    AddUserForm
  }
});
</script>
