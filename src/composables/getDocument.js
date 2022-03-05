import { ref } from "vue";

const getDocument = () => {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);
  const name = ref("");
  const currencies = ref(null);
  const nativeName = ref(null);

  const load = async function () {
    isLoading.value = true;
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name.value}`,
        {
          method: "GET",
        }
      );
      data.value = await response.json();
      console.log(data.value);
      //////////// Currencies
      data.value.forEach((country) => {
        currencies.value = Object.keys(country.currencies);
      });
      // ////////// Native name
      nativeName.value = data.value[0].name.nativeName;
      // First name in array of native names
      nativeName.value = Object.entries(nativeName.value);
      nativeName.value = nativeName.value[0][1].official;
      // console.log(nativeName.value[0][1].official);
    } catch (err) {
      error.value = err.message;
    }
    isLoading.value = false;
  };
  return {
    data,
    error,
    isLoading,
    name,
    currencies,
    nativeName,
    load,
  };
};

export default getDocument;
