function translateInit() {
    // 1. Register global callback for Google Translate
    window.googleTranslateElementInit = function () {
        new google.translate.TranslateElement({
            pageLanguage: 'id',
            includedLanguages: 'en,ms,ar,ja,ko,zh-CN,zh-TW,fr,de',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false
        }, 'google_translate_element');
    };

    // 2. Helper to fix styling for elements and Google iframes
    function fixSkipTranslate(el) {
        if (!el) return;
        
        // Fix for the container DIV injected by Google
        if (el.tagName === "DIV" && el.classList?.contains("skiptranslate")) {
            el.style.setProperty("position", "relative", "important");
            el.style.setProperty("top", "auto", "important");
            el.style.setProperty("width", "100%", "important");
            el.style.setProperty("z-index", "auto", "important");
        }
        
        // Fix for the Google Translate widget IFRAME (might not have .skiptranslate)
        if (el.tagName === "IFRAME" && (el.classList?.contains("skiptranslate") || el.src?.includes("translate_a"))) {
            el.style.setProperty("position", "absolute", "important");
            el.style.setProperty("width", "100%", "important");
            el.style.setProperty("z-index", "9999", "important");
        }
    }

    // 3. Run MutationObserver to handle dynamically loaded elements
    const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            for (const node of mutation.addedNodes) {
                if (node.nodeType !== 1) continue;

                // Check the node itself
                fixSkipTranslate(node);

                // Check descendants
                node.querySelectorAll?.('.skiptranslate, iframe').forEach(fixSkipTranslate);
            }
        }
    });

    // Start observing early
    observer.observe(document.body || document.documentElement, { 
        childList: true, 
        subtree: true 
    });

    // Apply to existing elements
    document.querySelectorAll('.skiptranslate, iframe').forEach(fixSkipTranslate);

    // 4. Load external Google Translate script if missing
    if (!document.getElementById('google-translate-script')) {
        const gtScript = document.createElement('script');
        gtScript.id = 'google-translate-script';
        gtScript.async = true; // Ensure asynchronous loading
        gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        (document.body || document.head).appendChild(gtScript);
    }
}