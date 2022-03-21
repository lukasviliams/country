<template>
  <section class="inputs_container">
    <div class="input_container">
      <input
        id="searchField"
        v-model="searchBar"
        class="input-search"
        type="search"
        name="searchField"
        placeholder="Search for a country..."
        @input="$emit('update:searchBar', $event.target.value)"
      />
      <label class="searchfield" for="searchField"
        >Search for a country...</label
      >
      <svg
        id="svgSearch"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="rgba(133, 133, 133, 1)"
        viewBox="0 0 256 256"
        class="svg"
      >
        <rect width="256" height="256" fill="none"></rect>
        <circle
          cx="116"
          cy="116"
          r="84"
          fill="none"
          stroke="rgba(133, 133, 133, 1)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></circle>
        <line
          x1="175.4"
          y1="175.4"
          x2="224"
          y2="224"
          fill="none"
          stroke="rgba(133, 133, 133, 1)"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
      </svg>
    </div>
    <form class="select_container">
      <select
        id="filter"
        v-model="selected"
        class="element_select"
        name="filter"
        @input="$emit('update:selected', $event.target.value)"
      >
        <option value="">Filter by Region</option>
        <option v-for="option in filteredRegion" :key="option">
          {{ option }}
        </option>
      </select>
    </form>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "Inputs",
  props: {
    filteredRegion: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const searchBar = ref();
    const selected = ref("");

    return { searchBar, selected };
  },
};
</script>

<style scoped>
.inputs_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5vh;
  margin-bottom: 2vh;
}
.input_container {
  position: relative;
  height: 5.6rem;
  width: 48rem;
}
input {
  height: 100%;
  width: 100%;
  background-color: var(--white);
  outline: none;
  border: none;
  font-size: 2rem;
  color: var(--dark-blue);
}
svg {
  transition: all 0.5s ease;
}
input {
  text-indent: 10%;
}
.input-search:focus ~ svg {
  position: absolute;
  top: -2rem;
  left: 20%;
  animation: move 0.5s ease;
}
input::placeholder {
  color: var(--light-mode-input);
}
.input_container label {
  position: absolute;
  top: -2rem;
  left: 30%;
  transition: 0.5s;
  opacity: 0;
  font-size: 2rem;
}
.input-search:focus + .searchfield {
  opacity: 1;
}
input:focus::placeholder {
  transition: 0.5s ease;
  opacity: 0;
}
.input_container svg {
  position: absolute;
  top: 30%;
  left: 0;
}
.select_container {
  width: 20rem;
  height: 5.6rem;
}
.element_select {
  height: 100%;
  width: 100%;
}
select {
  outline: none;
  border: none;
  background-color: var(--white);
  padding-left: 2rem;
  color: var(--dark-blue);
  z-index: 1;
  font-size: 1.4rem;
}
select option {
  color: var(--light-mode-input);
  background-color: var(--white);
}

@media only screen and (max-width: 575px) {
  .inputs_container {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2em;
  }
  .input_container {
    margin-bottom: 2em;
  }
  .input-search {
    width: 95vw;
  }
}

/* Animations */
@keyframes move {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
</style>
