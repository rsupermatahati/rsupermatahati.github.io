<script setup>
import Topbar from "./components/Topbar.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Topbar />
    <Navbar />

    <main class="flex-grow bg-emerald-950/5">
      <router-view></router-view>
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>