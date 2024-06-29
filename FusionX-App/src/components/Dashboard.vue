<script setup lang="ts">
import { ref } from "vue";

const user = ref(JSON.parse(localStorage.getItem("user") || "{}"));
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center bg-gray-100 justify-center"
  >
    <div class="bg-white shadow-md rounded-xl p-8 w-96">
      <h2 class="text-2xl font-bold text-center mb-1">Dashboard</h2>
      <h3 class="text-xl mb-4">Hi, {{ user.username }}</h3>
      <!-- TODO: Dashboard content -->
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add styles */
</style>
