<script setup>
import { ref, onMounted } from "vue";
import backgroundImage from "/src/assets/images/01.jpg";
import FbEmbed from "../components/FbEmbed.vue";
import Hero2 from "../components/Hero2.vue";

const articleData = ref(null);
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    articleData.value = {
      title: "Sejarah RSU Permata Hati",
      subtitle: "Sejarah berdirinya RSU Permata Hati",
      image: backgroundImage,
      sections: [
        {
          type: "paragraph",
          content:
            "Rumah Sakit Umum (RSU) Permata Hati adalah pengembangan dari Rumah Sakit Ibu dan Anak (RSIA) Permata Hati. Berawal dari prakarsa Dr. Wayan Murya, Sp.A dan Dra. Ni Ketut Sariyathi, MM untuk mendirikan klinik swasta dan praktek bersama dokter spesialis, namun atas dorongan berbagai pihak dan mengingat pada tahun 2000 di Kabupaten Klungkung sarana pelayanan kesehatan swasta masih sangat kurang dibandingkan dengan kabupaten lainnya, akhirnya diputuskan untuk mendirikan RSIA Permata Hati dibawah Yayasan Permata Usadha. Diresmikan dan mulai beroperasi pada 12 September 2007.",
        },
        {
          type: "paragraph",
          content:
            "Untuk menjawab harapan masyarakat dan perkembangan teknologi kedokteran, serta untuk dapat memberikan pelayanan lebih luas maka pada tahun 2015 dimulailah transformasi dibawah PT. Murya Sari Abadi untuk berkembang menjadi RSU Permata Hati, secara simultan baik dari sarana fisik gedung, peralatan, SDM, serta menghadirkan inovasi layanan terbaru.",
        },
        {
          type: "paragraph",
          content:
            "RSU Permata Hati memiliki berbagai macam tenaga ahli spesialis dan konsultan yang unggul dibidangnya. Spesialis Bedah Ortopedi, Spesialis Kebidanan & Penyakit Kandungan, Spesialis Bedah Umum, Spesialis Anak, Spesialis Anasthesi, dan juga Spesialis Penyakit Dalam. Serta Konsultan Bedah Digestif, Konsultan Konservasi Gigi.",
        },
        {
          type: "paragraph",
          content:
            "Semua elemen pelayanan RSU Permata Hati baik dari konsultan, dokter spesialis, dokter umum, perawat dan bidan serta tim paramedis selalu berkomitmen memberikan pelayanan terbaik dari hati untuk menjamin kualitas & kepuasan pelayanan yang anda peroleh.",
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
          <div v-if="isLoading" class="animate-pulse space-y-4">
            <div class="h-8 bg-gray-300 rounded w-1/2"></div>
            <div class="h-6 bg-gray-300 rounded w-1/3"></div>
            <div class="h-64 bg-gray-300 rounded-lg"></div>
            <div class="h-4 bg-gray-300 rounded w-full"></div>
            <div class="h-4 bg-gray-300 rounded w-full"></div>
            <div class="h-4 bg-gray-300 rounded w-full"></div>
            <div class="h-4 bg-gray-300 rounded w-3/4"></div>
          </div>
          <div v-else>
            <h1 class="text-3xl">{{ articleData.title }}</h1>
            <h2 class="mb-8">{{ articleData.subtitle }}</h2>
            <img :src="articleData.image" alt="" class="w-full border border-gray-200 dark:border-gray-700 rounded-lg mb-8" />
            <div v-for="(section, index) in articleData.sections" :key="index" class="mb-4">
              <p v-if="section.type === 'paragraph'" class="text-justify">{{ section.content }}</p>
            </div>
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
