<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/signup">SignUp</RouterLink> |
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
nav {
  margin-bottom: 20px;
}

nav a {
  margin-inline: 10px;
}
</style>
