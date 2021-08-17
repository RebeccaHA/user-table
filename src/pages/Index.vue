<template>
  <q-page class="flex flex-center">
    <Table></Table>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Table from "../components/Table";

export default defineComponent({
  name: "PageIndex",
  components: {
    Table
  }
});
</script>
