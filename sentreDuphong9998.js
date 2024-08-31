(function() {
    // Danh sách tên miền bị loại trừ
    const excludedDomains = ['aowvn.org', 'aowvn.us', 'umu.pink'];
    const currentDomain = window.location.hostname;

    // Kiểm tra xem tên miền hiện tại có nằm trong danh sách bị loại trừ không
    if (excludedDomains.some(domain => currentDomain.includes(domain))) return;

    // Danh sách hình ảnh
    const images = [
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(1).jpeg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(1).jpg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(2).jpeg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(2).jpg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(3).jpg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%2093).jpg"
    ];

    // Danh sách URL Shopee
    const links = [
        "https://s.shopee.vn/rB5Ne1LU",
        "https://s.shopee.vn/9A5Q0FD2Qc",
        "https://s.shopee.vn/4Agk34RGki",
        "https://s.shopee.vn/608OEST1rS",
        "https://s.shopee.vn/8UpjD4IlRE",
        "https://s.shopee.vn/5fVXprtoM2",
        "https://s.shopee.vn/3AoG0eu4oP"
    ];

    // Chọn ngẫu nhiên một hình ảnh và liên kết
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const randomLink = links[Math.floor(Math.random() * links.length)];

    // Hàm tạo container quảng cáo
    function createAdContainer(redirectLink) {
        const adContainer = document.createElement('div');
        Object.assign(adContainer.style, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '340px',
            zIndex: '9999',
            background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
            border: '2px solid rgba(0, 0, 0, 0.2)',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            animation: 'pulse 2s infinite'
        });

        // Tạo hình ảnh quảng cáo
        const adImage = document.createElement('img');
        adImage.src = randomImage;
        Object.assign(adImage.style, {
            width: '100%',
            borderRadius: '15px',
            marginBottom: '20px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer'
        });
        adImage.onclick = function() {
            window.open(randomLink, '_blank');
            adContainer.style.display = 'none';
            window.location.href = redirectLink;
        };

        // Tạo thông báo cho người dùng
        const adText = document.createElement('p');
        adText.textContent = 'Nhấn nhào nhình nhảnh nhể nhiếp nhục nhải nhề nha';
        Object.assign(adText.style, {
            fontSize: '18px',
            color: '#333',
            margin: '0',
            marginBottom: '15px',
            fontWeight: 'bold'
        });

        adContainer.appendChild(adImage);
        adContainer.appendChild(adText);
        document.body.appendChild(adContainer);

        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes pulse {
                0% {
                    transform: scale(1);
                }
                50% {
                    transform: scale(1.05);
                }
                100% {
                    transform: scale(1);
                }
            }
            div[style*="display: none"] { display: block !important; visibility: visible !important; }
        `;
        document.head.appendChild(style);
    }

    // Thêm sự kiện click vào tất cả các link
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            createAdContainer(event.target.href);
        });
    });
})();
