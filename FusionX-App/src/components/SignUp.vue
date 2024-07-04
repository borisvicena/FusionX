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

const inputClass = (field: string) => {
  switch (field) {
    case "username":
      return username.value
        ? isValidUsername(username.value)
          ? "border-green-500"
          : "border-red-500"
        : "border-primary-pink";
    case "email":
      return email.value ? (isValidEmail(email.value) ? "border-green-500" : "border-red-500") : "border-primary-pink";
    case "password":
      return password.value
        ? isValidPassword(password.value)
          ? "border-green-500"
          : "border-red-500"
        : "border-primary-pink";
    case "passwordConfirmation":
      return passwordConfirmation.value
        ? isPasswordMatch(password.value, passwordConfirmation.value)
          ? "border-green-500"
          : "border-red-500"
        : "border-primary-pink";
    default:
      return "border-primary-pink";
  }
};

// Validation methods
const isValidUsername = (username: string) => {
  // Username validation logic
  const valid = /^[a-zA-Z0-9_]+$/.test(username);
  return valid && username.length >= 3 && username.length <= 20;
};

const isValidEmail = (email: string) => {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  return valid;
};

const isValidPassword = (password: string) => {
  // Password validation logic
  return password.length >= 6;
};

const isPasswordMatch = (password: string, passwordConfirmation: string) => {
  return password === passwordConfirmation;
};

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
    // Store auth token in local storage
    localStorage.setItem("authToken", response.data.token);

    // Redirect to dashboard page and wait 2 seconds (for success message to show)
    setTimeout(() => {
      router.push({ name: "Dashboard" });
    }, 2000);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="dark:bg-secondary-gradient p-8 border border-primary-pink shadow-md w-96 rounded-xl">
      <h2 class="text-2xl font-bold text-center mb-1 dark:text-white text-black" ff>Create an account</h2>
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
        <div class="relative mb-6">
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Enter Your Username"
            v-model="username"
            required
            :class="inputClass('username')"
            class="peer placeholder-transparent w-full px-0 py-2 dark:text-white dark:bg-secondary-gradient border-b focus:outline-none focus:border-b focus:border-blue-700"
          />
          <label
            for="username"
            class="absolute left-0 -top-3.5 text-gray-400 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm hover:cursor-text"
            >Username<span class="text-red-500">*</span></label
          >
        </div>
        <div class="relative mb-6">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter Your Email"
            required
            v-model="email"
            :class="inputClass('email')"
            class="peer placeholder-transparent w-full px-0 py-2 dark:text-white dark:bg-secondary-gradient border-b focus:outline-none focus:border-b focus:border-blue-700"
          />
          <label
            for="email"
            class="absolute left-0 -top-3.5 text-gray-400 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm hover:cursor-text"
            >Email address<span class="text-red-500">*</span></label
          >
        </div>
        <div class="relative mb-6">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter Your Password"
            v-model="password"
            required
            :class="inputClass('password')"
            class="peer placeholder-transparent w-full px-0 py-2 dark:text-white dark:bg-secondary-gradient border-b focus:outline-none focus:border-b focus:border-blue-700"
          />
          <label
            for="password"
            class="absolute left-0 -top-3.5 text-gray-400 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm hover:cursor-text"
            >Create password<span class="text-red-500">*</span></label
          >
        </div>
        <div class="relative mb-10">
          <input
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
            placeholder="Confirm Your Password"
            v-model="passwordConfirmation"
            required
            :class="inputClass('passwordConfirmation')"
            class="peer placeholder-transparent w-full px-0 py-2 dark:text-white dark:bg-secondary-gradient border-b focus:outline-none focus:border-b focus:border-blue-700"
          />
          <label
            for="passwordConfirmation"
            class="absolute left-0 -top-3.5 text-gray-400 transition-all text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm hover:cursor-text"
            >Confirm password<span class="text-red-500">*</span></label
          >
        </div>
        <button type="submit" class="w-full bg-primary-pink text-white py-2 rounded mb-6">Sign Up</button>
        <!-- Already have an account link -->
        <div class="text-center dark:text-gray-50 text-black">
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
