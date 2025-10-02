<template>
    <div class="w-full relative">
        <!-- Tombol -->
        <button
            class="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-4xl p-3 hover:scale-110 transition"
            @mouseenter="pause" @mouseleave="resume" @click="prev">
            ‹
        </button>
        <button
            class="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-4xl p-3 hover:scale-110 transition"
            @mouseenter="pause" @mouseleave="resume" @click="next">
            ›
        </button>

        <!-- Track -->
        <div class="overflow-hidden">
            <div class="flex transition-transform duration-700 ease-in-out"
                :style="{ transform: `translateX(-${currentIndex * (100 / perView)}%)` }">
                <!-- clone array untuk infinite loop -->
                <!-- di dalam v-for -->
                <div v-for="(logo, i) in displayLogos" :key="i"
                    class="flex-shrink-0 flex items-center justify-center p-3" :class="colClass">
                    <a :href="logo.link" target="_blank"
                        class="w-full h-full flex items-center justify-center rounded-xl p-8 bg-white dark:bg-gray-800 shadow transition-transform duration-300 hover:scale-105">
                        <img :src="logo.src"
                            class="h-36 md:h-28 lg:h-20 object-contain transition duration-300 dark:invert dark:grayscale"
                            alt="Sponsor logo" />
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
    { src: bpjs, link: "https://www.bpjs-kesehatan.go.id/" },
    { src: bpjsTk, link: "https://www.bpjsketenagakerjaan.go.id/" },
    { src: admedika, link: "https://www.admedika.co.id/" },
    { src: pruden, link: "https://www.prudential.co.id/id/" },
    { src: briLife, link: "https://brilife.co.id/" },
    { src: bniLife, link: "https://www.bni-life.co.id/id/" },
    { src: jasaraharja, link: "https://www.jasaraharja.co.id/" },
    { src: jp, link: "https://jrp.co.id/" },
];

// clone array biar loop mulus
const displayLogos = [...logos, ...logos, ...logos];
const currentIndex = ref(logos.length);
let intervalId;

// --- RESPONSIVE PER VIEW ---
const perView = ref(1);

const updatePerView = () => {
    if (window.innerWidth >= 1280) perView.value = 6;
    else if (window.innerWidth >= 1024) perView.value = 4;
    else if (window.innerWidth >= 768) perView.value = 2;
    else perView.value = 1;
};

// class kolom dinamis
const colClass = computed(() => {
    return {
        "w-full": perView.value === 1,
        "w-1/2": perView.value === 2,
        "w-1/4": perView.value === 4,
        "w-1/6": perView.value === 6,
    };
});

// --- NAVIGASI ---
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
    if (intervalId) clearInterval(intervalId);
};

const pause = () => stopAutoplay();
const resume = () => startAutoplay();

onMounted(() => {
    updatePerView();
    window.addEventListener("resize", updatePerView);
    startAutoplay();
});
onBeforeUnmount(() => {
    stopAutoplay();
    window.removeEventListener("resize", updatePerView);
});
</script>
