(function() {
    // Danh sách hình ảnh và URL Shopee
    const images = [
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(1).jpeg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(1).jpg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(2).jpeg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(2).jpg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(3).jpg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%2093).jpg"
    ];

    const links = [
        "https://s.shopee.vn/rB5Ne1LU",
        "https://s.shopee.vn/9A5Q0FD2Qc",
        "https://s.shopee.vn/4Agk34RGki",
        "https://s.shopee.vn/608OEST1rS",
        "https://s.shopee.vn/8UpjD4IlRE",
        "https://s.shopee.vn/5fVXprtoM2"
    ];

    const AD_DISPLAY_INTERVAL = 20 * 60 * 1000; // 20 phút
    const adLastClosed = localStorage.getItem('adLastClosed');
    const currentTime = Date.now();

    // Kiểm tra nếu quảng cáo đã bị tắt gần đây
    if (adLastClosed && currentTime - adLastClosed < AD_DISPLAY_INTERVAL) {
        return;
    }

    // Chọn ngẫu nhiên hình ảnh và liên kết
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomLink = links[Math.floor(Math.random() * links.length)];

    // Tạo container chính cho quảng cáo
    const adContainer = document.createElement('div');
    Object.assign(adContainer.style, {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '320px',
        zIndex: '9999',
        backgroundColor: '#fff',
        borderRadius: '15px',
        padding: '20px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        opacity: '0',
        transform: 'translate(-50%, -50%) scale(0.95)'
    });

    // Tạo nút đóng quảng cáo
    const closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    Object.assign(closeButton.style, {
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '24px',
        color: '#888',
        cursor: 'pointer',
        transition: 'color 0.3s ease'
    });
    closeButton.onmouseover = () => closeButton.style.color = '#000';
    closeButton.onmouseout = () => closeButton.style.color = '#888';
    closeButton.onclick = () => {
        adContainer.style.opacity = '0';
        adContainer.style.transform = 'translate(-50%, -50%) scale(0.95)';
        setTimeout(() => {
            adContainer.style.display = 'none';
            localStorage.setItem('adLastClosed', Date.now());
        }, 300);
    };

    // Tạo hình ảnh quảng cáo
    const adImage = document.createElement('img');
    Object.assign(adImage.style, {
        width: '100%',
        borderRadius: '10px',
        marginBottom: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
        transition: 'transform 0.2s ease'
    });
    adImage.src = randomImage;
    adImage.onclick = () => window.open(randomLink, '_blank');
    adImage.onmouseover = () => adImage.style.transform = 'scale(1.05)';
    adImage.onmouseout = () => adImage.style.transform = 'scale(1)';

    // Tạo thông báo
    const adText = document.createElement('p');
    adText.innerHTML = 'Nhấn vào hình ảnh để ủng hộ AowVN ra game nha bạn yêu';
    Object.assign(adText.style, {
        fontSize: '16px',
        color: '#555',
        margin: '0',
        marginBottom: '15px'
    });

    // Gắn các phần tử vào container
    adContainer.appendChild(closeButton);
    adContainer.appendChild(adImage);
    adContainer.appendChild(adText);

    // Thêm container vào trang và hiển thị với animation
    document.body.appendChild(adContainer);
    setTimeout(() => {
        adContainer.style.opacity = '1';
        adContainer.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
})();
