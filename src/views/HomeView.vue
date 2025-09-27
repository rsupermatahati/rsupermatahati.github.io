<script setup>
import Map from "../components/Map.vue";
import logo from "/src/assets/icons/logo01.png";
import rsuph from "/src/assets/images/01.jpg";
import ambulance from "/src/assets/images/ambulance.jpg";
import backgroundImage from "/src/assets/images/01.jpg";
</script>

<template>
  <div class="bg-white">
    <div class="w-full bg-top bg-cover h-[28rem] lg:h-[32rem]"
      :style="{ 'background-image': `url(${backgroundImage})` }">
      <div class="flex items-center justify-center w-full h-full bg-white/80">
        <div class="flex flex-col items-center justify-center text-center">
          <img :src="logo" alt="" class="h-30 mb-4" />
          <h3 class="text-2xl font-medium mb-2">RUMAH SAKIT UMUM</h3>
          <h1 class="text-4xl font-semibold lg:text-6xl mb-2">PERMATA HATI</h1>
          <h3 class="text-3xl italic">"Care with Love"</h3>
          <RouterLink to="/about"
            class="px-5 py-2 mt-6 text-lg font-medium leading-6 text-center text-white capitalize bg-emerald-700 rounded-lg hover:bg-emerald-800 lg:mx-0 lg:w-auto focus:outline-none">
            Learn more...
          </RouterLink>
        </div>
      </div>
    </div>
  </div>

  <section class="pt-20 bg-white ">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
      <!-- Gambar -->
      <div class="aspect-[4/3]">
        <img :src="rsuph" alt="RSU Permata Hati" class="w-full h-full object-cover object-right rounded-lg shadow-lg" />
      </div>
      <!-- Konten -->
      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
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
              <h3 class="font-semibold text-emerald-700 dark:text-white">REKAM MEDIS ELEKTRONIK</h3>
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
              <h3 class="font-semibold text-emerald-700 dark:text-white">ASURANSI KESEHATAN</h3>
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
              <h3 class="font-semibold text-emerald-700 dark:text-white">TERJANGKAU</h3>
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
              <h3 class="font-semibold text-emerald-700 dark:text-white">KONSULTASI KESEHATAN BERSAMA DOKTER</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Konsultasi seputar kesehatan dengan dokter spesialis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Grid 2 kolom, di mobile jadi 1 -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <!-- Kanan di desktop, atas di mobile -->
        <div class="order-1 md:order-2 w-full">
          <div class="aspect-[4/3]">
            <img :src="ambulance" alt="Ambulance RSU Permata Hati"
              class="w-full h-full object-cover object-center rounded-lg shadow-lg" />
          </div>
        </div>

        <!-- Kiri di desktop, bawah di mobile -->
        <div class="order-2 md:order-1">
          <h2 class="text-2xl md:text-3xl font-bold text-emerald-700 mb-4">
            Kenapa Harus RSU Permata Hati?
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

      </div>
    </div>
  </section>

  <section>
    <div class="w-full bg-top bg-cover h-[20rem] lg:h-[24rem]"
      :style="{ 'background-image': `url(${backgroundImage})` }">
      <div class="flex items-center justify-center w-full h-full bg-gradient-to-r from-emerald-700/95 to-green-600/95">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h2 class="text-xl font-bold text-white lg:text-4xl mb-4">
            “Kesehatan adalah keadaan fisik, mental dan sosial yang lengkap, dan bukan hanya tidak adanya penyakit atau
            kelemahan.”
          </h2>
          <h3 class="text-lg lg:text-2xl italic text-white">- Organisasi Kesehatan Dunia (WHO) -</h3>
        </div>
      </div>
    </div>
  </section>

  <section>
    <Map />
  </section>

</template>
