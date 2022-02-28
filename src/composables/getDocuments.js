import { ref } from "vue";

const getDocuments = () => {
  const isLoading = ref(false);
  const data = ref(null);
  const error = ref(null);

  const load = async function () {
    isLoading.value = true;
    try {
      const response = await fetch(`https://restcountries.com/v3.1/all`, {
        method: "GET",
      });
      data.value = await response.json();
    } catch (err) {
      err.message = error.value;
      console.log(error.value);
    }
    isLoading.value = false;
  };
  return { isLoading, data, error, load };
};

export default getDocuments;
