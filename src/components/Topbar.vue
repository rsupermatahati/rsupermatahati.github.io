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

// Emergency contact for quick access
const emergencyContact = {
    phone: "036624777",
    whatsapp: "6282236668828"
}
</script>

<template>
    <!-- Top Bar -->
    <div class="bg-gradient-to-r from-emerald-800 to-green-700 dark:from-neutral-900 dark:to-neutral-800 text-white relative overflow-hidden">
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-5">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        
        <div class="relative max-w-7xl mx-auto">
            <!-- Main Top Bar -->
            <div class="px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                <!-- Contact Information -->
                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-4 lg:gap-6 text-sm">
                    <!-- Phone -->
                    <a :href="`tel:${contacts.phone}`" 
                       class="group flex items-center space-x-2 px-3 py-1 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105">
                        <div class="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                            <i class="fas fa-phone text-xs text-white"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-semibold text-white group-hover:text-emerald-100">{{ contacts.phoneTitle }}</span>
                            <span class="text-xs text-emerald-200 opacity-80">Telepon</span>
                        </div>
                    </a>

                    <!-- WhatsApp -->
                    <a :href="`https://wa.me/${contacts.whatsapp}`" 
                       target="_blank"
                       class="group flex items-center space-x-2 px-3 py-1 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105">
                        <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                            <i class="fab fa-whatsapp text-xs text-white"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-semibold text-white group-hover:text-emerald-100">{{ contacts.whatsappTitle }}</span>
                            <span class="text-xs text-emerald-200 opacity-80">WhatsApp</span>
                        </div>
                    </a>

                    <!-- Email -->
                    <a :href="`mailto:${contacts.email}`" 
                       class="group flex items-center space-x-2 px-3 py-1 rounded-lg transition-all duration-300 hover:bg-white/10 hover:scale-105">
                        <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                            <i class="fas fa-envelope text-xs text-white"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-semibold text-white group-hover:text-emerald-100 text-sm">{{ contacts.email }}</span>
                            <span class="text-xs text-emerald-200 opacity-80">Email</span>
                        </div>
                    </a>
                </div>

                <!-- Social Media & Emergency -->
                <div class="flex items-center space-x-4">
                    <!-- Social Media Links -->
                    <div class="flex items-center space-x-3 border-r border-emerald-600 pr-4 mr-4">
                        <a :href="socialLinks.facebook" 
                           target="_blank" 
                           class="group w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-blue-600 hover:scale-110 hover:shadow-lg"
                           aria-label="Facebook">
                            <i class="fab fa-facebook-f text-xs text-white group-hover:text-white"></i>
                        </a>
                        <a :href="socialLinks.instagram" 
                           target="_blank" 
                           class="group w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-pink-600 hover:scale-110 hover:shadow-lg"
                           aria-label="Instagram">
                            <i class="fab fa-instagram text-xs text-white group-hover:text-white"></i>
                        </a>
                        <a :href="socialLinks.youtube" 
                           target="_blank" 
                           class="group w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-red-600 hover:scale-110 hover:shadow-lg"
                           aria-label="YouTube">
                            <i class="fab fa-youtube text-xs text-white group-hover:text-white"></i>
                        </a>
                        <a :href="socialLinks.tiktok" 
                           target="_blank" 
                           class="group w-8 h-8 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-black hover:scale-110 hover:shadow-lg"
                           aria-label="TikTok">
                            <i class="fab fa-tiktok text-xs text-white group-hover:text-white"></i>
                        </a>
                    </div>

                    <!-- Emergency Quick Action -->
                    <div class="flex items-center space-x-2">
                        <a :href="`tel:${emergencyContact.phone}`" 
                           class="group flex items-center space-x-2 px-3 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            <i class="fas fa-ambulance text-white animate-pulse"></i>
                            <span class="text-white font-bold text-sm whitespace-nowrap">Darurat</span>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Emergency Banner for Mobile -->
            <div class="sm:hidden bg-red-600 border-t border-red-700">
                <div class="px-4 py-2 text-center">
                    <div class="flex items-center justify-center space-x-3">
                        <i class="fas fa-exclamation-triangle text-yellow-300 animate-pulse"></i>
                        <span class="text-white font-semibold text-sm">Darurat Medis? Hubungi Segera!</span>
                        <a :href="`tel:${emergencyContact.phone}`" 
                           class="bg-white text-red-600 px-3 py-1 rounded-lg text-sm font-bold hover:bg-red-50 transition-colors">
                            Telepon
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Floating Emergency Button for Mobile -->
        <div class="fixed bottom-6 right-6 z-50 sm:hidden">
            <a :href="`tel:${emergencyContact.phone}`" 
               class="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce">
                <i class="fas fa-phone text-white text-lg"></i>
            </a>
        </div>
    </div>
</template>

<style scoped>
/* Smooth transitions */
a, button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom animation for emergency button */
@keyframes pulse-glow {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
    }
    50% {
        box-shadow: 0 0 0 10px rgba(220, 38, 38, 0);
    }
}

.animate-pulse-glow {
    animation: pulse-glow 2s infinite;
}

/* Hide scrollbar for webkit browsers */
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .flex-wrap {
        justify-content: center;
    }
    
    .space-x-4 > :not([hidden]) ~ :not([hidden]) {
        --tw-space-x-reverse: 0;
        margin-right: calc(1rem * var(--tw-space-x-reverse));
        margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
    }
}

/* Dark mode enhancements */
.dark .bg-gradient-to-r {
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
</style>