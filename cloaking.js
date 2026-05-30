function launchCloaked() {
    const customTitle = document.getElementById('tabTitle').value || "Classes";
    const customIcon = document.getElementById('tabIcon').value || "https://gstatic.com";
    const targetUrl = document.getElementById('gameUrl').value;

    // 1. Launch a completely fresh, detached window context
    const cloakWindow = window.open('about:blank', '_blank');
    if (!cloakWindow) {
        alert("Please enable pop-ups to bypass the firewall!");
        return;
    }

    // 2. Clear history tokens from your host page immediately
    if (window.history && window.history.replaceState) {
        window.history.replaceState({}, document.title, "/");
    }
    localStorage.clear();
    sessionStorage.clear();

    // 3. Inject title and favicon into the target document
    const doc = cloakWindow.document;
    doc.title = customTitle;

    const link = doc.createElement('link');
    link.rel = 'icon';
    link.href = customIcon;
    doc.head.appendChild(link);

    // 4. Directly redirect the window location rather than framing it
    // This avoids the 'X-Frame-Options' connection refusal entirely.
    cloakWindow.location.href = targetUrl;
}
