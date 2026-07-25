function openCenteredWindow(url) {
    const width = 600;
    const height = 600;
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

function confirmDisable(itemId) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'Disable this item?',
        icon: 'warning',
        customClass: {
            popup: 'bg-body text-body'
        },
        showCancelButton: true,
        confirmButtonText: 'Yes, disable it!',
        cancelButtonText: 'Cancel',
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById(`disableForm-${itemId}`).submit();
        }
    });
}

function confirmDelete(itemId) {
    Swal.fire({
        title: 'Are you sure?',
        text: 'Permanently delete this item?',
        icon: 'warning',
        customClass: {
            popup: 'bg-body text-body'
        },
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'Cancel',
    }).then((result) => {
        if (result.isConfirmed) {
            document.getElementById(`deleteForm-${itemId}`).submit();
        }
    });
}

function enableZoomPan(img) {
    let scale = 1;
    let startDist = 0;
    let isDragging = false;
    let startX, startY;
    let translateX = 0,
        translateY = 0;
    function updateTransform() {
        img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
        img.style.transformOrigin = "center center";
    }
    function resetTransform() {
        scale = 1;
        translateX = 0;
        translateY = 0;
        updateTransform();
        img.style.cursor = "default";
    }
    img.addEventListener("dragstart", e => e.preventDefault());
    img.addEventListener("wheel", function (e) {
        e.preventDefault();
        scale += (e.deltaY < 0 ? 0.1 : -0.1);
        if (scale < 1) scale = 1;
        if (scale > 5) scale = 5;
        if (scale === 1) {
            translateX = 0;
            translateY = 0;
        }
        updateTransform();
    });
    img.addEventListener("touchstart", function (e) {
        if (e.touches.length === 2) {
            const dx = e.touches[0].pageX - e.touches[1].pageX;
            const dy = e.touches[0].pageY - e.touches[1].pageY;
            startDist = Math.sqrt(dx * dx + dy * dy);
        } else if (e.touches.length === 1 && scale > 1) {
            isDragging = true;
            startX = e.touches[0].pageX - translateX;
            startY = e.touches[0].pageY - translateY;
        }
    }, {
        passive: false
    });
    img.addEventListener("touchmove", function (e) {
        if (e.touches.length === 2) {
            e.preventDefault();
            const dx = e.touches[0].pageX - e.touches[1].pageX;
            const dy = e.touches[0].pageY - e.touches[1].pageY;
            const newDist = Math.sqrt(dx * dx + dy * dy);
            if (startDist) {
                let zoomFactor = newDist / startDist;
                scale = Math.min(Math.max(1, scale * zoomFactor), 5);
                if (scale === 1) {
                    translateX = 0;
                    translateY = 0;
                }
                updateTransform();
                startDist = newDist;
            }
        } else if (e.touches.length === 1 && isDragging && scale > 1) {
            e.preventDefault();
            translateX = e.touches[0].pageX - startX;
            translateY = e.touches[0].pageY - startY;
            updateTransform();
        }
    }, {
        passive: false
    });
    img.addEventListener("touchend", function () {
        isDragging = false;
    });
    img.addEventListener("mousedown", function (e) {
        e.preventDefault();
        if (scale > 1) {
            isDragging = true;
            startX = e.clientX - translateX;
            startY = e.clientY - translateY;
            img.style.cursor = "grabbing";
        }
    });
    window.addEventListener("mousemove", function (e) {
        e.preventDefault();
        if (!isDragging || scale <= 1) return;
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateTransform();
    });
    window.addEventListener("mouseup", function () {
        isDragging = false;
        img.style.cursor = "grab";
    });
    img.resetTransform = resetTransform;
}

document.addEventListener("DOMContentLoaded", () => {
    const buttonsWithLoading = document.querySelectorAll("button.btnloading");
    buttonsWithLoading.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const form = button.closest("form");
            const icon = button.querySelector("i");
            const text = button.querySelector("span");
            if (form && !form.checkValidity()) {
                form.reportValidity();
                return;
            }
            icon.classList.add("d-none");
            const spinner = document.createElement("span");
            spinner.className = "spinner-border spinner-border-sm";
            button.prepend(spinner);
            text.textContent = "Please wait";
            button.disabled = true;
            if (form) {
                form.submit();
            }
        });
    });

    const progressBar = document.querySelector("#progress-bar .progress-bar");
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = `${progress}%`;
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 200);
    window.addEventListener("load", () => {
        setTimeout(() => {
            const progressBarContainer = document.getElementById("progress-bar");
            if (progressBarContainer) {
                progressBarContainer.style.display = "none";
            }
        }, 300);
    });
    document.querySelectorAll('.modal.modal-img img').forEach(img => {
        enableZoomPan(img);
    });

    document.querySelectorAll('.modal.modal-img').forEach(modal => {
        modal.addEventListener('shown.bs.modal', function () {
            const body = modal.querySelector('.modal-body');
            if (body) body.classList.add('overflow-hidden');
            modal.querySelectorAll('img').forEach(img => {
                if (typeof img.resetTransform === "function") {
                    img.resetTransform();
                }
            });
            let alertBox = document.getElementById("zoomAlert");
            alertBox.classList.remove("d-none");
            setTimeout(() => {
                alertBox.classList.add("d-none");
            }, 3000);
        });
        modal.addEventListener('hidden.bs.modal', function () {
            modal.querySelectorAll('img').forEach(img => {
                if (typeof img.resetTransform === "function") {
                    img.resetTransform();
                }
            });
        });
    });

    document.addEventListener('click', function (e) {
        if (e.target.classList.contains('scroll-link')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            const stickyHeader = document.getElementById("stickyHeader");
            const headerHeight = stickyHeader ? stickyHeader.offsetHeight : 0;
            if (target) {
                const topPos = target.getBoundingClientRect().top + window.scrollY - headerHeight -
                    20;
                window.scrollTo({
                    top: topPos,
                    behavior: 'smooth'
                });
            }
        }
    });

    document.querySelectorAll(".open-popup").forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();
            const url = btn.getAttribute("data-url") || btn.getAttribute("href");
            if (url) {
                openCenteredWindow(url);
            }
        });
    });
});
