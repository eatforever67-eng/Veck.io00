function executeStealthLaunch() {
    const customTitle = document.getElementById('tabTitle').value || "Google";
    const customIcon = document.getElementById('tabIcon').value || "https://google.com";
    
    // 1. Encrypted backup gaming mirrors (Scrambled so web filters don't read them)
    // aHR0cHM6Ly9ub3dnZy5sb2wvZ2FtZXMvcm9ibG94Lmh0bWw= is nowgg.lol/games/roblox.html
    const fallbackBase64 = "aHR0cHM6Ly9ub3dnZy5sb2wvZ2FtZXMvcm9ibG94Lmh0bWw="; 
    const gameUrl = atob(fallbackBase64);

    // 2. Direct user click interaction bypasses browser security blocks
    const win = window.open();
    if (!win) {
        alert("Click the pop-up icon in your URL bar and click 'Allow' to let the game open!");
        return;
    }

    // 3. Clear history footprint out of the launcher hub
    if (window.history && window.history.replaceState) {
        window.history.replaceState({}, document.title, "/");
    }
    localStorage.clear();
    sessionStorage.clear();

    // 4. Construct the hidden structural environment
    const doc = win.document;
    doc.title = customTitle;

    const link = doc.createElement('link');
    link.rel = 'icon';
    link.href = customIcon;
    doc.head.appendChild(link);

    // 5. Inject full-screen responsive frame
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
    
    iframe.src = gameUrl;
    doc.body.appendChild(iframe);
}
