<script setup>
import { ref, onMounted } from "vue";
import Hero2 from "../components/Hero2.vue";
import FbEmbed from "../components/FbEmbed.vue";

const aboutData = ref(null);
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    aboutData.value = {
      title: "Visi & Misi",
      subtitle: "Visi dan Misi dari RSU Permata Hati",
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
  }, 1000);
});
</script>

<template>
  <Hero2 />

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-12 lg:col-span-8">
        <div class="leading-8">
          <div v-if="isLoading" class="animate-pulse mb-8 space-y-2">
            <div class="h-8 bg-neutral-300 rounded w-1/3"></div>
            <div class="h-6 bg-neutral-300 rounded w-2/3"></div>
          </div>
          <div v-else class="mb-8">
            <h1 class="text-3xl font-bold">{{ aboutData.title }}</h1>
            <h2 class="text-lg">{{ aboutData.subtitle }}</h2>
          </div>

          <div v-if="isLoading" class="space-y-4 animate-pulse">
            <div class="h-4 bg-neutral-300 rounded w-full"></div>
            <div class="h-4 bg-neutral-300 rounded w-full"></div>
            <div class="h-4 bg-neutral-300 rounded w-full"></div>
            <div class="h-4 bg-neutral-300 rounded w-full"></div>
            <div class="h-4 bg-neutral-300 rounded w-full"></div>
            <div class="h-4 bg-neutral-300 rounded w-full"></div>
            <div class="h-4 bg-neutral-300 rounded w-full"></div>
            <div class="h-4 bg-neutral-300 rounded w-full"></div>
            <div class="h-4 bg-neutral-300 rounded w-3/4"></div>
          </div>

          <div v-else>
            <h3 class="text-2xl font-semibold mb-2">Visi</h3>
            <p class="mb-6">{{ aboutData.visi }}</p>

            <h3 class="text-2xl font-semibold mb-2">Misi</h3>
            <ul class="list-disc px-6 space-y-2">
              <li v-for="(item, index) in aboutData.misi" :key="index">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-4">
        <div v-if="isLoading" class="animate-pulse space-y-4">
          <div class="h-96 bg-neutral-300 rounded w-full"></div>
        </div>
        <div v-else>
          <FbEmbed />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-pulse>div {
  transition: background 0.3s ease-in-out;
}
</style>
