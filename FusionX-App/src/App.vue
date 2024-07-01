<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col font-Poppins">
    <header>
      <Navbar />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* TODO: Add styles */
</style>
