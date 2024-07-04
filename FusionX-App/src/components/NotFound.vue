<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="dark:bg-secondary-gradient p-8 shadow-md border border-primary-pink w-96 rounded-xl text-center">
      <img src="../../public/404.svg" alt="Not Found" />
      <h1 class="text-3xl font-bold mb-4 dark:text-white">Something went wrong!</h1>
      <p class="text-gray-500 mb-4">Page Not Found</p>
      <RouterLink to="/" class="text-blue-500">Go to Home</RouterLink>
    </div>
  </div>
</template>

<style scoped>
/* Add styles if needed */
</style>
