<template>
    <div class="w-full relative group">
        <!-- Navigation Buttons with Font Awesome -->
        <button
            class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 rounded-full flex items-center justify-center text-emerald-700 dark:text-emerald-400 hover:scale-110 hover:bg-white dark:hover:bg-neutral-800 hover:shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
            @mouseenter="pause" 
            @mouseleave="resume" 
            @click="prev"
            aria-label="Previous sponsors">
            <i class="fas fa-chevron-left text-lg"></i>
        </button>
        
        <button
            class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm border border-neutral-200 dark:border-neutral-700 rounded-full flex items-center justify-center text-emerald-700 dark:text-emerald-400 hover:scale-110 hover:bg-white dark:hover:bg-neutral-800 hover:shadow-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
            @mouseenter="pause" 
            @mouseleave="resume" 
            @click="next"
            aria-label="Next sponsors">
            <i class="fas fa-chevron-right text-lg"></i>
        </button>

        <!-- Progress Indicator -->
        <div class="absolute top-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
            <div v-for="(logo, index) in logos" :key="index" 
                 class="w-2 h-2 rounded-full transition-all duration-300"
                 :class="getActiveDotClass(index)">
            </div>
        </div>

        <!-- Carousel Track -->
        <div class="overflow-hidden py-8">
            <div class="flex transition-transform duration-700 ease-out"
                :style="{ transform: `translateX(-${currentIndex * (100 / perView)}%)` }">
                
                <!-- Display Logos with Enhanced Styling -->
                <div v-for="(logo, i) in displayLogos" :key="i"
                    class="flex-shrink-0 flex items-center justify-center p-4" :class="colClass">
                    
                    <a :href="logo.link" target="_blank" rel="noopener noreferrer"
                        class="w-full h-full flex items-center justify-center rounded-2xl p-6 bg-gradient-to-br from-white to-emerald-50 dark:from-neutral-800 dark:to-neutral-900 shadow-lg hover:shadow-2xl border border-emerald-100 dark:border-neutral-700 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group/card">
                        
                        <!-- Logo Container -->
                        <div class="relative w-full h-20 flex items-center justify-center">
                            <img :src="logo.src"
                                class="h-16 md:h-14 lg:h-12 xl:h-16 object-contain transition-all duration-500 group-hover/card:scale-110 filter grayscale hover:grayscale-0"
                                :alt="logo.alt || 'Sponsor logo'" 
                                loading="lazy" />
                            
                            <!-- Hover Effect Overlay -->
                            <div class="absolute inset-0 bg-emerald-500/0 group-hover/card:bg-emerald-500/5 rounded-xl transition-all duration-500"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

import admedika from "/src/assets/sponsors/admedika.png";
import bniLife from "/src/assets/sponsors/bni-life.png";
import bpjs from "/src/assets/sponsors/bpjs.png";
import bpjsTk from "/src/assets/sponsors/bpjstk.png";
import briLife from "/src/assets/sponsors/bri-life.png";
import jasaraharja from "/src/assets/sponsors/jasa-raharja.png";
import jp from "/src/assets/sponsors/jp.png";
import pruden from "/src/assets/sponsors/pruden.png";

const logos = [
    { 
        src: bpjs, 
        link: "https://www.bpjs-kesehatan.go.id/",
        alt: "BPJS Kesehatan"
    },
    { 
        src: bpjsTk, 
        link: "https://www.bpjsketenagakerjaan.go.id/",
        alt: "BPJS Ketenagakerjaan"
    },
    { 
        src: admedika, 
        link: "https://www.admedika.co.id/",
        alt: "AdMedika"
    },
    { 
        src: pruden, 
        link: "https://www.prudential.co.id/id/",
        alt: "Prudential"
    },
    { 
        src: briLife, 
        link: "https://brilife.co.id/",
        alt: "BRI Life"
    },
    { 
        src: bniLife, 
        link: "https://www.bni-life.co.id/id/",
        alt: "BNI Life"
    },
    { 
        src: jasaraharja, 
        link: "https://www.jasaraharja.co.id/",
        alt: "Jasa Raharja"
    },
    { 
        src: jp, 
        link: "https://jrp.co.id/",
        alt: "Jasa Raharja Putra"
    },
];

// Clone array untuk infinite loop yang smooth
const displayLogos = [...logos, ...logos, ...logos];
const currentIndex = ref(logos.length);
let intervalId;

// --- RESPONSIVE PER VIEW ---
const perView = ref(1);

const updatePerView = () => {
    if (window.innerWidth >= 1536) perView.value = 8;  // 2xl
    else if (window.innerWidth >= 1280) perView.value = 6; // xl
    else if (window.innerWidth >= 1024) perView.value = 4; // lg
    else if (window.innerWidth >= 768) perView.value = 3;  // md
    else if (window.innerWidth >= 640) perView.value = 2;  // sm
    else perView.value = 1; // xs
};

// Dynamic column classes
const colClass = computed(() => {
    const baseClass = "px-2"; // Horizontal padding between items
    
    switch (perView.value) {
        case 8: return `${baseClass} w-1/8`;
        case 6: return `${baseClass} w-1/6`;
        case 4: return `${baseClass} w-1/4`;
        case 3: return `${baseClass} w-1/3`;
        case 2: return `${baseClass} w-1/2`;
        case 1: return `${baseClass} w-full`;
        default: return `${baseClass} w-1/4`;
    }
});

// Active dot indicator
const getActiveDotClass = (index) => {
    const activeIndex = (currentIndex.value - logos.length) % logos.length;
    return activeIndex === index 
        ? 'bg-emerald-500 scale-125' 
        : 'bg-neutral-300 dark:bg-neutral-600 hover:bg-neutral-400';
};

// --- NAVIGATION ---
const next = () => {
    currentIndex.value++;
    checkLoop();
};

const prev = () => {
    currentIndex.value--;
    checkLoop();
};

const checkLoop = () => {
    setTimeout(() => {
        if (currentIndex.value >= logos.length * 2) {
            currentIndex.value = logos.length;
        } else if (currentIndex.value <= logos.length - 1) {
            currentIndex.value = logos.length * 2 - 1;
        }
    }, 700);
};

// --- AUTOPLAY ---
const startAutoplay = () => {
    stopAutoplay();
    intervalId = setInterval(next, 3000);
};

const stopAutoplay = () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

const pause = () => stopAutoplay();
const resume = () => startAutoplay();

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
    pause();
};

const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    setTimeout(resume, 3000);
};

const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            next();
        } else {
            prev();
        }
    }
};

onMounted(() => {
    updatePerView();
    window.addEventListener("resize", updatePerView);
    
    // Add touch events for mobile
    const track = document.querySelector('.overflow-hidden');
    if (track) {
        track.addEventListener('touchstart', handleTouchStart, { passive: true });
        track.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    
    startAutoplay();
});

onBeforeUnmount(() => {
    stopAutoplay();
    window.removeEventListener("resize", updatePerView);
    
    // Remove touch events
    const track = document.querySelector('.overflow-hidden');
    if (track) {
        track.removeEventListener('touchstart', handleTouchStart);
        track.removeEventListener('touchend', handleTouchEnd);
    }
});
</script>

<style scoped>
/* Custom scrollbar hiding */
.overflow-hidden {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.overflow-hidden::-webkit-scrollbar {
    display: none;
}

/* Smooth transitions for all interactive elements */
* {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom filter for better image appearance */
.filter {
    filter: brightness(1.1) contrast(1.1);
}

/* Backdrop blur support fallback */
@supports not (backdrop-filter: blur(12px)) {
    .backdrop-blur-sm {
        background: rgba(255, 255, 255, 0.95);
    }
    
    .dark .backdrop-blur-sm {
        background: rgba(30, 30, 30, 0.95);
    }
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .px-2 {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
}

/* Dark mode image adjustments */
.dark img {
    filter: brightness(0.9) contrast(1.1);
}

.dark img:hover {
    filter: brightness(1) contrast(1.1) grayscale(0);
}
</style>