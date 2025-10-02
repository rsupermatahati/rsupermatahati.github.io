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
</script>

<template>
  <footer class="bg-emerald-900 dark:bg-gray-950 text-white py-12 mt-auto">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div class="col-span-1 md:col-span-1 text-center md:text-left">
          <div class="flex flex-col items-center">
            <img src="/src/assets/icons/logo01.png" alt="Logo RSU Permata Hati" class="h-24 mb-4" />
            <h2 class="text-xl font-semibold mb-2">RSU Permata Hati</h2>
            <p class="font-bold italic mb-4">"Care with Love"</p>
          </div>
        </div>

        <div class="col-span-1 md:col-span-1">
          <h3 class="text-lg font-bold mb-4">Kontak Kami</h3>
          <ul class="space-y-2 text-gray-300">
            <li>
              <a href="tel:036624777" class="flex items-center hover:text-white transition">
                <i class="fa-solid fa-phone mr-2"></i>
                (0366) 24777
              </a>
            </li>

            <li>
              <a href="https://wa.me/6282236668828" target="_blank"
                class="flex items-center hover:text-white transition">
                <i class="fa-brands fa-whatsapp mr-2"></i>
                082236668828
              </a>
            </li>

            <li>
              <a href="https://maps.app.goo.gl/6EXdXra2x6jk41yw9" target="_blank"
                class="flex items-center hover:text-white transition">
                <i class="fa-solid fa-location-dot mr-2 mt-1 flex-shrink-0"></i>
                Jl. Kecubung No. 22, Semarapura, Klungkung
              </a>
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

      <div class="mt-8 border-t border-gray-400 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 RSU Permata Hati. All Rights Reserved.</p>
        <p class="mt-1">
          Developed by
          <a href="https://github.com/kuthayoga295" target="_blank" rel="noopener noreferrer"
            class="text-emerald-600 hover:text-emerald-500">Kuthayoga295</a>
        </p>
      </div>
    </div>
  </footer>
</template>