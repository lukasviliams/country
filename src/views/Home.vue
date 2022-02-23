<template>
  <div class="home">
    <Inputs />
    <Spinner v-if="isLoading" />\
    <Cards :documents="data" />
  </div>
</template>

<script>
import { onBeforeMount, ref } from "@vue/runtime-core";
// @ is an alias to /src
import getDocuments from "../composables/getDocuments";
import Spinner from "../components/Spinner.vue";
import Inputs from "../components/Inputs.vue";
import Cards from "../components/Cards.vue";
export default {
  name: "Home",
  components: { Spinner, Inputs, Cards },
  setup() {
    const image = ref();
    const country = ref();
    const population = ref();
    const region = ref();
    const capital = ref();
    const nativeName = ref();
    const subRegion = ref();
    const topLevelDom = ref();
    const currencies = ref();
    const languages = ref();
    const borderCountries = ref();

    const { isLoading, data, error, load } = getDocuments();
    onBeforeMount(() => {
      load();
    });

    return {
      isLoading,
      data,
      error,
      image,
      country,
      population,
      region,
      capital,
      nativeName,
      subRegion,
      topLevelDom,
      currencies,
      languages,
      borderCountries,
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
