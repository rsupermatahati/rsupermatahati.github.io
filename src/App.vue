<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />

    <main class="flex-grow bg-indigo-50">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>