<script setup lang="ts">
import { ref } from "vue";
import { useRouter, RouterLink } from "vue-router";
import axios from "../axios";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
  // Handle login logic
  console.log("Login", { email: email.value, password: password.value });
  try {
    const response = await axios.post("/login", {
      email: email.value,
      password: password.value,
    });

    const { token, user } = response.data;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("authToken", token);

    router.push({ name: "Dashboard" });
  } catch (error) {
    console.error("Login failed", error);
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="dark:bg-secondary-gradient p-8 border border-primary-pink shadow-md w-96 rounded-xl">
      <h2 class="text-2xl font-bold text-center mb-1 dark:text-white text-black">Welcome Back!</h2>
      <p class="text-gray-500 text-center mb-10">Login to your account.</p>
      <form @submit.prevent="handleLogin">
        <div class="relative mb-6">
          <input
            type="email"
            placeholder="example@gmail.com"
            v-model="email"
            required
            class="peer placeholder-transparent w-full px-0 py-2 dark:text-white dark:bg-secondary-gradient border-b border-primary-pink focus:outline-none focus:border-b focus:border-blue-700"
          />
          <label
            for="email"
            class="absolute left-0 -top-3.5 text-gray-400 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
            >Email address<span class="text-red-500">*</span></label
          >
        </div>
        <div class="relative mb-6">
          <input
            type="password"
            placeholder="Enter Your Password"
            v-model="password"
            required
            class="peer placeholder-transparent w-full px-0 py-2 dark:text-white dark:bg-secondary-gradient border-b border-primary-pink focus:outline-none focus:border-b focus:border-blue-700"
          />
          <label
            for="password"
            class="absolute left-0 -top-3.5 text-gray-400 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm"
            >Password<span class="text-red-500">*</span></label
          >
        </div>
        <div class="mb-10 flex flex-wrap items-center">
          <input type="checkbox" id="remember-me" name="remember-me" value="checked" class="size-4 mr-1" />
          <label for="remember-me" class="text-gray-400 ml-1">Remember Me</label>
        </div>
        <button type="submit" class="w-full bg-primary-pink text-white py-2 rounded mb-6">Login</button>
        <div class="text-center dark:text-gray-50 text-black">
          <p>
            Don't have an account?
            <RouterLink to="/signup" class="text-blue-500">Sign Up</RouterLink>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* TODO: Add styles */
</style>
