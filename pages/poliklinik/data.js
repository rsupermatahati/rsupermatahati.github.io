function initPoliklinik() {
    // 1. Data seluruh poliklinik dan dokter dimasukkan ke dalam Array
    const daftarPoli = [
        {
            nama: "Poliklinik Anak",
            deskripsi: "Dokter Spesialis Anak di Poli Anak RSU Permata Hati.",
            dokter: [
                { nama: "dr. Ayu Shintia Shanti, M. Biomed, Sp. A", spesialis: "Spesialis Anak", foto: "images/dr-ayu-shintia-shanti-m-biomed-sp-a.jpg" },
                { nama: "dr. I Nyoman Supadma, M.Biomed. Sp.A", spesialis: "Spesialis Anak", foto: "images/dr-i-nyoman-supadma-mbiomed-sp-a.jpg" },
                { nama: "dr. Made Yunita Saraswati Murya, M.Biomed, Sp. A", spesialis: "Spesialis Anak", foto: "images/dr-made-yunita-saraswati-murya-mbiomed-sp-a.jpg" },
                { nama: "dr. Ni Putu Yunik Novayanti, M.Biomed, Sp. A", spesialis: "Spesialis Anak", foto: "images/dr-ni-putu-yunik-novayanti-mbiomed-sp-a.jpg" }
            ]
        },
        {
            nama: "Poliklinik Bedah",
            deskripsi: "Dokter Spesialis Bedah di Poli Bedah RSU Permata Hati.",
            dokter: [
                { nama: "dr. I Gusti Ngurah Gde Dwi Aryanata, Sp. B", spesialis: "Spesialis Bedah", foto: "images/dr-i-gusti-ngurah-gde-dwi-aryanata-sp-b.jpg" },
                { nama: "dr. Made Gede Cahyadi Permana, Sp. B", spesialis: "Spesialis Bedah", foto: "images/dr-made-gede-cahyadi-permana-sp-b.jpg" },
                { nama: "dr. Made Oka Sastrawan, M.Biomed, Sp. B", spesialis: "Spesialis Bedah", foto: "images/dr-made-oka-sastrawan-mbiomed-sp-b.jpg" },
                { nama: "dr. Ngurah Gede Boyke Arsa Wibawa, Sp. B", spesialis: "Spesialis Bedah", foto: "images/dr-ngurah-gede-boyke-arsa-wibawa-sp-b.jpg" }
            ]
        },
        {
            nama: "Poliklinik Obgyn",
            deskripsi: "Dokter Spesialis Obgyn di Poli Obgyn RSU Permata Hati.",
            dokter: [
                { nama: "dr. I Gede Indra Ari Utama Murya, Sp. OG", spesialis: "Spesialis Obgyn", foto: "images/dr-i-gede-indra-ari-utama-murya-sp-og.jpg" },
                { nama: "dr. Ida Bagus Made Sukadana, Sp. OG", spesialis: "Spesialis Obgyn", foto: "images/dr-ida-bagus-made-sukadana-sp-og.jpg" },
                { nama: "dr. Ni Wayan Supriany, Sp. OG", spesialis: "Spesialis Obgyn", foto: "images/dr-ni-wayan-supriany-sp-og.jpg" },
                { nama: "dr. Wayan Indriani Eka Putri, Sp. OG, M.Biomed", spesialis: "Spesialis Obgyn", foto: "images/dr-wayan-indriani-eka-putri-sp-og-mbiomed.jpg" }
            ]
        }
    ];

    const mainContainer = document.getElementById("all-poli-container");

    if (mainContainer) {
        let masterHTML = "";

        // Loop Pertama: Mengulang setiap Poliklinik
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

            // Satukan Judul Poliklinik, Deskripsi, dan Baris Kartu Dokternya (ditambah mb-5 agar ada jarak antar poli)
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

        // Masukkan semua struktur yang telah dibuat ke dalam HTML
        mainContainer.innerHTML = masterHTML;
    } else {
        console.error("Gagal memuat data poliklinik.");
    }
}
