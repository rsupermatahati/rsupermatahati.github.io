async function initPoli() {
  const mainContainer = document.getElementById("all-poli-container");
  if (!mainContainer) return; // Guard clause jika elemen tidak ada di halaman

  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxF4EsRS-DwlN6BVxjkFZCBdokBvRH_3neDZ_RZ_dvimeRRv3x4VOShAFVPv9JU3H4e6w/exec";
  
  // Konfigurasi Cache
  const CACHE_KEY = "poli_data_cache";
  const CACHE_TIME_KEY = "poli_data_timestamp";
  const CACHE_DURATION = 5 * 60 * 1000; // Durasi cache: 5 Menit (dalam milidetik)

  // 1. CEK CACHE LOKAL
  const cachedData = localStorage.getItem(CACHE_KEY);
  const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
  const isCacheValid = cachedTime && (Date.now() - parseInt(cachedTime, 10) < CACHE_DURATION);

  if (cachedData && isCacheValid) {
    // Jika cache masih valid, langsung render tanpa fetch!
    renderPoli(JSON.parse(cachedData), mainContainer);
    return;
  }

  // 2. JIKA CACHE TIDAK ADA / EXPIRED, FETCH DARI API
  try {
    const response = await fetch(WEB_APP_URL);
    if (!response.ok) {
      throw new Error(`Gagal mengambil data: ${response.status}`);
    }

    const rawData = await response.json();

    // Simpan hasil fetch baru ke LocalStorage
    localStorage.setItem(CACHE_KEY, JSON.stringify(rawData));
    localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());

    // Render ke halaman
    renderPoli(rawData, mainContainer);

  } catch (error) {
    console.error(error);
    
    // Jika fetch gagal tetapi ada cache lama, gunakan cache lama sebagai fallback
    if (cachedData) {
      renderPoli(JSON.parse(cachedData), mainContainer);
    } else {
      mainContainer.innerHTML = `<p class="text-danger text-center">Gagal memuat data poliklinik dan dokter.</p>`;
    }
  }
}

// Helper Function: Khusus untuk memproses & merender data menjadi HTML
function renderPoli(rawData, mainContainer) {
  // Grouping data datar berdasarkan kolom 'poli'
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

    if (item.nama_dokter) {
      poliMap[namaPoli].dokter.push({
        nama: item.nama_dokter,
        spesialis: item.spesialis || "",
        foto: item.foto || "/assets/images/image-placeholder.svg"
      });
    }
  });

  let masterHTML = "";

  // Loop Mengubah Data Grouping Menjadi Kartu HTML Bootstrap
  Object.values(poliMap).forEach((poli) => {
    let doctorCardsHTML = "";

    poli.dokter.forEach((dokter) => {
      doctorCardsHTML += `
        <div class="col">
          <div class="card h-100 rounded-4 border-0 shadow-sm bg-body-tertiary">
            <img src="${dokter.foto}" class="card-img-top rounded-top-4 viewerjs" alt="${dokter.nama}" style="width: 100%; aspect-ratio: 3/4; object-fit: cover; object-position: top center;">
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
        <div class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3 py-2">
          ${doctorCardsHTML}
        </div>
      </div>
    `;
  });

  // Masukkan ke dalam DOM
  mainContainer.innerHTML = masterHTML;

  let allimages = document.querySelectorAll('.viewerjs');
  allimages.forEach(image => {
    new Viewer(image, {
      navbar: false,
      toolbar: false,
      title: false,
      tooltip: false,
    });
  });
}