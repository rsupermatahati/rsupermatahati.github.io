<!-- Hero2 -->
<script setup>
import logo from "/src/assets/icons/logo01.png";
import backgroundImage from "/src/assets/images/01.jpg";
</script>

<template>
    <div class="w-full h-full bg-top bg-cover" :style="{ 'background-image': `url(${backgroundImage})` }">
        <div class="flex items-center justify-center w-full h-full bg-linear-to-r from-emerald-700/80 to-green-600/60 dark:from-neutral-950/80 dark:to-neutral-950/60 backdrop-blur-sm py-10">
            <div class="flex flex-col items-center justify-center text-center px-4">
                <img :src="logo" alt="" class="h-16 mb-3" />
                <h1 class="text-3xl font-bold md:text-4xl lg:text-5xl text-white mb-2">
                    RSU PERMATA HATI
                </h1>
                <p class="text-lg text-gray-200">Klik tombol dibawah untuk buat janji rawat jalan</p>
                <a href="https://online.rsupermatahati.id" target="_blank" rel="noopener noreferrer"
                    class="mt-4 bg-yellow-400 text-black font-bold rounded-xl px-6 py-2 transition-all duration-300 transform hover:scale-105 text-center text-lg">
                    <span class="relative z-10 flex items-center justify-center">
                        <i class="fas fa-calendar-check mr-3"></i>
                        Buat Janji
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>
