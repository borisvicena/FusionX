<script setup lang="ts"></script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 shadow-md w-96 rounded-xl text-center">
      <h1 class="text-3xl font-bold mb-1">FusionX</h1>
      <p class="text-gray-500 mb-10">Trading made simple.</p>
      <a
        href="/login"
        class="bg-blue-500 w-full text-white px-3 py-2 rounded mb-4 block"
        >Login</a
      >
      <p class="my-4 or-divider">OR</p>
      <a
        href="/signup"
        class="bg-blue-500 w-full text-white px-3 py-2 rounded block"
        >Sign Up</a
      >
    </div>
  </div>
</template>

<style scoped>
.or-divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 1rem 0;
}

.or-divider::before,
.or-divider::after {
  content: "";
  flex: 1;
  border-bottom: 1px solid #ccc;
  margin: 0 0.5rem;
}
</style>
