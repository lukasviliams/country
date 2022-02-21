<template>
  <div class="spinner_container">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style>
.spinner_container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner {
  display: block;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: var(--white);
  border-right-color: var(--dark-blue);
  border-bottom-color: var(--dark-blue);
  border-left-color: var(--dark-blue);
  animation: rotate 1s ease infinite;
}

@keyframes rotate {
  to {
    transform: rotateZ(360deg);
  }
}
</style>
