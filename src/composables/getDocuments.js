import { ref } from "vue";

const getDocuments = () => {
  const isLoading = ref(false);
  const data = ref(null);
  const error = ref(null);
  const filteredRegion = ref([]);

  const load = async function () {
    isLoading.value = true;
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`, {
        method: "GET",
      });
      data.value = await response.json();
      // Push region froom data collection into filteredRegion reference
      data.value.forEach((region) => {
        filteredRegion.value.push(region.continents);
      });
      // Create array of Regions from proxy
      filteredRegion.value = [
        ...new Set(filteredRegion.value.map((item) => item[0])),
      ];
    } catch (err) {
      err.message = error.value;
      console.log(error.value);
    }
    isLoading.value = false;
  };
  return { isLoading, data, error, filteredRegion, load };
};

export default getDocuments;
