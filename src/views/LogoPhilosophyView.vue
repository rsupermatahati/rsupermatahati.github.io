<script setup>
import { ref, onMounted } from "vue";
import logo from "/src/assets/icons/logo01.png";
import backgroundImage from "/src/assets/images/01.jpg";
import logoFull from "/src/assets/icons/logo01.png"; // ganti dengan path logo besar

const logoPhilosophy = ref(null);
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    logoPhilosophy.value = {
      title: "Filosofi Logo",
      subtitle: "Filosofi Logo RSU Permata Hati",
      image: logoFull,
      intro:
        "RSU Permata Hati memiliki logo dengan filosofi sebagai berikut:",
      sections: [
        {
          heading: "Logo dibentuk dari stilasi beberapa unsur:",
          points: [
            "Stilasi dua telapak tangan yang letaknya simetris, menyangga stilasi permata bentuk hati. Symbol yang ditonjolkan adalah stilasi ibu jari, jari telunjuk, dan jari tengah. Ibu jari mempunyai pengertian unsur penentu dalam kerja, tanpa ibu jari, keempat jari hampir tidak bisa bekerja. Jari telunjuk menunjukkan arah dan unsur sinergi, sedangkan jari tengah menjadi penyeimbang dan penambah kekuatan.",
            "Dua telapak tangan menggambarkan pengabdian, berbakti, kepedulian, dan berserah diri. Dua telapak tangan mewakili unsur bilangan dua sebagai dua unsur penggerak jalannya organisasi yaitu pemilik dan manajemen yang senantiasa bersinergi.",
            "Stilasi permata bentuk hati, permata terbentuk dari berbagai bentuk segitiga dengan bermacam gradasi warna. Bentuk segitiga mewakili kreatifitas, kekuatan, dan pergerakan yang dinamis. Juga dapat diartikan mewakili tiga unsur hubungan dasar di dunia ini yaitu Tuhan, manusia, dan alam. Kesemuanya terjalin dalam bentuk hati memberikan arti bahwa semua dijaga dan dilandasi dengan hati, sebagai nilai dasar pelayanan terhadap sesama manusia dan lingkungan.",
            "Stilasi telapak tangan dipersatukan dengan permata berbentuk hati apabila digabungkan akan membentuk stilasi bunga yang menyiratkan makna bertumbuh, berkembang menuju keindahan, dan keharmonisan. Penggabungan tersebut juga memiliki filosofi keanekaragaman (stilasi hati terdiri dari bermacam bentuk segitiga dan berbagai gradasi warna mewakili berbagai profesi dan kompetensi dalam rumah sakit) serta bermakna kasih yang sempurna.",
          ],
        },
        {
          heading: "Filosofi warna pada logo RSU Permata Hati:",
          points: [
            "Warna hijau menjadi warna stilasi permata bentuk hati. Warna hijau adalah warna alam, melambangkan suatu ketabahan, keinginan, tekad, symbol kesuburan, dan harmoni. Warna hijau membangkitkan energi dan juga mampu memberi efek rasa aman, perlindungan, menyegarkan, menyejukkan, menyeimbangkan.",
            "Warna kuning melambangkan keunggulan, kebesaran, keriangan, dan kebahagiaan.",
            "Perpaduan warna hijau dan kuning dalam logo mewakili alam dan matahari. Matahari memberi sinar dan energi pada alam. Alam mendukung kelangsungan kehidupan. Perpaduan warna ini juga menunjukkan semangat segenap keluarga besar RSU Permata Hati untuk selalu memberi dukungan dengan tulus guna menjaga setiap insan kehidupan.",
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
      <h1 class="text-3xl font-bold">{{ logoPhilosophy.title }}</h1>
      <h2 class="text-lg text-gray-600">{{ logoPhilosophy.subtitle }}</h2>
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
        :src="logoPhilosophy.image"
        alt="Logo RSU Permata Hati"
        class="w-auto mx-auto mb-8"
      />

      <p class="mb-4 text-gray-700 text-2xl font-medium">{{ logoPhilosophy.intro }}</p>

      <div class="space-y-12">
        <div
          v-for="(section, idx) in logoPhilosophy.sections"
          :key="idx"
          class="space-y-4"
        >
          <h2 class="text-2xl font-semibold">{{ section.heading }}</h2>
          <ul class="list-disc px-6 space-y-2">
            <li
              v-for="(point, j) in section.points"
              :key="j"
              class="text-gray-700"
            >
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
