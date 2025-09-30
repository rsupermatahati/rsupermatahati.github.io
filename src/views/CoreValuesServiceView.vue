<script setup>
import { ref, onMounted } from "vue";
import Hero2 from "../components/Hero2.vue";
import FbEmbed from "../components/FbEmbed.vue";

const valuesData = ref(null);
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    valuesData.value = {
      title: "Nilai Dasar Layanan",
      subtitle: "Nilai Dasar Layanan RSU Permata Hati",
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
            <div class="h-8 bg-gray-300 rounded w-1/2"></div>
            <div class="h-6 bg-gray-300 rounded w-2/3"></div>
          </div>
          <div v-else class="mb-8">
            <h1 class="text-3xl font-bold">{{ valuesData.title }}</h1>
            <h2 class="text-lg">{{ valuesData.subtitle }}</h2>
          </div>
          <div v-if="isLoading" class="space-y-4 animate-pulse">
            <div class="h-4 bg-gray-300 rounded w-full"></div>
            <div class="h-4 bg-gray-300 rounded w-full"></div>
            <div class="h-4 bg-gray-300 rounded w-full"></div>
            <div class="h-4 bg-gray-300 rounded w-full"></div>
            <div class="h-4 bg-gray-300 rounded w-full"></div>
            <div class="h-4 bg-gray-300 rounded w-full"></div>
            <div class="h-4 bg-gray-300 rounded w-full"></div>
            <div class="h-4 bg-gray-300 rounded w-full"></div>
            <div class="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
          <div v-else>
            <ul class="space-y-6">
              <li v-for="(val, index) in valuesData.values" :key="index" class="pb-2">
                <h3 class="text-2xl font-semibold">{{ val.name }}</h3>
                <p>{{ val.description }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-span-12 lg:col-span-4">
        <div v-if="isLoading" class="animate-pulse space-y-4">
          <div class="h-96 bg-gray-300 rounded w-full"></div>
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
