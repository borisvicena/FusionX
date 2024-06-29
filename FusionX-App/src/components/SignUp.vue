<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";

const username = ref("");
const email = ref("");
const password = ref("");
const password_confirm = ref("");

async function handleSignUp() {
  // Handle sign-up logic
  const data = {
    username: username.value,
    email: email.value,
    password: password.value,
    password_confirm: password_confirm.value,
  };

  const response = await axios.post("http://localhost:8000/signup", data);

  console.log(response);
}
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <div class="bg-white p-8 shadow-md w-96 rounded-xl">
      <h2 class="text-2xl font-bold text-center mb-1" ff>Create an account</h2>
      <p class="text-gray-500 text-center mb-10">Trading made simple.</p>
      <form @submit.prevent="handleSignUp">
        <div class="mb-4">
          <input
            type="username"
            placeholder="Enter Your Username"
            v-model="username"
            required
            class="w-full px-3 py-2 border rounded"
          />
        </div>
        <div class="mb-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            v-model="email"
            required
            class="w-full px-3 py-2 border rounded"
          />
        </div>
        <div class="mb-4">
          <input
            type="password"
            placeholder="Enter Your Password"
            v-model="password"
            required
            class="w-full px-3 py-2 border rounded"
          />
        </div>
        <div class="mb-4">
          <input
            type="password"
            placeholder="Confirm Your Password"
            v-model="password_confirm"
            required
            class="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded mb-4"
        >
          Sign Up
        </button>
        <div class="text-center">
          <p>
            Already have an account?
            <RouterLink to="/login" class="text-blue-500">Login</RouterLink>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add styles */
</style>
