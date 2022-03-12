<template>
  <div id="nav">
    <div class="navigation">
      <div class="router-header">
        <router-link to="/">Where in the World</router-link>
      </div>
      <div class="svg_container" @click="toggleColor">
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
<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const darkMode = ref(false);

    // Switch color modes
    const toggleColor = () => {
      // /////////////////////Dark mode //////////////////////////////
      darkMode.value = !darkMode.value;
      if (darkMode.value) {
        // Root --dark-blue
        document.documentElement.style.setProperty(
          "--dark-blue",
          "rgba(255, 255, 255, 1)"
        );
        // Root --light-mode-back
        document.documentElement.style.setProperty(
          "--light-mode-back",
          "rgba(32, 44, 55, 1)"
        );
        // Root -white
        document.documentElement.style.setProperty(
          "--white",
          "rgba(43, 57, 69, 1)"
        );
      }
      // /////////////////////light mode //////////////////////////////
      else {
        document.documentElement.style.setProperty(
          // Root --dark-blue
          "--dark-blue",
          "rgba(43, 57, 69, 1)"
        );
        // Root --light-mode-back
        document.documentElement.style.setProperty(
          "--light-mode-back",
          "rgba(250, 250, 250, 1)"
        );
        // Root -white
        document.documentElement.style.setProperty(
          "--white",
          "rgba(255, 255, 255, 1)"
        );
      }
    };
    return { darkMode, toggleColor };
  },
};
</script>

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
  cursor: pointer;
}
.svg_container svg {
  margin-right: 2rem;
}
svg path {
  fill: rgba(255, 255, 255, 1);
}
/* #nav a {
  font-weight: bold;
  color: #2c3e50;
} */
.body_text-semi {
  color: var(--dark-blue);
}
#nav a.router-link-exact-active,
#nav a {
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
@media only screen and (max-width: 575px) {
  #nav a.router-link-exact-active,
  #nav a {
    font-size: 1.4rem;
  }
  .svg_container svg {
    margin-right: 0.5rem;
  }
  svg {
    height: 12px;
    width: 12px;
  }
}
</style>
