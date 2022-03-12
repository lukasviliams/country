<template>
  <section class="card_detail-container">
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
          stroke="var(--dark-blue)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
        <polyline
          points="112 56 40 128 112 200"
          fill="none"
          stroke="var(--dark-blue)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></polyline>
      </svg>
      <p class="svg-route">Back</p>
    </router-link>
    <Spinner v-if="isLoading" />
    <article v-for="doc in data" :key="doc.area" class="card_container">
      <div class="card_container-image">
        <img class="card_image" :src="doc.flags.svg" alt="Country flag" />
      </div>
      <div class="card_container-details">
        <p class="card_header">{{ doc.name.common }}</p>
        <div class="card_container-details-info">
          <div class="card_container-details-info-left">
            <div class="native_name">
              <p class="native_name-header">Native Name:</p>
              <p class="native_name-info">
                {{ nativeName }}
              </p>
            </div>
            <div class="population">
              <p class="population-header">Population:</p>
              <p class="population-info">
                {{ new Intl.NumberFormat().format(doc.population) }}
              </p>
            </div>
            <div class="region">
              <p class="region-header">Region:</p>
              <p class="region-info">
                {{ doc.continents[0] }}
              </p>
            </div>
            <div class="subregion">
              <p class="subregion-header">Sub region:</p>
              <p class="subregion-info">
                {{ doc.subregion }}
              </p>
            </div>
            <div class="capital">
              <p class="capital-header">Capital:</p>
              <p class="capital-info">
                {{ doc.capital[0] }}
              </p>
            </div>
          </div>
          <div class="card_container-details-info-right">
            <div class="domain">
              <p class="domain-header">Top Level Domain:</p>
              <p class="domain-info">{{ doc.tld[0] }}</p>
            </div>
            <div class="currencies">
              <p class="currencies-header">Currencies:</p>
              <p
                v-for="cur in doc.currencies"
                :key="cur"
                class="currencies-info"
              >
                {{ cur.name }}
              </p>
            </div>
            <div class="languages">
              <p class="languages-header">Languages:</p>
              <p
                v-for="languages in doc.languages"
                :key="languages"
                class="languages-info"
              >
                {{ languages }}
              </p>
            </div>
          </div>
        </div>
        <div class="card_container_details-borders">
          <p class="borders-header">Border Countries:</p>
          <p v-for="border in doc.borders" :key="border" class="border">
            {{ border }}
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import getDocument from "../composables/getDocument";
import Spinner from "./Spinner.vue";
export default {
  components: { Spinner },
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { data, error, isLoading, name, currencies, nativeName, load } =
      getDocument();
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
      nativeName,
      load,
    };
  },
};
</script>
<style scoped>
.card_detail-container {
  padding: 0 5vw;
}
.svg_container {
  margin-top: 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 2rem;
}
.svg-route {
  font-family: "Nunito", sans-serif;
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 2rem;
}
.card_container {
  min-height: calc(100vh - 14rem);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: var(--dark-blue);
}
.card_container-image {
  height: 40em;
  margin-right: 10em;
}
img {
  height: auto;
  width: auto;
  max-width: 56em;
}
.card_container-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80em;
}
.card_container-details-info {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10em;
  width: 80em;
}
.native_name,
.population,
.region,
.subregion,
.capital,
.domain,
.currencies,
.languages,
.card_container_details-borders {
  display: flex;
}
.card_header {
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 3rem;
}
.card_container-details-info {
  margin-bottom: 3rem;
}
.native_name-header,
.population-header,
.region-header,
.subregion-header,
.capital-header,
.domain-header,
.currencies-header,
.languages-header,
.borders-header {
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 3.2rem;
  margin-right: 1em;
}
.native_name-info,
.population-info,
.region-info,
.subregion-info,
.capital-info,
.domain-info,
.currencies-info,
.languages-info,
.border {
  font-size: 1.6rem;
  font-weight: 300;
  line-height: 3.2rem;
}
.languages-info {
  margin-right: 0.5em;
}
.border {
  padding: 0 2em;
  border-radius: 3px;
  background-color: var(--white);
  box-shadow: 0px 0px 5px 0px rgb(207, 207, 207);
  margin-right: 1em;
}
@media only screen and (max-width: 750px) {
  .card_detail-container {
    width: calc(100% - 10vw);
  }
  .card_container {
    margin-top: 5vh;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .card_container-image {
    margin: 0;
    width: 90%;
    height: fit-content;
  }
  img {
    max-width: 90%;
  }
  .card_container-details {
    width: fit-content;
    max-width: 100%;
  }
  .card_container-details-info {
    flex-direction: column;
    gap: 4em;
    width: fit-content;
  }
  .card_header {
    margin-top: 1.25em;
  }
  .card_container_details-borders {
    margin-bottom: 5em;
  }
  .languages,
  .card_container_details-borders {
    display: flex;
    flex-wrap: wrap;
  }
  .border {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
  }
}
</style>
