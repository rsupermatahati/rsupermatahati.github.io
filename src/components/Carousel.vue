<template>
    <div class="relative w-full h-full" @mouseenter="pause" @mouseleave="resume">
        <!-- Carousel wrapper -->
        <div class="relative w-full h-full overflow-hidden">
            <div v-for="(image, index) in images" :key="index"
                class="absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform"
                :class="[
                    currentIndex === index 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105',
                    getSlidePosition(index)
                ]">
                <img :src="image.src"
                    class="absolute block w-full h-full object-cover"
                    :alt="image.alt" 
                    loading="eager" />
                
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-green-800/50 dark:from-neutral-900/80 dark:to-neutral-800/60"></div>
            </div>
        </div>

        <!-- Slider indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-8 left-1/2 space-x-3 rtl:space-x-reverse">
            <button v-for="(image, index) in images" :key="index" type="button" 
                class="w-4 h-4 rounded-full transition-all duration-300 transform hover:scale-125"
                :class="currentIndex === index 
                    ? 'bg-white shadow-lg scale-110' 
                    : 'bg-white/50 hover:bg-white/70'"
                @click="goTo(index)"
                :aria-label="`Go to slide ${index + 1}`">
            </button>
        </div>

        <!-- Slider controls -->
        <button type="button"
            class="absolute top-1/2 left-4 z-30 flex items-center justify-center -translate-y-1/2 cursor-pointer group focus:outline-none transition-all duration-300 hover:scale-110"
            @click="prev"
            aria-label="Previous slide">
            <span
                class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-white/30 group-hover:border-white/50 transition-all duration-300 shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </span>
        </button>
        
        <button type="button"
            class="absolute top-1/2 right-4 z-30 flex items-center justify-center -translate-y-1/2 cursor-pointer group focus:outline-none transition-all duration-300 hover:scale-110"
            @click="next"
            aria-label="Next slide">
            <span
                class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 group-hover:bg-white/30 group-hover:border-white/50 transition-all duration-300 shadow-lg">
                <svg class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </span>
        </button>

        <!-- Slide counter -->
        <div class="absolute top-8 right-8 z-30 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
            <span class="text-white text-sm font-medium">
                {{ currentIndex + 1 }} / {{ images.length }}
            </span>
        </div>

        <!-- Progress bar -->
        <div class="absolute top-0 left-0 right-0 z-30 h-1 bg-white/20">
            <div class="h-full bg-white transition-all duration-300 ease-linear" 
                 :style="{ width: progress + '%' }"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";

import ambulance from "/src/assets/images/ambulance.jpg";
import ambulance01 from "/src/assets/images/ambulance01.jpg";
import backgroundImage from "/src/assets/images/01.jpg";

const images = [
    {
        src: backgroundImage,
        alt: "RSU Permata Hati - Fasilitas Modern dan Nyaman"
    },
    {
        src: ambulance,
        alt: "Layanan Ambulance 24 Jam RSU Permata Hati"
    },
    {
        src: ambulance01,
        alt: "Tim Medis Profesional RSU Permata Hati"
    },
];

const currentIndex = ref(0);
const progress = ref(0);
let intervalId;
let progressInterval;
const slideDuration = 5000; // 5 seconds per slide

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
    resetProgress();
};

const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
    resetProgress();
};

const goTo = (index) => {
    currentIndex.value = index;
    resetProgress();
};

const getSlidePosition = (index) => {
    if (index === currentIndex.value) return 'z-20';
    return 'z-10';
};

const startAutoSlide = () => {
    intervalId = setInterval(next, slideDuration);
};

const startProgress = () => {
    progressInterval = setInterval(() => {
        progress.value += 100 / (slideDuration / 100);
        if (progress.value >= 100) {
            resetProgress();
        }
    }, 100);
};

const resetProgress = () => {
    progress.value = 0;
    clearInterval(progressInterval);
    startProgress();
};

const pause = () => {
    clearInterval(intervalId);
    clearInterval(progressInterval);
};

const resume = () => {
    startAutoSlide();
    startProgress();
};

// Watch for currentIndex changes to ensure smooth transitions
watch(currentIndex, () => {
    // Reset progress when slide changes
    resetProgress();
});

onMounted(() => {
    startAutoSlide();
    startProgress();
});

onUnmounted(() => {
    pause();
});
</script>

<style scoped>
/* Custom animation for smoother transitions */
.slide-enter-active,
.slide-leave-active {
    transition: all 1s ease-in-out;
}

.slide-enter-from {
    opacity: 0;
    transform: scale(1.1);
}

.slide-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

/* Ensure images cover properly */
img {
    object-fit: cover;
    object-position: center;
}

/* Smooth scaling animation */
.scale-105 {
    transform: scale(1.05);
}

/* Backdrop blur support fallback */
@supports not (backdrop-filter: blur(12px)) {
    .backdrop-blur-sm {
        background: rgba(255, 255, 255, 0.1);
    }
}
</style>