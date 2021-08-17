<template>
  <q-page class="flex flex-center">
    <table></table>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import table from "../components/Table.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Table
  }
});
</script>
