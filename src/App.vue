<script setup>
import Topbar from "./components/Topbar.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>

  <div class="flex flex-col min-h-screen p-0 m-0">
    <Topbar />
    <Navbar />

    <main class="flex-1 p-0 m-0 overflow-x-hidden bg-neutral-50 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-200">
      <router-view />
    </main>

    <Footer />
  </div>

</template>

<style scoped></style>
