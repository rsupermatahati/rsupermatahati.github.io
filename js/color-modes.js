/*!
 * Color mode toggler for Bootstrap (Bootstrap Icons Version)
 */

const getStoredTheme = () => localStorage.getItem('theme')
const setStoredTheme = theme => localStorage.setItem('theme', theme)

const getPreferredTheme = () => {
  const storedTheme = getStoredTheme()
  if (storedTheme) {
    return storedTheme
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const setTheme = theme => {
  if (theme === 'auto') {
    document.documentElement.setAttribute(
      'data-bs-theme',
      window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    )
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }
}

const updateLogo = theme => {
  const logolight = document.getElementById('logolight')
  const logodark = document.getElementById('logodark')
  const carouselbg = document.getElementById('carouselbg')

  if (theme === 'dark') {
    logolight?.classList.add('d-none')
    logodark?.classList.remove('d-none')
    carouselbg?.classList.add('d-block')
    carouselbg?.classList.remove('d-none')
  } else {
    logolight?.classList.remove('d-none')
    logodark?.classList.add('d-none')
    carouselbg?.classList.add('d-none')
    carouselbg?.classList.remove('d-block')
  }
}

const setLogo = theme => {
  if (theme === 'auto') {
    updateLogo(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  } else {
    updateLogo(theme)
  }
}

const showActiveTheme = (theme, focus = false) => {
  const themeSwitcher = document.querySelector('#bd-theme')
  if (!themeSwitcher) return

  const themeIconActive = themeSwitcher.querySelector('.theme-icon-active')
  let btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)

  if (!btnToActive) {
    localStorage.setItem('theme', 'auto')
    theme = 'auto'
    btnToActive = document.querySelector('[data-bs-theme-value="auto"]')
  }

  if (!btnToActive) return

  // Mapping class Bootstrap Icons
  const themeIcons = {
    light: 'bi-sun-fill',
    dark: 'bi-moon-stars-fill',
    auto: 'bi-circle-half'
  }

  // Update status active pada menu dropdown
  document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
    element.classList.remove('active')
    element.setAttribute('aria-pressed', 'false')
    const checkIcon = element.querySelector('.bi-check2')
    if (checkIcon) checkIcon.classList.add('d-none')
  })

  btnToActive.classList.add('active')
  btnToActive.setAttribute('aria-pressed', 'true')
  const activeCheck = btnToActive.querySelector('.bi-check2')
  if (activeCheck) activeCheck.classList.remove('d-none')

  // Ganti kelas ikon pada tombol utama switcher
  if (themeIconActive) {
    themeIconActive.className = `bi ${themeIcons[theme] || 'bi-sun-fill'} theme-icon-active`
  }

  if (focus) {
    themeSwitcher.focus()
  }
}

// Terapkan tema awal langsung ke <html> agar tidak flicker saat loading
setTheme(getPreferredTheme())

// Fungsi Inisialisasi Utama yang dipanggil di index.html setelah fetch layout selesai
function initTheme() {
  const activeTheme = getPreferredTheme()
  setTheme(activeTheme)
  setLogo(activeTheme)
  showActiveTheme(activeTheme)

  // Inisialisasi Dropdown Bootstrap secara manual untuk tombol switcher
  const themeToggleBtn = document.querySelector('#bd-theme')
  if (themeToggleBtn && window.bootstrap?.Dropdown) {
    new window.bootstrap.Dropdown(themeToggleBtn)
  }
}

// Event Delegation untuk klik tombol pilihan tema
document.addEventListener('click', e => {
  const toggleBtn = e.target.closest('[data-bs-theme-value]')
  if (!toggleBtn) return

  const theme = toggleBtn.getAttribute('data-bs-theme-value')
  setStoredTheme(theme)
  setTheme(theme)
  setLogo(theme)
  showActiveTheme(theme, true)
})

// Auto-sync jika tema bawaan OS (Windows/Mac/Android) berubah
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  const storedTheme = getStoredTheme()
  if (storedTheme !== 'light' && storedTheme !== 'dark') {
    const currentTheme = getPreferredTheme()
    setTheme(currentTheme)
    setLogo(currentTheme)
  }
})