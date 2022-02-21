<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-view />
  </div>
</template>

<style>
#app {
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
