<template>
  <div class="home">
    <Inputs />
    <Spinner v-if="isLoading" />
  </div>
</template>

<script>
import { onBeforeMount } from "@vue/runtime-core";
// @ is an alias to /src
import getDocuments from "../composables/getDocuments";
import Spinner from "../components/Spinner.vue";
import Inputs from "../components/Inputs.vue";
export default {
  name: "Home",
  components: { Spinner, Inputs },
  setup() {
    const { isLoading, data, error, load } = getDocuments();
    onBeforeMount(() => {
      load();
    });
    return { isLoading, data, error };
  },
};
</script>
<style scoped>
.home {
  padding-left: 5vw;
  padding-right: 5vw;
}
</style>
