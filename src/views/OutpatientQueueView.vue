<script setup>
import { ref, onMounted, watch, computed } from "vue";
import Hero2 from "../components/Hero2.vue";
import FbEmbed from "../components/FbEmbed.vue";

//const apiUrl = "http://192.168.3.22/api";
const apiUrl = "http://203.142.74.115:8000/api";

const poliklinikList = ref([]);
const selected = ref("");
const antrian = ref(null);

const tanggal = ref("");
const jam = ref("");

const getPoliklinik = async () => {
  try {
    const res = await fetch(apiUrl + "/poliklinik");
    const data = await res.json();
    poliklinikList.value = data?.data || [];
  } catch (err) {
    console.error("Gagal fetch poliklinik:", err);
  }
};

const getAntrian = async (id) => {
  try {
    const res = await fetch(apiUrl + `/antrian?poliklinik_id=${id}`);
    antrian.value = await res.json();
  } catch (err) {
    console.error("Gagal fetch antrian:", err);
  }
};

onMounted(() => {
  getPoliklinik();
  const now = new Date();

  // Format tanggal (contoh: Senin, 30 September 2025)
  tanggal.value = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Makassar",
  }).format(now);

  // Format jam (contoh: 14:35 WITA)
  jam.value = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Makassar",
  }).format(now) + " WITA";
});

watch(selected, (val) => {
  if (val) {
    getAntrian(val);
  } else {
    antrian.value = null;
  }
});

const selectedPoliklinik = computed(() => {
  return poliklinikList.value.find((p) => p.id === selected.value)?.nama || "";
});
</script>

<template>
  <Hero2 />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-12 lg:col-span-8 space-y-2">
        <h1 class="text-3xl">Antrian Poliklinik</h1>
        <h2 class="mb-8">{{ tanggal }}, {{ jam }}</h2>
        <div>
          <select id="poli" v-model="selected"
            class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow focus:ring-emerald-700 focus:border-emerald-700 px-3 py-2">
            <option value="" disabled>Pilih Poliklinik</option>
            <option v-for="poli in poliklinikList" :key="poli.id" :value="poli.id">
              {{ poli.nama }}
            </option>
          </select>
        </div>
        <div v-if="antrian"
          class="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shadow">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
            {{ selectedPoliklinik }}
          </h2>
          <div v-if="antrian.data?.length" class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th class="px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-200">Dokter</th>
                  <th class="px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-200">Jam</th>
                  <th class="px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-200">Total</th>
                  <th class="px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-200">Terlayani</th>
                  <th class="px-4 py-2 text-left font-medium text-gray-700 dark:text-gray-200">Terakhir</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                <tr v-for="(item, idx) in antrian.data" :key="idx">
                  <td class="px-4 py-2 text-gray-800 dark:text-gray-100">
                    {{ item.dokter_nama }}
                  </td>
                  <td class="px-4 py-2 text-gray-800 dark:text-gray-100">
                    {{ item.jam_buka }} - {{ item.jam_tutup }}
                  </td>
                  <td class="px-4 py-2 text-gray-800 dark:text-gray-100">
                    {{ item.antrian_total }}
                  </td>
                  <td class="px-4 py-2 text-gray-800 dark:text-gray-100">
                    {{ item.antrian_terlayani }}
                  </td>
                  <td class="px-4 py-2 text-gray-800 dark:text-gray-100">
                    {{ item.antrian_last }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p v-else class="text-sm text-gray-500 dark:text-gray-400">
            Tidak ada data antrian untuk poliklinik ini.
          </p>
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
