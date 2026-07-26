function openCenteredWindow(url) {
    const width = 480;
    const height = 720;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const left = (screenWidth - width) / 2;
    const top = (screenHeight - height) / 2;
    window.open(
        url,
        '_blank',
        `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
    );
}

function toggleIcon(button) {
    const icon = button.querySelector("i");
    const text = button.querySelector(".toggle-text");
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
        icon.classList.replace("bi-chevron-down", "bi-chevron-up");
        text.textContent = "Hide";
    } else {
        icon.classList.replace("bi-chevron-up", "bi-chevron-down");
        text.textContent = "More";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function initPopup() {
    document.querySelectorAll(".open-popup").forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();
            const url = btn.getAttribute("data-url") || btn.getAttribute("href");
            if (url) openCenteredWindow(url);
        });
    });
}
