<script setup>
const menus = [
  {
    label: "Profil",
    children: [
      { label: "Sejarah", path: "/about" },
      { label: "Visi Misi", path: "/vision-and-mission" },
      { label: "Nilai Dasar Layanan", path: "/core-values-of-service" },
      { label: "Janji Layanan", path: "/service-promise" },
      { label: "Filosofi Logo", path: "/logo-philosophy" },
    ],
  },
  {
    label: "Layanan",
    children: [
      { label: "Rawat Jalan", path: "/outpatient-care" },
      { label: "Rawat Inap", path: "/inpatient-care" },
      { label: "UGD", path: "/emergency-room" },
      { label: "Laboratorium", path: "/laboratory" },
      { label: "Radiologi", path: "/radiology" },
      { label: "Farmasi", path: "/pharmacy" },
    ],
  },
  {
    label: "Informasi",
    children: [
      { label: "Hak & Kewajiban Pasien", path: "/rights-and-obligations" },
      { label: "Jadwal Dokter", path: "/doctor-schedule" },
      { label: "Antrian Poliklinik", path: "/outpatient-queue" },
      {
        label: "Ketersediaan Bed Rawat Inap",
        path: "/inpatient-bed-availability",
      },
    ],
  },
];

// Social media links
const socialLinks = [
  {
    icon: "fab fa-facebook-f",
    url: "#",
    label: "Facebook"
  },
  {
    icon: "fab fa-instagram",
    url: "#",
    label: "Instagram"
  },
  {
    icon: "fab fa-youtube",
    url: "#",
    label: "YouTube"
  },
  {
    icon: "fab fa-twitter",
    url: "#",
    label: "Twitter"
  }
];

// Quick links
const quickLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Service", path: "/terms-of-service" },
  { label: "Sitemap", path: "/sitemap" }
];
</script>

<template>
  <footer class="bg-gradient-to-b from-emerald-900 to-emerald-950 dark:from-neutral-900 dark:to-neutral-950 text-white pt-16 pb-8 mt-auto">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <!-- Brand Section -->
        <div class="lg:col-span-4 xl:col-span-3">
          <div class="flex flex-col items-center lg:items-start text-center lg:text-left">
            <!-- Logo -->
            <div class="mb-6">
              <img 
                src="/src/assets/icons/logo01.png" 
                alt="RSU Permata Hati" 
                class="h-28 w-auto mx-auto lg:mx-0 transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            <!-- Hospital Name & Tagline -->
            <h2 class="text-2xl font-bold text-white mb-2">RSU Permata Hati</h2>
            <p class="text-lg font-semibold italic text-emerald-300 mb-4">"Care with Love"</p>
            
            <!-- Description -->
            <p class="text-emerald-100 text-sm leading-relaxed mb-6 max-w-md">
              Memberikan pelayanan kesehatan terbaik dengan penuh kasih sayang dan profesionalisme untuk kesehatan masyarakat.
            </p>
            
            <!-- Social Media -->
            <div class="flex space-x-4 mb-6">
              <a
                v-for="social in socialLinks"
                :key="social.label"
                :href="social.url"
                :aria-label="social.label"
                class="w-10 h-10 bg-emerald-800 hover:bg-emerald-700 dark:bg-neutral-800 dark:hover:bg-neutral-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <i :class="social.icon + ' text-sm text-white'"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="lg:col-span-3 xl:col-span-3">
          <h3 class="text-xl font-bold mb-6 text-white border-l-4 border-emerald-500 pl-3">
            Kontak Kami
          </h3>
          <ul class="space-y-4">
            <li>
              <a 
                href="tel:036624777" 
                class="flex items-start group hover:text-emerald-300 transition-all duration-300"
              >
                <div class="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center mr-3 group-hover:bg-emerald-600 transition-colors flex-shrink-0 mt-1">
                  <i class="fas fa-phone text-xs text-white"></i>
                </div>
                <div>
                  <span class="font-semibold text-white group-hover:text-emerald-300">(0366) 24777</span>
                  <p class="text-emerald-200 text-sm mt-1">Telepon</p>
                </div>
              </a>
            </li>

            <li>
              <a 
                href="https://wa.me/6282236668828" 
                target="_blank"
                class="flex items-start group hover:text-emerald-300 transition-all duration-300"
              >
                <div class="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center mr-3 group-hover:bg-emerald-600 transition-colors flex-shrink-0 mt-1">
                  <i class="fab fa-whatsapp text-xs text-white"></i>
                </div>
                <div>
                  <span class="font-semibold text-white group-hover:text-emerald-300">082236668828</span>
                  <p class="text-emerald-200 text-sm mt-1">WhatsApp</p>
                </div>
              </a>
            </li>

            <li>
              <a 
                href="https://maps.app.goo.gl/6EXdXra2x6jk41yw9" 
                target="_blank"
                class="flex items-start group hover:text-emerald-300 transition-all duration-300"
              >
                <div class="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center mr-3 group-hover:bg-emerald-600 transition-colors flex-shrink-0 mt-1">
                  <i class="fas fa-map-marker-alt text-xs text-white"></i>
                </div>
                <div>
                  <span class="font-semibold text-white group-hover:text-emerald-300 block">Jl. Kecubung No. 22</span>
                  <span class="text-emerald-200 text-sm">Semarapura, Klungkung</span>
                  <p class="text-emerald-200 text-sm mt-1">Lihat Peta →</p>
                </div>
              </a>
            </li>

            <li>
              <div class="flex items-start">
                <div class="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  <i class="fas fa-clock text-xs text-white"></i>
                </div>
                <div>
                  <span class="font-semibold text-white">Jam Operasional</span>
                  <p class="text-emerald-200 text-sm mt-1">
                    Senin - Sabtu: 08.00 - 20.00<br>
                    <span class="text-emerald-300 font-semibold">UGD: 24 Jam</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- Navigation Menus -->
        <div 
          v-for="menu in menus" 
          :key="menu.label" 
          class="lg:col-span-2"
        >
          <h3 class="text-xl font-bold mb-6 text-white border-l-4 border-emerald-500 pl-3">
            {{ menu.label }}
          </h3>
          <ul class="space-y-3">
            <li v-for="child in menu.children" :key="child.label">
              <router-link 
                :to="child.path" 
                class="group flex items-center text-emerald-200 hover:text-white transition-all duration-300 hover:translate-x-1"
              >
                <i class="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                {{ child.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <!-- Emergency Banner -->
      <div class="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-6 text-center shadow-2xl">
        <div class="flex flex-col md:flex-row items-center justify-between">
          <div class="flex items-center mb-4 md:mb-0">
            <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
              <i class="fas fa-ambulance text-white text-xl"></i>
            </div>
            <div class="text-left">
              <h4 class="text-white font-bold text-lg">Darurat Medis?</h4>
              <p class="text-red-100 text-sm">Layanan UGD 24 Jam</p>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-3">
            <a 
              href="tel:036624777" 
              class="bg-white text-red-600 hover:bg-red-50 font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <i class="fas fa-phone mr-2"></i>Telepon Sekarang
            </a>
            <a 
              href="https://wa.me/6282236668828" 
              target="_blank"
              class="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <i class="fab fa-whatsapp mr-2"></i>WhatsApp
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Footer -->
      <div class="mt-12 pt-8 border-t border-emerald-800 dark:border-neutral-800">
        <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <!-- Copyright -->
          <div class="text-center lg:text-left">
            <p class="text-emerald-300 text-sm">
              &copy; 2024 RSU Permata Hati. All Rights Reserved.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="flex flex-wrap justify-center gap-6 text-sm">
            <router-link 
              v-for="link in quickLinks" 
              :key="link.label"
              :to="link.path"
              class="text-emerald-300 hover:text-white transition-colors duration-300"
            >
              {{ link.label }}
            </router-link>
          </div>

          <!-- Developer Credit -->
          <div class="text-center lg:text-right">
            <p class="text-emerald-300 text-sm">
              Developed by 
              <a 
                href="https://github.com/kuthayoga295" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-white hover:text-emerald-300 font-semibold transition-colors duration-300"
              >
                Kuthayoga295
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Smooth hover effects */
a, button {
  transition: all 0.3s ease;
}

/* Custom gradient for emergency banner */
.bg-gradient-emergency {
  background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
}

/* Ensure proper spacing on mobile */
@media (max-width: 768px) {
  .grid > div {
    margin-bottom: 2rem;
  }
  
  .grid > div:last-child {
    margin-bottom: 0;
  }
}
</style>