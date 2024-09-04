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
        "https://s.shopee.vn/3AoG0eu4oP"
    ];

    // Chọn ngẫu nhiên một hình ảnh và liên kết
    var randomImage = images[Math.floor(Math.random() * images.length)];
    var randomLink = links[Math.floor(Math.random() * links.length)];

    // Kiểm tra nếu người dùng đã nhấn vào liên kết trong 3 phút qua
    var clickedTime = localStorage.getItem('clickedTime');
    var now = new Date().getTime();

    if (clickedTime && now - clickedTime < 3 * 60 * 1000) {
        // Nếu người dùng đã nhấn và chưa hết 3 phút, không hiển thị lại
        return;
    }

    // Tạo phần tử chứa nội dung
    var container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    container.style.zIndex = '9999';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';

    // Tạo hình ảnh trung tâm
    var image = document.createElement('img');
    image.src = randomImage;
    image.style.maxWidth = '80%';
    image.style.maxHeight = '80%';
    image.style.borderRadius = '15px';
    image.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
    image.style.cursor = 'pointer';
    image.onclick = function() {
        window.open(randomLink, '_blank');
        container.style.display = 'none'; // Ẩn đi sau khi nhấn
        localStorage.setItem('clickedTime', new Date().getTime()); // Lưu thời gian nhấn
        setTimeout(function() {
            container.style.display = 'block'; // Hiển thị lại sau 3 phút
        }, 3 * 60 * 1000); // 3 phút
    };

    // Tạo thông báo bên dưới hình ảnh
    var text = document.createElement('p');
    text.innerHTML = 'Nhấn vào hình ảnh để tiếp tục và ủng hộ AowVN!';
    text.style.fontSize = '24px';
    text.style.color = '#fff';
    text.style.textAlign = 'center';
    text.style.marginTop = '20px';

    // Tạo div chứa hình ảnh và thông báo
    var content = document.createElement('div');
    content.style.textAlign = 'center';
    content.appendChild(image);
    content.appendChild(text);

    // Gắn các phần tử vào container
    container.appendChild(content);

    // Thêm container vào trang
    document.body.appendChild(container);
})();
