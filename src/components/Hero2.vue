<!-- Hero2 -->
<script setup>
import logo from "/src/assets/icons/logo01.png";
import backgroundImage from "/src/assets/images/01.jpg";
</script>

<template>
    <div class="w-full h-full bg-top bg-cover" :style="{ 'background-image': `url(${backgroundImage})` }">
        <div class="flex items-center justify-center w-full h-full bg-white/80 dark:bg-neutral-900/80 py-10">
            <div class="flex flex-col items-center justify-center text-center px-4">
                <img :src="logo" alt="" class="h-16 mb-3" />
                <h1 class="text-3xl font-bold lg:text-4xl mb-2">
                    RSU PERMATA HATI
                </h1>
                <p class="text-lg">Klik tombol dibawah untuk buat janji rawat jalan</p>
                <a href="https://online.rsupermatahati.id" target="_blank" rel="noopener noreferrer"
                    class="inline-block bg-emerald-700 hover:bg-emerald-600 focus:outline-none text-white font-bold rounded px-6 md:px-8 py-2 mt-3 transition-colors duration-200">
                    Buat Janji
                </a>
            </div>
        </div>
    </div>
</template>
