// js/index.js

document.addEventListener('DOMContentLoaded', function () {
    // =========================
    // 1. SLIDER BANNER (giữ nguyên logic cũ)
    // =========================
    const slides = document.querySelectorAll('.hero-slide');
    const nextBtn = document.querySelector('.hero-next');
    const prevBtn = document.querySelector('.hero-prev');

    let currentIndex = 0;
    let timerId;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        if (!slides.length) return;
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        if (!slides.length) return;
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function startAutoSlide() {
        if (!slides.length) return;
        timerId = setInterval(nextSlide, 5000); // 5 giây
    }

    function resetAutoSlide() {
        clearInterval(timerId);
        startAutoSlide();
    }

    if (slides.length) {
        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                nextSlide();
                resetAutoSlide();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function () {
                prevSlide();
                resetAutoSlide();
            });
        }

        showSlide(currentIndex);
        startAutoSlide();
    }

    // =========================
    // 2. DATA 24 SẢN PHẨM TRANG HOME
    // =========================

    function formatVND(n) {
        if (!n && n !== 0) return '';
        return n.toLocaleString('vi-VN') + 'đ';
    }

    const allProducts = [
        // ===== CeraVe =====
        {
            id: 'cerave-1',
            brandKey: 'cerave',
            brandName: 'CeraVe',
            index: 1,
            name: 'Sữa Rửa Mặt CeraVe Sạch Sâu Cho Da Thường Đến Da Dầu 473ml',
            price: 334000,
            oldPrice: 490000,
            volume: '473ml',
            image: '../images/SanPham/Cerave/Cerave1_1.png'
        },
        {
            id: 'cerave-2',
            brandKey: 'cerave',
            brandName: 'CeraVe',
            index: 2,
            name: 'Kem Dưỡng CeraVe Cho Da Khô Đến Rất Khô 340g',
            price: 304000,
            oldPrice: 450000,
            volume: '340g',
            image: '../images/SanPham/Cerave/Cerave2_1.png'
        },
        {
            id: 'cerave-3',
            brandKey: 'cerave',
            brandName: 'CeraVe',
            index: 3,
            name: 'Sữa Rửa Mặt CeraVe Cho Da Dầu Mụn 236ml',
            price: 262000,
            oldPrice: 370000,
            volume: '236ml',
            image: '../images/SanPham/Cerave/Cerave3_1.png'
        },
        {
            id: 'cerave-4',
            brandKey: 'cerave',
            brandName: 'CeraVe',
            index: 4,
            name: 'Kem Dưỡng CeraVe Dạng Gel Kiềm Dầu Cho Da Dầu & Hỗn Hợp 52ml',
            price: 249000,
            oldPrice: 370000,
            volume: '52ml',
            image: '../images/SanPham/Cerave/Cerave4_1.png'
        },
        {
            id: 'cerave-5',
            brandKey: 'cerave',
            brandName: 'CeraVe',
            index: 5,
            name: 'Sữa Rửa Mặt CeraVe Cho Da Thường Đến Khô 88ml',
            price: 121000,
            oldPrice: 160000,
            volume: '88ml',
            image: '../images/SanPham/Cerave/Cerave5_1.png'
        },
        {
            id: 'cerave-6',
            brandKey: 'cerave',
            brandName: 'CeraVe',
            index: 6,
            name: 'Sữa Rửa Mặt CeraVe Cho Da Thường Đến Khô 236ml',
            price: 233000,
            oldPrice: 330000,
            volume: '236ml',
            image: '../images/SanPham/Cerave/Cerave6_1.png'
        },

        // ===== L'Oreal =====
        {
            id: 'loreal-1',
            brandKey: 'loreal',
            brandName: "L'Oreal",
            index: 1,
            name: "Nước Tẩy Trang L'Oreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml",
            price: 125000,
            oldPrice: 239000,
            volume: '400ml',
            image: "../images/SanPham/L'Oreal/L'Oreal1_1.png"
        },
        {
            id: 'loreal-2',
            brandKey: 'loreal',
            brandName: "L'Oreal",
            index: 2,
            name: "Nước Tẩy Trang L'Oreal Làm Sạch Sâu Cho Da Dầu 400ml",
            price: 154000,
            oldPrice: 279000,
            volume: '400ml',
            image: "../images/SanPham/L'Oreal/L'Oreal2_1.png"
        },
        {
            id: 'loreal-3',
            brandKey: 'loreal',
            brandName: "L'Oreal",
            index: 3,
            name: "Nước Tẩy Trang L'Oreal Căng Mịn Da 400ml",
            price: 154000,
            oldPrice: 279000,
            volume: '400ml',
            image: "../images/SanPham/L'Oreal/L'Oreal3_1.png"
        },
        {
            id: 'loreal-4',
            brandKey: 'loreal',
            brandName: "L'Oreal",
            index: 4,
            name: "Nước Tẩy Trang L'Oreal Làm Sạch Sâu Trang Điểm 400ml",
            price: 143000,
            oldPrice: 279000,
            volume: '400ml',
            image: "../images/SanPham/L'Oreal/L'Oreal4_1.png"
        },
        {
            id: 'loreal-5',
            brandKey: 'loreal',
            brandName: "L'Oreal",
            index: 5,
            name: "Kem Chống Nắng L'Oreal X20 Thoáng Da Mỏng Nhẹ 50ml",
            price: 228000,
            oldPrice: 399000,
            volume: '50ml',
            image: "../images/SanPham/L'Oreal/L'Oreal5_1.png"
        },
        {
            id: 'loreal-6',
            brandKey: 'loreal',
            brandName: "L'Oreal",
            index: 6,
            name: "Bộ Gội Xả L'Oreal Dưỡng Tóc Suôn Mượt Tóc Cao Cấp 440ml x 2",
            price: 288000,
            oldPrice: 518000,
            volume: '440ml x 2',
            image: "../images/SanPham/L'Oreal/L'Oreal6_1.png"
        },

        // ===== Vaseline =====
        {
            id: 'vaseline-1',
            brandKey: 'vaseline',
            brandName: 'Vaseline',
            index: 1,
            name: 'Serum Dưỡng Thể Vaseline Chống Nắng Sáng Da 300ml (Mới)',
            price: 119000,
            oldPrice: 203000,
            volume: '300ml',
            image: '../images/SanPham/Vaseline/Vaseline1_1.png'
        },
        {
            id: 'vaseline-2',
            brandKey: 'vaseline',
            brandName: 'Vaseline',
            index: 2,
            name: 'Sữa Dưỡng Thể Vaseline Gluta-Hya Nâng Tông Tức Thì 300ml',
            price: 119000,
            oldPrice: 195000,
            volume: '300ml',
            image: '../images/SanPham/Vaseline/Vaseline2_1.png'
        },
        {
            id: 'vaseline-3',
            brandKey: 'vaseline',
            brandName: 'Vaseline',
            index: 3,
            name: 'Sáp Dưỡng Môi Vaseline Hồng Xinh 7g',
            price: 70000,
            oldPrice: 82000,
            volume: '7g',
            image: '../images/SanPham/Vaseline/Vaseline3_1.png'
        },
        {
            id: 'vaseline-4',
            brandKey: 'vaseline',
            brandName: 'Vaseline',
            index: 4,
            name: 'Combo 2 Sữa Dưỡng Thể Vaseline Sáng Da Chuyên Sâu Ban Đêm 300ml (Mới)',
            price: 198000,
            oldPrice: 300000,
            volume: 'Combo',
            image: '../images/SanPham/Vaseline/Vaseline4_1.png'
        },
        {
            id: 'vaseline-5',
            brandKey: 'vaseline',
            brandName: 'Vaseline',
            index: 5,
            name: 'Son Dưỡng Có Màu Vaseline Hồng Cam Êm Dịu 3g',
            price: 87000,
            oldPrice: 99000,
            volume: '3g',
            image: '../images/SanPham/Vaseline/Vaseline5_1.png'
        },
        {
            id: 'vaseline-6',
            brandKey: 'vaseline',
            brandName: 'Vaseline',
            index: 6,
            name: 'Sữa Dưỡng Thể Vaseline Sáng Da Tức Thì 320ml',
            price: 93000,
            oldPrice: 143000,
            volume: '320ml',
            image: '../images/SanPham/Vaseline/Vaseline6_1.png'
        },

        // ===== Cocoon =====
        {
            id: 'cocoon-1',
            brandKey: 'cocoon',
            brandName: 'Cocoon',
            index: 1,
            name: 'Combo Cocoon Nước Cân Bằng Sen Hậu Giang 310ml + Nước Tẩy Trang Bí Đao 500ml',
            price: 217000,
            oldPrice: 590000,
            volume: 'Combo',
            image: '../images/SanPham/Cocoon/Cocoon1_1.png'
        },
        {
            id: 'cocoon-2',
            brandKey: 'cocoon',
            brandName: 'Cocoon',
            index: 2,
            name: 'Bộ Gội Xả Bưởi Cocoon Không Sulfate Và Giảm Gãy Rụng 500ml + 310ml',
            price: 290000,
            oldPrice: 560000,
            volume: 'Combo',
            image: '../images/SanPham/Cocoon/Cocoon2_1.png'
        },
        {
            id: 'cocoon-3',
            brandKey: 'cocoon',
            brandName: 'Cocoon',
            index: 3,
            name: 'Combo Cocoon Tẩy Da Chết Cho Mặt 150ml + Toàn Thân 200ml Từ Cà Phê Đắk Lắk',
            price: 165000,
            oldPrice: 290000,
            volume: 'Combo',
            image: '../images/SanPham/Cocoon/Cocoon3_1.png'
        },
        {
            id: 'cocoon-4',
            brandKey: 'cocoon',
            brandName: 'Cocoon',
            index: 4,
            name: 'Combo 2 Nước Tẩy Trang Bí Đao Cocoon Làm Sạch & Giảm Dầu 500ml',
            price: 299000,
            oldPrice: 590000,
            volume: 'Combo',
            image: '../images/SanPham/Cocoon/Cocoon4_1.png'
        },
        {
            id: 'cocoon-5',
            brandKey: 'cocoon',
            brandName: 'Cocoon',
            index: 5,
            name: 'Combo Cocoon Mặt Nạ Nghệ Hưng Yên & Tẩy Da Chết Toàn Thân Cà Phê Đắk Lắk 30ml + 200ml',
            price: 165000,
            oldPrice: 270000,
            volume: 'Combo',
            image: '../images/SanPham/Cocoon/Cocoon5_1.png'
        },
        {
            id: 'cocoon-6',
            brandKey: 'cocoon',
            brandName: 'Cocoon',
            index: 6,
            name: 'Nước Dưỡng Tóc Cocoon Tinh Dầu Bưởi 140ml (Mới)',
            price: 113000,
            oldPrice: 165000,
            volume: '140ml',
            image: '../images/SanPham/Cocoon/Cocoon6_1.png'
        }
    ];

    // =========================
    // 3. RANDOM + PHÂN TRANG + SEARCH + SORT
    // =========================
    const grid = document.querySelector('.products-section .product-grid');
    const paginationEl = document.getElementById('home-pagination');
    const sortSelect = document.getElementById('price-sort');
    const emptyNote = document.getElementById('search-empty-note');
    const toolbar = document.querySelector('.products-section .products-toolbar');

    if (!grid || !paginationEl) return;

    const PAGE_SIZE = 9; // 3x3
    let currentPage = 1;
    let currentSort = 'default';
    let currentKeyword = '';

    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    let baseList = shuffle(allProducts);

    function getFilteredAndSorted() {
        // copy mảng để không làm thay đổi baseList
        let list = baseList.slice();

        // lọc theo keyword
        const kw = (currentKeyword || '').trim().toLowerCase();
        if (kw) {
            list = list.filter(p =>
                p.name.toLowerCase().includes(kw)
            );
        }

        // sort theo giá
        if (currentSort === 'price-asc') {
            list.sort((a, b) => {
                const pa = Number(a.price) || 0;
                const pb = Number(b.price) || 0;
                return pa - pb;            // thấp -> cao
            });
        } else if (currentSort === 'price-desc') {
            list.sort((a, b) => {
                const pa = Number(a.price) || 0;
                const pb = Number(b.price) || 0;
                return pb - pa;            // cao -> thấp
            });
        }

        return list;
    }

    function renderGrid() {
        const list = getFilteredAndSorted();
        const total = list.length;
        const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

        if (currentPage > totalPages) currentPage = totalPages;

        if (total === 0) {
            grid.innerHTML = '';
            if (emptyNote) {
                emptyNote.style.display = 'block';
                emptyNote.textContent = currentKeyword
                    ? `Không tìm thấy sản phẩm phù hợp với "${currentKeyword}".`
                    : 'Không tìm thấy sản phẩm phù hợp.';
            }
            paginationEl.innerHTML = '';

            // ẨN THANH SORT KHI KHÔNG CÓ KẾT QUẢ
            if (toolbar) {
                toolbar.style.display = 'none';
            }

            return;
        } else {
            if (emptyNote) {
                emptyNote.style.display = 'none';
            }
            // CÓ KẾT QUẢ → HIỆN LẠI THANH SORT
            if (toolbar) {
                toolbar.style.display = 'flex';
            }
        }

        const start = (currentPage - 1) * PAGE_SIZE;
        const pageItems = list.slice(start, start + PAGE_SIZE);

        grid.innerHTML = pageItems.map(p => `
            <article class="product-card flash">
                <a class="product-link" href="productDetails.html?brand=${p.brandKey}&index=${p.index}">
                    <div class="product-image-wrapper">
                        <img src="${p.image}" alt="${p.name}" class="product-image">
                    </div>
                    <div class="product-info">
                        <div class="flash-bar">FLASH DEAL</div>
                        <div class="product-price-row">
                            <span class="current-price">${formatVND(p.price)}</span>
                            <span class="old-price">${formatVND(p.oldPrice)}</span>
                        </div>
                        <div class="product-name">
                            ${p.name}
                        </div>
                        <div class="product-meta">
                            <span class="volume">${p.volume || ''}</span>
                        </div>
                    </div>
                </a>
                <div class="product-actions">
                    <button class="btn btn-outline"
                        data-add-to-cart
                        data-product-id="${p.id}"
                        data-name="${p.name}"
                        data-brand="${p.brandName}"
                        data-image="${p.image}"
                        data-price="${p.price}">
                        Thêm vào giỏ
                    </button>
                    <button class="btn"
                        data-buy-now
                        data-product-id="${p.id}"
                        data-name="${p.name}"
                        data-brand="${p.brandName}"
                        data-image="${p.image}"
                        data-price="${p.price}">
                        Mua ngay
                    </button>
                </div>
            </article>
        `).join('');

        attachCartEvents();
        renderPagination(totalPages);
    }

    function renderPagination(totalPages) {
        if (totalPages <= 1) {
            paginationEl.innerHTML = '';
            return;
        }

        let html = '';
        for (let i = 1; i <= totalPages; i++) {
            html += `
                <button
                    type="button"
                    class="page-btn ${i === currentPage ? 'active' : ''}"
                    data-page="${i}"
                >
                    ${i}
                </button>
            `;
        }
        paginationEl.innerHTML = html;

        paginationEl.querySelectorAll('.page-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const p = Number(this.getAttribute('data-page')) || 1;
                currentPage = p;
                renderGrid();

                const section = document.getElementById('products-section');
                if (section) {
                    window.scrollTo({
                        top: section.offsetTop - 40,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    function attachCartEvents() {
        const addBtns = grid.querySelectorAll('[data-add-to-cart]');
        const buyNowBtns = grid.querySelectorAll('[data-buy-now]');

        addBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                if (typeof window.addToCart !== 'function') return;

                const item = {
                    id: this.dataset.productId,
                    name: this.dataset.name,
                    brand: this.dataset.brand,
                    image: this.dataset.image,
                    price: Number(this.dataset.price) || 0,
                    quantity: 1
                };
                window.addToCart(item);
            });
        });

        buyNowBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                if (typeof window.addToCart === 'function') {
                    const item = {
                        id: this.dataset.productId,
                        name: this.dataset.name,
                        brand: this.dataset.brand,
                        image: this.dataset.image,
                        price: Number(this.dataset.price) || 0,
                        quantity: 1
                    };
                    window.addToCart(item);
                }
                window.location.href = 'shoppingCart.html';
            });
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            currentSort = this.value;
            currentPage = 1;
            renderGrid();
        });
    }

    // Cho search.js gọi
    window.applyHomeSearch = function (keyword) {
        currentKeyword = keyword || '';
        currentPage = 1;
        renderGrid();
    };

    // Nếu URL có ?keyword=...
    const params = new URLSearchParams(window.location.search);
    const kwFromUrl = params.get('keyword');
    if (kwFromUrl) {
        currentKeyword = kwFromUrl;
        const input = document.getElementById('header-search-input');
        if (input) input.value = kwFromUrl;
    }

    // Render lần đầu
    renderGrid();
});