<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import axios from "../axios";

const router = useRouter();
const username = ref("");
const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");
const successMessage = ref("");

const handleSignUp = async () => {
  // Handle sign-up logic
  const data = {
    username: username.value,
    email: email.value,
    password: password.value,
    password_confirmation: passwordConfirmation.value,
  };

  try {
    const response = await axios.post("/signup", data);
    console.log(response.data);

    // Show success alert
    successMessage.value = "User created successfully";

    // Store user info in local storage
    localStorage.setItem("user", JSON.stringify(response.data.user));

    // Redirect to dashboard page
    router.push({ name: "Dashboard" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="bg-white p-8 shadow-md w-96 rounded-xl">
      <h2 class="text-2xl font-bold text-center mb-1" ff>Create an account</h2>
      <p class="text-gray-500 text-center mb-10">Trading made simple.</p>
      <!-- Success message alert -->
      <div
        v-if="successMessage"
        class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center mb-4"
        role="alert"
      >
        <strong class="font-bold">Success!</strong>
        <span class="block sm:inline ml-1">{{ successMessage }}</span>
      </div>
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
            v-model="passwordConfirmation"
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
        <!-- Already have an account link -->
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
