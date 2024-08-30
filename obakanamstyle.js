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
        "https://s.shopee.vn/5fVXprtoM2"
    ];

    // Chọn ngẫu nhiên một hình ảnh và liên kết
    var randomImage = images[Math.floor(Math.random() * images.length)];
    var randomLink = links[Math.floor(Math.random() * links.length)];

    // Tạo phần tử chứa quảng cáo
    var adContainer = document.createElement('div');
    adContainer.style.position = 'fixed';
    adContainer.style.bottom = '20px';
    adContainer.style.right = '20px';
    adContainer.style.width = '300px';
    adContainer.style.zIndex = '9999';
    adContainer.style.backgroundColor = 'white';
    adContainer.style.border = '1px solid #ccc';
    adContainer.style.padding = '10px';
    adContainer.style.textAlign = 'center';

    // Tạo nút đóng quảng cáo
    var closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px';
    closeButton.style.right = '5px';
    closeButton.style.background = 'none';
    closeButton.style.border = 'none';
    closeButton.style.fontSize = '16px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = function() {
        adContainer.style.display = 'none';
    };

    // Tạo hình ảnh quảng cáo
    var adImage = document.createElement('img');
    adImage.src = randomImage;
    adImage.style.maxWidth = '100%';
    adImage.style.cursor = 'pointer';
    adImage.onclick = function() {
        window.open(randomLink, '_blank');
    };

    // Tạo thông báo
    var adText = document.createElement('p');
    adText.innerHTML = 'Nhấn vào hình ảnh để ủng hộ AowVN ra game nha bạn yêu';

    // Gắn các phần tử vào container
    adContainer.appendChild(adText);
    adContainer.appendChild(adImage);
    adContainer.appendChild(closeButton);

    // Thêm container vào trang
    document.body.appendChild(adContainer);
})();
