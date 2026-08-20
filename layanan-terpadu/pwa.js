function initPWA() {
  let deferredPrompt;
  const installBanner = document.getElementById('pwa-install-banner');
  const installBtn = document.getElementById('pwa-install-btn');
  const closeBtn = document.getElementById('pwa-close-btn');

  // Validasi: pastikan elemen HTML ada di DOM sebelum menambah event listener
  if (!installBanner || !installBtn || !closeBtn) {
    console.warn('Elemen PWA banner tidak ditemukan di DOM.');
    return;
  }

  // 1. Tangkap event bawaan browser
  window.addEventListener('beforeinstallprompt', (e) => {
    // Sembunyikan prompt standar
    e.preventDefault();
    deferredPrompt = e;

    // Tampilkan banner kustom jika belum pernah ditutup oleh user
    if (!sessionStorage.getItem('pwa_banner_dismissed')) {
      installBanner.style.display = 'block';
    }
  });

  // 2. Eksekusi install saat tombol diklik
  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;

    // Munculkan dialog install bawaan
    deferredPrompt.prompt();

    // Tunggu respon pilihan pengguna
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`Respon pengguna: ${outcome}`);

    // Clean up
    deferredPrompt = null;
    installBanner.style.display = 'none';
  });

  // 3. Tutup banner sementara
  closeBtn.addEventListener('click', () => {
    installBanner.style.display = 'none';
    // Simpan status di session agar tidak mengganggu terus saat navigasi
    sessionStorage.setItem('pwa_banner_dismissed', 'true');
  });

  // 4. Deteksi jika aplikasi berhasil di-install
  window.addEventListener('appinstalled', () => {
    installBanner.style.display = 'none';
    deferredPrompt = null;
    console.log('PWA berhasil ditambahkan ke Home Screen.');
    alert('App berhasil ditambahkan ke Home Screen.');
  });
}
