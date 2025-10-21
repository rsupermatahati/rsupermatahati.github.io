<script setup>
import Map from "../components/Map.vue";
import Faq from "../components/Faq.vue";
import Carousel from "../components/Carousel.vue";
import Sponsors from "../components/Sponsors.vue";
import ambulance from "/src/assets/images/ambulance.jpg";
import ambulance01 from "/src/assets/images/ambulance01.jpg";
import backgroundImage from "/src/assets/images/01.jpg";
import drmurya from "/src/assets/doctors/drmurya.jpg"
import drindra from "/src/assets/doctors/drindra.jpg"
import drarya from "/src/assets/doctors/drarya.jpg"
import dryunita from "/src/assets/doctors/dryunita.jpg"
import psuit from "/src/assets/rooms/president-suite.jpg";
import suit from "/src/assets/rooms/suite.jpg";
import emerald from "/src/assets/rooms/emerald.jpg";
import jkn from "/src/assets/icons/jkn.png"
import playstore from "/src/assets/icons/playstore.png";
import appstore from "/src/assets/icons/appstore.png";

// Data arrays untuk menghindari string constant error
const services = [
  {
    icon: 'fas fa-notes-medical',
    title: 'REKAM MEDIS ELEKTRONIK',
    desc: 'Kami mencatat identitas pasien, hasil pemeriksaan, pengobatan, tindakan, dan pelayanan secara elektronik, sehingga lebih aman, cepat, dan mudah diakses.'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'ASURANSI KESEHATAN',
    desc: 'RSU Permata Hati melayani asuransi kesehatan dengan sistem reimbursement maupun melalui BPJS Kesehatan, demi memudahkan pasien dalam mendapatkan layanan.'
  },
  {
    icon: 'fas fa-wallet',
    title: 'TERJANGKAU',
    desc: 'Kami berkomitmen memberikan pelayanan terbaik dengan harga yang terjangkau, tanpa mengurangi kualitas perawatan dan kenyamanan pasien.'
  },
  {
    icon: 'fas fa-user-md',
    title: 'KONSULTASI KESEHATAN',
    desc: 'Pasien dapat melakukan konsultasi kesehatan dengan dokter spesialis sesuai kebutuhan, untuk mendapatkan diagnosa dan solusi medis yang tepat.'
  }
];

const reasons = [
  {
    icon: 'fas fa-user-md',
    title: 'Dokter Berkualitas',
    desc: 'Dokter berkompeten dan terlatih siap melayani demi kesembuhan pasien.'
  },
  {
    icon: 'fas fa-clock',
    title: 'Pelayanan 24 Jam',
    desc: 'Siap melayani Anda setiap saat dengan semangat "Care with Love".'
  },
  {
    icon: 'fas fa-heartbeat',
    title: 'Unit Gawat Darurat',
    desc: 'Menangani kasus darurat dengan cepat, tepat, dan profesional.'
  },
  {
    icon: 'fas fa-briefcase-medical',
    title: 'Peralatan Medis',
    desc: 'Fasilitas modern untuk mendukung diagnosis dan perawatan pasien.'
  }
];

const doctors = [
  { 
    image: drmurya, 
    name: 'dr. I Wayan Murya, Sp.A', 
    specialty: 'Dokter Spesialis Anak' 
  },
  { 
    image: drindra, 
    name: 'dr. I Gede Indra Ari Utama Murya, Sp.OG', 
    specialty: 'Dokter Spesialis Obgyn' 
  },
  { 
    image: drarya, 
    name: 'dr. I Gusti Ngurah Gde Dwi Aryanata, Sp.B', 
    specialty: 'Dokter Spesialis Bedah' 
  },
  { 
    image: dryunita, 
    name: 'dr. Made Yunita Saraswati Murya, M.Biomed, Sp.A', 
    specialty: 'Dokter Spesialis Anak' 
  }
];

const rooms = [
  { 
    image: psuit, 
    name: 'President Suite', 
    type: 'VVIP', 
    desc: 'Fasilitas terbaik dengan pelayanan maksimal' 
  },
  { 
    image: suit, 
    name: 'Suite', 
    type: 'VIP', 
    desc: 'Kamar nyaman dengan fasilitas lengkap' 
  },
  { 
    image: emerald, 
    name: 'Emerald', 
    type: 'Executive', 
    desc: 'Kamar executive dengan kenyamanan optimal' 
  }
];
</script>

<template>
  <!-- Hero Section dengan Carousel sebagai Background -->
  <section class="relative h-screen md:h-full py-20 flex items-center justify-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img :src="backgroundImage" alt="img" class="w-full h-full object-cover object-right">
    </div>
    
    <!-- Overlay Gradient -->
    <div class="absolute inset-0 bg-gradient-to-r from-emerald-800/90 to-green-700/70 dark:from-black/90 dark:to-black/70 z-10 backdrop-blur"></div>
    
    <!-- Hero Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <div class="text-center space-y-8">
        <div class="space-y-6">
          <!-- Badge -->
          <div class="inline-flex items-center bg-white/20 dark:bg-neutral-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
            <i class="fas fa-star text-yellow-300 mr-2"></i>
            <span class="text-white font-semibold text-sm">Rumah Sakit Terpercaya di Klungkung</span>
          </div>
          
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-2xl">
            RSU PERMATA HATI
          </h1>
          
          <div class="relative inline-block">
            <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold italic text-green-400 relative z-10 drop-shadow-lg">
              "Care with Love"
            </h3>
          </div>
        </div>
        
        <p class="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
          Semua elemen pelayanan RSU Permata Hati baik dari konsultan, dokter spesialis, dokter umum, perawat dan bidan serta tim paramedis selalu berkomitmen memberikan pelayanan terbaik dari hati untuk menjamin kualitas & kepuasan pelayanan yang anda peroleh.
        </p>
        
        <div class="flex flex-wrap gap-6 justify-center items-center pt-8">
          <a href="https://online.rsupermatahati.id" target="_blank" rel="noopener noreferrer"
            class="group relative bg-white hover:bg-emerald-50 text-emerald-700 font-bold rounded-2xl px-10 py-5 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg min-w-[250px] text-center text-lg">
            <span class="relative z-10 flex items-center justify-center">
              <i class="fas fa-calendar-check mr-3"></i>
              Buat Janji
            </span>
          </a>
          
          <router-link to="/about"
            class="group relative border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-medium rounded-2xl px-10 py-5 transition-all duration-300 transform hover:scale-105 min-w-[250px] text-center text-lg">
            <span class="relative z-10 flex items-center justify-center">
              <i class="fas fa-info-circle mr-3"></i>
              Tentang Kami
            </span>
          </router-link>
        </div>
        
        <!-- Scroll Indicator -->
        <div class="py-12">
          <div class="animate-bounce">
            <i class="fas fa-chevron-down text-white text-2xl opacity-70"></i>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Quick Info Section -->
  <section class="relative z-30 -mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="group bg-white dark:bg-neutral-800 rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-emerald-100 dark:border-neutral-700">
          <div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <i class="fas fa-clock text-2xl text-white"></i>
          </div>
          <h4 class="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">Jam Operasional</h4>
          <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">
            Senin – Sabtu: 08.00 – 20.00<br>
            <span class="font-bold text-emerald-600 text-xl">UGD: 24 Jam</span>
          </p>
        </div>
        
        <div class="group bg-white dark:bg-neutral-800 rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-emerald-100 dark:border-neutral-700">
          <div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <i class="fas fa-phone-alt text-2xl text-white"></i>
          </div>
          <h4 class="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">Kontak Darurat</h4>
          <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">
            <span class="font-bold">(0366) 24777</span><br>
            <span class="font-bold">082236668828</span>
          </p>
        </div>
        
        <div class="group bg-white dark:bg-neutral-800 rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 border border-emerald-100 dark:border-neutral-700">
          <div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <i class="fas fa-map-marker-alt text-2xl text-white"></i>
          </div>
          <h4 class="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-4">Lokasi</h4>
          <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg mb-4">
            Jl. Kecubung No. 22, Semarapura, Klungkung
          </p>
          <a href="https://maps.app.goo.gl/6EXdXra2x6jk41yw9" target="_blank"
            class="inline-flex items-center text-emerald-600 dark:text-emerald-300 hover:text-emerald-700 dark:hover:text-emerald-200 font-semibold text-lg transition-colors">
            Lihat Peta <i class="fas fa-arrow-right ml-3 text-sm"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Sponsors Section -->
  <section class="py-20 bg-gradient-to-b from-emerald-50 to-white dark:from-neutral-800 dark:to-neutral-900 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h3 class="text-3xl md:text-4xl font-bold text-emerald-700 dark:text-emerald-400 mb-6">
          Mitra Kerjasama RSU Permata Hati
        </h3>
        <div class="w-32 h-1 bg-emerald-500 mx-auto rounded-full mb-6"></div>
        <p class="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Kami bekerja sama dengan berbagai institusi kesehatan terkemuka untuk memberikan pelayanan terbaik
        </p>
      </div>
      <Sponsors />
    </div>
  </section>

  <!-- Services Section -->
  <section class="py-20 bg-white dark:bg-neutral-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-4 mb-10">
            <h2 class="text-4xl md:text-5xl font-bold text-emerald-700 dark:text-white leading-tight">
              Layanan Unggulan<br>
              <span class="text-green-600 dark:text-emerald-400">RSU Permata Hati</span>
            </h2>
            <div class="w-24 h-2 bg-emerald-500 rounded-full"></div>
            <p class="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
            RSU Permata Hati hadir untuk memberikan pelayanan kesehatan yang aman, mudah diakses, terjangkau, dan profesional. Kami terus berkomitmen menghadirkan sistem modern serta layanan yang memudahkan pasien dan keluarga dalam setiap proses perawatan.
          </p>
          </div>
          
          
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="relative">
          <div class="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img :src="ambulance" alt="Pelayanan Ambulance RSU Permata Hati" class="w-full h-full object-cover object-right transition-transform duration-700 hover:scale-105">
          </div>
          <div class="absolute -bottom-8 -right-8 w-32 h-32 bg-emerald-500 rounded-full opacity-20 animate-pulse"></div>
          <div class="absolute -top-6 -left-6 w-24 h-24 bg-green-500 rounded-full opacity-15 animate-pulse animation-delay-1000"></div>
        </div>
        
        <div class="space-y-8">
          
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(feature, index) in services" :key="index" class="group bg-gradient-to-br from-white to-emerald-50 dark:from-neutral-800 dark:to-neutral-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-emerald-100 dark:border-neutral-700">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i :class="feature.icon + ' text-white text-lg'"></i>
                </div>
                <div>
                  <h3 class="font-bold text-emerald-700 dark:text-white text-base mb-3">{{ feature.title }}</h3>
                  <p class="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{{ feature.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us Section -->
  <section class="py-20 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-neutral-900 dark:to-neutral-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-4 mb-10">
            <h2 class="text-4xl md:text-5xl font-bold text-emerald-700 dark:text-white leading-tight">
              Mengapa Memilih<br>
              <span class="text-green-600 dark:text-emerald-400">RSU Permata Hati?</span>
            </h2>
            <div class="w-24 h-2 bg-emerald-500 rounded-full"></div>
            <p class="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
            RSU Permata Hati berkomitmen memberikan pelayanan terbaik dengan fasilitas modern, tenaga medis berpengalaman, dan akses yang mudah.
          </p>
          </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="order-2 lg:order-1 space-y-8">
          <div class="space-y-6">
            <div v-for="(reason, index) in reasons" :key="index" class="group flex items-start p-6 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg hover:shadow-xl transition-all duration-500 border border-emerald-100 dark:border-neutral-700">
              <div class="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg mr-5">
                <i :class="reason.icon + ' text-white text-lg'"></i>
              </div>
              <div class="flex-1">
                <h3 class="font-bold text-emerald-700 dark:text-white text-lg mb-2">{{ reason.title }}</h3>
                <p class="text-neutral-600 dark:text-neutral-400">{{ reason.desc }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="order-1 lg:order-2 relative">
          <div class="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img :src="ambulance01" alt="Fasilitas RSU Permata Hati" class="w-full h-full object-cover object-right transition-transform duration-700 hover:scale-105">
          </div>
          <div class="absolute -top-8 -left-8 w-32 h-32 bg-emerald-500 rounded-full opacity-20 animate-pulse"></div>
          <div class="absolute -bottom-6 -right-6 w-24 h-24 bg-green-500 rounded-full opacity-15 animate-pulse animation-delay-1000"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Quote Section -->
  <section class="relative py-28 bg-gradient-to-r from-emerald-800 to-green-700 dark:from-neutral-800 dark:to-neutral-700 overflow-hidden">
    <div class="absolute inset-0 bg-black/30"></div>
    <div class="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Ccircle%20cx%3D%223%22%20cy%3D%223%22%20r%3D%223%22/%3E%3Ccircle%20cx%3D%2213%22%20cy%3D%2213%22%20r%3D%223%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <i class="fa-solid fa-quote-right text-7xl md:text-9xl text-white/10 mb-8"></i>
      <h2 class="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 max-w-5xl mx-auto drop-shadow-lg">
        "Kesehatan adalah keadaan fisik, mental dan sosial yang lengkap, dan bukan hanya tidak adanya penyakit atau kelemahan."
      </h2>
      <h3 class="text-2xl md:text-3xl italic text-white/90 drop-shadow-lg">- Organisasi Kesehatan Dunia (WHO) -</h3>
    </div>
  </section>

  <!-- Doctors Section -->
  <section class="py-20 bg-white dark:bg-neutral-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-emerald-700 dark:text-white mb-6">
          Tim Dokter Spesialis
        </h2>
        <div class="w-32 h-2 bg-emerald-500 mx-auto rounded-full mb-6"></div>
        <p class="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Didukung oleh tim dokter spesialis berpengalaman yang siap memberikan pelayanan terbaik untuk kesehatan Anda
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(doctor, index) in doctors" :key="index" class="group bg-gradient-to-br from-white to-emerald-50 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-emerald-100 dark:border-neutral-700">
          <div class="aspect-square overflow-hidden">
            <img :src="doctor.image" :alt="doctor.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          </div>
          <div class="p-6 text-center">
            <h3 class="font-bold text-emerald-700 dark:text-white text-xl mb-3 leading-tight">{{ doctor.name }}</h3>
            <p class="text-neutral-600 dark:text-neutral-400 text-base">{{ doctor.specialty }}</p>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-16">
        <router-link to="/outpatient-care"
          class="group inline-flex items-center bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-2xl px-10 py-4 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl text-lg">
          <span>Lihat Semua Dokter</span>
          <i class="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
        </router-link>
      </div>
    </div>
  </section>

  <!-- Rooms Section -->
  <section class="py-20 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-neutral-900 dark:to-neutral-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-emerald-700 dark:text-white mb-6">
          Kamar Rawat Inap
        </h2>
        <div class="w-32 h-2 bg-emerald-500 mx-auto rounded-full mb-6"></div>
        <p class="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Fasilitas kamar rawat inap yang nyaman dan modern untuk mendukung proses penyembuhan yang optimal
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="(room, index) in rooms" :key="index" class="group bg-gradient-to-br from-white to-emerald-50 dark:from-neutral-900 dark:to-neutral-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-emerald-100 dark:border-neutral-700">
          <div class="aspect-[4/3] overflow-hidden">
            <img :src="room.image" :alt="room.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="font-bold text-emerald-700 dark:text-white text-xl">{{ room.name }}</h3>
              <span class="bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                {{ room.type }}
              </span>
            </div>
            <p class="text-neutral-600 dark:text-neutral-400 text-base">{{ room.desc }}</p>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-16">
        <router-link to="/inpatient-care"
          class="group inline-flex items-center bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold rounded-2xl px-10 py-4 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl text-lg">
          <span>Lihat Semua Kamar</span>
          <i class="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-300"></i>
        </router-link>
      </div>
    </div>
  </section>

  <!-- BPJS Section -->
  <section class="py-20 bg-white dark:bg-neutral-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="order-2 lg:order-1">
          <div class="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-neutral-900 dark:to-neutral-800 rounded-full border-emerald-100 dark:border-neutral-700">
            <img :src="jkn" alt="Mobile JKN" class="w-full h-auto transform hover:scale-105 transition-transform duration-500">
          </div>
        </div>
        
        <div class="order-1 lg:order-2 space-y-8">
          <div class="space-y-4">
            <h2 class="text-4xl md:text-5xl font-bold text-emerald-700 dark:text-white leading-tight">
              Registrasi dengan<br>
              <span class="text-green-600 dark:text-emerald-400">Mobile JKN</span>
            </h2>
            <div class="w-24 h-2 bg-emerald-500 rounded-full"></div>
          </div>
          
          <p class="text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed">
            RSU Permata Hati telah bekerjasama dengan BPJS Kesehatan untuk memberikan kemudahan akses layanan kesehatan bagi masyarakat. Pasien peserta BPJS Kesehatan kini dapat melakukan pendaftaran dengan lebih praktis melalui aplikasi Mobile JKN, sehingga proses administrasi menjadi lebih cepat, efisien, dan nyaman.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 pt-4">
            <a href="https://play.google.com/store/apps/details?id=app.bpjs.mobile&hl=id" target="_blank"
              class="group flex items-center justify-center bg-black hover:bg-gray-900 text-white rounded-2xl px-8 py-5 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex-1">
              <i class="fab fa-google-play text-3xl mr-4"></i>
              <div class="text-left">
                <div class="text-sm opacity-90">Download on</div>
                <div class="font-bold text-lg">Google Play</div>
              </div>
            </a>
            
            <a href="https://apps.apple.com/id/app/mobile-jkn/id1237601115" target="_blank"
              class="group flex items-center justify-center bg-black hover:bg-gray-900 text-white rounded-2xl px-8 py-5 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex-1">
              <i class="fab fa-apple text-3xl mr-4"></i>
              <div class="text-left">
                <div class="text-sm opacity-90">Download on</div>
                <div class="font-bold text-lg">App Store</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-20 bg-gradient-to-br from-emerald-50 to-green-50 dark:from-neutral-900 dark:to-neutral-800">
    <Faq />
  </section>

  <!-- Map Section -->
  <section id="gmaps" class="bg-white dark:bg-neutral-900">
    <Map />
  </section>
</template>

<style scoped>
.animation-delay-1000 {
  animation-delay: 1s;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom shadow for better depth */
.shadow-3xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style>