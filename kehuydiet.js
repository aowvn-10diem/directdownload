(function() {
    // Kiểm tra nếu tên miền nằm trong danh sách bị loại trừ
    const excludedDomains = ['aowvn.org', 'aowvn.us', 'umu.pink'];
    const currentDomain = window.location.hostname;

    if (excludedDomains.some(domain => currentDomain.includes(domain))) {
        return;
    }

    // Danh sách hình ảnh và URL Shopee
    const images = [
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(1).jpeg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(1).jpg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(2).jpeg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(2).jpg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(3).jpg"
    ];

    const links = [
        "https://s.shopee.vn/rB5Ne1LU",
        "https://s.shopee.vn/9A5Q0FD2Qc",
        "https://s.shopee.vn/4Agk34RGki",
        "https://s.shopee.vn/608OEST1rS",
        "https://s.shopee.vn/8UpjD4IlRE",
        "https://s.shopee.vn/5fVXprtoM2",
        "https://s.shopee.vn/3AoG0eu4oP"
    ];

    // Tạo container hiển thị thông tin
    function createPopupContainer(targetLink) {
        const container = document.createElement('div');
        Object.assign(container.style, {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(0)',
            opacity: '0',
            width: '320px',
            zIndex: '99999',
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '20px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
            fontFamily: 'Arial, sans-serif',
            transition: 'all 0.4s ease'
        });

        // Tạo phần tử hình ảnh
        const img = document.createElement('img');
        img.src = images[Math.floor(Math.random() * images.length)];
        Object.assign(img.style, {
            width: '100%',
            borderRadius: '10px',
            cursor: 'pointer',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
            marginBottom: '15px'
        });

        img.onclick = function() {
            window.open(links[Math.floor(Math.random() * links.length)], '_blank');
            container.style.display = 'none';
            window.location.href = targetLink;
        };

        // Tạo phần tử lời nhắn
        const message = document.createElement('p');
        message.textContent = 'Nhấn nhào nhình nhảnh nhể nhiếp nhục nhải nhề nha';
        Object.assign(message.style, {
            fontSize: '16px',
            color: '#333',
            margin: '0',
            marginBottom: '15px',
            fontWeight: 'bold'
        });

        // Thêm vào container
        container.appendChild(img);
        container.appendChild(message);
        document.body.appendChild(container);

        // Hiệu ứng hiển thị mượt mà
        setTimeout(() => {
            container.style.transform = 'translate(-50%, -50%) scale(1)';
            container.style.opacity = '1';
        }, 100);
    }

    // Lắng nghe sự kiện nhấn vào mọi liên kết
    document.addEventListener('click', function(event) {
        const target = event.target.closest('a'); // Kiểm tra nếu phần tử là liên kết

        if (target && target.href && !excludedDomains.some(domain => target.href.includes(domain))) {
            event.preventDefault(); // Ngăn chuyển hướng ngay lập tức
            createPopupContainer(target.href); // Hiển thị popup và chuyển hướng sau đó
        }
    });

    // Bảo vệ container khỏi bị ẩn bởi các công cụ chặn quảng cáo
    const style = document.createElement('style');
    style.innerHTML = `
        div[style*="display: none"] { display: block !important; visibility: visible !important; }
        img:hover { transform: scale(1.05); transition: transform 0.3s ease-in-out; }
    `;
    document.head.appendChild(style);
})();
