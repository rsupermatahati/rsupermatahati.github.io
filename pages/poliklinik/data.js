async function initPoli() {
    const mainContainer = document.getElementById("all-poli-container");
    if (!mainContainer) return; // Guard clause jika elemen tidak ada di halaman

    try {
        // 1. Ambil data dari file data.json
        const response = await fetch('data.json'); // Sesuaikan lokasi file .json kamu

        if (!response.ok) {
            throw new Error(`Gagal mengambil data JSON: ${response.status}`);
        }

        const daftarPoli = await response.json();
        let masterHTML = "";

        // 2. Loop Pertama: Mengulang setiap Poliklinik
        daftarPoli.forEach((poli) => {

            // Loop Kedua: Mengulang kartu dokter khusus untuk poli ini
            let doctorCardsHTML = "";
            poli.dokter.forEach((dokter) => {
                doctorCardsHTML += `
                <div class="col">
                    <div class="card h-100 rounded-4 border-0 shadow-sm bg-body-tertiary">
                    <img src="${dokter.foto}" class="card-img-top rounded-top-4" alt="${dokter.nama}" style="width: 100%; aspect-ratio: 3/4; object-fit: cover; object-position: top center;">
                    <div class="card-body text-center">
                        <h6 class="card-title">${dokter.nama}</h6>
                        <p class="card-text text-muted">${dokter.spesialis}</p>
                    </div>
                    </div>
                </div>
                `;
            });

            // Satukan Judul Poliklinik, Deskripsi, dan Baris Kartu Dokternya
            masterHTML += `
                <div class="poli-section mb-5">
                <div class="border-start border-success border-4 ps-3">
                    <h3 class="text-success">${poli.nama}</h3>
                    <h6 class="text-muted">${poli.deskripsi}</h6>
                </div>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-5 g-4 py-2">
                    ${doctorCardsHTML}
                </div>
                </div>
            `;
        });

        // 3. Masukkan ke dalam DOM
        mainContainer.innerHTML = masterHTML;

    } catch (error) {
        console.error("Gagal memuat data poliklinik:", error);
        mainContainer.innerHTML = `<p class="text-danger text-center">Gagal memuat data poliklinik dan dokter.</p>`;
    }
}