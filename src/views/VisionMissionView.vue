<script setup>
import { ref, onMounted } from "vue";
import logo from "/src/assets/icons/logo01.png";
import backgroundImage from "/src/assets/images/01.jpg";
import thumbnail from "/src/assets/icons/visimisi.png";

// Simulasi data dari API
const aboutData = ref(null);
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    aboutData.value = {
      title: "Visi & Misi",
      subtitle: "Visi dan Misi dari RSU Permata Hati",
      image: thumbnail,
      visi: "Menjadikan RSU Permata Hati sebagai Pusat Pelayanan Kesehatan yang Profesional dan Unggul di Wilayah Bali Timur",
      misi: [
        "Melakukan pengelolaan rumah sakit secara profesional agar tercapai efisiensi dan efektifitas yang tinggi",
        "Menyelenggarakan pelayanan kesehatan dengan pelayanan yang profesional, aman, manusiawi dan terjangkau oleh masyarakat",
        "Mengutamakan kemudahan dan kepuasan konsumen dalam pelayanan kesehatan",
        "Melakukan upaya secara berkelanjutan untuk meningkatkan mutu dan kemampuan SDM dalam memberikan pelayanan yang profesional",
        "Mengikuti perkembangan ilmu pengetahuan dan teknologi kedokteran",
        "Bekerjasama dengan instansi, perusahaan dan semua pihak yang peduli terhadap pelayanan kesehatan",
      ],
    };
    isLoading.value = false;
  }, 1500); // delay simulasi
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
        <h1 class="text-3xl font-bold">{{ aboutData.title }}</h1>
        <h2 class="text-lg text-gray-600">{{ aboutData.subtitle }}</h2>
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

      <!-- Konten About -->
      <div v-else>
        <div class="aspect-[21/9] w-full mb-8">
          <img :src="aboutData.image" alt=""
            class="w-full h-full object-cover object-center border border-gray-200 rounded-lg" />
        </div>

        <!-- Visi -->
        <h3 class="text-2xl font-semibold mb-2">Visi</h3>
        <p class="mb-6">{{ aboutData.visi }}</p>

        <!-- Misi -->
        <h3 class="text-2xl font-semibold mb-2">Misi</h3>
        <ul class="list-disc px-6 space-y-2">
          <li v-for="(item, index) in aboutData.misi" :key="index">
            {{ item }}
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
