<template>
  <div class="w-full bg-top bg-cover h-[32rem] lg:h-[24rem]"
    style="background-image: url('/src/assets/images/01.jpg');">
    <div class="flex items-end justify-center w-full h-full bg-gray-900/40 pb-10">
      <div class="text-center">
        <h1 class="text-3xl font-semibold text-white lg:text-4xl">Build your new <span class="text-blue-400">Saas</span>
          Project</h1>
        <button
          class="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start
          project</button>
      </div>
    </div>
  </div>

  <div class="container px-6 py-16 mx-auto text-center">
    <div class="max-w-lg mx-auto">
      <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Building Your Next App with our
        Awesome components</h1>
      <p class="mt-6 text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
        similique
        obcaecati illum mollitia.</p>
      <button
        class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
        Start 14-Day free trial
      </button>
      <p class="mt-3 text-sm text-gray-400 ">No credit card required</p>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div class="relative overflow-hidden rounded-3xl">
        <div class="flex transition-transform duration-500 ease-in-out carousel-inner">
          <div class="w-full flex-shrink-0">
            <img src="https://picsum.photos/id/1/600/200" alt="Slide 1" class="w-full">
          </div>
          <div class="w-full flex-shrink-0">
            <img src="https://picsum.photos/id/2/600/200" alt="Slide 2" class="w-full">
          </div>
          <div class="w-full flex-shrink-0">
            <img src="https://picsum.photos/id/3/600/200" alt="Slide 3" class="w-full">
          </div>
        </div>

        <button @click="prevSlide"
          class="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button @click="nextSlide"
          class="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-50 hover:opacity-100">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

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
  const carousel = document.querySelector('.carousel-inner');
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
import { onUnmounted } from 'vue';
onUnmounted(() => {
  clearInterval(carouselInterval);
});

</script>