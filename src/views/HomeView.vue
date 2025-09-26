<script setup>
import { ref, onMounted } from "vue";
import logo from "/src/assets/icons/logo01.png";

const currentSlide = ref(0);
const totalSlides = 3; // Sesuaikan dengan jumlah slide Anda

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
  updateCarousel();
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
  updateCarousel();
};

const updateCarousel = () => {
  const carousel = document.querySelector(".carousel-inner");
  if (carousel) {
    carousel.style.transform = `translateX(-${currentSlide.value * 100}%)`;
  }
};

// Opsional: Otomatis ganti slide setiap beberapa detik
let carouselInterval;
onMounted(() => {
  carouselInterval = setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik
});

// Bersihkan interval saat komponen di-unmount
import { onUnmounted } from "vue";
onUnmounted(() => {
  clearInterval(carouselInterval);
});
</script>

<template>
  <div class="container px-6 py-16 mx-auto text-center">
    <div class="max-w-lg mx-auto flex flex-col items-center">
      <img :src="logo" alt="" class="h-30 mb-4" />
      <h3 class="text-2xl font-medium mb-2">RUMAH SAKIT UMUM</h3>
      <h1 class="text-4xl font-semibold lg:text-5xl mb-2">RSU PERMATA HATI</h1>
      <h3 class="text-2xl italic">"Care with Love"</h3>
      <button
        class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-indigo-600 rounded-lg hover:bg-indigo-500 lg:mx-0 lg:w-auto focus:outline-none"
      >
        Learn more...
      </button>
    </div>

    <div class="w-full lg:max-w-7xl mx-auto mt-10">
      <div class="relative overflow-hidden rounded-3xl">
        <div
          class="flex transition-transform duration-500 ease-in-out carousel-inner"
        >
          <div class="w-full flex-shrink-0">
            <img
              src="https://picsum.photos/id/1/600/300"
              alt="Slide 1"
              class="w-full"
            />
          </div>
          <div class="w-full flex-shrink-0">
            <img
              src="https://picsum.photos/id/2/600/300"
              alt="Slide 2"
              class="w-full"
            />
          </div>
          <div class="w-full flex-shrink-0">
            <img
              src="https://picsum.photos/id/3/600/300"
              alt="Slide 3"
              class="w-full"
            />
          </div>
        </div>

        <button
          @click="prevSlide"
          class="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          @click="nextSlide"
          class="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>