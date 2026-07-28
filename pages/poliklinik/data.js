async function initPoli() {
  const mainContainer = document.getElementById("all-poli-container");
  if (!mainContainer) return; // Guard clause jika elemen tidak ada di halaman

  // Masukkan URL Web App Google Apps Script kamu di sini
  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxF4EsRS-DwlN6BVxjkFZCBdokBvRH_3neDZ_RZ_dvimeRRv3x4VOShAFVPv9JU3H4e6w/exec";

  try {
    const response = await fetch(WEB_APP_URL);
    if (!response.ok) {
      throw new Error(`Gagal mengambil data: ${response.status}`);
    }

    const rawData = await response.json();

    // 1. Grouping data datar berdasarkan kolom 'poli'
    const poliMap = {};

    rawData.forEach(item => {
      const namaPoli = item.poli; 
      if (!namaPoli) return;

      if (!poliMap[namaPoli]) {
        poliMap[namaPoli] = {
          nama: namaPoli,
          deskripsi: item.deskripsi || "",
          dokter: []
        };
      }

      // Masukkan data dokter ke dalam kelompok poli yang sesuai
      if (item.nama_dokter) {
        poliMap[namaPoli].dokter.push({
          nama: item.nama_dokter,
          spesialis: item.spesialis || "",
          foto: item.foto || "/icons/og-image.jpg"
        });
      }
    });

    let masterHTML = "";

    // 2. Loop Mengubah Data Grouping Menjadi Kartu HTML Bootstrap
    Object.values(poliMap).forEach((poli) => {
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

      masterHTML += `
        <div class="poli-section mb-5">
          <div class="border-start border-success border-4 ps-3">
            <h3 class="text-success">${poli.nama}</h3>
            <h6 class="text-muted">${poli.deskripsi}</h6>
          </div>
          <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 py-2">
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