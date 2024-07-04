<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

const user = ref(JSON.parse(localStorage.getItem("user") || "{}"));
const router = useRouter();

console.log(localStorage.getItem("user"));

const handleLogout = async () => {
  try {
    // Make a request to the backend to revoke the token
    await axios.post(
      "http://127.0.0.1:8000/api/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );

    // Clear user data from localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");

    // Redirect to login page
    router.push({ name: "Login" });
  } catch (error) {
    console.log("Logout failed", error);
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="dark:bg-secondary-gradient shadow-md rounded-xl p-8 w-96">
      <h2 class="text-2xl font-bold text-center mb-1">Dashboard</h2>
      <h3 class="text-xl mb-4">Hi, {{ user.username }}</h3>
      <!-- TODO: Dashboard content -->
      <button
        @click="handleLogout"
        class="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add styles */
</style>
