<script setup>
import { ref, onMounted } from "vue";
import Topbar from "./components/Topbar.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

// Theme state
const isDark = ref(false);
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (savedTheme === null && prefersDark)) {
    document.documentElement.classList.add("dark");
    isDark.value = true;
  }
});
function toggleTheme() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    isDark.value = false;
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    isDark.value = true;
  }
}
</script>

<template>

  <div class="flex flex-col min-h-screen p-0 m-0">
    <Topbar />
    <Navbar />

    <main class="flex-1 p-0 m-0 overflow-x-hidden bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-200">
      <router-view />
    </main>

    <Footer />
  </div>

<!-- Toggle button -->
    <section class="fixed bottom-0 right-0 -translate-x-4 -translate-y-4">
      <button @click="toggleTheme"
        class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 shadow">
        <i v-if="isDark" class="fas fa-moon"></i>
        <i v-else class="fas fa-sun"></i>
      </button>
    </section>

</template>

<style scoped></style>
