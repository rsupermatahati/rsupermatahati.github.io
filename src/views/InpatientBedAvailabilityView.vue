<script setup>
import { ref, onMounted } from "vue";
import Hero2 from "../components/Hero2.vue";

const beds = ref([]);
const tanggal = ref("");
const jam = ref("");
const loading = ref(false);

const getBeds = async () => {
  try {
    loading.value = true;
    const res = await fetch("/api/rawatinap/ketersediaan-bed");
    const data = await res.json();
    beds.value = Array.isArray(data) ? data : data?.data || [];
  } catch (err) {
    console.error("Gagal fetch data bed:", err);
  } finally {
    loading.value = false; 
  }
};

onMounted(() => {
  getBeds();

  const now = new Date();

  tanggal.value = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Makassar",
  }).format(now);

  jam.value =
    new Intl.DateTimeFormat("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Makassar",
    }).format(now) + " WITA";
});
</script>

<template>
  <Hero2 />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-3xl font-bold mb-2">Ketersediaan Bed Rawat Inap</h1>
    <h2 class="mb-8">{{ tanggal }}, {{ jam }}</h2>

    <div v-if="loading" class="text-center py-8">
      <svg class="animate-spin h-8 w-8 text-emerald-600 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z">
        </path>
      </svg>
      <p class="text-gray-600 dark:text-gray-300">Memuat data ketersediaan bed...</p>
    </div>

    <div v-else-if="beds.length" class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead class="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th class="px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-200">Bangsal</th>
            <th class="px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-200">Kelas</th>
            <th class="px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-200">Kosong</th>
            <th class="px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-200">Terisi</th>
            <th class="px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-200">Kapasitas</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
          <tr v-for="(item, idx) in beds" :key="idx">
            <td class="px-4 py-2 text-gray-800 dark:text-gray-100 font-semibold">
              {{ item.nama }}
            </td>
            <td class="px-4 py-2 text-gray-800 dark:text-gray-100">
              {{ item.data?.[0]?.kelas }}
            </td>
            <td class="px-4 py-2 text-green-600 font-bold">
              {{ item.data?.[0]?.bed_kosong }}
            </td>
            <td class="px-4 py-2 text-red-600 font-bold">
              {{ item.data?.[0]?.bed_terisi }}
            </td>
            <td class="px-4 py-2 text-gray-800 dark:text-gray-100">
              {{ item.data?.[0]?.bed_kapasitas }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p v-else class="text-gray-500 dark:text-gray-400">
      Data ketersediaan bed tidak tersedia.
    </p>
  </div>
</template>
