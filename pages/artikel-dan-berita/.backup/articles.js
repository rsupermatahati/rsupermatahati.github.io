// Variable Global untuk State Artikel
let allArticles = [];
let currentPage = 1;
const limitPerPage = 5;

// 1. Inisialisasi Daftar Artikel (List)
async function initArticles() {
  const listContainer = document.getElementById('article-list');
  if (!listContainer) return; // Guard clause jika bukan di halaman list

  try {
    const res = await fetch('articles.json');
    if (!res.ok) throw new Error('Gagal mengambil data artikel');

    allArticles = await res.json();
    renderArticles();
    renderPagination();
  } catch (err) {
    console.error(err);
    listContainer.innerHTML = `
      <div class="col-12">
        <p class="text-danger">Gagal memuat artikel.</p>
      </div>`;
  }
}

function renderArticles() {
  const start = (currentPage - 1) * limitPerPage;
  const end = start + limitPerPage;
  const pageArticles = allArticles.slice(start, end);

  const listContainer = document.getElementById('article-list');

  if (pageArticles.length === 0) {
    listContainer.innerHTML = '<div class="col-12"><p class="text-muted">Belum ada artikel.</p></div>';
    return;
  }

  listContainer.innerHTML = pageArticles.map(item => `
    <div class="col-12">
      <div class="card h-100 border-0">
        <div class="row g-0 align-items-top">
          <div class="col-md-4">
            <img src="${item.thumbnail || '/assets/images/image-placeholder.svg'}" class="img-fluid rounded h-100 w-100" alt="${item.title}" style="aspect-ratio: 6/4; object-fit: cover; object-position: center; min-height: 180px;">
          </div>
          <div class="col-md-8">
            <div class="card-body h-100">
              <small class="text-muted"><i class="bi bi-calendar3 me-1"></i>${item.date}</small>
              <h5 class="card-title fw-bold mt-1 mb-2">${item.title}</h5>
              <p class="card-text text-secondary small">${item.excerpt}</p>
              <a href="/pages/artikel-dan-berita/detail.html?slug=${item.slug}" class="btn btn-outline-success btn-sm mt-auto">
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
  const totalPages = Math.ceil(allArticles.length / limitPerPage);
  const navContainer = document.getElementById('pagination-nav'); //[cite: 1, 3]
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
      <li class="page-item ${i === currentPage ? 'active' : ''}">
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
  currentPage = page;
  renderArticles();
  renderPagination();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 2. Inisialisasi Detail Artikel per file JSON (Detail)
async function initArticleDetail() {
  const container = document.getElementById('article-detail-container');
  if (!container) return; // Guard clause jika bukan di halaman detail

  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  if (!slug) {
    container.innerHTML = `
      <div class="alert alert-warning" role="alert">
        Parameter artikel tidak valid. <a href="/pages/artikel-dan-berita/index.html">Kembali ke daftar artikel</a>.
      </div>`;
    return;
  }

  try {
    // Fetch file JSON spesifik sesuai slug
    const res = await fetch(`/pages/artikel-dan-berita/articles/${slug}.json`);
    if (!res.ok) throw new Error('File artikel tidak ditemukan');

    const article = await res.json();

    document.title = `${article.title} - RSU Permata Hati`;

    container.innerHTML = `
      <nav aria-label="breadcrumb" class="mb-3">
        <ol class="breadcrumb small">
          <li class="breadcrumb-item"><a href="/">Beranda</a></li>
          <li class="breadcrumb-item"><a href="/pages/artikel-dan-berita/index.html">Artikel & Berita</a></li>
          <li class="breadcrumb-item active" aria-current="page">${article.title}</li>
        </ol>
      </nav>

      <h1 class="fw-bold mb-3">${article.title}</h1>

      <div class="text-muted small mb-4 pb-2 d-flex align-items-center gap-3">
        <span><i class="bi bi-calendar3 me-1"></i>${article.date}</span>
        ${article.author ? `<span><i class="bi bi-person me-1"></i>${article.author}</span>` : ''}
      </div>

      <div class="mb-4 text-center">
        <img src="${article.thumbnail || '/icons/og-image.jpg'}" class="img-fluid rounded shadow-sm w-100" alt="${article.title}" style="max-height: 400px; object-fit: cover;">
      </div>

      <div class="article-body lh-lg text-secondary">
        ${article.content}
      </div>

      <div class="mt-5 pt-3">
        <a href="/pages/artikel-dan-berita/index.html" class="btn btn-secondary btn-sm">
          <i class="bi bi-arrow-left me-1"></i> Kembali ke Daftar Artikel
        </a>
      </div>
    `;

  } catch (err) {
    console.error(err);
    container.innerHTML = `
      <div class="alert alert-danger" role="alert">
        Artikel yang Anda cari tidak ditemukan. <a href="/pages/artikel-dan-berita/index.html">Kembali ke daftar artikel</a>.
      </div>`;
  }
}
