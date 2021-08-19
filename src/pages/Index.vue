<template>
  <q-page class="flex flex-center">
    <Table></Table>
    <AddUser></AddUser>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Table from "../components/Table";
import AddUser from "../components/AddUser";

export default defineComponent({
  name: "PageIndex",
  components: {
    Table,
    AddUser
  }
});
</script>
