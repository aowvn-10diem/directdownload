 class BannerPopup {
      constructor() {
        this.config = {
          displayDelay: 1000,
          fadeOutDuration: 500,
          cooldownPeriod: 3600000,
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

        this.createBannerElements();
        this.bindEvents();
      }

      createBannerElements() {
        this.container = document.createElement('div');
        this.container.id = 'banner-popup';
        
        this.wrapper = document.createElement('a');
        this.wrapper.id = 'banner-wrapper';
        this.wrapper.target = '_blank';
        
        this.image = document.createElement('img');
        this.image.id = 'banner-image';
        this.image.alt = 'Promotion Banner';
        
        this.closeButton = document.createElement('button');
        this.closeButton.id = 'banner-close';
        this.closeButton.innerHTML = '×';
        
        this.wrapper.appendChild(this.image);
        this.container.appendChild(this.wrapper);
        this.container.appendChild(this.closeButton);
        document.querySelector('.phone-content').appendChild(this.container);
      }

      bindEvents() {
        this.closeButton.addEventListener('click', (e) => {
          e.preventDefault();
          this.closeBanner();
        });

        this.image.addEventListener('load', () => {
          requestAnimationFrame(() => {
            this.container.classList.add('show');
          });
        });

        this.image.addEventListener('error', () => {
          console.error('Failed to load banner image');
          this.closeBanner();
        });

        this.initBanner();
      }

      initBanner() {
        const lastClosed = parseInt(localStorage.getItem('bannerClosed')) || 0;
        const now = Date.now();
        
        if (now - lastClosed < this.config.cooldownPeriod) {
          console.log('Banner in cooldown period');
          return;
        }

        const index = Math.floor(Math.random() * this.config.images.length);
        this.image.src = this.config.images[index];
        this.wrapper.href = this.config.links[index];

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

    // Khởi tạo banner khi trang load xong
    document.addEventListener('DOMContentLoaded', () => {
      try {
        window.bannerPopup = new BannerPopup();
      } catch (error) {
        console.error('Failed to initialize banner:', error);
      }
    });
