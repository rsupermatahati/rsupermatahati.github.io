// Variable Global FAQ
const FAQ_API_URL = "https://script.google.com/macros/s/AKfycbw7VMX22q9cZT1NvABFj6Awk4K7tRwpHBfgexMCKxrJhkVhJn76OL-oq7LATNQi1iAB/exec"; 
const FAQ_CACHE_KEY = "faq_data_cache";
const FAQ_CACHE_TTL = 5 * 60 * 1000; // 5 Menit dalam milidetik

// Helper: Ambil cache FAQ yang belum expired
function getCachedFAQ() {
  const cached = sessionStorage.getItem(FAQ_CACHE_KEY);
  if (!cached) return null;

  try {
    const { timestamp, data } = JSON.parse(cached);
    const isExpired = (Date.now() - timestamp) > FAQ_CACHE_TTL;

    if (isExpired) {
      sessionStorage.removeItem(FAQ_CACHE_KEY); // Hapus cache jika sudah lebih dari 5 menit
      return null;
    }

    return data;
  } catch (e) {
    sessionStorage.removeItem(FAQ_CACHE_KEY);
    return null;
  }
}

// Helper: Simpan FAQ ke cache dengan timestamp
function setCachedFAQ(data) {
  const payload = {
    timestamp: Date.now(),
    data: data
  };
  sessionStorage.setItem(FAQ_CACHE_KEY, JSON.stringify(payload));
}

async function initFAQ() {
  const container = document.getElementById('faq-accordion');
  if (!container) return; // Guard clause jika elemen belum ada

  // 1. CEK CACHE TERLEBIH DAHULU
  const cachedData = getCachedFAQ();
  if (cachedData) {
    renderFAQ(cachedData); // Render langsung dari cache 5 menit
    return;
  }

  // 2. JIKA CACHE KOSONG / EXPIRED, TAMPILKAN SPINNER LOADING
  container.innerHTML = `
    <div class="placeholder-glow mb-3">
        <span class="placeholder placeholder-lg rounded col-12"></span>
        <span class="placeholder placeholder-lg rounded col-11"></span>
        <span class="placeholder placeholder-lg rounded col-10"></span>
    </div>
    <div class="placeholder-glow mb-3">
        <span class="placeholder placeholder-lg rounded col-12"></span>
        <span class="placeholder placeholder-lg rounded col-11"></span>
        <span class="placeholder placeholder-lg rounded col-10"></span>
    </div>
    <div class="placeholder-glow mb-3">
        <span class="placeholder placeholder-lg rounded col-12"></span>
        <span class="placeholder placeholder-lg rounded col-11"></span>
        <span class="placeholder placeholder-lg rounded col-10"></span>
    </div>
  `;

  try {
    const res = await fetch(FAQ_API_URL);
    if (!res.ok) throw new Error('Gagal mengambil data FAQ');

    const faqList = await res.json();

    // 3. SIMPAN DATA HASIL FETCH KE CACHE
    setCachedFAQ(faqList);

    renderFAQ(faqList);
  } catch (err) {
    console.error(err);
    container.innerHTML = `
      <div class="alert alert-danger" role="alert">
        Gagal memuat FAQ. Silakan coba beberapa saat lagi.
      </div>`;
  }
}

function renderFAQ(data) {
  const container = document.getElementById('faq-accordion');

  if (!data || data.length === 0) {
    container.innerHTML = '<p class="text-muted text-center">Belum ada pertanyaan yang tersedia.</p>';
    return;
  }

  container.innerHTML = data.map((item, index) => {
    const formattedJawaban = item.jawaban ? item.jawaban.toString().replace(/\n/g, '<br>') : '';
    const collapseId = `faq-collapse-${item.id || index}`;
    const headingId = `faq-heading-${item.id || index}`;

    return `
      <div class="accordion-item rounded border mb-3">
        <h2 class="accordion-header rounded" id="${headingId}">
          <button class="accordion-button ${index === 0 ? '' : 'collapsed'} fw-semibold text-body rounded" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="${collapseId}">
            ${item.pertanyaan || ''}
          </button>
        </h2>
        <div id="${collapseId}" class="accordion-collapse collapse notranslate ${index === 0 ? 'show' : ''}" aria-labelledby="${headingId}" data-bs-parent="#faq-accordion">
          <div class="accordion-body text-body">
          <div class="translate">${formattedJawaban}</div>
            
          </div>
        </div>
      </div>
    `;
  }).join('');
}