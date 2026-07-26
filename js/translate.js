function translateInit() {
    // 1. Daftarkan callback global untuk Google Translate
    window.googleTranslateElementInit = function () {
        new google.translate.TranslateElement({
            pageLanguage: 'id',
            includedLanguages: 'en,ms,ar,ja,ko,zh-CN,zh-TW,fr,de',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
    };

    // 2. Helper untuk memperbaiki styling elemen .skiptranslate
    function fixSkipTranslate(el) {
        if (!el || !el.classList?.contains("skiptranslate")) return;
        if (el.tagName === "DIV") {
            el.style.setProperty("position", "relative", "important");
            el.style.setProperty("top", "auto", "important");
            el.style.setProperty("width", "100%", "important");
            el.style.setProperty("z-index", "auto", "important");
        }
        if (el.tagName === "IFRAME") {
            el.style.setProperty("position", "absolute", "important");
            el.style.setProperty("width", "100%", "important");
            el.style.setProperty("z-index", "9999", "important");
        }
    }

    // 3. Jalankan MutationObserver untuk menangani elemen dinamis
    const observer = new MutationObserver(muts => {
        muts.forEach(m => {
            m.addedNodes.forEach(node => {
                if (node.nodeType !== 1) return;
                if (node.classList?.contains("skiptranslate") || node.tagName === "IFRAME") {
                    fixSkipTranslate(node);
                }
                node.querySelectorAll?.('.skiptranslate, iframe.skiptranslate').forEach(fixSkipTranslate);
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    document.querySelectorAll('.skiptranslate, iframe.skiptranslate').forEach(fixSkipTranslate);

    // 4. Muat script eksternal Google Translate jika belum ada
    if (!document.getElementById('google-translate-script')) {
        const gtScript = document.createElement('script');
        gtScript.id = 'google-translate-script';
        gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(gtScript);
    }
}