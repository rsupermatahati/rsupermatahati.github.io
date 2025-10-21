<script setup>
import { ref } from "vue";

const faqData = ref({
    title: "Pertanyaan yang Sering Ditanyakan",
    subtitle: "Temukan jawaban untuk pertanyaan umum seputar layanan RSU Permata Hati",
    section: [
        {
            question: "Apakah di RSU Permata Hati bisa melakukan Medical Check Up (MCU)?",
            answer: "Ya, RSU Permata Hati memiliki fasilitas dan paket untuk medical check-up, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
        },
        {
            question: "Apakah di RSU Permata Hati dapat melakukan vaksinasi dan imunisasi?",
            answer: "Ya, RSU Permata Hati menyediakan layanan vaksinasi dan imunisasi, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
        },
        {
            question: "Apakah di RSU Permata Hati melayani pemeriksaan dengan menggunakan BPJS/KIS?",
            answer: "Ya, RSU Permata Hati telah bekerjasama dengan BPJS Kesehatan. Silakan menghubungi call center kami (0366) 24777 atau datang langsung untuk informasi lebih lanjut.",
        },
        {
            question: "Apakah di RSU Permata Hati menerima pembayaran dengan penjamin asuransi/perusahaan?",
            answer: "Ya, RSU Permata Hati sudah bekerja sama dengan BPJS Kesehatan, BPJS Ketenagakerjaan, AdMedika, Prudential, BRI Life, BNI Life, Jasa Raharja, Jasa Raharja Putra dan yang lainnya, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
        },
        {
            question: "Apakah RSU Permata Hati punya nomor Whatsapp?",
            answer: "Ya, anda dapat Whatsapp ke nomor 082236668828.",
        },
        {
            question: "Bagaimana cara mengetahui jadwal praktek dokter di poliklinik?",
            answer: "Anda dapat melihat jadwal praktek dokter spesialis di halaman web, bertanya melalui Whatsapp atau menghubungi call center RSU Permata Hati di nomor (0366) 24777.",
        },
        {
            question: "Bagaimana caranya mendaftar untuk berobat di poliklinik?",
            answer: "Anda bisa datang langsung ke RSU Permata Hati, daftar melalui frontend, Whatsapp ataupun menghubungi call center (0366) 24777.",
        },
        {
            question: "Berapa nomor call center RSU Permata Hati?",
            answer: "Anda dapat menghubungi call center RSU Permata Hati di nomor (0366) 24777.",
        },
        {
            question: "Jam operasional RSU Permata Hati?",
            answer: "Untuk layanan rawat jalan atau poliklinik dimulai pukul 08:00 WITA, dan untuk layanan darurat UGD 24 jam setiap hari, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
        },
        {
            question: "Pelayanan kesehatan apa saja yang disediakan di RSU Permata Hati?",
            answer: "RSU Permata Hati melayani pengobatan rawat jalan di poliklinik, rawat inap, layanan darurat UGD 24 jam, pemeriksaan laboratorium dan radiologi serta layanan penunjang lainnya, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
        },
        {
            question: "Persyaratan apa saja yang harus dibawa jika menggunakan BPJS/KIS?",
            answer: "Untuk menggunakan jaminan BPJS Kesehatan harus memiliki rujukan dari Faskes Tingkat I dan menunjukkan kartu identitas diri (KTP). Untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777 atau datang langsung ke RSU Permata Hati.",
        },
    ],
});

// Multiple accordion bisa terbuka
const openItems = ref(new Set());

const toggle = (index) => {
    if (openItems.value.has(index)) {
        openItems.value.delete(index);
    } else {
        openItems.value.add(index);
    }
};

const isOpen = (index) => {
    return openItems.value.has(index);
};
</script>

<template>
    <section class="py-16 bg-gradient-to-b from-white to-emerald-50 dark:from-neutral-800 dark:to-neutral-900">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Header -->
            <div class="text-center mb-12">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-2xl mb-4">
                    <i class="fas fa-question-circle text-2xl text-emerald-600 dark:text-emerald-400"></i>
                </div>
                <h2 class="text-3xl md:text-4xl font-bold text-emerald-800 dark:text-white mb-4">
                    {{ faqData.title }}
                </h2>
                <p class="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
                    {{ faqData.subtitle }}
                </p>
                <div class="w-20 h-1 bg-emerald-500 rounded-full mx-auto mt-4"></div>
            </div>

            <!-- Search Bar -->
            <div class="max-w-md mx-auto mb-8">
                <div class="relative">
                    <input 
                        type="text" 
                        placeholder="Cari pertanyaan..." 
                        class="w-full px-4 py-3 pl-12 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    >
                    <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400"></i>
                </div>
            </div>

            <!-- Accordion List -->
            <div class="space-y-4">
                <div 
                    v-for="(item, index) in faqData.section" 
                    :key="index"
                    class="group bg-white dark:bg-neutral-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 overflow-hidden"
                    :class="{
                        'ring-2 ring-emerald-500': isOpen(index)
                    }"
                >
                    <!-- Question -->
                    <button 
                        @click="toggle(index)"
                        class="flex justify-between items-center gap-6 w-full p-6 text-left font-semibold hover:bg-emerald-50 dark:hover:bg-neutral-700 transition-all duration-300"
                        :aria-expanded="isOpen(index)"
                        :aria-controls="`faq-answer-${index}`"
                    >
                        <div class="flex items-start space-x-4 flex-1">
                            <div class="flex-shrink-0 w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
                                <i class="fas fa-question text-sm text-emerald-600 dark:text-emerald-400"></i>
                            </div>
                            <span class="text-lg text-neutral-800 dark:text-white leading-relaxed text-left">
                                {{ item.question }}
                            </span>
                        </div>
                        <div class="flex-shrink-0">
                            <svg 
                                :class="[
                                    'w-6 h-6 transform transition-transform duration-300 text-emerald-600 dark:text-emerald-400',
                                    isOpen(index) ? 'rotate-180' : 'rotate-0',
                                ]" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>

                    <!-- Answer dengan animasi -->
                    <transition
                        enter-active-class="transition-all duration-300 ease-out"
                        leave-active-class="transition-all duration-200 ease-in"
                        enter-from-class="opacity-0 max-h-0"
                        enter-to-class="opacity-100 max-h-96"
                        leave-from-class="opacity-100 max-h-96"
                        leave-to-class="opacity-0 max-h-0"
                    >
                        <div 
                            v-show="isOpen(index)"
                            :id="`faq-answer-${index}`"
                            class="border-t border-neutral-100 dark:border-neutral-700 overflow-hidden"
                        >
                            <div class="p-6 bg-emerald-50/50 dark:bg-neutral-700/30">
                                <div class="flex items-start space-x-4">
                                    <div class="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                                        <i class="fas fa-check text-sm text-green-600 dark:text-green-400"></i>
                                    </div>
                                    <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">
                                        {{ item.answer }}
                                    </p>
                                </div>
                                
                                <!-- Call to Action untuk pertanyaan tertentu -->
                                <div 
                                    v-if="item.answer.includes('(0366) 24777') || item.answer.includes('082236668828')"
                                    class="mt-4 flex flex-col sm:flex-row gap-3"
                                >
                                    <a 
                                        href="tel:036624777"
                                        class="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-semibold"
                                    >
                                        <i class="fas fa-phone mr-2"></i>
                                        Telepon Sekarang
                                    </a>
                                    <a 
                                        href="https://wa.me/6282236668828"
                                        target="_blank"
                                        class="inline-flex items-center justify-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-semibold"
                                    >
                                        <i class="fab fa-whatsapp mr-2"></i>
                                        Chat WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>

            <!-- Additional Help Section -->
            <div class="mt-12 text-center">
                <div class="bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800">
                    <i class="fas fa-headset text-4xl text-emerald-600 dark:text-emerald-400 mb-4"></i>
                    <h3 class="text-xl font-bold text-emerald-800 dark:text-white mb-2">
                        Butuh Bantuan Lebih Lanjut?
                    </h3>
                    <p class="text-neutral-600 dark:text-neutral-300 mb-4">
                        Tim customer service kami siap membantu Anda 24/7
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="tel:036624777"
                            class="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                        >
                            <i class="fas fa-phone mr-2"></i>
                            (0366) 24777
                        </a>
                        <a 
                            href="https://wa.me/6282236668828"
                            target="_blank"
                            class="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                        >
                            <i class="fab fa-whatsapp mr-2"></i>
                            082236668828
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>