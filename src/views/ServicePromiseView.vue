<script setup>
import { ref, onMounted } from "vue";
import logo from "/src/assets/icons/logo01.png";
import backgroundImage from "/src/assets/images/01.jpg";
import thumbnail from "/src/assets/icons/janjilayanan.png";

// Data simulasi
const servicePromise = ref(null);
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    servicePromise.value = {
      title: "Janji Layanan",
      subtitle: "Janji Layanan RSU Permata Hati",
      image: thumbnail,
      sections: [
        {
          heading: "5S PENAMPILANKU (Senyum, Salam, Sapa, Sopan, Santun)",
          items: [
            {
              name: "Senyum",
              description:
                "Senyum tulus yang terpancar dari wajah kita akan membuat orang lain nyaman, bagaimanapun rupa kita, lawan bicara akan ikut tersenyum melihat kita tersenyum. Maka tersenyumlah kepada siapapun yang kita temui.",
            },
            {
              name: "Salam",
              description:
                "Salam yang diucapkan dengan ketulusan mampu mencairkan suasana kaku. Bila ada orang yang mengucapkan salam dengan lembut dan bersahabat, hati akan sejuk mendengarnya. Persaudaraan berawal dari salam, mari kita tebarkan salam.",
            },
            {
              name: "Sapa",
              description:
                "Sapaan ramah yang kita ucapkan kepada orang lain akan membuat suasana menjadi akrab dan hangat. Biasakanlah menyapa, mulailah dengan orang yang berada didekat kita, lalu jadikan kebiasaan.",
            },
            {
              name: "Sopan",
              description:
                "Sopan dalam penampilan, sopan ketika berbicara, sopan saat berinteraksi dengan orang lain, sopan dalam setiap prilaku kita. Sikap sopan mencerminkan kualitas pribadi kita.",
            },
            {
              name: "Santun",
              description:
                "Santun adalah sifat yang dimiliki orang-orang istimewa, orang yang mendahulukan kepentingan orang lain daripada dirinya. Orang yang ada untuk mereka yang membutuhkan, menolong dengan senang dan ikhlas.",
            },
          ],
        },
        {
          heading: "5R CARA KERJAKU (Ringkas, Rapi, Resik, Rawat, Rajin)",
          items: [
            {
              name: "Ringkas",
              description:
                "Memisahkan segala sesuatu yang diperlukan dan menyingkirkan yang tidak diperlukan dari tempat kerja. Mengetahui benda mana yang tidak digunakan, mana yang disimpan, serta bagaimana cara menyimpan supaya mudah diambil saat diperlukan. Cara yang dapat dilakukan antara lain mendata berbagai jenis barang yang dimiliki, menggolongkan sesuai jenis dan kegunaannya, memberi tanda untuk barang tertentu, kemudian menempatkan barang pada tempat yang semestinya.",
            },
            {
              name: "Rapi",
              description:
                "Menempatkan barang pada tempatnya sehingga tidak terlihat berserakan pada tempat kerja yang bisa mengganggu keindahan ataupun membahayakan diri sendiri dan orang lain. Dilakukan sebagai suatu kegiatan yang berkelanjutan.",
            },
            {
              name: "Resik",
              description:
                "Melakukan pembersihan tempat, peralatan, termasuk pakaian kerja yang digunakan. Membuang sampah sesuai jenisnya, memastikan peralatan berfungsi baik, menciptakan lingkungan kerja yang bersih dan nyaman.",
            },
            {
              name: "Rawat",
              description:
                "Merawat semua yang ada di lingkungan kerja agar terus berfungsi dan dapat dipakai dengan aman, termasuk peralatan baik medis maupun non medis, memakai peralatan dengan benar agar terhindar dari kesalahan dan kerusakan.",
            },
            {
              name: "Rajin",
              description:
                "Adalah terciptanya kebiasaan pribadi karyawan untuk menjaga dan meningkatkan apa yang sudah dicapai, mematuhi jadwal dan aturan yang berlaku. Rajin adalah terkait dengan ketepatan waktu kerja, ketepatan memenuhi permintaan pasien, ketepatan mencapai target yang hendak dicapai.",
            },
          ],
        },
      ],
    };
    isLoading.value = false;
  }, 1000);
});
</script>

<template>
  <!-- Hero -->
  <div
    class="w-full bg-top bg-cover h-[20rem] lg:h-[24rem]"
    :style="{ 'background-image': `url(${backgroundImage})` }"
  >
    <div
      class="flex items-end justify-center w-full h-full bg-gray-900/75 pb-10"
    >
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
    <!-- Skeleton Title + Subtitle -->
    <div v-if="isLoading" class="animate-pulse mb-8 space-y-2">
      <div class="h-8 bg-gray-300 rounded w-1/3"></div>
      <div class="h-6 bg-gray-300 rounded w-2/3"></div>
    </div>
    <div v-else class="mb-8">
      <h1 class="text-3xl font-bold">{{ servicePromise.title }}</h1>
      <h2 class="text-lg text-gray-600">{{ servicePromise.subtitle }}</h2>
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

    <!-- Konten -->
    <div v-else>
      <img
        :src="servicePromise.image"
        alt=""
        class="w-full border border-gray-200 rounded-lg mb-8"
      />

      <div class="space-y-12">
        <div
          v-for="(section, idx) in servicePromise.sections"
          :key="idx"
          class="space-y-6"
        >
          <h2 class="text-2xl font-semibold">{{ section.heading }}</h2>
          <ul class="space-y-4">
            <li v-for="(item, j) in section.items" :key="j">
              <h3 class="text-xl font-semibold">{{ item.name }}</h3>
              <p class="text-gray-700">{{ item.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
