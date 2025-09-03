(function () {
    const targetUrls = [
        "https://s.shopee.vn/2Vi2L1XGzO",
        "https://s.shopee.vn/2LOc8iXuKN",
        "https://s.shopee.vn/BK7Yjg9iy",
        "https://s.shopee.vn/10hMQgn3x",
        "https://s.shopee.vn/VwxxLet34",
        "https://s.shopee.vn/LdXl2fWO3",
        "https://s.shopee.vn/qZoLxdcNA",
        "https://s.shopee.vn/gGO9eeFi9",
        "https://s.shopee.vn/1BCekZcLhG",
        "https://s.shopee.vn/10tEYGcz2F",
        "https://s.shopee.vn/4AqGK5Qvbs",
        "https://s.shopee.vn/40Wq7mRYwr",
        "https://s.shopee.vn/4VT6ihPevy",
        "https://s.shopee.vn/4L9gWOQIGx",
        "https://s.shopee.vn/4q5x7JOOG4",
        "https://s.shopee.vn/4fmWv0P1b3",
        "https://s.shopee.vn/5AinVvN7aA",
        "https://s.shopee.vn/50PNJcNkv9",
        "https://s.shopee.vn/2qKsjdW0Jk",
        "https://s.shopee.vn/2g1SXKWdej"
    ];

    const images = [
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(1).jpeg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(1).jpg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(2).jpeg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(2).jpg"
    ];

    const delayMinutes = 2;
    const storageKey = 'bannerClosedTime';

    const lastClosed = localStorage.getItem(storageKey);
    const now = Date.now();
    if (lastClosed && now - parseInt(lastClosed, 10) < delayMinutes * 60 * 1000) {
        return;
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomLink = targetUrls[Math.floor(Math.random() * targetUrls.length)];

    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.top = '50%';
    banner.style.left = '50%';
    banner.style.transform = 'translate(-50%, -50%)';
    banner.style.zIndex = '9999';
    banner.style.width = '300px';
    banner.style.height = '200px';
    banner.style.background = '#fff';
    banner.style.border = '3px solid #000';
    banner.style.borderRadius = '10px';
    banner.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    banner.style.cursor = 'pointer';
    banner.style.overflow = 'hidden';

    const img = document.createElement('img');
    img.src = randomImage;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.display = 'block';

    const close = document.createElement('span');
    close.innerHTML = '&times;';
    close.style.position = 'absolute';
    close.style.top = '5px';
    close.style.right = '10px';
    close.style.fontSize = '24px';
    close.style.color = '#888';
    close.style.cursor = 'pointer';
    close.style.zIndex = '10000';

    banner.appendChild(img);
    banner.appendChild(close);
    document.body.appendChild(banner);

    let bannerClosed = false;

    document.addEventListener('click', function (event) {
        if (!banner.contains(event.target) && !bannerClosed) {
            const linkElement = document.createElement('a');
            linkElement.href = randomLink;
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer nofollow';
            linkElement.click();
            banner.remove();
            bannerClosed = true;
        }
    });

    close.addEventListener('click', function (e) {
        e.stopPropagation();
        localStorage.setItem(storageKey, Date.now().toString());
        banner.remove();
        bannerClosed = true;
    });
})();