<script setup>
import Map from "../components/Map.vue";
import Faq from "../components/Faq.vue";
import ambulance from "/src/assets/images/ambulance.jpg";
import ambulance01 from "/src/assets/images/ambulance01.jpg";
import backgroundImage from "/src/assets/images/01.jpg";
import drmurya from "/src/assets/doctors/drmurya.jpg"
import drindra from "/src/assets/doctors/drindra.jpg"
import drarya from "/src/assets/doctors/drarya.jpg"
import dryunita from "/src/assets/doctors/dryunita.jpg"
import psuit from "/src/assets/rooms/president-suite.jpg";
import suit from "/src/assets/rooms/suite.jpg";
import emerald from "/src/assets/rooms/emerald.jpg";
</script>

<template>
  <div class="flex justify-center items-center py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-7xl px-4 sm:px-6 lg:px-8">
      <div class="order-1 md:order-2 w-full flex justify-center items-center">
        <div class="relative flex justify-center items-center min-w-1/2">
          <div class="absolute top-0 right-0 bg-gradient-to-tr from-emerald-700 to-green-600 w-32 h-32 rounded"></div>
          <div class="absolute bottom-0 left-0 bg-gradient-to-bl from-emerald-700 to-green-600 w-32 h-32 rounded"></div>
          <div class="aspect-[4/3] relative p-2">
            <img :src="backgroundImage" alt="" class="w-full h-full object-cover object-right rounded z-10"></img>
          </div>
        </div>
      </div>
      <div class="order-2 md:order-1 w-full flex justify-center md:justify-start items-center">
        <div class="text-center md:text-start mt-8 md:mt-0">
          <h3 class="text-2xl md:text-3xl lg:text-4xl font-medium text-green-700 dark:text-gray-100">RSU Permata Hati
          </h3>
          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold italic text-emerald-800 dark:text-white mt-3">CARE WITH
            LOVE</h1>
          <p class="text-justify md:pe-4 lg:pe-12 mt-3">
            Semua elemen pelayanan RSU Permata Hati baik dari konsultan, dokter
            spesialis, dokter umum, perawat dan bidan serta tim paramedis selalu
            berkomitmen memberikan pelayanan terbaik dari hati untuk menjamin kualitas
            & kepuasan pelayanan yang anda peroleh.
          </p>
          <a href="https://online.rsupermatahati.id" target="_blank" rel="noopener noreferrer"
            class="inline-block bg-emerald-700 hover:bg-emerald-600 focus:outline-none text-white font-bold rounded px-6 md:px-8 py-2 mt-4 transition-colors duration-200">
            Appointment
          </a>
        </div>
      </div>
    </div>
  </div>

  <section class="py-16 bg-white dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="w-full">
          <div class="relative flex justify-center items-center min-w-1/2">
            <div class="absolute top-0 left-0 bg-gradient-to-tl from-emerald-700 to-green-600 w-32 h-32 rounded"></div>
            <div class="absolute bottom-0 right-0 bg-gradient-to-br from-emerald-700 to-green-600 w-32 h-32 rounded">
            </div>
            <div class="aspect-[4/3] relative p-2">
              <img :src="ambulance" alt="" class="w-full h-full object-cover object-right rounded z-10">
            </div>
          </div>
        </div>
        <div class="w-full">
          <h2 class="text-2xl md:text-3xl font-bold text-emerald-700 dark:text-gray-100 mb-4">
            Pelayanan Unggulan RSU Permata Hati
          </h2>
          <p class="mb-8 text-justify">
            RSU Permata Hati hadir untuk memberikan pelayanan kesehatan yang aman, mudah diakses, terjangkau, dan
            profesional. Kami terus berkomitmen menghadirkan sistem modern serta layanan yang memudahkan pasien dan
            keluarga dalam setiap proses perawatan.
          </p>
          <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div class="flex items-start space-x-3">
              <div class="text-emerald-600 text-2xl">
                <i class="fas fa-notes-medical"></i>
              </div>
              <div>
                <h3 class="font-semibold text-emerald-700 dark:text-gray-100">REKAM MEDIS ELEKTRONIK</h3>
                <p class="text-sm">
                  Kami mencatat identitas pasien, hasil pemeriksaan, pengobatan, tindakan, dan pelayanan secara
                  elektronik, sehingga lebih aman, cepat, dan mudah diakses.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="text-emerald-600 text-2xl">
                <i class="fas fa-shield-alt"></i>
              </div>
              <div>
                <h3 class="font-semibold text-emerald-700 dark:text-gray-100">ASURANSI KESEHATAN</h3>
                <p class="text-sm">
                  RSU Permata Hati melayani asuransi kesehatan dengan sistem reimbursement maupun melalui BPJS
                  Kesehatan, demi memudahkan pasien dalam mendapatkan layanan.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="text-emerald-600 text-2xl">
                <i class="fas fa-wallet"></i>
              </div>
              <div>
                <h3 class="font-semibold text-emerald-700 dark:text-gray-100">TERJANGKAU</h3>
                <p class="text-sm">
                  Kami berkomitmen memberikan pelayanan terbaik dengan harga yang terjangkau, tanpa mengurangi kualitas
                  perawatan dan kenyamanan pasien.
                </p>
              </div>
            </div>
            <div class="flex items-start space-x-3">
              <div class="text-emerald-600 text-2xl">
                <i class="fas fa-user-md"></i>
              </div>
              <div>
                <h3 class="font-semibold text-emerald-700 dark:text-gray-100">KONSULTASI KESEHATAN BERSAMA DOKTER</h3>
                <p class="text-sm">
                  Pasien dapat melakukan konsultasi kesehatan dengan dokter spesialis sesuai kebutuhan, untuk
                  mendapatkan diagnosa dan solusi medis yang tepat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="order-1 xl:order-2 w-full">
          <div class="relative flex justify-center items-center min-w-1/2">
            <div class="absolute top-0 right-0 bg-gradient-to-tr from-emerald-700 to-green-600 w-32 h-32 rounded"></div>
            <div class="absolute bottom-0 left-0 bg-gradient-to-bl from-emerald-700 to-green-600 w-32 h-32 rounded">
            </div>
            <div class="aspect-[4/3] relative p-2">
              <img :src="ambulance01" alt="" class="w-full h-full object-cover object-right rounded z-10">
            </div>
          </div>
        </div>
        <div class="order-2 md:order-1">
          <h2 class="text-2xl md:text-3xl font-bold text-emerald-700 dark:text-gray-100 mb-4">
            Kenapa Harus RSU Permata Hati?
          </h2>
          <p class="mb-6">
            RSU Permata Hati berkomitmen memberikan pelayanan terbaik dengan fasilitas modern, tenaga medis
            berpengalaman, dan akses yang mudah.
          </p>

          <div class="space-y-6">
            <div class="flex items-start">
              <i class="fas fa-user-md text-emerald-600 text-2xl mr-4"></i>
              <div>
                <h3 class="font-semibold text-emerald-700 dark:text-gray-100">Dokter Berkualitas</h3>
                <p class="text-sm">
                  Dokter berkompeten dan terlatih siap melayani demi kesembuhan pasien.
                </p>
              </div>
            </div>

            <div class="flex items-start">
              <i class="fas fa-clock text-emerald-600 text-2xl mr-4"></i>
              <div>
                <h3 class="font-semibold text-emerald-700 dark:text-gray-100">Pelayanan 24 Jam</h3>
                <p class="text-sm">
                  Siap melayani Anda setiap saat dengan semangat "Care with Love".
                </p>
              </div>
            </div>
            <div class="flex items-start">
              <i class="fas fa-heartbeat text-emerald-600 text-2xl mr-4"></i>
              <div>
                <h3 class="font-semibold text-emerald-700 dark:text-gray-100">Unit Gawat Darurat</h3>
                <p class="text-sm">
                  Menangani kasus darurat dengan cepat, tepat, dan profesional.
                </p>
              </div>
            </div>
            <div class="flex items-start">
              <i class="fas fa-briefcase-medical text-emerald-600 text-2xl mr-4"></i>
              <div>
                <h3 class="font-semibold text-emerald-700 dark:text-gray-100">Peralatan Medis</h3>
                <p class="text-sm">
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
      <div
        class="flex items-center justify-center w-full h-full bg-gradient-to-r from-emerald-800/95 to-green-600/95 dark:from-gray-950/95 dark:to-gray-900/95">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <i class="fa-solid fa-quote-right text-8xl text-white mb-2"></i>
          <h2 class="text-xl font-bold text-white lg:text-4xl mb-4">
            Kesehatan adalah keadaan fisik, mental dan sosial yang lengkap, dan bukan hanya tidak adanya penyakit atau
            kelemahan.
          </h2>
          <h3 class="text-lg lg:text-2xl italic text-white">- Organisasi Kesehatan Dunia (WHO) -</h3>
        </div>
      </div>
    </div>
  </section>

  <section class="py-4 mt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center text-emerald-700 dark:text-gray-100 mb-4">
          Dokter Spesialis RSU Permata Hati
        </h2>
        <div class="w-24 border-t-4 border-emerald-700"></div>
      </div>
      <div class="mt-8 overflow-x-auto pb-4 hide-scrollbar">
        <div class="flex flex-row justify-between items-stretch gap-4">
          <!-- Card 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden flex-shrink-0 w-72">
            <div class="aspect-square">
              <img :src="drmurya" alt="Rekam Medis Elektronik" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-emerald-700 dark:text-gray-100">dr. I Wayan Murya, Sp.A
              </h3>
              <p class="mt-2 text-gray-800 dark:text-gray-400 text-sm">Dokter Spesialis Anak</p>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden flex-shrink-0 w-72">
            <div class="aspect-square">
              <img :src="drindra" alt="Asuransi Kesehatan" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-emerald-700 dark:text-gray-100">dr. I Gede Indra Ari Utama Murya,
                Sp.OG
              </h3>
              <p class="mt-2 text-gray-800 dark:text-gray-400 text-sm">Dokter Spesialis Obgyn</p>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden flex-shrink-0 w-72">
            <div class="aspect-square">
              <img :src="drarya" alt="Pelayanan Terjangkau" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-emerald-700 dark:text-gray-100">dr. I Gusti Ngurah Gde Dwi Aryanata,
                Sp.B
              </h3>
              <p class="mt-2 text-gray-800 dark:text-gray-400 text-sm">Dokter Spesialis Bedah</p>
            </div>
          </div>
          <!-- Card 4 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden flex-shrink-0 w-72">
            <div class="aspect-square">
              <img :src="dryunita" alt="Konsultasi Kesehatan" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-emerald-700 dark:text-gray-100">dr. Made Yunita Saraswati Murya,
                M.Biomed, Sp.A
              </h3>
              <p class="mt-2 text-gray-800 dark:text-gray-400 text-sm">Dokter Spesialis Anak</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center items-center">
        <router-link to="/outpatient-care"
          class="bg-emerald-700 hover:bg-emerald-600 text-white font-bold leading-8 px-6 md:px-8 py-1 rounded mt-4">More
        </router-link>
      </div>
    </div>
  </section>

  <section class="py-4 mt-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center">
        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-center text-emerald-700 dark:text-gray-100 mb-4">
          Kamar Rawat Inap RSU Permata Hati
        </h2>
        <div class="w-24 border-t-4 border-emerald-700"></div>
      </div>
      <div class="mt-8 overflow-x-auto px-1 pb-4 hide-scrollbar">
        <div class="flex flex-row justify-between items-stretch gap-4">
          <!-- Card 1 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden flex-shrink-0 w-96">
            <div class="aspect-[4/3]">
              <img :src="psuit" alt="Rekam Medis Elektronik" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-emerald-700 dark:text-gray-100">President Suite</h3>
              <p class="mt-2 text-gray-800 dark:text-gray-400 text-sm">VVIP</p>
            </div>
          </div>
          <!-- Card 2 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden flex-shrink-0 w-96">
            <div class="aspect-[4/3]">
              <img :src="suit" alt="Asuransi Kesehatan" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-emerald-700 dark:text-gray-100">Suite</h3>
              <p class="mt-2 text-gray-800 dark:text-gray-400 text-sm">VIP</p>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden flex-shrink-0 w-96">
            <div class="aspect-[4/3]">
              <img :src="emerald" alt="Pelayanan Terjangkau" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-emerald-700 dark:text-gray-100">Emerald</h3>
              <p class="mt-2 text-gray-800 dark:text-gray-400 text-sm">Excecutive</p>
            </div>
          </div>

        </div>
      </div>
      <div class="w-full flex justify-center items-center">
        <router-link to="/inpatient-care"
          class="bg-emerald-700 hover:bg-emerald-600 text-white font-bold leading-8 px-6 md:px-8 py-1 rounded mt-4">More
        </router-link>
      </div>
    </div>
  </section>

  <section class="mt-12">
    <Faq />
  </section>

  <section class="mt-20">
    <Map />
  </section>

</template>

<style scoped>
/* Hide scrollbar */
.hide-scrollbar {
  -ms-overflow-style: none;
  /* IE dan Edge */
  scrollbar-width: none;
  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari, Opera */
}
</style>