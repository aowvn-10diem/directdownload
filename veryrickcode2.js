(function() {
    // Danh sách hình ảnh
    var images = [
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(1).jpeg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(1).jpg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(2).jpeg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(2).jpg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(3).jpg",
        "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%2093).jpg"
    ];

    // Danh sách URL Shopee
    var links = [
        "https://s.shopee.vn/rB5Ne1LU",
        "https://s.shopee.vn/9A5Q0FD2Qc",
        "https://s.shopee.vn/4Agk34RGki",
        "https://s.shopee.vn/608OEST1rS",
        "https://s.shopee.vn/8UpjD4IlRE",
        "https://s.shopee.vn/5fVXprtoM2",
        "https://s.shopee.vn/3AoG0eu4oP",
        "https://s.shopee.vn/sQ70avRw",
        "https://s.shopee.vn/4L1PH3io7a",
        "https://s.shopee.vn/1B4NVHTjYI",
        "https://s.shopee.vn/qRX6gqb5x",
        "https://s.shopee.vn/6KmTevWpMJ",
        "https://s.shopee.vn/4feFfvStWQ"
    ];

    // Chọn ngẫu nhiên một hình ảnh và liên kết
    var randomImage = images[Math.floor(Math.random() * images.length)];
    var randomLink = links[Math.floor(Math.random() * links.length)];

    // Kiểm tra nếu người dùng đã nhấn vào quảng cáo trong 5 phút qua
    var adClickedTime = localStorage.getItem('adClickedTime');
    var now = new Date().getTime();

    if (adClickedTime && now - adClickedTime < 5 * 60 * 1000) {
        // Nếu người dùng đã nhấn và chưa hết 5 phút, không hiển thị quảng cáo
        return;
    }

    // Tạo phần tử chứa quảng cáo
    var adContainer = document.createElement('div');
    adContainer.style.position = 'fixed';
    adContainer.style.top = '50%';
    adContainer.style.left = '50%';
    adContainer.style.transform = 'translate(-50%, -50%)';
    adContainer.style.width = '320px';
    adContainer.style.zIndex = '9999';
    adContainer.style.backgroundColor = '#fff';
    adContainer.style.border = '2px solid #000';
    adContainer.style.borderRadius = '15px';
    adContainer.style.padding = '20px';
    adContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    adContainer.style.textAlign = 'center';
    adContainer.style.fontFamily = 'Arial, sans-serif';

    // Tạo nút đóng quảng cáo
    var closeButton = document.createElement('span');
    closeButton.innerHTML = '&times;';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.fontSize = '24px';
    closeButton.style.color = '#888';
    closeButton.style.cursor = 'pointer';
    closeButton.style.transition = 'color 0.3s ease';
    closeButton.onmouseover = function() {
        closeButton.style.color = '#000';
    };
    closeButton.onmouseout = function() {
        closeButton.style.color = '#888';
    };
    closeButton.onclick = function() {
        adContainer.style.display = 'none';
        localStorage.setItem('adClickedTime', new Date().getTime()); // Lưu thời gian nhấn vào nút X
    };

    // Tạo hình ảnh quảng cáo
    var adImage = document.createElement('img');
    adImage.src = randomImage;
    adImage.style.width = '100%';
    adImage.style.borderRadius = '10px';
    adImage.style.marginBottom = '15px';
    adImage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    adImage.style.cursor = 'pointer';
    adImage.onclick = function() {
        openLinkInNewTab(randomLink);
        adContainer.style.display = 'none'; // Ẩn quảng cáo
    };

    // Tạo thông báo
    var adText = document.createElement('p');
    adText.innerHTML = 'Nhấn nhào hình ảnh nhể ủng hộ chúng mình nhé!';
    adText.style.fontSize = '16px';
    adText.style.color = '#555';
    adText.style.margin = '0';
    adText.style.marginBottom = '15px';

    // Gắn các phần tử vào container
    adContainer.appendChild(closeButton);
    adContainer.appendChild(adImage);
    adContainer.appendChild(adText);

    // Thêm container vào trang
    document.body.appendChild(adContainer);

    // Xử lý khi người dùng nhấn bên ngoài quảng cáo
    document.addEventListener('click', function(event) {
        if (!adContainer.contains(event.target)) {
            if (adContainer.style.display !== 'none') {
                openLinkInNewTab(randomLink);
                adContainer.style.display = 'none'; // Ẩn quảng cáo khi nhấn ra ngoài
            }
        }
    });

    // Hàm mở liên kết trong tab mới với thuộc tính rel
    function openLinkInNewTab(link) {
        var linkElement = document.createElement('a');
        linkElement.href = link;
        linkElement.target = '_blank';
        linkElement.rel = 'noopener noreferrer nofollow';
        linkElement.click();
    }

})();