function launchCloaked() {
    // 1. Retrieve customizable configurations
    const customTitle = document.getElementById('tabTitle').value || "Home";
    const customIcon = document.getElementById('tabIcon').value || "https://google.com";
    const targetUrl = document.getElementById('gameUrl').value;

    // 2. Open an untracked, blank window destination
    const cloakWindow = window.open('about:blank', '_blank');
    if (!cloakWindow) {
        alert("Pop-up blocked! Please allow pop-ups for this site to work properly.");
        return;
    }

    // 3. Inject core document structure into the about:blank window
    const doc = cloakWindow.document;
    doc.title = customTitle;

    // 4. Attach the customizable visual anchor (Favicon)
    const link = doc.createElement('link');
    link.rel = 'icon';
    link.type = 'image/x-icon';
    link.href = customIcon;
    doc.head.appendChild(link);

    // 5. Embed the game inside a full-screen stealth iframe
    const iframe = doc.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.bottom = '0';
    iframe.style.right = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.margin = '0';
    iframe.style.padding = '0';
    iframe.style.overflow = 'hidden';
    iframe.style.zIndex = '999999';
    iframe.src = targetUrl;
    doc.body.appendChild(iframe);

    // 6. Customizable History Cleaning execution
    cleanBrowsingTraces();
}

function cleanBrowsingTraces() {
    try {
        // Sanitize the current window session state
        if (window.history && window.history.replaceState) {
            window.history.replaceState({}, document.title, "/");
        }
        // Wipe local storage data strings if using dynamic frames
        localStorage.clear();
        sessionStorage.clear();
    } catch (e) {
        console.warn("History scrubbing restricted by security sandbox policies.");
    }
}
