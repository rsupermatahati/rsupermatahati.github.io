<script setup>
import { ref, onMounted, watch, computed } from "vue";
import Hero2 from "../components/Hero2.vue";
import FbEmbed from "../components/FbEmbed.vue";

const poliklinikList = ref([]);
const selected = ref("");
const antrian = ref(null);
const loading = ref(false);

const tanggal = ref("");
const jam = ref("");

const getPoliklinik = async () => {
  try {
    const res = await fetch("/api/rawatjalan/poliklinik/get");
    const data = await res.json();
    poliklinikList.value = data?.data || [];
  } catch (err) {
    console.error("Gagal fetch poliklinik:", err);
  }
};

const getAntrian = async (id) => {
  try {
    loading.value = true;
    antrian.value = null;
    const res = await fetch(`/api/antrian/get-data?poliklinik_id=${id}`);
    antrian.value = await res.json();
  } catch (err) {
    console.error("Gagal fetch antrian:", err);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getPoliklinik();

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
            class="w-full rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:ring-emerald-700 focus:border-emerald-700 px-3 py-2">
            <option value="" disabled>Pilih Poliklinik</option>
            <option v-for="poli in poliklinikList" :key="poli.id" :value="poli.id">
              {{ poli.nama }}
            </option>
          </select>
        </div>

        <div v-if="loading" class="text-center py-6">
          <svg class="animate-spin h-8 w-8 text-emerald-600 mx-auto mb-3" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
          <p class="text-neutral-600 dark:text-neutral-300">Memuat antrian poliklinik...</p>
        </div>

        <div v-else-if="antrian"
          class="p-4 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 space-y-6">
          <h2 class="text-lg font-semibold text-center text-neutral-800 dark:text-neutral-100 mb-6">
            {{ selectedPoliklinik }}
          </h2>

          <div v-if="antrian.data?.length" class="space-y-6">
            <div v-for="(item, idx) in antrian.data" :key="idx" class="overflow-x-auto">
              <h3 class="font-semibold p-2">
                {{ item.dokter_nama }}
              </h3>
              <table class="min-w-full divide-y divide-neutral-200 dark:divide-neutral-700 border border-neutral-200 dark:border-neutral-700">
                <thead class="bg-neutral-100 dark:bg-neutral-800">
                  <tr>
                    <th class="px-4 py-2 text-left font-medium text-neutral-700 dark:text-neutral-200">
                      Jam
                    </th>
                    <th class="px-4 py-2 text-left font-medium text-neutral-700 dark:text-neutral-200">
                      Total
                    </th>
                    <th class="px-4 py-2 text-left font-medium text-neutral-700 dark:text-neutral-200">
                      Terlayani
                    </th>
                    <th class="px-4 py-2 text-left font-medium text-neutral-700 dark:text-neutral-200">
                      Terakhir
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="px-4 py-2 text-neutral-800 dark:text-neutral-100">
                      {{ item.jam_buka }} - {{ item.jam_tutup }}
                    </td>
                    <td class="px-4 py-2 text-neutral-800 dark:text-neutral-100">
                      {{ item.antrian_total }}
                    </td>
                    <td class="px-4 py-2 text-neutral-800 dark:text-neutral-100">
                      {{ item.antrian_terlayani }}
                    </td>
                    <td class="px-4 py-2 text-neutral-800 dark:text-neutral-100">
                      {{ item.antrian_last }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p v-else class="text-sm text-neutral-500 dark:text-neutral-400">
            Tidak ada data antrian untuk poliklinik ini.
          </p>
        </div>
      </div>

      <div class="col-span-12 lg:col-span-4 mt-16 lg:mt-0">
        <FbEmbed />
      </div>
    </div>
  </div>
</template>
