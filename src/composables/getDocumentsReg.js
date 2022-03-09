import { ref } from "vue";
const getDocumentsReg = () => {
  const dataRegion = ref(null);
  const errorRegion = ref(null);
  const isLoadingRegion = ref(false);
  const region = ref("Europe");

  const loadRegion = async function () {
    isLoadingRegion.value = false;
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/region/${region.value}`,
        { method: "GET" }
      );
      dataRegion.value = await response.json();
      // console.log(dataRegion.value);
    } catch (err) {
      errorRegion.value = err.message;
    }
    isLoadingRegion.value = false;
  };
  return { dataRegion, errorRegion, isLoadingRegion, region, loadRegion };
};

export default getDocumentsReg;
