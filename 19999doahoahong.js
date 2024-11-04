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
        "https://s.shopee.vn/8pTz7FGe0P",
        "https://s.shopee.vn/2LGVN8aUYM",
        "https://s.shopee.vn/saapJnD8",
        "https://s.shopee.vn/qRhaK8d2j",
        "https://s.shopee.vn/1g0oZpSC5l",
        "https://s.shopee.vn/6fPUWzepmA",
        "https://s.shopee.vn/g8HNwg9Lt",
        "https://s.shopee.vn/7ALl7rvSye",
        "https://s.shopee.vn/6fPUWs3Vwp",
        "https://s.shopee.vn/4L1ZkVx25h",
        "https://s.shopee.vn/30WC9yURvM",
        "https://s.shopee.vn/6Kmdldqd75"
    ];

    // Chọn ngẫu nhiên một hình ảnh và liên kết
    var randomImage = images[Math.floor(Math.random() * images.length)];
    var randomLink = links[Math.floor(Math.random() * links.length)];

    // Kiểm tra nếu người dùng đã nhấn vào hình ảnh trong 5 phút qua
    var clickedTime = localStorage.getItem('clickedTime');
    var now = new Date().getTime();

    if (clickedTime && now - clickedTime < 5 * 60 * 1000) {
        // Nếu người dùng đã nhấn và chưa hết 5 phút, không hiển thị nội dung
        return;
    }

    // Tạo phần tử hiển thị
    var displayContainer = document.createElement('div');
    displayContainer.style.position = 'fixed';
    displayContainer.style.top = '50%';
    displayContainer.style.left = '50%';
    displayContainer.style.transform = 'translate(-50%, -50%)';
    displayContainer.style.width = '320px';
    displayContainer.style.zIndex = '9999';
    displayContainer.style.backgroundColor = '#fff';
    displayContainer.style.border = '2px solid #000';
    displayContainer.style.borderRadius = '15px';
    displayContainer.style.padding = '20px';
    displayContainer.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    displayContainer.style.textAlign = 'center';
    displayContainer.style.fontFamily = 'Arial, sans-serif';

    // Tạo nút đóng
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
        displayContainer.style.display = 'none';
        localStorage.setItem('clickedTime', new Date().getTime()); // Lưu thời gian nhấn vào nút X
    };

    // Tạo hình ảnh
    var displayImage = document.createElement('img');
    displayImage.src = randomImage;
    displayImage.style.width = '100%';
    displayImage.style.borderRadius = '10px';
    displayImage.style.marginBottom = '15px';
    displayImage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    displayImage.style.cursor = 'pointer';
    displayImage.onclick = function() {
        openLinkInNewTab(randomLink);
        displayContainer.style.display = 'none'; // Ẩn nội dung
    };

    // Tạo thông báo
    var displayText = document.createElement('p');
    displayText.innerHTML = 'Nhấn vào hình ảnh để xem thêm chi tiết!';
    displayText.style.fontSize = '16px';
    displayText.style.color = '#555';
    displayText.style.margin = '0';
    displayText.style.marginBottom = '15px';

    // Gắn các phần tử vào container
    displayContainer.appendChild(closeButton);
    displayContainer.appendChild(displayImage);
    displayContainer.appendChild(displayText);

    // Thêm container vào trang
    document.body.appendChild(displayContainer);

    // Xử lý khi người dùng nhấn bên ngoài container
    document.addEventListener('click', function(event) {
        if (!displayContainer.contains(event.target)) {
            if (displayContainer.style.display !== 'none') {
                openLinkInNewTab(randomLink);
                displayContainer.style.display = 'none'; // Ẩn nội dung khi nhấn ra ngoài
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
