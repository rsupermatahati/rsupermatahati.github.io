<!-- Hero -->
<script setup>
import logo from "/src/assets/icons/logo01.png";
import backgroundImage from "/src/assets/images/01.jpg";
</script>

<template>
    <div class="w-full bg-top bg-cover h-[20rem] lg:h-[18rem]"
        :style="{ 'background-image': `url(${backgroundImage})` }">
        <div class="flex items-center justify-center w-full h-full bg-white/90">
            <div class="flex flex-col items-center justify-center text-center">
                <img :src="logo" alt="" class="h-20 mb-4" />
                <h3 class="text-2xl font-medium mb-2">RUMAH SAKIT UMUM</h3>
                <h1 class="text-4xl font-semibold lg:text-5xl mb-2">
                    RSU PERMATA HATI
                </h1>
                <h3 class="text-2xl italic">"Care with Love"</h3>
            </div>
        </div>
    </div>
</template>