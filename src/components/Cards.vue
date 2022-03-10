<template>
  <section class="cards_container">
    <router-link
      v-for="doc in matchingCountry"
      :key="doc.area"
      :to="{ name: 'CountryDetail', params: { id: doc.name.common } }"
      class="card_container"
    >
      <div class="image_container">
        <img :src="doc.flags.png" alt="Country flag" />
      </div>
      <div class="card_wrapper-details">
        <h1 class="card_country-detail">{{ doc.name.common }}</h1>
        <p class="card_population-header">
          Population:
          <span class="card_population-number"
            >{{ new Intl.NumberFormat().format(doc.population) }}
          </span>
        </p>
        <p class="card_region-header">
          Region:
          <span class="card_region-detail">{{ doc.region }}</span>
        </p>
        <p
          v-for="capital in doc.capital"
          :key="capital"
          class="card_capital-header"
        >
          Capital:
          <span class="card_capital-detail">{{ capital }}</span>
        </p>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "Cards",
  props: {
    documents: {
      type: Object,
      default: function () {
        return {};
      },
    },
    matchingCountry: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.cards_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5vw;
}
.card_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 6%;
  text-decoration: none;
  color: var(--dark-blue);

  height: 33.6rem;
  width: 27rem;
  background-color: var(--white);
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
}
.card_wrapper-details {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10%;
}
.img_container {
  width: 100%;
  height: 16.4rem;
}
img {
  height: 100%;
  width: 100%;
}
.card_country-detail {
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 10%;
}
.card_population-header,
.card_region-header,
.card_capital-header {
  font-size: 1.4rem;
  font-weight: 600;
}
.card_population-header span,
.card_region-header span,
.card_capital-header span {
  font-weight: 300;
}
</style>
