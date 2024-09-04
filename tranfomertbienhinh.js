(function() {
    const excludedDomains = ['aowvn.org', 'umu.pink', 'aowvn.us'];
    const shopeeLinks = [
        'https://s.shopee.vn/rB5Ne1LU',
        'https://s.shopee.vn/9A5Q0FD2Qc',
        'https://s.shopee.vn/4Agk34RGki',
        'https://s.shopee.vn/608OEST1rS',
        'https://s.shopee.vn/8UpjD4IlRE',
        'https://s.shopee.vn/5fVXprtoM2'
    ];

    // CSS để tạo thông báo và các nút bấm
    const styles = `
        #aowvn-notice {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        #aowvn-notice-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            max-width: 90%;
        }
        .aowvn-button {
            padding: 10px 20px;
            margin: 10px;
            border: none;
            border-radius: 5px;
            color: white;
            cursor: pointer;
            font-size: 16px;
        }
        .red { background-color: #e74c3c; }
        .blue { background-color: #3498db; }
        .green { background-color: #2ecc71; }
        .orange { background-color: #e67e22; }
        .aowvn-button:hover {
            opacity: 0.8;
        }
    `;

    // Thêm CSS vào trang
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // HTML của thông báo
    const noticeHTML = `
        <div id="aowvn-notice">
            <div id="aowvn-notice-content">
                <p>Nhấn vào nút bất kì để ủng hộ AowVN, thông báo sẽ tự ẩn sau khi bạn truy cập mua hàng</p>
                <button class="aowvn-button red" onclick="redirectToShopee()">Ủng hộ ngay</button>
            </div>
        </div>
    `;

    // Chèn HTML vào cuối trang
    const div = document.createElement('div');
    div.innerHTML = noticeHTML;
    document.body.appendChild(div.firstChild);

    const notice = document.getElementById('aowvn-notice');

    // Chức năng chuyển hướng ngẫu nhiên
    function redirectToShopee() {
        const randomLink = shopeeLinks[Math.floor(Math.random() * shopeeLinks.length)];
        window.open(randomLink, '_blank'); // Mở link trong tab mới
        notice.style.display = 'none'; // Ẩn thông báo trên tab hiện tại
    }

    // Xử lý sự kiện khi nhấn vào liên kết
    document.addEventListener('click', function(event) {
        const target = event.target.closest('a');
        if (target) {
            const url = new URL(target.href);
            if (!excludedDomains.includes(url.hostname)) {
                event.preventDefault(); // Ngăn chặn hành động mặc định
                notice.style.display = 'flex'; // Hiển thị thông báo
            }
        }
    });

    // Xuất hàm ra toàn cục
    window.redirectToShopee = redirectToShopee;
})();
