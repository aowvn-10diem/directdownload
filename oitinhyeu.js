class BannerPopup {
    constructor() {
      // Cấu hình banner
      this.config = {
        displayDelay: 1000,
        fadeOutDuration: 500,
        cooldownPeriod: 3600000, // 1 giờ
        images: [
          "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(1).jpeg",
          "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(1).jpg",
          "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(2).jpeg",
          "https://cdn.statically.io/gh/aowvn-10diem/directdownload/main/aowvn-banner%20(2).jpg"
        ],
        links: [
          "https://s.shopee.vn/5Ag7sx3tEn",
          "https://s.shopee.vn/4fjrI25nFi",
          "https://s.shopee.vn/4q3HUL59ul",
          "https://s.shopee.vn/4L70tQ73vg"
        ]
      };

      // Khởi tạo style
      this.injectStyles();
      
      // Khởi tạo DOM
      this.createBannerElements();
      
      // Bind events
      this.bindEvents();
    }

    injectStyles() {
      const styles = `
        #banner-popup {
          display: none;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 999999;
          max-width: 95vw;
          opacity: 0;
          will-change: transform, opacity;
          transition: opacity 0.3s ease-out, transform 0.3s ease-out;
        }

        #banner-popup.show {
          display: block;
          opacity: 1;
        }

        #banner-popup.fade-out {
          opacity: 0;
          transform: translate(-50%, -60%);
        }

        #banner-wrapper {
          display: inline-block;
          padding: 4px;
          border-radius: 12px;
          background: linear-gradient(90deg, 
            #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0000ff, #8000ff, #ff0000
          );
          background-size: 800% 100%;
          transition: transform 0.3s ease;
          width: 100%;
        }

        #banner-wrapper:hover {
          animation: rainbow 8s linear infinite;
          transform: scale(1.02);
        }

        #banner-image {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }

        #banner-close {
          position: absolute;
          top: -15px;
          right: -15px;
          width: 30px;
          height: 30px;
          background: #fff;
          border: none;
          border-radius: 50%;
          color: #333;
          font-size: 20px;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          z-index: 1000000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        #banner-close:hover {
          transform: scale(1.1);
        }

        @keyframes rainbow {
          0% { background-position: 0% 50%; }
          100% { background-position: 800% 50%; }
        }

        @media screen and (max-width: 768px) {
          #banner-popup {
            max-width: 98vw;
          }
          
          #banner-wrapper {
            padding: 3px;
            border-radius: 8px;
          }
          
          #banner-image {
            border-radius: 6px;
          }
          
          #banner-close {
            top: -12px;
            right: -12px;
            width: 26px;
            height: 26px;
            font-size: 18px;
          }
        }
      `;

      const styleSheet = document.createElement('style');
      styleSheet.textContent = styles;
      document.head.appendChild(styleSheet);
    }

    createBannerElements() {
      // Container
      this.container = document.createElement('div');
      this.container.id = 'banner-popup';

      // Wrapper với hiệu ứng rainbow
      this.wrapper = document.createElement('a');
      this.wrapper.id = 'banner-wrapper';
      this.wrapper.target = '_blank';

      // Image
      this.image = document.createElement('img');
      this.image.id = 'banner-image';
      this.image.alt = 'Promotion Banner';

      // Close button
      this.closeButton = document.createElement('button');
      this.closeButton.id = 'banner-close';
      this.closeButton.innerHTML = '×';

      // Lắp ráp các phần tử
      this.wrapper.appendChild(this.image);
      this.container.appendChild(this.wrapper);
      this.container.appendChild(this.closeButton);
      document.body.appendChild(this.container);
    }

    bindEvents() {
      // Xử lý đóng banner
      this.closeButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeBanner();
      });

      // Xử lý load ảnh
      this.image.addEventListener('load', () => {
        requestAnimationFrame(() => {
          this.container.classList.add('show');
        });
      });

      // Xử lý lỗi load ảnh
      this.image.addEventListener('error', () => {
        console.error('Failed to load banner image');
        this.closeBanner();
      });

      // Show banner sau khi page load
      if (document.readyState === 'complete') {
        this.initBanner();
      } else {
        window.addEventListener('load', () => this.initBanner());
      }
    }

    initBanner() {
      // Kiểm tra cooldown
      const lastClosed = parseInt(localStorage.getItem('bannerClosed')) || 0;
      const now = Date.now();
      
      if (now - lastClosed < this.config.cooldownPeriod) {
        return;
      }

      // Random banner content
      const index = Math.floor(Math.random() * this.config.images.length);
      this.image.src = this.config.images[index];
      this.wrapper.href = this.config.links[index % this.config.links.length];

      // Show banner sau delay
      setTimeout(() => {
        this.container.style.display = 'block';
      }, this.config.displayDelay);
    }

    closeBanner() {
      this.container.classList.add('fade-out');
      this.container.classList.remove('show');
      
      localStorage.setItem('bannerClosed', Date.now().toString());
      
      setTimeout(() => {
        this.container.style.display = 'none';
        this.container.classList.remove('fade-out');
      }, this.config.fadeOutDuration);
    }
}

// Khởi tạo banner
document.addEventListener('DOMContentLoaded', () => {
  try {
    window.bannerPopup = new BannerPopup();
  } catch (error) {
    console.error('Failed to initialize banner:', error);
  }
});
