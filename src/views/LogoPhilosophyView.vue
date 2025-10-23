<script setup>
import { ref, onMounted, computed } from "vue";
import { supabase } from '../lib/supabaseClient';

import FbEmbed from "../components/FbEmbed.vue";
import Hero2 from "../components/Hero2.vue";

// State management
const page = ref(null);
const isLoading = ref(true);
const error = ref(null);

// Computed properties
const formattedDate = computed(() => {
  if (!page.value?.updated_at) return '';
  
  const date = new Date(page.value.updated_at);
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

const hasThumbnail = computed(() => {
  return page.value?.thumbnail_url && page.value.thumbnail_url.trim() !== '';
});

// Methods
const fetchPageData = async () => {
  try {
    isLoading.value = true;
    error.value = null;
    
    const { data, error: supabaseError } = await supabase
      .from('pages')
      .select('title, thumbnail_url, content, created_at, updated_at')
      .eq('slug', 'filosofi-logo')
      .single(); // Use single() instead of data[0]

    if (supabaseError) {
      throw supabaseError;
    }
    
    page.value = data;
    
  } catch (err) {
    console.error('Error fetching page:', err);
    error.value = 'Gagal memuat halaman. Silakan coba lagi.';
  } finally {
    isLoading.value = false;
  }
};

// Lifecycle
onMounted(() => {
  fetchPageData();
});
</script>

<template>
  <div class="bg-linear-to-b from-emerald-50 to-white dark:from-neutral-800 dark:to-neutral-900">
  <Hero2 />
  
  <div class="grid grid-cols-12 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <!-- Main Content -->
    <div class="col-span-12 lg:col-span-8">
      <div class="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-lg">
        <!-- Loading State -->
        <div v-if="isLoading" class="animate-pulse space-y-6">
          <div class="h-8 bg-neutral-300 dark:bg-neutral-700 rounded w-1/2"></div>
          <div class="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-1/3"></div>
          <div class="h-64 bg-neutral-300 dark:bg-neutral-700 rounded-lg"></div>
          <div class="space-y-3">
            <div class="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-full"></div>
            <div class="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-full"></div>
            <div class="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-full"></div>
            <div class="h-4 bg-neutral-300 dark:bg-neutral-700 rounded w-3/4"></div>
          </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="text-center py-8">
          <div class="text-red-500 dark:text-red-400 text-lg mb-4">
            <i class="fas fa-exclamation-triangle text-2xl mb-2"></i>
            <p>{{ error }}</p>
          </div>
          <button 
            @click="fetchPageData"
            class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Coba Lagi
          </button>
        </div>

        <!-- Success State -->
        <div v-else-if="page" class="leading-8">
          <!-- Header -->
          <header class="mb-8">
            <h1 class="text-3xl lg:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              {{ page.title }}
            </h1>
            <div class="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
              <i class="fas fa-calendar-alt mr-2"></i>
              <span>Terakhir diperbarui: {{ formattedDate }}</span>
            </div>
          </header>

          <!-- Thumbnail -->
          <div v-if="hasThumbnail" class="mb-8">
            <img 
              :src="page.thumbnail_url" 
              :alt="page.title" 
              class="w-full h-auto max-h-96 object-cover border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-md"
              loading="lazy"
            />
          </div>

          <!-- Content -->
          <article class="prose prose-lg dark:prose-invert max-w-none">
            <div 
              class="text-neutral-800 dark:text-neutral-100 prose dark:prose-invert max-w-none"
              v-html="page.content"
            ></div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-12">
          <div class="text-neutral-500 dark:text-neutral-400">
            <i class="fas fa-file-alt text-4xl mb-4"></i>
            <p class="text-xl">Halaman tidak ditemukan</p>
            <p class="text-sm mt-2">Konten yang Anda cari tidak tersedia</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Sidebar -->
    <div class="col-span-12 lg:col-span-4">
      <!-- Placeholder for additional content -->
      <div class="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-lg mb-8">
        <h3 class="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
          Informasi Tambahan
        </h3>
        <p class="text-neutral-600 dark:text-neutral-400 text-sm">
          Konten sidebar dapat ditambahkan di sini
        </p>
      </div>

      <!-- Facebook Embed -->
      <div class="sticky top-6">
        <div v-if="isLoading" class="animate-pulse">
          <div class="h-96 bg-neutral-300 dark:bg-neutral-700 rounded-lg w-full"></div>
        </div>
        <FbEmbed v-else />
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
</style>