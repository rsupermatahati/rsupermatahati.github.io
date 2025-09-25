<template>
  <nav class="sticky top-0 z-50 bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center overflow-hidden">
          <router-link to="/"><img :src="logo" alt="Logo" class="h-10"></router-link>
        </div>

        <!-- Navigasi untuk Desktop -->
        <div class="hidden md:flex md:space-x-8 items-center">
          <div v-for="(menu, index) in menus" :key="menu.label" class="relative">
            <!-- Jika TIDAK ADA sub-menu, gunakan <router-link> -->
            <router-link v-if="!menu.children" :to="menu.path"
              class="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out font-medium">
              {{ menu.label }}
            </router-link>

            <!-- Jika ADA sub-menu, gunakan <a> untuk mengaktifkan toggle -->
            <a v-else href="#" @click.prevent="toggleMenu(index)"
              class="text-gray-700 hover:text-indigo-600 transition duration-300 ease-in-out font-medium">
              {{ menu.label }}
            </a>

            <!-- Dropdown untuk Desktop -->
            <div v-if="openMenu === index && menu.children"
              class="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-300">
              <ul class="py-2">
                <li v-for="child in menu.children" :key="child.label" class="px-4 py-2">
                  <router-link :to="child.path"
                    class="block text-gray-700 hover:text-indigo-600 transition duration-300">
                    {{ child.label }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Tombol Hamburger untuk Mobile -->
        <div class="flex items-center md:hidden">
          <button @click="isOpen = !isOpen"
            class="p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Navigasi untuk Mobile (hanya tampil saat isOpen true) -->
    <div v-if="isOpen" class="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white">
      <div v-for="(menu, index) in menus" :key="menu.label">
        <div class="py-2">
          <!-- Tombol dropdown untuk menu utama mobile -->
          <a v-if="menu.children" href="#" @click.prevent="toggleMobileMenu(index)"
            class="block py-2 font-medium text-gray-700 hover:text-indigo-600">
            {{ menu.label }}
          </a>
          <!-- Link langsung untuk menu tanpa children -->
          <router-link v-else :to="menu.path" class="block py-2 font-medium text-gray-700 hover:text-indigo-600"
            @click="isOpen = false">
            {{ menu.label }}
          </router-link>
        </div>

        <!-- Sub-menu mobile -->
        <div v-if="openMobileMenu === index && menu.children" class="pl-4 space-y-1 mt-1">
          <router-link v-for="child in menu.children" :key="child.label" :to="child.path"
            class="block text-sm text-gray-600 hover:text-indigo-600" @click="isOpen = false">
            {{ child.label }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import logo from '/src/assets/icons/logo.png';

const menus = [
  {
    label: "Profil",
    children: [
      { label: "Tentang Kami", path: '/about' },
      { label: "Visi Misi", path: '/vision-and-mission' },
      { label: "Nilai Dasar Layanan", path: '/core-values-of-service' },
      { label: "Janji Layanan", path: '/service-promise' },
      { label: "Filosofi Logo", path: '/logo-philosophy' },
    ],
  },
  {
    label: "Layanan",
    children: [
      { label: "Rawat Jalan", path: '/outpatient-care' },
      { label: "Rawat Inap", path: '/inpatient-care' },
      { label: "UGD", path: '/emergency-room' },
      { label: "Laboratorium", path: '/laboratory' },
      { label: "Radiologi", path: '/radiology' },
      { label: "Farmasi", path: '/pharmacy' },
    ],
  },
  {
    label: "Informasi",
    children: [
      { label: "Hak & Kewajiban", path: '/rights-and-obligations' },
      { label: "Jadwal Dokter", path: '/doctor-schedule' },
      { label: "Antrian Poliklinik", path: '/outpatient-queue' },
      { label: "Ketersediaan Bed Rawat Inap", path: '/inpatient-bed-availability' },
    ],
  },
  { label: "FAQ", path: '/faq' },
];

const isOpen = ref(false); // Untuk menu mobile
const openMenu = ref(null); // Untuk menu dropdown desktop
const openMobileMenu = ref(null); // Untuk menu dropdown mobile

const toggleMenu = (index) => {
  openMenu.value = openMenu.value === index ? null : index;
};

const toggleMobileMenu = (index) => {
  openMobileMenu.value = openMobileMenu.value === index ? null : index;
};

const closeAllMenus = (event) => {
  // Hanya tutup menu desktop jika klik dilakukan di luar area menu desktop dan di layar desktop
  if (window.innerWidth >= 768 && !event.target.closest(".relative")) {
    openMenu.value = null;
  }
};

onMounted(() => {
  document.addEventListener("click", closeAllMenus);
});

onUnmounted(() => {
  document.removeEventListener("click", closeAllMenus);
});
</script>
