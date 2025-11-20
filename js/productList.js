// js/productList.js

document.addEventListener('DOMContentLoaded', function () {
    // Tên hãng hiển thị
    const brandLabels = {
        cerave: "CeraVe",
        loreal: "L'Oréal",
        vaseline: "Vaseline",
        cocoon: "Cocoon"
    };

    // DATA 6 sp / brand (giống productDetails + home)
    const productsByBrand = {
        cerave: [
            {
                id: "cerave-1",
                name: "Sữa Rửa Mặt CeraVe Sạch Sâu Cho Da Thường Đến Da Dầu 473ml",
                image: "../images/SanPham/Cerave/Cerave1_1.png",
                price: 334000,
                oldPrice: 490000,
                volume: "473ml",
                rating: "★ 4.8"
            },
            {
                id: "cerave-2",
                name: "Kem Dưỡng CeraVe Cho Da Khô Đến Rất Khô 340g",
                image: "../images/SanPham/Cerave/Cerave2_1.png",
                price: 304000,
                oldPrice: 450000,
                volume: "340g",
                rating: "★ 4.9"
            },
            {
                id: "cerave-3",
                name: "Sữa Rửa Mặt CeraVe Cho Da Dầu Mụn 236ml",
                image: "../images/SanPham/Cerave/Cerave3_1.png",
                price: 262000,
                oldPrice: 370000,
                volume: "236ml",
                rating: "★ 5.0"
            },
            {
                id: "cerave-4",
                name: "Kem Dưỡng CeraVe Dạng Gel Kiềm Dầu Cho Da Dầu & Hỗn Hợp 52ml",
                image: "../images/SanPham/Cerave/Cerave4_1.png",
                price: 249000,
                oldPrice: 370000,
                volume: "52ml",
                rating: "★ 4.8"
            },
            {
                id: "cerave-5",
                name: "Sữa Rửa Mặt CeraVe Cho Da Thường Đến Khô 88ml",
                image: "../images/SanPham/Cerave/Cerave5_1.png",
                price: 121000,
                oldPrice: 160000,
                volume: "88ml",
                rating: "★ 4.7"
            },
            {
                id: "cerave-6",
                name: "Sữa Rửa Mặt CeraVe Cho Da Thường Đến Khô 236ml",
                image: "../images/SanPham/Cerave/Cerave6_1.png",
                price: 233000,
                oldPrice: 330000,
                volume: "236ml",
                rating: "★ 4.9"
            }
        ],
        loreal: [
            {
                id: "loreal-1",
                name: "Nước Tẩy Trang L'Oreal Tươi Mát Cho Da Dầu, Hỗn Hợp 400ml",
                image: "../images/SanPham/L'Oreal/L'Oreal1_1.png",
                price: 125000,
                oldPrice: 239000,
                volume: "400ml",
                rating: "★ 4.7"
            },
            {
                id: "loreal-2",
                name: "Nước Tẩy Trang L'Oreal Làm Sạch Sâu Cho Da Dầu 400ml",
                image: "../images/SanPham/L'Oreal/L'Oreal2_1.png",
                price: 154000,
                oldPrice: 279000,
                volume: "400ml",
                rating: "★ 4.8"
            },
            {
                id: "loreal-3",
                name: "Nước Tẩy Trang L'Oreal Căng Mịn Da 400ml",
                image: "../images/SanPham/L'Oreal/L'Oreal3_1.png",
                price: 154000,
                oldPrice: 279000,
                volume: "400ml",
                rating: "★ 4.9"
            },
            {
                id: "loreal-4",
                name: "Nước Tẩy Trang L'Oreal Làm Sạch Sâu Trang Điểm 400ml",
                image: "../images/SanPham/L'Oreal/L'Oreal4_1.png",
                price: 143000,
                oldPrice: 279000,
                volume: "400ml",
                rating: "★ 4.8"
            },
            {
                id: "loreal-5",
                name: "Kem Chống Nắng L'Oreal X20 Thoáng Da Mỏng Nhẹ 50ml",
                image: "../images/SanPham/L'Oreal/L'Oreal5_1.png",
                price: 228000,
                oldPrice: 399000,
                volume: "50ml",
                rating: "★ 4.9"
            },
            {
                id: "loreal-6",
                name: "Bộ Gội Xả L'Oreal Dưỡng Tóc Suôn Mượt Cao Cấp 440ml x 2",
                image: "../images/SanPham/L'Oreal/L'Oreal6_1.png",
                price: 288000,
                oldPrice: 518000,
                volume: "Bộ 2 chai 440ml",
                rating: "★ 4.8"
            }
        ],
        vaseline: [
            {
                id: "vaseline-1",
                name: "Serum Dưỡng Thể Vaseline Chống Nắng Sáng Da 300ml (Mới)",
                image: "../images/SanPham/Vaseline/Vaseline1_1.png",
                price: 119000,
                oldPrice: 203000,
                volume: "300ml",
                rating: "★ 4.7"
            },
            {
                id: "vaseline-2",
                name: "Sữa Dưỡng Thể Vaseline Gluta-Hya Nâng Tông Tức Thì 300ml",
                image: "../images/SanPham/Vaseline/Vaseline2_1.png",
                price: 119000,
                oldPrice: 195000,
                volume: "300ml",
                rating: "★ 4.8"
            },
            {
                id: "vaseline-3",
                name: "Sáp Dưỡng Môi Vaseline Hồng Xinh 7g",
                image: "../images/SanPham/Vaseline/Vaseline3_1.png",
                price: 70000,
                oldPrice: 82000,
                volume: "7g",
                rating: "★ 5.0"
            },
            {
                id: "vaseline-4",
                name: "Combo 2 Sữa Dưỡng Thể Vaseline Sáng Da Chuyên Sâu Ban Đêm 300ml (Mới)",
                image: "../images/SanPham/Vaseline/Vaseline4_1.png",
                price: 198000,
                oldPrice: 300000,
                volume: "Combo 2 chai 300ml",
                rating: "★ 4.8"
            },
            {
                id: "vaseline-5",
                name: "Son Dưỡng Có Màu Vaseline Hồng Cam Êm Dịu 3g",
                image: "../images/SanPham/Vaseline/Vaseline5_1.png",
                price: 87000,
                oldPrice: 99000,
                volume: "3g",
                rating: "★ 4.9"
            },
            {
                id: "vaseline-6",
                name: "Sữa Dưỡng Thể Vaseline Sáng Da Tức Thì 320ml",
                image: "../images/SanPham/Vaseline/Vaseline6_1.png",
                price: 93000,
                oldPrice: 143000,
                volume: "320ml",
                rating: "★ 4.8"
            }
        ],
        cocoon: [
            {
                id: "cocoon-1",
                name: "Combo Cocoon Nước Cân Bằng Sen Hậu Giang 310ml + Nước Tẩy Trang Bí Đao 500ml",
                image: "../images/SanPham/Cocoon/Cocoon1_1.png",
                price: 217000,
                oldPrice: 590000,
                volume: "Combo 2 sản phẩm",
                rating: "★ 4.9"
            },
            {
                id: "cocoon-2",
                name: "Bộ Gội Xả Bưởi Cocoon Không Sulfate Và Giảm Gãy Rụng 500ml + 310ml",
                image: "../images/SanPham/Cocoon/Cocoon2_1.png",
                price: 290000,
                oldPrice: 560000,
                volume: "Combo gội xả",
                rating: "★ 4.8"
            },
            {
                id: "cocoon-3",
                name: "Combo Cocoon Tẩy Da Chết Cho Mặt 150ml + Toàn Thân 200ml Từ Cà Phê Đắk Lắk",
                image: "../images/SanPham/Cocoon/Cocoon3_1.png",
                price: 165000,
                oldPrice: 290000,
                volume: "Combo tẩy da chết",
                rating: "★ 5.0"
            },
            {
                id: "cocoon-4",
                name: "Combo 2 Nước Tẩy Trang Bí Đao Cocoon Làm Sạch & Giảm Dầu 500ml",
                image: "../images/SanPham/Cocoon/Cocoon4_1.png",
                price: 299000,
                oldPrice: 590000,
                volume: "Combo 2 chai 500ml",
                rating: "★ 4.9"
            },
            {
                id: "cocoon-5",
                name: "Combo Cocoon Mặt Nạ Nghệ Hưng Yên & Tẩy Da Chết Toàn Thân Cà Phê Đắk Lắk 30ml + 200ml",
                image: "../images/SanPham/Cocoon/Cocoon5_1.png",
                price: 165000,
                oldPrice: 270000,
                volume: "Combo",
                rating: "★ 4.8"
            },
            {
                id: "cocoon-6",
                name: "Nước Dưỡng Tóc Cocoon Tinh Dầu Bưởi 140ml (Mới)",
                image: "../images/SanPham/Cocoon/Cocoon6_1.png",
                price: 113000,
                oldPrice: 165000,
                volume: "140ml",
                rating: "★ 4.9"
            }
        ]
    };

    const brandCards = document.querySelectorAll('.brand-card');
    const productsContainer = document.getElementById('brand-products');
    const titleEl = document.getElementById('brand-title');
    const subtitleEl = document.getElementById('brand-subtitle');

    function formatVND(n) {
        return n.toLocaleString("vi-VN") + "đ";
    }

    // Render card giống y chang HOME
    function renderBrand(brandKey) {
        const list = productsByBrand[brandKey] || [];
        const brandName = brandLabels[brandKey] || "";

        productsContainer.innerHTML = list.map((p, index) => {
            const detailUrl = `productDetails.html?brand=${brandKey}&index=${index + 1}`;
            return `
                <article class="product-card flash">
                    <a class="product-link" href="${detailUrl}">
                        <div class="product-image-wrapper">
                            <img src="${p.image}" alt="${p.name}" class="product-image">
                        </div>
                        <div class="product-info">
                            <div class="flash-bar">FLASH DEAL</div>
                            <div class="product-price-row">
                                <span class="current-price">${formatVND(p.price)}</span>
                                <span class="old-price">${formatVND(p.oldPrice)}</span>
                            </div>
                            <div class="product-name">${p.name}</div>
                            <div class="product-meta">
                                <span class="rating">${p.rating}</span>
                                <span>|</span>
                                <span class="volume">${p.volume}</span>
                            </div>
                        </div>
                    </a>
                    <div class="product-actions">
                        <button class="btn btn-outline"
                            data-add-to-cart
                            data-product-id="${p.id}"
                            data-name="${p.name}"
                            data-brand="${brandName}"
                            data-image="${p.image}"
                            data-price="${p.price}">
                            Thêm vào giỏ
                        </button>
                        <button class="btn"
                            data-buy-now
                            data-product-id="${p.id}"
                            data-name="${p.name}"
                            data-brand="${brandName}"
                            data-image="${p.image}"
                            data-price="${p.price}">
                            Mua ngay
                        </button>
                    </div>
                </article>
            `;
        }).join('');
    }

    function setActiveBrandCard(brandKey) {
        brandCards.forEach(card => {
            if (card.dataset.brand === brandKey) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    function updateTitle(brandKey) {
        const label = brandLabels[brandKey] || "";
        titleEl.textContent = `Sản phẩm của ${label}`;
        subtitleEl.textContent = `Các sản phẩm nổi bật của ${label}`;
    }

    // Click vào logo brand
    brandCards.forEach(card => {
        card.addEventListener('click', () => {
            const brandKey = card.dataset.brand;
            if (!productsByBrand[brandKey]) return;
            setActiveBrandCard(brandKey);
            updateTitle(brandKey);
            renderBrand(brandKey);
        });
    });

    // Load brand từ query ?brand=... hoặc mặc định cerave
    (function init() {
        const params = new URLSearchParams(window.location.search);
        let brandKey = params.get('brand') || 'cerave';
        if (!productsByBrand[brandKey]) brandKey = 'cerave';

        setActiveBrandCard(brandKey);
        updateTitle(brandKey);
        renderBrand(brandKey);
    })();
});
