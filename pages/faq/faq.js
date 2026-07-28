// Variable Global FAQ
const FAQ_API_URL = "https://script.google.com/macros/s/AKfycbw7VMX22q9cZT1NvABFj6Awk4K7tRwpHBfgexMCKxrJhkVhJn76OL-oq7LATNQi1iAB/exec"; // Masukkan URL Web App Apps Script FAQ

async function initFAQ() {
  const container = document.getElementById('faq-accordion');
  if (!container) return; // Guard clause jika elemen belum ada

  try {
    const res = await fetch(FAQ_API_URL);
    if (!res.ok) throw new Error('Gagal mengambil data FAQ');

    const faqList = await res.json();
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
        <div id="${collapseId}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="${headingId}" data-bs-parent="#faq-accordion">
          <div class="accordion-body text-body">
            ${formattedJawaban}
          </div>
        </div>
      </div>
    `;
  }).join('');
}
