import { ref } from "vue";

const getDocument = () => {
  const data = ref(null);
  const error = ref(null);
  const isLoading = false;
  const name = ref("");
  const currencies = ref(null);

  const load = async function () {
    // isLoading.value = true;
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name.value}`,
        {
          method: "GET",
        }
      );
      data.value = await response.json();
      data.value.forEach((country) => {
        currencies.value = Object.keys(country.currencies);
      });
    } catch (err) {
      error.value = err.message;
    }
    // isLoading.value = false;
  };
  return {
    data,
    error,
    isLoading,
    name,
    currencies,
    load,
  };
};

export default getDocument;
