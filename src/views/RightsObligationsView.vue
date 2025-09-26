<script setup>
import { ref, onMounted } from "vue";
import logo from "/src/assets/icons/logo01.png";
import backgroundImage from "/src/assets/images/01.jpg";
import Fb from "../components/FbEmbed.vue";

// Simulasi loading data
const loading = ref(true);

const articleData = ref({
  title: "Hak dan Kewajiban Pasien",
  subtitle: "Hak dan kewajiban sebagai pasien rumah sakit",
  sections: [],
});

onMounted(() => {
  setTimeout(() => {
    articleData.value.sections = [
      {
        heading: "Hak Pasien",
        items: [
          "Memperoleh informasi mengenai tata tertib dan peraturan yang berlaku di Rumah Sakit",
          "Memperoleh informasi tentang hak dan kewajiban pasien",
          "Memperoleh layanan yang manusiawi, adil, jujur, dan tanpa diskriminasi",
          "Memperoleh layanan kesehatan yang bermutu sesuai dengan standar profesi dan standar prosedur operasional",
          "Memperoleh layanan yang efektif dan efisien sehingga pasien terhindar dari kerugian fisik dan materi",
          "Mengajukan pengaduan atas kualitas pelayanan yang didapatkan",
          "Memilih dokter dan kelas perawatan sesuai dengan keinginannya dan peraturan yang berlaku di Rumah Sakit",
          "Meminta konsultasi tentang penyakit yang dideritanya kepada dokter yang mempunyai Surat Izin Praktek (SIP) baik di dalam maupun luar Rumah Sakit",
          "Mendapatkan privasi dan kerahasiaan penyakit yang diderita termasuk data-data medisnya",
          "Mendapatkan informasi yang meliputi diagnosis dan tata cara tindakan medis, tujuan tindakan medis, alternatif tindakan, risiko dan komplikasi yang mungkin terjadi, serta perkiraan biaya pengobatan",
          "Memberikan persetujuan atau menolak atas tindakan yang akan dilakukan oleh tenaga kesehatan",
          "Didampingi keluarganya dalam keadaan kritis",
          "Menjalankan ibadah sesuai agama atau kepercayaan yang dianut selama tidak mengganggu pasien lain",
          "Memperoleh keamanan dan keselamatan selama perawatan",
          "Mengajukan usul, saran, atau perbaikan atas perlakuan rumah sakit",
          "Menolak pelayanan bimbingan rohani yang tidak sesuai dengan keyakinannya",
          "Menggugat atau menuntut rumah sakit jika pelayanan tidak sesuai standar",
          "Mengeluhkan pelayanan rumah sakit melalui media sesuai ketentuan hukum",
        ],
      },
      {
        heading: "Kewajiban Pasien",
        items: [
          "Mematuhi peraturan yang berlaku di Rumah Sakit",
          "Menggunakan fasilitas Rumah Sakit secara bertanggung jawab",
          "Menghormati hak pasien lain, pengunjung, tenaga kesehatan, dan petugas",
          "Memberikan informasi yang jujur, lengkap, dan akurat terkait kesehatannya",
          "Memberikan informasi tentang kemampuan finansial dan jaminan kesehatan",
          "Mematuhi rencana terapi yang direkomendasikan oleh tenaga kesehatan",
          "Menerima konsekuensi jika menolak atau tidak mematuhi rencana terapi",
          "Memberikan imbalan jasa atas pelayanan yang diterima",
        ],
      },
    ];
    loading.value = false;
  }, 1000);
});
</script>

<template>
  <div class="w-full bg-top bg-cover h-[20rem] lg:h-[24rem]" :style="{ 'background-image': `url(${backgroundImage})` }">
    <div class="flex items-end justify-center w-full h-full bg-gray-900/75 pb-10">
      <div class="flex flex-col items-center justify-center text-center">
        <img :src="logo" alt="" class="h-20 mb-4" />
        <h3 class="text-2xl font-medium text-white mb-2">RUMAH SAKIT UMUM</h3>
        <h1 class="text-4xl font-semibold text-white lg:text-5xl mb-2">
          RSU PERMATA HATI
        </h1>
        <h3 class="text-2xl italic text-white">"Care with Love"</h3>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto p-6">
    <!-- Sections -->
    <div class="grid grid-cols-12 gap-4">
      <!-- Kolom 9 -->
      <div class="col-span-12 md:col-span-8">
        <!-- Title -->
        <div>
          <h1 v-if="!loading" class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {{ articleData.title }}
          </h1>
          <div v-else class="h-8 w-64 bg-gray-200 dark:bg-gray-700 animate-pulse rounded mb-2"></div>

          <!-- Subtitle -->
          <p v-if="!loading" class="text-lg text-gray-600 dark:text-gray-300 mb-6">
            {{ articleData.subtitle }}
          </p>
          <div v-else class="h-5 w-96 bg-gray-200 dark:bg-gray-700 animate-pulse rounded mb-6"></div>
        </div>

        <div v-if="loading" class="space-y-6">
          <div v-for="n in 2" :key="n" class="space-y-3">
            <div class="h-6 w-40 bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
            <div v-for="i in 5" :key="i" class="h-4 w-full bg-gray-200 dark:bg-gray-700 animate-pulse rounded"></div>
          </div>
        </div>

        <div v-else class="space-y-10">
          <div v-for="(section, idx) in articleData.sections" :key="idx" class="space-y-4">
            <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              {{ section.heading }}
            </h2>
            <ol class="list-decimal space-y-2 text-gray-700 dark:text-gray-300 px-8">
              <li v-for="(item, i) in section.items" :key="i">{{ item }}</li>
            </ol>
          </div>
        </div>
      </div>

      <!-- Kolom 3 -->
      <div class="col-span-12 md:col-span-4">
        <Fb />
      </div>
    </div>

  </div>
</template>
