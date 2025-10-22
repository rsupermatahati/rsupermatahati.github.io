<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import logolight from '/src/assets/icons/logo.png';
import logodark from '/src/assets/icons/dark.png';

const route = useRoute();
const router = useRouter();

// Navigation data
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

// Reactive state
const isOpen = ref(false);
const openMenu = ref(null);
const openMobileMenu = ref(null);
const isDark = ref(false);
const isScrolled = ref(false);

// Computed properties
const currentThemeIcon = computed(() => {
  return isDark.value ? 'fas fa-sun' : 'fas fa-moon';
});

const currentThemeLabel = computed(() => {
  return isDark.value ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Computed untuk logo berdasarkan scroll state dan theme
const currentLogo = computed(() => {
  // Dark mode selalu pakai logo dark
  if (isDark.value) return logodark;
  
  // Light mode: jika scrolled pakai logo dark, jika tidak pakai logo light
  return isScrolled.value ? logolight : logodark;
});

const navbarClasses = computed(() => {
  const baseClasses = "sticky w-full top-0 z-50 transition-all duration-300";
  
  if (!isScrolled.value) {
    return `${baseClasses} bg-emerald-600 dark:bg-neutral-900`;
  } else {
    return `${baseClasses} bg-white/80 dark:bg-neutral-900/90 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800`;
  }
});

const textColorClasses = computed(() => {
  if (!isScrolled.value && !isDark.value) {
    return 'text-white'; // Light mode, not scrolled - white text
  }
  return 'text-neutral-700 dark:text-neutral-200'; // Default
});

const hoverTextColorClasses = computed(() => {
  if (!isScrolled.value && !isDark.value) {
    return 'hover:text-emerald-200'; // Light mode, not scrolled - light green hover
  }
  return 'hover:text-emerald-600 dark:hover:text-emerald-400'; // Default
});

// Methods
const toggleMenu = (index) => {
  openMenu.value = openMenu.value === index ? null : index;
};

const toggleMobileMenu = (index) => {
  openMobileMenu.value = openMobileMenu.value === index ? null : index;
};

const closeAllMenus = (event) => {
  if (window.innerWidth >= 768) {
    const isClickInsideNav = event.target.closest(".nav-dropdown") || event.target.closest(".nav-menu-trigger");
    if (!isClickInsideNav) {
      openMenu.value = null;
    }
  }
};

const closeMobileMenu = () => {
  isOpen.value = false;
  openMobileMenu.value = null;
};

const navigateTo = (path) => {
  closeMobileMenu();
  router.push(path);
};

const isActiveRoute = (menuPath) => {
  return route.path === menuPath;
};

const isChildActive = (children) => {
  return children?.some(child => route.path === child.path);
};

// Theme management
const initTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme === "dark" || (savedTheme === null && prefersDark)) {
    document.documentElement.classList.add("dark");
    isDark.value = true;
  } else {
    document.documentElement.classList.remove("dark");
    isDark.value = false;
  }
};

const toggleTheme = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    isDark.value = false;
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    isDark.value = true;
  }
};

// Scroll handler
const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

// Keyboard navigation
const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    isOpen.value = false;
    openMenu.value = null;
    openMobileMenu.value = null;
  }
};

// Lifecycle
onMounted(() => {
  document.addEventListener("click", closeAllMenus);
  window.addEventListener("scroll", handleScroll);
  document.addEventListener("keydown", handleKeydown);
  initTheme();
});

onUnmounted(() => {
  document.removeEventListener("click", closeAllMenus);
  window.removeEventListener("scroll", handleScroll);
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <nav :class="navbarClasses">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center shrink-0">
          <router-link 
            to="/" 
            class="flex items-center transition-all duration-300 hover:scale-105 active:scale-95"
            @click="closeMobileMenu"
            aria-label="RSU Permata Hati Home"
          >
            <img 
              :src="currentLogo" 
              alt="RSU Permata Hati" 
              class="h-10 w-auto transition-opacity duration-300"
            />
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex md:items-center md:space-x-1">
          <div 
            v-for="(menu, index) in menus" 
            :key="menu.label" 
            class="nav-dropdown relative"
          >
            <!-- Menu without children -->
            <router-link 
              v-if="!menu.children" 
              :to="menu.path"
              class="nav-menu-item px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              :class="[
                isActiveRoute(menu.path) 
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 shadow-sm' 
                  : `${textColorClasses} ${hoverTextColorClasses} hover:bg-white/20 dark:hover:bg-neutral-800`,
                !isScrolled && !isDark ? 'hover:bg-emerald-700' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
              ]"
              @click="openMenu = null"
            >
              {{ menu.label }}
            </router-link>

            <!-- Menu with children -->
            <button
              v-else 
              @click="toggleMenu(index)"
              class="nav-menu-trigger px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              :class="[
                isChildActive(menu.children)
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 shadow-sm' 
                  : `${textColorClasses} ${hoverTextColorClasses} hover:bg-white/20 dark:hover:bg-neutral-800`,
                !isScrolled && !isDark ? 'hover:bg-emerald-700' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
              ]"
              :aria-expanded="openMenu === index"
              :aria-controls="`desktop-menu-${index}`"
            >
              <span>{{ menu.label }}</span>
              <svg 
                class="w-4 h-4 transition-transform duration-200 shrink-0"
                :class="{ 'rotate-180': openMenu === index }"
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path 
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" 
                />
              </svg>
            </button>

            <!-- Desktop Dropdown -->
            <div 
              v-if="openMenu === index && menu.children"
              :id="`desktop-menu-${index}`"
              class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-xl shadow-2xl transition-all duration-300 z-50"
            >
              <ul class="py-2">
                <li 
                  v-for="child in menu.children" 
                  :key="child.label"
                >
                  <router-link 
                    :to="child.path"
                    class="block px-4 py-3 text-sm transition-all duration-200 mx-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    :class="{
                      'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 font-semibold': isActiveRoute(child.path),
                      'text-neutral-700 dark:text-neutral-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-800': !isActiveRoute(child.path)
                    }"
                    @click="openMenu = null"
                  >
                    {{ child.label }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>

          <!-- Theme Toggle Desktop -->
          <span class="px-4" :class="textColorClasses">|</span>
          <button 
            @click="toggleTheme"
            class="p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            :class="[
              textColorClasses,
              hoverTextColorClasses,
              !isScrolled && !isDark ? 'hover:bg-emerald-700' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
            ]"
            :title="currentThemeLabel"
            :aria-label="currentThemeLabel"
          >
            <i :class="currentThemeIcon + ' w-5 h-5 transition-transform duration-300'"></i>
          </button>
        </div>

        <!-- Mobile Controls -->
        <div class="flex items-center md:hidden space-x-2">
          <!-- Theme Toggle Mobile -->
          <button 
            @click="toggleTheme"
            class="p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            :class="[
              textColorClasses,
              hoverTextColorClasses,
              !isScrolled && !isDark ? 'hover:bg-emerald-700' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
            ]"
            :title="currentThemeLabel"
            :aria-label="currentThemeLabel"
          >
            <i :class="currentThemeIcon + ' w-5 h-5'"></i>
          </button>

          <!-- Mobile Menu Toggle -->
          <button 
            @click="isOpen = !isOpen"
            class="p-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            :class="[
              textColorClasses,
              hoverTextColorClasses,
              !isScrolled && !isDark ? 'hover:bg-emerald-700' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
            ]"
            :aria-expanded="isOpen"
            aria-label="Toggle navigation menu"
            aria-controls="mobile-menu"
          >
            <svg 
              class="h-6 w-6 transition-transform duration-200"
              :class="{ 'rotate-90': isOpen }"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                v-if="!isOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isOpen" 
        id="mobile-menu"
        class="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
      >
        <div class="px-4 py-3 space-y-1">
          <div 
            v-for="(menu, index) in menus" 
            :key="menu.label"
          >
            <!-- Mobile Menu Item -->
            <div>
              <button
                v-if="menu.children" 
                @click="toggleMobileMenu(index)"
                class="w-full flex items-center justify-between py-3 px-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                :class="{
                  'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30': isChildActive(menu.children),
                  'text-neutral-700 dark:text-neutral-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-800': !isChildActive(menu.children)
                }"
                :aria-expanded="openMobileMenu === index"
                :aria-controls="`mobile-submenu-${index}`"
              >
                <span>{{ menu.label }}</span>
                <svg 
                  class="w-4 h-4 transition-transform duration-200 shrink-0"
                  :class="{ 'rotate-180': openMobileMenu === index }"
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path 
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd" 
                  />
                </svg>
              </button>

              <router-link 
                v-else 
                :to="menu.path"
                class="block w-full text-left py-3 px-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                :class="{
                  'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30': isActiveRoute(menu.path),
                  'text-neutral-700 dark:text-neutral-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-800': !isActiveRoute(menu.path)
                }"
                @click="closeMobileMenu"
              >
                {{ menu.label }}
              </router-link>
            </div>

            <!-- Mobile Submenu -->
            <transition
              enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-200 ease-in"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-48"
              leave-from-class="opacity-100 max-h-48"
              leave-to-class="opacity-0 max-h-0"
            >
              <div 
                v-if="openMobileMenu === index && menu.children" 
                :id="`mobile-submenu-${index}`"
                class="ml-4 mt-1 space-y-1 border-l-2 border-emerald-200 dark:border-emerald-800 overflow-hidden"
              >
                <router-link 
                  v-for="child in menu.children" 
                  :key="child.label" 
                  :to="child.path"
                  class="block py-2 px-3 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  :class="{
                    'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 font-semibold': isActiveRoute(child.path),
                    'text-neutral-600 dark:text-neutral-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-neutral-100 dark:hover:bg-neutral-800': !isActiveRoute(child.path)
                  }"
                  @click="closeMobileMenu"
                >
                  {{ child.label }}
                </router-link>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
/* Smooth transitions */
* {
  transition: all 0.3s ease;
}



/* Backdrop blur fallback */
@supports not (backdrop-filter: blur(12px)) {
  .backdrop-blur-lg {
    backdrop-filter: none;
    background: white;
  }
  
  .dark .backdrop-blur-lg {
    background: #171717;
  }
}
</style>