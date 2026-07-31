let totalArticlesCount = 0;
let currentPage = 1;
const limitPerPage = 10;

const ARTIKEL_API_URL = "https://script.google.com/macros/s/AKfycbw2FsvJNCGudgotcdnOrmGl08OhMU8rY1-KppKnczsdgHR46Z3JqVofelr5W_md5Xr2/exec";

// KONFIGURASI CACHE 5 MENIT
const ARTICLE_CACHE_TTL = 5 * 60 * 1000; // 5 Menit dalam milidetik

function formatDateID(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}

function makeExcerpt(text, length = 120) {
  if (!text) return "";
  const cleanText = text.replace(/<[^>]*>?/gm, '');
  return cleanText.length > length ? cleanText.substring(0, length) + "..." : cleanText;
}

// Helper: Ambil data dari Cache (Maksimal 5 Menit)
function getCachedArticles(page) {
  const sessionData = sessionStorage.getItem(`articles_page_${page}`);
  if (!sessionData) return null;

  try {
    const { timestamp, data } = JSON.parse(sessionData);
    const isExpired = (Date.now() - timestamp) > ARTICLE_CACHE_TTL;

    if (isExpired) {
      sessionStorage.removeItem(`articles_page_${page}`); // Hapus jika sudah > 5 menit
      return null;
    }

    return data;
  } catch (e) {
    sessionStorage.removeItem(`articles_page_${page}`);
    return null;
  }
}

// Helper: Simpan data ke Cache beserta Timestamp
function setCachedArticles(page, data) {
  const payload = {
    timestamp: Date.now(),
    data: data
  };
  sessionStorage.setItem(`articles_page_${page}`, JSON.stringify(payload));
}

// 1. Inisialisasi Daftar Artikel dengan Cache 5 Menit
async function initArticles(page = 1) {
  const listContainer = document.getElementById('article-list');
  if (!listContainer) return;

  currentPage = page;

  // Cek cache total artikel
  const cachedTotal = sessionStorage.getItem('articles_total_count');
  if (cachedTotal) {
    totalArticlesCount = parseInt(cachedTotal, 10);
    renderPagination();
  }

  // Cek cache artikel per halaman (5 menit)
  const cachedArticles = getCachedArticles(page);
  if (cachedArticles) {
    renderArticles(cachedArticles);
    renderPagination();
    return; // Langsung tampilkan tanpa fetch
  }

  // Spinner hanya tampil jika cache tidak ada / sudah kedaluwarsa
  listContainer.innerHTML = `
  <div class="placeholder-glow mb-3">
      <div class="row gy-3">
          <div class="col-12 col-md-4">
              <div class="placeholder placeholder-lg rounded col-12" style="height: 10rem;"></div>
          </div>
          <div class="col-12 col-md-8">
              <div class="placeholder placeholder-lg rounded col-12"></div>
              <div class="placeholder placeholder-lg rounded col-11"></div>
              <div class="placeholder placeholder-lg rounded col-10"></div>
              <div class="placeholder placeholder-lg rounded col-12"></div>
              <div class="placeholder placeholder-lg rounded col-11"></div>
              <div class="placeholder placeholder-lg rounded col-10"></div>
          </div>
      </div>
  </div>
  <div class="placeholder-glow mb-3">
      <div class="row gy-3">
          <div class="col-12 col-md-4">
              <div class="placeholder placeholder-lg rounded col-12" style="height: 10rem;"></div>
          </div>
          <div class="col-12 col-md-8">
              <div class="placeholder placeholder-lg rounded col-12"></div>
              <div class="placeholder placeholder-lg rounded col-11"></div>
              <div class="placeholder placeholder-lg rounded col-10"></div>
              <div class="placeholder placeholder-lg rounded col-12"></div>
              <div class="placeholder placeholder-lg rounded col-11"></div>
              <div class="placeholder placeholder-lg rounded col-10"></div>
          </div>
      </div>
  </div>
  <div class="placeholder-glow mb-3">
      <div class="row gy-3">
          <div class="col-12 col-md-4">
              <div class="placeholder placeholder-lg rounded col-12" style="height: 10rem;"></div>
          </div>
          <div class="col-12 col-md-8">
              <div class="placeholder placeholder-lg rounded col-12"></div>
              <div class="placeholder placeholder-lg rounded col-11"></div>
              <div class="placeholder placeholder-lg rounded col-10"></div>
              <div class="placeholder placeholder-lg rounded col-12"></div>
              <div class="placeholder placeholder-lg rounded col-11"></div>
              <div class="placeholder placeholder-lg rounded col-10"></div>
          </div>
      </div>
  </div>
  `;

  try {
    const res = await fetch(`${ARTIKEL_API_URL}?page=${page}&limit=${limitPerPage}`);
    if (!res.ok) throw new Error('Gagal mengambil data artikel');

    const responseData = await res.json();

    if (responseData.total !== undefined) {
      totalArticlesCount = responseData.total;
      sessionStorage.setItem('articles_total_count', responseData.total);
    }

    const pageArticles = responseData.data || [];

    // Simpan ke cache dengan timestamp saat ini
    setCachedArticles(page, pageArticles);

    renderArticles(pageArticles);
    renderPagination();
  } catch (err) {
    console.error(err);
    listContainer.innerHTML = `<div class="col-12"><p class="text-danger">Gagal memuat artikel.</p></div>`;
  }
}

function renderArticles(articles) {
  const listContainer = document.getElementById('article-list');

  if (articles.length === 0) {
    listContainer.innerHTML = '<div class="col-12"><p class="text-muted">Belum ada artikel.</p></div>';
    return;
  }

  listContainer.innerHTML = articles.map(item => `
    <div class="col-12">
      <div class="card h-100 border-0">
        <div class="row g-0 align-items-top">
          <div class="col-md-4">
            <img src="${item.gambar || '/assets/images/image-placeholder.svg'}" class="img-fluid rounded h-100 w-100" alt="${item.judul}" style="aspect-ratio: 6/4; object-fit: cover; object-position: center; min-height: 180px;">
          </div>
          <div class="col-md-8">
            <div class="card-body h-100 px-0 px-md-3">
              <small class="text-muted"><i class="bi bi-calendar3 me-1"></i>${formatDateID(item.tanggal)}</small>
              <h5 class="card-title fw-bold mt-1 mb-2">${item.judul}</h5>
              <p class="card-text text-body">${makeExcerpt(item.isi)}</p>
              <a href="/pages/artikel-dan-berita/detail.html?id=${item.id}" class="btn btn-outline-success btn-sm mt-auto">
                Baca Selengkapnya <i class="bi bi-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderPagination() {
  const totalPages = Math.ceil(totalArticlesCount / limitPerPage);
  const navContainer = document.getElementById('pagination-nav');
  if (!navContainer) return;

  if (totalPages <= 1) {
    navContainer.innerHTML = '';
    return;
  }

  let html = '';

  // Prev Button
  html += `
    <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
      <button class="page-link" onclick="changeArticlePage(${currentPage - 1})">« Prev</button>
    </li>
  `;

  // Page Numbers
  for (let i = 1; i <= totalPages; i++) {
    html += `
      <li class="page-item ${i === currentPage ? 'active disabled' : ''}">
        <button class="page-link" onclick="changeArticlePage(${i})">${i}</button>
      </li>
    `;
  }

  // Next Button
  html += `
    <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
      <button class="page-link" onclick="changeArticlePage(${currentPage + 1})">Next »</button>
    </li>
  `;

  navContainer.innerHTML = html;
}

function changeArticlePage(page) {
  initArticles(page);
  
  const listContainer = document.getElementById('artikel-top');
  if (listContainer) {
    listContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// 2. Detail Artikel
async function initArticleDetail() {
  const container = document.getElementById('article-detail-container');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get('id');

  if (!articleId) {
    container.innerHTML = `<div class="alert alert-warning">Parameter artikel tidak valid. <a href="/pages/artikel-dan-berita/index.html">Kembali</a>.</div>`;
    return;
  }

  let article = null;

  // 1. Cek dari cache halaman artikel yang tersimpan (yang belum expired 5 menit)
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (key.startsWith('articles_page_')) {
      const cached = sessionStorage.getItem(key);
      if (cached) {
        try {
          const { timestamp, data } = JSON.parse(cached);
          if ((Date.now() - timestamp) <= ARTICLE_CACHE_TTL) {
            article = data.find(item => String(item.id) === String(articleId));
            if (article) break;
          }
        } catch (e) {}
      }
    }
  }

  try {
    // 2. Jika tidak ada di cache lokal, baru fetch ke API
    if (!article) {
      const res = await fetch(`${ARTIKEL_API_URL}?page=1&limit=100`);
      if (!res.ok) throw new Error('Gagal memuat artikel');

      const responseData = await res.json();
      article = (responseData.data || []).find(item => String(item.id) === String(articleId));
    }

    if (!article) throw new Error('Artikel tidak ditemukan');

    document.title = `${article.judul} - RSU Permata Hati`;
    const formattedContent = article.isi ? article.isi.replace(/\n/g, '<br>') : '';

    container.innerHTML = `
      <nav aria-label="breadcrumb" class="mb-3">
        <ol class="breadcrumb small">
          <li class="breadcrumb-item"><a href="/">Beranda</a></li>
          <li class="breadcrumb-item"><a href="/pages/artikel-dan-berita/index.html">Artikel & Berita</a></li>
          <li class="breadcrumb-item active" aria-current="page">${article.judul}</li>
        </ol>
      </nav>

      <h1 class="fw-bold mb-3">${article.judul}</h1>

      <div class="text-muted small mb-4 pb-2 d-flex align-items-center gap-3">
        <span><i class="bi bi-calendar3 me-1"></i>${formatDateID(article.tanggal)}</span>
        ${article.penulis ? `<span><i class="bi bi-person me-1"></i>${article.penulis}</span>` : ''}
      </div>

      <div class="mb-4 text-center">
        <img src="${article.gambar || '/assets/images/image-placeholder.svg'}" class="img-fluid rounded shadow-sm w-100" alt="${article.judul}" style="max-height: 500px; object-fit: cover;">
      </div>

      <div class="text-body lh-lg fs-6">
        ${formattedContent}
      </div>

      <div class="mt-5">
        <a href="/pages/artikel-dan-berita/index.html" class="btn btn-outline-secondary btn-sm">
          <i class="bi bi-arrow-left me-1"></i> Kembali ke Daftar Artikel
        </a>
      </div>
    `;

  } catch (err) {
    console.error(err);
    container.innerHTML = `<div class="alert alert-danger">Artikel tidak ditemukan. <a href="/pages/artikel-dan-berita/index.html">Kembali</a>.</div>`;
  }
}