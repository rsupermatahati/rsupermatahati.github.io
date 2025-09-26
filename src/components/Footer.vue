<script setup>
const menus = [
  {
    label: "Profil",
    children: [
      { label: "Tentang Kami", path: "/about" },
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
      { label: "Hak & Kewajiban", path: "/rights-and-obligations" },
      { label: "Jadwal Dokter", path: "/doctor-schedule" },
      { label: "Antrian Poliklinik", path: "/outpatient-queue" },
      {
        label: "Ketersediaan Bed Rawat Inap",
        path: "/inpatient-bed-availability",
      },
      { label: "FAQ", path: "/faq" },
    ],
  },
];
</script>

<template>
  <footer class="bg-gray-800 text-white py-12 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div class="col-span-1 md:col-span-1 text-center md:text-left">
          <div class="flex flex-col items-center">
            <img src="/src/assets/icons/logo01.png" alt="Logo RSU Permata Hati" class="h-24 mb-4" />
            <h2 class="text-xl font-semibold mb-2">RSU Permata Hati</h2>
            <p class="font-bold italic text-gray-400 mb-4">"Care with Love"</p>
          </div>
        </div>

        <div class="col-span-1 md:col-span-1">
          <h3 class="text-lg font-bold mb-4">Kontak Kami</h3>
          <ul class="space-y-2 text-gray-300">
            <li>
              <a href="tel:+6236624777" class="flex items-center hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.096 11.096 0 006.107 6.107l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                (0366) 24777
              </a>
            </li>
            <li>
              <a href="https://wa.me/6282236668828" target="_blank"
                class="flex items-center hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM10 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM13.5 9a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
                    clip-rule="evenodd" />
                </svg>
                082236668828 (Whatsapp)
              </a>
            </li>
            <li>
              <p class="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 mt-1 text-indigo-400 flex-shrink-0"
                  viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd" />
                </svg>
                Jalan Kecubung No. 22, Semarapura, Klungkung, Bali
              </p>
            </li>
          </ul>
        </div>

        <div v-for="menu in menus" :key="menu.label" class="col-span-1 md:col-span-1">
          <h3 class="text-lg font-bold mb-4">{{ menu.label }}</h3>
          <ul class="space-y-2 text-gray-300">
            <li v-for="child in menu.children" :key="child.label">
              <router-link :to="child.path" class="hover:text-white transition">
                {{ child.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
        <p>&copy; 2024 RSU Permata Hati. All Rights Reserved.</p>
        <p class="mt-1">
          Developed by
          <a href="https://github.com/kuthayoga295" target="_blank" rel="noopener noreferrer"
            class="text-indigo-400 hover:text-indigo-300">Kuthayoga295</a>
        </p>
      </div>
    </div>
  </footer>
</template>