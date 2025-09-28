<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import logolight from '/src/assets/icons/logo.png';
import logodark from '/src/assets/icons/dark.png';

const menus = [
  {
    label: "Profil",
    children: [
      { label: "Sejarah", path: '/about' },
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
      { label: "Hak & Kewajiban Pasien", path: '/rights-and-obligations' },
      { label: "Jadwal Dokter", path: '/doctor-schedule' },
      { label: "Antrian Poliklinik", path: '/outpatient-queue' },
      { label: "Ketersediaan Bed Rawat Inap", path: '/inpatient-bed-availability' },
    ],
  },
];

const isOpen = ref(false); // menu mobile
const openMenu = ref(null); // dropdown desktop
const openMobileMenu = ref(null); // dropdown mobile

const toggleMenu = (index) => {
  openMenu.value = openMenu.value === index ? null : index;
};

const toggleMobileMenu = (index) => {
  openMobileMenu.value = openMobileMenu.value === index ? null : index;
};

const closeAllMenus = (event) => {
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

<template>
  <nav class="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-b-gray-100 dark:border-b-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center overflow-hidden">
          <router-link to="/" class="flex items-center">
            <!-- Logo Light -->
            <img :src="logolight" alt="Logo Light" class="h-10 block dark:hidden" />
            <!-- Logo Dark -->
            <img :src="logodark" alt="Logo Dark" class="h-10 hidden dark:block" />
          </router-link>
        </div>

        <!-- Desktop -->
        <div class="hidden md:flex md:space-x-8 items-center">
          <div v-for="(menu, index) in menus" :key="menu.label" class="relative">
            <router-link v-if="!menu.children" :to="menu.path"
              class="text-gray-900 dark:text-gray-100 hover:text-emerald-600 transition duration-300 ease-in-out font-medium">
              {{ menu.label }}
            </router-link>

            <a v-else href="#" @click.prevent="toggleMenu(index)"
              class="text-gray-900 dark:text-gray-100 hover:text-emerald-600 transition duration-300 ease-in-out font-medium">
              {{ menu.label }}
            </a>

            <!-- Dropdown desktop -->
            <div v-if="openMenu === index && menu.children"
              class="absolute mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg transition-all duration-300 right-0">
              <!-- :class="index === menus.length - 1 ? 'right-0' : 'left-0'" -->
              <ul class="py-2">
                <li v-for="child in menu.children" :key="child.label" class="px-4 py-2">
                  <router-link :to="child.path"
                    class="block text-gray-900 dark:text-gray-100 hover:text-emerald-600 transition duration-300"
                    @click="openMenu = null">
                    {{ child.label }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Hamburger -->
        <div class="flex items-center md:hidden">
          <button @click="isOpen = !isOpen"
            class="p-2 rounded-md text-gray-600 dark:text-gray-200 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div v-if="isOpen" class="md:hidden px-6 py-4 space-y-3 bg-white dark:bg-gray-900">
      <div v-for="(menu, index) in menus" :key="menu.label">
        <div>
          <a v-if="menu.children" href="#" @click.prevent="toggleMobileMenu(index)"
            class="block py-2 font-medium text-gray-900 dark:text-gray-100 hover:text-emerald-600">
            {{ menu.label }}
          </a>

          <router-link v-else :to="menu.path"
            class="block py-2 font-medium text-gray-900 dark:text-gray-100 hover:text-emerald-600"
            @click="isOpen = false">
            {{ menu.label }}
          </router-link>
        </div>

        <!-- Submenu mobile -->
        <div v-if="openMobileMenu === index && menu.children" class="pl-6 space-y-2 mt-2">
          <router-link v-for="child in menu.children" :key="child.label" :to="child.path"
            class="block text-sm text-gray-900 dark:text-gray-100 hover:text-emerald-600" @click="isOpen = false">
            {{ child.label }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
