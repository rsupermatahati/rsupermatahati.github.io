<template>
    <div class="relative w-full" @mouseenter="pause" @mouseleave="resume">
        <!-- Carousel wrapper -->
        <div class="relative overflow-hidden rounded-2xl h-[240px] sm:h-[360px] md:h-[480px]">
            <div v-for="(image, index) in images" :key="index"
                class="absolute w-full h-full transition-opacity duration-700 ease-in-out"
                :class="currentIndex === index ? 'opacity-100' : 'opacity-0'">
                <img :src="image"
                    class="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    :alt="`Slide ${index + 1}`" />
            </div>
        </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button v-for="(image, index) in images" :key="index" type="button" class="w-3 h-3 rounded-full"
                :class="currentIndex === index ? 'bg-white' : 'bg-gray-400/50'" @click="goTo(index)"></button>
        </div>

        <!-- Slider controls -->
        <button type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            @click="prev">
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1 1 5l4 4" />
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            @click="next">
            <span
                class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 9 4-4-4-4" />
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import ambulance from "/src/assets/images/ambulance.jpg";
import ambulance01 from "/src/assets/images/ambulance01.jpg";
import backgroundImage from "/src/assets/images/01.jpg";

const images = [
    backgroundImage,
    ambulance,
    ambulance01,
];

const currentIndex = ref(0);
let intervalId;

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prev = () => {
    currentIndex.value =
        (currentIndex.value - 1 + images.length) % images.length;
};

const goTo = (index) => {
    currentIndex.value = index;
};

const startAutoSlide = () => {
    intervalId = setInterval(next, 3000);
};

const pause = () => clearInterval(intervalId);
const resume = () => startAutoSlide();

onMounted(() => {
    startAutoSlide();
});

onUnmounted(() => {
    clearInterval(intervalId);
});
</script>
