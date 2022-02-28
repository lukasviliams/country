<template>
  <div class="card_detail-container">
    <router-link class="svg_container" :to="{ name: 'Home' }">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill=""
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="216"
          y1="128"
          x2="40"
          y2="128"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <polyline
          points="112 56 40 128 112 200"
          fill="none"
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
      </svg>
      <p class="svg-route">Back</p>
    </router-link>
    <div v-for="doc in data" :key="doc.area" class="card_container">
      <div class="card_container-image">
        <img class="card_image" :src="doc.flags.png" alt="Country flag" />
      </div>
      <div class="card_container-details">
        <div class="card_container-details-left">
          <h1 class="card_country-detail">{{ doc.name.common }}</h1>
          <p class="card_native-header">
            Native Name:
            <span class="card_population-number">{{ doc.name.official }} </span>
          </p>
          <p class="card_population-header">
            Population:
            <span class="card_population-number"
              >{{ new Intl.NumberFormat().format(doc.population) }}
            </span>
          </p>
          <p class="card_region-header">
            Region:
            <span class="card_population-number">{{ doc.region }} </span>
          </p>
          <p class="card_subregion-header">
            Sub Region:
            <span class="card_population-number">{{ doc.subregion }} </span>
          </p>
          <p
            v-for="capital in doc.capital"
            :key="capital"
            class="card_capital-header"
          >
            Capital:
            <span class="card_population-number">{{ capital }} </span>
          </p>
          <div class="card_borders_container">
            <p class="card_borders_container-header">Border Countries:</p>
            <p
              v-for="border in doc.borders"
              :key="border"
              class="card_borders_container-detail"
            >
              {{ border }}
            </p>
          </div>
        </div>
        <div class="card_container-details-right">
          <p v-for="tld in doc.tld" :key="tld" class="card_subregion-header">
            Top Level Domain:
            <span class="card_population-number">{{ tld }} </span>
          </p>
          <p class="card_subregion-header">
            Currencies:
            <span class="card_population-number">{{ currencies[0] }} </span>
          </p>
          <p
            v-for="languages in doc.languages"
            :key="languages"
            class="card_languages-header"
          >
            Languages:
            <span class="card_population-number">{{ languages }} </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import getDocument from "../composables/getDocument";
export default {
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { data, error, isLoading, name, currencies, load } = getDocument();
    onMounted(() => {
      name.value = props.id;
      load();
    });

    return {
      data,
      error,
      isLoading,
      name,
      currencies,
      load,
    };
  },
};
</script>
<style scoped>
.card_detail-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.card_container {
  margin-top: 5vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.svg-route {
  font-family: "Nunito", sans-serif;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 2rem;
}
.card_container-image {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.card_image,
.card_container-details {
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card_image {
  height: 20rem;
  width: auto;
}
.card_country-detail {
  margin-bottom: 3rem;
}
.card_borders {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card_borders_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card_native-header,
.card_population-header,
.card_region-header,
.card_subregion-header,
.card_capital-header,
.card_borders_container-header,
.card_languages-header {
  font-size: 1.4rem;
  font-weight: 600;
}
span {
  font-weight: 300;
  margin-left: 1rem;
}
.card_borders_container-header {
  margin-right: 1rem;
}
.card_borders_container-detail {
  margin-right: 1rem;
  font-size: 1.4rem;
  font-weight: 300;
  padding: 0.5rem 2rem;
  box-shadow: 0px 0px 1px var(--light-mode-input);
  background-color: var(--light-mode-back);
}
</style>
