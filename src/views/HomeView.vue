<script setup>
import Map from "../components/Map.vue";
import logo from "/src/assets/icons/logo01.png";
import rsuph from "/src/assets/images/01.jpg";
import ambulance from "/src/assets/images/ambulance.jpg";
</script>

<template>

  <div class="container px-6 py-16 mx-auto text-center">
    <div class="max-w-lg mx-auto flex flex-col items-center">
      <img :src="logo" alt="" class="h-30 mb-4" />
      <h3 class="text-2xl font-medium mb-2">RUMAH SAKIT UMUM</h3>
      <h1 class="text-4xl font-semibold lg:text-5xl mb-2">RSU PERMATA HATI</h1>
      <h3 class="text-2xl italic">"Care with Love"</h3>
      <RouterLink to="/about"
        class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-emerald-600 rounded-lg hover:bg-emerald-500 lg:mx-0 lg:w-auto focus:outline-none">
        Learn more...
      </RouterLink>
    </div>
  </div>

  <section class="py-12 bg-white ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
      <!-- Gambar -->
      <div class="aspect-[16/9]">
        <img :src="rsuph" alt="Ambulance RSU Permata Hati"
          class="w-full h-full object-cover object-center rounded-lg shadow-lg" />
      </div>
      <!-- Konten -->
      <div>
        <h2 class="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">
          "Care with Love"
        </h2>
        <p class="text-gray-700 dark:text-gray-300 mb-8">
          Semua elemen pelayanan RSU Permata Hati baik dari konsultan, dokter
          spesialis, dokter umum, perawat dan bidan serta tim paramedis selalu
          berkomitmen memberikan pelayanan terbaik dari hati untuk menjamin kualitas
          & kepuasan pelayanan yang anda peroleh.
        </p>
        <!-- Grid 2 kolom fitur -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <!-- Item 1 -->
          <div class="flex items-start space-x-3">
            <div class="text-emerald-600 text-2xl">
              <i class="fas fa-notes-medical"></i>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">REKAM MEDIS ELEKTRONIK</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Kami mencatat identitas pasien, pemeriksaan, pengobatan, tindakan dan pelayanan secara elektronik.
              </p>
            </div>
          </div>
          <!-- Item 2 -->
          <div class="flex items-start space-x-3">
            <div class="text-emerald-600 text-2xl">
              <i class="fas fa-shield-alt"></i>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">ASURANSI KESEHATAN</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                RSU Permata Hati melayani asuransi kesehatan dengan sistem reimbursement dan BPJS Kesehatan.
              </p>
            </div>
          </div>
          <!-- Item 3 -->
          <div class="flex items-start space-x-3">
            <div class="text-emerald-600 text-2xl">
              <i class="fas fa-wallet"></i>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">TERJANGKAU</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Kami memberikan pelayanan terbaik dengan harga yang terjangkau.
              </p>
            </div>
          </div>
          <!-- Item 4 -->
          <div class="flex items-start space-x-3">
            <div class="text-emerald-600 text-2xl">
              <i class="fas fa-user-md"></i>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white">KONSULTASI KESEHATAN BERSAMA DOKTER</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Konsultasi seputar kesehatan dengan dokter spesialis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Grid 2 kolom, di mobile jadi 1 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <!-- Kiri: Konten -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">
            Kenapa Memilih Kami?
          </h2>
          <p class="text-gray-600 mb-6">
            RSU Permata Hati berkomitmen memberikan pelayanan terbaik dengan fasilitas modern, tenaga medis
            berpengalaman, dan akses yang mudah.
          </p>

          <div class="space-y-6">
            <!-- Item -->
            <div class="flex items-start">
              <i class="fas fa-user-md text-emerald-600 text-2xl mr-4"></i>
              <div>
                <h3 class="font-semibold text-emerald-700">Dokter Berkualitas</h3>
                <p class="text-gray-600 text-sm">
                  Dokter berkompeten dan terlatih siap melayani demi kesembuhan pasien.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <i class="fas fa-clock text-emerald-600 text-2xl mr-4"></i>
              <div>
                <h3 class="font-semibold text-emerald-700">Pelayanan 24 Jam</h3>
                <p class="text-gray-600 text-sm">
                  Siap melayani Anda setiap saat dengan semangat "Care with Love".
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <i class="fas fa-heartbeat text-emerald-600 text-2xl mr-4"></i>
              <div>
                <h3 class="font-semibold text-emerald-700">Unit Gawat Darurat</h3>
                <p class="text-gray-600 text-sm">
                  Menangani kasus darurat dengan cepat, tepat, dan profesional.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <i class="fas fa-briefcase-medical text-emerald-600 text-2xl mr-4"></i>
              <div>
                <h3 class="font-semibold text-emerald-700">Peralatan Medis</h3>
                <p class="text-gray-600 text-sm">
                  Fasilitas modern untuk mendukung diagnosis dan perawatan pasien.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Kanan: Gambar -->
        <div class="aspect-[16/9]">
          <img :src="ambulance" alt="Ambulance RSU Permata Hati"
            class="w-full h-full object-cover object-center rounded-lg shadow-lg" />
        </div>

      </div>
    </div>
  </section>

  <div class="mt-0">
    <Map />
  </div>

</template>