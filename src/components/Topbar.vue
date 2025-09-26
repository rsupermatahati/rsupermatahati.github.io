<script setup>
const contacts = {
    phoneTitle: "(0366) 24777",
    phone: "036624777",
    email: "rsupermatahati@gmail.com",
    whatsappTitle: "082236668828",
    whatsapp: "6282236668828"
}

const socialLinks = {
    facebook: "https://www.facebook.com/rsupermatahatiklungkung",
    instagram: "https://www.instagram.com/rsupermatahati",
    youtube: "https://www.youtube.com/@rsupermatahati8753",
    tiktok: "https://www.tiktok.com/@rsupermatahati",
}
</script>

<template>
    <div
        class="bg-gray-100 text-sm overflow-x-auto whitespace-nowrap hide-scrollbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center min-w-max py-2 space-x-6">
            <!-- Kontak -->
            <div class="flex space-x-6">
                <span class="flex items-center space-x-1 leading-4">
                    <i class="fa-solid fa-phone"></i>
                    <a :href="`tel:${contacts.phone}`" class="hover:text-white">
                        {{ contacts.phoneTitle }}
                    </a>
                </span>
                <span class="flex items-center space-x-1 leading-4">
                    <i class="fa-solid fa-envelope"></i>
                    <a :href="`mailto:${contacts.email}`" class="hover:text-white">
                        {{ contacts.email }}
                    </a>
                </span>
                <span class="flex items-center space-x-1 leading-4">
                    <i class="fa-brands fa-whatsapp"></i>
                    <a :href="`https://wa.me/${contacts.whatsapp}`" target="_blank" class="hover:text-white">
                        {{ contacts.whatsappTitle }}
                    </a>
                </span>
            </div>

            <!-- Sosial Media -->
            <div class="flex space-x-4">
                <a :href="socialLinks.facebook" target="_blank" class="hover:text-white">
                    <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a :href="socialLinks.instagram" target="_blank" class="hover:text-white">
                    <i class="fa-brands fa-instagram"></i>
                </a>
                <a :href="socialLinks.youtube" target="_blank" class="hover:text-white">
                    <i class="fa-brands fa-youtube"></i>
                </a>
                <a :href="socialLinks.tiktok" target="_blank" class="hover:text-white">
                    <i class="fa-brands fa-tiktok"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Hilangkan scrollbar */
.hide-scrollbar {
    -ms-overflow-style: none;
    /* IE dan Edge */
    scrollbar-width: none;
    /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, Opera */
}
</style>
