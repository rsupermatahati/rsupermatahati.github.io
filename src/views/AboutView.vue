<template>
  <div
    class="w-full bg-top bg-cover h-[20rem] lg:h-[24rem]"
    :style="{ 'background-image': `url(${backgroundImage})` }">
    <div
      class="flex items-end justify-center w-full h-full bg-gray-900/75 pb-10"
    >
      <div class="flex flex-col items-center justify-center text-center">
        <img src="/src/assets/icons/logo01.png" alt="" class="h-30 mb-4" />
        <h3 class="text-2xl font-medium text-white mb-2">RUMAH SAKIT UMUM</h3>
        <h1 class="text-4xl font-semibold text-white lg:text-5xl mb-2">
          RSU PERMATA HATI
        </h1>
        <h3 class="text-2xl italic text-white">"Care with Love"</h3>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="leading-8">
      <h1 class="text-3xl">{{ articleData.title }}</h1>
      <h2 class="mb-8">{{ articleData.subtitle }}</h2>
      <img
        :src="articleData.image"
        alt=""
        class="w-full border border-gray-200 rounded-lg mb-8"
      />

      <div v-for="(section, index) in articleData.sections" :key="index">
        <p v-if="section.type === 'paragraph'">
          {{ section.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import backgroundImage from '/src/assets/images/01.jpg';
const articleData = {
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
</script>

<style scoped>
/* Gaya khusus untuk halaman ini */
</style>
