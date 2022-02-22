<template>
  <div id="nav">
    <div class="navigation">
      <div class="router-header">
        <router-link to="/">Where in the World</router-link>
      </div>
      <div class="svg_container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <rect width="256" height="256" fill="none"></rect>
          <path
            d="M216.7,152.6A91.9,91.9,0,0,1,103.4,39.3h0A92,92,0,1,0,216.7,152.6Z"
            fill="none"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></path>
        </svg>
        <p class="body_text-semi">Dark mode</p>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
.navigation {
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
}
.svg_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.svg_container svg {
  margin-right: 2rem;
}
/* #nav a {
  font-weight: bold;
  color: #2c3e50;
} */

#nav a.router-link-exact-active {
  font-family: "Nunito", sans-serif;
  font-size: 2.4rem;
  font-weight: 800;
  color: var(--dark-blue);
  text-decoration: none;
}
.router-header {
  padding-left: 5vw;
}
.svg_container {
  padding-right: 5vw;
}
</style>
