/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
    'use strict'

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
            document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
        }
    }

    const updateLogo = theme => {
        const logolight = document.getElementById('logolight')
        const logodark = document.getElementById('logodark')
        const dashboardlight = document.getElementById('dashboard-light')
        const dashboarddark = document.getElementById('dashboard-dark')

        if (theme === 'dark') {
            logolight?.classList.add('d-none')
            logodark?.classList.remove('d-none')
            dashboardlight?.classList.add('d-none')
            dashboarddark?.classList.remove('d-none')
        } else {
            logolight?.classList.remove('d-none')
            logodark?.classList.add('d-none')
            dashboardlight?.classList.remove('d-none')
            dashboarddark?.classList.add('d-none')
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

        if (!themeSwitcher) {
            return
        }

        const themeSwitcherText = document.querySelector('#bd-theme-text')
        const activeThemeIcon = document.querySelector('.theme-icon-active use')
        const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)

        if (!btnToActive) {
            console.warn(`Invalid theme detected: "${theme}", resetting to "auto"`)
            localStorage.setItem('theme', 'auto')
            theme = 'auto'
            btnToActive = document.querySelector('[data-bs-theme-value="auto"]')
        }

        const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')

        document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
            element.classList.remove('active')
            element.setAttribute('aria-pressed', 'false')
        })

        btnToActive.classList.add('active')
        btnToActive.setAttribute('aria-pressed', 'true')
        activeThemeIcon.setAttribute('href', svgOfActiveBtn)
        const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
        themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

        if (focus) {
            themeSwitcher.focus()
        }
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        const storedTheme = getStoredTheme()
        if (storedTheme !== 'light' && storedTheme !== 'dark') {
            setTheme(getPreferredTheme())
        }
    })

    const preferredTheme = getPreferredTheme()
    setTheme(preferredTheme)

    window.addEventListener('DOMContentLoaded', () => {
        showActiveTheme(preferredTheme)
        setLogo(preferredTheme)

        document.querySelectorAll('[data-bs-theme-value]')
            .forEach(toggle => {
                toggle.addEventListener('click', () => {
                    const theme = toggle.getAttribute('data-bs-theme-value')
                    setStoredTheme(theme)
                    setTheme(theme)
                    setLogo(theme)
                    showActiveTheme(theme, true)
                })
            })
    })

})()
