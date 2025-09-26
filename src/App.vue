<script setup>
import Topbar from "./components/Topbar.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Topbar />
    <Navbar />

    <main class="flex-1 bg-gray-100">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>