<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const password = ref("");

const handleLogin = () => {
  // Handle login logic
  console.log("Login", { email: email.value, password: password.value });
};
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <div class="bg-white p-8 shadow-md w-96 rounded-xl">
      <h2 class="text-2xl font-bold text-center mb-1">Hi, Welcome Back! 👋</h2>
      <p class="text-gray-500 text-center mb-10">
        Your account is waiting for you.
      </p>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label for="email" class="block text-gray-600">Email:</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            v-model="email"
            required
            class="w-full px-3 py-2 border rounded"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-600">Password:</label>
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
            type="checkbox"
            id="remember-me"
            name="remember-me"
            value="checked"
          />
          <label for="remember-me" class="text-gray-600 ml-1"
            >Remember Me</label
          >
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded mb-4"
        >
          Login
        </button>
        <div class="text-center">
          <p>
            Don't have an account?
            <a href="/signup" class="text-blue-500">Sign Up</a>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add styles */
</style>
