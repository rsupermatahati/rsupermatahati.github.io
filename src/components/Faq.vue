<script setup>
import { ref } from "vue";

const faqData = ref({
    title: "Frequently Asked Questions",
    subtitle: "Pertanyaan yang sering ditanyakan.",
    section: [
        {
            question: "Apakah di RSU Permata Hati bisa melakukan Medical Check Up (MCU)?",
            answer:
                "Ya, RSU Permata Hati memiliki fasilitas dan paket untuk medical check-up, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
        },
        {
            question: "Apakah di RSU Permata Hati dapat melakukan vaksinasi dan imunisasi?",
            answer:
                "Ya, RSU Permata Hati menyediakan layanan vaksinasi dan imunisasi, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
        },
        {
            question: "Apakah di RSU Permata Hati melayani pemeriksaan dengan menggunakan BPJS/KIS?",
            answer:
                "Ya, RSU Permata Hati telah bekerjasama dengan BPJS Kesehatan. Silakan menghubungi call center kami (0366) 24777 atau datang langsung untuk informasi lebih lanjut.",
        },
        {
            question: "Apakah di RSU Permata Hati menerima pembayaran dengan penjamin asuransi/perusahaan?",
            answer:
                "Ya, RSU Permata Hati sudah bekerja sama dengan BPJS Kesehatan, BPJS Ketenagakerjaan, AdMedika, Prudential, BRI Life, BNI Life, Jasa Raharja, Jasa Raharja Putra dan yang lainnya, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
        },
        {
            question: "Apakah RSU Permata Hati punya nomor Whatsapp?",
            answer: "Ya, anda dapat Whatsapp ke nomor 082236668828.",
        },
        {
            question: "Bagaimana cara mengetahui jadwal praktek dokter di poliklinik?",
            answer:
                "Anda dapat melihat jadwal praktek dokter spesialis di halaman web, bertanya melalui Whatsapp atau menghubungi call center RSU Permata Hati di nomor (0366) 24777.",
        },
        {
            question: "Bagaimana caranya mendaftar untuk berobat di poliklinik?",
            answer:
                "Anda bisa datang langsung ke RSU Permata Hati, daftar melalui frontend, Whatsapp ataupun menghubungi call center (0366) 24777.",
        },
        {
            question: "Berapa nomor call center RSU Permata Hati?",
            answer:
                "Anda dapat menghubungi call center RSU Permata Hati di nomor (0366) 24777.",
        },
        {
            question: "Jam operasional RSU Permata Hati?",
            answer:
                "Untuk layanan rawat jalan atau poliklinik dimulai pukul 08:00 WITA, dan untuk layanan darurat UGD 24 jam setiap hari, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
        },
        {
            question: "Pelayanan kesehatan apa saja yang disediakan di RSU Permata Hati?",
            answer:
                "RSU Permata Hati melayani pengobatan rawat jalan di poliklinik, rawat inap, layanan darurat UGD 24 jam, pemeriksaan laboratorium dan radiologi serta layanan penunjang lainnya, untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777.",
        },
        {
            question: "Persyaratan apa saja yang harus dibawa jika menggunakan BPJS/KIS?",
            answer:
                "Untuk menggunakan jaminan BPJS Kesehatan harus memiliki rujukan dari Faskes Tingkat I dan menunjukkan kartu identitas diri (KTP). Untuk informasi lebih lanjut dapat menghubungi call center (0366) 24777 atau datang langsung ke RSU Permata Hati.",
        },
    ],
});

// index accordion terbuka
const openIndex = ref(null);

const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index;
};
</script>

<template>
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="text-center mb-8">
            <h2 class="text-3xl font-bold">
                {{ faqData.title }}
            </h2>
            <p class="text-lg">
                {{ faqData.subtitle }}
            </p>
        </div>

        <!-- Accordion List -->
        <div class="space-y-4">
            <div v-for="(item, index) in faqData.section" :key="index"
                class="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <!-- Question -->
                <button @click="toggle(index)"
                    class="flex justify-between items-center gap-4 w-full px-4 py-3 text-left font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <span>{{ item.question }}</span>
                    <span>
                        <svg :class="[
                            'w-5 h-5 transform transition-transform',
                            openIndex === index ? 'rotate-180' : 'rotate-0',
                        ]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>
                </button>

                <!-- Answer tanpa animasi -->
                <div v-show="openIndex === index" class="px-4 pb-4 font-light">
                    {{ item.answer }}
                </div>
            </div>
        </div>
    </section>
</template>
