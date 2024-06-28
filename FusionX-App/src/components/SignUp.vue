<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const password = ref("");

const handleSignUp = () => {
  // Handle sign-up logic
  console.log("Sign Up", { email: email.value, password: password.value });
};
</script>

<template>
  <div class="signup">
    <h2>Sign Up</h2>
    <form @submit.prevent="handleSignUp">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<style scoped>
/* TODO: Add styles */
</style>
