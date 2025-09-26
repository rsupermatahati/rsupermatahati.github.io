<script setup>
import { ref, onMounted } from "vue";
import logo from "/src/assets/icons/logo01.png";
import backgroundImage from "/src/assets/images/01.jpg";

// Simulasi data dari API
const faqs = ref([]);
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    faqs.value = [
      {
        question:
          "Apakah di RSU Permata Hati bisa melakukan Medical Check Up (MCU)?",
        answer:
          "Ya, RSU Permata Hati memiliki fasilitas dan paket untuk medical check-up, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
      },
      {
        question:
          "Apakah di RSU Permata Hati dapat melakukan vaksinasi dan imunisasi?",
        answer:
          "Ya, RSU Permata Hati menyediakan layanan vaksinasi dan imunisasi, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
      },
      {
        question:
          "Apakah di RSU Permata Hati melayani pemeriksaan dengan menggunakan BPJS/KIS?",
        answer:
          "Ya, RSU Permata Hati telah bekerjasama dengan BPJS Kesehatan. Silakan menghubungi call center kami (0366) 24777 atau datang langsung untuk informasi lebih lanjut.",
      },
      {
        question:
          "Apakah di RSU Permata Hati menerima pembayaran dengan penjamin asuransi/perusahaan?",
        answer:
          "Ya, RSU Permata Hati sudah bekerja sama dengan BPJS Kesehatan, BPJS Ketenagakerjaan, AdMedika, Prudential, BRI Life, BNI Life, Jasa Raharja, Jasa Raharja Putra dan yang lainnya, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
      },
      {
        question: "Apakah RSU Permata Hati punya nomor Whatsapp?",
        answer: "Ya, anda dapat Whatsapp ke nomor 082236668828.",
      },
      {
        question: "Bagaimana cara mengetahui jadwal praktek dokter di poliklinik?",
        answer:
          "Anda dapat melihat jadwal praktek dokter spesialis di halaman web, bertanya melalui Whatsapp atau menghubungi call center RSU Permata Hati di nomor (0366) 24777.",
      },
      {
        question: "Bagaimana caranya mendaftar untuk berobat di poliklinik?",
        answer:
          "Anda bisa datang langsung ke RSU Permata Hati, daftar melalui frontend, Whatsapp ataupun menghubungi call center (0366) 24777.",
      },
      {
        question: "Berapa nomor call center RSU Permata Hati?",
        answer:
          "Anda dapat menghubungi call center RSU Permata Hati di nomor (0366) 24777.",
      },
      {
        question: "Jam operasional RSU Permata Hati?",
        answer:
          "Untuk layanan rawat jalan atau poliklinik dimulai pukul 08:00 WITA, dan untuk layanan darurat UGD 24 jam setiap hari, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
      },
      {
        question:
          "Pelayanan kesehatan apa saja yang disediakan di RSU Permata Hati?",
        answer:
          "RSU Permata Hati melayani pengobatan rawat jalan di poliklinik, rawat inap, layanan darurat UGD 24 jam, pemeriksaan laboratorium dan radiologi serta layanan penunjang lainnya, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
      },
      {
        question:
          "Persyaratan apa saja yang harus dibawa jika menggunakan BPJS/KIS?",
        answer:
          "Untuk menggunakan jaminan BPJS Kesehatan harus memiliki rujukan dari Faskes Tingkat I dan menunjukkan kartu identitas diri (KTP). Untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777 atau datang langsung ke RSU Permata Hati.",
      },
    ];
    isLoading.value = false;
  }, 1000); // delay 1 detik untuk simulasi
});
</script>

<template>
  <!-- Hero -->
  <div class="w-full bg-top bg-cover h-[20rem] lg:h-[24rem]" :style="{ 'background-image': `url(${backgroundImage})` }">
    <div class="flex items-end justify-center w-full h-full bg-gray-900/75 pb-10">
      <div class="flex flex-col items-center justify-center text-center">
        <img :src="logo" alt="" class="h-20 mb-4" />
        <h3 class="text-2xl font-medium text-white mb-2">
          RUMAH SAKIT UMUM
        </h3>
        <h1 class="text-4xl font-semibold text-white lg:text-5xl mb-2">
          RSU PERMATA HATI
        </h1>
        <h3 class="text-2xl italic text-white">"Care with Love"</h3>
      </div>
    </div>
  </div>

  <!-- Konten -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="leading-8">
      <h1 class="text-3xl">Frequently Asked Questions</h1>
      <h2 class="mb-8">Pertanyaan yang sering ditanyakan.</h2>

      <!-- Skeleton -->
      <div v-if="isLoading" class="space-y-4 animate-pulse">
        <div class="h-64 bg-gray-300 rounded-lg"></div>
        <div class="h-6 bg-gray-300 rounded w-2/3"></div>
        <div class="h-4 bg-gray-300 rounded w-full"></div>
        <div class="h-4 bg-gray-300 rounded w-5/6"></div>
        <div class="h-6 bg-gray-300 rounded w-1/2"></div>
        <div class="h-4 bg-gray-300 rounded w-full"></div>
      </div>

      <!-- Konten FAQ -->
      <div v-else>
        <img :src="backgroundImage" alt="" class="w-full border border-gray-200 rounded-lg mb-8" />
        <ul class="list-disc px-6 space-y-4">
          <li v-for="(faq, index) in faqs" :key="index">
            <p class="font-bold">{{ faq.question }}</p>
            <p>{{ faq.answer }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* tambahan kecil kalau mau smooth */
.animate-pulse>div {
  transition: background 0.3s ease-in-out;
}
</style>
