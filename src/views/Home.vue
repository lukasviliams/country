<template>
  <div class="home">
    <Inputs v-model="searchBar" />
    <Spinner v-if="isLoading" />
    <Cards :documents="data" :matching-country="matchingCountry" />
  </div>
</template>

<script>
import { computed, onBeforeMount, ref } from "@vue/runtime-core";
// @ is an alias to /src
import getDocuments from "../composables/getDocuments";
import Spinner from "../components/Spinner.vue";
import Inputs from "../components/Inputs.vue";
import Cards from "../components/Cards.vue";
export default {
  name: "Home",
  components: { Spinner, Inputs, Cards },
  setup() {
    const searchBar = ref("");

    const { isLoading, data, error, load } = getDocuments();
    onBeforeMount(() => {
      load();
    });

    const matchingCountry = computed(() => {
      if (!data.value) return;
      return data.value.filter((country) =>
        country.name.common.toLowerCase().includes(searchBar.value)
      );
    });

    return {
      isLoading,
      data,
      error,
      searchBar,
      matchingCountry,
    };
  },
};
</script>
<style scoped>
.home {
  padding-left: 5vw;
  padding-right: 5vw;
}
</style>
