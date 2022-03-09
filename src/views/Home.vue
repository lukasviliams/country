<template>
  <div class="home">
    <Inputs
      v-model:searchBar="searchBar"
      v-model:selected="selected"
      :filtered-region="filteredRegion"
    />
    <Spinner v-if="isLoading" />
    <Cards :documents="data" :matching-country="matchingCountry" />
  </div>
</template>

<script>
import { computed, onBeforeMount, ref } from "@vue/runtime-core";
// @ is an alias to /src
import getDocuments from "../composables/getDocuments";
import getDocumentsReg from "../composables/getDocumentsReg";
import Spinner from "../components/Spinner.vue";
import Inputs from "../components/Inputs.vue";
import Cards from "../components/Cards.vue";
export default {
  name: "Home",
  components: { Spinner, Inputs, Cards },
  setup() {
    const searchBar = ref("");
    const selected = ref(null);
    const { isLoading, data, error, filteredRegion, load } = getDocuments();
    const { dataRegion, errorRegion, isLoadingRegion, region, loadRegion } =
      getDocumentsReg();

    // Load data before mounted
    onBeforeMount(() => {
      load();
      loadRegion();
    });

    const matchingCountry = computed(() => {
      // APi call in case there is a value inside selected ref and return computed value based on searchbarValue reference inside inputs/input
      if (selected.value) {
        region.value = selected.value;
        loadRegion();
        return dataRegion.value.filter((country) =>
          country.name.common.toLowerCase().includes(searchBar.value)
        );
      }
      // Filter data from data.value comming from composables/getdocuments. Data are filter from $emitinput searBar reference
      if (!data.value) return;
      return data.value.filter((country) =>
        country.name.common.toLowerCase().includes(searchBar.value)
      );
    });

    return {
      isLoading,
      data,
      error,
      filteredRegion,
      searchBar,
      selected,
      matchingCountry,
      dataRegion,
      errorRegion,
      isLoadingRegion,
      region,
      loadRegion,
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
