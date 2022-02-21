<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Spinner v-if="isLoading" />
  </div>
</template>

<script>
import { onBeforeMount } from "@vue/runtime-core";
// @ is an alias to /src
import getDocuments from "../composables/getDocuments";
import Spinner from "../components/Spinner.vue";
export default {
  name: "Home",
  components: { Spinner },
  setup() {
    const { isLoading, data, error, load } = getDocuments();
    onBeforeMount(() => {
      load();
    });
    return { isLoading, data, error };
  },
};
</script>
