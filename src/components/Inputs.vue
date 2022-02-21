<template>
  <div class="inputs_container">
    <div class="input_container">
      <input
        id="searchField"
        class="input-search"
        type="search"
        name="searchField"
        placeholder="Search for a country..."
      />
      <label class="searchfield" for="searchField"
        >Search for a country...</label
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="#000000"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <circle
          cx="116"
          cy="116"
          r="84"
          fill="none"
          stroke="#000000"
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
          stroke="#000000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="16"
        ></line>
      </svg>
    </div>
    <form class="select_container">
      <select id="filter" name="filter">
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.inputs_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input_container {
  position: relative;
  height: 4.5vh;
  width: 15vw;
}
input {
  height: 100%;
  width: 100%;
  background-color: var(--white);
  outline: none;
  border: none;
}
.input_container label {
  position: absolute;
  top: 0%;
  left: 30%;
  transition: 0.5s;
  z-index: 1;
  opacity: 0;
}
.input-search:focus + .searchfield {
  opacity: 1;
}
.input_container svg {
  position: absolute;
  top: 30%;
  left: 2%;
}
.input_container input:placeholder-shown {
  margin-left: 20%;
}
</style>
