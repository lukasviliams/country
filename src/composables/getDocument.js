import { ref } from "vue";

const getDocument = () => {
  const data = ref(null);
  const error = ref(null);
  const isLoading = false;
  const name = ref("Cuba");

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
      console.log(name.value);
      console.log(data.value);
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
    load,
  };
};

export default getDocument;
