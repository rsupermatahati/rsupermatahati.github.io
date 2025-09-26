<script setup>
import { ref, onMounted } from "vue";
import logo from "/src/assets/icons/logo01.png";
import backgroundImage from "/src/assets/images/01.jpg";
import thumbnail from "/src/assets/icons/nilaidasarlayanan.png";

// Simulasi data dari API
const valuesData = ref(null);
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    valuesData.value = {
      title: "Nilai Dasar Layanan",
      subtitle: "Nilai Dasar Layanan RSU Permata Hati",
      image: thumbnail,
      values: [
        {
          name: "Integritas",
          description:
            "Kami bekerja berdasarkan pada etika, moral dan karakter yang baik",
        },
        {
          name: "Niat dan Inisiatif",
          description:
            "Kami selalu bekerja dengan niat dan inisiatif yang baik dan tulus untuk mewujudkan pelayanan prima",
        },
        {
          name: "Disiplin",
          description:
            "Dalam setiap kegiatan disiplin adalah jiwa dan semangat kami",
        },
        {
          name: "Aman",
          description:
            "Kami selalu bekerja berlandaskan pada prosedur, utamakan keselamatan pasien, lingkungan dan teman kerja",
        },
        {
          name: "Hati",
          description:
            "Dalam setiap aktifitas kami selalu bekerja dengan hati sesuai motto pelayanan Care With Love",
        },
      ],
    };
    isLoading.value = false;
  }, 1000); // delay simulasi
});
</script>

<template>
  <!-- Hero -->
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

  <!-- Konten -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="leading-8">
      <!-- Title + Subtitle -->
      <div v-if="isLoading" class="animate-pulse mb-8 space-y-2">
        <div class="h-8 bg-gray-300 rounded w-1/3"></div>
        <div class="h-6 bg-gray-300 rounded w-2/3"></div>
      </div>
      <div v-else class="mb-8">
        <h1 class="text-3xl font-bold">{{ valuesData.title }}</h1>
        <h2 class="text-lg text-gray-600">{{ valuesData.subtitle }}</h2>
      </div>

      <!-- Skeleton konten -->
      <div v-if="isLoading" class="space-y-4 animate-pulse">
        <div class="h-64 bg-gray-300 rounded-lg"></div>
        <div class="h-6 bg-gray-300 rounded w-1/2"></div>
        <div class="h-4 bg-gray-300 rounded w-5/6"></div>
        <div class="h-4 bg-gray-300 rounded w-4/6"></div>
        <div class="h-4 bg-gray-300 rounded w-3/4"></div>
        <div class="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>

      <!-- Konten Nilai Dasar -->
      <div v-else>
        <img :src="valuesData.image" alt="" class="w-full border border-gray-200 rounded-lg mb-8" />

        <ul class="space-y-6">
          <li v-for="(val, index) in valuesData.values" :key="index" class="border-b pb-4">
            <h3 class="text-2xl font-semibold">{{ val.name }}</h3>
            <p>{{ val.description }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-pulse>div {
  transition: background 0.3s ease-in-out;
}
</style>
