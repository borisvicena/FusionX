<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col">
    <header class="bg-blue-500 text-white p-4">
      <nav class="flex justify-center space-x-4">
        <RouterLink to="/" class="hover:underline">Home</RouterLink>
        <RouterLink to="/signup" class="hover:underline">SignUp</RouterLink>
        <RouterLink to="/login" class="hover:underline">Login</RouterLink>
      </nav>
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* TODO: Add styles */
</style>
