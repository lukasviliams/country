<template>
  <section class="cards_container">
    <article v-for="doc in documents" :key="doc.area" class="card_container">
      <div class="image_container">
        <img :src="doc.flags.png" alt="Country flag" />
      </div>
      <div class="card_wrapper-details">
        <h1 class="card_country-detail">{{ doc.name.common }}</h1>
        <p class="card_population-header">
          Population:
          <span class="card_population-number">{{ doc.population }} </span>
        </p>
        <p class="card_region-header">
          Region:
          <span class="card_region-detail">{{ doc.region }}</span>
        </p>
        <p class="card_capital-header">
          Capital:
          <span class="card_capital-detail">{{ doc.capital }}</span>
        </p>
      </div>
    </article>
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
  },
};
</script>

<style>
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

  height: 33.6rem;
  background-color: var(--dark-blue);
}
.card_wrapper-details {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10%;
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
</style>
